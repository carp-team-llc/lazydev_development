
import { ProfileController } from "@controllers/profile/profile.controller";
import express from "express";

const router = express.Router();
const auth = new ProfileController();

router.post("/create-profile", async (req, res) => {
  await auth.createProfileController(req, res);
})
router.post("/show-profile", async (req, res) => {
  await auth.showProfileController(req, res);
})

export default router;