# etherscan-monitoring-backend

Service for working with etherscan API. Developed using TypeScript and PostgreSQL. Implemented cron job via WorkerThread Node.js feature

## Start server

```bash
$ docker-compose up --build
```

## Start development server

```bash
$ docker-compose -f development.docker-compose.yml up --build
```

## PostgreSQL credintails

- HOST: localhost
- PORT: 15432
- POSTGRES_USER: postgres
- POSTGRES_PASSWORD: postgres
- POSTGRES_DB: postgres

## Database scheme

You should run script below manually

```sql
CREATE TABLE IF NOT EXISTS public.transactions
(
  hash text primary key,
  block_number bigint,
  "from" text not null,
  "to" text,
  value decimal not null
);
```

## API documentation

### Get last block

METHOD: GET
URL: /api/block/last

### Get block by number

METHOD: GET
URL: /api/block/:blockNumber
