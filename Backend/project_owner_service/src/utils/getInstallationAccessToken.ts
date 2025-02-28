import axios from "axios";
import generateGithubJWT from "./generateGithubJWT";

const getInstallationAccessToken = async (installationId: number) => {
  const jwtToken = generateGithubJWT();
  const response = await axios.post(
    `https://api.github.com/app/installations/${installationId}/access_tokens`,
    null,
    {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );
  return response.data.token;
};

export default getInstallationAccessToken;