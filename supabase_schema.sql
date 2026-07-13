-- À exécuter dans Supabase : Dashboard > SQL Editor > New query > coller > Run

create table if not exists import_history (
  id text primary key,
  imported_at timestamptz not null,
  filename text,
  rows_count int,
  anomalies_count int,
  data jsonb,
  created_at timestamptz default now()
);

create table if not exists app_settings (
  key text primary key,
  value jsonb,
  updated_at timestamptz default now()
);

alter table import_history enable row level security;
alter table app_settings enable row level security;

-- Accès libre (pas de login) : la clé "anon" peut tout lire/écrire.
-- À restreindre plus tard si l'app devient publique (ajouter Supabase Auth).
create policy "anon full access" on import_history
  for all to anon using (true) with check (true);

create policy "anon full access" on app_settings
  for all to anon using (true) with check (true);
