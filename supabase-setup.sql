-- Run this in your Supabase SQL Editor
-- Dashboard > SQL Editor > New query

CREATE TABLE IF NOT EXISTS leads (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  phone       TEXT NOT NULL,
  municipality TEXT NOT NULL,
  service     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the contact form)
CREATE POLICY "Allow anonymous inserts" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users (you) can read leads
CREATE POLICY "Only authenticated users can read" ON leads
  FOR SELECT TO authenticated
  USING (true);
