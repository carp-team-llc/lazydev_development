import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const privateKeyPath = path.join(__dirname, "../../lazydev-development.2025-02-25.private-key.pem");
const PRIVATE_KEYS = fs.readFileSync(privateKeyPath, "utf-8");

function generateGithubJWT() {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 600,
    iss: process.env.APP_ID
  };

  return jwt.sign(payload, PRIVATE_KEYS, { algorithm: "RS256" });
}

export default generateGithubJWT;