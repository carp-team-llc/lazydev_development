import { UploadFileToCloud } from "@services/upload/upload.service";
import { Response } from "express";
import { MulterRequest } from "types/type";

export class UploadController {
  async UploadFile(req: MulterRequest, res: Response) {
    try {
      const file = req.file;
      const uploadResult = await UploadFileToCloud(file);
      return res.status(uploadResult.statusCode).json({
        message: uploadResult.message,
        data: uploadResult.data
      })
    } catch (err) {
      console.error(err)
      return res.status(500).json({message: "Internal server error!"})
    }
  }
}