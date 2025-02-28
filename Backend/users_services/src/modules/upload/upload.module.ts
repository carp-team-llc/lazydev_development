
import { UploadController } from "@controllers/upload/upload.controller";
import express from "express";

const router = express.Router();
const auth = new UploadController();

router.post("/upload-image", async (req, res) => {
  await auth.UploadFile(req, res);
})

export default router;