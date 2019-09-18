import { dbConn } from 'repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';

export const insertPessoa = async (req, reply) => {
    
}

export const getPessoaById = async (req, reply) => {
    const id = req.params.id;

    return new Pessoa('Adriano', 'email@email.com', id);
};
