/* eslint-disable max-classes-per-file */
/* eslint-disable import/prefer-default-export */

export class ClientError extends Error {
  status: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: { [type: string]: any };

  constructor(message = 'Bad Request', status = 400, data = {}) {
    super(message);
    this.status = status;
    this.name = 'ClientError';
    this.data = data;
  }
}

export class InternalServerError extends Error {
  status: number;

  constructor(message = 'Internal Server Error', status = 500) {
    super(message);
    this.status = status;
    this.name = 'InternalServerError';
  }
}
