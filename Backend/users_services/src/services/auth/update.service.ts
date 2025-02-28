
import { errorCode } from "@enums/response.enum";

type updateInfoParams = {
  username?: string;
  email?: string;
}

const updateInfoService = async ({ email, username }: updateInfoParams) => {
  try {
    if (!email || ! username) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message:
          "Information is not complete, please enter complete information before trying again!",
        data: null,
      }
    }
  } catch (err) {
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
}