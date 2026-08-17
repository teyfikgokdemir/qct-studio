CREATE TABLE IF NOT EXISTS diagnostic_leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  first_name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  company TEXT NOT NULL,
  website TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL,
  sector TEXT NOT NULL,
  digital_stage TEXT NOT NULL,
  leaks_json TEXT NOT NULL,
  primary_goal TEXT NOT NULL,
  monthly_qualified_volume TEXT NOT NULL DEFAULT '',
  context TEXT NOT NULL,
  consent TEXT NOT NULL,
  locale TEXT NOT NULL,
  source_path TEXT NOT NULL,
  referrer TEXT NOT NULL DEFAULT '',
  utm_source TEXT NOT NULL DEFAULT '',
  utm_medium TEXT NOT NULL DEFAULT '',
  utm_campaign TEXT NOT NULL DEFAULT '',
  user_agent TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new',
  owner TEXT NOT NULL DEFAULT '',
  notes TEXT NOT NULL DEFAULT '',
  payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_created_at ON diagnostic_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_status ON diagnostic_leads(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_market ON diagnostic_leads(country, sector, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_diagnostic_leads_email ON diagnostic_leads(work_email);
