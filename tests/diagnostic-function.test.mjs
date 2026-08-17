import test from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/diagnostic.js';

const validLead = {
  first_name: 'Test Founder', work_email: 'founder@example.com', phone: '+355000000',
  company: 'Example Company', website: 'https://example.com', country: 'AL', sector: 'b2b',
  digital_stage: 'brochure', leaks: ['conversion', 'measurement'], primary_goal: 'export-demand',
  monthly_qualified_volume: '10-15 estimate', context: 'The current system loses attribution and follow-up ownership after qualified enquiries arrive.',
  consent: 'yes', locale: 'en', source_path: '/regional-growth-diagnostic/', referrer: '',
  utm_source: 'meta', utm_medium: 'paid-social', utm_campaign: 'balkan-growth',
  started_at: new Date(Date.now() - 10000).toISOString(), website_confirm: '',
};

function request(payload) {
  return new Request('https://qctstudio.com/api/diagnostic', {
    method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://qctstudio.com' },
    body: JSON.stringify(payload),
  });
}

function databaseCapture() {
  const capture = { sql: '', values: [] };
  return {
    capture,
    db: {
      prepare(sql) {
        capture.sql = sql;
        return { bind(...values) { capture.values = values; return { async run() { return { success: true }; } }; } };
      },
    },
  };
}

test('stores a validated diagnostic lead', async () => {
  const { db, capture } = databaseCapture();
  const response = await onRequestPost({ request: request(validLead), env: { LEADS_DB: db }, waitUntil() {} });
  const body = await response.json();
  assert.equal(response.status, 201);
  assert.equal(body.ok, true);
  assert.match(capture.sql, /INSERT INTO diagnostic_leads/);
  assert.equal(capture.values[2], 'Test Founder');
  assert.equal(capture.values[3], 'founder@example.com');
  assert.equal(capture.values[7], 'AL');
});

test('rejects incomplete submissions with field names', async () => {
  const { db } = databaseCapture();
  const response = await onRequestPost({ request: request({ ...validLead, work_email: 'invalid', context: 'short' }), env: { LEADS_DB: db }, waitUntil() {} });
  const body = await response.json();
  assert.equal(response.status, 422);
  assert.deepEqual(body.fields.sort(), ['context', 'work_email']);
});

test('silently accepts honeypot submissions without storage', async () => {
  const response = await onRequestPost({ request: request({ ...validLead, website_confirm: 'spam' }), env: {}, waitUntil() {} });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test('fails safely when production storage is not configured', async () => {
  const response = await onRequestPost({ request: request(validLead), env: {}, waitUntil() {} });
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error, 'lead_storage_not_configured');
});
