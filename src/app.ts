import {buildRoutes} from './app/api/PessoaApi';
import { startConsumer } from './app/service/KafkaService';

// Run the server!
const startUp = async () => {
    await startConsumer();
    await buildRoutes();
};

startUp();
