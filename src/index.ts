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

const getPessoaById = async (nome: string): Promise<TesteRetorno> => {
  return { body: { message: `Bem vindo ${nome}!` }, status: HttpStatus.OK };
};

const validator$ = requestValidator$({
  params: t.type({
    nome: t.string,
  }),
});

export const pessoa$: RouteEffect = r.pipe(
  r.matchPath('/pessoas/:nome'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(
      use(validator$),
      mergeMap((req) => getPessoaById(req.params.nome))
    )
  )
);
