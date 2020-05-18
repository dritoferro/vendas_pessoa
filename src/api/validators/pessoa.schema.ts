import { t } from '@marblejs/middleware-io';

export const pessoaSchema = t.type({
  _id: t.union([t.string, t.undefined]),
  nome: t.string,
  email: t.string,
  isActive: t.boolean,
  documento: t.string,
  isPj: t.boolean,
});

export type PessoaSchema = t.TypeOf<typeof pessoaSchema>;
