import * as service from '../service/PessoaService';
import * as endpoint from 'fastify';
import { HTTPMethod } from 'fastify';
import { Pessoa } from '../domain/Pessoa';

const fast = endpoint({ logger: true });

const getMethod: HTTPMethod = 'GET';
const postMethod: HTTPMethod = 'POST';
const updateMethod: HTTPMethod = 'PUT';
const deleteMethod: HTTPMethod = 'DELETE';

const insertPessoa = async (req, reply) => {
    const obj: Pessoa = req.body;
    const insert = await service.insertPessoa(obj);
    if (insert) {
        reply.status(201);
        reply.send(insert);
    } else {
        reply.status(400);
        reply.send({ message: 'Algo errado aconteceu' });
    }
};

const getPessoaById = async (req, reply) => {
    const id: string = req.params.id;
    const get = await service.getPessoaById(id);
    if (get) {
        reply.status(200);
        reply.send(get);
    } else {
        reply.status(204);
        reply.send({ message: `Não foi possível encontrar a pessoa com o id = ${id}` });
    }
};

const updatePessoaById = async (req, reply) => {
    const id: string = req.params.id;
    const pessoa: Pessoa = req.body;
    const updated = await service.updatePessoaById(pessoa, id);
    if (updated) {
        reply.status(200);
        reply.send({ update: updated });
    } else {
        reply.status(400);
        reply.send({ message: `Não foi possível atualizar a pessoa com o id = ${id}` });
    }
};

const deletePessoaById = async (req, reply) => {
    const id: string = req.params.id;
    const deleted = await service.deletePessoaById(id);
    if (deleted) {
        reply.status(200);
        reply.send({ deletedCount: deleted });
    } else {
        reply.status(400);
        reply.send({ message: `Não foi possível remover a pessoa com o id = ${id}` });
    }
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
