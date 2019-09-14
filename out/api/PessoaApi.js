import * as service from '../service/PessoaService';
const getPessoaById = async (id) => new Promise((resolve, reject) => {
});
const insertPessoa = (pessoa) => new Promise(async (resolve, reject) => {
    await service.insertPessoa(pessoa);
});
const updatePessoaById = async (pessoa, id) => new Promise((resolve, reject) => {
});
const deletePessoaById = async (id) => new Promise((resolve, reject) => {
});
