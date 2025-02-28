
import { GithubController } from "@controllers/github/github.controller";
import express from "express";

const router = express.Router();
const github = new GithubController();

router.get("/auth/callback", async (req, res) => {
  await github.callBackController(req, res);
})

export default router;