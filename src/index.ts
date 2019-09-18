import {buildRoutes} from './api/PessoaApi';

// Run the server!
const startUp = async () => {
    await buildRoutes();
};

startUp();
