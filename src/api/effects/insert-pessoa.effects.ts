import { dbConn } from '../../connection/DbConnection';
import { Pessoa } from '../../models';
import { insertPessoaValidator$, PessoaSchema } from '../validators';
import { RouteEffect, r, use, HttpStatus } from '@marblejs/core';
import { mergeMap } from 'rxjs/operators';
import { DefaultResponse } from '../../models/ResponseModel';

const savePessoa = async (pessoa: PessoaSchema) => {
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

const insertPessoa = async (pessoa: PessoaSchema): Promise<DefaultResponse> => {
  const insert = await savePessoa(pessoa);
  if (insert) {
    return {
      body: {
        message: 'Successfully inserted',
        value: pessoa,
      },
      status: HttpStatus.CREATED,
    };
  } else {
    return {
      body: {
        message: 'Something went wrong',
        value: pessoa,
      },
      status: HttpStatus.BAD_REQUEST,
    };
  }
};

export const insertPessoaEffect$: RouteEffect = r.pipe(
  r.matchPath('/pessoas'),
  r.matchType('POST'),
  r.useEffect((req$) =>
    req$.pipe(
      use(insertPessoaValidator$),
      mergeMap((req) => insertPessoa(req.body))
    )
  )
);
