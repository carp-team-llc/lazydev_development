import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connections/db.connections";

import crypto from "crypto";
import bcrypt from "bcrypt";
import moment from "moment-timezone";
import SendMailService from "@utils/configs/mail/mail.service";
import { VerificationMailForm } from "@enums/mail.form";

export interface verifyParam {
  email: string;
  verificationToken: string;
  verificationCreatedAt: string;
  verificationExpires: string;
}

const resendVerification = async (email: string) => {
  try {
    const findUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        username: true,
      },
    });

    if (!findUser) {
      return {
        statusCode: errorCode.NOT_FOUND.statusCode,
        resCode: "NOT_FOUND",
        message: "User not found!",
        data: null,
      };
    }

    const verificationToken = await crypto.randomBytes(20).toString("hex"); // generate verification token
    const verificationCreatedAt = moment().toISOString();
    const verificationExpires = moment().add(15, "minutes").toISOString();

    const verificationUrl = `${process.env.LOCALHOST}:${process.env.PORT}/api/auth/verify?token=${verificationToken}&email=${email}&createdAt=${verificationCreatedAt}&expires=${verificationExpires}`;
    await SendMailService({
      to: email,
      subject: "Verify account - Lazy Dev",
      html: VerificationMailForm(verificationUrl, findUser.username),
    });

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Resend account verification email successfully!",
      data: {},
    };
  } catch {
    return {
      statusCode: errorCode.INTERNAL_SERVER_ERROR.statusCode,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

const verificationService = async ({
  email,
  verificationToken,
  verificationCreatedAt,
  verificationExpires,
}: verifyParam) => {
  try {
    if (
      !email ||
      !verificationToken ||
      !verificationCreatedAt ||
      !verificationExpires
    ) {
      return {
        statusCode: errorCode.INVALID_AUTHENTICATION.statusCode,
        resCode: "INVALID_VERIFICATION_INFOMATION",
        message: "Verification infomation invalid!",
        data: null,
      };
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      return {
        statusCode: errorCode.NOT_FOUND.statusCode,
        resCode: "NOT_FOUND",
        message: "User not found!",
        data: null,
      };
    }

    if (user.isVerify) {
      return {
        statusCode: errorCode.CONFLICT.statusCode,
        resCode: "CONFLICT",
        message: "Account is already verified!",
        data: null,
      };
    }

    const now = new Date().getTime();
    const userExpires = user.verificationExpires?.getTime();
    const inputExpires = new Date(verificationExpires).getTime();
    if (userExpires && now > userExpires) {
      return {
        statusCode: errorCode.TOKEN_EXPIRED.statusCode,
        resCode: errorCode.TOKEN_EXPIRED.resCode,
        message: "Verification token has expired!",
        data: null,
      };
    }

    const isMatch =
      user.verificationToken === verificationToken &&
      user.verificationCreatedAt?.getTime() ===
        new Date(verificationCreatedAt).getTime() &&
      userExpires === inputExpires;
    if (!isMatch) {
      return {
        statusCode: errorCode.INVALID_AUTHENTICATION.statusCode,
        resCode: "VERIFICATION_MISMATCH",
        message: "Verification information does not match!",
        data: null,
      };
    }

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        isVerify: true,
      },
    });

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Account verified successfully!",
      data: {
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    };
  } catch (err) {
    return {
      statusCode: errorCode.INTERNAL_SERVER_ERROR.statusCode,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export { verificationService, resendVerification };
