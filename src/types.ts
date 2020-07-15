/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ClassType } from 'class-transformer/ClassTransformer';

export interface EtherscanApiBlockType {
  number: string | null;
  parentHash: string;
  timestamp: string;
  transactions: Array<EtherscanApiTransactionType>;
}

export interface EtherscanApiTransactionType {
  blockNumber: string;
  hash: string;
  from: string;
  to: string;
  value: string;
}

export interface ValidationSchemaType {
  query?: ClassType<any> | undefined;
  params?: ClassType<any> | undefined;
  body?: ClassType<any> | undefined;
  [type: string]: ClassType<any> | undefined;
}
