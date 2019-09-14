import { MongoClient } from 'mongodb';

const _url = '';

export const openConn = async () => {
    const conn = new MongoClient(_url, { useNewUrlParser: true, useUnifiedTopology : true });
    const client = await conn.connect();
    return client.db('vendas');
};
