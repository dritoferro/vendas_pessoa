import { requestValidator$, t } from '@marblejs/middleware-io';
import { pessoaSchema } from './pessoa.schema';

const updatePessoaValidator$ = requestValidator$({
  params: t.type({
    id: t.string,
  }),
  body: pessoaSchema,
});

export { updatePessoaValidator$ };
