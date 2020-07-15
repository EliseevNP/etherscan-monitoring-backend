import Koa from 'koa';
import EtherscanApi from '../../models/EtherscanApi';

export default async (ctx: Koa.Context): Promise<void> => {
  const lastBlockNumber = await EtherscanApi.getLastBlockNumber();
  const lastBlock = await EtherscanApi.getBlockByNumber(lastBlockNumber);

  ctx.body = lastBlock;
};
