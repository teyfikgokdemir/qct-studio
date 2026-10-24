export type SeoPage =
  | 'home'
  | 'about'
  | 'services'
  | 'website-design'
  | 'e-commerce'
  | 'ai-automation'
  | 'seo-performance'
  | 'whatsapp-commerce'
  | 'meta-ads'
  | 'careers'
  | 'contact'
  | 'work'
  | 'headwear-case-study'
  | 'misima-case-study'
  | 'artman-case-study'
  | 'phiaderm-case-study';

export type IndexedLang = 'en' | 'sq' | 'mk' | 'sr' | 'ro' | 'bg';

interface SeoEntry {
  title: string;
  description: string;
}

const seo: Record<IndexedLang, Record<SeoPage, SeoEntry>> = {
  en: {
    home: {
      title: 'QCT Studio — Web Engineering & Digital Systems',
      description: 'High-performance web platforms, headless e-commerce, Dynamic SEO and practical AI automation for ambitious international businesses.'
    },
    about: {
      title: 'About QCT Studio — Web Engineering Partner',
      description: 'QCT Studio, founded in Istanbul, engineers high-performance web platforms, headless commerce and digital systems for international businesses.'
    },
    services: {
      title: 'Web Engineering & Digital Commerce Services | QCT',
      description: 'Explore website engineering, headless e-commerce, WhatsApp Commerce, Dynamic SEO, GEO citation and practical AI automation for business growth.'
    },
    'website-design': {
      title: 'High-Performance Website Design & Engineering | QCT',
      description: 'Conversion-focused website design for established international businesses that need stronger trust, clarity, sub-second speed and mobile performance.'
    },
    'e-commerce': {
      title: 'Headless E-commerce Systems & Storefronts | QCT',
      description: 'Conversion-focused e-commerce stores with clear product architecture, confident checkout and smooth mobile shopping for international markets.'
    },
    'ai-automation': {
      title: 'Practical AI Automation for Business Workflows | QCT',
      description: 'Practical AI automation for modern businesses that reduces repetitive work, accelerates lead routing and keeps your team firmly in control.'
    },
    'seo-performance': {
      title: 'SEO, GEO & AI Search Visibility | QCT Studio',
      description: 'Technical SEO, content architecture and GEO readiness that help ambitious businesses and international brands appear in Google and AI-powered search.'
    },
    'whatsapp-commerce': {
      title: 'WhatsApp Commerce for International Sales | QCT Studio',
      description: 'Connect websites, paid campaigns and buyer interest with high-converting WhatsApp sales journeys for international commercial operations.'
    },
    'meta-ads': {
      title: 'Meta Ads Landing Pages for International Campaigns | QCT',
      description: 'Focused landing pages aligned with paid ad campaigns to strengthen message match, reduce friction and generate higher-quality international leads.'
    },
    careers: {
      title: 'Careers at QCT Studio — Join Our Digital Team',
      description: 'Explore opportunities at QCT Studio for responsible, clear communicators who want to build high-performance digital work for global businesses.'
    },
    contact: {
      title: 'Contact QCT Studio — Discuss Your Digital Systems Project',
      description: 'Contact QCT Studio about websites, headless e-commerce, Dynamic SEO, GEO, landing pages and AI automation for your international business project.'
    },
    work: {
      title: 'Selected Digital Work & Case Studies — QCT Studio',
      description: 'Explore QCT Studio’s evidence-led work collection, including HEADWEAR, the CTSEG venture platform and transparent public-status reviews.'
    },
    'headwear-case-study': {
      title: 'HEADWEAR E-commerce Case Study — QCT Studio',
      description: 'See how QCT Studio structured a multilingual e-commerce experience for HEADWEAR performance and outdoor products across devices and markets.'
    },
    'misima-case-study': {
      title: 'Misima Group Public Website Review — QCT Studio',
      description: 'An observational review of Misima Group’s public website; QCT Studio authorship and project scope are not publicly verified.'
    },
    'artman-case-study': {
      title: 'Legacy Work Route — QCT Studio',
      description: 'This legacy work route permanently redirects visitors and search engines to the current, evidence-led CTSEG platform review.'
    },
    'phiaderm-case-study': {
      title: 'Phiaderm Public Pre-launch Status Review — QCT Studio',
      description: 'A transparent review of Phiaderm’s current public page; QCT Studio authorship and delivery scope are not publicly verified.'
    },
  },

  sq: {
    home: {
      title: 'QCT Studio — Inxhinieri Web dhe Sisteme Digjitale',
      description: 'QCT Studio ndërton faqe premium ultra të shpejta, e-commerce, SEO/GEO dhe automatizime praktike me AI për biznese ambicioze ndërkombëtare.'
    },
    about: {
      title: 'Rreth QCT Studio — Partner Inxhinierik Digjital',
      description: 'Njihuni me QCT Studio, themeluar në Stamboll nga Teyfik Gökdemir për të ndërtuar faqe, e-commerce dhe sisteme digjitale për biznese në rritje.'
    },
    services: {
      title: 'Faqe, E-commerce, SEO dhe AI — QCT Studio',
      description: 'Zbuloni dizajn faqesh, e-commerce headless, WhatsApp Commerce, SEO, GEO, faqe për Meta Ads dhe automatizim me AI për biznese moderne.'
    },
    'website-design': {
      title: 'Dizajn Faqesh me Performancë të Lartë — QCT Studio',
      description: 'Dizajn premium faqesh për kompani që kërkojnë më shumë besueshmëri, qartësi komerciale dhe performancë të pakrahasueshme në celular.'
    },
    'e-commerce': {
      title: 'Zhvillim Faqesh E-commerce — QCT Studio',
      description: 'Dyqane online me faqe të qarta produktesh, pagesë të sigurt dhe blerje të rrjedhshme në celular për biznese dhe marka ndërkombëtare.'
    },
    'ai-automation': {
      title: 'Automatizim me AI për Bizneset — QCT Studio',
      description: 'Automatizim praktik me AI që ul punën e përsëritur, përmirëson menaxhimin e kërkesave dhe ruan kontrollin e ekipit.'
    },
    'seo-performance': {
      title: 'SEO & GEO për Google dhe Kërkimin me AI — QCT Studio',
      description: 'SEO teknike, strukturë përmbajtjeje dhe GEO që ndihmojnë kompanitë të shfaqen në Google dhe kërkimin modern të modeleve të AI.'
    },
    'whatsapp-commerce': {
      title: 'Zgjidhje WhatsApp Commerce — QCT Studio',
      description: 'Lidhni faqen, reklamat dhe interesin për produktet me një proces më të qartë shitjeje dhe komunikimi në WhatsApp.'
    },
    'meta-ads': {
      title: 'Dizajn Faqesh për Meta Ads — QCT Studio',
      description: 'Faqe të fokusuara për fushatat Meta Ads që përputhen me mesazhin e reklamës, ulin shpërqendrimet dhe rrisin kërkesat.'
    },
    careers: {
      title: 'Karriera në QCT Studio — Bashkohuni me Ekipin',
      description: 'Shikoni mundësitë në QCT Studio për njerëz të përgjegjshëm që komunikojnë qartë dhe duan të krijojnë punë digjitale me vlerë.'
    },
    contact: {
      title: 'Kontaktoni QCT Studio — Nisni Projektin Tuaj',
      description: 'Kontaktoni QCT Studio për faqe interneti, e-commerce, Dynamic SEO, GEO, faqe reklamash dhe automatizim me AI për projektin tuaj.'
    },
    work: {
      title: 'Punë Digjitale dhe Projekte të Zgjedhura — QCT Studio',
      description: 'Shikoni koleksionin me dëshmi të QCT Studio, përfshirë HEADWEAR, platformën venture CTSEG dhe shqyrtimet transparente të statusit publik.'
    },
    'headwear-case-study': {
      title: 'HEADWEAR — Projekt E-commerce nga QCT Studio',
      description: 'Shikoni si QCT Studio strukturoi një përvojë shumëgjuhëshe e-commerce për produktet performance dhe outdoor të HEADWEAR.'
    },
    'misima-case-study': {
      title: 'Misima Group — Shqyrtim i Faqes Publike',
      description: 'Shqyrtim vëzhgues i faqes publike të Misima Group; autorësia, viti dhe fusha e QCT Studio nuk janë verifikuar publikisht.'
    },
    'artman-case-study': {
      title: 'Route i Vjetër i Punës — QCT Studio',
      description: 'Ky route i vjetër i punës ridrejton përgjithmonë vizitorët dhe motorët e kërkimit te shqyrtimi aktual me dëshmi i CTSEG.'
    },
    'phiaderm-case-study': {
      title: 'Phiaderm — Shqyrtim Publik Para Lansimit',
      description: 'Shqyrtim transparent i faqes aktuale publike të Phiaderm; autorësia dhe fusha e dorëzimit nga QCT Studio nuk janë verifikuar.'
    },
  },

  mk: {
    home: {
      title: 'QCT Studio — Веб инженерство и дигитални системи',
      description: 'QCT Studio создава премиум веб-страници, e-commerce, SEO/GEO и практична AI автоматизација за амбициозни меѓународни компании.'
    },
    about: {
      title: 'За QCT Studio — Дигитален технолошки партнер',
      description: 'Запознајте го QCT Studio, основано во Истанбул од Teyfik Gökdemir за веб-страници, е-трговија и дигитални системи за модерни компании.'
    },
    services: {
      title: 'Веб, е-трговија, SEO и AI услуги — QCT Studio',
      description: 'Откријте веб-инженерство, е-трговија, WhatsApp Commerce, SEO, GEO, страници за Meta Ads и AI автоматизација за современи компании.'
    },
    'website-design': {
      title: 'Дизајн на веб-страници со висока брзина — QCT Studio',
      description: 'Премиум веб-дизајн за компании на кои им треба поголема доверба, комерцијална јасност и беспрекорни мобилни перформанси.'
    },
    'e-commerce': {
      title: 'Изработка на веб-страници за е-трговија — QCT Studio',
      description: 'Онлајн продавници со јасни производи, сигурна наплата и непречено мобилно купување за модерни меѓународни брендови.'
    },
    'ai-automation': {
      title: 'AI автоматизација за деловни процеси — QCT Studio',
      description: 'Практична AI автоматизација што ја намалува повторливата работа, го подобрува управувањето со барањата и ја задржува контролата на тимот.'
    },
    'seo-performance': {
      title: 'SEO & GEO за Google и AI пребарување — QCT Studio',
      description: 'Техничко SEO, структура на содржина и GEO што им помагаат на компаниите да се појават во Google и современото AI пребарување.'
    },
    'whatsapp-commerce': {
      title: 'WhatsApp Commerce решенија — QCT Studio',
      description: 'Поврзете ги веб-страницата, рекламите и интересот за производи со појасен процес за продажба и комуникација преку WhatsApp.'
    },
    'meta-ads': {
      title: 'Дизајн на страници за Meta Ads — QCT Studio',
      description: 'Фокусирани страници за Meta Ads што ја следат пораката на рекламата, ги намалуваат одвлекувањата и создаваат повеќе барања.'
    },
    careers: {
      title: 'Кариера во QCT Studio — Придружете му се на тимот',
      description: 'Истражете ги можностите во QCT Studio за одговорни луѓе што комуницираат јасно и сакаат да создаваат корисна дигитална работа.'
    },
    contact: {
      title: 'Контактирајте го QCT Studio — Започнете проект',
      description: 'Контактирајте го QCT Studio за веб-страници, е-трговија, Dynamic SEO, GEO, рекламни страници и AI автоматизација за вашиот бизнис.'
    },
    work: {
      title: 'Избрани дигитални проекти и студии — QCT Studio',
      description: 'Разгледајте ја evidence-led колекцијата на QCT Studio, вклучувајќи ги HEADWEAR, CTSEG venture платформата и транспарентни public-status прегледи.'
    },
    'headwear-case-study': {
      title: 'HEADWEAR — Студија за е-трговија | QCT Studio',
      description: 'Погледнете како QCT Studio обликува повеќејазично e-commerce искуство за performance и outdoor производите на HEADWEAR.'
    },
    'misima-case-study': {
      title: 'Misima Group — Преглед на јавната веб-страница',
      description: 'Опсервациски преглед на јавната страница на Misima Group; QCT Studio авторството, годината и опфатот не се јавно потврдени.'
    },
    'artman-case-study': {
      title: 'Стара Work рута и redirect — QCT Studio',
      description: 'Оваа стара work рута трајно ги пренасочува посетителите и пребарувачите кон тековниот evidence-led CTSEG преглед.'
    },
    'phiaderm-case-study': {
      title: 'Phiaderm — Јавен pre-launch преглед',
      description: 'Транспарентен преглед на тековната јавна страница; QCT Studio авторство и delivery scope не се потврдени.'
    },
  },

  sr: {
    home: {
      title: 'QCT Studio — Veb inženjering i digitalni sistemi',
      description: 'QCT Studio izrađuje ultra-brze sajtove, e-commerce sisteme, SEO/GEO i praktične AI automatizacije za ambiciozne kompanije.'
    },
    about: {
      title: 'O QCT Studiju — Partner za digitalni inženjering',
      description: 'Upoznajte QCT Studio, koji je Teyfik Gökdemir osnovao u Istanbulu za izradu sajtova, e-commerce sistema i digitalnih tehnologija.'
    },
    services: {
      title: 'Sajtovi, e-commerce, SEO i AI usluge — QCT Studio',
      description: 'Istražite inženjerski dizajn sajtova, e-commerce, WhatsApp Commerce, SEO, GEO, Meta Ads stranice i AI automatizaciju za rast biznisa.'
    },
    'website-design': {
      title: 'Dizajn modernih veb sajtova — QCT Studio',
      description: 'Premium dizajn sajtova za kompanije kojima su potrebni snažnije poverenje, jasnije pozicioniranje i vrhunske mobilne performanse.'
    },
    'e-commerce': {
      title: 'Izrada e-commerce prodavnica — QCT Studio',
      description: 'E-commerce prodavnice sa jasnim stranicama proizvoda, pouzdanom naplatom i besprekornom mobilnom kupovinom za rastuće brendove.'
    },
    'ai-automation': {
      title: 'AI automatizacija poslovnih procesa — QCT Studio',
      description: 'Praktična AI automatizacija koja smanjuje ponavljajući rad, poboljšava obradu upita i zadržava kontrolu važnih odluka u vašem timu.'
    },
    'seo-performance': {
      title: 'SEO & GEO za Google i AI pretragu — QCT Studio',
      description: 'Tehnički SEO, struktura sadržaja i GEO spremnost koji pomažu modernim kompanijama da se pojave na Google-u i u AI pretragama.'
    },
    'whatsapp-commerce': {
      title: 'WhatsApp Commerce rešenja — QCT Studio',
      description: 'Povežite sajt, oglase i interesovanje za proizvode sa jasnijim WhatsApp prodajnim tokom koji olakšava upravljanje upitima i prodajom.'
    },
    'meta-ads': {
      title: 'Dizajn odredišnih stranica za Meta Ads — QCT Studio',
      description: 'Fokusirane stranice usklađene sa Meta Ads kampanjama koje smanjuju ometanja, jačaju poruku oglasa i stvaraju kvalitetnije upite.'
    },
    careers: {
      title: 'Karijera u QCT Studiju — Pridružite se timu',
      description: 'Istražite prilike u QCT Studiju za odgovorne ljude koji jasno komuniciraju i žele da stvaraju vrhunski digitalni rad za globalne klijente.'
    },
    contact: {
      title: 'Kontaktirajte QCT Studio — Pokrenite digitalni projekat',
      description: 'Kontaktirajte QCT Studio za sajtove, e-commerce, Dynamic SEO, GEO, odredišne stranice i AI automatizaciju za vaš međunarodni projekat.'
    },
    work: {
      title: 'Izabrani digitalni projekti i studije — QCT Studio',
      description: 'Pogledajte evidence-led kolekciju QCT Studija, uključujući HEADWEAR, CTSEG venture platformu i transparentne preglede javnog statusa.'
    },
    'headwear-case-study': {
      title: 'HEADWEAR — E-commerce studija | QCT Studio',
      description: 'Pogledajte kako je QCT Studio oblikovao višejezično e-commerce iskustvo za HEADWEAR performance i outdoor proizvode.'
    },
    'misima-case-study': {
      title: 'Misima Group — Pregled javnog sajta',
      description: 'Posmatrački pregled javnog sajta Misima Group; autorstvo, godina i obim rada QCT Studija nisu javno potvrđeni.'
    },
    'artman-case-study': {
      title: 'Stara work ruta i redirect — QCT Studio',
      description: 'Ova stara work ruta trajno preusmerava posetioce i pretraživače na trenutni, evidence-led pregled CTSEG platforme.'
    },
    'phiaderm-case-study': {
      title: 'Phiaderm — Javni pregled pre lansiranja',
      description: 'Transparentan pregled trenutne javne stranice; autorstvo i delivery obim QCT Studija nisu potvrđeni.'
    },
  },

  ro: {
    home: { title: 'QCT Studio — Inginerie Web și Sisteme Digitale', description: 'QCT Studio construiește site-uri premium ultra-rapide, e-commerce headless, SEO/GEO și automatizare AI pentru companii ambițioase.' },
    about: { title: 'Despre QCT Studio — Partener de Inginerie Web', description: 'Descoperă QCT Studio, fondat în Istanbul pentru a construi website-uri rapide, e-commerce headless și sisteme digitale scalabile.' },
    services: { title: 'Website, E-commerce, SEO și AI — QCT Studio', description: 'Servicii de website design, e-commerce headless, WhatsApp Commerce, Dynamic SEO, GEO, landing pages și automatizare AI pentru afaceri.' },
    'website-design': { title: 'Website Design de Înaltă Performanță — QCT Studio', description: 'Website design premium pentru companii care au nevoie de claritate comercială, încredere, viteză sub o secundă și performanță pe mobil.' },
    'e-commerce': { title: 'E-commerce Headless și Magazine Online — QCT Studio', description: 'Magazine online cu structură clară de produse, checkout sigur și experiență mobilă fluidă pentru companii și branduri internaționale.' },
    'ai-automation': { title: 'Automatizare AI pentru business — QCT Studio', description: 'Automatizare AI practică pentru procese repetitive, lead routing, follow-up și operațiuni comerciale clare pentru companii ambițioase.' },
    'seo-performance': { title: 'SEO, GEO și vizibilitate în AI Search — QCT Studio', description: 'SEO tehnic, structură de conținut și GEO pentru a ajuta companiile să fie ușor de găsit în Google și în căutarea asistată de AI.' },
    'whatsapp-commerce': { title: 'WhatsApp Commerce pentru vânzări — QCT Studio', description: 'Conectează website-ul, reclamele și interesul pentru produse cu trasee WhatsApp mai clare pentru vânzări și solicitări comerciale.' },
    'meta-ads': { title: 'Landing Pages pentru Meta Ads — QCT Studio', description: 'Landing pages focalizate, aliniate campaniilor Meta Ads, pentru mesaje mai clare, mai puțină fricțiune și solicitări mai bune.' },
    careers: { title: 'Cariere la QCT Studio — Alătură-te echipei', description: 'Oportunități pentru oameni responsabili și clari, care vor să construiască produse digitale de înaltă performanță pentru clienți globali.' },
    contact: { title: 'Contact QCT Studio — Discută proiectul tău', description: 'Contactează QCT Studio pentru website-uri ultra-rapide, e-commerce headless, Dynamic SEO, GEO, landing pages și automatizare AI.' },
    work: { title: 'Proiecte digitale selectate — QCT Studio', description: 'Explorează proiectele și revizuirile publice QCT Studio, prezentate cu limite clare ale afirmațiilor și fără rezultate inventate.' },
    'headwear-case-study': { title: 'HEADWEAR — Studiu E-commerce | QCT Studio', description: 'O privire asupra experienței e-commerce multilingve HEADWEAR și a modului în care catalogul, navigarea și mobilul lucrează împreună.' },
    'misima-case-study': { title: 'Misima Group — Revizuire site public | QCT Studio', description: 'Revizuire observațională a website-ului public Misima Group; autoratul și scope-ul QCT Studio nu sunt prezentate ca fiind verificate.' },
    'artman-case-study': { title: 'Rută veche de proiect — QCT Studio', description: 'Această rută veche redirecționează permanent vizitatorii și motoarele de căutare către revizuirea curentă a platformei CTSEG.' },
    'phiaderm-case-study': { title: 'Phiaderm — Revizuire publică pre-lansare', description: 'Revizuire transparentă a paginii publice actuale Phiaderm; autoratul și scope-ul de livrare QCT Studio nu sunt verificate public.' },
  },

  bg: {
    home: { title: 'QCT Studio — Уеб инженерство и дигитални системи', description: 'QCT Studio изгражда премиум сайтове, headless e-commerce, Dynamic SEO/GEO и практична AI автоматизация за амбициозен международен бизнес.' },
    about: { title: 'За QCT Studio — Партньор по уеб инженерство', description: 'Научете повече за QCT Studio, основано в Истанбул за изграждане на ултра-бързи сайтове, e-commerce и стабилни дигитални системи.' },
    services: { title: 'Уеб, e-commerce, SEO и AI услуги — QCT Studio', description: 'Website engineering, headless e-commerce, WhatsApp Commerce, Dynamic SEO, GEO, Meta Ads landing pages и AI автоматизация за растеж.' },
    'website-design': { title: 'Website Design с висока скорост — QCT Studio', description: 'Премиум website design за компании, които се нуждаят от авторитет, търговска яснота, скорост под секунда и мобилна производителност.' },
    'e-commerce': { title: 'Headless E-commerce за модерен бизнес — QCT Studio', description: 'Онлайн магазини с ясна продуктова архитектура, сигурен checkout и бързо mobile изживяване за международни пазари и брандове.' },
    'ai-automation': { title: 'AI автоматизация за бизнес — QCT Studio', description: 'Практична AI автоматизация за повтарящи се работни процеси, lead routing, follow-up и по-ефективни търговски операции за бизнеса.' },
    'seo-performance': { title: 'SEO, GEO и AI Search видимост — QCT Studio', description: 'Техническо SEO, content structure и GEO, които помагат на амбициозните компании да бъдат видими в Google и търсенето чрез AI.' },
    'whatsapp-commerce': { title: 'WhatsApp Commerce за продажби — QCT Studio', description: 'Свържете сайта, рекламите и продуктовия интерес с по-ясни WhatsApp пътеки за надеждни продажби и клиентски запитвания.' },
    'meta-ads': { title: 'Landing Pages за Meta Ads — QCT Studio', description: 'Фокусирани landing pages, съгласувани с Meta Ads кампании, за по-ясно послание, по-малко friction и по-качествени запитвания.' },
    careers: { title: 'Кариери в QCT Studio — Присъединете се към екипа', description: 'Възможности за отговорни професионалисти, които искат да създават дигитални инженерни продукти с висока стойност за световни клиенти.' },
    contact: { title: 'Контакт с QCT Studio — Обсъдете проекта си', description: 'Свържете се с QCT Studio за ултра-бързи сайтове, headless e-commerce, Dynamic SEO, GEO, landing pages и практична AI автоматизация.' },
    work: { title: 'Избрани дигитални проекти — QCT Studio', description: 'Разгледайте избрани QCT Studio проекти и публични прегледи с ясни граници на твърденията и без измислени резултати.' },
    'headwear-case-study': { title: 'HEADWEAR — E-commerce казус | QCT Studio', description: 'Преглед на многоезичното HEADWEAR e-commerce изживяване и начина, по който каталогът, навигацията и mobile UX работят заедно.' },
    'misima-case-study': { title: 'Misima Group — Преглед на публичен сайт', description: 'Наблюдателен преглед на публичния сайт на Misima Group; авторството и scope-ът на QCT Studio не се представят като потвърдени.' },
    'artman-case-study': { title: 'Стар проектен маршрут — QCT Studio', description: 'Този стар маршрут пренасочва трайно посетителите и търсачките към текущия преглед на CTSEG платформата.' },
    'phiaderm-case-study': { title: 'Phiaderm — Публичен pre-launch преглед', description: 'Прозрачен преглед на текущата публична страница на Phiaderm; авторството и delivery scope-ът на QCT Studio не са публично потвърдени.' },
  },
};

export function getPageSeo(page: SeoPage, lang: string): SeoEntry {
  const indexedLang: IndexedLang = ['sq','mk','sr','ro','bg'].includes(lang) ? lang as IndexedLang : 'en';
  return seo[indexedLang][page];
}
