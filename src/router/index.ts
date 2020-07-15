import Router from 'koa-router';
import block from './block';

const router = new Router({ prefix: '/api' });

router.use(block.routes(), block.allowedMethods());

export default router;
