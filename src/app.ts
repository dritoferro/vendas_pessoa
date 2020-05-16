// import { startConsumer } from './app/service/KafkaService';
import { createServer } from '@marblejs/core';
import { IO } from 'fp-ts/lib/IO';
import { listener } from './api/effects';

// Run the server!
const startUp = async () => {
  // await startConsumer();
};

// startUp();

const server = createServer({
  port: 1337,
  hostname: '127.0.0.1',
  listener,
});

const main: IO<void> = async () => await (await server)();

main();
