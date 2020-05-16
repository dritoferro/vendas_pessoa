import { requestValidator$, t } from '@marblejs/middleware-io';

const getByIdValidator$ = requestValidator$({
  params: t.type({
    id: t.string,
  }),
});

export { getByIdValidator$ };
