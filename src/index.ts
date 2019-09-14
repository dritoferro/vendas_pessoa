import {openConn} from './repository/DbConnection';

import * as endpoint from 'fastify';
const fast = endpoint({ logger: true });

fast.get('/', async (request, reply) => {
    return { hello: 'world' }
});

// Run the server!
const start = async () => {
    try {
        const db = await openConn();
        const pessoasCollection = db.collection('pessoas');
        await pessoasCollection.insertOne({nome: 'Adriano', documento : '999.999.999-99'});
        // await fast.listen(3000)
        // fast.log.info(`server listening on ${fast.server.address().port}`)
    } catch (err) {
        fast.log.error(err)
    }
};

start();