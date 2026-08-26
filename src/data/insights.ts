export type InsightLocale = 'en' | 'sq' | 'mk' | 'sr';

export interface InsightArticle {
  slug: string;
  publishedAt: string;
  category: string;
  readTime: string;
  title: Record<InsightLocale, string>;
  excerpt: Record<InsightLocale, string>;
  body: Record<InsightLocale, string[]>;
}

export const insights: InsightArticle[] = [
  {
    slug: 'why-trust-is-the-real-website-conversion-driver',
    publishedAt: '2026-08-12', category: 'Strategy', readTime: '5 min',
    title: { en: 'Why trust is the real website conversion driver', sq: 'Pse besimi është shtytësi i vërtetë i konvertimit', mk: 'Зошто довербата е вистинскиот двигател на конверзијата', sr: 'Zašto je poverenje pravi pokretač konverzije' },
    excerpt: { en: 'A practical framework for making an established business feel credible from the first screen.', sq: 'Një kornizë praktike për ta bërë një biznes të etabliran të duket i besueshëm që në ekranin e parë.', mk: 'Практична рамка за кредибилно претставување на воспоставен бизнис уште од првиот екран.', sr: 'Praktičan okvir da etablirani biznis deluje pouzdano već na prvom ekranu.' },
    body: {
      en: ['People do not evaluate a website in isolation. They use clarity, proof and consistency as shortcuts for deciding whether a business is safe to contact.', 'The strongest conversion improvements usually come from aligning the promise, the evidence and the next action. A premium interface makes that sequence easy to understand without adding noise.'],
      sq: ['Njerëzit nuk e vlerësojnë një faqe interneti të izoluar. Ata përdorin qartësinë, provat dhe qëndrueshmërinë për të vendosur nëse një biznes është i sigurt për t’u kontaktuar.', 'Përmirësimet më të forta në konvertim vijnë nga harmonizimi i premtimit, provave dhe veprimit të radhës.'],
      mk: ['Луѓето не ја оценуваат веб-страницата изолирано. Јасноста, доказите и доследноста им помагаат да одлучат дали бизнисот е сигурен за контакт.', 'Најсилните подобрувања доаѓаат кога ветувањето, доказите и следниот чекор се усогласени.'],
      sr: ['Ljudi ne procenjuju sajt izolovano. Jasnoća, dokazi i doslednost im pomažu da odluče da li je bezbedno stupiti u kontakt.', 'Najveća poboljšanja dolaze kada su obećanje, dokazi i sledeći korak usklađeni.'],
    },
  },
  {
    slug: 'a-better-brief-for-balkan-business-websites',
    publishedAt: '2026-08-05', category: 'Web Design', readTime: '6 min',
    title: { en: 'A better brief for Balkan business websites', sq: 'Një brief më i mirë për faqet e bizneseve në Ballkan', mk: 'Подобар бриф за деловни веб-страници на Балканот', sr: 'Bolji brif za poslovne sajtove na Balkanu' },
    excerpt: { en: 'The questions that turn a website project from a visual exercise into a useful business system.', sq: 'Pyetjet që e kthejnë një projekt faqeje në një sistem të dobishëm biznesi.', mk: 'Прашањата што го претвораат проектот од визуелна вежба во корисен деловен систем.', sr: 'Pitanja koja projekat sajta pretvaraju iz vizuelne vežbe u koristan poslovni sistem.' },
    body: {
      en: ['A useful brief starts with the commercial reality: who needs to trust you, what they need to understand and which action should become easier.', 'For Balkan businesses, language, geography and mobile behaviour matter early. Defining these constraints before design creates a clearer structure and a more resilient launch.'],
      sq: ['Një brief i dobishëm nis me realitetin tregtar: kush duhet t’ju besojë, çfarë duhet të kuptojë dhe cilin veprim duhet ta bëjë më të lehtë.', 'Për bizneset në Ballkan, gjuha, gjeografia dhe sjellja mobile duhen përcaktuar herët.'],
      mk: ['Добриот бриф започнува со деловната реалност: кој треба да ви верува, што треба да разбере и кој чекор треба да биде полесен.', 'За балканските бизниси, јазикот, географијата и мобилното однесување се важни од самиот почеток.'],
      sr: ['Dobar brif počinje od poslovne realnosti: kome treba da ulijete poverenje, šta treba da razume i koji korak treba da bude lakši.', 'Za balkanske biznise je važno rano definisati jezik, geografiju i ponašanje mobilnih korisnika.'],
    },
  },
  {
    slug: 'seo-geo-and-aeo-foundations-that-age-well',
    publishedAt: '2026-07-28', category: 'Visibility', readTime: '7 min',
    title: { en: 'SEO, GEO and AEO foundations that age well', sq: 'Themelet e SEO, GEO dhe AEO që qëndrojnë gjatë', mk: 'SEO, GEO и AEO основи што траат', sr: 'SEO, GEO i AEO osnove koje traju' },
    excerpt: { en: 'How clear information architecture helps people, search engines and answer systems find the right signal.', sq: 'Si arkitektura e qartë e informacionit ndihmon njerëzit, motorët e kërkimit dhe sistemet e përgjigjeve.', mk: 'Како јасната информациска архитектура им помага на луѓето и системите да го најдат вистинскиот сигнал.', sr: 'Kako jasna informaciona arhitektura pomaže ljudima i sistemima da pronađu pravi signal.' },
    body: {
      en: ['Long-term visibility is less about repeating keywords and more about making the business legible. Strong pages answer a real question, show evidence and connect naturally to the next useful page.', 'That foundation supports classic search, generative discovery and answer engines at the same time. It also gives a team a durable editorial system instead of a one-off campaign.'],
      sq: ['Dukshmëria afatgjatë nuk ka të bëjë vetëm me përsëritjen e fjalëve kyçe, por me bërjen e biznesit të kuptueshëm.', 'Kjo bazë mbështet kërkimin klasik, zbulimin gjenerues dhe motorët e përgjigjeve njëkohësisht.'],
      mk: ['Долгорочната видливост не е само повторување клучни зборови, туку јасно претставување на бизнисот.', 'Таквата основа истовремено поддржува класично пребарување, генеративно откривање и системи за одговори.'],
      sr: ['Dugoročna vidljivost nije samo ponavljanje ključnih reči, već jasno predstavljanje poslovanja.', 'Takva osnova istovremeno podržava klasičnu pretragu, generativno otkrivanje i sisteme za odgovore.'],
    },
  },
];

export const insightLabels: Record<InsightLocale, { section: string; journal: string; latest: string; back: string; byline: string }> = {
  en: { section: 'Insights', journal: 'QCT Journal', latest: 'Latest thinking', back: 'Back to Insights', byline: 'QCT Studio editorial' },
  sq: { section: 'Insights', journal: 'QCT Journal', latest: 'Mendime të fundit', back: 'Kthehu te Insights', byline: 'Redaksia e QCT Studio' },
  mk: { section: 'Insights', journal: 'QCT Journal', latest: 'Најнови размислувања', back: 'Назад кон Insights', byline: 'Уредништво на QCT Studio' },
  sr: { section: 'Insights', journal: 'QCT Journal', latest: 'Najnovija razmišljanja', back: 'Nazad na Insights', byline: 'Redakcija QCT Studio' },
};
