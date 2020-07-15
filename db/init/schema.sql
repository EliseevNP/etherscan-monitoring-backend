CREATE TABLE IF NOT EXISTS public.transactions
(
  hash text primary key,
  block_number bigint,
  "from" text not null,
  "to" text,
  value decimal not null
);
