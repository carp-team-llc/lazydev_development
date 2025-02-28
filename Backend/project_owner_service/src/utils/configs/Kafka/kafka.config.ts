import { Kafka } from "kafkajs";

export function KafkaClient (client: string) {
  const kafka = new Kafka({
    clientId: `service-${client || "default"}-${Date.now()}`,
    brokers: [`${process.env.KAFKA_HOST}`],
    connectionTimeout: 3000,
    retry: {
      initialRetryTime: 100,
      retries: 8
    }
  })
  return kafka;
}