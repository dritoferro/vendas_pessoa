import { dbConn } from '../repository/DbConnection';
import { Pessoa } from '../domain/Pessoa';
import { ObjectId } from 'mongodb';

export const insertPessoa = async (pessoa: Pessoa) => {
    const db = await dbConn();
    const temp = new Pessoa(pessoa.nome, pessoa.email, pessoa._id, pessoa.documento, pessoa.isPj, pessoa.isActive);
    console.log(temp);
    const obj = await db.insertOne(temp);
    return obj.ops;
}

export const getPessoaById = async (id: string) => {
    const db = await dbConn();
    return await db.findOne({ "_id": new ObjectId(id) });
};

export const updatePessoaById = async (pessoa: Pessoa, id: string) => {
    const db = await dbConn();
    const obj = await db.replaceOne({ "_id": new ObjectId(id) }, pessoa);
    console.log(obj);
    
    if (obj.modifiedCount) {
        return true;
    } else {
        return false;
    }
};

export const deletePessoaById = async (id: string) => {
    const db = await dbConn();
    const obj = await db.deleteOne({ "_id": new ObjectId(id) });
    return obj.deletedCount;
};
