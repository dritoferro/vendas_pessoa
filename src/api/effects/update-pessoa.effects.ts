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

export const updatePessoaById = async (pessoa: Pessoa, id: string) => {
  const db = await dbConn();
  const obj = await db.replaceOne({ _id: new ObjectId(id) }, pessoa);

  if (obj.modifiedCount) {
    return true;
  } else {
    return false;
  }
};
