import { KafkaQuery } from "./KafkaQuery";

export class KafkaMessage {
    message: KafkaQuery;
    emitter: string;
    receiver: string;

    constructor(message: any, emitter: string, receiver: string = undefined) {
        this.message = message;
        this.emitter = emitter;
        this.receiver = receiver;
    }
}
