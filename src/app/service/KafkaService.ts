import { Kafka, CompressionTypes } from 'kafkajs';
import { KafkaMessage } from '../model/KafkaMessage';
import { getPessoaById } from '../service/PessoaService';
import { Pessoa } from '../model/Pessoa';
import { KafkaQuery } from '../model/KafkaQuery';

const topic = 'Pessoa-Topic';

const kafka = new Kafka({
    clientId: 'venda_pessoa_id',
    brokers: ['localhost:9092']
});

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'pessoa-group-receiver' });

export const startConsumer = async () => {
    await consumer.connect();

    await consumer.subscribe({ topic: topic });

    await consumer.run({
        eachMessage: async ({ message }) => {
            const payload = JSON.parse(message.value.toString());
            const pessoa = await getPessoaById(payload.message.value);
            await prepareMessage(pessoa, payload.emitter);
        }
    });
};

const prepareMessage = async (pessoa: Pessoa, receiver: string) => {
    const query = new KafkaQuery("pessoa", pessoa);
    const kafkaMessage = new KafkaMessage(query, topic, receiver);
    console.log(kafkaMessage);
    // await sendMessage(kafkaMessage);
};
//TODO fazer o teste desta função quando tiver outro módulo criado
const sendMessage = async (obj: KafkaMessage) => {
    await producer.connect();
    await producer.send({
        compression: CompressionTypes.GZIP,
        topic: obj.receiver,
        messages: [
            { value: JSON.stringify(obj) }
        ]
    });
    await producer.disconnect();
};
