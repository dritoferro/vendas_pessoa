import { dbConn } from '../repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';

export const insertPessoa = async (pessoa: Pessoa) => {
    const db = await dbConn();
    const obj = await db.insertOne(pessoa);
    return obj.ops;
}

export const getPessoaById = async (id: String) => {
    const db = await dbConn();
    return await db.findOne({ id: id });
};

export const updatePessoaById = async (pessoa: Pessoa, id: String) => {
    const db = await dbConn();
    const obj = await db.update({ id: id }, pessoa);
    if (obj.nMatched && obj.nModified) {
        return true;
    } else {
        return false;
    }
};

export const deletePessoaById = async (id: String) => {
    const db = await dbConn();
    const obj = await db.deleteOne({ id: id });
    if (obj.acknowledged) {
        return obj.deletedCount;
    } else {
        return 0;
    }
};
