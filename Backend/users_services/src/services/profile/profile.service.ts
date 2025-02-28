import { errorCode, successCode } from "@enums/response.enum";
import prisma from "@utils/connections/db.connections";

import jwt from "jsonwebtoken";

type profileType = {
  name: string;
  avatar?: string;
  gender?: string;
  description?: string;
  dob: string;
  social: string[];
  friends: string[];
  following: string[];
};

const showProfile = async (token: string) => {
  try {
    if (!token) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "User not found!",
        data: null,
      };
    }

    const secretKey = process.env.SECRECT || "";
    const verifyToken:any = jwt.verify(token, secretKey);
    const userId = verifyToken.id;

    const findUserInfo = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        username: true,
        email: true,
        createdAt: true,
        isCreateProfile: true,
        profile: {
          select: {
            name: true,
            avatar: true,
            description: true,
            gender: true,
            dob: true,
            social: true,
            friends: true,
            following: true,
          },
        },
      },
    });

    if (!findUserInfo) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "User not found!",
        data: null,
      };
    }

    if (!findUserInfo.isCreateProfile) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Profile not found!",
        data: null,
      };
    }

    return {
      statusCode: successCode.CREATED.statusCode,
      resCode: successCode.CREATED.resCode,
      message: "Profile created successfully!",
      data: findUserInfo,
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

const createProfile = async (
  {
    name,
    description,
    avatar,
    gender,
    dob,
    social,
    friends,
    following,
  }: profileType,
  token: string
) => {
  try {
    const missing = [];
    if (!name) missing.push("name");
    if (!token) missing.push("token");
    if (missing.length > 0) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: `Missing required fields: ${missing.join(", ")}`,
        data: null,
      };
    }

    const secretKey = process.env.SECRECT || "";
    const verifyToken:any = jwt.verify(token, secretKey);
    const userId = verifyToken.id;

    const isProfileCreated = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        isCreateProfile: true,
      },
    });

    if (isProfileCreated?.isCreateProfile) {
      return {
        statusCode: errorCode.CONFLICT.statusCode,
        resCode: errorCode.CONFLICT.resCode,
        message: "Profile already created!",
        data: null,
      };
    }

    const create = await prisma.profile.create({
      data: {
        name,
        description,
        avatar,
        gender,
        dob,
        social,
        friends,
        following,
        userId,
      },
    });

    return {
      statusCode: successCode.CREATED.statusCode,
      resCode: successCode.CREATED.resCode,
      message: "Profile created successfully!",
      data: {
        id: create.id,
        name: create.name,
        description: create.description,
        avatar: create.avatar,
        gender: create.gender,
        userId: create.userId,
        social: create.social,
        friends: create.friends,
        following: create.following,
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

export { showProfile, createProfile };
