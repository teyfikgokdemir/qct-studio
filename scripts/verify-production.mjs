const checks = [
  {
    url: 'https://www.qctstudio.com/',
    redirectManual: true,
    verify: async (response) =>
      [301, 308].includes(response.status) &&
      response.headers.get('location') === 'https://qctstudio.com/',
    label: 'Canonical www to non-www redirect',
  },
  {
    url: 'https://qctstudio.com/insights/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('Practical QCT Studio insights on websites, e-commerce, SEO, GEO, AI search visibility and digital growth across Balkan markets.') &&
      !body.includes('name="description" content="Latest thinking"'),
    label: 'Insights descriptive metadata',
  },
  {
    url: 'https://qctstudio.com/mk/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('ДИГИТАЛНО СТУДИО ЗА РАСТ НА БАЛКАНОТ') &&
      body.includes('Премиум веб-страници, е-трговија, видливост во пребарување') &&
      body.includes('Мерливо предавање') &&
      !body.includes('ДИГИТАЛНО GROWTH СТУДИО') &&
      !body.includes('Premium веб-страници') &&
      !body.includes('Мерлив handoff'),
    label: 'Macedonian homepage localization',
  },
  {
    url: 'https://qctstudio.com/sq/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('OFERTË E KUFIZUAR PËR HYRJEN') &&
      body.includes('Automatizim me AI') &&
      !body.includes('OFERTË E KUFIZUAR LAUNCH'),
    label: 'Albanian homepage localization',
  },
  {
    url: 'https://qctstudio.com/sr/markets/serbia/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('Potreba tržišta') &&
      body.includes('QCT sistem') &&
      body.includes('/styles/market-hub.css?v=20260929-1') &&
      body.includes('body.v2-body .qct-floating-action') &&
      !body.includes('>Market need<') &&
      !body.includes('>QCT system<') &&
      !body.includes('u<em>merljiv'),
    label: 'Serbian market hub design/localization and mobile safe area',
  },
  {
    url: 'https://qctstudio.com/styles/market-hub.css?v=20260929-1',
    verify: async (response, body) =>
      response.ok &&
      body.includes('Shared brand bridge') &&
      body.includes('font-family:var(--qct-font-sans)'),
    label: 'Market Hub shared brand typography release',
  },
  {
    url: 'https://qctstudio.com/markets/serbia/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('Priority market playbooks'),
    label: 'English Serbia market hub',
  },
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (const check of checks) {
  let passed = false;
  let last = '';
  for (let attempt = 1; attempt <= 20; attempt++) {
    try {
      const response = await fetch(check.url, {
        redirect: check.redirectManual ? 'manual' : 'follow',
        headers: { 'user-agent': 'QCT-Production-QA/2.0', 'cache-control': 'no-cache' },
      });
      const body = check.redirectManual ? '' : await response.text();
      last = `status=${response.status} url=${response.url} location=${response.headers.get('location') || ''} body=${body.slice(0, 180).replace(/\s+/g, ' ')}`;
      if (await check.verify(response, body)) {
        console.log(`PASS: ${check.label} (attempt ${attempt})`);
        passed = true;
        break;
      }
    } catch (error) {
      last = String(error);
    }
    await wait(15000);
  }
  if (!passed) throw new Error(`Production verification failed: ${check.label}. Last response: ${last}`);
}
