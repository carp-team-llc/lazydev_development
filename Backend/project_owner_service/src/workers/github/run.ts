import { UpdateGithubInfo } from "./github.worker";

export const GithubWoker = async () => {
  await UpdateGithubInfo();
}