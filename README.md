# QCT Studio — Astro site

## Güncel çalışma bilgisi — 5 Kasım 2026

Aşağıdaki WordPress taşıma notları tarihsel bağlamdır; güncel kurulum veya yayın talimatı olarak kullanılmamalıdır.

- Yayınlanan altı dil: EN `/`, SQ `/sq/`, MK `/mk/`, SR `/sr/`, RO `/ro/`, BG `/bg/`.
- QCT Studio, QCTONE ekosisteminin teknik mimari ve dijital sistemler çalışma alanıdır. Ortak ekosistem üyeliği müşteri ilişkisini kanıtlamaz.
- Güncel derleme: 211 HTML dosyası, 192 sitemap URL’si. Sayılar 5 Kasım kontrolüne aittir.
- Node.js 22 ve kilit dosyasıyla `npm ci`, ardından `npm run build` kullanın.
- Analitik kontrolü: `npm run check:analytics`.
- Backend testleri: `node --test tests/diagnostic-function.test.mjs`.
- Tarayıcı testleri: `npx playwright install chromium`, ardından `npx playwright test`.
- Değişiklikler ayrı dal ve PR üzerinden yürütülür; CI, responsive QA ve üretim doğrulaması ayrı değerlendirilir. Depoyu başka proje dosyalarıyla değiştirmeyin, doğrudan main’e push yapmayın.
- Formun üretimde kayıt alması için depolama binding’i gerekir; statik derleme bunu kanıtlamaz.

## Durum (bu paketle birlikte)

**Ana sayfa (Header, Hero, Problem, Services, Process, Work, FinalCta, Contact, Footer): gerçek WP temasından birebir taşındı.**
- Tüm metinler, sınıf isimleri (`.qct-hero`, `.qct-signal-room`, `.qct-service-card` vb.) orijinal `qct-balkan-premium` temasıyla birebir aynı.
- CSS (`base.css`, `components.css`, `home.css`, `pages.css`, `services.css`, `animations.css`, `utilities.css`) ve JS (`main.js`, `animations.js`) dosyaları olduğu gibi `public/styles/` ve `public/scripts/` altına kopyalandı.
- Çoklu dil (EN/SQ/MK/SR) mevcut `src/i18n/` sözlük sistemi üzerinden çalışıyor — gerçek WP içeriğiyle eşleşen çeviriler zaten mevcuttu, üzerine dokunulmadı.
- `npm run build` ile 56 sayfa hatasız derleniyor, test edildi.

**İç sayfalar (About, Services detay, Contact, Careers, Legal sayfaları — `AboutPage.astro`, `ServicePage.astro`, `LegalPage.astro` vb.): henüz gerçek temaya taşınmadı.**
- Bu sayfalar `.qct-svc-*`, `.qct-btn` gibi WP temasında **var olmayan** sınıf isimleri kullanıyor — yani gerçek CSS'te bu sınıflar için stil tanımı yok, sayfalar büyük ölçüde stilsiz görünecek.
- Metin içerikleri makul/marka diline uygun görünüyor ama gerçek WP kaynağıyla birebir karşılaştırılmadı.
- Bu sayfaları ana sayfayla aynı yöntemle (gerçek `page-*.php` şablonlarından birebir taşıma) sıradaki adımda düzeltmemiz lazım.

## Nasıl kurulur
1. Bu klasörün tüm içeriğini mevcut `qct-studio` proje klasörünün üzerine kopyala (üzerine yazma / birleştirme).
2. `npm install`
3. `npm run dev` → `localhost:4321` üzerinde ana sayfayı kontrol et.
4. Sorunsuzsa `git add . && git commit -m "ana sayfa gerçek temaya taşındı" && git push`, Cloudflare otomatik deploy edecek.

## Sıradaki adım
İç sayfaları (`/about/`, `/services/`, `/contact/`, `/website-design/` vb.) aynı "gerçek PHP şablonundan birebir taşı" yöntemiyle sırayla düzeltmek — ana sayfada izlediğimiz yöntemin devamı.
