import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { getByIdEffect$ } from './get-by-id.effects';

const middlewares = [
  logger$(),
  bodyParser$(),
  // middleware3$
  // middleware4$
  // ...
];

const effects = [
  getByIdEffect$,
  // endpoint2$
  // endpoint3$
  // ...
];

export const listener = httpListener({
  middlewares,
  effects,
});
