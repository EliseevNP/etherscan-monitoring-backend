import { resolve } from 'path';

export default (timeout: number): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, timeout);
  });
