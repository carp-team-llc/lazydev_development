
import express from "express";

import { AuthController } from "@controllers/auth/auth.controller";

const router = express.Router();
const auth = new AuthController();

router.get("/test", async (req, res) => {
  await auth.Test(req, res);
})
router.get("/verify", async (req, res) => {
  await auth.VerificationController(req, res);
})

router.post("/register", async (req, res) => {
  await auth.RegisterController(req, res);
})
router.post("/login", async (req, res) => {
  await auth.LoginController(req, res);
})
router.post("/resend-verification", async (req, res) => {
  await auth.resendVerificationController(req, res);
})

export default router;