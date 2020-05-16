import { r, HttpStatus, use, RouteEffect } from '@marblejs/core';
import { mergeMap } from 'rxjs/operators';
import { getByIdValidator$ } from '../validators';
import { getPessoaById } from '../service';
import { DefaultResponse } from '../../models';

const getById = async (id: string): Promise<DefaultResponse> => {
  const result = await getPessoaById(id);
  if (result) {
    return {
      body: {
        message: id,
        value: result,
      },
      status: HttpStatus.OK,
    };
  }
  return {
    body: {
      message: 'Cannot find object for ID',
      value: id,
    },
    status: HttpStatus.NOT_FOUND,
  };
};

export const getByIdEffect$: RouteEffect = r.pipe(
  r.matchPath('/pessoas/:id'),
  r.matchType('GET'),
  r.useEffect((req$) =>
    req$.pipe(
      use(getByIdValidator$),
      mergeMap((req) => getById(req.params.id))
    )
  )
);
