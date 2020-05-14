import { r, HttpEffect, HttpStatus, use, RouteEffect } from '@marblejs/core';
import { mergeMap } from 'rxjs/operators';
import { requestValidator$, t } from '@marblejs/middleware-io';

interface TesteRetorno {
  body: {
    message: string;
    sqlId?: number;
    error?: Error;
  };
  status: number;
}

const getPessoaById = async (id: string): Promise<TesteRetorno> => {
  // const get = await service.getPessoaById(id);
  return { body: { message: `${id} da pessoa` }, status: HttpStatus.OK };
};

const validator$ = requestValidator$({
  params: t.type({
    id: t.string,
  }),
});

export const pessoa$: RouteEffect = r.pipe(
  r.matchPath('/pessoas/:id'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(
      use(validator$),
      mergeMap((req) => getPessoaById(req.params.id))
    )
  )
);
