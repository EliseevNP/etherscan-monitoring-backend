/* eslint-disable @typescript-eslint/no-explicit-any */
import Koa from 'koa';

export default async (
  ctx: Koa.Context,
  next: () => Promise<any>,
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);

    if (err.name === 'ClientError') {
      ctx.status = err.status;
      ctx.body = {
        status: err.status || 400,
        message: err.message || 'Bad Request',
        data: err.data || {},
      };
      return;
    }

    ctx.body = {
      status: err.status || 500,
      message: 'Internal Server Error',
    };
  }
};
