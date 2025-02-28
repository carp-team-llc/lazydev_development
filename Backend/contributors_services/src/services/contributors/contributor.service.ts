import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connection/db.connection";

import jwt from "jsonwebtoken";

const checkGithubLinkStatus = async (token: string) => {
  try {
    if (!token) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: errorCode.BAD_REQUEST.message,
        data: null,
      };
    }

    const secretKey = process.env.SECRECT || "";
    const verifyToken:any = jwt.verify(token, secretKey);
    const userId = verifyToken.id;

    const isGithubLinked = await prisma.contributors.findFirst({
      where: { userId },
      select: {
        isLinked: true,
      },
    });

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Account verified successfully!",
      data: {
        userId,
        isLinked: isGithubLinked?.isLinked,
      },
    };
  } catch (err) {
    console.log("errr =====> ", err);
    return {
      statusCode: errorCode.INTERNAL_SERVER_ERROR.statusCode,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export { checkGithubLinkStatus };