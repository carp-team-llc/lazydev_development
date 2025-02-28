
import { owner } from "@enums/data.enum";
import { Consumer } from "@utils/configs/Kafka/consumer.kafka";
import { ErrorMessage, SysMessage } from "@utils/configs/Messages/messages";
import prisma from "@utils/connection/db.connection";

export const CreateProjectOwner = async () => {
  try {
    const client = process.env.CLIENT_ID || "";
    await Consumer(
      client,
      "create-user",
      "create-project-owner",
      async (eventData) => { // create ProjectOwner profile when create user account (non activate)
        const userId = eventData.userId;
        SysMessage("InfoWorker", `New user created with id: ${userId}`);
        await prisma.projectOwner.create({
          data: {
            userId,
            githubId: "",
            githubEmail: "",
            githubUsername: "",
            isActivated: owner.None.isActivated,
            pricing: owner.None.pricing,
            repositories: owner.None.repositories,
            repoCount: 0,
            level: owner.None.level,
          }
        })
      }
    )
    SysMessage("InfoWorker", "Infomation worker started!")
  } catch (err) {
    ErrorMessage("InfoWorker", err)
  }
}