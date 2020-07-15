import pg from '../utils/knex';
import { MIN_BLOCK_NUMBER } from '../constants';
import sleep from '../utils/sleep';

async function startWorker() {
  try {
    // eslint-disable-next-line no-console
    console.log('[FILL_TRANSACTIONS_WORKER] Cron task started');

    const { max_block_number: maxHandledBlockNumber } = await pg('transactions')
      .select(pg.raw('COALESCE(MAX(block_number), 0) AS max_block_number'))
      .first();

    let blockNumber = +maxHandledBlockNumber || MIN_BLOCK_NUMBER;

    // eslint-disable-next-line no-constant-condition
    while (1) {
      try {
        // eslint-disable-next-line no-console
        console.log(
          `[FILL_TRANSACTIONS_WORKER] Worker step stub (blockNumber: ${blockNumber}). TODO: implement database filling`,
        );

        // eslint-disable-next-line no-await-in-loop
        await sleep(10000);

        blockNumber += 1;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`[FILL_TRANSACTIONS_WORKER] ${error}`);
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`[FILL_TRANSACTIONS_WORKER] ${error}`);

    await sleep(10000);
    startWorker();
  }
}

startWorker();
