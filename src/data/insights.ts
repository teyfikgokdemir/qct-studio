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
    slug: 'chatgpt-ads-2026-ai-native-advertising',
    publishedAt: '2026-09-28', category: 'AI Advertising', readTime: '8 min',
    title: {
      en: 'ChatGPT Ads in 2026: what AI-native advertising changes for businesses',
      sq: 'ChatGPT Ads në 2026: çfarë ndryshon reklamimi AI-native për bizneset',
      mk: 'ChatGPT Ads во 2026: што менува AI-native рекламирањето за бизнисите',
      sr: 'ChatGPT Ads u 2026: šta AI-native oglašavanje menja za biznise'
    },
    excerpt: {
      en: 'A practical guide to ChatGPT Ads, conversational intent, CPC buying, Sponsored Agents and how landing pages should adapt to AI-native discovery.',
      sq: 'Udhëzues praktik për ChatGPT Ads, conversational intent, CPC, Sponsored Agents dhe si duhet të përshtaten landing pages.',
      mk: 'Практичен водич за ChatGPT Ads, conversational intent, CPC, Sponsored Agents и адаптација на landing pages.',
      sr: 'Praktičan vodič za ChatGPT Ads, conversational intent, CPC, Sponsored Agents i prilagođavanje landing stranica.'
    },
    body: {
      en: [
        'ChatGPT Ads introduces a different advertising context from classic keyword search. People often arrive with a problem, comparison or decision already in progress, so relevance depends on conversational intent and useful commercial context rather than a single keyword.',
        'OpenAI expanded advertiser access in 2026 with self-serve Ads Manager supporting CPM, CPC and eligible oCPC objectives plus broader measurement. Sponsored Agents are currently in limited alpha with selected advertisers and can extend an ad interaction into a business-sponsored conversation.',
        'For advertisers, this changes creative strategy. A generic slogan is less useful than a precise proposition that explains who the offer is for, the practical benefit and when it is relevant. More distinct creative variants give the system more ways to match real intent.',
        'Landing pages also need to change. The page should continue the conversation with clear proof, specific scope, pricing or qualification logic, fast mobile UX and a direct next step. This is where SEO, GEO, AEO and AIO work can support paid acquisition because the same clarity and entity consistency improve both organic and paid discovery.',
        'ChatGPT Ads should be measured as a commercial channel, not only a click source. Qualified enquiries, assisted conversions, landing-page behaviour and downstream sales quality matter more than raw traffic.',
        'Availability and ad formats continue to evolve by market. Businesses should verify current Ads Manager eligibility and policy requirements before planning spend.'
      ],
      sq: [
        'ChatGPT Ads sjell një kontekst tjetër nga search klasik me keyword. Përdoruesi shpesh hyn me problem, krahasim ose vendim në proces, prandaj relevanca varet nga conversational intent dhe konteksti tregtar.',
        'OpenAI zgjeroi aksesin në 2026 me Ads Manager self-service që mbështet CPM, CPC dhe, për llogaritë e pranueshme, oCPC. Sponsored Agents janë aktualisht në alpha të kufizuar me reklamues të përzgjedhur.',
        'Kreativa duhet të jetë specifike: për kë është oferta, cili është përfitimi praktik dhe kur është relevante. Variante të ndryshme i japin sistemit më shumë mundësi për përputhje.',
        'Landing page duhet të vazhdojë bisedën me prova, scope të qartë, çmim ose qualification logic, UX mobile të shpejtë dhe hap të qartë të radhës. Këtu SEO, GEO, AEO dhe AIO mbështesin edhe paid acquisition.',
        'Matja duhet të fokusohet te kërkesat e kualifikuara, assisted conversions dhe cilësia e shitjes, jo vetëm te klikimet.',
        'Disponueshmëria dhe formatet ndryshojnë sipas tregut, ndaj eligibility dhe politikat duhen verifikuar para buxhetimit.'
      ],
      mk: [
        'ChatGPT Ads создава поинаков контекст од класично keyword рекламирање. Корисникот често веќе има проблем, споредба или одлука во тек, па релевантноста зависи од conversational intent и корисен деловен контекст.',
        'OpenAI во 2026 го прошири пристапот со self-service Ads Manager што поддржува CPM, CPC и кај соодветни сметки oCPC. Sponsored Agents моментално се во ограничен alpha тест со избрани рекламодавачи.',
        'Креативата треба да биде прецизна: за кого е понудата, која е практичната корист и кога е релевантна. Повеќе различни варијанти создаваат повеќе match можности.',
        'Landing page треба да го продолжи разговорот со докази, јасен scope, цена или qualification logic, брз mobile UX и директен следен чекор. SEO, GEO, AEO и AIO тука го поддржуваат и paid acquisition.',
        'Мерењето треба да се фокусира на квалификувани упити, assisted conversions и продажен квалитет, не само на кликови.',
        'Достапноста и форматите се менуваат по пазари, па eligibility и политиките треба да се проверат пред планирање буџет.'
      ],
      sr: [
        'ChatGPT Ads uvodi drugačiji kontekst od klasičnog keyword oglašavanja. Korisnik često već ima problem, poređenje ili odluku u toku, pa relevantnost zavisi od conversational intent-a i korisnog poslovnog konteksta.',
        'OpenAI je tokom 2026. proširio pristup kroz self-service Ads Manager koji podržava CPM, CPC i za odgovarajuće naloge oCPC. Sponsored Agents su trenutno u ograničenom alpha testu sa izabranim oglašivačima.',
        'Kreativa treba da bude precizna: kome je ponuda namenjena, koja je praktična korist i kada je relevantna. Više različitih varijanti daje sistemu više mogućnosti za match.',
        'Landing stranica treba da nastavi razgovor dokazima, jasnim scope-om, cenom ili qualification logikom, brzim mobile UX-om i direktnim sledećim korakom. SEO, GEO, AEO i AIO ovde podržavaju i paid acquisition.',
        'Merenje treba da prati kvalifikovane upite, assisted conversions i kvalitet prodaje, a ne samo klikove.',
        'Dostupnost i formati se menjaju po tržištima, pa eligibility i pravila treba proveriti pre planiranja budžeta.'
      ]
    },
  },


  {
    slug: 'dynamic-seo-geo-aeo-aio-2026',
    publishedAt: '2026-09-28', category: 'Visibility', readTime: '8 min',
    title: {
      en: 'Dynamic SEO in 2026: why SEO, GEO, AEO and AIO now work together',
      sq: 'SEO dinamik në 2026: pse SEO, GEO, AEO dhe AIO funksionojnë së bashku',
      mk: 'Динамичко SEO во 2026: зошто SEO, GEO, AEO и AIO работат заедно',
      sr: 'Dinamički SEO u 2026: zašto SEO, GEO, AEO i AIO sada rade zajedno'
    },
    excerpt: {
      en: 'A practical model for moving from one-off optimisation to a monthly system driven by technical health, real queries, content gaps and AI-search visibility.',
      sq: 'Model praktik për kalimin nga optimizimi njëherësh në sistem mujor të drejtuar nga gjendja teknike, kërkimet reale, boshllëqet e përmbajtjes dhe dukshmëria në AI.',
      mk: 'Практичен модел за премин од еднократна оптимизација кон месечен систем воден од техничка состојба, реални пребарувања, содржински празнини и AI видливост.',
      sr: 'Praktičan model prelaska sa jednokratne optimizacije na mesečni sistem zasnovan na tehničkom stanju, realnim upitima, sadržajnim prazninama i AI vidljivosti.'
    },
    body: {
      en: [
        'Dynamic SEO treats visibility as an operating system rather than a launch checklist. Technical health, index coverage, real Search Console queries, internal links, structured data and conversion paths are reviewed repeatedly because the market and the website keep changing.',
        'SEO remains the foundation for crawlability and relevance. GEO improves the clarity and source quality of content for generative experiences. AEO makes important questions easier to answer directly. AIO keeps the business entity, services, evidence and machine-readable context consistent across the site.',
        'The monthly rhythm matters. A useful cycle is to review technical health, identify rising or underperforming queries, improve priority pages, publish one or two evidence-led articles, strengthen internal links and measure whether visibility is producing enquiries rather than only impressions.',
        'This model is especially useful for multilingual Balkan businesses because each market develops different search language, commercial questions and trust signals. A translated page is not automatically a locally relevant page.',
        'The goal is not to chase every algorithm update. The goal is to maintain a site that remains understandable, useful, technically accessible and commercially relevant as search behaviour changes.'
      ],
      sq: [
        'SEO dinamik e trajton dukshmërinë si sistem operativ dhe jo si listë kontrolli për publikim. Gjendja teknike, indeksimi, kërkimet reale, lidhjet e brendshme, schema dhe rrugët e konvertimit rishikohen rregullisht.',
        'SEO mbetet baza për crawlability dhe relevancë. GEO e bën përmbajtjen më të qartë për sistemet gjenerative, AEO organizon përgjigjet e drejtpërdrejta dhe AIO mban të qëndrueshme sinjalet e biznesit dhe shërbimeve.',
        'Ritmi mujor duhet të lidhë auditimin teknik, analizën e kërkimeve, optimizimin e faqeve prioritare, një ose dy artikuj origjinalë dhe matjen e kërkesave reale.',
        'Për bizneset shumëgjuhëshe në Ballkan, çdo treg ka gjuhën, pyetjet tregtare dhe sinjalet e besimit të veta. Përkthimi i thjeshtë nuk është gjithmonë lokalizim SEO.',
        'Qëllimi nuk është ndjekja e çdo ndryshimi algoritmik, por ruajtja e një faqeje të kuptueshme, të dobishme, të aksesueshme teknikisht dhe relevante për biznesin.'
      ],
      mk: [
        'Динамичкото SEO ја третира видливоста како оперативен систем, а не како еднократна листа пред лансирање. Техничката состојба, индексирањето, реалните пребарувања, внатрешните линкови, schema и конверзиите се проверуваат редовно.',
        'SEO останува основа за crawlability и релевантност. GEO ја подобрува јасноста за генеративни системи, AEO ги структурира директните одговори, а AIO ги одржува конзистентни сигналите за бизнисот и услугите.',
        'Месечниот циклус треба да спои техничка проверка, анализа на пребарувања, оптимизација на приоритетни страници, една или две оригинални статии и мерење на реални упити.',
        'Кај повеќејазичните балкански компании секој пазар има различен јазик, комерцијални прашања и сигнали на доверба. Преведена страница не е автоматски локално релевантна страница.',
        'Целта не е да се следи секоја алгоритамска промена, туку веб-страницата да остане разбирлива, корисна, технички достапна и деловно релевантна.'
      ],
      sr: [
        'Dinamički SEO tretira vidljivost kao operativni sistem, a ne kao jednokratnu launch checklistu. Tehničko stanje, indeksiranje, realni upiti, interni linkovi, schema i konverzijski putevi proveravaju se kontinuirano.',
        'SEO ostaje osnova za crawlability i relevantnost. GEO poboljšava jasnoću sadržaja za generativne sisteme, AEO organizuje direktne odgovore, a AIO održava dosledne signale o biznisu i uslugama.',
        'Mesečni ritam treba da spoji tehničku proveru, analizu upita, optimizaciju prioritetnih stranica, jedan ili dva originalna članka i merenje stvarnih upita kupaca.',
        'Za višejezične balkanske firme svako tržište ima drugačiji jezik pretrage, komercijalna pitanja i signale poverenja. Prevod stranice nije automatski lokalna SEO optimizacija.',
        'Cilj nije juriti svako algoritamsko ažuriranje, već održavati sajt razumljivim, korisnim, tehnički dostupnim i komercijalno relevantnim.'
      ]
    },
  },
  {
    slug: 'chatgpt-search-oai-searchbot-website-visibility',
    publishedAt: '2026-09-28', category: 'AI Search', readTime: '7 min',
    title: {
      en: 'ChatGPT Search visibility: OAI-SearchBot, robots.txt and what website owners should check',
      sq: 'Dukshmëria në ChatGPT Search: OAI-SearchBot, robots.txt dhe çfarë duhet kontrolluar',
      mk: 'Видливост во ChatGPT Search: OAI-SearchBot, robots.txt и што треба да се провери',
      sr: 'Vidljivost u ChatGPT Search: OAI-SearchBot, robots.txt i šta vlasnici sajtova treba da provere'
    },
    excerpt: {
      en: 'A technical checklist for making public website content accessible to ChatGPT Search without confusing search access with model-training permissions.',
      sq: 'Listë teknike për ta bërë përmbajtjen publike të aksesueshme në ChatGPT Search pa ngatërruar aksesin e kërkimit me lejet e trajnimit.',
      mk: 'Техничка листа за јавната содржина да биде достапна за ChatGPT Search без мешање на search пристапот со дозволите за тренинг.',
      sr: 'Tehnička kontrolna lista za dostupnost javnog sadržaja u ChatGPT Search bez mešanja search pristupa i dozvola za treniranje modela.'
    },
    body: {
      en: [
        'AI-search visibility starts with access. A public page cannot become a useful source if the relevant search crawler cannot fetch it reliably. Website owners should review robots.txt, CDN and firewall rules, response codes, canonical URLs and whether important pages are actually reachable without client-side obstacles.',
        'OpenAI separates search crawling from model-training preferences. That distinction matters operationally: a business can manage search discovery and training permissions independently rather than treating every AI crawler as the same thing.',
        'Technical access is only eligibility, not a ranking guarantee. Clear service definitions, original evidence, strong entity consistency, useful answers, internal links and trustworthy source pages still determine whether a page is useful enough to surface.',
        'Measurement should include more than generic organic traffic. Referral traffic, branded searches, landing pages reached from AI-assisted discovery and the quality of resulting enquiries are more useful commercial signals.',
        'For multilingual sites, crawler access must be consistent across language folders and alternate URLs. Hreflang, canonical rules and localised content should agree rather than sending conflicting signals.'
      ],
      sq: [
        'Dukshmëria në AI search nis me aksesin. Një faqe publike nuk mund të bëhet burim i dobishëm nëse crawler-i përkatës nuk mund ta marrë në mënyrë të qëndrueshme. Kontrolloni robots.txt, CDN, firewall, status codes, canonical dhe aksesin real të faqeve kryesore.',
        'OpenAI ndan crawling për search nga preferencat e trajnimit. Këto mund të menaxhohen veçmas dhe nuk duhet trajtuar çdo crawler AI si i njëjti mekanizëm.',
        'Aksesi teknik krijon vetëm eligibility, jo garanci renditjeje. Përkufizime të qarta, prova origjinale, entity consistency, përgjigje të dobishme dhe burime të besueshme mbeten thelbësore.',
        'Matja duhet të shkojë përtej trafikut organik të përgjithshëm dhe të ndjekë referral traffic, branded searches, landing pages dhe cilësinë e kërkesave.',
        'Në faqet shumëgjuhëshe, crawler access, hreflang, canonical dhe lokalizimi duhet të jenë konsistente në të gjitha gjuhët.'
      ],
      mk: [
        'AI-search видливоста започнува со пристап. Јавна страница не може да биде корисен извор ако crawler-от не може стабилно да ја преземе. Проверете robots.txt, CDN, firewall, status codes, canonical и реалната достапност на важните страници.',
        'OpenAI го одделува search crawling од преференциите за тренинг. Овие дозволи можат да се управуваат независно.',
        'Техничкиот пристап значи само eligibility, не гаранција за рангирање. Јасни услуги, оригинални докази, entity consistency, корисни одговори и доверливи извори остануваат клучни.',
        'Мерењето треба да вклучи referral traffic, branded searches, landing pages и квалитет на реалните упити, не само вкупен organic traffic.',
        'Кај повеќејазичните сајтови crawler access, hreflang, canonical и локализираната содржина мора да бидат усогласени.'
      ],
      sr: [
        'AI-search vidljivost počinje pristupom. Javna stranica ne može biti koristan izvor ako crawler ne može pouzdano da je učita. Proverite robots.txt, CDN, firewall, status kodove, canonical i stvarnu dostupnost važnih stranica.',
        'OpenAI odvaja search crawling od preferencija za treniranje modela. Te dozvole mogu da se upravljaju nezavisno.',
        'Tehnički pristup znači samo eligibility, ne garanciju rangiranja. Jasni opisi usluga, originalni dokazi, entity consistency, korisni odgovori i pouzdane izvorne stranice ostaju ključni.',
        'Merenje treba da uključi referral traffic, branded searches, landing stranice i kvalitet realnih upita, a ne samo ukupan organski saobraćaj.',
        'Kod višejezičnih sajtova crawler access, hreflang, canonical i lokalizovani sadržaj moraju biti međusobno usklađeni.'
      ]
    },
  },
  {
    slug: 'multimodal-search-seo-visual-content-2026',
    publishedAt: '2026-09-28', category: 'Search', readTime: '7 min',
    title: {
      en: 'Multimodal search SEO in 2026: why images and visual context now deserve a search strategy',
      sq: 'SEO për kërkim multimodal në 2026: pse imazhet dhe konteksti vizual kërkojnë strategji',
      mk: 'Multimodal search SEO во 2026: зошто сликите и визуелниот контекст бараат стратегија',
      sr: 'Multimodal search SEO u 2026: zašto slike i vizuelni kontekst zaslužuju search strategiju'
    },
    excerpt: {
      en: 'How businesses should structure images, surrounding copy, product data and measurement as visual and multimodal discovery becomes easier to analyse.',
      sq: 'Si të strukturohen imazhet, teksti përreth, të dhënat e produkteve dhe matja ndërsa kërkimi vizual bëhet më i matshëm.',
      mk: 'Како да се структурираат слики, придружен текст, product data и мерење додека визуелното пребарување станува полесно за анализа.',
      sr: 'Kako strukturirati slike, prateći tekst, podatke o proizvodima i merenje dok vizuelna pretraga postaje lakša za analizu.'
    },
    body: {
      en: [
        'Search is increasingly visual. A customer can begin with a photo, a product image or a scene rather than a typed keyword. That changes the role of product photography, image context, filenames, alt text, surrounding copy and structured product information.',
        'The strongest visual-search pages do not rely on alt text alone. The image should sit inside a page that clearly explains the product, service, location or use case. Search systems need the visual asset and the surrounding semantic context to agree.',
        'E-commerce teams should prioritise original product imagery, consistent variants, accurate product attributes, descriptive category pages and clean internal links. Service businesses can use original project photography, before-and-after evidence and location context where it is genuine.',
        'Measurement is becoming more important as search platforms expose more information about visual and multimodal discovery. Teams should review which pages and assets attract this traffic and whether those visits progress to product views, enquiries or sales.',
        'This is another reason SEO, GEO, AEO and AIO should not be managed as isolated tactics. Technical accessibility, machine-readable data, useful answers and strong visual evidence reinforce the same entity and commercial story.'
      ],
      sq: [
        'Kërkimi po bëhet gjithnjë e më vizual. Një klient mund të nisë me foto ose imazh produkti dhe jo me fjalë kyçe. Kjo rrit rëndësinë e fotografisë, kontekstit, alt text dhe të dhënave të strukturuara.',
        'Faqet e mira për visual search nuk mbështeten vetëm te alt text. Imazhi duhet të jetë brenda një faqeje që shpjegon qartë produktin, shërbimin, vendndodhjen ose përdorimin.',
        'E-commerce duhet të përdorë imazhe origjinale, variante konsistente, atribute të sakta, kategori të qarta dhe lidhje të brendshme të pastra.',
        'Matja duhet të identifikojë cilat faqe dhe asete sjellin trafik vizual dhe nëse ky trafik kalon në product views, kërkesa ose shitje.',
        'Kjo është një arsye tjetër pse SEO, GEO, AEO dhe AIO duhet të funksionojnë si një sistem i vetëm.'
      ],
      mk: [
        'Пребарувањето станува сè повизуелно. Корисник може да започне со фотографија или product image наместо со текстуален keyword. Затоа расте улогата на фотографијата, контекстот, alt text и structured data.',
        'Добрата visual-search страница не се потпира само на alt text. Сликата треба да биде дел од страница што јасно го објаснува производот, услугата, локацијата или use case.',
        'E-commerce тимовите треба да користат оригинални product images, точни attributes, јасни категории и чисти внатрешни линкови.',
        'Мерењето треба да покаже кои страници и визуелни assets привлекуваат traffic и дали посетите продолжуваат кон product views, упити или продажба.',
        'Ова е уште една причина SEO, GEO, AEO и AIO да се управуваат како еден систем.'
      ],
      sr: [
        'Pretraga postaje sve vizuelnija. Kupac može početi fotografijom ili slikom proizvoda umesto tekstualnim upitom. Zato rastu važnost fotografije, konteksta, alt teksta i strukturiranih podataka.',
        'Dobra visual-search stranica ne oslanja se samo na alt tekst. Slika treba da bude deo stranice koja jasno objašnjava proizvod, uslugu, lokaciju ili način upotrebe.',
        'E-commerce timovi treba da koriste originalne slike proizvoda, dosledne varijante, tačne atribute, jasne kategorije i čiste interne linkove.',
        'Merenje treba da pokaže koje stranice i vizuelni asseti privlače ovaj saobraćaj i da li posete prelaze u product views, upite ili prodaju.',
        'To je još jedan razlog da SEO, GEO, AEO i AIO rade kao jedinstven sistem.'
      ]
    },
  },

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
