import { requestValidator$ } from '@marblejs/middleware-io';
import { pessoaSchema } from './pessoa.schema';

const insertPessoaValidator$ = requestValidator$({
  body: pessoaSchema,
});

export { insertPessoaValidator$ };
