export type InsightLocale = 'en' | 'sq' | 'mk' | 'sr' | 'ro' | 'bg';

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
      sq: 'ChatGPT Ads në 2026: çfarë ndryshon reklamimi me inteligjencë artificiale për bizneset',
      mk: 'ChatGPT Ads во 2026: што менува рекламирањето со вештачка интелигенција за бизнисите',
      sr: 'ChatGPT Ads u 2026: šta oglašavanje u AI sistemima menja za biznise',
      ro: 'ChatGPT Ads în 2026: ce schimbă publicitatea AI pentru companii',
      bg: 'ChatGPT Ads през 2026: как рекламата в AI среда променя бизнеса'
    },
    excerpt: {
      en: 'A practical guide to ChatGPT Ads, conversational intent, CPC buying, Sponsored Agents and how landing pages should adapt to AI-native discovery.',
      sq: 'Udhëzues praktik për ChatGPT Ads, qëllimin bisedor të përdoruesit, CPC, agjentët e sponsorizuar dhe përshtatjen e faqeve ulëse.',
      mk: 'Практичен водич за ChatGPT Ads, разговорното барање на корисниците, CPC, спонзорираните агенти и адаптацијата на одредишните страници.',
      sr: 'Praktičan vodič za ChatGPT Ads, razgovornu nameru korisnika, CPC model, sponzorisane agente i prilagođavanje odredišnih stranica.',
      ro: 'Un ghid practic despre ChatGPT Ads, intenția conversațională, cumpărarea CPC, agenții sponsorizați și modul în care paginile de destinație trebuie să se adapteze.',
      bg: 'Практическо ръководство за ChatGPT Ads, разговорното намерение на потребителите, CPC наддаването, спонсорираните агенти и адаптирането на целевите страници към търсенето с AI.'
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
        'ChatGPT Ads sjell një kontekst krejt tjetër nga kërkimi klasik me fjalë kyçe. Përdoruesi shpesh vjen me një problem, krahasim ose vendim tashmë në proces, prandaj relevanca varet nga qëllimi bisedor dhe konteksti tregtar.',
        'OpenAI zgjeroi aksesin në 2026 përmes panelit Ads Manager që mbështet modelet CPM, CPC dhe oCPC për llogaritë e kualifikuara. Agjentët e sponsorizuar (Sponsored Agents) janë aktualisht në fazë prove me reklamues të përzgjedhur.',
        'Kreativa e reklamës duhet të jetë specifike: për kë është oferta, cili është përfitimi praktik dhe kur është e përshtatshme. Variante të ndryshme i japin sistemit më shumë mundësi për përputhje të saktë me nevojën e klientit.',
        'Faqja ulëse (landing page) duhet të vazhdojë bisedën me prova të qarta, fushëveprim të saktë, çmim ose logjikë kualifikimi, përvojë të shpejtë në celular dhe hap të menjëhershëm të radhës. Këtu SEO, GEO, AEO dhe AIO mbështesin edhe fushatat e paguara.',
        'Matja duhet të fokusohet te kërkesat e kualifikuara, konvertimet e asistuara dhe cilësia e shitjes, jo thjesht te numri i klikimeve.',
        'Disponueshmëria dhe formatet ndryshojnë sipas tregut, prandaj kriteret e pranueshmërisë dhe rregullat duhen verifikuar përpara buxhetimit.'
      ],
      mk: [
        'ChatGPT Ads создава поинаков контекст од класичното рекламирање по клучни зборови. Корисникот често веќе има дефиниран проблем, споредба или одлука во тек, па релевантноста зависи од разговорното барање и деловниот контекст.',
        'OpenAI во 2026 го прошири пристапот преку Ads Manager панелот што поддржува CPM, CPC и кај соодветни сметки oCPC. Спонзорираните агенти (Sponsored Agents) моментално се во ограничен тест со избрани рекламодавачи.',
        'Креативата треба да биде прецизна: за кого е понудата, која е практичната корист и кога е релевантна. Повеќе различни варијанти овозможуваат попрецизно совпаѓање со вистинската потреба.',
        'Одредишната страница треба да го продолжи разговорот со докази, јасен опсег, цена или логика за квалификација, брзо мобилно корисничко искуство и директен следен чекор. SEO, GEO, AEO и AIO тука директно го засилуваат и платениот сообраќај.',
        'Мерењето треба да се фокусира на квалификувани упити, асистирани конверзии и вистински продажен квалитет, а не само на кликови.',
        'Достапноста и форматите се менуваат по пазари, па условите и политиките треба да се проверат пред планирање буџет.'
      ],
      sr: [
        'ChatGPT Ads uvodi drugačiji kontekst od klasičnog oglašavanja po ključnim rečima. Korisnik često već ima problem, poređenje ili odluku u toku, pa relevantnost zavisi od razgovorne namere i korisnog poslovnog konteksta.',
        'OpenAI je tokom 2026. proširio pristup kroz Ads Manager koji podržava CPM, CPC i za odgovarajuće naloge oCPC. Sponzorisani agenti (Sponsored Agents) su trenutno u fazi testiranja sa izabranim oglašivačima.',
        'Kreativa treba da bude precizna: kome je ponuda namenjena, koja je praktična korist i kada je relevantna. Više različitih varijanti omogućava sistemu bolje poklapanje sa stvarnom namerom.',
        'Odredišna stranica treba da nastavi razgovor jasnim dokazima, definisanim obimom, cenom ili logikom kvalifikacije, brzim mobilnim iskustvom i direktnim sledećim korakom. SEO, GEO, AEO i AIO ovde direktno podržavaju i plaćeno oglašavanje.',
        'Merenje treba da prati kvalifikovane upite, asistirane konverzije i stvarni kvalitet prodaje, a ne samo klikove.',
        'Dostupnost i formati se menjaju po tržištima, pa uslove i pravila treba proveriti pre planiranja budžeta.'
      ],
      ro: [
        'ChatGPT Ads introduce un context publicitar diferit de căutarea clasică bazată pe cuvinte-cheie. Oamenii ajung adesea cu o problemă, o comparație sau o decizie deja în curs, astfel încât relevanța depinde de intenția conversațională și de contextul comercial util, nu de un singur cuvânt-cheie.',
        'OpenAI a extins accesul advertiserilor în 2026 prin Ads Manager self-service, cu suport pentru obiective CPM, CPC și oCPC eligibile, precum și măsurare mai amplă. Agenții sponsorizați (Sponsored Agents) se află în prezent într-un program limitat cu advertiseri selectați și pot continua interacțiunea într-o conversație dedicată.',
        'Pentru companii, acest lucru schimbă strategia de creație. Un slogan generic este mai puțin util decât o propunere precisă care explică pentru cine este oferta, care este beneficiul practic și când este relevantă. Variantele creative distincte oferă sistemului mai multe posibilități de a corespunde intenției reale.',
        'Și paginile de destinație trebuie adaptate. Pagina ar trebui să continue conversația cu dovezi clare, un domeniu de aplicare specific, prețuri sau logică de calificare, o experiență mobilă rapidă și un pas următor direct. Aici SEO, GEO, AEO și AIO susțin achiziția plătită.',
        'ChatGPT Ads ar trebui măsurat ca un canal comercial, nu doar ca o sursă de clicuri. Solicitările calificate, conversiile asistate, comportamentul pe pagină și calitatea vânzărilor ulterioare contează mai mult decât traficul brut.',
        'Disponibilitatea și formatele continuă să evolueze în funcție de piață. Companiile ar trebui să verifice cerințele din Ads Manager înainte de a planifica bugetul.'
      ],
      bg: [
        'ChatGPT Ads въвежда коренно различен рекламен контекст от класическото търсене по ключови думи. Потребителите често идват с вече оформен казус, сравнение или намерение за решение, затова релевантността зависи от разговорния контекст и конкретната търговска стойност, а не от единична дума.',
        'OpenAI разшири достъпа за рекламодатели през 2026 г. с панела Ads Manager, поддържащ CPM, CPC и oCPC цели за квалифицирани профили. Спонсорираните агенти (Sponsored Agents) в момента са в тестова фаза с избрани рекламодатели и могат да разширят рекламния контакт в пълноценен диалог, воден от бизнеса.',
        'За рекламодателите това променя креативния подход. Общият слоган е много по-малко полезен от точно формулирано търговско предложение, обясняващо за кого е предназначена офертата, каква е реалната полза и кога е актуална. Разнообразните рекламни послания дават на системата по-голям шанс да съвпадне с търсенето на клиента.',
        'Целевите страници също трябва да бъдат оптимизирани. Страницата трябва естествено да продължи започнатия разговор с неоспорими доказателства, ясен обхват на услугата, ценова ориентация или филтри за квалификация, светкавична скорост на телефон и категорична следваща стъпка. Тук работата по SEO, GEO, AEO и AIO подкрепя платената реклама, защото еднаквата семантична прегледност повишава както органичната, така и платената откриваемост.',
        'Рекламите в ChatGPT Ads трябва да се оценяват като търговски канал за реални сделки, а не просто като източник на кликвания. Качествените клиентски запитвания, асистираните конверсии, поведението на посетителите на целевата страница и финалните продажби са далеч по-важни от суровия трафик.',
        'Достъпността и рекламните формати продължават да се разширяват по региони. Препоръчваме фирмите да проверяват актуалните изисквания на Ads Manager преди разпределянето на рекламен бюджет.'
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
      sr: 'Dinamički SEO u 2026: zašto SEO, GEO, AEO i AIO sada rade zajedno',
      ro: 'Dynamic SEO în 2026: de ce SEO, GEO, AEO și AIO funcționează acum împreună',
      bg: 'Динамично SEO през 2026: защо SEO, GEO, AEO и AIO вече работят заедно'
    },
    excerpt: {
      en: 'A practical model for moving from one-off optimisation to a monthly system driven by technical health, real queries, content gaps and AI-search visibility.',
      sq: 'Model praktik për kalimin nga optimizimi njëherësh në sistem mujor të drejtuar nga gjendja teknike, kërkimet reale, boshllëqet e përmbajtjes dhe dukshmëria në AI.',
      mk: 'Практичен модел за премин од еднократна оптимизација кон месечен систем воден од техничка состојба, реални пребарувања, содржински празнини и AI видливост.',
      sr: 'Praktičan model prelaska sa jednokratne optimizacije na mesečni sistem zasnovan na tehničkom stanju, realnim upitima, sadržajnim prazninama i AI vidljivosti.',
      ro: 'Un model practic pentru trecerea de la optimizarea punctuală la un sistem lunar bazat pe sănătate tehnică, interogări reale, goluri de conținut și vizibilitate în căutarea AI.',
      bg: 'Практически модел за преминаване от еднократна оптимизация към месечна система, водена от техническо здраве, реални клиентски търсения, пропуски в съдържанието и видимост в AI търсачки.'
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
        'SEO mbetet baza për qasjen dhe relevancën teknike. GEO e bën përmbajtjen më të qartë për sistemet gjenerative, AEO organizon përgjigjet e drejtpërdrejta dhe AIO mban të qëndrueshme sinjalet e biznesit dhe shërbimeve.',
        'Ritmi mujor duhet të lidhë auditimin teknik, analizën e kërkimeve, optimizimin e faqeve prioritare, një ose dy artikuj origjinalë dhe matjen e kërkesave reale.',
        'Për bizneset shumëgjuhëshe në Ballkan, çdo treg ka gjuhën, pyetjet tregtare dhe sinjalet e besimit të veta. Përkthimi i thjeshtë nuk është gjithmonë lokalizim SEO.',
        'Qëllimi nuk është ndjekja e çdo ndryshimi algoritmik, por ruajtja e një faqeje të kuptueshme, të dobishme, të aksesueshme teknikisht dhe relevante për biznesin.'
      ],
      mk: [
        'Динамичкото SEO ја третира видливоста како оперативен систем, а не како еднократна листа пред лансирање. Техничката состојба, индексирањето, реалните пребарувања, внатрешните линкови, структурираните податоци и конверзиите се проверуваат редовно.',
        'SEO останува основа за прегледност и релевантност. GEO ја подобрува јасноста за генеративни системи, AEO ги структурира директните одговори, а AIO ги одржува конзистентни сигналите за бизнисот и услугите.',
        'Месечниот циклус треба да спои техничка проверка, анализа на пребарувања, оптимизација на приоритетни страници, една или две оригинални статии и мерење на реални упити.',
        'Кај повеќејазичните балкански компании секој пазар има различен јазик, комерцијални прашања и сигнали на доверба. Преведена страница не е автоматски локално релевантна страница.',
        'Целта не е да се следи секоја алгоритамска промена, туку веб-страницата да остане разбирлива, корисна, технички достапна и деловно релевантна.'
      ],
      sr: [
        'Dinamički SEO tretira vidljivost kao operativni sistem, a ne kao jednokratnu kontrolnu listu pre lansiranja. Tehničko stanje, indeksiranje, realni upiti, interni linkovi, strukturirani podaci i konverzijski putevi proveravaju se kontinuirano.',
        'SEO ostaje osnova za indeksiranje i relevantnost. GEO poboljšava jasnoću sadržaja za generativne sisteme, AEO organizuje direktne odgovore, a AIO održava dosledne signale o biznisu i uslugama.',
        'Mesečni ritam treba da spoji tehničku proveru, analizu upita, optimizaciju prioritetnih stranica, jedan ili dva originalna članka i merenje stvarnih upita kupaca.',
        'Za višejezične balkanske firme svako tržište ima drugačiji jezik pretrage, komercijalna pitanja i signale poverenja. Prevod stranice nije automatski lokalna SEO optimizacija.',
        'Cilj nije juriti svako algoritamsko ažuriranje, već održavati sajt razumljivim, korisnim, tehnički dostupnim i komercijalno relevantnim.'
      ],
      ro: [
        'Dynamic SEO tratează vizibilitatea ca pe un sistem operațional, nu ca pe o listă de verificare pentru lansare. Sănătatea tehnică, acoperirea indexării, interogările reale din Search Console, linkurile interne, datele structurate și traseele de conversie sunt revizuite repetat deoarece piața și site-ul continuă să se schimbe.',
        'SEO rămâne baza pentru indexare și relevanță. GEO îmbunătățește claritatea și calitatea surselor pentru experiențele generative. AEO face întrebările importante mai ușor de răspuns direct. AIO menține consecvente entitatea companiei, serviciile, dovezile și contextul tehnic pe întregul site.',
        'Ritmul lunar contează. Un ciclu util înseamnă revizuirea sănătății tehnice, identificarea interogărilor în creștere sau subperformante, îmbunătățirea paginilor prioritare, publicarea unuia sau a două articole bazate pe dovezi, consolidarea linkurilor interne și măsurarea faptului dacă vizibilitatea produce solicitări, nu doar impresii.',
        'Acest model este deosebit de util pentru companiile multilingve din Balcani, deoarece fiecare piață dezvoltă un limbaj de căutare, întrebări comerciale și semnale de încredere diferite. O pagină tradusă nu este automat o pagină relevantă local.',
        'Scopul nu este urmărirea fiecărei actualizări de algoritm. Scopul este menținerea unui site ușor de înțeles, util, accesibil tehnic și relevant comercial pe măsură ce comportamentul de căutare se schimbă.'
      ],
      bg: [
        'Динамичното SEO разглежда видимостта като цялостна операционна система, а не като еднократен контролен списък преди пускане онлайн. Техническото здраве, индексният обхват, реалните клиентски заявки в Search Console, вътрешните връзки, структурираните данни и пътищата към конверсия се анализират регулярно, защото пазарът и изискванията се развиват постоянно.',
        'SEO остава основата за лесно обхождане от търсачките и висока релевантност. GEO подобрява яснотата и авторитета на съдържанието за генеративните платформи. AEO прави отговорите на най-важните въпроси достъпни за директно цитиране. AIO поддържа последователността на данните за фирмата, предлаганите услуги и машинночетимия контекст в целия сайт.',
        'Месечният работен ритъм е от ключово значение. Най-ефективният цикъл включва технически преглед, откриване на растящи или недооценени търсения, оптимизиране на приоритетни страници, публикуване на нови статии с реални доказателства, засилване на вътрешните връзки и измерване дали видимостта води до реални запитвания, а не само до импресии.',
        'Този модел е незаменим за многоезичните балкански компании, тъй като всеки пазар има своя специфичен език на търсене, търговски въпроси и критерии за доверие. Обикновеният машинен превод никога не е равен на истински релевантна локална страница.',
        'Крайната цел не е паническо преследване на всяка промяна в алгоритмите. Целта е сайтът да остане кристално ясен, полезен, технически безупречен и търговски успешен при всяка промяна в потребителското поведение.'
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
      sr: 'Vidljivost u ChatGPT Search: OAI-SearchBot, robots.txt i šta vlasnici sajtova treba da provere',
      ro: 'Vizibilitate în ChatGPT Search: OAI-SearchBot, robots.txt și ce trebuie să verifice proprietarii de site-uri',
      bg: 'Видимост в ChatGPT Search: OAI-SearchBot, robots.txt и какво трябва да проверят собствениците на сайтове'
    },
    excerpt: {
      en: 'A technical checklist for making public website content accessible to ChatGPT Search without confusing search access with model-training permissions.',
      sq: 'Listë teknike për ta bërë përmbajtjen publike të aksesueshme në ChatGPT Search pa ngatërruar aksesin e kërkimit me lejet e trajnimit të modeleve.',
      mk: 'Техничка листа за јавната содржина да биде достапна за ChatGPT Search без мешање на пристапот за пребарување со дозволите за тренирање модели.',
      sr: 'Tehnička kontrolna lista za dostupnost javnog sadržaja u ChatGPT Search bez mešanja pristupa za pretragu i dozvola za treniranje modela.',
      ro: 'Un checklist tehnic pentru a face conținutul public al site-ului accesibil în ChatGPT Search fără a confunda accesul pentru căutare cu permisiunile pentru antrenarea modelelor.',
      bg: 'Технически контролен списък за достъпност на публичното съдържание в ChatGPT Search, без да се бърка достъпът за търсене с разрешенията за обучение на AI модели.'
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
        'Dukshmëria në kërkimin AI nis me aksesin. Një faqe publike nuk mund të bëhet burim i dobishëm nëse roboti përkatës i kërkimit nuk mund ta marrë në mënyrë të qëndrueshme. Kontrolloni robots.txt, CDN, firewall, kodet e statusit, lidhjet kanonike dhe aksesin real të faqeve kryesore.',
        'OpenAI ndan qasjen për kërkim nga preferencat e trajnimit të modeleve. Këto mund të menaxhohen veçmas dhe nuk duhet trajtuar çdo mekanizëm AI si i njëjti proces.',
        'Aksesi teknik përbën vetëm kushtin fillestar, jo garanci renditjeje. Përkufizimet e qarta, provat origjinale, të dhënat e qëndrueshme, përgjigjet e dobishme dhe burimet e besueshme mbeten thelbësore.',
        'Matja duhet të shkojë përtej trafikut të përgjithshëm organik dhe të ndjekë referimet, kërkimet e markës, faqet e arritura përmes AI dhe cilësinë e kërkesave.',
        'Në faqet shumëgjuhëshe, aksesi i skanimit, hreflang, rregullat kanonike dhe lokalizimi duhet të jenë plotësisht të harmonizuara.'
      ],
      mk: [
        'Видливоста при пребарување со AI започнува со пристап. Јавна страница не може да биде корисен извор ако пребарувачкиот робот не може стабилно да ја преземе. Проверете ги robots.txt, CDN, firewall, статусните кодови, каноничките врски и реалната достапност на важните страници.',
        'OpenAI го одделува пребарувачкото индексирање од преференциите за тренирање модели. Овие дозволи можат да се управуваат целосно независно.',
        'Техничкиот пристап значи само предуслов, а не гаранција за рангирање. Јасните описи на услугите, оригиналните докази, корисните одговори и доверливите извори остануваат клучни.',
        'Мерењето треба да вклучи сообраќај од препораки, брендирани пребарувања, одредишни страници и квалитет на реалните барања, а не само вкупен органски сообраќај.',
        'Кај повеќејазичните сајтови пристапот за индексирање, hreflang, каноничките правила и локализираната содржина мора да бидат совршено усогласени.'
      ],
      sr: [
        'Vidljivost u AI pretrazi počinje pristupom. Javna stranica ne može biti koristan izvor ako robot za pretragu ne može pouzdano da je učita. Proverite robots.txt, CDN, firewall, statusne kodove, kanoničke adrese i stvarnu dostupnost važnih stranica.',
        'OpenAI odvaja indeksiranje za pretragu od preferencija za treniranje modela. Te dozvole mogu da se vode nezavisno.',
        'Tehnički pristup znači samo tehničku podobnost, a ne garanciju rangiranja. Jasni opisi usluga, originalni dokazi, korisni odgovori i pouzdane izvorne stranice ostaju ključni.',
        'Merenje treba da uključi preporučeni saobraćaj, brendirane pretrage, odredišne stranice i kvalitet realnih upita, a ne samo ukupan organski saobraćaj.',
        'Kod višejezičnih sajtova pristup robotima, hreflang, kanoničke adrese i lokalizovani sadržaj moraju biti međusobno usklađeni.'
      ],
      ro: [
        'Vizibilitatea în căutarea AI începe cu accesul. O pagină publică nu poate deveni o sursă utilă dacă crawlerul de căutare relevant nu o poate accesa în mod fiabil. Proprietarii de site-uri ar trebui să verifice robots.txt, regulile CDN și firewall, codurile de răspuns, URL-urile canonice și dacă paginile importante sunt realmente accesibile fără obstacole tehnice.',
        'OpenAI separă scanarea pentru căutare de preferințele privind antrenarea modelelor. Această distincție contează operațional: o companie poate gestiona independent descoperirea în căutare și permisiunile de instruire, în loc să trateze toate mecanismele AI ca fiind identice.',
        'Accesul tehnic înseamnă doar eligibilitate, nu o garanție de clasare. Definițiile clare ale serviciilor, dovezile originale, răspunsurile utile, linkurile interne și paginile-sursă de încredere determină în continuare dacă o pagină este suficient de utilă pentru a apărea.',
        'Măsurarea ar trebui să includă mai mult decât traficul organic generic. Traficul de recomandare, căutările de brand, paginile de destinație accesate din descoperire asistată de AI și calitatea solicitărilor rezultate sunt semnale comerciale mult mai relevante.',
        'Pentru site-urile multilingve, accesul roboților trebuie să fie consecvent în toate folderele de limbă și URL-urile alternative. Hreflang, regulile canonice și conținutul localizat trebuie să fie perfect aliniate.'
      ],
      bg: [
        'Видимостта в търсачките с AI започва с техническия достъп. Една публична страница не може да се превърне в цитиран източник, ако съответният бот на търсачката не може да я зареди надеждно. Собствениците на сайтове трябва редовно да проверяват robots.txt, правилата на CDN и защитните стени, статус кодовете на сървъра, каноничните адреси и дали важните страници са реално достъпни без препятствия от страна на браузъра.',
        'OpenAI категорично разделя обхождането за търсене от разрешенията за обучение на AI модели. Това разграничение е критично важно: бизнесът може спокойно да разреши индексирането за търсене, като същевременно защити авторското си съдържание от нежелано обучение на модели.',
        'Техническият достъп дава единствено право за участие, но не е гаранция за челно класиране. Прецизните дефиниции на предлаганите услуги, оригиналните доказателства за качество, полезните изчерпателни отговори, вътрешните връзки и авторитетните изходни страници определят дали съдържанието ще бъде цитирано.',
        'Анализът на резултатите трябва да отива отвъд общия органичен трафик. Препоръчаният трафик (referral), търсенията по търговска марка, посещенията на целеви страници през AI платформи и високото качество на реалните запитвания са далеч по-показателни търговски сигнали.',
        'При многоезичните уебсайтове достъпът на роботите трябва да бъде еднакво осигурен във всички езикови директории. Таговете hreflang, каноничните правила и преведеното съдържание трябва да работят в пълен синхрон, без да излъчват противоречиви технически сигнали.'
      ]
    },
  },
  {
    slug: 'multimodal-search-seo-visual-content-2026',
    publishedAt: '2026-09-28', category: 'Search', readTime: '7 min',
    title: {
      en: 'Multimodal search SEO in 2026: why images and visual context now deserve a search strategy',
      sq: 'SEO për kërkim multimodal në 2026: pse imazhet dhe konteksti vizual kërkojnë strategji',
      mk: 'Мултимодално SEO пребарување во 2026: зошто сликите и визуелниот контекст бараат стратегија',
      sr: 'Multimodalno SEO pretraživanje u 2026: zašto slike i vizuelni kontekst zaslužuju strategiju',
      ro: 'SEO pentru căutarea multimodală în 2026: de ce imaginile și contextul vizual au nevoie de o strategie de căutare',
      bg: 'SEO за мултимодално търсене през 2026: защо изображенията и визуалният контекст изискват стратегия'
    },
    excerpt: {
      en: 'How businesses should structure images, surrounding copy, product data and measurement as visual and multimodal discovery becomes easier to analyse.',
      sq: 'Si të strukturohen imazhet, teksti përreth, të dhënat e produkteve dhe matja ndërsa kërkimi vizual bëhet më i matshëm.',
      mk: 'Како да се структурираат сликите, придружниот текст, податоците за производите и мерењето додека визуелното пребарување станува клучно.',
      sr: 'Kako strukturirati slike, prateći tekst, podatke o proizvodima i analitiku dok vizuelna pretraga postaje sve važnija.',
      ro: 'Cum ar trebui companiile să structureze imaginile, textul din jur, datele de produs și măsurarea pe măsură ce descoperirea vizuală devine mai ușor de analizat.',
      bg: 'Как компаниите трябва да структурират изображенията, съпътстващия текст, продуктовите данни и анализите с развитието на визуалното и мултимодално търсене.'
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
        'Kërkimi po bëhet gjithnjë e më vizual. Një klient mund të nisë me foto ose imazh produkti dhe jo me fjalë kyçe. Kjo rrit rëndësinë e fotografisë, kontekstit, tekstit përshkrues alt dhe të dhënave të strukturuara.',
        'Faqet e suksesshme për kërkim vizual nuk mbështeten vetëm te teksti alt. Imazhi duhet të jetë brenda një faqeje që shpjegon qartë produktin, shërbimin, vendndodhjen ose përdorimin praktik.',
        'Dyqanet online duhet të përdorin fotografi origjinale, variante të sakta, atribute të detajuara, kategori të qarta dhe lidhje të brendshme të rregullta.',
        'Matja duhet të tregojë cilat faqe dhe elemente vizuale sjellin trafik dhe nëse ky interes përkthehet në shikime produktesh, kërkesa apo porosi.',
        'Kjo është një arsye tjetër pse SEO, GEO, AEO dhe AIO duhet të funksionojnë si një sistem i vetëm dhe i integruar.'
      ],
      mk: [
        'Пребарувањето станува сè повизуелно. Купувачот може да започне со фотографија или слика на производ наместо со напишан клучен збор. Затоа расте улогата на фотографијата, контекстот, описите и структурираните податоци.',
        'Добрата страница за визуелно пребарување не се потпира само на alt текст. Сликата треба да биде дел од страница што јасно го објаснува производот, услугата, локацијата или начинот на употреба.',
        'Тимовите за е-трговија треба да користат оригинални фотографии од производи, точни атрибути, јасни категории и прегледни внатрешни врски.',
        'Мерењето треба да покаже кои страници и визуелни елементи привлекуваат сообраќај и дали тие посети водат до прегледи на производи, барања или директна продажба.',
        'Ова е уште една причина SEO, GEO, AEO и AIO да се водат како единствен поврзан систем.'
      ],
      sr: [
        'Pretraga postaje sve vizuelnija. Kupac može početi fotografijom ili slikom proizvoda umesto tekstualnim upitom. Zato rastu važnost fotografije, konteksta, alt teksta i strukturiranih podataka.',
        'Dobra stranica za vizuelnu pretragu ne oslanja se samo na alt tekst. Slika treba da bude deo stranice koja jasno objašnjava proizvod, uslugu, lokaciju ili način upotrebe.',
        'E-commerce timovi treba da koriste originalne slike proizvoda, dosledne varijante, tačne atribute, jasne kategorije i čiste interne linkove.',
        'Merenje treba da pokaže koje stranice i vizuelni elementi privlače saobraćaj i da li posete prelaze u pregled proizvoda, upite ili prodaju.',
        'To je još jedan razlog da SEO, GEO, AEO i AIO rade kao jedinstven sistem.'
      ],
      ro: [
        'Căutarea devine tot mai vizuală. Un client poate începe cu o fotografie, o imagine de produs sau o scenă, nu cu un cuvânt-cheie tastat. Acest lucru schimbă rolul fotografiei de produs, contextului imaginii, numelor de fișiere, textului alt, textului din jur și informațiilor structurate despre produs.',
        'Cele mai puternice pagini pentru căutare vizuală nu se bazează doar pe textul alt. Imaginea ar trebui să fie integrată într-o pagină care explică limpede produsul, serviciul, locația sau cazul de utilizare. Sistemele de căutare au nevoie ca elementul vizual și contextul semantic din jur să fie în deplină concordanță.',
        'Echipele de comerț electronic ar trebui să prioritizeze imagini originale de produs, variante consecvente, atribute corecte, pagini de categorie descriptive și linkuri interne curate. Companiile de servicii pot folosi fotografii originale de proiect și dovezi autentice.',
        'Măsurarea devine mai importantă pe măsură ce platformele de căutare oferă mai multe date despre descoperirea vizuală. Echipele ar trebui să analizeze ce pagini și elemente vizuale atrag acest trafic și dacă vizitele se transformă în vizualizări de produse, solicitări sau vânzări.',
        'Acesta este încă un motiv pentru care SEO, GEO, AEO și AIO nu ar trebui gestionate ca tactici izolate. Accesibilitatea tehnică, datele structurate, răspunsurile utile și dovezile vizuale puternice consolidează aceeași poveste comercială.'
      ],
      bg: [
        'Търсенето става все по-визуално. Потребителят може да започне със снимка, продуктово изображение или реална сцена, вместо с изписване на ключова дума. Това променя коренно ролята на продуктовата фотография, контекста на изображението, имената на файловете, alt атрибутите, съпътстващия текст и структурираните продуктови данни.',
        'Най-силните страници за визуално търсене не разчитат единствено на alt текст. Изображението трябва да бъде органична част от страница, която ясно описва продукта, услугата, локацията и реалното приложение. Търсачките изискват пълно семантично съответствие между визуалния елемент и околното съдържание.',
        'Екипите в електронната търговия трябва да залагат на оригинални авторски снимки на продуктите, ясни разновидности, точни технически атрибути, изчерпателни категории и стабилни вътрешни връзки. Фирмите за услуги могат успешно да представят реални снимки от обекти, сравнения „преди и след“ и географски контекст.',
        'Анализът става все по-важен с разкриването на повече данни за визуалното и мултимодално откриване от страна на платформите. Екипите трябва да проследяват кои страници и изображения привличат трафик и дали тези посещения прерастват в разглеждане на каталога, запитвания или продажби.',
        'Това е още една причина SEO, GEO, AEO и AIO да се управляват като единна свързана система. Техническата достъпност, машинночетимите данни, полезните отговори и убедителните визуални доказателства изграждат цялостния търговски авторитет на вашия бранд.'
      ]
    },
  },
  {
    slug: 'why-trust-is-the-real-website-conversion-driver',
    publishedAt: '2026-08-12', category: 'Strategy', readTime: '5 min',
    title: {
      en: 'Why trust is the real website conversion driver',
      sq: 'Pse besimi është shtytësi i vërtetë i konvertimit',
      mk: 'Зошто довербата е вистинскиот двигател на конверзијата',
      sr: 'Zašto je poverenje pravi pokretač konverzije',
      ro: 'De ce încrederea este adevăratul motor al conversiei pe website',
      bg: 'Защо доверието е истинският двигател на конверсиите в уебсайта'
    },
    excerpt: {
      en: 'A practical framework for making an established business feel credible from the first screen.',
      sq: 'Një kornizë praktike për ta bërë një biznes të etabliran të duket i besueshëm që në ekranin e parë.',
      mk: 'Практична рамка за кредибилно претставување на воспоставен бизнис уште од првиот екран.',
      sr: 'Praktičan okvir da etablirani biznis deluje pouzdano već na prvom ekranu.',
      ro: 'Un cadru practic pentru ca o companie consacrată să inspire credibilitate încă de la primul ecran.',
      bg: 'Практическа рамка, с която утвърден бизнес печели доверието на клиентите още от първия екран.'
    },
    body: {
      en: [
        'People do not evaluate a website in isolation. They use clarity, proof and consistency as shortcuts for deciding whether a business is safe to contact.',
        'The strongest conversion improvements usually come from aligning the promise, the evidence and the next action. A premium interface makes that sequence easy to understand without adding noise.'
      ],
      sq: [
        'Njerëzit nuk e vlerësojnë një faqe interneti të izoluar. Ata përdorin qartësinë, provat dhe qëndrueshmërinë për të vendosur nëse një biznes është i sigurt për t’u kontaktuar.',
        'Përmirësimet më të forta në konvertim vijnë nga harmonizimi i premtimit, provave dhe veprimit të radhës.'
      ],
      mk: [
        'Луѓето не ја оценуваат веб-страницата изолирано. Јасноста, доказите и доследноста им помагаат да одлучат дали бизнисот е сигурен за контакт.',
        'Најсилните подобрувања доаѓаат кога ветувањето, доказите и следниот чекор се совршено усогласени.'
      ],
      sr: [
        'Ljudi ne procenjuju sajt izolovano. Jasnoća, dokazi i doslednost im pomažu da odluče da li je bezbedno stupiti u kontakt.',
        'Najveća poboljšanja dolaze kada su obećanje, dokazi i sledeći korak usklađeni.'
      ],
      ro: [
        'Oamenii nu evaluează un website în mod izolat. Ei folosesc claritatea, dovezile și consecvența ca repere rapide pentru a decide dacă o companie este suficient de sigură pentru a fi contactată.',
        'Cele mai puternice îmbunătățiri ale conversiei apar de obicei atunci când promisiunea, dovada și următoarea acțiune sunt aliniate. O interfață premium face această succesiune ușor de înțeles fără a adăuga zgomot.'
      ],
      bg: [
        'Хората никога не оценяват един уебсайт изолирано. Те използват прегледността, реалните доказателства и стиловата последователност като ориентири, за да решат дали компанията е надеждна и заслужава контакт.',
        'Най-значимите подобрения в конверсиите идват от синхрона между търговското обещание, фактите и лесната следваща стъпка. Премиум дизайнът прави този процес естествен и интуитивен, без излишен визуален шум.'
      ]
    },
  },
  {
    slug: 'a-better-brief-for-balkan-business-websites',
    publishedAt: '2026-08-05', category: 'Web Design', readTime: '6 min',
    title: {
      en: 'A better brief for Balkan business websites',
      sq: 'Një përmbledhje më e mirë për faqet e bizneseve në Ballkan',
      mk: 'Подобар бриф за деловни веб-страници на Балканот',
      sr: 'Bolji brif za poslovne sajtove na Balkanu',
      ro: 'Un brief mai bun pentru website-urile companiilor din Balcani',
      bg: 'По-добро задание (бриф) за бизнес уебсайтове на Балканите'
    },
    excerpt: {
      en: 'The questions that turn a website project from a visual exercise into a useful business system.',
      sq: 'Pyetjet që e kthejnë një projekt faqeje në një sistem të dobishëm biznesi.',
      mk: 'Прашањата што го претвораат проектот од визуелна вежба во корисен деловен систем.',
      sr: 'Pitanja koja projekat sajta pretvaraju iz vizuelne vežbe u koristan poslovni sistem.',
      ro: 'Întrebările care transformă un proiect de website dintr-un exercițiu vizual într-un sistem de business util.',
      bg: 'Въпросите, които превръщат един уеб проект от повърхностно визуално упражнение в работеща търговска система.'
    },
    body: {
      en: [
        'A useful brief starts with the commercial reality: who needs to trust you, what they need to understand and which action should become easier.',
        'For Balkan businesses, language, geography and mobile behaviour matter early. Defining these constraints before design creates a clearer structure and a more resilient launch.'
      ],
      sq: [
        'Një përmbledhje e dobishme nis me realitetin tregtar: kush duhet t’ju besojë, çfarë duhet të kuptojë dhe cili veprim duhet të bëhet më i lehtë.',
        'Për bizneset në Ballkan, gjuha, gjeografia dhe përdorimi i celularëve duhen përcaktuar herët. Qartësimi i tyre krijon strukturë të fortë dhe nisje të sigurt.'
      ],
      mk: [
        'Добриот бриф започнува со деловната реалност: кој треба да ви верува, што треба да разбере и кој чекор треба да биде полесен.',
        'За балканските бизниси, јазикот, географијата и мобилното однесување се важни од самиот почеток. Дефинирањето на овие барања овозможува појасна структура и постабилно лансирање.'
      ],
      sr: [
        'Dobar brif počinje od poslovne realnosti: kome treba da ulijete poverenje, šta treba da razume i koji korak treba da bude lakši.',
        'Za balkanske biznise je važno rano definisati jezik, geografiju i ponašanje korisnika na mobilnim telefonima. To stvara jasniju strukturu i stabilnije lansiranje.'
      ],
      ro: [
        'Un brief util începe cu realitatea comercială: cine trebuie să aibă încredere în companie, ce trebuie să înțeleagă și ce acțiune ar trebui să devină mai ușoară.',
        'Pentru companiile din Balcani, limba, geografia și comportamentul pe mobil contează de la început. Definirea acestor aspecte înainte de design creează o structură mai clară și o lansare mai sigură.'
      ],
      bg: [
        'Полезното задание започва от реалния пазарен контекст: кой трябва да ви се довери, какво трябва да разбере за вашите предимства и кое действие трябва да стане максимално лесно.',
        'За балканските компании езикът на аудиторията, регионалната специфика и мобилното поведение на потребителите имат решаващо значение още в самото начало. Изясняването на тези рамки преди фазата на дизайна създава прегледна структура и сигурен търговски старт.'
      ]
    },
  },
  {
    slug: 'seo-geo-and-aeo-foundations-that-age-well',
    publishedAt: '2026-07-28', category: 'Visibility', readTime: '7 min',
    title: {
      en: 'SEO, GEO and AEO foundations that age well',
      sq: 'Themelet e SEO, GEO dhe AEO që qëndrojnë gjatë',
      mk: 'SEO, GEO и AEO основи што траат',
      sr: 'SEO, GEO i AEO osnove koje traju',
      ro: 'Fundamente SEO, GEO și AEO care rezistă în timp',
      bg: 'Основи на SEO, GEO и AEO, които остават устойчиви във времето'
    },
    excerpt: {
      en: 'How clear information architecture helps people, search engines and answer systems find the right signal.',
      sq: 'Si arkitektura e qartë e informacionit ndihmon njerëzit, motorët e kërkimit dhe sistemet e përgjigjeve të gjejnë sinjalin e duhur.',
      mk: 'Како јасната информациска архитектура им помага на луѓето, пребарувачите и AI системите да го најдат вистинскиот сигнал.',
      sr: 'Kako jasna informaciona arhitektura pomaže ljudima, pretraživačima i sistemima odgovora da pronađu pravi signal.',
      ro: 'Cum o arhitectură informațională clară ajută oamenii, motoarele de căutare și sistemele de răspuns să găsească semnalul potrivit.',
      bg: 'Как ясната информационна архитектура помага на хората, търсачките и AI системите за директни отговори да открият правилния сигнал.'
    },
    body: {
      en: [
        'Long-term visibility is less about repeating keywords and more about making the business legible. Strong pages answer a real question, show evidence and connect naturally to the next useful page.',
        'That foundation supports classic search, generative discovery and answer engines at the same time. It also gives a team a durable editorial system instead of a one-off campaign.'
      ],
      sq: [
        'Dukshmëria afatgjatë nuk ka të bëjë me përsëritjen e thjeshtë të fjalëve kyçe, por me bërjen e biznesit lehtësisht të kuptueshëm. Faqet e forta i përgjigjen një pyetjeje reale, paraqesin prova dhe lidhen natyrshëm me hapin tjetër.',
        'Kjo bazë mbështet kërkimin klasik, zbulimin me inteligjencë artificiale dhe sistemet e përgjigjeve njëkohësisht. Ajo i jep ekipit një model të qëndrueshëm editorial në vend të një fushate të izoluar.'
      ],
      mk: [
        'Долгорочната видливост не е само повторување клучни зборови, туку јасно претставување на бизнисот. Силните страници одговараат на реално прашање, покажуваат факти и природно водат кон следната корисна страница.',
        'Таквата основа истовремено поддржува класично пребарување, генеративно откривање и системи за директни одговори. Таа му овозможува на тимот траен уреднички модел наместо еднократна кампања.'
      ],
      sr: [
        'Dugoročna vidljivost nije samo ponavljanje ključnih reči, već jasno predstavljanje poslovanja. Pouzdane stranice odgovaraju na stvarna pitanja, pružaju dokaze i prirodno vode ka sledećem korisnom koraku.',
        'Takva osnova istovremeno podržava klasičnu pretragu, generativno otkrivanje i sisteme za direktne odgovore. Ona timu pruža održiv urednički sistem umesto jednokratne kampanje.'
      ],
      ro: [
        'Vizibilitatea pe termen lung ține mai puțin de repetarea cuvintelor-cheie și mai mult de a face compania ușor de înțeles. Paginile puternice răspund unei întrebări reale, prezintă dovezi și se conectează natural la următoarea pagină utilă.',
        'Această fundație susține simultan căutarea clasică, descoperirea generativă și sistemele de răspuns direct. De asemenea, oferă echipei un sistem editorial durabil, nu o campanie punctuală.'
      ],
      bg: [
        'Дългосрочната видимост зависи много по-малко от механичното повтаряне на ключови думи и далеч повече от това бизнесът да бъде кристално ясен и лесно разбираем. Силните страници дават отговор на реален потребителски въпрос, предоставят неоспорими факти и естествено водят към следващата полезна информация.',
        'Тази техническа основа подкрепя едновременно класическите търсачки, генеративното откриване и системите за директни отговори с AI. Тя осигурява на екипа устойчив дългосрочен модел на развитие вместо еднократна изолирана кампания.'
      ]
    },
  },
];

export const insightLabels: Record<InsightLocale, { section: string; journal: string; latest: string; back: string; byline: string }> = {
  en: { section: 'Insights', journal: 'QCT Journal', latest: 'Latest thinking', back: 'Back to Insights', byline: 'QCT Studio editorial' },
  sq: { section: 'Insights', journal: 'QCT Journal', latest: 'Mendime të fundit', back: 'Kthehu te Insights', byline: 'Redaksia e QCT Studio' },
  mk: { section: 'Insights', journal: 'QCT Journal', latest: 'Најнови размислувања', back: 'Назад кон Insights', byline: 'Уредништво на QCT Studio' },
  sr: { section: 'Insights', journal: 'QCT Journal', latest: 'Najnovija razmišljanja', back: 'Nazad na Insights', byline: 'Redakcija QCT Studio' },
  ro: { section: 'Insights', journal: 'QCT Journal', latest: 'Cele mai recente idei', back: 'Înapoi la Insights', byline: 'Redacția QCT Studio' },
  bg: { section: 'Insights', journal: 'QCT Journal', latest: 'Последни анализи', back: 'Назад към Insights', byline: 'Редакция QCT Studio' },
};
