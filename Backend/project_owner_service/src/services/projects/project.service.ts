import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connection/db.connection";
import helper from "@utils/helper";

import jwt from "jsonwebtoken";

type project = {
  name: string;
  logo: string;
  introduce?: string;
  description?: string;
  social?: string[];
};

const showProject = async () => {
  
}

const createProject = async (
  { name, logo, introduce, description, social }: project,
  token: string
) => {
  try {
    const missing = [];
    if (!name) missing.push("name");
    if (!logo) missing.push("logo");
    if (missing.length > 0) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: `Missing field: ${missing}`,
        data: null,
      };
    }

    const verifyToken: any = await helper.verifyAuthToken(token);
    const userId = verifyToken.id;

    const checkLimit = await prisma.projectOwner.findFirst({
      where: { userId },
      select: {
        id: true,
        repositories: true,
        repoCount: true,
      },
    });

    if (!checkLimit) {
      return {
        statusCode: errorCode.NOT_FOUND.statusCode,
        resCode: errorCode.NOT_FOUND.resCode,
        message: "Cannot find project owner!",
        data: null,
      }
    }

    if (checkLimit?.repoCount > checkLimit?.repositories) {
      return {
        statusCode: errorCode.LIMIT_REACHED.statusCode,
        resCode: errorCode.LIMIT_REACHED.resCode,
        message: errorCode.LIMIT_REACHED.message,
        data: null,
      };
    }

    const saveProject = await prisma.project.create({
      data: {
        name,
        logo,
        introduce,
        description,
        social,
        projectOwnerId: checkLimit.id,
      },
    });

    const increaseProjectCount = await prisma.projectOwner.update({
      where: { userId },
      data: {
        repoCount: checkLimit.repoCount + 1,
      },
    });

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Connected to your repository successfully!",
      data: {
        id: saveProject.id,
        name: saveProject.name,
        logo: saveProject.logo,
        introduce: saveProject.introduce,
        description: saveProject.description,
        social: saveProject.social,
        projectOwnerId: saveProject.projectOwnerId,
      },
    };
  } catch (err) {
    console.log("err ====> ", err);
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

const addRepo = async (userId: string, projectId: string, session: any) => {
  try {
    const missing = [];
    if (!userId) missing.push("userId");
    if (!projectId) missing.push("projectId");
    if (missing.length > 0) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: `Missing field: ${missing}`,
        data: null,
      };
    }

    const lazyKey = process.env.LAZY_KEY;
    if (!lazyKey) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Bad request",
        data: null,
      };
    }
    const verifyInstallToken = jwt.sign(
      {
        userId,
        projectId,
        created: Date.now(),
        expires: Date.now() + 10 * 60 * 1000,
      },
      lazyKey,
      { expiresIn: "10m" }
    );

    if (!session.tokens) {
      session.tokens = {};
    }
    session.tokens[`${userId}_${projectId}`] = verifyInstallToken;

    const githubAppUrl =
      "https://github.com/apps/lazydev-development/installations/new";

    return {
      statusCode: successCode.CREATED.statusCode,
      resCode: successCode.CREATED.resCode,
      message: successCode.CREATED.message,
      data: {
        verifyInstallToken,
        githubAppUrl,
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export { createProject, addRepo };
