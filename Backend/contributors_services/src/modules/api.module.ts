import bodyParser from "body-parser";
import cors from "cors";
import moment from "moment-timezone";
import express, { Request, Response, NextFunction } from "express";

import githubModule from "@modules/github/github.module"
import contributorModule from "@modules/contributors/contributor.module";

const api = express.Router();

export function getClientIp(req: Request) {
  const ip = (req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress) as string;
  if (ip.includes("::ffff:")) {
    return ip.split("::ffff:")[1];
  }
  return ip;
}

const ApiModule = (app: express.Application) => {
  app.set("json space", 2);
  app.use(cors());
  app.use(bodyParser.json());
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Allow all origins (CORS policy)
    res.setHeader("Access-Control-Allow-Origin", "*");

    // Allow specific HTTP methods
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );

    // Allow specific headers in requests
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // Get client IP address
    const ip = getClientIp(req);

    // Get current time in Vietnam timezone
    const now = moment().tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD HH:mm:ss");

    // Log request details
    console.log(
      `[${now}] - User IP: ${ip} - [${req.method}] - Endpoint: ${req.originalUrl}`
    );

    // Proceed to the next middleware
    next();
  });
  app.use("/api", api);

  api.use("/github", githubModule)
  api.use("/contributor", contributorModule)

  api.get("/ping", (req, res) => {
    res.json({ message: "yeyeyeyeye pong" });
  });
};

export default ApiModule;