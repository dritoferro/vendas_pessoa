import * as ip from 'ip';
// import * as service from '../service/PessoaService';
import { Pessoa } from '../model/Pessoa';
import { of, Observable } from 'rxjs';

// const insertPessoa = async (req, reply) => {
//   const obj: Pessoa = req.body;
//   const insert = await service.insertPessoa(obj);
//   if (insert) {
//     reply.status(201);
//     reply.send(insert);
//   } else {
//     reply.status(400);
//     reply.send({ message: 'Algo errado aconteceu' });
//   }
// };

const getPessoaById = (id: string) => {
  // const get = await service.getPessoaById(id);
  return of(`${id} da pessoa`);
};

// const updatePessoaById = async (req, reply) => {
//   const id: string = req.params.id;
//   const pessoa: Pessoa = req.body;
//   const updated = await service.updatePessoaById(pessoa, id);
//   if (updated) {
//     reply.status(200);
//     reply.send({ update: updated });
//   } else {
//     reply.status(400);
//     reply.send({
//       message: `Não foi possível atualizar a pessoa com o id = ${id}`,
//     });
//   }
// };

// const deletePessoaById = async (req, reply) => {
//   const id: string = req.params.id;
//   const deleted = await service.deletePessoaById(id);
//   if (deleted) {
//     reply.status(200);
//     reply.send({ deletedCount: deleted });
//   } else {
//     reply.status(400);
//     reply.send({
//       message: `Não foi possível remover a pessoa com o id = ${id}`,
//     });
//   }
// };

export const controller = {
  // insertPessoa,
  getPessoaById,
  // updatePessoaById,
  // deletePessoaById,
};
