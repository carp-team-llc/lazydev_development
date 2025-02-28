import { CreateProjectOwner } from "./infomation.worker"

export const InfomationWorker = async () => {
  await CreateProjectOwner();
}