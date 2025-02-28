import { checkGithubLinkStatus } from "@services/contributors/contributor.service";
import { Request, Response } from "express";

export class ContributorController {
  async isLinkedGithubController(req: Request, res: Response) {
    const token = req.headers.authorization
      ?.split(" ")[1]
      .replace("Bearer ", "") || "";
    const result = await checkGithubLinkStatus(token);
    return res.status(result.statusCode).json(result);
  }
}
