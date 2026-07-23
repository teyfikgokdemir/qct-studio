import { readFile, writeFile } from 'node:fs/promises';

const translations = {
  sq: {
    'Both ventures were founded by Teyfik Gökdemir in 2025. QCT Studio focuses on Balkan markets, while QCT Commerce focuses on Türkiye.': 'Të dyja sipërmarrjet u themeluan nga Teyfik Gökdemir në vitin 2025. QCT Studio fokusohet në tregjet e Ballkanit, ndërsa QCT Commerce fokusohet në Türkiye.',
    'Founder website': 'Faqja e themeluesit',
    'How is QCT Studio connected to QCT Commerce?': 'Si lidhet QCT Studio me QCT Commerce?',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir as the Balkan-focused digital growth venture within the wider QCT ecosystem.': 'QCT Studio u themelua në Stamboll në vitin 2025 nga Teyfik Gökdemir si sipërmarrja e rritjes digjitale e fokusuar në Ballkan, brenda ekosistemit më të gjerë QCT.',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir. It is the Balkan-focused digital growth venture within the wider QCT ecosystem, alongside QCT Commerce for Türkiye and Mythborn for international markets.': 'QCT Studio u themelua në Stamboll në vitin 2025 nga Teyfik Gökdemir. Ajo është sipërmarrja e rritjes digjitale e fokusuar në Ballkan brenda ekosistemit më të gjerë QCT, së bashku me QCT Commerce për Türkiye dhe Mythborn për tregjet ndërkombëtare.',
    'When was QCT Studio founded?': 'Kur u themelua QCT Studio?'
  },
  mk: {
    'Both ventures were founded by Teyfik Gökdemir in 2025. QCT Studio focuses on Balkan markets, while QCT Commerce focuses on Türkiye.': 'Двете иницијативи ги основа Тeјфик Ѓокдемир во 2025 година. QCT Studio е насочено кон балканските пазари, додека QCT Commerce е насочено кон Türkiye.',
    'Founder website': 'Веб-страница на основачот',
    'How is QCT Studio connected to QCT Commerce?': 'Како е поврзано QCT Studio со QCT Commerce?',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir as the Balkan-focused digital growth venture within the wider QCT ecosystem.': 'QCT Studio е основано во Истанбул во 2025 година од Тeјфик Ѓокдемир како иницијатива за дигитален раст насочена кон Балканот во поширокиот QCT екосистем.',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir. It is the Balkan-focused digital growth venture within the wider QCT ecosystem, alongside QCT Commerce for Türkiye and Mythborn for international markets.': 'QCT Studio е основано во Истанбул во 2025 година од Тeјфик Ѓокдемир. Тоа е иницијативата за дигитален раст насочена кон Балканот во поширокиот QCT екосистем, заедно со QCT Commerce за Türkiye и Mythborn за меѓународните пазари.',
    'When was QCT Studio founded?': 'Кога е основано QCT Studio?'
  },
  sr: {
    'Both ventures were founded by Teyfik Gökdemir in 2025. QCT Studio focuses on Balkan markets, while QCT Commerce focuses on Türkiye.': 'Oba poduhvata osnovao je Teyfik Gökdemir 2025. godine. QCT Studio je usmeren na balkanska tržišta, dok je QCT Commerce usmeren na Türkiye.',
    'Founder website': 'Sajt osnivača',
    'How is QCT Studio connected to QCT Commerce?': 'Kako je QCT Studio povezan sa QCT Commerce?',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir as the Balkan-focused digital growth venture within the wider QCT ecosystem.': 'QCT Studio je osnovao Teyfik Gökdemir u Istanbulu 2025. godine kao poduhvat za digitalni rast usmeren na Balkan u okviru šireg QCT ekosistema.',
    'QCT Studio was founded in Istanbul in 2025 by Teyfik Gökdemir. It is the Balkan-focused digital growth venture within the wider QCT ecosystem, alongside QCT Commerce for Türkiye and Mythborn for international markets.': 'QCT Studio je osnovao Teyfik Gökdemir u Istanbulu 2025. godine. To je poduhvat za digitalni rast usmeren na Balkan u okviru šireg QCT ekosistema, zajedno sa QCT Commerce za Türkiye i Mythborn za međunarodna tržišta.',
    'When was QCT Studio founded?': 'Kada je osnovan QCT Studio?'
  }
};

for (const [locale, additions] of Object.entries(translations)) {
  const path = new URL(`../src/i18n/${locale}.json`, import.meta.url);
  const dictionary = JSON.parse(await readFile(path, 'utf8'));
  Object.assign(dictionary, additions);
  const sorted = Object.fromEntries(Object.entries(dictionary).sort(([a], [b]) => a.localeCompare(b, 'en')));
  await writeFile(path, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
}

console.log('Applied QCT ecosystem translations for SQ, MK and SR.');
