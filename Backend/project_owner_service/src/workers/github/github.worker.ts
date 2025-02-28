import { owner } from "@enums/data.enum";
import { Consumer } from "@utils/configs/Kafka/consumer.kafka";
import { ErrorMessage, SysMessage } from "@utils/configs/Messages/messages";
import prisma from "@utils/connection/db.connection";

export const UpdateGithubInfo = async () => {
  try {
    const client = process.env.CLIENT_ID || "";
    await Consumer(
      client,
      "update-github-infomation",
      "update-github-info-po",
      async (eventData) => {
        // create ProjectOwner profile when create user account (non activate)
        const userId = eventData?.userId;
        const githubId = eventData?.githubId;
        const githubEmail = eventData?.githubEmail;
        const githubUsername = eventData?.githubUsername;
        SysMessage("InfoWorker", `githubId: ${githubId}`);
        SysMessage("InfoWorker", `githubEmail: ${githubEmail}`);
        const existingOwner = await prisma.projectOwner.findUnique({
          where: { githubId: eventData.githubId },
        });
        if (existingOwner) {
          console.log("ProjectOwner with this githubId already exists.");
          return;
        }
        await prisma.projectOwner.update({
          where: {
            userId: userId.toString(),
          },
          data: {
            githubId: githubId.toString(),
            githubEmail: githubEmail.toString(),
            githubUsername: githubUsername.toString(),
            isActivated: owner.None.isActivated,
            pricing: owner.None.pricing,
            level: owner.None.level,
          },
        });
      }
    );
    SysMessage("InfoWorker", "Infomation worker started!");
  } catch (err) {
    ErrorMessage("InfoWorker", err);
  }
};
