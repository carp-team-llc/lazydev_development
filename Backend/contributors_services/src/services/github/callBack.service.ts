import { errorCode, successCode } from "@enums/response.enum";
import getUserInfo from './githubAuth.service';
import axios from "axios";

const handleCallback = async (code: string, state: string) => {
  // state mean userId of platform
  try {
    if (!code || !state) {
      return {
        statusCode: errorCode.BAD_REQUEST.statusCode,
        resCode: errorCode.BAD_REQUEST.resCode,
        message: "Error processing this!",
        data: null,
      };
    }

    // get access token using call back code
    const getAccessToken = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.OAUTH_CLIENT_ID?.toString(),
        client_secret: process.env.OAUTH_CLIENT_SECRET?.toString(),
        code: code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const accessToken = getAccessToken.data.access_token;
    const getInfo = await getUserInfo(state, accessToken); // call getUser function

    return {
      statusCode: getInfo.statusCode,
      resCode: getInfo.resCode,
      message: getInfo.message,
      data: {
        id: getInfo?.data?.id,
        username: getInfo?.data?.username,
        email: getInfo?.data?.email
      } 
    }

  } catch (err) {
    return {
      statusCode: errorCode.INTERNAL_SERVER_ERROR.statusCode,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
      data: null,
    };
  }
};

export default handleCallback;