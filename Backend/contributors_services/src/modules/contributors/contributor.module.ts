import { ContributorController } from "@controllers/contributors/contributo.controller";
import express from "express";

const router = express.Router();
const github = new ContributorController();

router.post("/islinked", async (req, res) => {
  await github.isLinkedGithubController(req, res);
});

export default router;
