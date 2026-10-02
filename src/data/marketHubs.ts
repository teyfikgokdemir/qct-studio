export type MarketLang = 'en' | 'sq' | 'mk' | 'sr' | 'ro' | 'bg';
type CoreMarketLang = Exclude<MarketLang, 'ro' | 'bg'>;
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

  ro: {
    nav: ['Diferența de piață', 'Playbook-uri', 'Sistem', 'Dovezi'],
    contact: 'Începe un proiect',
    home: 'Acasă',
    region: 'Sistem de piață pentru Balcani',
    systemLabels: ['Atrage', 'Convertește', 'Operează'],
    footerMarkets: 'Piețe',
    footerCompany: 'Companie',
    footerServices: 'Sisteme',
    footerNote: 'De la cercetarea pieței la operațiuni de creștere pe care le deții.',
  },
  bg: {
    nav: ['Пазарен пропуск', 'Playbook-и', 'Система', 'Доказателства'],
    contact: 'Започнете проект',
    home: 'Начало',
    region: 'Балканска пазарна система',
    systemLabels: ['Привличане', 'Конверсия', 'Операции'],
    footerMarkets: 'Пазари',
    footerCompany: 'Компания',
    footerServices: 'Системи',
    footerNote: 'От пазарно проучване до собствени операции за растеж.',
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

const sectorSets: Record<MarketSlug, Record<CoreMarketLang, Sector[]>> = {
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

const commonCopy: Record<CoreMarketLang, Omit<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'facts' | 'sectors' | 'faqs'>> = {
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

const marketSpecific: Record<MarketSlug, Record<CoreMarketLang, Pick<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'faqs'>>> = {
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


const localizedCommonCopy: Record<'ro' | 'bg', Omit<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'facts' | 'sectors' | 'faqs'>> = {
  ro: {
    primaryCta: 'Rulează diagnosticul regional', secondaryCta: 'Vezi dovezile pieței', signalLabel: 'Semnal de piață verificat',
    gapTitle: 'Diferența de piață, în cifre.', gapIntro: 'Folosim surse nominale și datate și păstrăm contextul fiecărei cifre. Fără volume de căutare inventate și fără estimări de piață nesusținute.',
    opportunityTitle: 'Oportunitatea comercială', opportunityCopy: 'Construiește cel mai mic sistem propriu care închide pierderea reală de cerere: descoperire, încredere, conversie, captarea lead-urilor, follow-up sau operațiuni de tranzacție.',
    playbookTitle: 'Playbook-uri prioritare pentru piață', playbookIntro: 'Nu traducem o listă generică de servicii. Fiecare playbook pornește de la comportamentul de cumpărare al sectorului, constrângerile operaționale și nivelul de dovezi necesar.',
    systemTitle: 'Atrage. Convertește. Operează.', systemIntro: 'Fiecare proiect este proiectat ca un lanț de handoff-uri responsabile, nu ca o colecție de canale separate.',
    acquire: 'Fii găsit pentru problema pe care o rezolvi.', acquireCopy: 'Arhitectură de intenție în limba locală, SEO tehnic, conținut answer-first și landing pages plătite conectate la cerere măsurabilă.',
    convert: 'Transformă atenția într-o acțiune comercială.', convertCopy: 'Dovezi de încredere, oferte clare, UX mobil, plăți locale sau trasee de cumpărare asistată și măsurare la nivel de eveniment.',
    operate: 'Păstrează lead-ul și învățarea.', operateCopy: 'CRM simplu, atribuirea sursei, responsabilitate pentru răspuns, dashboard-uri și automatizare controlată după stabilizarea procesului.',
    evidenceTitle: 'Dovezi înainte de afirmații de agenție.', evidenceCopy: 'Fiecare statistică are legătură către sursa sa. Cererea din căutare este validată după lansare prin Search Console, date de campanie și conversații de vânzări, nu prezentată ca fapt înainte de măsurare.',
    evidenceNote: 'Rezultatele proiectelor sunt publicate doar când există date sursă și permisiunea clientului.', faqTitle: 'Întrebări puse de cumpărătorii serioși', faqIntro: 'Răspunsuri directe, dependențe explicite și fără promisiuni de durată fixă.',
    ctaTitle: 'Mapează primul sistem potrivit.', ctaCopy: 'Identificăm piața, sectorul, pierderea comercială, constrângerile operaționale și dovezile necesare înainte de definirea scope-ului.', sourceLabel: 'Deschide sursa',
  },
  bg: {
    primaryCta: 'Стартирайте регионалната диагностика', secondaryCta: 'Вижте пазарните доказателства', signalLabel: 'Потвърден пазарен сигнал',
    gapTitle: 'Пазарният пропуск, в числа.', gapIntro: 'Използваме именувани и датирани източници и запазваме контекста на всяка стойност. Без измислен search volume и без неподкрепени твърдения за размера на пазара.',
    opportunityTitle: 'Търговската възможност', opportunityCopy: 'Изградете най-малката собствена система, която затваря реалния пропуск в търсенето: discovery, trust, conversion, lead capture, follow-up или transaction operations.',
    playbookTitle: 'Приоритетни пазарни playbook-и', playbookIntro: 'Не превеждаме една обща листа с услуги. Всеки playbook започва от поведението на купувачите, оперативните ограничения и нужните доказателства.',
    systemTitle: 'Привличане. Конверсия. Операции.', systemIntro: 'Всеки проект е проектиран като отговорни handoff-и, а не като колекция от несвързани канали.',
    acquire: 'Бъдете откривани за проблема, който решавате.', acquireCopy: 'Архитектура на local-language intent, technical SEO, answer-first content и платени landing pages, свързани с измеримо търсене.',
    convert: 'Превърнете вниманието в търговско действие.', convertCopy: 'Доказателства за доверие, ясни оферти, mobile UX, локални плащания или assisted-buying пътеки и event-level measurement.',
    operate: 'Запазете lead-а и наученото.', operateCopy: 'Lean CRM, source attribution, ownership на отговора, dashboard-и и контролирана automation след стабилизиране на процеса.',
    evidenceTitle: 'Доказателства преди agency claims.', evidenceCopy: 'Всяка статистика води към източника си. Search demand се валидира след launch чрез Search Console, campaign data и sales conversations, а не се представя като факт преди измерване.',
    evidenceNote: 'Project results се публикуват само когато има source data и разрешение от клиента.', faqTitle: 'Въпроси, които задават сериозните купувачи', faqIntro: 'Директни отговори, ясни зависимости и без обещания за фиксиран срок.',
    ctaTitle: 'Картографирайте правилната първа система.', ctaCopy: 'Определяме пазара, сектора, търговския пропуск, оперативните ограничения и нужните доказателства преди дефиниране на scope.', sourceLabel: 'Отвори източника',
  },
};

const localizedMarketSpecific: Record<MarketSlug, Record<'ro' | 'bg', Pick<MarketCopy, 'title' | 'description' | 'eyebrow' | 'headline' | 'headlineAccent' | 'intro' | 'signal' | 'faqs'>>> = {
  albania: {
    ro: { title: 'Sisteme de Creștere Digitală pentru companii albaneze — QCT Studio', description: 'Website-uri bilingve, commerce, SEO, CRM și sisteme AI practice pentru modul în care companiile albaneze atrag, convertesc și operează.', eyebrow: 'Sistem de piață: Albania', headline: 'Transformă cererea socială într-un', headlineAccent: 'sistem albanez de creștere pe care îl deții.', intro: 'Pentru companiile consolidate din Albania, oportunitatea nu este încă un profil social. Este un sistem bilingv și măsurabil care conectează discovery, încrederea, WhatsApp, plata sau solicitarea și follow-up-ul în CRM.', signal: 'Adopția socială este ridicată. Website-urile proprii și vânzarea online rămân semnificativ mai jos.', faqs: [['Avem nevoie de un website nou dacă Instagram aduce deja clienți?', 'Nu automat. Mai întâi diagnosticăm unde se pierde cererea între discovery, încredere, solicitare, comandă și follow-up.'], ['Un magazin albanez ar trebui să accepte plata la livrare?', 'Da, atunci când categoria și operațiunile comerciantului o cer. Opțiunile card/POS sunt evaluate cu furnizori aprobați, păstrând trasee asistate când este necesar.'], ['Puteți garanta poziții Google sau citări AI?', 'Nu. Construim baza tehnică, de conținut și dovezi, apoi măsurăm vizibilitatea indexată și acțiunile calificate.'], ['Cu ce limbi ar trebui să lansăm?', 'Albaneza servește încrederea și căutarea locală; engleza este importantă pentru turism, diaspora, exportatori și servicii internaționale.'], ['Cât durează proiectul?', 'Durata depinde de conținut, integrări, aprobări, limbi și pregătirea operațională. Etapele se definesc după diagnostic.']] },
    bg: { title: 'Дигитални системи за растеж за албански компании — QCT Studio', description: 'Двуезични сайтове, commerce, SEO, CRM и практични AI системи за начина, по който албанските компании привличат и конвертират търсене.', eyebrow: 'Пазарна система: Албания', headline: 'Превърнете social demand в', headlineAccent: 'собствена албанска система за растеж.', intro: 'За утвърдените компании в Албания възможността не е още един social profile. Тя е двуезична, измерима търговска система, която свързва discovery, trust, WhatsApp, payment или enquiry и CRM follow-up.', signal: 'Social adoption е висока. Собствените сайтове и online selling остават значително по-ниски.', faqs: [['Нужен ли ни е нов сайт, ако Instagram вече носи клиенти?', 'Не автоматично. Първо диагностицираме къде се губи търсенето между discovery, trust, enquiry, order и follow-up.'], ['Трябва ли албанският магазин да поддържа наложен платеж?', 'Когато категорията и операциите го изискват — да. Card/POS опциите се планират с одобрени доставчици и се запазват assisted paths, когато са нужни.'], ['Можете ли да гарантирате Google rankings или AI citations?', 'Не. Изграждаме техническата, content и evidence основа и след това измерваме видимостта и квалифицираните действия.'], ['С кои езици да стартираме?', 'Албанският обслужва local trust и search; английският е важен за tourism, diaspora, exporters и international services.'], ['Колко време отнема проектът?', 'Зависи от съдържанието, интеграциите, одобренията, езиците и operational readiness. Milestones се определят след диагностиката.']] },
  },
  'north-macedonia': {
    ro: { title: 'Sisteme de Creștere Digitală pentru companii din Macedonia de Nord — QCT Studio', description: 'Website-uri multilingve, e-commerce, SEO, CRM și automatizare practică pentru companii consolidate din Macedonia de Nord.', eyebrow: 'Sistem de piață: Macedonia de Nord', headline: 'Transformă conectivitatea într-un', headlineAccent: 'sistem de vânzări multilingv și credibil.', intro: 'Macedonia de Nord este bine conectată, dar e-sales la nivel de companii rămân în urmă. QCT construiește sisteme în macedoneană, albaneză și engleză care reduc fricțiunea de încredere, simplifică operațiunile și fac fiecare solicitare măsurabilă.', signal: 'Conectivitatea este matură. E-sales și capacitatea digitală internă rămân diferențele mai importante.', faqs: [['Avem nevoie de macedoneană, albaneză și engleză?', 'Pentru multe companii locale, din turism și export, da. Prioritizăm limbile după public și intenția comercială și evităm traducerile superficiale.'], ['Puteți afișa badge-ul Verified E-Seller?', 'Doar după aprobarea comerciantului eligibil de către organizația responsabilă. Putem construi module de încredere pregătite pentru conformitate, fără a sugera autorizare.'], ['Un magazin online poate vinde imediat în străinătate?', 'Nu doar prin design. Shipping-ul, vama, acquiring-ul, schimbul valutar, retururile și costul final trebuie validate piață cu piață.'], ['Puteți garanta ranking sau vânzări?', 'Nu. Garantăm doar munca, controalele de calitate și implementarea măsurării convenite, nu rezultatele controlate de piețe sau platforme.'], ['Cât durează implementarea?', 'Depinde de limbi, catalog, integrări de plată și livrare, conținut și aprobări. Milestones urmează după diagnostic.']] },
    bg: { title: 'Дигитални системи за растеж за компании в Северна Македония — QCT Studio', description: 'Многоезични сайтове, e-commerce, SEO, CRM и практична automation за утвърдени компании в Северна Македония.', eyebrow: 'Пазарна система: Северна Македония', headline: 'Превърнете connectivity в', headlineAccent: 'надеждна многоезична sales система.', intro: 'Северна Македония е свързана, но enterprise e-sales изостават. QCT изгражда системи на македонски, албански и английски, които намаляват trust friction, опростяват operations и правят всяко enquiry измеримо.', signal: 'Connectivity е зряла. Enterprise e-sales и вътрешният digital capacity остават по-големите пропуски.', faqs: [['Нужни ли са македонски, албански и английски?', 'За много местни, tourism и export компании — да. Приоритизираме езиците според audience и commercial intent и не публикуваме thin translations.'], ['Можете ли да показвате Verified E-Seller badge?', 'Само след одобрение на допустимия merchant от отговорната асоциация. Можем да изградим compliance-ready trust modules, без да внушаваме authorization.'], ['Може ли online store да продава веднага в чужбина?', 'Не само чрез design. Shipping, customs, acquiring, exchange, returns и landed costs трябва да се валидират за всеки пазар.'], ['Можете ли да гарантирате rankings или sales?', 'Не. Гарантираме само договорената работа, quality controls и measurement implementation, не резултати, контролирани от пазари или платформи.'], ['Колко време отнема implementation?', 'Зависи от езиците, каталога, payment и delivery integrations, съдържанието и одобренията. Milestones следват диагностиката.']] },
  },
  kosovo: {
    ro: { title: 'Sisteme de Creștere Digitală pentru companii din Kosovo — QCT Studio', description: 'Website-uri multilingve, commerce, SEO, CRM și sisteme AI practice care transformă cererea socială în canale proprii măsurabile.', eyebrow: 'Sistem de piață: Kosovo', headline: 'Transformă atenția socială într-un', headlineAccent: 'sistem comercial propriu și măsurabil.', intro: 'Kosovo este foarte conectat și puternic orientat spre social. Oportunitatea este să muți o parte din cerere în canale proprii: catalog, website, e-commerce, booking, WhatsApp și CRM cu măsurare reală.', signal: 'Accesul la internet și utilizarea socială sunt ridicate, dar website-urile proprii și online sales rămân mult mai jos.', faqs: [['Dacă vânzăm prin Instagram și WhatsApp, mai avem nevoie de website?', 'Nu automat de un website mare. Dar un canal propriu poate organiza produsele, dovezile, comenzile, tracking-ul și datele de client într-un mod pe care platformele sociale nu îl oferă.'], ['Ar trebui să pornim direct cu e-commerce complet?', 'Doar dacă plățile, livrarea, retururile și operațiunile sunt pregătite. Uneori catalogul și assisted ordering sunt primul pas mai bun.'], ['Ce limbi sunt prioritare?', 'Albaneza este esențială pentru piața locală. Engleza este importantă pentru diaspora, tourism, ICT/BPO și export.'], ['Puteți automatiza vânzările cu AI?', 'Doar procese bine definite și cu limite clare. Începem cu un workflow controlat, review uman și criteriu de succes.'], ['Puteți estima cererea înainte de lansare?', 'Putem folosi surse publice și date de campanie, dar nu prezentăm search volume sau market size nevalidate ca adevăr.']] },
    bg: { title: 'Дигитални системи за растеж за компании в Косово — QCT Studio', description: 'Многоезични сайтове, commerce, SEO, CRM и практични AI системи, които превръщат social demand в измерими собствени канали.', eyebrow: 'Пазарна система: Косово', headline: 'Превърнете social attention в', headlineAccent: 'собствена измерима търговска система.', intro: 'Косово е силно свързано и social-first. Възможността е част от търсенето да се премести в owned channels: каталог, website, e-commerce, booking, WhatsApp и CRM с реално measurement.', signal: 'Internet access и social usage са високи, но собствените сайтове и online sales остават много по-ниски.', faqs: [['Ако продаваме през Instagram и WhatsApp, нужен ли е сайт?', 'Не автоматично голям сайт. Но owned channel може да организира products, proof, orders, tracking и customer data по начин, който social платформите не дават.'], ['Трябва ли да започнем директно с full e-commerce?', 'Само ако payments, delivery, returns и operations са готови. Понякога каталог и assisted ordering са по-добрият първи ход.'], ['Кои езици са приоритетни?', 'Албанският е ключов за local market. Английският е важен за diaspora, tourism, ICT/BPO и export.'], ['Можете ли да автоматизирате продажбите с AI?', 'Само добре дефинирани процеси с ясни граници. Започваме с контролирана workflow, human review и критерий за успех.'], ['Можете ли да оцените demand преди launch?', 'Можем да използваме public sources и campaign data, но не представяме невалидирани search volumes или market size като факт.']] },
  },
  serbia: {
    ro: { title: 'Sisteme de Creștere Digitală pentru companii din Serbia — QCT Studio', description: 'Conversie, commerce, SEO, CRM și AI practic pentru a transforma website-urile existente din Serbia în infrastructură de creștere măsurabilă.', eyebrow: 'Sistem de piață: Serbia', headline: 'Transformă website-ul existent într-un', headlineAccent: 'sistem comercial măsurabil.', intro: 'Serbia nu are nevoie de încă un mesaj generic de tip „intră online”. Majoritatea companiilor au deja website. Oportunitatea este conversia, plățile locale, încrederea în limba sârbă, operațiunile CRM și automatizarea controlată.', signal: 'Prezența pe web este răspândită. Web sales și adoptarea practică a AI rămân semnificativ mai jos.', faqs: [['Avem deja website. De ce să îl reconstruim?', 'Doar când website-ul actual pierde cerere măsurabilă prin poziționare, viteză, conversie, search architecture, plată, tracking sau operațiuni de lead.'], ['Ce metode locale de plată ar trebui să suportăm?', 'Depinde de banca acquiring, categorie, settlement în RSD, disponibilitatea IPS, fluxurile fiscale/contabile și retururi. Validăm dependențele înainte de arhitectură.'], ['Sârbă latină sau chirilică?', 'Sârba latină este un default comercial practic în multe sectoare, cu diacritice corecte. Monitorizăm și variantele chirilice în funcție de public și brand.'], ['Poate AI automatiza echipa de vânzări?', 'Nu responsabil ca promisiune generală. Începem cu un workflow limitat, review uman, logs, limite de date și criteriu de succes sau oprire.'], ['Puteți promite o durată fixă de lansare?', 'Nu fără a cunoaște catalogul, integrările, conținutul, limbile și aprobările. Definim milestones după diagnostic.']] },
    bg: { title: 'Дигитални системи за растеж за компании в Сърбия — QCT Studio', description: 'Conversion, commerce, SEO, CRM и practical AI, които превръщат съществуващите сръбски сайтове в измерима growth infrastructure.', eyebrow: 'Пазарна система: Сърбия', headline: 'Превърнете съществуващия сайт в', headlineAccent: 'измерима търговска система.', intro: 'Сърбия не се нуждае от базово „go online“ послание. Повечето компании вече имат сайт. Възможността е в conversion, local payments, trust на сръбски, CRM operations и bounded automation.', signal: 'Website adoption е широко разпространена. Web sales и practical AI adoption остават значително по-ниски.', faqs: [['Вече имаме сайт. Защо да го rebuild-ваме?', 'Само когато текущият сайт губи измеримо търсене чрез positioning, speed, conversion, search architecture, payment, tracking или lead operations.'], ['Кои local payment methods да поддържаме?', 'Зависи от acquiring bank, категорията, RSD settlement, IPS availability, fiscal/accounting flows и refunds. Валидираме зависимостите преди архитектурата.'], ['Сръбска латиница или кирилица?', 'Латиницата е практичен commercial default за много сектори с правилни диакритични знаци. Следим и Cyrillic search variants според audience и brand.'], ['Може ли AI да автоматизира sales team?', 'Не като общо обещание. Започваме с bounded workflow, human review, logs, data boundaries и success/stop criterion.'], ['Можете ли да обещаете фиксиран launch срок?', 'Не без да знаем catalogue, integrations, content, languages и approvals. Дефинираме accountable milestones след диагностиката.']] },
  },
};

const localizedFacts: Record<MarketSlug, Record<'ro' | 'bg', Fact[]>> = {
  albania: {
    ro: [
      { value:'99,3% / 57,7%', label:'acces la internet / website de companie', context:'Companii cu 10+ angajați, 2024. Conectivitatea nu este problema principală; prezența comercială proprie este.', source:'INSTAT, sondaj ICT pentru companii, 2024', sourceUrl:sourceUrls.albaniaIct },
      { value:'83,1% / 24,5%', label:'social media / vânzare online', context:'Vizibilitatea socială depășește semnificativ maturitatea tranzacțională.', source:'INSTAT, sondaj ICT pentru companii, 2024', sourceUrl:sourceUrls.albaniaIct },
      { value:'21,6%', label:'ponderea turismului în PIB', context:'Turismul este un motor major al cererii multilingve, dar dependența de platforme și sezonalitatea rămân.', source:'OECD, politica de turism Albania, 2024', sourceUrl:sourceUrls.albaniaTourism },
      { value:'+27,61%', label:'creșterea anuală a terminalelor POS', context:'Plățile digitale se extind, în timp ce numerarul rămâne relevant comercial.', source:'Banca Albaniei, Raport anual 2024', sourceUrl:sourceUrls.albaniaPayments },
    ],
    bg: [
      { value:'99,3% / 57,7%', label:'internet access / фирмен сайт', context:'Компании с 10+ служители, 2024. Connectivity не е основният пропуск; собственото търговско присъствие е.', source:'INSTAT enterprise ICT survey, 2024', sourceUrl:sourceUrls.albaniaIct },
      { value:'83,1% / 24,5%', label:'social media / online selling', context:'Social visibility значително изпреварва transactional maturity.', source:'INSTAT enterprise ICT survey, 2024', sourceUrl:sourceUrls.albaniaIct },
      { value:'21,6%', label:'дял на туризма в БВП', context:'Tourism е голям двигател на многоезично търсене, но platform dependency и seasonality остават.', source:'OECD Albania tourism policy, 2024', sourceUrl:sourceUrls.albaniaTourism },
      { value:'+27,61%', label:'годишен ръст на POS терминалите', context:'Digital payments се разширяват, докато cash остава търговски релевантен.', source:'Bank of Albania Annual Report 2024', sourceUrl:sourceUrls.albaniaPayments },
    ],
  },
  'north-macedonia': {
    ro: [
      { value:'90,8%', label:'gospodării cu acces la internet', context:'Accesul este matur; execuția comercială și competențele sunt straturile limitative.', source:'Comisia Europeană, Raport Macedonia de Nord 2025', sourceUrl:sourceUrls.macedoniaReport },
      { value:'8,3%', label:'companii care fac e-sales', context:'Ultimul baseline comparabil este 2022; UE-27 a fost 22,8%.', source:'Western Balkan E-commerce Report 2024', sourceUrl:sourceUrls.macedoniaEcommerce },
      { value:'72.181', label:'companii active', context:'Aproximativ 90% erau micro sau fără un număr stabilit de angajați; calificarea este esențială.', source:'Oficiul de Statistică, anuar 2025', sourceUrl:sourceUrls.macedoniaStats },
      { value:'76,9%', label:'exporturi de bunuri către UE', context:'Companiile orientate spre export au nevoie de dovezi tehnice în engleză și trasee RFQ structurate.', source:'Comisia Europeană, Raport 2025', sourceUrl:sourceUrls.macedoniaReport },
    ],
    bg: [
      { value:'90,8%', label:'домакинства с internet access', context:'Access е зрял; commercial execution и skills са ограничаващите слоеве.', source:'European Commission North Macedonia Report 2025', sourceUrl:sourceUrls.macedoniaReport },
      { value:'8,3%', label:'компании с e-sales', context:'Последният сравним baseline е 2022; EU-27 е 22,8%.', source:'Western Balkan E-commerce Report 2024', sourceUrl:sourceUrls.macedoniaEcommerce },
      { value:'72 181', label:'активни предприятия', context:'Около 90% са micro или без установен брой служители; qualification е ключова.', source:'State Statistical Office yearbook 2025', sourceUrl:sourceUrls.macedoniaStats },
      { value:'76,9%', label:'износ на стоки към ЕС', context:'Export-facing компаниите се нуждаят от English technical proof и structured RFQ journeys.', source:'European Commission North Macedonia Report 2025', sourceUrl:sourceUrls.macedoniaReport },
    ],
  },
  kosovo: {
    ro: [
      { value:'98,6%', label:'gospodării cu acces la internet', context:'Kosovo este conectat; diferența comercială apare după acces.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'40%', label:'companii cu website', context:'Utilizarea internetului de către companii era 97,1%, ceea ce face maturitatea canalului propriu diferența mai clară.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'76,1% / 4,8%', label:'social media / online sales', context:'Atenția este socială; tranzacțiile și măsurarea rămân limitate.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'94,8%', label:'utilizatori care accesează prin smartphone', context:'Fiecare traseu trebuie să fie rapid, concis și pregătit pentru mesagerie pe mobil.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
    ],
    bg: [
      { value:'98,6%', label:'домакинства с internet access', context:'Косово е свързано; commercial gap идва след access.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'40%', label:'компании със сайт', context:'Enterprise internet use е 97,1%, което прави owned-channel maturity по-ясния пропуск.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'76,1% / 4,8%', label:'social media / online sales', context:'Attention е social; transactions и measurement остават ограничени.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
      { value:'94,8%', label:'потребители през smartphone', context:'Всеки journey трябва да бъде бърз, ясен и message-ready на mobile.', source:'OECD Kosovo digital society, 2024', sourceUrl:sourceUrls.kosovoDigital },
    ],
  },
  serbia: {
    ro: [
      { value:'85,0% / 28,4%', label:'website de companie / web sales', context:'Diferența Serbiei nu este prezența. Este performanța comercială a website-urilor existente.', source:'SORS Usage of ICT 2024', sourceUrl:sourceUrls.serbiaIct },
      { value:'53,6%', label:'persoane care cumpără online', context:'Ponderea celor care au cumpărat în ultimele trei luni din 2025; cumpărăturile online sunt mainstream.', source:'SORS e-commerce time series, 2025', sourceUrl:sourceUrls.serbiaEcommerce },
      { value:'110,6 mil.', label:'tranzacții de cumpărare online', context:'Tranzacții online cu card și e-money în 2025, +34,3% față de anul anterior.', source:'Banca Națională a Serbiei, plăți 2025', sourceUrl:sourceUrls.serbiaPayments },
      { value:'7,0%', label:'companii care folosesc AI', context:'Automatizarea practică și controlată este un punct de intrare mai solid decât teatrul transformării.', source:'SORS Usage of ICT 2024', sourceUrl:sourceUrls.serbiaIct },
    ],
    bg: [
      { value:'85,0% / 28,4%', label:'фирмен сайт / web sales', context:'Пропускът в Сърбия не е presence. Той е commercial performance на съществуващите сайтове.', source:'SORS Usage of ICT 2024', sourceUrl:sourceUrls.serbiaIct },
      { value:'53,6%', label:'хора, които купуват online', context:'Дял на купувалите през предходните три месеца през 2025; online buying е mainstream.', source:'SORS e-commerce time series, 2025', sourceUrl:sourceUrls.serbiaEcommerce },
      { value:'110,6 млн.', label:'online purchase transactions', context:'Card и e-money online transactions през 2025, +34,3% годишно.', source:'National Bank of Serbia, 2025 payments', sourceUrl:sourceUrls.serbiaPayments },
      { value:'7,0%', label:'предприятия, използващи AI', context:'Practical bounded automation е по-силна entry point от transformation theatre.', source:'SORS Usage of ICT 2024', sourceUrl:sourceUrls.serbiaIct },
    ],
  },
};

const localizedSectors: Record<MarketSlug, Record<'ro' | 'bg', Sector[]>> = {
  albania: {
    ro: [
      { name:'Hospitality și turism', need:'Cerere directă, discovery multilingv și vizibilitate în afara sezonului.', system:'Arhitectură bilingvă de destinație, solicitare/rezervare directă, hărți, review-uri și follow-up CRM.' },
      { name:'Retail și commerce specializat', need:'Traficul social există, dar încrederea, plata și livrarea încă pierd cerere.', system:'Catalog/magazin mobil, opțiuni card sau asistate, claritate pentru livrare/retur și lifecycle de client.' },
      { name:'Imobiliare și construcții', need:'Dovezile de proiect și solicitările diasporei sunt adesea fragmentate între canale.', system:'Portofoliu, pagini de proiect, trasee pentru cumpărători în engleză, calificare WhatsApp și pipeline routing.' },
      { name:'Exportatori și servicii profesionale', need:'Cumpărătorii internaționali cer dovezi credibile în engleză și pași următori clari.', system:'Conținut de autoritate, capabilități, case evidence, fluxuri RFQ și CRM cu sursa urmărită.' },
    ],
    bg: [
      { name:'Hospitality и tourism', need:'Direct demand, многоезично discovery и off-season visibility.', system:'Двуезична destination architecture, direct enquiry/booking, maps, reviews и CRM follow-up.' },
      { name:'Retail и specialty commerce', need:'Social traffic съществува, но trust, payment и delivery все още губят demand.', system:'Mobile catalogue/store, card или assisted options, ясни delivery/returns правила и customer lifecycle.' },
      { name:'Имоти и строителство', need:'Project proof и diaspora enquiries често са фрагментирани между канали.', system:'Portfolio, project pages, English buyer paths, WhatsApp qualification и pipeline routing.' },
      { name:'Exporters и professional firms', need:'International buyers изискват credible English proof и ясни next steps.', system:'Authority content, capabilities, case evidence, RFQ flows и source-tracked CRM.' },
    ],
  },
  'north-macedonia': {
    ro: [
      { name:'Retail și branduri omnichannel', need:'E-sales rămân în urmă, iar încrederea, plata la livrare și fulfilment-ul modelează conversia.', system:'Module de încredere verificate, discovery pentru plăți locale, logică de livrare, WhatsApp și CRM.' },
      { name:'Hospitality și turism', need:'Cererea locală și a vizitatorilor are nevoie de trasee multilingve cu fricțiune redusă.', system:'Discovery în macedoneană, albaneză și engleză, booking/enquiry, local SEO și follow-up.' },
      { name:'Producători și exportatori', need:'Companiile orientate spre UE au nevoie de dovezi tehnice structurate și lead-uri de distribuitor.', system:'Capabilități English-first, catalog tehnic, RFQ routing și distributor CRM.' },
      { name:'Sănătate și servicii profesionale', need:'Solicitările high-intent cer încredere, potrivire de limbă și răspuns fiabil.', system:'Pagini de expertiză, local discovery, captare de programări/consultații și response SLA.' },
    ],
    bg: [
      { name:'Retail и omnichannel brands', need:'E-sales изостават, докато trust, cash-on-delivery и fulfilment оформят conversion.', system:'Verified-trust modules, local payment discovery, delivery logic, WhatsApp и CRM.' },
      { name:'Hospitality и tourism', need:'Многоезичното local и visitor demand се нуждае от booking paths с ниско friction.', system:'Macedonian, Albanian и English discovery, booking/enquiry, local SEO и follow-up.' },
      { name:'Manufacturing и exporters', need:'EU-facing компаниите се нуждаят от structured technical evidence и distributor leads.', system:'English-first capabilities, technical catalogue, RFQ routing и distributor CRM.' },
      { name:'Health и professional services', need:'High-intent enquiries изискват trust, language fit и reliable response.', system:'Expertise pages, local discovery, appointment/consultation capture и response SLA.' },
    ],
  },
  kosovo: {
    ro: [
      { name:'Retail și social sellers', need:'Atenția socială este puternică; datele proprii despre produse, comenzi și clienți sunt slabe.', system:'Catalog/magazin mobil, assisted ordering, livrare/retur, tracking și segmente CRM.' },
      { name:'Turism și hospitality', need:'Diaspora și vizitatorii au nevoie de trasee directe multilingve și dovezi locale.', system:'Discovery albaneză/engleză, hărți, review-uri, booking/enquiry și WhatsApp concierge.' },
      { name:'Imobiliare și construcții', need:'Investițiile diasporei și interesul pentru proiecte cer calificare structurată.', system:'Dovezi de proiect, pagini de proprietăți, trasee de vizionare/consultație și lead routing.' },
      { name:'ICT, BPO și exportatori', need:'Companiile internaționale depind prea mult de recomandări și au nevoie de buyer-grade proof.', system:'Poziționare în engleză, case studies, account pages, RFQ/consultație și pipeline CRM.' },
    ],
    bg: [
      { name:'Retail и social sellers', need:'Social attention е силно; owned product, order и customer data са слаби.', system:'Mobile catalogue/store, assisted ordering, delivery/returns, tracking и CRM segments.' },
      { name:'Tourism и hospitality', need:'Diaspora и visitor demand се нуждаят от многоезични direct paths и local proof.', system:'Albanian/English discovery, maps, reviews, booking/enquiry и WhatsApp concierge.' },
      { name:'Имоти и строителство', need:'Diaspora investment и project interest изискват structured qualification.', system:'Project evidence, property pages, viewing/consultation flows и lead routing.' },
      { name:'ICT, BPO и exporters', need:'International firms разчитат прекалено на referrals и се нуждаят от buyer-grade proof.', system:'English positioning, case studies, account pages, RFQ/consultation и pipeline CRM.' },
    ],
  },
  serbia: {
    ro: [
      { name:'Retail și distribuție', need:'Website-urile existente au nevoie de conversie mai bună, plăți locale și operațiuni de catalog.', system:'Commerce rebuild, discovery pentru RSD/plăți, product feeds, lifecycle CRM și analytics.' },
      { name:'Turism și hospitality', need:'Cererea internațională mare necesită trasee directe sârbă-engleză.', system:'Arhitectură booking/enquiry, local discovery, reputation proof și guest follow-up.' },
      { name:'Clinici și servicii cu programare', need:'Cererea locală high-value are nevoie de expertiză, încredere și răspuns responsabil.', system:'SEO pentru servicii/locații, practitioner proof, captare consent-aware și lead attribution.' },
      { name:'Producători și exportatori B2B', need:'Penetrarea mare a website-urilor ascunde buyer enablement și operațiuni de lead slabe.', system:'Dovezi tehnice sârbă-engleză, specificații, fluxuri distributor/RFQ și sales CRM.' },
    ],
    bg: [
      { name:'Retail и distribution', need:'Съществуващите сайтове се нуждаят от по-добра conversion, local payments и catalogue operations.', system:'Commerce rebuild, RSD/payment discovery, product feeds, lifecycle CRM и analytics.' },
      { name:'Tourism и hospitality', need:'Голямото international demand изисква Serbian-English direct journeys.', system:'Booking/enquiry architecture, local discovery, reputation proof и guest follow-up.' },
      { name:'Clinics и appointment services', need:'High-value local demand изисква expertise, trust и accountable response.', system:'Service/location SEO, practitioner proof, consent-aware capture и lead attribution.' },
      { name:'Manufacturers и B2B exporters', need:'Високото website penetration прикрива слаб buyer enablement и lead operations.', system:'Serbian-English technical proof, specifications, distributor/RFQ flows и sales CRM.' },
    ],
  },
};

const factSets: Record<MarketSlug, Record<MarketLang, Fact[]>> = {
  albania: { ...Object.fromEntries(Object.entries(albaniaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])), ...localizedFacts.albania } as Record<MarketLang, Fact[]>,
  'north-macedonia': { ...Object.fromEntries(Object.entries(macedoniaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])), ...localizedFacts['north-macedonia'] } as Record<MarketLang, Fact[]>,
  kosovo: { ...Object.fromEntries(Object.entries(kosovoFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])), ...localizedFacts.kosovo } as Record<MarketLang, Fact[]>,
  serbia: { ...Object.fromEntries(Object.entries(serbiaFacts).map(([lang, facts]) => [lang, normalizeFacts(facts)])), ...localizedFacts.serbia } as Record<MarketLang, Fact[]>,
};

const definitions = [
  { slug: 'albania', code: 'AL', localName: 'Shqipëri', countryCode: 'AL', accent: '#e44742' },
  { slug: 'north-macedonia', code: 'MK', localName: 'Северна Македонија', countryCode: 'MK', accent: '#d8a746' },
  { slug: 'kosovo', code: 'XK', localName: 'Kosovë', countryCode: 'XK', accent: '#4c82d4' },
  { slug: 'serbia', code: 'RS', localName: 'Srbija', countryCode: 'RS', accent: '#6f9e86' },
] as const;

export const marketHubs: MarketDefinition[] = definitions.map((definition) => ({
  ...definition,
  copy: Object.fromEntries((Object.keys(shared) as MarketLang[]).map((lang) => {
    const localized = lang === 'ro' || lang === 'bg';
    return [lang, {
      ...(localized ? localizedCommonCopy[lang] : commonCopy[lang as CoreMarketLang]),
      ...(localized ? localizedMarketSpecific[definition.slug][lang] : marketSpecific[definition.slug][lang as CoreMarketLang]),
      facts: factSets[definition.slug][lang],
      sectors: localized ? localizedSectors[definition.slug][lang] : sectorSets[definition.slug][lang as CoreMarketLang],
    }];
  })) as Record<MarketLang, MarketCopy>,
}));

export const marketSlugs = definitions.map(({ slug }) => slug);
export const marketLanguages: MarketLang[] = ['en', 'sq', 'mk', 'sr', 'ro', 'bg'];
export { shared as marketUi };

export function getMarketHub(slug: string, lang: string): MarketDefinition | undefined {
  const market = marketHubs.find((item) => item.slug === slug);
  if (!market) return undefined;
  return { ...market, copy: market.copy };
}
