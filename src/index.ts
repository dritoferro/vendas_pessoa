import * as endpoint from 'fastify';
const fast = endpoint({ logger: true });

fast.get('/', async (request, reply) => {
    return { hello: 'world' }
});

// Run the server!
const start = async () => {
    try {
        await fast.listen(3000)
        fast.log.info(`server listening on ${fast.server.address().port}`)
    } catch (err) {
        fast.log.error(err)
    }
};

start();