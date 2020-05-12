import { r, HttpError, HttpStatus } from '@marblejs/core';
import { mergeMap, catchError } from 'rxjs/operators';
import { controller } from '../controller/PessoaController';
import { map } from 'fp-ts/lib/ReadonlyRecord';
import { pipe, throwError } from 'rxjs';

export const pessoa$ = r.pipe(
  r.matchPath('/pessoas/:id'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(
      mergeMap((req) =>
        pipe(
          controller.getPessoaById(req.params.id),
          catchError(() =>
            throwError(
              new HttpError('Pessoa não encontrada', HttpStatus.NOT_FOUND)
            )
          )
        )
      ),
      map((body) => ({ body }))
    )
  )
);
