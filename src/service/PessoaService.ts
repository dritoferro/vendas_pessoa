import { dbConn } from '../repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';

export const insertPessoa = async (pessoa : Pessoa) => {
    const db = await dbConn();
    const obj = await db.insertOne(pessoa);
    return obj.ops;
}

export const getPessoaById = async (id : String) => {
    const db = await dbConn();
    const obj = await db.getOne(id);
    return obj;
};

export const updatePessoaById = async (pessoa : Pessoa, id : String) => {

};

export const deletePessoaById = async (id : String) => {

};
