import { errorCode } from "@enums/response.enum";
import { createHmac } from "crypto";
import { Request, Response } from "express";

export function verifySignature (
  req: Request,
  res: Response,
  buf: any,
  encoding: BufferEncoding
) {
  const signature = req.headers["x-hub-signature-256"]; // get signature from request
  if (!signature) {
    return res.json(errorCode.BAD_REQUEST.statusCode).json({
      statusCode: errorCode.BAD_REQUEST.statusCode,
      resCode: errorCode.BAD_REQUEST.resCode,
      message: `Error processing this!`,
      data: null,
    });
  }

  // create hmac sha256 from buf
  const WEBHOOK_SECRET = process.env.APP_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) {
    return res.json(errorCode.BAD_REQUEST.statusCode).json({
      statusCode: errorCode.BAD_REQUEST.statusCode,
      resCode: errorCode.BAD_REQUEST.resCode,
      message: `Error processing this!`,
      data: null,
    });
  }
  const hmac = createHmac("sha256", WEBHOOK_SECRET); // craete hmac with sha-256 and webhook secret
  hmac.update(buf, encoding); // update hmac with buf and encoding
  const expectedSignature = `sha256=${hmac.digest("hex")}`; // true signature

  // check signature from request and signature by hmac
  if (signature !== expectedSignature) {
    return res.json(errorCode.BAD_REQUEST.statusCode).json({
      statusCode: errorCode.BAD_REQUEST.statusCode,
      resCode: errorCode.BAD_REQUEST.resCode,
      message: `Invalid signature!`,
      data: null,
    });
  }
};
