import { KafkaClient } from "./kafka.config";

export async function Consumer (
  clientId: string,
  topic: string,
  groupId: string,
  eventHandler: (eventData: any) => Promise<void>,
) {

  console.log(`[Consumer] Starting - Client ID: ${clientId}, Group ID: ${groupId}, Topic: ${topic}`);
  const consumer = KafkaClient(clientId).consumer({ groupId });

  await consumer.connect();
  await consumer.subscribe({
    topic,
    fromBeginning: true,
  });
  await consumer.run({
    eachMessage: async ({ message }: any) => {
      const event = JSON.parse(message.value.toString());
      await eventHandler(event.data);
    }
  })
}