import knex from 'knex';

const pg = knex({
  client: 'pg',
  connection: {
    host: 'etherscan-monitoring-backend-pg',
    user: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    port: 5432,
  },
});

export default pg;
