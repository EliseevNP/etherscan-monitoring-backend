import Koa from 'koa';
import EtherscanApi from '../../models/EtherscanApi';
import { numberToHex } from '../../utils/hex';

export default async (ctx: Koa.Context): Promise<void> => {
  const block = await EtherscanApi.getBlockByNumber(
    numberToHex(+ctx.params.blockNumber),
  );

  ctx.body = block;
};
