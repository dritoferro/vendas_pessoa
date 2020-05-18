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

export const deletePessoaById = async (id: string) => {
  const db = await dbConn();
  const obj = await db.deleteOne({ _id: new ObjectId(id) });
  return obj.deletedCount;
};
