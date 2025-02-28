import crypto from "crypto";
import bcrypt from "bcrypt";
import moment from "moment-timezone";
import prisma from "@utils/connections/db.connections";
import { VerificationMailForm } from "@enums/mail.form";
import { KafkaClient } from "@utils/kafka/kafka.client";
import { errorCode, successCode } from "@enums/response.enum";
import SendMailService from "@utils/configs/mail/mail.service";

type registerParams = {
  email: string;
  username: string;
  password: string;
};

const clientId = process.env.CLIENT_ID || `service-${"default"}-${Date.now()}`;
const producer = KafkaClient(clientId).producer();

const registerService = async ({
  email,
  username,
  password,
}: registerParams) => {
  try {
    await producer.connect();

    if (!username || !email || !password) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message:
          "Information is not complete, please enter complete information before trying again!",
        data: null,
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Invalid email format. Please enter a valid email!",
        data: null,
      };
    }

    const isUserAlreadyExits = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });
    if (isUserAlreadyExits) {
      return {
        statusCode: errorCode.CONFLICT.statusCode,
        resCode: errorCode.CONFLICT.resCode,
        message: "User already exists!",
        data: null,
      };
    }
    const verificationToken = await crypto.randomBytes(20).toString("hex"); // generate verification token
    const verificationCreatedAt = moment().toISOString();
    const verificationExpires = moment().add(15, "minutes").toISOString();

    const hashedPassword = await bcrypt.hash(password, 10); // generate hashed password
    const register = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        verificationToken: verificationToken.toString(),
        verificationCreatedAt,
        verificationExpires,
      },
    });

    await producer.send({
      topic: "create-user",
      messages: [
        {
          value: JSON.stringify({
            event: "create-user",
            data: { userId: register.id, username: register.username },
          }),
        },
      ],
    });

    await producer.disconnect();

    // Created verification url to verify account
    const verificationUrl = `${process.env.LOCALHOST}:${process.env.PORT}/api/auth/verify?token=${verificationToken}&email=${email}&createdAt=${verificationCreatedAt}&expires=${verificationExpires}`;

    await SendMailService({
      to: email,
      subject: "Verify account - Lazy Dev",
      html: VerificationMailForm(verificationUrl, username),
    });

    return {
      statusCode: successCode.CREATED.statusCode,
      resCode: successCode.CREATED.resCode,
      message: "User registered successfully!",
      data: {
        id: register.id,
        username: register.username,
        email: register.email,
        createdAt: register.createdAt,
        updatedAt: register.updatedAt,
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export default registerService;