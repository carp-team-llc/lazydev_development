import { KafkaClient } from "./kafka.config";

export function Producer (clientId: string) {
  return KafkaClient(clientId).producer();
}