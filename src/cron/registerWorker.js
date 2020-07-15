/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { workerData } = require('worker_threads');

require('ts-node').register();

require(workerData.path);
