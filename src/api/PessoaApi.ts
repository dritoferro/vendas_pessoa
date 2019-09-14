import * as service from '../service/PessoaService';

const getPessoaById = async (id: string) => new Promise<Pessoa>((resolve, reject) => {
    
});

const insertPessoa = (pessoa: Pessoa) => new Promise<string>(async (resolve, reject) => {
    await service.insertPessoa(pessoa);
});

const updatePessoaById = async (pessoa: Pessoa, id: string) => new Promise<void>((resolve, reject) => {

});

const deletePessoaById = async (id: string) => new Promise<boolean>((resolve, reject) => {

});
