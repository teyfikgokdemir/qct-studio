const checks = [
  {
    url: 'https://qctstudio.com/sr/markets/serbia/',
    verify: async (response, body) =>
      response.ok &&
      body.includes('Potreba tržišta') &&
      body.includes('QCT sistem') &&
      !body.includes('>Market need<') &&
      !body.includes('>QCT system<') &&
      !body.includes('u<em>merljiv'),
    label: 'Serbian market hub design/localization',
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
      const response = await fetch(check.url, { redirect: 'follow', headers: { 'user-agent': 'QCT-Production-QA/1.0' } });
      const body = await response.text();
      last = `status=${response.status} url=${response.url} body=${body.slice(0, 180).replace(/\s+/g, ' ')}`;
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
