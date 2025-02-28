import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connections/db.connections";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type loginParam = {
  password: string;
  username?: string;
  email?: string;
};

const loginService = async ({ username, email, password }: loginParam) => {
  try {
    const missing: string[] = [];
    if (!username && !email) missing.push("username of email");
    if (!password) missing.push("password");
    if (missing.length > 0) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: `Missing required fields: ${missing.join(", ")}`,
        data: null,
      };
    }

    const user = await prisma.user.findUnique({
      where: username ? { username } : { email },
    });

    if (!user) {
      return { statusCode: 400, message: "User not found!" };
    }
    if (!user.isVerify) {
      return {
        statusCode: 401,
        message: "Please verify account before login!",
        data: null,
      };
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return {
        statusCode: 401,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Password is incorrect!",
        data: null,
      };
    }
    if (!process.env.SECRECT) {
      return {
        statusCode: 500,
        resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
        message: errorCode.INTERNAL_SERVER_ERROR.message,
        data: null,
      };
    }

    const token = await jwt.sign(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        isVerify: user.isVerify,
      },
      process.env.SECRECT,
      { expiresIn: "200d" }
    );

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Login successful!",
      data: {
        id: user.id,
        token: token,
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

export default loginService;
