import handleCallback from "@services/github/callBack.service";
import express, { Request, Response } from "express";

type callbackParams = {
  code: string;
  state: string;
}

export class GithubController {
  async callBackController (req: Request, res: Response) {
    // state mean userId of platform
    const { code, state } = req.query as Partial<callbackParams>;
    if (!code || !state) {
      throw new Error("Missing required query parameters.");
    }
    const result = await handleCallback(code, state);
    res.status(result?.statusCode).json(result);
  }
}