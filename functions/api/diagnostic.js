const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
};

const allowed = {
  country: new Set(['AL', 'MK', 'XK', 'RS', 'OTHER']),
  sector: new Set(['hospitality', 'retail', 'b2b', 'health', 'property', 'ict', 'other']),
  digital_stage: new Set(['social', 'brochure', 'commerce', 'integrated']),
  leaks: new Set(['visibility', 'trust', 'conversion', 'operations', 'measurement', 'automation']),
  primary_goal: new Set(['qualified-leads', 'direct-revenue', 'export-demand', 'booking', 'efficiency', 'clarity']),
  locale: new Set(['en', 'sq', 'mk', 'sr']),
};

function reply(status, body) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function text(value, max = 300) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 180;
}

function validOptionalUrl(value) {
  if (!value) return true;
  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && value.length <= 300;
  } catch {
    return false;
  }
}

async function enforceRateLimit(env, ip) {
  if (!env.DIAGNOSTIC_RATE_LIMIT || !ip) return true;
  const key = `diagnostic:${ip}`;
  const current = Number(await env.DIAGNOSTIC_RATE_LIMIT.get(key) || '0');
  if (current >= 5) return false;
  await env.DIAGNOSTIC_RATE_LIMIT.put(key, String(current + 1), { expirationTtl: 900 });
  return true;
}

async function forwardToCrm(env, payload) {
  if (!env.LEAD_WEBHOOK_URL) return;
  const headers = { 'content-type': 'application/json' };
  if (env.LEAD_WEBHOOK_SECRET) headers.authorization = `Bearer ${env.LEAD_WEBHOOK_SECRET}`;
  await fetch(env.LEAD_WEBHOOK_URL, { method: 'POST', headers, body: JSON.stringify(payload) });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) return reply(403, { ok: false, error: 'origin_rejected' });

  const length = Number(request.headers.get('content-length') || '0');
  if (length > 30000) return reply(413, { ok: false, error: 'payload_too_large' });

  let input;
  try {
    input = await request.json();
  } catch {
    return reply(400, { ok: false, error: 'invalid_json' });
  }

  if (text(input.website_confirm, 200)) return reply(200, { ok: true });

  const startedAt = Date.parse(text(input.started_at, 50));
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 3500) {
    return reply(429, { ok: false, error: 'submission_too_fast' });
  }

  const ip = text(request.headers.get('cf-connecting-ip'), 80);
  if (!(await enforceRateLimit(env, ip))) return reply(429, { ok: false, error: 'rate_limited' });

  const lead = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    first_name: text(input.first_name, 100),
    work_email: text(input.work_email, 180).toLowerCase(),
    phone: text(input.phone, 40),
    company: text(input.company, 160),
    website: text(input.website, 300),
    country: text(input.country, 10),
    sector: text(input.sector, 40),
    digital_stage: text(input.digital_stage, 40),
    leaks: Array.isArray(input.leaks) ? input.leaks.map((value) => text(value, 40)).filter((value) => allowed.leaks.has(value)).slice(0, 6) : [],
    primary_goal: text(input.primary_goal, 50),
    monthly_qualified_volume: text(input.monthly_qualified_volume, 80),
    context: text(input.context, 2000),
    consent: text(input.consent, 10),
    locale: text(input.locale, 5),
    source_path: text(input.source_path, 300),
    referrer: text(input.referrer, 500),
    utm_source: text(input.utm_source, 120),
    utm_medium: text(input.utm_medium, 120),
    utm_campaign: text(input.utm_campaign, 160),
    user_agent: text(request.headers.get('user-agent'), 500),
  };

  const invalid = [];
  if (lead.first_name.length < 2) invalid.push('first_name');
  if (!validEmail(lead.work_email)) invalid.push('work_email');
  if (lead.company.length < 2) invalid.push('company');
  if (!validOptionalUrl(lead.website)) invalid.push('website');
  if (!allowed.country.has(lead.country)) invalid.push('country');
  if (!allowed.sector.has(lead.sector)) invalid.push('sector');
  if (!allowed.digital_stage.has(lead.digital_stage)) invalid.push('digital_stage');
  if (!lead.leaks.length) invalid.push('leaks');
  if (!allowed.primary_goal.has(lead.primary_goal)) invalid.push('primary_goal');
  if (lead.context.length < 30) invalid.push('context');
  if (lead.consent !== 'yes') invalid.push('consent');
  if (!allowed.locale.has(lead.locale)) invalid.push('locale');
  if (invalid.length) return reply(422, { ok: false, error: 'validation_failed', fields: invalid });

  if (!env.LEADS_DB) return reply(503, { ok: false, error: 'lead_storage_not_configured' });

  await env.LEADS_DB.prepare(`
    INSERT INTO diagnostic_leads (
      id, created_at, first_name, work_email, phone, company, website, country, sector,
      digital_stage, leaks_json, primary_goal, monthly_qualified_volume, context, consent,
      locale, source_path, referrer, utm_source, utm_medium, utm_campaign, user_agent,
      status, payload_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', ?)
  `).bind(
    lead.id, lead.created_at, lead.first_name, lead.work_email, lead.phone, lead.company,
    lead.website, lead.country, lead.sector, lead.digital_stage, JSON.stringify(lead.leaks),
    lead.primary_goal, lead.monthly_qualified_volume, lead.context, lead.consent, lead.locale,
    lead.source_path, lead.referrer, lead.utm_source, lead.utm_medium, lead.utm_campaign,
    lead.user_agent, JSON.stringify(lead)
  ).run();

  context.waitUntil(forwardToCrm(env, { event: 'qct.diagnostic.submitted', lead }).catch(() => undefined));
  return reply(201, { ok: true, id: lead.id });
}

export function onRequest() {
  return reply(405, { ok: false, error: 'method_not_allowed' });
}
