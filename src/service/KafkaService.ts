import { Kafka, CompressionTypes } from 'kafkajs';
import { KafkaMessage } from '../domain/KafkaMessage';

const topic = 'Pessoa-Topic';

const kafka = new Kafka({
    clientId: 'venda_pessoa_id',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'pessoa-group-receiver' });

export const sendMessage = async (message: KafkaMessage) => {
    await producer.connect();
    await producer.send({
        compression: CompressionTypes.GZIP,
        topic: topic,
        messages: [
            { value: JSON.stringify(message) }
        ]
    });
    await producer.disconnect();
};

export const startConsumer = async () => {
    await consumer.connect();

    await consumer.subscribe({ topic: topic });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(message.value);
        }
    });
};
