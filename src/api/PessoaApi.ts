import * as service from '../service/PessoaService';
import * as endpoint from 'fastify';
import { HTTPMethod } from 'fastify';
import { Pessoa } from '../domain/Pessoa';

const fast = endpoint({ logger: true });

const getMethod : HTTPMethod = 'GET';
const postMethod : HTTPMethod = 'POST';
const updateMethod : HTTPMethod = 'PUT';

// Criar cada requisição abaixo em modelo de endpoint em vez de const

// const getPessoaById = async (req, reply) => {

// };

// const updatePessoaById = async (pessoa: Pessoa, id: string) => new Promise<void>((resolve, reject) => {

// });

// const deletePessoaById = async (id: string) => new Promise<boolean>((resolve, reject) => {

// });

const routes = [
    {
        method: getMethod,
        url: '/pessoas/:id',
        handler: service.getPessoaById
    },
    {
        method: postMethod,
        url: '/pessoas',
        handler: service.insertPessoa
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
