import { dbConn } from '../repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';

export const insertPessoa = async (req, reply) => {
    const body : Pessoa = req.body;
    const db = await dbConn();
    const obj = await db.insertOne(body);
    reply.status(201);
    reply.send(obj.ops);
}

export const getPessoaById = async (req, reply) => {
    const id = req.params.id;

    return new Pessoa('Adriano', 'email@email.com', id);
};
