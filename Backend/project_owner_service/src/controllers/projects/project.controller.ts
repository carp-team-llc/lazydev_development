import { errorCode } from "@enums/response.enum";
import { addRepo, createProject } from "@services/projects/project.service";
import type { Request, Response } from "express";
import seassion from 'express-session';

export class ProjectController {
  async createProjectController(req: Request, res: Response) {
    const { name, logo, introduce, description, social } = req.body;
    const token = req.headers.authorization
      ?.split(" ")[1]
      .replace("Bearer ", "");

    if (!token) {
      return res.status(404).json({
        statusCode: errorCode.MISSING_AUTHENTICATION.statusCode,
        resCode: errorCode.MISSING_AUTHENTICATION.resCode,
        message: errorCode.MISSING_AUTHENTICATION.message,
        data: null,
      });
    }

    const result = await createProject(
      {
        name,
        logo,
        introduce,
        description,
        social,
      },
      token
    );

    return res.status(result.statusCode).json(result);
  }

  async addRepo(req: Request, res: Response) {
    const { userId, projectId } = req.body;

    if (!userId || !projectId) {
      return res.status(400).json({ message: "Missing userId or projectId" });
    }

    const result = await addRepo(userId as string, projectId as string, req.session);

    if (!result.data) {
      return res.status(404).json({
        message: "Not found!"
      })
    }

    res.redirect(result.data.githubAppUrl);

    // return res.status(result.statusCode).json(result);
  }
}
