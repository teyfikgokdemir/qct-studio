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
      sq: 'ChatGPT Ads në 2026: çfarë ndryshon reklamimi AI-native për bizneset',
      mk: 'ChatGPT Ads во 2026: што менува AI-native рекламирањето за бизнисите',
      sr: 'ChatGPT Ads u 2026: šta AI-native oglašavanje menja za biznise',
      ro: "ChatGPT Ads în 2026: ce schimbă publicitatea AI-native pentru companii",
      bg: "ChatGPT Ads през 2026: как AI-native рекламата променя бизнеса"
    },
    excerpt: {
      en: 'A practical guide to ChatGPT Ads, conversational intent, CPC buying, Sponsored Agents and how landing pages should adapt to AI-native discovery.',
      sq: 'Udhëzues praktik për ChatGPT Ads, conversational intent, CPC, Sponsored Agents dhe si duhet të përshtaten landing pages.',
      mk: 'Практичен водич за ChatGPT Ads, conversational intent, CPC, Sponsored Agents и адаптација на landing pages.',
      sr: 'Praktičan vodič za ChatGPT Ads, conversational intent, CPC, Sponsored Agents i prilagođavanje landing stranica.',
      ro: "Un ghid practic despre ChatGPT Ads, intenția conversațională, cumpărarea CPC, Sponsored Agents și modul în care landing page-urile trebuie să se adapteze descoperirii AI-native.",
      bg: "Практическо ръководство за ChatGPT Ads, conversational intent, CPC купуване, Sponsored Agents и адаптирането на landing pages към AI-native откриването."
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
      ],
      ro: [
        "ChatGPT Ads introduce un context publicitar diferit de căutarea clasică bazată pe cuvinte-cheie. Oamenii ajung adesea cu o problemă, o comparație sau o decizie deja în curs, astfel încât relevanța depinde de intenția conversațională și de contextul comercial util, nu de un singur cuvânt-cheie.",
        "OpenAI a extins accesul advertiserilor în 2026 prin Ads Manager self-service, cu suport pentru obiective CPM, CPC și oCPC eligibile, precum și măsurare mai amplă. Sponsored Agents se află în prezent într-un alpha limitat cu advertiseri selectați și pot continua o interacțiune publicitară într-o conversație sponsorizată de companie.",
        "Pentru advertiseri, acest lucru schimbă strategia creativă. Un slogan generic este mai puțin util decât o propunere precisă care explică pentru cine este oferta, care este beneficiul practic și când este relevantă. Variantele creative mai distincte oferă sistemului mai multe posibilități de a corespunde intenției reale.",
        "Și landing page-urile trebuie să se schimbe. Pagina ar trebui să continue conversația cu dovezi clare, un scope specific, prețuri sau logică de calificare, UX mobil rapid și un pas următor direct. Aici SEO, GEO, AEO și AIO pot susține achiziția plătită, deoarece aceeași claritate și consistență a entității îmbunătățesc atât descoperirea organică, cât și cea plătită.",
        "ChatGPT Ads ar trebui măsurat ca un canal comercial, nu doar ca o sursă de clickuri. Solicitările calificate, conversiile asistate, comportamentul pe landing page și calitatea vânzărilor ulterioare contează mai mult decât traficul brut.",
        "Disponibilitatea și formatele de reclame continuă să evolueze în funcție de piață. Companiile ar trebui să verifice eligibilitatea actuală în Ads Manager și cerințele de politică înainte de a planifica bugetul."
      ],
      bg: [
        "ChatGPT Ads въвежда различен рекламен контекст от класическото търсене по ключови думи. Хората често идват с вече оформен проблем, сравнение или решение, затова релевантността зависи от conversational intent и полезния търговски контекст, а не от една ключова дума.",
        "OpenAI разшири достъпа за рекламодатели през 2026 г. със self-service Ads Manager, който поддържа CPM, CPC и допустими oCPC цели, както и по-широко измерване. Sponsored Agents в момента са в ограничен alpha тест с избрани рекламодатели и могат да продължат рекламното взаимодействие като спонсориран от бизнеса разговор.",
        "За рекламодателите това променя креативната стратегия. Общият слоган е по-малко полезен от точно предложение, което обяснява за кого е офертата, каква е практическата полза и кога е релевантна. По-различните креативни варианти дават на системата повече възможности да съвпадне с реалното намерение.",
        "Landing page-овете също трябва да се променят. Страницата трябва да продължи разговора с ясни доказателства, конкретен scope, цени или qualification logic, бърз mobile UX и директна следваща стъпка. Тук SEO, GEO, AEO и AIO могат да подкрепят paid acquisition, защото същата яснота и последователност на entity сигналите подобряват както органичното, така и платеното откриване.",
        "ChatGPT Ads трябва да се измерва като търговски канал, а не само като източник на кликове. Квалифицираните запитвания, assisted conversions, поведението на landing page и качеството на последващите продажби са по-важни от суровия трафик.",
        "Достъпността и рекламните формати продължават да се променят според пазара. Бизнесите трябва да проверяват текущата eligibility в Ads Manager и изискванията на политиките преди планиране на бюджет."
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
      ro: "Dynamic SEO în 2026: de ce SEO, GEO, AEO și AIO funcționează acum împreună",
      bg: "Dynamic SEO през 2026: защо SEO, GEO, AEO и AIO вече работят заедно"
    },
    excerpt: {
      en: 'A practical model for moving from one-off optimisation to a monthly system driven by technical health, real queries, content gaps and AI-search visibility.',
      sq: 'Model praktik për kalimin nga optimizimi njëherësh në sistem mujor të drejtuar nga gjendja teknike, kërkimet reale, boshllëqet e përmbajtjes dhe dukshmëria në AI.',
      mk: 'Практичен модел за премин од еднократна оптимизација кон месечен систем воден од техничка состојба, реални пребарувања, содржински празнини и AI видливост.',
      sr: 'Praktičan model prelaska sa jednokratne optimizacije na mesečni sistem zasnovan na tehničkom stanju, realnim upitima, sadržajnim prazninama i AI vidljivosti.',
      ro: "Un model practic pentru trecerea de la optimizarea punctuală la un sistem lunar bazat pe sănătate tehnică, interogări reale, goluri de conținut și vizibilitate în căutarea AI.",
      bg: "Практически модел за преминаване от еднократна оптимизация към месечна система, водена от техническо здраве, реални заявки, content gaps и AI-search видимост."
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
      ],
      ro: [
        "Dynamic SEO tratează vizibilitatea ca pe un sistem operațional, nu ca pe o listă de verificare pentru lansare. Sănătatea tehnică, acoperirea indexării, interogările reale din Search Console, linkurile interne, datele structurate și traseele de conversie sunt revizuite repetat deoarece piața și site-ul continuă să se schimbe.",
        "SEO rămâne baza pentru crawlability și relevanță. GEO îmbunătățește claritatea și calitatea surselor pentru experiențele generative. AEO face întrebările importante mai ușor de răspuns direct. AIO menține consecvente entitatea companiei, serviciile, dovezile și contextul machine-readable pe întregul site.",
        "Ritmul lunar contează. Un ciclu util înseamnă revizuirea sănătății tehnice, identificarea interogărilor în creștere sau subperformante, îmbunătățirea paginilor prioritare, publicarea unuia sau a două articole bazate pe dovezi, consolidarea linkurilor interne și măsurarea faptului dacă vizibilitatea produce solicitări, nu doar impresii.",
        "Acest model este deosebit de util pentru companiile multilingve din Balcani, deoarece fiecare piață dezvoltă un limbaj de căutare, întrebări comerciale și semnale de încredere diferite. O pagină tradusă nu este automat o pagină relevantă local.",
        "Scopul nu este urmărirea fiecărei actualizări de algoritm. Scopul este menținerea unui site ușor de înțeles, util, accesibil tehnic și relevant comercial pe măsură ce comportamentul de căutare se schimbă."
      ],
      bg: [
        "Dynamic SEO разглежда видимостта като оперативна система, а не като checklist за launch. Техническото здраве, index coverage, реалните Search Console заявки, вътрешните връзки, structured data и conversion paths се преглеждат многократно, защото пазарът и сайтът непрекъснато се променят.",
        "SEO остава основата за crawlability и релевантност. GEO подобрява яснотата и качеството на източниците за generative experiences. AEO прави важните въпроси по-лесни за директен отговор. AIO поддържа последователни бизнес entity сигналите, услугите, доказателствата и machine-readable контекста в целия сайт.",
        "Месечният ритъм има значение. Полезният цикъл включва преглед на техническото здраве, откриване на растящи или слабо представящи се заявки, подобряване на приоритетни страници, публикуване на една или две статии с доказателства, подсилване на вътрешните връзки и измерване дали видимостта води до запитвания, а не само до импресии.",
        "Този модел е особено полезен за многоезични балкански компании, защото всеки пазар развива различен език на търсене, търговски въпроси и сигнали за доверие. Преведената страница не е автоматично локално релевантна страница.",
        "Целта не е да се преследва всяка алгоритмична промяна. Целта е сайтът да остава разбираем, полезен, технически достъпен и търговски релевантен, докато поведението при търсене се променя."
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
      ro: "Vizibilitate în ChatGPT Search: OAI-SearchBot, robots.txt și ce trebuie să verifice proprietarii de site-uri",
      bg: "Видимост в ChatGPT Search: OAI-SearchBot, robots.txt и какво трябва да проверят собствениците на сайтове"
    },
    excerpt: {
      en: 'A technical checklist for making public website content accessible to ChatGPT Search without confusing search access with model-training permissions.',
      sq: 'Listë teknike për ta bërë përmbajtjen publike të aksesueshme në ChatGPT Search pa ngatërruar aksesin e kërkimit me lejet e trajnimit.',
      mk: 'Техничка листа за јавната содржина да биде достапна за ChatGPT Search без мешање на search пристапот со дозволите за тренинг.',
      sr: 'Tehnička kontrolna lista za dostupnost javnog sadržaja u ChatGPT Search bez mešanja search pristupa i dozvola za treniranje modela.',
      ro: "Un checklist tehnic pentru a face conținutul public al site-ului accesibil în ChatGPT Search fără a confunda accesul pentru căutare cu permisiunile pentru antrenarea modelelor.",
      bg: "Технически checklist за достъпност на публичното съдържание в ChatGPT Search, без да се смесва search access с разрешенията за model training."
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
      ],
      ro: [
        "Vizibilitatea în căutarea AI începe cu accesul. O pagină publică nu poate deveni o sursă utilă dacă crawlerul de căutare relevant nu o poate accesa în mod fiabil. Proprietarii de site-uri ar trebui să verifice robots.txt, regulile CDN și firewall, codurile de răspuns, URL-urile canonice și dacă paginile importante sunt realmente accesibile fără obstacole client-side.",
        "OpenAI separă crawling-ul pentru căutare de preferințele privind antrenarea modelelor. Această distincție contează operațional: o companie poate gestiona independent descoperirea în căutare și permisiunile de training, în loc să trateze toate crawlerele AI ca fiind identice.",
        "Accesul tehnic înseamnă doar eligibilitate, nu o garanție de ranking. Definițiile clare ale serviciilor, dovezile originale, consistența puternică a entității, răspunsurile utile, linkurile interne și paginile-sursă de încredere determină în continuare dacă o pagină este suficient de utilă pentru a apărea.",
        "Măsurarea ar trebui să includă mai mult decât traficul organic generic. Referral traffic, căutările de brand, landing page-urile accesate din descoperire asistată de AI și calitatea solicitărilor rezultate sunt semnale comerciale mai utile.",
        "Pentru site-urile multilingve, accesul crawlerelor trebuie să fie consecvent în toate folderele de limbă și URL-urile alternative. Hreflang, regulile canonice și conținutul localizat trebuie să fie aliniate, nu să transmită semnale contradictorii."
      ],
      bg: [
        "AI-search видимостта започва с достъпа. Публична страница не може да стане полезен източник, ако съответният search crawler не може надеждно да я обходи. Собствениците на сайтове трябва да проверят robots.txt, CDN и firewall правилата, response codes, canonical URL-ите и дали важните страници са действително достъпни без client-side препятствия.",
        "OpenAI разделя search crawling от предпочитанията за model training. Това разграничение е важно оперативно: бизнесът може да управлява search discovery и training permissions независимо, вместо да третира всеки AI crawler по един и същи начин.",
        "Техническият достъп е само eligibility, а не гаранция за ranking. Ясните дефиниции на услугите, оригиналните доказателства, последователните entity сигнали, полезните отговори, вътрешните връзки и надеждните source pages продължават да определят дали една страница е достатъчно полезна, за да бъде показана.",
        "Измерването трябва да включва повече от общ organic traffic. Referral traffic, branded searches, landing pages, достигнати чрез AI-assisted discovery, и качеството на последващите запитвания са по-полезни търговски сигнали.",
        "При многоезични сайтове crawler access трябва да е последователен във всички езикови директории и alternate URLs. Hreflang, canonical правилата и локализираното съдържание трябва да са съгласувани, вместо да изпращат противоречиви сигнали."
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
      sr: 'Multimodal search SEO u 2026: zašto slike i vizuelni kontekst zaslužuju search strategiju',
      ro: "SEO pentru căutarea multimodală în 2026: de ce imaginile și contextul vizual au nevoie de o strategie de căutare",
      bg: "Multimodal search SEO през 2026: защо изображенията и визуалният контекст вече изискват search стратегия"
    },
    excerpt: {
      en: 'How businesses should structure images, surrounding copy, product data and measurement as visual and multimodal discovery becomes easier to analyse.',
      sq: 'Si të strukturohen imazhet, teksti përreth, të dhënat e produkteve dhe matja ndërsa kërkimi vizual bëhet më i matshëm.',
      mk: 'Како да се структурираат слики, придружен текст, product data и мерење додека визуелното пребарување станува полесно за анализа.',
      sr: 'Kako strukturirati slike, prateći tekst, podatke o proizvodima i merenje dok vizuelna pretraga postaje lakša za analizu.',
      ro: "Cum ar trebui companiile să structureze imaginile, textul din jur, datele de produs și măsurarea pe măsură ce descoperirea vizuală și multimodală devine mai ușor de analizat.",
      bg: "Как бизнесите трябва да структурират изображенията, surrounding copy, продуктовите данни и измерването, когато visual и multimodal discovery стават по-лесни за анализ."
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
      ],
      ro: [
        "Căutarea devine tot mai vizuală. Un client poate începe cu o fotografie, o imagine de produs sau o scenă, nu cu un cuvânt-cheie tastat. Acest lucru schimbă rolul fotografiei de produs, contextului imaginii, numelor de fișiere, textului alt, textului din jur și informațiilor structurate despre produs.",
        "Cele mai puternice pagini pentru visual search nu se bazează doar pe alt text. Imaginea ar trebui să fie într-o pagină care explică clar produsul, serviciul, locația sau cazul de utilizare. Sistemele de căutare au nevoie ca asset-ul vizual și contextul semantic din jur să fie coerente.",
        "Echipele de e-commerce ar trebui să prioritizeze imagini originale de produs, variante consecvente, atribute corecte, pagini de categorie descriptive și linkuri interne curate. Companiile de servicii pot folosi fotografii originale de proiect, dovezi before-and-after și context de locație atunci când sunt autentice.",
        "Măsurarea devine mai importantă pe măsură ce platformele de căutare oferă mai multe informații despre descoperirea vizuală și multimodală. Echipele ar trebui să analizeze ce pagini și asset-uri atrag acest trafic și dacă vizitele avansează către product views, solicitări sau vânzări.",
        "Acesta este încă un motiv pentru care SEO, GEO, AEO și AIO nu ar trebui gestionate ca tactici izolate. Accesibilitatea tehnică, datele machine-readable, răspunsurile utile și dovezile vizuale puternice consolidează aceeași entitate și aceeași poveste comercială."
      ],
      bg: [
        "Търсенето става все по-визуално. Клиентът може да започне със снимка, продуктово изображение или сцена вместо с въведена ключова дума. Това променя ролята на продуктовата фотография, контекста на изображението, имената на файловете, alt текста, surrounding copy и структурираната продуктова информация.",
        "Най-силните visual-search страници не разчитат само на alt text. Изображението трябва да е част от страница, която ясно обяснява продукта, услугата, локацията или use case-а. Search системите се нуждаят визуалният asset и околният семантичен контекст да са съгласувани.",
        "E-commerce екипите трябва да дават приоритет на оригинални продуктови изображения, последователни варианти, точни продуктови атрибути, описателни category pages и чисти вътрешни връзки. Бизнесите с услуги могат да използват оригинална проектна фотография, before-and-after доказателства и локационен контекст, когато са автентични.",
        "Измерването става по-важно, тъй като search платформите показват повече информация за visual и multimodal discovery. Екипите трябва да следят кои страници и asset-и привличат този трафик и дали посещенията преминават към product views, запитвания или продажби.",
        "Това е още една причина SEO, GEO, AEO и AIO да не се управляват като изолирани тактики. Техническата достъпност, machine-readable данните, полезните отговори и силните визуални доказателства подсилват една и съща entity и търговска история."
      ]
    },
  },

  {
    slug: 'why-trust-is-the-real-website-conversion-driver',
    publishedAt: '2026-08-12', category: 'Strategy', readTime: '5 min',
    title: { en: 'Why trust is the real website conversion driver', sq: 'Pse besimi është shtytësi i vërtetë i konvertimit', mk: 'Зошто довербата е вистинскиот двигател на конверзијата', sr: 'Zašto je poverenje pravi pokretač konverzije', ro: 'De ce încrederea este adevăratul motor al conversiei pe website', bg: 'Защо доверието е истинският двигател на website conversion' },
    excerpt: { en: 'A practical framework for making an established business feel credible from the first screen.', sq: 'Një kornizë praktike për ta bërë një biznes të etabliran të duket i besueshëm që në ekranin e parë.', mk: 'Практична рамка за кредибилно претставување на воспоставен бизнис уште од првиот екран.', sr: 'Praktičan okvir da etablirani biznis deluje pouzdano već na prvom ekranu.', ro: 'Un cadru practic pentru ca o companie consacrată să inspire credibilitate încă de la primul ecran.', bg: 'Практическа рамка, с която утвърден бизнес може да изглежда надежден още от първия екран.' },
    body: {
      en: ['People do not evaluate a website in isolation. They use clarity, proof and consistency as shortcuts for deciding whether a business is safe to contact.', 'The strongest conversion improvements usually come from aligning the promise, the evidence and the next action. A premium interface makes that sequence easy to understand without adding noise.'],
      sq: ['Njerëzit nuk e vlerësojnë një faqe interneti të izoluar. Ata përdorin qartësinë, provat dhe qëndrueshmërinë për të vendosur nëse një biznes është i sigurt për t’u kontaktuar.', 'Përmirësimet më të forta në konvertim vijnë nga harmonizimi i premtimit, provave dhe veprimit të radhës.'],
      mk: ['Луѓето не ја оценуваат веб-страницата изолирано. Јасноста, доказите и доследноста им помагаат да одлучат дали бизнисот е сигурен за контакт.', 'Најсилните подобрувања доаѓаат кога ветувањето, доказите и следниот чекор се усогласени.'],
      sr: ['Ljudi ne procenjuju sajt izolovano. Jasnoća, dokazi i doslednost im pomažu da odluče da li je bezbedno stupiti u kontakt.', 'Najveća poboljšanja dolaze kada su obećanje, dokazi i sledeći korak usklađeni.'],
      ro: [
        "Oamenii nu evaluează un website în mod izolat. Ei folosesc claritatea, dovezile și consecvența ca repere rapide pentru a decide dacă o companie este suficient de sigură pentru a fi contactată.",
        "Cele mai puternice îmbunătățiri ale conversiei apar de obicei atunci când promisiunea, dovada și următoarea acțiune sunt aliniate. O interfață premium face această succesiune ușor de înțeles fără a adăuga zgomot."
      ],
      bg: [
        "Хората не оценяват един сайт изолирано. Те използват яснотата, доказателствата и последователността като бързи сигнали, за да решат дали е безопасно да се свържат с бизнеса.",
        "Най-силните подобрения в conversion обикновено идват от съгласуването на обещанието, доказателствата и следващото действие. Премиум интерфейсът прави тази последователност лесна за разбиране, без да добавя шум."
      ]
    },
  },
  {
    slug: 'a-better-brief-for-balkan-business-websites',
    publishedAt: '2026-08-05', category: 'Web Design', readTime: '6 min',
    title: { en: 'A better brief for Balkan business websites', sq: 'Një brief më i mirë për faqet e bizneseve në Ballkan', mk: 'Подобар бриф за деловни веб-страници на Балканот', sr: 'Bolji brif za poslovne sajtove na Balkanu', ro: 'Un brief mai bun pentru website-urile companiilor din Balcani', bg: 'По-добър brief за бизнес сайтове на Балканите' },
    excerpt: { en: 'The questions that turn a website project from a visual exercise into a useful business system.', sq: 'Pyetjet që e kthejnë një projekt faqeje në një sistem të dobishëm biznesi.', mk: 'Прашањата што го претвораат проектот од визуелна вежба во корисен деловен систем.', sr: 'Pitanja koja projekat sajta pretvaraju iz vizuelne vežbe u koristan poslovni sistem.', ro: 'Întrebările care transformă un proiect de website dintr-un exercițiu vizual într-un sistem de business util.', bg: 'Въпросите, които превръщат един website проект от визуално упражнение в полезна бизнес система.' },
    body: {
      en: ['A useful brief starts with the commercial reality: who needs to trust you, what they need to understand and which action should become easier.', 'For Balkan businesses, language, geography and mobile behaviour matter early. Defining these constraints before design creates a clearer structure and a more resilient launch.'],
      sq: ['Një brief i dobishëm nis me realitetin tregtar: kush duhet t’ju besojë, çfarë duhet të kuptojë dhe cilin veprim duhet ta bëjë më të lehtë.', 'Për bizneset në Ballkan, gjuha, gjeografia dhe sjellja mobile duhen përcaktuar herët.'],
      mk: ['Добриот бриф започнува со деловната реалност: кој треба да ви верува, што треба да разбере и кој чекор треба да биде полесен.', 'За балканските бизниси, јазикот, географијата и мобилното однесување се важни од самиот почеток.'],
      sr: ['Dobar brif počinje od poslovne realnosti: kome treba da ulijete poverenje, šta treba da razume i koji korak treba da bude lakši.', 'Za balkanske biznise je važno rano definisati jezik, geografiju i ponašanje mobilnih korisnika.'],
      ro: [
        "Un brief util începe cu realitatea comercială: cine trebuie să aibă încredere în companie, ce trebuie să înțeleagă și ce acțiune ar trebui să devină mai ușoară.",
        "Pentru companiile din Balcani, limba, geografia și comportamentul mobil contează de la început. Definirea acestor constrângeri înainte de design creează o structură mai clară și o lansare mai rezistentă."
      ],
      bg: [
        "Полезният brief започва от търговската реалност: кой трябва да ви се довери, какво трябва да разбере и кое действие трябва да стане по-лесно.",
        "За балканските бизнеси езикът, географията и mobile поведението имат значение още в началото. Определянето на тези ограничения преди дизайна създава по-ясна структура и по-устойчив launch."
      ]
    },
  },
  {
    slug: 'seo-geo-and-aeo-foundations-that-age-well',
    publishedAt: '2026-07-28', category: 'Visibility', readTime: '7 min',
    title: { en: 'SEO, GEO and AEO foundations that age well', sq: 'Themelet e SEO, GEO dhe AEO që qëndrojnë gjatë', mk: 'SEO, GEO и AEO основи што траат', sr: 'SEO, GEO i AEO osnove koje traju', ro: 'Fundamente SEO, GEO și AEO care rezistă în timp', bg: 'SEO, GEO и AEO основи, които остават устойчиви във времето' },
    excerpt: { en: 'How clear information architecture helps people, search engines and answer systems find the right signal.', sq: 'Si arkitektura e qartë e informacionit ndihmon njerëzit, motorët e kërkimit dhe sistemet e përgjigjeve.', mk: 'Како јасната информациска архитектура им помага на луѓето и системите да го најдат вистинскиот сигнал.', sr: 'Kako jasna informaciona arhitektura pomaže ljudima i sistemima da pronađu pravi signal.', ro: 'Cum o arhitectură informațională clară ajută oamenii, motoarele de căutare și sistemele de răspuns să găsească semnalul potrivit.', bg: 'Как ясната информационна архитектура помага на хората, търсачките и answer системите да открият правилния сигнал.' },
    body: {
      en: ['Long-term visibility is less about repeating keywords and more about making the business legible. Strong pages answer a real question, show evidence and connect naturally to the next useful page.', 'That foundation supports classic search, generative discovery and answer engines at the same time. It also gives a team a durable editorial system instead of a one-off campaign.'],
      sq: ['Dukshmëria afatgjatë nuk ka të bëjë vetëm me përsëritjen e fjalëve kyçe, por me bërjen e biznesit të kuptueshëm.', 'Kjo bazë mbështet kërkimin klasik, zbulimin gjenerues dhe motorët e përgjigjeve njëkohësisht.'],
      mk: ['Долгорочната видливост не е само повторување клучни зборови, туку јасно претставување на бизнисот.', 'Таквата основа истовремено поддржува класично пребарување, генеративно откривање и системи за одговори.'],
      sr: ['Dugoročna vidljivost nije samo ponavljanje ključnih reči, već jasno predstavljanje poslovanja.', 'Takva osnova istovremeno podržava klasičnu pretragu, generativno otkrivanje i sisteme za odgovore.'],
      ro: [
        "Vizibilitatea pe termen lung ține mai puțin de repetarea cuvintelor-cheie și mai mult de a face compania ușor de înțeles. Paginile puternice răspund unei întrebări reale, prezintă dovezi și se conectează natural la următoarea pagină utilă.",
        "Această fundație susține simultan căutarea clasică, descoperirea generativă și answer engines. De asemenea, oferă echipei un sistem editorial durabil, nu o campanie punctuală."
      ],
      bg: [
        "Дългосрочната видимост зависи по-малко от повтарянето на ключови думи и повече от това бизнесът да бъде разбираем. Силните страници отговарят на реален въпрос, показват доказателства и естествено водят към следващата полезна страница.",
        "Тази основа едновременно подкрепя класическото търсене, generative discovery и answer engines. Тя дава на екипа и устойчив редакционен модел вместо еднократна кампания."
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
