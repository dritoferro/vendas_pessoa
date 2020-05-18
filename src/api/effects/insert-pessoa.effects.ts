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

const insertPessoa = async (pessoa: Pessoa) => {
  const db = await dbConn();
  const temp = new Pessoa(
    pessoa.nome,
    pessoa.email,
    pessoa._id,
    pessoa.documento,
    pessoa.isPj,
    pessoa.isActive
  );
  const obj = await db.insertOne(temp);
  return obj.ops;
};
