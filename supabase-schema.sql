-- ============================================================
-- MASONRY ARCHITECT - Supabase Database Schema
-- Jalankan perintah ini di: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- Tabel 1: Form kontak umum (dari Beranda & Tentang)
create table if not exists contact_submissions (
  id          uuid default gen_random_uuid() primary key,
  name        text not null,
  phone       text not null,
  project_type text default 'Bangun Rumah Baru',
  address     text,
  message     text,
  created_at  timestamptz default now()
);

-- Tabel 2: Permintaan penawaran per layanan (dari modal Layanan)
create table if not exists quote_requests (
  id          uuid default gen_random_uuid() primary key,
  name        text not null,
  phone       text not null,
  service     text not null,
  address     text,
  message     text,
  created_at  timestamptz default now()
);

-- Aktifkan Row Level Security (RLS) - INSERT bebas, SELECT hanya via service role
alter table contact_submissions enable row level security;
alter table quote_requests enable row level security;

-- Izinkan INSERT dari siapa saja (public form)
create policy "Allow public insert" on contact_submissions
  for insert to anon with check (true);

create policy "Allow public insert" on quote_requests
  for insert to anon with check (true);

-- SELECT hanya untuk authenticated (admin)
create policy "Allow auth select" on contact_submissions
  for select to authenticated using (true);

create policy "Allow auth select" on quote_requests
  for select to authenticated using (true);
