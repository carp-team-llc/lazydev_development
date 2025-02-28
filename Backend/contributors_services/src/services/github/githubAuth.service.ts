import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connection/db.connection";
import axios from "axios";
import fs from "fs";
import jwt from "jsonwebtoken";
import { KafkaClient } from "@utils/kafka/client/kafka.client";

type githubInfo = {
  id: string;
  login: string;
};

function generateGithubJWT() {
  const PRIVATE_KEYS = fs.readFileSync(
    "../../../lazy-dev-development.2025-02-13.private-key.pem",
    "utf-8"
  );
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 600,
    iss: process.env.APP_ID,
  };

  return jwt.sign(payload, PRIVATE_KEYS, { algorithm: "RS256" });
}

const clientId = process.env.CLIENT_ID || `service-${"default"}-${Date.now()}`;
const producer = KafkaClient(clientId).producer();

const getUserInfo = async (userId: string, accessToken: string) => {
  try {
    if (!userId || !accessToken) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Error processing this!",
        data: null,
      };
    }

    const checkLinked = await prisma.contributors.findFirst({
      where: {
        userId: userId
      },
    })

    if (checkLinked?.isLinked) {
      return {
        statusCode: errorCode.CONFLICT.statusCode,
        resCode: errorCode.CONFLICT.resCode,
        message: "The account is already linked to another github account!",
        data: null,
      };
    }

    const userInfo: any = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    const githubInfo: githubInfo = userInfo.data;

    const email = await axios.get("https://api.github.com/user/emails", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    });
    const primaryEmail =
      email.data.find((e: any) => e.primary === true)?.email || null;

    const saveInfo = await prisma.contributors.update({
      where: {
        userId: userId,
      },
      data: {
        isLinked: true,
        githubId: githubInfo.id.toString(),
        githubEmail: primaryEmail,
        githubUsername: githubInfo.login,
      },
    });

    await producer.connect();

    await producer.send({
      topic: "update-github-infomation",
      messages: [
        {
          value: JSON.stringify({
            event: "update-github-infomation",
            data: {
              userId: userId,
              githubId: githubInfo.id.toString(),
              githubEmail: primaryEmail,
              githubUsername: githubInfo.login,
            },
          }),
        },
      ],
    });

    await producer.disconnect();

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Success!",
      data: {
        id: githubInfo.id,
        username: githubInfo.login,
        email: primaryEmail,
      },
    };
  } catch (err) {
    console.log("err ===> github ===> ", err)
    return {
      statusCode: errorCode.INTERNAL_SERVER_ERROR.statusCode,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export default getUserInfo;
