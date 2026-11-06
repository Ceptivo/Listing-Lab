-- Pre-order sign-ups. consented_at is the POPIA record of when consent was given.
create table public.waitlist (
  id bigint generated always as identity primary key,
  email text not null unique,
  consented_at timestamptz not null default now()
);

-- Row level security with no policies: the public keys can't read or write this
-- table. Only the website's server, using the secret key, can add sign-ups.
alter table public.waitlist enable row level security;
