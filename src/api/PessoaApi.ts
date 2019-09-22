import * as service from '../service/PessoaService';
import * as endpoint from 'fastify';
import { HTTPMethod } from 'fastify';
import { Pessoa } from '../domain/Pessoa';

const fast = endpoint({ logger: true });

const getMethod: HTTPMethod = 'GET';
const postMethod: HTTPMethod = 'POST';
const updateMethod: HTTPMethod = 'PUT';
const deleteMethod: HTTPMethod = 'DELETE';

// Criar cada requisição abaixo em modelo de endpoint em vez de const

const insertPessoa = async (req, reply) => {
    const obj : Pessoa = req.body;
    const insert = await service.insertPessoa(obj);
    if(insert){
        reply.status(201);
        reply.send(insert);
    } else {
        reply.status(400);
        reply.send({message : 'Algo errado aconteceu'})
    }
};

const getPessoaById = async (req, reply) => {

};

const updatePessoaById = async (req, reply) => {

};

const deletePessoaById = async (req, reply) => {

};

const routes = [
    {
        method: postMethod,
        url: '/pessoas',
        handler: insertPessoa
    },
    {
        method: getMethod,
        url: '/pessoas/:id',
        handler: getPessoaById
    },
    {
        method: updateMethod,
        url: '/pessoas/:id',
        handler: updatePessoaById
    },
    {
        method: deleteMethod,
        url: '/pessoas/:id',
        handler: deletePessoaById
    }
];

routes.forEach(async (obj) => {
    fast.route(obj);
});

export const buildRoutes = async () => {
    await fast.listen(3000);
};
