import { Worker } from 'worker_threads';
import path from 'path';

function startWorker(pathToWorker: string): Worker {
  const worker = new Worker(path.resolve(__dirname, './registerWorker.js'), {
    workerData: {
      path: pathToWorker,
    },
  });

  worker.on('exit', (code: number) => {
    if (code !== 0) {
      // eslint-disable-next-line no-console
      console.error(new Error(`Worker stopped with exit code ${code}`));
    }
  });

  return worker;
}

export default (): void => {
  startWorker(path.resolve(__dirname, './fillTransactionsWorker.ts'));
};
