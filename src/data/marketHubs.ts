export type MarketLang = 'en' | 'sq' | 'mk' | 'sr';
export type MarketSlug = 'albania' | 'north-macedonia' | 'kosovo' | 'serbia';

type Fact = {
  value: string;
  label: string;
  context: string;
  source: string;
  sourceUrl: string;
};

type Sector = {
  name: string;
  need: string;
  system: string;
};

type MarketCopy = {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  signalLabel: string;
  signal: string;
  gapTitle: string;
  gapIntro: string;
  facts: Fact[];
  opportunityTitle: string;
  opportunityCopy: string;
  playbookTitle: string;
  playbookIntro: string;
  sectors: Sector[];
  systemTitle: string;
  systemIntro: string;
  acquire: string;
  acquireCopy: string;
  convert: string;
  convertCopy: string;
  operate: string;
  operateCopy: string;
  evidenceTitle: string;
  evidenceCopy: string;
  evidenceNote: string;
  faqTitle: string;
  faqIntro: string;
  faqs: [string, string][];
  ctaTitle: string;
  ctaCopy: string;
  sourceLabel: string;
};

export type MarketDefinition = {
  slug: MarketSlug;
  code: string;
  localName: string;
  countryCode: string;
  accent: string;
  copy: Record<MarketLang, MarketCopy>;
};

const shared = {
  en: {
    nav: ['Market gap', 'Playbooks', 'System', 'Evidence'],
    contact: 'Start a project',
    home: 'Home',
    region: 'Balkan market system',
    systemLabels: ['Acquire', 'Convert', 'Operate'],
    footerMarkets: 'Markets',
    footerCompany: 'Company',
    footerServices: 'Systems',
    footerNote: 'Market research to owned growth operations.',
  },
  sq: {
    nav: ['Hendeku i tregut', 'Modelet', 'Sistemi', 'Evidenca'],
    contact: 'Nisni një projekt',
    home: 'Kryefaqja',
    region: 'Sistemi i tregut ballkanik',
    systemLabels: ['Tërhiq', 'Konverto', 'Opero'],
    footerMarkets: 'Tregjet',
    footerCompany: 'Kompania',
    footerServices: 'Sistemet',
    footerNote: 'Nga kërkimi i tregut te operacionet e rritjes që zotëroni.',
  },
  mk: {
    nav: ['Пазарен јаз', 'Модели', 'Систем', 'Докази'],
    contact: 'Започнете проект',
    home: 'Почетна',
    region: 'Балкански пазарен систем',
    systemLabels: ['Привлечи', 'Конвертирај', 'Управувај'],
    footerMarkets: 'Пазари',
    footerCompany: 'Компанија',
    footerServices: 'Системи',
    footerNote: 'Од пазарно истражување до сопствени операции за раст.',
  },
  sr: {
    nav: ['Tržišni jaz', 'Modeli', 'Sistem', 'Dokazi'],
    contact: 'Pokrenite projekat',
    home: 'Početna',
    region: 'Balkanski tržišni sistem',
    systemLabels: ['Privuci', 'Konvertuj', 'Upravljaj'],
    footerMarkets: 'Tržišta',
    footerCompany: 'Kompanija',
    footerServices: 'Sistemi',
    footerNote: 'Od istraživanja tržišta do sopstvenih operacija rasta.',
  },
} satisfies Record<MarketLang, Record<string, string | string[]>>;

const sourceUrls = {
  albaniaIct: 'https://www.instat.gov.al/en/themes/science-technology-and-innovation/information-and-communication-technologies/publication/2024/usage-of-information-and-communication-technologies-in-enterprises-2024/',
  albaniaTourism: 'https://www.oecd.org/en/publications/western-balkans-competitiveness-outlook-2024-albania_541ec4e7-en/full-report/component-20.html',
  albaniaPayments: 'https://www.bankofalbania.org/Publications/Periodic/Annual_Report/Annual_Report_2024.html',
  macedoniaReport: 'https://enlargement.ec.europa.eu/north-macedonia-report-2025_en',
  macedoniaEcommerce: 'https://ecommerce.mk/en/western-balkan-ecommerce-report-2024/',
  macedoniaStats: 'https://www.stat.mk/media/tawfucr2/sg-sy2025-web.pdf',
  kosovoDigital: 'https://www.oecd.org/en/publications/western-balkans-competitiveness-outlook-2024-kosovo_ff74ae0e-en/full-report/component-15.html',
  kosovoTourism: 'https://www.oecd.org/en/publications/western-balkans-competitiveness-outlook-2024-kosovo_ff74ae0e-en/full-report/component-20.html',
  serbiaIct: 'https://publikacije.stat.gov.rs/G2024/PdfE/G202416019.pdf',
  serbiaEcommerce: 'https://data.stat.gov.rs/Home/Result/270209?languageCode=en-US',
  serbiaPayments: 'https://www.nbs.rs/export/sites/NBS_site/documents-eng/platni-sistem/pregled-pu-ien/pu-ien_e_IV_25.pdf',
};

const albaniaFacts = {
  en: [
    ['99.3% / 57.7%', 'internet access / company website', 'Enterprises with 10+ employees, 2024. Connectivity is not the core gap; owned commercial presence is.', 'INSTAT enterprise ICT survey, 2024', sourceUrls.albaniaIct],
    ['83.1% / 24.5%', 'social media use / online selling', 'Social visibility substantially exceeds transactional maturity.', 'INSTAT enterprise ICT survey, 2024', sourceUrls.albaniaIct],
    ['21.6%', 'tourism share of GDP', 'Tourism is a major multilingual demand engine, but platform dependency and seasonality remain.', 'OECD Albania tourism policy, 2024', sourceUrls.albaniaTourism],
    ['+27.61%', 'annual POS terminal growth', 'Digital payments are expanding while cash remains commercially relevant.', 'Bank of Albania Annual Report 2024', sourceUrls.albaniaPayments],
  ],
  sq: [
    ['99.3% / 57.7%', 'akses në internet / faqe interneti', 'Ndërmarrje me 10+ punonjës, 2024. Lidhja nuk është hendeku kryesor; prania tregtare e zotëruar është.', 'Anketa TIK e ndërmarrjeve, INSTAT 2024', sourceUrls.albaniaIct],
    ['83.1% / 24.5%', 'përdorim i rrjeteve sociale / shitje online', 'Dukshmëria sociale tejkalon ndjeshëm pjekurinë transaksionale.', 'Anketa TIK e ndërmarrjeve, INSTAT 2024', sourceUrls.albaniaIct],
    ['21.6%', 'pjesa e turizmit në PBB', 'Turizmi është motor i kërkesës shumëgjuhëshe, por varësia nga platformat dhe sezonaliteti mbeten.', 'OECD, politika e turizmit në Shqipëri 2024', sourceUrls.albaniaTourism],
    ['+27.61%', 'rritja vjetore e terminaleve POS', 'Pagesat digjitale po zgjerohen, ndërsa paraja fizike mbetet e rëndësishme.', 'Raporti Vjetor 2024, Banka e Shqipërisë', sourceUrls.albaniaPayments],
  ],
  mk: [
    ['99,3% / 57,7%', 'интернет / деловна веб-страница', 'Претпријатија со 10+ вработени, 2024. Поврзаноста не е главниот јаз; сопственото комерцијално присуство е.', 'INSTAT, ИКТ истражување 2024', sourceUrls.albaniaIct],
    ['83,1% / 24,5%', 'социјални медиуми / онлајн продажба', 'Социјалната видливост значително ја надминува трансакциската зрелост.', 'INSTAT, ИКТ истражување 2024', sourceUrls.albaniaIct],
    ['21,6%', 'туризам во БДП', 'Туризмот создава повеќејазична побарувачка, но зависноста од платформи и сезоналноста остануваат.', 'OECD, туристичка политика за Албанија 2024', sourceUrls.albaniaTourism],
    ['+27,61%', 'годишен раст на POS терминали', 'Дигиталните плаќања растат, а готовината останува комерцијално релевантна.', 'Банка на Албанија, Годишен извештај 2024', sourceUrls.albaniaPayments],
  ],
  sr: [
    ['99,3% / 57,7%', 'internet / poslovni veb-sajt', 'Preduzeća sa 10+ zaposlenih, 2024. Povezanost nije glavni jaz; sopstveno komercijalno prisustvo jeste.', 'INSTAT IKT istraživanje, 2024', sourceUrls.albaniaIct],
    ['83,1% / 24,5%', 'društvene mreže / onlajn prodaja', 'Društvena vidljivost znatno prevazilazi transakcionu zrelost.', 'INSTAT IKT istraživanje, 2024', sourceUrls.albaniaIct],
    ['21,6%', 'udeo turizma u BDP-u', 'Turizam pokreće višejezičnu tražnju, ali zavisnost od platformi i sezonalnost ostaju.', 'OECD, turistička politika Albanije 2024', sourceUrls.albaniaTourism],
    ['+27,61%', 'godišnji rast POS terminala', 'Digitalna plaćanja rastu, dok gotovina ostaje komercijalno važna.', 'Banka Albanije, Godišnji izveštaj 2024', sourceUrls.albaniaPayments],
  ],
} as const;

const macedoniaFacts = {
  en: [
    ['90.8%', 'households with internet access', 'Access is mature; commercial execution and skills are the limiting layers.', 'European Commission North Macedonia Report 2025', sourceUrls.macedoniaReport],
    ['8.3%', 'enterprises making e-sales', 'Latest comparable 2022 baseline; EU-27 was 22.8%.', 'Western Balkan E-commerce Report 2024', sourceUrls.macedoniaEcommerce],
    ['72,181', 'active enterprises', 'About 90% were micro or had no ascertained employee count; qualification is essential.', 'State Statistical Office yearbook 2025', sourceUrls.macedoniaStats],
    ['76.9%', 'goods exports going to the EU', 'Export-facing firms need English technical proof and structured RFQ journeys.', 'European Commission North Macedonia Report 2025', sourceUrls.macedoniaReport],
  ],
  sq: [
    ['90.8%', 'familje me akses në internet', 'Aksesi është i pjekur; zbatimi tregtar dhe aftësitë janë shtresat kufizuese.', 'Raporti i KE për Maqedoninë e Veriut 2025', sourceUrls.macedoniaReport],
    ['8.3%', 'ndërmarrje që bëjnë shitje online', 'Vlera bazë më e fundit e krahasueshme për 2022; BE-27 ishte 22.8%.', 'Raporti i E-commerce për Ballkanin Perëndimor 2024', sourceUrls.macedoniaEcommerce],
    ['72,181', 'ndërmarrje aktive', 'Rreth 90% ishin mikro ose pa numër të përcaktuar punonjësish; kualifikimi është thelbësor.', 'Vjetari 2025, Enti Shtetëror i Statistikës', sourceUrls.macedoniaStats],
    ['76.9%', 'eksporte mallrash drejt BE-së', 'Firmat eksportuese kanë nevojë për prova teknike në anglisht dhe rrugë të strukturuara RFQ.', 'Raporti i KE për Maqedoninë e Veriut 2025', sourceUrls.macedoniaReport],
  ],
  mk: [
    ['90,8%', 'домаќинства со интернет', 'Пристапот е зрел; комерцијалната изведба и вештините се ограничувачките слоеви.', 'Европска комисија, Извештај за Северна Македонија 2025', sourceUrls.macedoniaReport],
    ['8,3%', 'претпријатија со е-продажба', 'Најновата споредлива основа е од 2022; ЕУ-27 беше 22,8%.', 'Western Balkan E-commerce Report 2024', sourceUrls.macedoniaEcommerce],
    ['72.181', 'активни претпријатија', 'Околу 90% биле микро или без утврден број вработени; квалификацијата е неопходна.', 'Државен завод за статистика, Годишник 2025', sourceUrls.macedoniaStats],
    ['76,9%', 'извоз на стоки кон ЕУ', 'На извозниците им треба англиска техничка доказна база и структуриран RFQ процес.', 'Европска комисија, Извештај 2025', sourceUrls.macedoniaReport],
  ],
  sr: [
    ['90,8%', 'domaćinstava sa internetom', 'Pristup je zreo; komercijalno izvođenje i veštine su ograničavajući slojevi.', 'Evropska komisija, Izveštaj za Severnu Makedoniju 2025', sourceUrls.macedoniaReport],
    ['8,3%', 'preduzeća koja prodaju onlajn', 'Najnovija uporediva osnova je iz 2022; EU-27 je bila 22,8%.', 'Western Balkan E-commerce Report 2024', sourceUrls.macedoniaEcommerce],
    ['72.181', 'aktivnih preduzeća', 'Oko 90% su mikro ili bez utvrđenog broja zaposlenih; kvalifikacija je presudna.', 'Državni zavod za statistiku, Godišnjak 2025', sourceUrls.macedoniaStats],
    ['76,9%', 'robnog izvoza prema EU', 'Izvoznicima trebaju tehnički dokazi na engleskom i strukturirani RFQ tokovi.', 'Evropska komisija, Izveštaj 2025', sourceUrls.macedoniaReport],
  ],
} as const;

const kosovoFacts = {
  en: [
    ['98.6%', 'households with internet access', 'Kosovo is connected; the commercial gap sits after access.', 'OECD Kosovo digital society, 2024 (2023 data)', sourceUrls.kosovoDigital],
    ['40%', 'enterprises with a website', 'Enterprise internet use was 97.1%, making owned-channel maturity the sharper gap.', 'OECD Kosovo digital society, 2024 (2022 data)', sourceUrls.kosovoDigital],
    ['76.1% / 4.8%', 'social media use / online sales', 'Attention is social; transactions and measurement remain limited.', 'OECD Kosovo digital society, 2024 (2022 data)', sourceUrls.kosovoDigital],
    ['94.8%', 'household users accessing by smartphone', 'Every journey must be fast, concise and message-ready on mobile.', 'OECD Kosovo digital society, 2024 (2023 data)', sourceUrls.kosovoDigital],
  ],
  sq: [
    ['98.6%', 'familje me akses në internet', 'Kosova është e lidhur; hendeku tregtar vjen pas aksesit.', 'OECD, shoqëria digjitale në Kosovë 2024 (të dhëna 2023)', sourceUrls.kosovoDigital],
    ['40%', 'ndërmarrje me faqe interneti', 'Përdorimi i internetit nga ndërmarrjet ishte 97.1%, ndaj kanali i zotëruar është hendeku më i qartë.', 'OECD, shoqëria digjitale në Kosovë 2024 (të dhëna 2022)', sourceUrls.kosovoDigital],
    ['76.1% / 4.8%', 'rrjete sociale / shitje online', 'Vëmendja është sociale; transaksionet dhe matja mbeten të kufizuara.', 'OECD, shoqëria digjitale në Kosovë 2024 (të dhëna 2022)', sourceUrls.kosovoDigital],
    ['94.8%', 'përdorues familjarë përmes telefonit', 'Çdo rrugëtim duhet të jetë i shpejtë, i qartë dhe i gatshëm për mesazhe në mobil.', 'OECD, shoqëria digjitale në Kosovë 2024 (të dhëna 2023)', sourceUrls.kosovoDigital],
  ],
  mk: [
    ['98,6%', 'домаќинства со интернет', 'Косово е поврзано; комерцијалниот јаз се појавува по пристапот.', 'OECD, дигитално општество Косово 2024 (податоци 2023)', sourceUrls.kosovoDigital],
    ['40%', 'претпријатија со веб-страница', 'Интернет користењето кај претпријатијата било 97,1%, па сопствениот канал е поостриот јаз.', 'OECD, дигитално општество Косово 2024 (податоци 2022)', sourceUrls.kosovoDigital],
    ['76,1% / 4,8%', 'социјални медиуми / онлајн продажба', 'Вниманието е на социјалните мрежи; трансакциите и мерењето остануваат ограничени.', 'OECD, дигитално општество Косово 2024 (податоци 2022)', sourceUrls.kosovoDigital],
    ['94,8%', 'корисници што пристапуваат со смартфон', 'Секое патување мора да биде брзо, концизно и подготвено за пораки на мобилен.', 'OECD, дигитално општество Косово 2024 (податоци 2023)', sourceUrls.kosovoDigital],
  ],
  sr: [
    ['98,6%', 'domaćinstava sa internetom', 'Kosovo je povezano; komercijalni jaz dolazi posle pristupa.', 'OECD, digitalno društvo Kosova 2024 (podaci 2023)', sourceUrls.kosovoDigital],
    ['40%', 'preduzeća sa veb-sajtom', 'Internet je koristilo 97,1% preduzeća, pa je sopstveni kanal izrazitiji jaz.', 'OECD, digitalno društvo Kosova 2024 (podaci 2022)', sourceUrls.kosovoDigital],
    ['76,1% / 4,8%', 'društvene mreže / onlajn prodaja', 'Pažnja je na društvenim mrežama; transakcije i merenje ostaju ograničeni.', 'OECD, digitalno društvo Kosova 2024 (podaci 2022)', sourceUrls.kosovoDigital],
    ['94,8%', 'korisnika pristupa pametnim telefonom', 'Svaki tok mora biti brz, sažet i spreman za poruke na mobilnom.', 'OECD, digitalno društvo Kosova 2024 (podaci 2023)', sourceUrls.kosovoDigital],
  ],
} as const;

const serbiaFacts = {
  en: [
    ['85.0% / 28.4%', 'company website / web sales', 'Serbia’s gap is not presence. It is the commercial performance of existing websites.', 'SORS Usage of ICT 2024', sourceUrls.serbiaIct],
    ['53.6%', 'individuals purchasing online', 'Share buying in the previous three months in 2025; online buying is mainstream.', 'SORS e-commerce time series, 2025', sourceUrls.serbiaEcommerce],
    ['110.6m', 'online-purchase transactions', 'Card and e-money online transactions in 2025, up 34.3% year on year.', 'National Bank of Serbia, 2025 payments', sourceUrls.serbiaPayments],
    ['7.0%', 'enterprises using AI', 'Practical, bounded automation is a stronger entry point than transformation theatre.', 'SORS Usage of ICT 2024', sourceUrls.serbiaIct],
  ],
  sq: [
    ['85.0% / 28.4%', 'faqe interneti / shitje në web', 'Hendeku i Serbisë nuk është prania. Është performanca tregtare e faqeve ekzistuese.', 'SORS, Përdorimi i TIK 2024', sourceUrls.serbiaIct],
    ['53.6%', 'individë që blejnë online', 'Pjesa që bleu në tre muajt e fundit të 2025; blerja online është e zakonshme.', 'SORS, seria e e-commerce 2025', sourceUrls.serbiaEcommerce],
    ['110.6 mln', 'transaksione blerjeje online', 'Transaksione me kartë dhe para elektronike në 2025, +34.3% në vit.', 'Banka Kombëtare e Serbisë, pagesat 2025', sourceUrls.serbiaPayments],
    ['7.0%', 'ndërmarrje që përdorin AI', 'Automatizimi praktik dhe i kufizuar është hyrje më e fortë se retorika e transformimit.', 'SORS, Përdorimi i TIK 2024', sourceUrls.serbiaIct],
  ],
  mk: [
    ['85,0% / 28,4%', 'веб-страница / веб-продажба', 'Јазот во Србија не е присуството, туку комерцијалните перформанси на постојните страници.', 'SORS, Користење ИКТ 2024', sourceUrls.serbiaIct],
    ['53,6%', 'лица што купуваат онлајн', 'Удел што купувал во претходните три месеци во 2025; онлајн купувањето е мејнстрим.', 'SORS, е-трговија 2025', sourceUrls.serbiaEcommerce],
    ['110,6 млн.', 'онлајн трансакции за купување', 'Картични и е-парични трансакции во 2025, раст од 34,3%.', 'Народна банка на Србија, плаќања 2025', sourceUrls.serbiaPayments],
    ['7,0%', 'претпријатија што користат ВИ', 'Практичната, ограничена автоматизација е посилен почеток од празна трансформациска реторика.', 'SORS, Користење ИКТ 2024', sourceUrls.serbiaIct],
  ],
  sr: [
    ['85,0% / 28,4%', 'veb-sajt / veb-prodaja', 'Jaz u Srbiji nije prisustvo, već komercijalni učinak postojećih sajtova.', 'RZS, Upotreba IKT 2024', sourceUrls.serbiaIct],
    ['53,6%', 'pojedinaca kupuje onlajn', 'Udeo koji je kupovao u prethodna tri meseca 2025; onlajn kupovina je postala uobičajena.', 'RZS, vremenska serija e-trgovine 2025', sourceUrls.serbiaEcommerce],
    ['110,6 mil.', 'onlajn kupovnih transakcija', 'Kartične i transakcije e-novcem u 2025, rast 34,3% godišnje.', 'Narodna banka Srbije, platni promet 2025', sourceUrls.serbiaPayments],
    ['7,0%', 'preduzeća koristi AI', 'Praktična, ograničena automatizacija je bolja početna tačka od priče o velikoj transformaciji.', 'RZS, Upotreba IKT 2024', sourceUrls.serbiaIct],
  ],
} as const;

const normalizeFacts = (facts: readonly (readonly [string, string, string, string, string])[]): Fact[] =>
  facts.map(([value, label, context, source, sourceUrl]) => ({ value, label, context, source, sourceUrl }));

const sectorSets: Record<MarketSlug, Record<MarketLang, Sector[]>> = {
  albania: {
    en: [
      { name: 'Hospitality & tourism', need: 'Direct demand, multilingual discovery and off-season visibility.', system: 'Bilingual destination architecture, direct enquiry/booking, maps, reviews and CRM follow-up.' },
      { name: 'Retail & specialty commerce', need: 'Social traffic exists, but trust, payment and delivery still leak demand.', system: 'Mobile catalogue/store, card or assisted options, delivery/returns clarity and customer lifecycle.' },
      { name: 'Property & construction', need: 'Project proof and diaspora enquiries are often fragmented across channels.', system: 'Portfolio, project pages, English buyer paths, WhatsApp qualification and pipeline routing.' },
      { name: 'Exporters & professional firms', need: 'International buyers require credible English proof and clear next steps.', system: 'Authority content, capabilities, case evidence, RFQ flows and source-tracked CRM.' },
    ],
    sq: [
      { name: 'Mikpritje dhe turizëm', need: 'Kërkesë direkte, zbulim shumëgjuhësh dhe dukshmëri jashtë sezonit.', system: 'Arkitekturë dygjuhëshe, rezervim/kërkesë direkte, harta, vlerësime dhe ndjekje në CRM.' },
      { name: 'Shitje me pakicë', need: 'Trafiku social ekziston, por besimi, pagesa dhe dorëzimi humbasin kërkesë.', system: 'Katalog/dyqan mobil, pagesë ose asistencë, politika të qarta dhe cikël klienti.' },
      { name: 'Prona dhe ndërtim', need: 'Provat e projekteve dhe kërkesat e diasporës shpërndahen në shumë kanale.', system: 'Portofol, faqe projektesh, rrugë në anglisht, kualifikim në WhatsApp dhe CRM.' },
      { name: 'Eksportues dhe shërbime B2B', need: 'Blerësit ndërkombëtarë kërkojnë prova në anglisht dhe hap të qartë vijues.', system: 'Përmbajtje autoritative, kapacitete, raste, RFQ dhe CRM me burim të matur.' },
    ],
    mk: [
      { name: 'Угостителство и туризам', need: 'Директна побарувачка, повеќејазично откривање и видливост надвор од сезона.', system: 'Двојазична архитектура, директно барање/резервација, мапи, рецензии и CRM.' },
      { name: 'Малопродажба', need: 'Социјалниот сообраќај постои, но довербата, плаќањето и испораката губат побарувачка.', system: 'Мобилен каталог/продавница, асистирано плаќање, јасни политики и животен циклус.' },
      { name: 'Недвижности и градежништво', need: 'Доказите за проекти и дијаспорските барања се расцепкани.', system: 'Портфолио, проектни страници, англиски патеки, WhatsApp квалификација и CRM.' },
      { name: 'Извозници и B2B услуги', need: 'На меѓународните купувачи им требаат англиски докази и јасен следен чекор.', system: 'Авторитетна содржина, способности, случаи, RFQ и CRM со следење на извор.' },
    ],
    sr: [
      { name: 'Ugostiteljstvo i turizam', need: 'Direktna tražnja, višejezično otkrivanje i vidljivost van sezone.', system: 'Dvojezična arhitektura, direktan upit/rezervacija, mape, recenzije i CRM.' },
      { name: 'Maloprodaja', need: 'Društveni saobraćaj postoji, ali poverenje, plaćanje i isporuka gube tražnju.', system: 'Mobilni katalog/prodavnica, asistirano plaćanje, jasne politike i životni ciklus.' },
      { name: 'Nekretnine i građevina', need: 'Dokazi o projektima i upiti dijaspore rasuti su kroz kanale.', system: 'Portfolio, projektne stranice, engleski tokovi, WhatsApp kvalifikacija i CRM.' },
      { name: 'Izvoznici i B2B usluge', need: 'Međunarodnim kupcima trebaju engleski dokazi i jasan sledeći korak.', system: 'Autoritativan sadržaj, sposobnosti, studije, RFQ i CRM sa praćenjem izvora.' },
    ],
  },
  'north-macedonia': {
    en: [
      { name: 'Retail & omnichannel brands', need: 'E-sales lag while trust, cash-on-delivery and fulfilment shape conversion.', system: 'Verified-trust modules, local payment discovery, delivery logic, WhatsApp and CRM.' },
      { name: 'Hospitality & tourism', need: 'Multilingual local and visitor demand needs low-friction booking paths.', system: 'Macedonian, Albanian and English discovery, booking/enquiry, local SEO and follow-up.' },
      { name: 'Manufacturing & exporters', need: 'EU-facing firms need structured technical evidence and distributor leads.', system: 'English-first capabilities, technical catalogue, RFQ routing and distributor CRM.' },
      { name: 'Health & professional services', need: 'High-intent enquiries require trust, language fit and reliable response.', system: 'Expertise pages, local discovery, appointment/consultation capture and response SLAs.' },
    ],
    sq: [
      { name: 'Marka retail dhe omnichannel', need: 'Shitjet online mbeten prapa, ndërsa besimi, CoD dhe përmbushja formësojnë konvertimin.', system: 'Module besimi, zbulim pagesash lokale, dorëzim, WhatsApp dhe CRM.' },
      { name: 'Mikpritje dhe turizëm', need: 'Kërkesa vendase dhe e vizitorëve kërkon rrugë rezervimi pa pengesa.', system: 'Zbulim maqedonisht, shqip dhe anglisht, rezervim, SEO lokale dhe ndjekje.' },
      { name: 'Prodhues dhe eksportues', need: 'Firmat drejt BE-së kanë nevojë për prova teknike dhe kërkesa distributori.', system: 'Kapacitete në anglisht, katalog teknik, RFQ dhe CRM për distributorë.' },
      { name: 'Shëndetësi dhe shërbime', need: 'Kërkesat me synim të lartë duan besim, gjuhë të saktë dhe përgjigje të besueshme.', system: 'Faqe ekspertize, zbulim lokal, takim/konsultë dhe standard përgjigjeje.' },
    ],
    mk: [
      { name: 'Малопродажни и омниканал брендови', need: 'Е-продажбата заостанува, а довербата, плаќањето при достава и исполнувањето ја обликуваат конверзијата.', system: 'Модули за доверба, локални плаќања, достава, WhatsApp и CRM.' },
      { name: 'Угостителство и туризам', need: 'Домашната и посетителската побарувачка бара повеќејазични патеки без триење.', system: 'Македонско, албанско и англиско откривање, резервации, локално SEO и следење.' },
      { name: 'Производство и извоз', need: 'На фирмите ориентирани кон ЕУ им требаат технички докази и дистрибутерски контакти.', system: 'Англиски способности, технички каталог, RFQ насочување и CRM за дистрибутери.' },
      { name: 'Здравство и професионални услуги', need: 'Барањата со висока намера бараат доверба, јазична усогласеност и сигурен одговор.', system: 'Експертски страници, локално откривање, термин/консултација и SLA за одговор.' },
    ],
    sr: [
      { name: 'Maloprodajni i omnikanal brendovi', need: 'E-prodaja zaostaje, dok poverenje, plaćanje pouzećem i isporuka oblikuju konverziju.', system: 'Moduli poverenja, lokalna plaćanja, dostava, WhatsApp i CRM.' },
      { name: 'Ugostiteljstvo i turizam', need: 'Lokalna i posetilačka tražnja zahteva višejezične tokove bez trenja.', system: 'Makedonsko, albansko i englesko otkrivanje, rezervacije, lokalni SEO i praćenje.' },
      { name: 'Proizvodnja i izvoz', need: 'Firmama prema EU trebaju tehnički dokazi i upiti distributera.', system: 'Engleske sposobnosti, tehnički katalog, RFQ usmeravanje i distributerski CRM.' },
      { name: 'Zdravstvo i profesionalne usluge', need: 'Upiti visoke namere traže poverenje, odgovarajući jezik i pouzdan odgovor.', system: 'Stranice stručnosti, lokalno otkrivanje, termini/konsultacije i SLA odgovora.' },
    ],
  },
  kosovo: {
    en: [
      { name: 'Retail & social sellers', need: 'Social attention is strong; owned product, order and customer data is weak.', system: 'Mobile catalogue/store, assisted ordering, delivery/returns, tracking and CRM segments.' },
      { name: 'Tourism & hospitality', need: 'Diaspora and visitor demand need multilingual direct paths and local proof.', system: 'Albanian/English discovery, maps, reviews, booking/enquiry and WhatsApp concierge.' },
      { name: 'Property & construction', need: 'Diaspora investment and project interest require structured qualification.', system: 'Project evidence, property pages, viewing/consultation flows and lead routing.' },
      { name: 'ICT, BPO & exporters', need: 'International firms rely too heavily on referrals and need buyer-grade proof.', system: 'English positioning, case studies, account pages, RFQ/consultation and pipeline CRM.' },
    ],
    sq: [
      { name: 'Retail dhe shitës socialë', need: 'Vëmendja sociale është e fortë; të dhënat e produktit, porosisë dhe klientit janë të dobëta.', system: 'Katalog/dyqan mobil, porosi e asistuar, dorëzim/kthim, matje dhe segmente CRM.' },
      { name: 'Turizëm dhe mikpritje', need: 'Diaspora dhe vizitorët kanë nevojë për rrugë direkte shumëgjuhëshe dhe prova lokale.', system: 'Zbulim shqip/anglisht, harta, vlerësime, rezervim dhe concierge në WhatsApp.' },
      { name: 'Prona dhe ndërtim', need: 'Investimi i diasporës dhe interesi për projekte kërkojnë kualifikim të strukturuar.', system: 'Prova projekti, faqe prone, vizita/konsulta dhe drejtim i kërkesës.' },
      { name: 'TIK, BPO dhe eksportues', need: 'Firmat ndërkombëtare varen shumë nga referimet dhe duan prova për blerësit.', system: 'Pozicionim në anglisht, raste, faqe llogarish, RFQ/konsultë dhe CRM.' },
    ],
    mk: [
      { name: 'Малопродажба и социјални продавачи', need: 'Социјалното внимание е силно; сопствените податоци за производ, нарачка и клиент се слаби.', system: 'Мобилен каталог, асистирано нарачување, достава/враќање, мерење и CRM.' },
      { name: 'Туризам и угостителство', need: 'На дијаспората и посетителите им требаат директни повеќејазични патеки и локални докази.', system: 'Албанско/англиско откривање, мапи, рецензии, резервации и WhatsApp.' },
      { name: 'Недвижности и градежништво', need: 'Дијаспорските инвестиции и проектниот интерес бараат структурирана квалификација.', system: 'Проектни докази, имотни страници, посети/консултации и насочување.' },
      { name: 'ИКТ, BPO и извозници', need: 'Меѓународните фирми премногу зависат од препораки и бараат купувачки докази.', system: 'Англиско позиционирање, случаи, account страници, RFQ/консултација и CRM.' },
    ],
    sr: [
      { name: 'Maloprodaja i društveni prodavci', need: 'Društvena pažnja je jaka; sopstveni podaci o proizvodu, porudžbini i kupcu su slabi.', system: 'Mobilni katalog/prodavnica, asistirana porudžbina, isporuka/povrat, merenje i CRM.' },
      { name: 'Turizam i ugostiteljstvo', need: 'Dijaspori i posetiocima trebaju direktni višejezični tokovi i lokalni dokazi.', system: 'Albansko/englesko otkrivanje, mape, recenzije, rezervacije i WhatsApp concierge.' },
      { name: 'Nekretnine i građevina', need: 'Ulaganje dijaspore i interesovanje za projekte traže strukturiranu kvalifikaciju.', system: 'Dokazi o projektu, stranice imovine, posete/konsultacije i usmeravanje upita.' },
      { name: 'IKT, BPO i izvoznici', need: 'Međunarodne firme se previše oslanjaju na preporuke i trebaju dokaze za kupce.', system: 'Englesko pozicioniranje, studije, account stranice, RFQ/konsultacije i CRM.' },
    ],
  },
  serbia: {
    en: [
      { name: 'Retail & distribution', need: 'Existing sites need better conversion, local payments and catalogue operations.', system: 'Commerce rebuild, RSD/payment discovery, product feeds, lifecycle CRM and analytics.' },
      { name: 'Tourism & hospitality', need: 'Large international demand requires Serbian-English direct journeys.', system: 'Booking/enquiry architecture, local discovery, reputation proof and guest follow-up.' },
      { name: 'Clinics & appointment services', need: 'High-value local demand needs expertise, trust and accountable response.', system: 'Service/location SEO, practitioner proof, consent-aware capture and lead attribution.' },
      { name: 'Manufacturers & B2B exporters', need: 'High website penetration masks weak buyer enablement and lead operations.', system: 'Serbian-English technical proof, specifications, distributor/RFQ flows and sales CRM.' },
    ],
    sq: [
      { name: 'Retail dhe distribucion', need: 'Faqet ekzistuese duan konvertim, pagesa lokale dhe operacione katalogu më të mira.', system: 'Rindërtim commerce, zbulim RSD/pagesash, feed produkti, CRM dhe analitikë.' },
      { name: 'Turizëm dhe mikpritje', need: 'Kërkesa e madhe ndërkombëtare kërkon rrugë direkte serbisht-anglisht.', system: 'Rezervim/kërkesë, zbulim lokal, reputacion dhe ndjekje e mysafirit.' },
      { name: 'Klinika dhe shërbime me takim', need: 'Kërkesa lokale me vlerë të lartë do ekspertizë, besim dhe përgjigje të matshme.', system: 'SEO shërbimi/lokacioni, prova mjeku, kapje me pëlqim dhe atribuim.' },
      { name: 'Prodhues dhe eksportues B2B', need: 'Penetrimi i lartë i faqeve fsheh dobësi në ndihmën për blerësin dhe menaxhimin e lead-eve.', system: 'Prova teknike serbisht-anglisht, specifika, RFQ/distributor dhe CRM.' },
    ],
    mk: [
      { name: 'Малопродажба и дистрибуција', need: 'На постојните страници им треба подобра конверзија, локални плаќања и каталошки операции.', system: 'Commerce редизајн, RSD/плаќања, product feeds, CRM и аналитика.' },
      { name: 'Туризам и угостителство', need: 'Големата меѓународна побарувачка бара директни српско-англиски патеки.', system: 'Резервации/барања, локално откривање, репутација и следење гости.' },
      { name: 'Клиники и услуги со термини', need: 'Високовредната локална побарувачка бара експертиза, доверба и одговорност.', system: 'SEO за услуга/локација, експертски докази, consent capture и атрибуција.' },
      { name: 'Производители и B2B извозници', need: 'Високото присуство на веб крие слабо buyer enablement и lead операции.', system: 'Српско-англиски технички докази, спецификации, RFQ/дистрибутери и CRM.' },
    ],
    sr: [
      { name: 'Maloprodaja i distribucija', need: 'Postojećim sajtovima trebaju bolja konverzija, lokalna plaćanja i kataloške operacije.', system: 'Commerce rekonstrukcija, RSD/plaćanja, produktni feedovi, CRM i analitika.' },
      { name: 'Turizam i ugostiteljstvo', need: 'Velika međunarodna tražnja zahteva direktne srpsko-engleske tokove.', system: 'Rezervacije/upiti, lokalno otkrivanje, reputacija i praćenje gostiju.' },
      { name: 'Klinike i usluge sa zakazivanjem', need: 'Lokalna tražnja visoke vrednosti zahteva stručnost, poverenje i odgovoran odgovor.', system: 'SEO usluge/lokacije, dokazi stručnjaka, pristanak i atribucija upita.' },
      { name: 'Proizvođači i B2B izvoznici', need: 'Visoka zastupljenost sajtova prikriva slabo buyer enablement i prodajne operacije.', system: 'Srpsko-engleski tehnički dokazi, specifikacije, RFQ/distributeri i CRM.' },
    ],
  },
};

const commonCopy: Record<MarketLang, Omit<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'facts' | 'sectors' | 'faqs'>> = {
  en: {
    primaryCta: 'Run the regional diagnostic', secondaryCta: 'See the market evidence', signalLabel: 'Verified market signal', gapTitle: 'The market gap, in numbers.', gapIntro: 'We use dated, named sources and preserve the scope of every figure. No invented search volume, no unsupported market-size theatre.', opportunityTitle: 'The commercial opportunity', opportunityCopy: 'Build the smallest owned system that closes the real demand leak: discovery, trust, conversion, lead capture, follow-up or transaction operations.', playbookTitle: 'Priority market playbooks', playbookIntro: 'We do not translate one generic service list. Each playbook starts from the sector’s buying behaviour, operational constraints and evidence burden.', systemTitle: 'Acquire. Convert. Operate.', systemIntro: 'Every project is designed as accountable handoffs—not a collection of disconnected channels.', acquire: 'Be found for the problem you solve.', acquireCopy: 'Local-language intent architecture, technical SEO, answer-first content and paid landing pages tied to measurable demand.', convert: 'Turn attention into a commercial action.', convertCopy: 'Trust proof, clear offers, mobile UX, local payment or assisted-buying paths, and event-level measurement.', operate: 'Keep the lead and the learning.', operateCopy: 'Lean CRM, source attribution, response ownership, dashboards and controlled automation after the process is stable.', evidenceTitle: 'Evidence before agency claims.', evidenceCopy: 'Every statistic links to its source. Search demand is validated after launch with Search Console, campaign data and sales conversations—not presented as fact before measurement.', evidenceNote: 'Project results are published only when source data and client permission are available.', faqTitle: 'Questions serious buyers ask', faqIntro: 'Direct answers, explicit dependencies and no fixed-duration promises.', ctaTitle: 'Map the right first system.', ctaCopy: 'We will identify the market, sector, commercial leak, operating constraints and evidence needed before defining scope.', sourceLabel: 'Open source',
  },
  sq: {
    primaryCta: 'Nisni diagnostikimin rajonal', secondaryCta: 'Shihni evidencën e tregut', signalLabel: 'Sinjal i verifikuar i tregut', gapTitle: 'Hendeku i tregut, në numra.', gapIntro: 'Përdorim burime me emër e datë dhe ruajmë kufijtë e çdo shifre. Pa volum kërkimi të shpikur dhe pa teatër madhësie tregu.', opportunityTitle: 'Mundësia tregtare', opportunityCopy: 'Ndërtoni sistemin më të vogël që zotëroni dhe që mbyll rrjedhjen reale: zbulim, besim, konvertim, kapje, ndjekje ose transaksion.', playbookTitle: 'Modelet prioritare të tregut', playbookIntro: 'Nuk përkthejmë një listë gjenerike shërbimesh. Çdo model nis nga sjellja e blerësit, kufizimet operative dhe barra e provës.', systemTitle: 'Tërhiq. Konverto. Opero.', systemIntro: 'Çdo projekt projektohet si kalime të përgjegjshme, jo si kanale të shkëputura.', acquire: 'Gjenduni për problemin që zgjidhni.', acquireCopy: 'Arkitekturë e synimit në gjuhën lokale, SEO teknike, përgjigje të qarta dhe landing pages të matshme.', convert: 'Ktheni vëmendjen në veprim tregtar.', convertCopy: 'Prova besimi, ofertë e qartë, UX mobil, pagesë lokale ose blerje e asistuar dhe matje eventesh.', operate: 'Mbani lead-in dhe mësimin.', operateCopy: 'CRM i thjeshtë, atribuim burimi, pronar përgjigjeje, dashboard dhe automatizim i kontrolluar.', evidenceTitle: 'Evidenca para pretendimeve të agjencisë.', evidenceCopy: 'Çdo statistikë lidhet me burimin. Kërkesa e kërkimit vërtetohet pas publikimit me Search Console, fushata dhe biseda shitjeje.', evidenceNote: 'Rezultatet publikohen vetëm kur ka të dhëna burimore dhe leje klienti.', faqTitle: 'Pyetjet që bëjnë blerësit seriozë', faqIntro: 'Përgjigje të drejtpërdrejta, varësi të qarta dhe pa premtime me afat fiks.', ctaTitle: 'Hartoni sistemin e duhur të parë.', ctaCopy: 'Para fushëveprimit përcaktojmë tregun, sektorin, rrjedhjen tregtare, kufizimet dhe evidencën e nevojshme.', sourceLabel: 'Hap burimin',
  },
  mk: {
    primaryCta: 'Започнете регионална дијагностика', secondaryCta: 'Погледнете ги пазарните докази', signalLabel: 'Потврден пазарен сигнал', gapTitle: 'Пазарниот јаз, во бројки.', gapIntro: 'Користиме именувани, датирани извори и го чуваме опсегот на секоја бројка. Без измислен search volume и без театар за големина на пазар.', opportunityTitle: 'Комерцијалната можност', opportunityCopy: 'Изградете го најмалиот сопствен систем што го затвора реалното истекување: откривање, доверба, конверзија, capture, следење или трансакции.', playbookTitle: 'Приоритетни пазарни модели', playbookIntro: 'Не преведуваме една генеричка листа на услуги. Секој модел започнува од однесувањето на купувачот, оперативните ограничувања и доказниот товар.', systemTitle: 'Привлечи. Конвертирај. Управувај.', systemIntro: 'Секој проект е дизајниран како одговорно предавање, а не како неповрзани канали.', acquire: 'Бидете пронајдени за проблемот што го решавате.', acquireCopy: 'Архитектура на локална намера, техничко SEO, answer-first содржина и мерливи landing pages.', convert: 'Претворете го вниманието во комерцијална акција.', convertCopy: 'Докази за доверба, јасна понуда, mobile UX, локално плаќање или асистирано купување и мерење.', operate: 'Задржете го lead-от и учењето.', operateCopy: 'Lean CRM, атрибуција на извор, сопственик на одговор, dashboard и контролирана автоматизација.', evidenceTitle: 'Докази пред агенциски тврдења.', evidenceCopy: 'Секоја статистика води до извор. Search побарувачката се потврдува по пуштање преку Search Console, кампањи и продажни разговори.', evidenceNote: 'Резултати се објавуваат само со изворни податоци и дозвола од клиентот.', faqTitle: 'Прашања што ги поставуваат сериозни купувачи', faqIntro: 'Директни одговори, експлицитни зависности и без ветувања со фиксен рок.', ctaTitle: 'Мапирајте го вистинскиот прв систем.', ctaCopy: 'Пред опсегот ги утврдуваме пазарот, секторот, комерцијалното истекување, ограничувањата и потребните докази.', sourceLabel: 'Отвори извор',
  },
  sr: {
    primaryCta: 'Pokrenite regionalnu dijagnostiku', secondaryCta: 'Pogledajte tržišne dokaze', signalLabel: 'Proveren tržišni signal', gapTitle: 'Tržišni jaz, u brojkama.', gapIntro: 'Koristimo imenovane i datirane izvore i čuvamo opseg svake brojke. Bez izmišljenog obima pretrage i bez predstave o veličini tržišta.', opportunityTitle: 'Komercijalna prilika', opportunityCopy: 'Izgradite najmanji sopstveni sistem koji zatvara stvarno curenje: otkrivanje, poverenje, konverziju, capture, praćenje ili transakcije.', playbookTitle: 'Prioritetni tržišni modeli', playbookIntro: 'Ne prevodimo jednu generičku listu usluga. Svaki model polazi od ponašanja kupca, operativnih ograničenja i tereta dokaza.', systemTitle: 'Privuci. Konvertuj. Upravljaj.', systemIntro: 'Svaki projekat je dizajniran kao odgovorna primopredaja, a ne kao skup nepovezanih kanala.', acquire: 'Budite pronađeni za problem koji rešavate.', acquireCopy: 'Arhitektura lokalne namere, tehnički SEO, answer-first sadržaj i merljive landing stranice.', convert: 'Pretvorite pažnju u komercijalnu akciju.', convertCopy: 'Dokazi poverenja, jasna ponuda, mobilni UX, lokalno plaćanje ili asistirana kupovina i merenje.', operate: 'Sačuvajte lead i učenje.', operateCopy: 'Lean CRM, atribucija izvora, vlasnik odgovora, dashboard i kontrolisana automatizacija.', evidenceTitle: 'Dokazi pre agencijskih tvrdnji.', evidenceCopy: 'Svaka statistika vodi do izvora. Tražnju pretrage potvrđujemo posle objave kroz Search Console, kampanje i prodajne razgovore.', evidenceNote: 'Rezultate objavljujemo samo uz izvorne podatke i dozvolu klijenta.', faqTitle: 'Pitanja koja postavljaju ozbiljni kupci', faqIntro: 'Direktni odgovori, jasne zavisnosti i bez obećanja fiksnog roka.', ctaTitle: 'Mapirajte pravi prvi sistem.', ctaCopy: 'Pre obima definišemo tržište, sektor, komercijalno curenje, ograničenja i potrebne dokaze.', sourceLabel: 'Otvori izvor',
  },
};

const marketSpecific: Record<MarketSlug, Record<MarketLang, Pick<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'faqs'>>> = {
  albania: {
    en: { title: 'Digital Growth Systems for Albanian Businesses — QCT Studio', description: 'Bilingual websites, commerce, SEO, CRM and practical AI systems designed around how established Albanian businesses acquire, convert and operate.', eyebrow: 'Albania market system', headline: 'Turn social demand into an', headlineAccent: 'owned Albanian growth system.', intro: 'For established businesses in Albania, the opportunity is not another social profile. It is a bilingual, measurable commercial system that connects discovery, trust, WhatsApp, payment or enquiry and CRM follow-up.', signal: 'Social adoption is high. Owned websites and online selling remain materially lower.', faqs: [['Do we need a new website if Instagram already brings customers?', 'Not automatically. We first diagnose what demand is lost between social discovery, trust, enquiry, order and follow-up. The right first system may be a focused bilingual site, catalogue, booking flow or full store.'], ['Should an Albanian store support cash on delivery?', 'Where the merchant and category require it, yes. We scope card or virtual-POS options with approved providers and preserve assisted or cash-on-delivery paths when commercially necessary.'], ['Can you guarantee Google rankings or AI citations?', 'No. We implement the technical, content and evidence foundation, then measure indexed visibility, qualified actions and revenue-linked signals.'], ['Which languages should we launch?', 'Albanian should serve local trust and search. English is usually essential for tourism, diaspora, exporters and international professional services.'], ['How long will the project take?', 'Timing depends on content, integrations, approvals, languages and operational readiness. We define milestones after diagnostic work rather than publishing a fixed-duration promise.']] },
    sq: { title: 'Sisteme të Rritjes Digjitale për Bizneset Shqiptare — QCT Studio', description: 'Faqe dygjuhëshe, commerce, SEO, CRM dhe AI praktike sipas mënyrës si bizneset shqiptare tërheqin, konvertojnë dhe operojnë.', eyebrow: 'Sistemi i tregut shqiptar', headline: 'Kthejeni kërkesën sociale në një', headlineAccent: 'sistem shqiptar rritjeje që zotëroni.', intro: 'Për bizneset e konsoliduara në Shqipëri, mundësia nuk është një profil tjetër social. Është një sistem dygjuhësh dhe i matshëm që lidh zbulimin, besimin, WhatsApp, pagesën ose kërkesën dhe ndjekjen në CRM.', signal: 'Përdorimi social është i lartë. Faqet e zotëruara dhe shitja online mbeten dukshëm më poshtë.', faqs: [['A na duhet faqe e re nëse Instagram sjell klientë?', 'Jo automatikisht. Fillimisht diagnostikojmë ku humbet kërkesa mes zbulimit, besimit, kontaktit, porosisë dhe ndjekjes.'], ['A duhet dyqani shqiptar të mbështesë pagesën në dorëzim?', 'Kur kategoria dhe operacioni e kërkojnë, po. Integrojmë opsione karte/POS me ofrues të miratuar dhe ruajmë rrugë të asistuara.'], ['A garantoni renditje në Google ose citime AI?', 'Jo. Ndërtojmë bazën teknike, editoriale dhe të provave, pastaj masim dukshmërinë dhe veprimet e kualifikuara.'], ['Me cilat gjuhë duhet të nisim?', 'Shqip për besimin dhe kërkimin lokal; anglisht për turizmin, diasporën, eksportuesit dhe shërbimet ndërkombëtare.'], ['Sa zgjat projekti?', 'Varet nga përmbajtja, integrimet, miratimet, gjuhët dhe gatishmëria operative. Afatet përcaktohen pas diagnostikimit.']] },
    mk: { title: 'Дигитални системи за раст за албански бизниси — QCT Studio', description: 'Двојазични веб-страници, commerce, SEO, CRM и практична ВИ за начинот на кој албанските фирми привлекуваат и конвертираат.', eyebrow: 'Пазарен систем: Албанија', headline: 'Претворете ја социјалната побарувачка во', headlineAccent: 'сопствен албански систем за раст.', intro: 'За зрелите бизниси во Албанија можноста не е уште еден социјален профил, туку двојазичен, мерлив систем што ги поврзува откривањето, довербата, WhatsApp, плаќањето или барањето и CRM следењето.', signal: 'Социјалното користење е високо. Сопствените веб-страници и онлајн продажбата се значително пониски.', faqs: [['Дали ни треба нова страница ако Instagram носи клиенти?', 'Не автоматски. Прво утврдуваме каде се губи побарувачката меѓу откривање, доверба, барање, нарачка и следење.'], ['Дали треба плаќање при достава?', 'Кога категоријата и операцијата го бараат тоа, да. Картичните/POS опции се планираат со одобрени провајдери, со асистирани патеки каде што е потребно.'], ['Гарантирате ли Google рангирања или AI цитати?', 'Не. Ја градиме техничката, содржинската и доказната основа и потоа мериме видливост и квалификувани акции.'], ['Со кои јазици да започнеме?', 'Албански за локална доверба и search; англиски за туризам, дијаспора, извоз и меѓународни услуги.'], ['Колку трае проектот?', 'Зависи од содржината, интеграциите, одобрувањата, јазиците и оперативната зрелост. Роковите се дефинираат по дијагностиката.']] },
    sr: { title: 'Digitalni sistemi rasta za albanske kompanije — QCT Studio', description: 'Dvojezični sajtovi, trgovina, SEO, CRM i praktična AI rešenja za način na koji albanske firme privlače i konvertuju tražnju.', eyebrow: 'Tržišni sistem: Albanija', headline: 'Pretvorite društvenu tražnju u', headlineAccent: 'sopstveni albanski sistem rasta.', intro: 'Za etablirane kompanije u Albaniji prilika nije još jedan društveni profil, već dvojezičan, merljiv sistem koji povezuje otkrivanje, poverenje, WhatsApp, plaćanje ili upit i CRM praćenje.', signal: 'Upotreba društvenih mreža je visoka. Sopstveni sajtovi i onlajn prodaja ostaju znatno niže.', faqs: [['Da li nam treba novi sajt ako Instagram već donosi kupce?', 'Ne automatski. Prvo utvrđujemo gde se tražnja gubi između otkrivanja, poverenja, upita, porudžbine i praćenja.'], ['Da li treba podržati plaćanje pouzećem?', 'Kada kategorija i operacije to zahtevaju, da. Kartične/POS opcije planiramo sa odobrenim pružaocima, uz asistirane tokove gde su potrebni.'], ['Garantujete li Google pozicije ili AI citate?', 'Ne. Gradimo tehničku, sadržajnu i dokaznu osnovu, zatim merimo vidljivost i kvalifikovane akcije.'], ['Sa kojim jezicima treba početi?', 'Albanski za lokalno poverenje i pretragu; engleski za turizam, dijasporu, izvoznike i međunarodne usluge.'], ['Koliko projekat traje?', 'Zavisi od sadržaja, integracija, odobrenja, jezika i operativne spremnosti. Rokove definišemo posle dijagnostike.']] },
  },
  'north-macedonia': {
    en: { title: 'Digital Growth Systems for North Macedonian Businesses — QCT Studio', description: 'Multilingual websites, e-commerce, SEO, CRM and practical automation built for established businesses in North Macedonia.', eyebrow: 'North Macedonia market system', headline: 'Turn connectivity into a', headlineAccent: 'trusted multilingual sales system.', intro: 'North Macedonia is connected, but enterprise e-sales still lag. QCT builds Macedonian, Albanian and English commercial systems that reduce trust friction, simplify operations and make every enquiry measurable.', signal: 'Connectivity is mature. Enterprise e-sales and internal digital capacity remain the sharper gaps.', faqs: [['Do we need Macedonian, Albanian and English?', 'For many domestic, tourism and export businesses, yes. We prioritize languages by audience and commercial intent and do not publish thin translations.'], ['Can you display the Verified E-Seller badge?', 'Only after the eligible merchant is approved by the responsible association. We can build compliance-ready trust modules but never imply authorization.'], ['Can an online store sell abroad immediately?', 'Not by design alone. Shipping, customs, acquiring, exchange, returns and landed costs must be validated market by market.'], ['Can you guarantee rankings or sales?', 'No. We guarantee only the agreed work, quality controls and measurement implementation—not outcomes controlled by markets or platforms.'], ['How long does implementation take?', 'It depends on languages, catalogue, payment and delivery integrations, content and client-side approvals. Milestones follow diagnostic discovery.']] },
    sq: { title: 'Sisteme të Rritjes Digjitale për Bizneset në Maqedoninë e Veriut — QCT Studio', description: 'Faqe shumëgjuhëshe, e-commerce, SEO, CRM dhe automatizim praktik për bizneset e konsoliduara në Maqedoninë e Veriut.', eyebrow: 'Sistemi i tregut të Maqedonisë së Veriut', headline: 'Kthejeni lidhjen digjitale në një', headlineAccent: 'sistem shitjeje shumëgjuhësh me besim.', intro: 'Maqedonia e Veriut është e lidhur, por shitjet online të ndërmarrjeve mbeten prapa. QCT ndërton sisteme maqedonisht, shqip dhe anglisht që ulin pengesat e besimit dhe matin çdo kërkesë.', signal: 'Lidhja është e pjekur. Shitjet online dhe kapaciteti i brendshëm digjital janë hendeku më i qartë.', faqs: [['A duhen maqedonishtja, shqipja dhe anglishtja?', 'Për shumë biznese vendase, turistike dhe eksportuese, po. Gjuhët priorizohen sipas audiencës dhe synimit.'], ['A mund të shfaqni simbolin Verified E-Seller?', 'Vetëm pasi tregtari të miratohet nga shoqata përgjegjëse. Ndërtojmë module gati për pajtueshmëri, por nuk nënkuptojmë autorizim.'], ['A mund të shesë dyqani jashtë menjëherë?', 'Jo vetëm nga dizajni. Transporti, dogana, acquiring, këmbimi, kthimet dhe kostot duhen verifikuar treg më treg.'], ['Garantoni renditje ose shitje?', 'Jo. Garantojmë punën e rënë dakord, kontrollin e cilësisë dhe matjen, jo rezultate jashtë kontrollit tonë.'], ['Sa zgjat zbatimi?', 'Varet nga gjuhët, katalogu, pagesa, dorëzimi, përmbajtja dhe miratimet. Etapat vijnë pas diagnostikimit.']] },
    mk: { title: 'Дигитални системи за раст за бизниси во Северна Македонија — QCT Studio', description: 'Повеќејазични веб-страници, е-трговија, SEO, CRM и практична автоматизација за македонски компании.', eyebrow: 'Пазарен систем: Северна Македонија', headline: 'Претворете ја поврзаноста во', headlineAccent: 'доверлив повеќејазичен продажен систем.', intro: 'Северна Македонија е поврзана, но е-продажбата кај претпријатијата заостанува. QCT гради македонски, албански и англиски системи што го намалуваат триењето во довербата, ја поедноставуваат работата и го мерат секое барање.', signal: 'Поврзаноста е зрела. Е-продажбата и внатрешниот дигитален капацитет остануваат поостриот јаз.', faqs: [['Дали ни требаат македонски, албански и англиски?', 'За многу домашни, туристички и извозни бизниси, да. Јазиците ги приоретизираме според публика и намера.'], ['Може ли да го прикажеме Verified E-Seller беџот?', 'Само откако трговецот ќе биде одобрен од надлежното здружение. Подготвуваме trust модули, но не имплицираме овластување.'], ['Може ли продавницата веднаш да продава во странство?', 'Не само со дизајн. Доставата, царината, acquiring, курсевите, враќањата и трошоците се валидираат пазар по пазар.'], ['Гарантирате ли рангирања или продажба?', 'Не. Ја гарантираме договорената работа, контролата на квалитет и мерењето, не пазарните или платформските исходи.'], ['Колку трае имплементацијата?', 'Зависи од јазиците, каталогот, плаќањата, доставата, содржината и одобрувањата. Milestones следат по дијагностиката.']] },
    sr: { title: 'Digitalni sistemi rasta za kompanije u Severnoj Makedoniji — QCT Studio', description: 'Višejezični sajtovi, e-trgovina, SEO, CRM i praktična automatizacija za etablirane firme u Severnoj Makedoniji.', eyebrow: 'Tržišni sistem: Severna Makedonija', headline: 'Pretvorite povezanost u', headlineAccent: 'pouzdan višejezični prodajni sistem.', intro: 'Severna Makedonija je povezana, ali e-prodaja preduzeća zaostaje. QCT gradi makedonske, albanske i engleske sisteme koji smanjuju trenje poverenja, pojednostavljuju rad i mere svaki upit.', signal: 'Povezanost je zrela. E-prodaja i interni digitalni kapacitet ostaju izraženiji jaz.', faqs: [['Da li su nam potrebni makedonski, albanski i engleski?', 'Za mnoge domaće, turističke i izvozne firme, da. Jezike prioritetizujemo po publici i komercijalnoj nameri.'], ['Možemo li prikazati Verified E-Seller oznaku?', 'Samo nakon odobrenja nadležnog udruženja. Možemo pripremiti module poverenja, ali ne impliciramo ovlašćenje.'], ['Može li prodavnica odmah prodavati u inostranstvu?', 'Ne samo dizajnom. Dostava, carina, acquiring, kurs, povrat i troškovi proveravaju se po tržištu.'], ['Garantujete li pozicije ili prodaju?', 'Ne. Garantujemo dogovoreni rad, kontrolu kvaliteta i merenje, ne tržišne ili platformske ishode.'], ['Koliko traje implementacija?', 'Zavisi od jezika, kataloga, plaćanja, isporuke, sadržaja i odobrenja. Etape slede posle dijagnostike.']] },
  },
  kosovo: {
    en: { title: 'Digital Growth Systems for Kosovo Businesses — QCT Studio', description: 'Mobile-first multilingual websites, commerce, SEO, CRM and practical automation for established businesses in Kosovo.', eyebrow: 'Kosovo market system', headline: 'Turn social attention into an', headlineAccent: 'owned, measurable demand system.', intro: 'Kosovo is highly connected and mobile-first. The sharper opportunity is moving social and messaging demand into trustworthy multilingual content, structured conversion, CRM visibility and repeatable follow-up.', signal: 'Enterprise internet and social use are high. Website ownership and reported online sales remain far lower.', faqs: [['Why build a website if customers call or message?', 'We preserve call and messaging convenience but add structured proof, qualification, source tracking, CRM capture and reliable follow-up.'], ['Should Kosovo businesses launch full checkout?', 'Only when payment, stock, delivery, returns and internal ownership are ready. A catalogue-plus-WhatsApp or order-request model may be the stronger first release.'], ['Which languages matter?', 'Albanian is essential for broad local trust, Serbian for relevant audiences and English for diaspora, tourism and export demand. Priority follows the buyer mix.'], ['Can you guarantee SEO or AI visibility?', 'No. We build auditable technical and editorial foundations and measure real queries and qualified outcomes after launch.'], ['How is project timing set?', 'By scope, languages, content, integrations and approvals. We define milestones after the regional diagnostic, not with a generic fixed-duration claim.']] },
    sq: { title: 'Sisteme të Rritjes Digjitale për Bizneset e Kosovës — QCT Studio', description: 'Faqe shumëgjuhëshe mobile-first, commerce, SEO, CRM dhe automatizim praktik për bizneset e konsoliduara në Kosovë.', eyebrow: 'Sistemi i tregut të Kosovës', headline: 'Kthejeni vëmendjen sociale në një', headlineAccent: 'sistem kërkese që zotëroni dhe matni.', intro: 'Kosova është shumë e lidhur dhe mobile-first. Mundësia më e qartë është kalimi i kërkesës sociale dhe mesazheve në përmbajtje me besim, konvertim të strukturuar, CRM dhe ndjekje të përsëritshme.', signal: 'Interneti dhe rrjetet sociale në ndërmarrje janë të larta. Faqet dhe shitjet e raportuara online mbeten shumë më poshtë.', faqs: [['Pse faqe interneti nëse klientët telefonojnë ose shkruajnë?', 'Ruajmë lehtësinë e telefonit dhe mesazheve, por shtojmë prova, kualifikim, burim, CRM dhe ndjekje të besueshme.'], ['A duhet checkout i plotë?', 'Vetëm kur pagesa, stoku, dorëzimi, kthimet dhe pronësia e brendshme janë gati. Katalogu me WhatsApp mund të jetë hap më i fortë.'], ['Cilat gjuhë kanë rëndësi?', 'Shqip për besim të gjerë lokal, serbisht për audiencat përkatëse dhe anglisht për diasporë, turizëm dhe eksport.'], ['Garantoni SEO ose dukshmëri AI?', 'Jo. Ndërtojmë baza teknike dhe editoriale të auditueshme dhe matim pyetjet reale pas publikimit.'], ['Si caktohet koha e projektit?', 'Nga fushëveprimi, gjuhët, përmbajtja, integrimet dhe miratimet. Etapat vijnë pas diagnostikimit.']] },
    mk: { title: 'Дигитални системи за раст за бизниси во Косово — QCT Studio', description: 'Mobile-first повеќејазични страници, commerce, SEO, CRM и практична автоматизација за компании во Косово.', eyebrow: 'Пазарен систем: Косово', headline: 'Претворете го социјалното внимание во', headlineAccent: 'сопствен, мерлив систем за побарувачка.', intro: 'Косово е силно поврзано и mobile-first. Поострата можност е пренесување на социјалната и messaging побарувачка во доверлива повеќејазична содржина, структурирана конверзија, CRM и повторливо следење.', signal: 'Интернетот и социјалното користење кај фирмите се високи. Сопствените страници и пријавената онлајн продажба се многу пониски.', faqs: [['Зошто веб-страница ако клиентите се јавуваат или пишуваат?', 'Ја чуваме едноставноста на повикот и пораката, но додаваме докази, квалификација, source tracking, CRM и сигурно следење.'], ['Дали треба целосен checkout?', 'Само кога плаќањето, залихата, доставата, враќањата и внатрешната одговорност се подготвени. Каталог плус WhatsApp може да биде посилен почеток.'], ['Кои јазици се важни?', 'Албански за широка локална доверба, српски за релевантните публики и англиски за дијаспора, туризам и извоз.'], ['Гарантирате ли SEO или AI видливост?', 'Не. Градиме ревизибилни технички и уреднички основи и мериме реални пребарувања по пуштање.'], ['Како се одредува времето?', 'Според опсег, јазици, содржина, интеграции и одобрувања. Milestones следат по дијагностиката.']] },
    sr: { title: 'Digitalni sistemi rasta za kompanije na Kosovu — QCT Studio', description: 'Mobilni višejezični sajtovi, trgovina, SEO, CRM i praktična automatizacija za etablirane kompanije na Kosovu.', eyebrow: 'Tržišni sistem: Kosovo', headline: 'Pretvorite društvenu pažnju u', headlineAccent: 'sopstveni, merljiv sistem tražnje.', intro: 'Kosovo je veoma povezano i mobilno. Jasnija prilika je prevođenje društvene i messaging tražnje u pouzdan višejezični sadržaj, strukturiranu konverziju, CRM vidljivost i ponovljivo praćenje.', signal: 'Internet i društvene mreže u firmama su visoki. Vlasništvo nad sajtom i prijavljena onlajn prodaja ostaju mnogo niži.', faqs: [['Zašto sajt ako kupci zovu ili šalju poruke?', 'Čuvamo jednostavnost poziva i poruka, ali dodajemo dokaze, kvalifikaciju, praćenje izvora, CRM i pouzdano praćenje.'], ['Da li treba puni checkout?', 'Samo kada su plaćanje, zalihe, dostava, povrat i interna odgovornost spremni. Katalog plus WhatsApp može biti jači prvi korak.'], ['Koji jezici su važni?', 'Albanski za široko lokalno poverenje, srpski za relevantnu publiku i engleski za dijasporu, turizam i izvoz.'], ['Garantujete li SEO ili AI vidljivost?', 'Ne. Gradimo proverljive tehničke i uredničke osnove i merimo stvarne upite posle objave.'], ['Kako se određuje rok?', 'Prema obimu, jezicima, sadržaju, integracijama i odobrenjima. Etape definišemo posle dijagnostike.']] },
  },
  serbia: {
    en: { title: 'Digital Growth Systems for Serbian Businesses — QCT Studio', description: 'Conversion, commerce, SEO, CRM and practical AI systems that turn existing Serbian websites into measurable growth infrastructure.', eyebrow: 'Serbia market system', headline: 'Turn your existing website into a', headlineAccent: 'measurable commercial system.', intro: 'Serbia does not need a basic “go online” pitch. Most firms already have a website. The opportunity is conversion, local payment execution, Serbian-language trust, CRM operations and bounded automation.', signal: 'Website adoption is widespread. Web sales and practical AI adoption remain materially lower.', faqs: [['We already have a website. Why rebuild it?', 'A rebuild is justified only when the current site leaks measurable demand through weak positioning, speed, conversion, search architecture, payment, tracking or lead operations.'], ['Which local payment methods should we support?', 'That depends on the acquiring bank, category, RSD settlement, IPS availability, fiscal/accounting flows and refund operations. We validate dependencies before committing architecture.'], ['Should we use Serbian Latin or Cyrillic?', 'Serbian Latin is a practical commercial default for many sectors, with correct diacritics. We monitor Cyrillic search variants and use the script that matches the audience and brand.'], ['Can AI automate our sales team?', 'Not responsibly as a blanket promise. We begin with one bounded workflow, human review, logs, data boundaries and a success or stop criterion.'], ['Can you promise a fixed launch duration?', 'No generic duration is credible without knowing catalogue, integrations, content, languages and approvals. We define accountable milestones after diagnostic work.']] },
    sq: { title: 'Sisteme të Rritjes Digjitale për Bizneset Serbe — QCT Studio', description: 'Konvertim, commerce, SEO, CRM dhe AI praktike që kthejnë faqet ekzistuese serbe në infrastrukturë të matshme rritjeje.', eyebrow: 'Sistemi i tregut serb', headline: 'Kthejeni faqen ekzistuese në një', headlineAccent: 'sistem tregtar të matshëm.', intro: 'Serbia nuk ka nevojë për një ofertë bazë “dil online”. Shumica e firmave kanë faqe. Mundësia është konvertimi, pagesat lokale, besimi në serbisht, CRM dhe automatizimi i kufizuar.', signal: 'Faqet janë të përhapura. Shitja në web dhe përdorimi praktik i AI mbeten dukshëm më poshtë.', faqs: [['Kemi faqe. Pse ta rindërtojmë?', 'Vetëm kur faqja humbet kërkesë të matshme nga pozicionimi, shpejtësia, konvertimi, search, pagesa, matja ose operacionet e lead-eve.'], ['Cilat pagesa lokale duhen?', 'Varet nga banka acquiring, kategoria, RSD, IPS, rrjedhat fiskale/kontabël dhe kthimet. Varësitë verifikohen para arkitekturës.'], ['Serbisht latinisht apo cirilik?', 'Latinica është default praktik në shumë sektorë, me diakritikë të saktë. Variantet cirilike monitorohen sipas audiencës.'], ['A mund AI të automatizojë ekipin e shitjes?', 'Jo si premtim i përgjithshëm. Nisim me një workflow të kufizuar, kontroll njerëzor, logs, kufij të dhënash dhe kriter suksesi/ndalimi.'], ['Premtoni afat fiks publikimi?', 'Jo pa njohur katalogun, integrimet, përmbajtjen, gjuhët dhe miratimet. Etapat përcaktohen pas diagnostikimit.']] },
    mk: { title: 'Дигитални системи за раст за српски бизниси — QCT Studio', description: 'Конверзија, commerce, SEO, CRM и практична ВИ што ги претвора постојните српски страници во мерлива инфраструктура.', eyebrow: 'Пазарен систем: Србија', headline: 'Претворете ја постојната страница во', headlineAccent: 'мерлив комерцијален систем.', intro: 'На Србија не ѝ треба основна „оди онлајн“ понуда. Повеќето фирми веќе имаат страница. Можноста е во конверзијата, локалните плаќања, српската доверба, CRM операциите и ограничената автоматизација.', signal: 'Веб-присуството е широко. Веб-продажбата и практичната ВИ се значително пониски.', faqs: [['Веќе имаме страница. Зошто редизајн?', 'Само кога тековната страница губи мерлива побарувачка преку позиционирање, брзина, конверзија, search архитектура, плаќање, мерење или lead операции.'], ['Кои локални плаќања?', 'Зависи од acquiring банка, категорија, RSD, IPS, фискални/сметководствени процеси и враќања. Ги валидираме зависностите однапред.'], ['Српска латиница или кирилица?', 'Латиницата е практичен комерцијален default во многу сектори, со точни дијакритици. Ги следиме и кириличните варијанти.'], ['Може ли ВИ да го автоматизира продажниот тим?', 'Не како општо ветување. Почнуваме со еден ограничен workflow, човечка проверка, logs, податочни граници и критериум за успех/стоп.'], ['Ветувате ли фиксен рок?', 'Не без да ги знаеме каталогот, интеграциите, содржината, јазиците и одобрувањата. Milestones следат по дијагностиката.']] },
    sr: { title: 'Digitalni sistemi rasta za kompanije u Srbiji — QCT Studio', description: 'Konverzija, trgovina, SEO, CRM i praktični AI sistemi koji postojeće srpske sajtove pretvaraju u merljivu infrastrukturu rasta.', eyebrow: 'Tržišni sistem: Srbija', headline: 'Pretvorite postojeći sajt u', headlineAccent: 'merljiv komercijalni sistem.', intro: 'Srbiji nije potreban osnovni „izađite onlajn“ pristup. Većina firmi već ima sajt. Prilika je u konverziji, lokalnim plaćanjima, poverenju na srpskom, CRM operacijama i ograničenoj automatizaciji.', signal: 'Veb-prisustvo je široko. Veb-prodaja i praktična primena AI ostaju znatno niži.', faqs: [['Već imamo sajt. Zašto rekonstrukcija?', 'Samo kada trenutni sajt gubi merljivu tražnju kroz pozicioniranje, brzinu, konverziju, search arhitekturu, plaćanje, merenje ili lead operacije.'], ['Koje lokalne načine plaćanja podržati?', 'Zavisi od acquiring banke, kategorije, RSD poravnanja, IPS dostupnosti, fiskalnih/računovodstvenih tokova i povrata. Zavisnosti proveravamo pre arhitekture.'], ['Srpska latinica ili ćirilica?', 'Latinica je praktičan komercijalni podrazumevani izbor u mnogim sektorima, sa tačnim dijakriticima. Pratimo i ćirilične varijante pretrage.'], ['Može li AI automatizovati prodajni tim?', 'Ne kao opšte obećanje. Počinjemo jednim ograničenim tokom, ljudskom proverom, logovima, granicama podataka i kriterijumom uspeha ili prekida.'], ['Možete li obećati fiksan rok lansiranja?', 'Ne bez kataloga, integracija, sadržaja, jezika i odobrenja. Odgovorne etape definišemo posle dijagnostike.']] },
  },
};

const factSets: Record<MarketSlug, Record<MarketLang, Fact[]>> = {
  albania: Object.fromEntries(Object.entries(albaniaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])) as Record<MarketLang, Fact[]>,
  'north-macedonia': Object.fromEntries(Object.entries(macedoniaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])) as Record<MarketLang, Fact[]>,
  kosovo: Object.fromEntries(Object.entries(kosovoFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])) as Record<MarketLang, Fact[]>,
  serbia: Object.fromEntries(Object.entries(serbiaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])) as Record<MarketLang, Fact[]>,
};

const definitions = [
  { slug: 'albania', code: 'AL', localName: 'Shqipëri', countryCode: 'AL', accent: '#e44742' },
  { slug: 'north-macedonia', code: 'MK', localName: 'Северна Македонија', countryCode: 'MK', accent: '#d8a746' },
  { slug: 'kosovo', code: 'XK', localName: 'Kosovë', countryCode: 'XK', accent: '#4c82d4' },
  { slug: 'serbia', code: 'RS', localName: 'Srbija', countryCode: 'RS', accent: '#6f9e86' },
] as const;

export const marketHubs: MarketDefinition[] = definitions.map((definition) => ({
  ...definition,
  copy: Object.fromEntries((Object.keys(shared) as MarketLang[]).map((lang) => [lang, {
    ...commonCopy[lang],
    ...marketSpecific[definition.slug][lang],
    facts: factSets[definition.slug][lang],
    sectors: sectorSets[definition.slug][lang],
  }])) as Record<MarketLang, MarketCopy>,
}));

export const marketSlugs = definitions.map(({ slug }) => slug);
export const marketLanguages: MarketLang[] = ['en', 'sq', 'mk', 'sr'];
export { shared as marketUi };

export function getMarketHub(slug: string, lang: string): MarketDefinition | undefined {
  const market = marketHubs.find((item) => item.slug === slug);
  if (!market) return undefined;
  return { ...market, copy: market.copy };
}
