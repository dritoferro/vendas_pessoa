import { requestValidator$, t } from '@marblejs/middleware-io';

const deletePessoaValidator$ = requestValidator$({
  params: t.type({
    id: t.string,
  }),
});

export { deletePessoaValidator$ };
