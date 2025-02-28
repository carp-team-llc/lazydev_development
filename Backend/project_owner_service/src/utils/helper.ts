import { errorCode } from "@enums/response.enum";
import jwt from 'jsonwebtoken';

const helper = {
  checkEnvVariable (variable: string) {
    if (!variable) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Bad request",
        data: null,
      };
    }
  },

  async verifyAuthToken (token: string) {
    if (!token) {
      return {
        statusCode: errorCode.MISSING_AUTHENTICATION.statusCode,
        resCode: errorCode.MISSING_AUTHENTICATION.resCode,
        message: errorCode.MISSING_AUTHENTICATION.message,
        data: null,
      }
    }
    const secretKey = process.env.SECRECT || "";
    const tokenVerified = await jwt.verify(token, secretKey);
    return tokenVerified;
  }
}

export default helper;