import handleWebhook from "@services/github/webhook.service";
import { Request, Response } from "express";

export class GithubController {
  async handleWebhookController (req: Request, res: Response) {
    const event = req.headers["x-github-event"] as string;
    const payload = req.body;

    const result = await handleWebhook(event, payload);
    if (!result) {
      return res.status(500).json({
        statusCode: 500,
        resCode: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error!",
        data: null,
      })
    }
    res.status(result.statusCode).json(result)
  }
}