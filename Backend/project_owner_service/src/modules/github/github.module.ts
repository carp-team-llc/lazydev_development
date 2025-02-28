
import { GithubController } from "@controllers/github/webhook.controller";
import { verifySignature } from "@utils/middleware/verifySignature.middleware";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const githubController = new GithubController();

router.post("/webhook", express.json({ verify: verifySignature }), async (req, res) => {
  await githubController.handleWebhookController(req, res);
})

router.get("/cannot", async (req, res) => {
  res.json({
    message: "Delete app!"
  })
})

export default router;