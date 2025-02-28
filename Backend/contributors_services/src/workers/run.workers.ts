import { ErrorMessage, SysMessage } from "@utils/configs/Messages/messages"
import { createContributors } from "./infomation/infomation.worker"

export const StartAllWorkers = async () => {
  try {
    await Promise.all([
      createContributors(),
    ])
    SysMessage("StartWorker", "All workers started successfully!")
  } catch (err) {
    ErrorMessage("StartWorker", err)
  }
}