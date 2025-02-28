import { createProfile, showProfile } from "@services/profile/profile.service";
import { Request, Response } from "express";

export class ProfileController {
  async showProfileController(req: Request, res: Response) {
    const token =
      req.headers.authorization?.split(" ")[1].replace("Bearer ", "") || "";
    const result = await showProfile(token);
    res.status(result.statusCode).json(result);
  }

  async createProfileController(req: Request, res: Response) {
    const token =
      req.headers.authorization?.split(" ")[1].replace("Bearer ", "") || "";
    const {
      name,
      description,
      avatar,
      gender,
      dob,
      social,
      friends,
      following,
    } = req.body;
    const result = await createProfile({
      name,
      description,
      avatar,
      gender,
      dob,
      social,
      friends,
      following,
    }, token);
    res.status(result.statusCode).json(result);
  }
}
