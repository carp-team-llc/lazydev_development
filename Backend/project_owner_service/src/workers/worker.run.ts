import { ErrorMessage, SysMessage } from "@utils/configs/Messages/messages"
import { InfomationWorker } from "./infomation/run"
import { GithubWoker } from "./github/run"

export const StartAllWorkers = async () => {
  try {
    await Promise.all([
      InfomationWorker(),
      GithubWoker(),
    ])
    SysMessage("StartWorker", "All workers started successfully!")
  } catch (err) {
    ErrorMessage("StartWorker", err)
  }
}