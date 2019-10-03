import { dbConn } from '../repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';
import { ObjectId } from 'mongodb';

export const insertPessoa = async (pessoa: Pessoa) => {
    const db = await dbConn();
    const obj = await db.insertOne(pessoa);
    return obj.ops;
}

export const getPessoaById = async (id: String) => {
    const db = await dbConn();
    return await db.findOne({ "_id": new ObjectId(id) });
};

export const updatePessoaById = async (pessoa: Pessoa, id: String) => {
    const db = await dbConn();
    const obj = await db.updateOne({ "_id": new ObjectId(id) }, pessoa);
    if (obj.nMatched && obj.nModified) {
        return true;
    } else {
        return false;
    }
};

export const deletePessoaById = async (id: String) => {
    const db = await dbConn();
    const obj = await db.deleteOne({ "_id": new ObjectId(id) });
    return obj.deletedCount;
};
