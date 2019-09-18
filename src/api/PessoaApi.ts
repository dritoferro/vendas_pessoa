import * as service from '../service/PessoaService';
import * as endpoint from 'fastify';
import { Pessoa } from '../domain/Pessoa';

const fast = endpoint({ logger: true });

// fast.get('/', async (request, reply) => {
//     return new Pessoa('User1', '123@email.com');
// });

// Criar cada requisição abaixo em modelo de endpoint em vez de const

// const getPessoaById = async (req, reply) => {

// };

// const insertPessoa = (pessoa: Pessoa) => new Promise<string>(async (resolve, reject) => {
//     await service.insertPessoa(pessoa);
// });

// const updatePessoaById = async (pessoa: Pessoa, id: string) => new Promise<void>((resolve, reject) => {

// });

// const deletePessoaById = async (id: string) => new Promise<boolean>((resolve, reject) => {

// });

const routes = [
    {
        method: 'GET',
        url: '/pessoas/:id',
        handler: service.getPessoaById
    }
];


routes.forEach(async (obj) => {
    fast.route(obj);
});

// fast.route({
//     method: 'GET',
//     url: '/pessoas/:id',
//     handler: service.getPessoaById
// });

export const buildRoutes = async () => {
    await fast.listen(3000);
};
