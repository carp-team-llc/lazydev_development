import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connection/db.connection";

import jwt from "jsonwebtoken";
import { uploadWorkflowFile } from "./githubAction.service";
import generateGithubJWT from "@utils/generateGithubJWT";
import getInstallationAccessToken from "@utils/getInstallationAccessToken";

const handleCreatedRequest = async (payload: any, projectCode?: string) => {
  try {
    if (!payload) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Response from webhook has problem!",
      };
    }

    // const key = process.env.LAZY_KEY || "123";
    // const decode = jwt.verify(projectCode, key);
    // console.log("===========> ", decode);

    const getProjectOwner = await prisma.projectOwner.findFirst({
      where: {
        githubId: payload.installation.account.id.toString(),
      },
      select: {
        id: true,
        userId: true,
        repositories: true,
        level: true,
        project: true,
      },
    });

    // check if project owner exits
    if (!getProjectOwner) {
      return {
        statusCode: errorCode.NOT_FOUND.statusCode,
        resCode: errorCode.NOT_FOUND.resCode,
        message: "Project owner not found!",
      };
    }

    // Check if the number of repositories exceeds the allowed limit
    if (getProjectOwner?.repositories < getProjectOwner?.project.length) {
      return {
        statusCode: errorCode.LIMIT_REACHED.statusCode,
        resCode: errorCode.LIMIT_REACHED.resCode,
        message: errorCode.LIMIT_REACHED.message,
      };
    }

    // Check if the repository is private
    const isRepoPrivate = payload.repositories[0].private;
    if (isRepoPrivate) {
      return {
        statusCode: errorCode.PRIVATE_RESOURCE.statusCode,
        resCode: errorCode.PRIVATE_RESOURCE.resCode,
        message: errorCode.PRIVATE_RESOURCE.message,
        data: null,
      };
    }

    // need project
    const saveGithubInfo = await prisma.githubInfo.create({
      data: {
        isInstallation: true,
        installationId: payload.installation.id.toString(),
        githubUserId: payload.installation.account.id.toString(),
        githubUsername: payload.installation.account.login,
        githubUserEmail: "",
        repoId: payload.repositories[0].id.toString(),
        repoName: payload.repositories[0].name,
        repoFullName: payload.repositories[0].full_name,
        isPrivate: payload.repositories[0].private,
        projectId: "8f2255a1-8015-4b8a-80e6-517481f2acec", // Kiểm tra xem projectId này có tồn tại không
      },
    });

    const token = await getInstallationAccessToken(payload.installation.id);
    await uploadWorkflowFile({
      token: token.toString(),
      owner: payload.installation.account.login,
      repo: payload.repositories[0].name
    })

    return {
      statusCode: successCode.SUCCESS.statusCode,
      resCode: successCode.SUCCESS.resCode,
      message: "Connected to your repository successfully!",
      data: {
        githubUsername: saveGithubInfo.githubUsername,
        repoName: saveGithubInfo.repoName,
        repoFullName: saveGithubInfo.repoFullName,
        projectId: saveGithubInfo.projectId,
      },
    };
  } catch (err) {
    console.log("Handle here! ====> ", err)
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

const handleAddedRequest = async (payload: any, projectCode?: string) => {
  if (!payload) {
    return {
      statusCode: errorCode.BAD_REQUEST.statusCode,
      resCode: errorCode.BAD_REQUEST.resCode,
      message: "Response from webhook has problem!",
    };
  }

  const getProjectOwner = await prisma.projectOwner.findFirst({
    where: {
      githubId: payload.installation.account.id.toString(),
    },
    select: {
      id: true,
      userId: true,
      repositories: true,
      level: true,
      project: true,
    },
  });

  // check if project owner exits
  if (!getProjectOwner) {
    return {
      statusCode: errorCode.NOT_FOUND.statusCode,
      resCode: errorCode.NOT_FOUND.resCode,
      message: "Project owner not found!",
    };
  }

  // Check if the number of repositories exceeds the allowed limit
  if (getProjectOwner?.repositories < getProjectOwner?.project.length) {
    return {
      statusCode: errorCode.LIMIT_REACHED.statusCode,
      resCode: errorCode.LIMIT_REACHED.resCode,
      message: errorCode.LIMIT_REACHED.message,
    };
  }

  // Check if the repository is private
  const isRepoPrivate = payload.repositories_added[0].private;
  if (isRepoPrivate) {
    return {
      statusCode: errorCode.PRIVATE_RESOURCE.statusCode,
      resCode: errorCode.PRIVATE_RESOURCE.resCode,
      message: errorCode.PRIVATE_RESOURCE.message,
    };
  }

  const saveGithubInfo = await prisma.githubInfo.create({
    data: {
      isInstallation: true,
      installationId: payload.installation.id.toString(),
      githubUserId: payload.installation.account.id.toString(),
      githubUsername: payload.installation.account.login,
      githubUserEmail: "",
      repoId: payload.repositories_added[0].id.toString(),
      repoName: payload.repositories_added[0].name,
      repoFullName: payload.repositories_added[0].full_name,
      isPrivate: payload.repositories_added[0].private,
      projectId: "",
    },
  });

  return {
    statusCode: successCode.SUCCESS.statusCode,
    resCode: successCode.SUCCESS.resCode,
    message: "Connected to your repository successfully!",
    data: {
      githubUsername: saveGithubInfo.githubUsername,
      repoName: saveGithubInfo.repoName,
      repoFullName: saveGithubInfo.repoFullName,
      projectId: saveGithubInfo.projectId,
    },
  };
};

const handleWebhook = async (event: string, payload: any) => {
  try {
    if (event === "installation" && payload.action === "created") {
      return await handleCreatedRequest(payload);
    } else if (
      event === "installation_repositories" &&
      payload.action === "added"
    ) {
      return await handleAddedRequest(payload);
    }
  } catch (err) {
    console.log("Handle here!")
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export default handleWebhook;
