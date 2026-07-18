export type SeoPage =
  | 'about'
  | 'services'
  | 'website-design'
  | 'e-commerce'
  | 'ai-automation'
  | 'seo-performance'
  | 'whatsapp-commerce'
  | 'meta-ads'
  | 'careers'
  | 'contact';

type IndexedLang = 'en' | 'sq' | 'mk';

interface SeoEntry {
  title: string;
  description: string;
}

const seo: Record<IndexedLang, Record<SeoPage, SeoEntry>> = {
  en: {
    about: {
      title: 'About QCT Studio — Digital Partner for Balkan Businesses',
      description: 'Meet QCT Studio, founded in Istanbul by Teyfik Gökdemir to build trusted websites, e-commerce and digital systems for Balkan businesses.',
    },
    services: {
      title: 'Web, E-commerce, SEO & AI Services — QCT Studio',
      description: 'Explore website design, e-commerce, WhatsApp Commerce, SEO, GEO, Meta Ads landing pages and AI automation for Balkan businesses.',
    },
    'website-design': {
      title: 'Website Design for Balkan Businesses — QCT Studio',
      description: 'Premium website design for established businesses in Albania and North Macedonia that need stronger trust, clarity and mobile performance.',
    },
    'e-commerce': {
      title: 'E-commerce Website Development — QCT Studio',
      description: 'Conversion-focused e-commerce stores with clear product pages, confident checkout and smooth mobile shopping for Balkan businesses.',
    },
    'ai-automation': {
      title: 'AI Automation for Business Workflows — QCT Studio',
      description: 'Practical AI automation that reduces repetitive work, improves lead routing and keeps your team in control of important decisions.',
    },
    'seo-performance': {
      title: 'SEO & GEO for Google and AI Search — QCT Studio',
      description: 'Technical SEO, content structure and GEO readiness that help Balkan businesses appear in Google and modern AI-powered search.',
    },
    'whatsapp-commerce': {
      title: 'WhatsApp Commerce Solutions — QCT Studio',
      description: 'Connect websites, ads and product interest with clearer WhatsApp sales journeys that make enquiries easier to manage and convert.',
    },
    'meta-ads': {
      title: 'Meta Ads Landing Page Design — QCT Studio',
      description: 'Focused landing pages aligned with Meta Ads campaigns to reduce distraction, strengthen message match and generate better enquiries.',
    },
    careers: {
      title: 'Careers at QCT Studio — Join Our Digital Team',
      description: 'Explore opportunities at QCT Studio for responsible, clear communicators who want to build useful digital work for Balkan businesses.',
    },
    contact: {
      title: 'Contact QCT Studio — Start Your Digital Project',
      description: 'Contact QCT Studio about websites, e-commerce, SEO, GEO, landing pages and AI automation for your business in the Balkans.',
    },
  },
  sq: {
    about: {
      title: 'Rreth QCT Studio — Partner Digjital për Bizneset Ballkanike',
      description: 'Njihuni me QCT Studio, themeluar në Stamboll nga Teyfik Gökdemir për të ndërtuar faqe, e-commerce dhe sisteme digjitale për bizneset ballkanike.',
    },
    services: {
      title: 'Faqe, E-commerce, SEO dhe AI — QCT Studio',
      description: 'Zbuloni dizajn faqesh, e-commerce, WhatsApp Commerce, SEO, GEO, faqe për Meta Ads dhe automatizim me AI për bizneset ballkanike.',
    },
    'website-design': {
      title: 'Dizajn Faqesh për Bizneset Ballkanike — QCT Studio',
      description: 'Dizajn premium faqesh për biznese në Shqipëri dhe Maqedoninë e Veriut që kërkojnë më shumë besim, qartësi dhe performancë në celular.',
    },
    'e-commerce': {
      title: 'Zhvillim Faqesh E-commerce — QCT Studio',
      description: 'Dyqane online me faqe të qarta produktesh, pagesë të sigurt dhe blerje të rrjedhshme në celular për bizneset ballkanike.',
    },
    'ai-automation': {
      title: 'Automatizim me AI për Bizneset — QCT Studio',
      description: 'Automatizim praktik me AI që ul punën e përsëritur, përmirëson menaxhimin e kërkesave dhe ruan kontrollin e ekipit.',
    },
    'seo-performance': {
      title: 'SEO & GEO për Google dhe Kërkimin me AI — QCT Studio',
      description: 'SEO teknike, strukturë përmbajtjeje dhe GEO që ndihmojnë bizneset ballkanike të shfaqen në Google dhe kërkimin modern me AI.',
    },
    'whatsapp-commerce': {
      title: 'Zgjidhje WhatsApp Commerce — QCT Studio',
      description: 'Lidhni faqen, reklamat dhe interesin për produktet me një proces më të qartë shitjeje dhe komunikimi në WhatsApp.',
    },
    'meta-ads': {
      title: 'Dizajn Faqesh për Meta Ads — QCT Studio',
      description: 'Faqe të fokusuara për fushatat Meta Ads që përputhen me mesazhin e reklamës, ulin shpërqendrimet dhe rrisin kërkesat.',
    },
    careers: {
      title: 'Karriera në QCT Studio — Bashkohuni me Ekipin',
      description: 'Shikoni mundësitë në QCT Studio për njerëz të përgjegjshëm që komunikojnë qartë dhe duan të krijojnë punë digjitale me vlerë.',
    },
    contact: {
      title: 'Kontaktoni QCT Studio — Nisni Projektin Tuaj',
      description: 'Kontaktoni QCT Studio për faqe interneti, e-commerce, SEO, GEO, faqe reklamash dhe automatizim me AI në Ballkan.',
    },
  },
  mk: {
    about: {
      title: 'За QCT Studio — Дигитален партнер за балкански компании',
      description: 'Запознајте го QCT Studio, основано во Истанбул од Teyfik Gökdemir за веб-страници, е-трговија и дигитални системи за балкански компании.',
    },
    services: {
      title: 'Веб, е-трговија, SEO и AI услуги — QCT Studio',
      description: 'Откријте веб-дизајн, е-трговија, WhatsApp Commerce, SEO, GEO, страници за Meta Ads и AI автоматизација за балкански компании.',
    },
    'website-design': {
      title: 'Дизајн на веб-страници за Балканот — QCT Studio',
      description: 'Премиум веб-дизајн за компании во Албанија и Северна Македонија на кои им треба поголема доверба, јасност и мобилни перформанси.',
    },
    'e-commerce': {
      title: 'Изработка на веб-страници за е-трговија — QCT Studio',
      description: 'Онлајн продавници со јасни производи, сигурна наплата и непречено мобилно купување за балкански компании.',
    },
    'ai-automation': {
      title: 'AI автоматизација за деловни процеси — QCT Studio',
      description: 'Практична AI автоматизација што ја намалува повторливата работа, го подобрува управувањето со барањата и ја задржува контролата на тимот.',
    },
    'seo-performance': {
      title: 'SEO & GEO за Google и AI пребарување — QCT Studio',
      description: 'Техничко SEO, структура на содржина и GEO што им помагаат на балканските компании да се појават во Google и модерното AI пребарување.',
    },
    'whatsapp-commerce': {
      title: 'WhatsApp Commerce решенија — QCT Studio',
      description: 'Поврзете ги веб-страницата, рекламите и интересот за производи со појасен процес за продажба и комуникација преку WhatsApp.',
    },
    'meta-ads': {
      title: 'Дизајн на страници за Meta Ads — QCT Studio',
      description: 'Фокусирани страници за Meta Ads што ја следат пораката на рекламата, ги намалуваат одвлекувањата и создаваат повеќе барања.',
    },
    careers: {
      title: 'Кариера во QCT Studio — Придружете му се на тимот',
      description: 'Истражете ги можностите во QCT Studio за одговорни луѓе што комуницираат јасно и сакаат да создаваат корисна дигитална работа.',
    },
    contact: {
      title: 'Контактирајте го QCT Studio — Започнете проект',
      description: 'Контактирајте го QCT Studio за веб-страници, е-трговија, SEO, GEO, рекламни страници и AI автоматизација на Балканот.',
    },
  },
};

export function getPageSeo(page: SeoPage, lang: string): SeoEntry {
  const indexedLang: IndexedLang = lang === 'sq' || lang === 'mk' ? lang : 'en';
  return seo[indexedLang][page];
}
