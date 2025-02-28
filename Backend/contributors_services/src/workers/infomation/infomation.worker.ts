import { ErrorMessage, SysMessage } from "@utils/configs/Messages/messages";
import prisma from "@utils/connection/db.connection";
import { Consumer } from "@utils/kafka/consummers/consummers";

export const createContributors = async () => {
  try {
    const clientId = process.env.CLIENT_ID || "";
    await Consumer(
      clientId,
      "create-user",
      "create-contributors",
      async (eventData) => {
        // create contributors profile when create user account
        const userId = eventData.userId;
        SysMessage("InfoWorker", `New user created with id: ${userId}`);
        await prisma.contributors.create({
          data: {
            userId,
            githubId: "",
            githubUsername: "",
            githubEmail: "",
          },
        });
      }
    );
  } catch (err) {
    ErrorMessage("InfoWorker", err);
  }
};
