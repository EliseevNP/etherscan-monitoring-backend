/* eslint-disable @typescript-eslint/no-explicit-any */
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import Koa from 'koa';
import { ClientError } from '../utils/errors';
import { ValidationSchemaType } from '../types';

// This class used just for prevent TypeScript errors when 'plainToClass' function calling
class ClassStub {}

export default (schema: ValidationSchemaType) => async (
  ctx: Koa.Context,
  next: () => Promise<any>,
): Promise<void> => {
  const validationErrorsObject: {
    [key in 'params' | 'query' | 'body' | string]: Array<string>;
  } = {
    params: [],
    query: [],
    body: [],
  };

  // validate input params and fill 'validationErrorsObject' if validation errors occurred
  await Promise.all(
    Object.keys(validationErrorsObject).map(async (paramsSrc) => {
      if (schema[paramsSrc]) {
        return validate(
          plainToClass(schema[paramsSrc] || ClassStub, ctx[paramsSrc]),
          {
            validationError: { target: false },
          },
        ).then((validationErrors) => {
          validationErrors.forEach(({ constraints }) => {
            validationErrorsObject[paramsSrc].push(
              ...Object.values(constraints || []),
            );
          });
        });
      }
    }),
  );

  if (
    Object.values(validationErrorsObject).some(
      (validationErrors) => validationErrors.length,
    )
  ) {
    throw new ClientError('Validation Error', 400, validationErrorsObject);
  }

  await next();
};
