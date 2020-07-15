import 'reflect-metadata';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './router';
import middlewares from './middlewares';
import startCronTasks from './cron';

startCronTasks();

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(middlewares.error);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
