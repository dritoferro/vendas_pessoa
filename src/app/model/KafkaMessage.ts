import { KafkaQuery } from './KafkaQuery';

export class KafkaMessage {
  message: KafkaQuery;
  emitter: string;
  receiver: string;

  constructor(message: KafkaQuery, emitter: string, receiver: string = '') {
    this.message = message;
    this.emitter = emitter;
    this.receiver = receiver;
  }
}
