import * as service from '../service/PessoaService';
import * as endpoint from 'fastify';
import { Pessoa } from '../domain/Pessoa';

const fast = endpoint({ logger: true });

fast.get('/', async (request, reply) => {
    return new Pessoa('User1', '123@email.com');
});

// Criar cada requisição abaixo em modelo de endpoint em vez de const

// const getPessoaById = async (id: string) => new Promise<Pessoa>((resolve, reject) => {

// });

// const insertPessoa = (pessoa: Pessoa) => new Promise<string>(async (resolve, reject) => {
//     await service.insertPessoa(pessoa);
// });

// const updatePessoaById = async (pessoa: Pessoa, id: string) => new Promise<void>((resolve, reject) => {

// });

// const deletePessoaById = async (id: string) => new Promise<boolean>((resolve, reject) => {

// });

export const buildRoutes = async () => {
    await fast.listen(3000);
};
