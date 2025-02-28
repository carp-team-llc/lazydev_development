import { errorCode } from "@enums/response.enum";
import loginService from "@services/auth/login.service";
import registerService from "@services/auth/register.service";
import {
  resendVerification,
  verificationService,
} from "@services/auth/verification.service";
import { Request, Response } from "express";

type verifyParam = {
  email: string;
  token: string;
  createdAt: string;
  expires: string;
};

export class AuthController {
  async Test(req: Request, res: Response) {
    console.log("Test log!");
    res.json({ message: "Test successful!" });
  }

  async RegisterController(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const result = await registerService({
        email,
        username,
        password,
      });
      res.status(result.statusCode).json({
        message: result.message,
        resCode: result.resCode,
        data: result.data,
      });
    } catch (error) {
      res.status(errorCode.BAD_REQUEST.statusCode).json({
        resCode: errorCode.BAD_REQUEST.resCode,
        message: errorCode.BAD_REQUEST.message,
        data: null,
      });
    }
  }

  async LoginController(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;
      const result = await loginService({
        username,
        email,
        password,
      });
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(errorCode.BAD_REQUEST.statusCode).json({
        resCode: errorCode.BAD_REQUEST.resCode,
        message: errorCode.BAD_REQUEST.message,
        data: null,
      });
    }
  }

  async resendVerificationController(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const result = await resendVerification(email);
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(errorCode.BAD_REQUEST.statusCode).json({
        resCode: errorCode.BAD_REQUEST.resCode,
        message: errorCode.BAD_REQUEST.message,
        data: null,
      });
    }
  }

  async VerificationController(req: Request, res: Response) {
    try {
      const { email, token, createdAt, expires } =
        req.query as Partial<verifyParam>;
      if (!email || !token || !createdAt || !expires) {
        throw new Error("Missing required query parameters.");
      }
      console.log(createdAt);
      const result = await verificationService({
        email: email,
        verificationToken: token,
        verificationCreatedAt: createdAt,
        verificationExpires: expires,
      });
      res.status(result.statusCode).json(result);
    } catch (error) {
      res.status(errorCode.BAD_REQUEST.statusCode).json({
        resCode: errorCode.BAD_REQUEST.resCode,
        message: errorCode.BAD_REQUEST.message,
        data: null,
      });
    }
  }
}
