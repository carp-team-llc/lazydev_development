import { errorCode, successCode } from "@enums/response.enum";
import generateGithubJWT from "@utils/generateGithubJWT";
import getInstallationAccessToken from "@utils/getInstallationAccessToken";
import axios from "axios";

const uninstallGithubApp = async (installationId: number) => {
  const token = generateGithubJWT();
  await getInstallationAccessToken(installationId);
  try {
    await axios.delete(
      `https://api.github.com/app/installations/${installationId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      }
    );
    return {
      statusCode: 204,
      resCode: successCode.SUCCESS.resCode,
      message: "Delete app completed!",
    };
  } catch (err) {
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
    };
  }
};

const handlRepoByPlanm = async () => {
  try {

  } catch (err) {
    return {
      statusCode: 500,
      resCode: errorCode.INTERNAL_SERVER_ERROR.resCode,
      message: errorCode.INTERNAL_SERVER_ERROR.message,
    };
  }
}

export { uninstallGithubApp };
