import Router from 'koa-router';
import getLastBlock from './getLastBlock';
import getBlockByNumber from './getBlockByNumber';
import middlewares from '../../middlewares';
import schemes from '../../schemes';

const router = new Router({ prefix: '/block' });

router.get('/last', getLastBlock);

router.get(
  '/:blockNumber',
  middlewares.validate(schemes.block.getBlockByNumber),
  getBlockByNumber,
);

export default router;
