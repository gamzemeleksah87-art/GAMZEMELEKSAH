import { TaxQuestion } from '../types/question';

export const questionsPart5: TaxQuestion[] = [
  {
    number: 77,
    category: 'vuk',
    topic: 'VUK Emsal Bedel Belirleme Sıralaması',
    lawRef: '213 sayılı VUK m. 267',
    stem: '213 sayılı VUK’a göre emsal bedel; "gerçek bedeli olmayan veya bilinmeyen veyahut doğru olarak tespit edilemeyen bir malın, değerleme gününde satılması halinde emsaline nazaran haiz olacağı değerdir." Aşağıdakilerden hangisine göre emsal bedel belirlenmez?',
    options: [
      { key: 'A', text: 'Ortalama fiyat esası' },
      { key: 'B', text: 'Kaza mercilerinin re’sen biçtikleri değerler' },
      { key: 'C', text: 'Takdir esası' },
      { key: 'D', text: 'Maliyet bedeli esası' },
      { key: 'E', text: 'Karşılaştırılabilir fiyat yöntemi' },
    ],
    correctOption: 'E',
    solutionSummary:
      'VUK m. 267’ye göre emsal bedel sırasıyla: 1. Sıra Ortalama Fiyat Esası, 2. Sıra Maliyet Bedeli Esası, 3. Sıra Takdir Esası ile belirlenir; ayrıca kaza mercilerinin re’sen biçtiği değerler de emsal bedel yerine geçer. "Karşılaştırılabilir fiyat yöntemi" ise KVK m. 13 Transfer Fiyatlandırması yöntemidir.',
    goldenTip:
      'VUK 267 Sırası: (1) Ortalama Fiyat → (2) Maliyet Bedeli → (3) Takdir Esası (+ Kaza Mercileri). Karşılaştırılabilir fiyat ise KVK m. 13’tür.',
    visualDesignNote: '3 Basamaklı VUK 267 Merdiveni ve KVK m. 13 Tuzağının Ayrıştırılması.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK m. 267 Emsal Bedel Esasları',
      coreRuleTitle: 'Karşılaştırılabilir Fiyat Yöntemi KVK m. 13’e Aittir',
      coreRuleBody:
        'Emsal bedel sırasıyla Ortalama Fiyat, Maliyet Bedeli ve Takdir esaslarına göre tespit edilir.',
      points: [
        { label: 'VUK m. 267 Sıralaması (A, C, D + B)', status: 'correct', detail: '1. Ortalama fiyat, 2. Maliyet bedeli, 3. Takdir esası (+ Kaza mercileri)' },
        { label: 'E: Karşılaştırılabilir Fiyat Yöntemi', status: 'trap', detail: 'VUK emsal bedeli değil, KVK Transfer Fiyatlandırması yöntemidir' },
      ],
    },
  },
  {
    number: 78,
    category: 'vuk',
    topic: 'Vergi Ziyaı Cezasında Kesme Zamanaşımı',
    lawRef: '213 sayılı VUK m. 374/1',
    stem: '213 sayılı Vergi Usul Kanunu’na göre vergi ziyaı cezasının kesilmesinde zamanaşımı süresi aşağıdakilerden hangisinde doğru olarak verilmiştir?',
    options: [
      { key: 'A', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu takvim yılını takip eden yılın birinci gününden başlayarak 2 yıl' },
      { key: 'B', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu tarihi takip eden günden başlayarak 10 tam yıl' },
      { key: 'C', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu takvim yılını takip eden yılın birinci gününden başlayarak 5 yıl' },
      { key: 'D', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu tarihi takip eden günden başlayarak 5 tam yıl' },
      { key: 'E', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu tarihi takip eden günden başlayarak 2 tam yıl' },
    ],
    correctOption: 'C',
    solutionSummary:
      'VUK m. 374/1 uyarınca vergi ziyaı cezasında zamanaşımı süresi, cezanın bağlı olduğu vergi alacağının doğduğu takvim yılını takip eden yılın birinci gününden başlayarak 5 yıldır (usulsüzlükte 2 yıldır).',
    goldenTip:
      'Vergi Ziyaı = 5 yıl (vergi alacağının doğduğu yılı takip eden yıl başından); Usulsüzlük = 2 yıl (usulsüzlüğün yapıldığı yılı takip eden yıl başından).',
    visualDesignNote: '5 Yıllık Ceza Zamanaşımı Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Vergi Ziyaı Ceza Zamanaşımı (VUK m. 374)',
      spanLabel: 'İzleyen Takvim Yılı Başından İtibaren 5 Yıl',
      nodes: [
        { dateLabel: 'T Yılı', title: 'Vergi Alacağının Doğumu', detail: 'Vergi ziyaına konu dönem' },
        { dateLabel: '01.01.(T+1)', title: 'Zamanaşımı Başlangıcı', detail: 'Takip eden yılın 1. günü başlar', highlight: true },
        { dateLabel: '31.12.(T+5)', title: '5 Yıllık Süre Sonu', detail: 'Bu tarihten sonra vergi ziyaı cezası kesilemez', highlight: true },
      ],
      keyTakeaway: 'Vergi ziyaı cezasında 5 yıl, usulsüzlükte 2 yıl uygulanır.',
    },
  },
  {
    number: 79,
    category: 'vuk',
    topic: 'İzaha Davet ve %20 İndirimli Vergi Ziyaı Cezası',
    lawRef: '213 sayılı VUK m. 370/a',
    stem: '213 sayılı VUK’a göre izaha davet edilen mükelleflerce yapılan izahın yeterli bulunmaması hâlinde, Kanun’da yer alan şartlara uygun olarak beyanların tamamlanması ve ziyaa uğrayan verginin izah zammıyla ödenmesi halinde vergi ziyaı cezası, ziyaa uğratılan verginin % kaçı oranında kesilir?',
    options: [
      { key: 'A', text: '10' },
      { key: 'B', text: '20' },
      { key: 'C', text: '30' },
      { key: 'D', text: '50' },
      { key: 'E', text: '80' },
    ],
    correctOption: 'B',
    solutionSummary:
      'VUK m. 370/a uyarınca izaha davet üzerine yapılan açıklama idarece yeterli bulunmazsa, mükellef 30 gün içinde beyanını verip vergiyi izah zammıyla öderse vergi ziyaı cezası %100 yerine %20 oranında kesilir.',
    goldenTip:
      'İzaha davet sonrası beyan + izah zammıyla ödeme = %20 Vergi Ziyaı Cezası (pişmanlık yoksa normalde %100 kesilir).',
    visualDesignNote: 'İzaha Davet Süreç Akışı: Ön Tespit → 30 Gün İzah → Yeterli Değilse 30 Gün Beyan + Ödeme → %20 Ceza.',
    infographic: {
      kind: 'flow',
      designTitle: 'İzaha Davet Ceza İndirimi Akışı (VUK m. 370)',
      stages: [
        { title: '1. Ön Tespit & Davet', amountText: '30 Gün İzah Süresi', subText: 'Mükelleften açıklama istenir', tone: 'neutral' },
        { title: '2. İzah Yeterli Bulunmazsa', amountText: '30 Gün Beyan & Ödeme', subText: 'Vergi + izah zammı ödenir', tone: 'positive' },
        { title: '3. Kesilecek Vergi Ziyaı', amountText: '%20 Oranında', subText: '%100 yerine %20 indirimli ceza uygulanır', tone: 'accent' },
      ],
      summaryEquation: 'İzah yetersiz + 30 günde beyan & ödeme ⇒ %20 Vergi Ziyaı Cezası',
    },
  },
  {
    number: 80,
    category: 'vuk',
    topic: 'İdarece Belirlenen Sürenin Alt Sınırı',
    lawRef: '213 sayılı VUK m. 14/2',
    stem: '213 sayılı VUK’a göre, herhangi bir vergisel yükümlülüğe veya işleme ilişkin sürenin Kanun’da açıkça yazılı olmadığı hâllerde, tebliği yapacak olan idarece belirlenen ve ilgiliye tebliğ edilen süre kaç günden az olamaz?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '5' },
      { key: 'C', text: '7' },
      { key: 'D', text: '15' },
      { key: 'E', text: '30' },
    ],
    correctOption: 'D',
    solutionSummary:
      'VUK m. 14/2 uyarınca kanunda açıkça yazılı olmayan hallerde 15 günden aşağı olmamak şartıyla bu süreyi tebliği yapacak olan idare belirler ve ilgiliye tebliğ eder.',
    goldenTip:
      'Kanuni boşlukta idarenin vereceği asgari süre her zaman 15 gündür (ör. defter belge ibrazı vb.).',
    visualDesignNote: 'Asgari Süre Barı: İdare takdiri 15 günün altına inemez.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Kanunda Yazılı Olmayan Süreler (VUK m. 14)',
      spanLabel: 'Asgari Taban Sınır: 15 Gün',
      nodes: [
        { dateLabel: 'Tebliğ Günü', title: 'İdare Süre Belirler', detail: 'Kanunda açık süre yoksa idare tayin eder' },
        { dateLabel: 'En Az 15 Gün', title: 'Alt Sınır Güvencesi', detail: 'Belirlenen süre 15 günden az olamaz', highlight: true },
      ],
      keyTakeaway: 'VUK m. 14/2 gereği idarece belirlenen süre en az 15 gündür.',
    },
  },
  {
    number: 81,
    category: 'vuk',
    topic: 'Tasarruf Değeri Tanımı',
    lawRef: '213 sayılı VUK m. 264',
    stem: '213 sayılı VUK’da “Bir iktisadi kıymetin değerleme gününde sahibi için arz ettiği gerçek değer” biçiminde tanımlanan değerleme ölçüsü aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Tasarruf değeri' },
      { key: 'B', text: 'Maliyet bedeli' },
      { key: 'C', text: 'Rayiç bedel' },
      { key: 'D', text: 'Vergi değeri' },
      { key: 'E', text: 'İtibari değer' },
    ],
    correctOption: 'A',
    solutionSummary:
      'VUK m. 264’te "Tasarruf değeri, bir iktisadi kıymetin değerleme gününde sahibi için arz ettiği gerçek değerdir" şeklinde tanımlanır (ör. alacak/borç senetlerinin reeskontunda kullanılır).',
    goldenTip:
      'Anahtar kelime: "Sahibi için arz ettiği gerçek değer" = Tasarruf değeri (m. 264); "Normal alım satım değeri" = Rayiç bedel (Mük. m. 266).',
    visualDesignNote: 'VUK Değerleme Ölçüleri Sözlüğü Kartı: Tasarruf Değeri vs. Rayiç Bedel vs. Mukayyet Değer.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK Değerleme Ölçüleri Ayrımı',
      coreRuleTitle: 'Sahibi İçin Arz Ettiği Gerçek Değer = Tasarruf Değeri',
      coreRuleBody:
        'VUK m. 264’teki bu tanım özellikle senede bağlı alacak ve borçların reeskontunda kullanılır.',
      points: [
        { label: 'A: Tasarruf Değeri (m. 264)', status: 'correct', detail: 'Değerleme gününde sahibi için arz ettiği gerçek değer' },
        { label: 'Rayiç Bedel (Mük. m. 266)', status: 'info', detail: 'Değerleme günündeki normal alım satım değeri' },
        { label: 'Mukayyet Değer (m. 265)', status: 'info', detail: 'Muhasebe kayıtlarında gösterilen hesap değeri' },
      ],
    },
  },
  {
    number: 82,
    category: 'vuk',
    topic: 'Tarh Zamanaşımını Durduran Nedenler',
    lawRef: '213 sayılı VUK m. 15 ve m. 114/2',
    stem: 'I. Matrah takdiri için takdir komisyonuna başvurulması · II. Mal bildiriminde bulunulması · III. Mücbir sebeplerin varlığı · IV. Borçlunun yabancı memlekette bulunması. Yukarıdakilerden hangileri tarh zamanaşımını durduran nedenler arasında yer alır?',
    options: [
      { key: 'A', text: 'I ve III' },
      { key: 'B', text: 'II ve IV' },
      { key: 'C', text: 'I, II ve III' },
      { key: 'D', text: 'I, III ve IV' },
      { key: 'E', text: 'I, II, III ve IV' },
    ],
    correctOption: 'A',
    solutionSummary:
      'VUK’ta tarh zamanaşımını durduran yalnızca 2 neden vardır: (I) Matrah takdiri için takdir komisyonuna başvurulması (en fazla 1 yıl durur, m. 114/2) ve (III) Mücbir sebepler (m. 15). II (keser) ve IV (durdurur) ise 6183 sayılı Kanun’daki TAHSİL zamanaşımına aittir.',
    goldenTip:
      'VUK Tarh Zamanaşımını Durduranlar sadece 2 tanedir: (1) Takdir Komisyonu (max 1 yıl), (2) Mücbir Sebep. Kesme sebebi ise VUK’ta yoktur!',
    visualDesignNote: 'VUK Tarh (I & III) vs. 6183 Tahsil (II & IV) Zamanaşımı Ayırıcı Matrisi.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK Tarh Zamanaşımını Durduranlar',
      coreRuleTitle: 'Yalnızca Takdir Komisyonu (I) ve Mücbir Sebep (III)',
      coreRuleBody:
        'Mal bildirimi ve yabancı memleket VUK’a değil, 6183 sayılı Kanun’daki tahsil zamanaşımına ilişkin hallerdir.',
      points: [
        { label: 'I ve III: VUK Tarh Durma Sebepleri', status: 'correct', detail: 'Takdir komisyonuna sevk (en fazla 1 yıl) + Mücbir sebepler' },
        { label: 'II ve IV: 6183 Tahsil Sebepleri', status: 'trap', detail: 'Tarh zamanaşımını değil tahsil zamanaşımını etkiler' },
      ],
    },
  },
  {
    number: 83,
    category: 'vuk',
    topic: 'Vergi Cezalarında Tekerrür ve İçtima Kuralları',
    lawRef: '213 sayılı VUK m. 335, 336, 339, 344',
    stem: '213 sayılı VUK’a göre, vergi cezalarının uygulanması ile ilgili aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Vergi ziyaına sebebiyet vermekten dolayı ceza kesilen ve cezası kesinleşenlere, cezanın kesinleştiği tarihi takip eden yılın başından başlamak üzere beş yıl içinde tekrar ceza kesilmesi durumunda, vergi ziyaı cezası yüzde elli oranında artırılmak suretiyle uygulanır.' },
      { key: 'B', text: 'Cezayı gerektiren tek bir fiil ile vergi ziyaı ve usulsüzlük birlikte işlenmiş olursa bunlara ait cezalardan sadece miktar itibarıyla en ağırı kesilir.' },
      { key: 'C', text: 'Usulsüzlük fiili aynı zamanda re’sen takdiri gerektirirse, usulsüzlük cezaları iki kat olarak kesilir.' },
      { key: 'D', text: 'Vergi ziyaı cezasında cezayı gerektiren tek bir fiil ile başka neviden birkaç vergi ziyaa uğramış olursa bunlara ait cezalardan sadece miktar itibarıyla en ağırı kesilir.' },
      { key: 'E', text: 'Vergi incelemesine başlanılmasından veya takdir komisyonuna sevk edilmesinden sonra verilenler hariç olmak üzere, kanuni süresi geçtikten sonra verilen vergi beyannameleri için vergi ziyaı cezası yüzde elli oranında uygulanır.' },
    ],
    correctOption: 'D',
    solutionSummary:
      'VUK m. 335 ve 336’ya göre tek fiil ile vergi ziyaı ve usulsüzlük birleşirse en ağırı kesilir (B doğru); ancak tek bir fiil ile BAŞKA NEVİDEN birkaç vergi (ör. hem KDV hem Kurumlar Vergisi) ziyaa uğrarsa her bir vergi bakımından AYRI AYRI vergi ziyaı cezası kesilir. Bu nedenle D yanlıştır.',
    goldenTip:
      'İçtima (m. 336): Vergi ziyaı + Usulsüzlük = En ağırı; Tek fiil + Birden çok farklı vergi türü (m. 335) = Her vergi için ayrı ayrı ceza!',
    visualDesignNote: 'İçtima vs. Ayrı Ceza Karşılaştırma Diyagramı: VUK m. 335 ile m. 336 farkı.',
    infographic: {
      kind: 'concept',
      designTitle: 'Cezalarda Birleşme (m. 336) vs. Ayrı Ceza (m. 335)',
      coreRuleTitle: 'Başka Neviden Birkaç Vergi Ziyaında Her Biri İçin Ayrı Ceza Kesilir',
      coreRuleBody:
        'Aynı fiille hem KDV hem Gelir/Kurumlar Vergisi ziyaa uğratılmışsa en ağırı değil, her vergi için ayrı ayrı ceza uygulanır.',
      points: [
        { label: 'D: Farklı Vergilerde En Ağırı İddiası (Yanlış)', status: 'trap', detail: 'VUK m. 335 gereği her vergi türü için ayrı ceza kesilir' },
        { label: 'A, B, C, E: Doğru Ceza Kuralları', status: 'correct', detail: 'Tekerrür %50, Ziyaı+Usulsüzlükte en ağırı, re’sende 2 kat, süresinden sonra beyanda %50' },
      ],
    },
  },
  {
    number: 84,
    category: 'vuk',
    topic: 'Binek Oto Kıst Amortisman Hatası ve Tarhiyat Türü',
    lawRef: '213 sayılı VUK m. 29 ve m. 320',
    stem: '213 sayılı VUK’a göre, 2017 yılı Aralık ayında satın aldığı binek otomobili için kıst amortisman uygulamak yerine yıllık amortismanın tamamını 2017 KV matrahında gider yazan bir inşaat şirketinde, bu durumun izleyen yıllarda vergi incelemesinde ortaya çıkması halinde yapılacak tarhiyat türü nedir?',
    options: [
      { key: 'A', text: 'İdarece tarhiyat' },
      { key: 'B', text: 'Düzeltme yoluyla tarhiyat' },
      { key: 'C', text: 'Beyana dayanan tarhiyat' },
      { key: 'D', text: 'Re’sen tarhiyat' },
      { key: 'E', text: 'İkmalen tarhiyat' },
    ],
    correctOption: 'E',
    solutionSummary:
      'VUK m. 29 uyarınca ikmalen tarhiyat, her ne şekilde olursa olsun bir vergi tarh edildikten sonra bu vergiye müteallik olarak meydana çıkan ve defter, kayıt ve belgelere veya kanuni ölçülere dayanılarak miktarı tespit olunan bir matrah farkı üzerinden yapılan tarhiyattır. Fatura ve amortisman kayıtları mevcut olup fark bu belgelerden hesaplandığı için İKMALEN TARHİYAT yapılır.',
    goldenTip:
      'Defter ve belgeler mevcutsa ve fark bunlara dayanarak hesaplanabiliyorsa = İkmalen Tarhiyat (m. 29); defter/belge yoksa veya ihticaca salih değilse = Re’sen Tarhiyat (m. 30).',
    visualDesignNote: 'Tarhiyat Türü Karar Ağacı: Defter/Belge Var + Hesaplanabilir Fark ⇒ İkmalen Tarhiyat.',
    infographic: {
      kind: 'flow',
      designTitle: 'Matrah Farkında Tarhiyat Türü Seçimi (VUK m. 29)',
      stages: [
        { title: '1. İlk Tarhiyat (2017 Beyanı)', amountText: 'Beyana Dayalı Tarh', subText: 'Kıst yerine yıllık amortisman düşülmüş', tone: 'neutral' },
        { title: '2. İnceleme Tespiti', amountText: 'Defter & Fatura Mevcut', subText: 'Maddi delillerden gerçek kıst tutarı hesaplanabilir', tone: 'positive' },
        { title: '3. Yapılacak Tarhiyat Türü', amountText: 'İkmalen Tarhiyat', subText: 'VUK m. 29 gereği belgeye dayalı tamamlayıcı tarhiyat', tone: 'accent' },
      ],
      summaryEquation: 'Defter/kayıt/belge mevcutsa fark üzerinden İkmalen Tarhiyat yapılır.',
    },
  },
  {
    number: 85,
    category: 'vuk',
    topic: 'İzaha Davet Müessesesinin Tanımı',
    lawRef: '213 sayılı VUK m. 370',
    stem: '213 sayılı VUK’a göre, verginin ziyaa uğradığına delalet eden emareler bulunduğuna dair yetkili merciler tarafından yapılmış ön tespitlerle ilgili olarak aynı merciler tarafından mükelleflerden açıklama talep edilmesi aşağıdaki müesseselerden hangisi ile ifade edilmektedir?',
    options: [
      { key: 'A', text: 'Dönem sonu işlemleri' },
      { key: 'B', text: 'Değerleme' },
      { key: 'C', text: 'Vergi incelemesi' },
      { key: 'D', text: 'Takdire sevk' },
      { key: 'E', text: 'İzaha davet' },
    ],
    correctOption: 'E',
    solutionSummary:
      'VUK m. 370’te düzenlenen bu kurum "İzaha Davet"tir. İncelemeye başlanmadan veya takdir komisyonuna sevk edilmeden önce yapılan ön tespitlere ilişkin mükelleften açıklama istenir.',
    goldenTip:
      'Anahtar kelimeler: "Ön tespitler" + "mükelleflerden açıklama talep edilmesi" = İzaha Davet (VUK m. 370).',
    visualDesignNote: 'VUK m. 370 Tanım & Konum Kartı: İnceleme öncesi ön tespit aşaması.',
    infographic: {
      kind: 'concept',
      designTitle: 'İzaha Davet Müessesesi (VUK m. 370)',
      coreRuleTitle: 'Ön Tespit + Açıklama Talebi = İzaha Davet',
      coreRuleBody:
        'Vergi incelemesine geçilmeden önce vergi kaybı emarelerine karşı mükellefe 30 gün içinde açıklama yapma imkânı tanır.',
      points: [
        { label: 'E: İzaha Davet (m. 370)', status: 'correct', detail: 'Ön tespitler hakkında mükelleften açıklama talep edilmesidir' },
        { label: 'Şartı: İnceleme Başlamadan Önce', status: 'info', detail: 'İncelemeye başlanmışsa veya takdire sevk varsa izaha davet uygulanmaz' },
      ],
    },
  },
  {
    number: 86,
    category: 'vuk',
    topic: 'Tekerrür Hükmü ve Artırım Oranları',
    lawRef: '213 sayılı VUK m. 339',
    stem: '213 sayılı VUK’un "Tekerrür" başlıklı 339’uncu maddesi hükmünün uygulaması ile ilgili olarak aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Usulsüzlükten dolayı adına ceza kesilenlere, cezanın kesinleştiği tarihi takip eden yılın başından başlamak üzere iki yıl içinde tekrar usulsüzlük cezası kesilmesi durumunda tekerrür hükümleri uygulanır.' },
      { key: 'B', text: 'Tekerrür hâlinde cezalar; usulsüzlük cezasında yüzde elli, vergi ziyaı cezasında bir kat oranında artırılarak uygulanır.' },
      { key: 'C', text: 'Bir vergi cezasının tekerrür hükmü sebebiyle artırımlı uygulanabilmesi için cezaya neden olan fiilin daha önce işlenmiş bir fiil için kesilen cezanın kesinleşme tarihinden sonraki bir tarihte işlenmiş olması gerekmektedir.' },
      { key: 'D', text: 'Ziyaa uğratılan vergi asılları için tekerrür uygulaması söz konusu değildir.' },
      { key: 'E', text: 'Vergi ziyaına sebebiyet vermekten dolayı adına ceza kesilenlere, cezanın kesinleştiği tarihi takip eden yılın başından başlamak üzere beş yıl içinde tekrar vergi ziyaı cezası kesilmesi durumunda tekerrür hükümleri uygulanır.' },
    ],
    correctOption: 'B',
    solutionSummary:
      'VUK m. 339’a göre tekerrür halinde vergi ziyaı cezası %50, usulsüzlük cezası %25 oranında artırılır (ve 7338 s.K. ile artırım tutarı kesinleşen cezadan fazla olamaz). B şıkkında verilen "usulsüzlükte %50, vergi ziyaında 1 kat" oranları tamamen yanlıştır.',
    goldenTip:
      'Tekerrür Oranları (VUK m. 339): Vergi ziyaında %50 artırım (5 yıl içinde), Usulsüzlükte %25 artırım (2 yıl içinde). Asla 1 kat artırılmaz!',
    visualDesignNote: 'Tekerrür Oran Tablosu: Gerçek Oranlar (%50 / %25) vs. B Şıkkındaki Yanlış Oranlar.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK m. 339 Tekerrür Süreleri ve Oranları',
      coreRuleTitle: 'Vergi Ziyaı %50 (5 Yıl) · Usulsüzlük %25 (2 Yıl)',
      coreRuleBody:
        'B şıkkında belirtilen "usulsüzlükte %50, vergi ziyaında 1 kat" artırım oranları kanuna aykırıdır.',
      points: [
        { label: 'B: Yanlış Artırım Oranları', status: 'trap', detail: 'Usulsüzlükte %50 ve vergi ziyaında 1 kat DEĞİLDİR' },
        { label: 'Doğru Kanuni Oranlar (m. 339)', status: 'correct', detail: 'Vergi ziyaında %50 (5 yıl), usulsüzlükte %25 (2 yıl) artırılır' },
        { label: 'Vergi Aslı & Kesinleşme Şartı', status: 'info', detail: 'Vergi aslına tekerrür uygulanmaz; 2. fiil ilk cezanın kesinleşmesinden sonra işlenmelidir' },
      ],
    },
  },
  {
    number: 87,
    category: 'vuk',
    topic: '213 Sayılı VUK Kapsamına Girmeyen Vergi',
    lawRef: '213 sayılı VUK m. 1 ve m. 2',
    stem: 'Aşağıdakilerden hangisi 213 sayılı Vergi Usul Kanunu kapsamına girmemektedir?',
    options: [
      { key: 'A', text: 'Kurumlar vergisi' },
      { key: 'B', text: 'Belediyelere ait harçlar' },
      { key: 'C', text: 'Veraset ve intikal vergisi' },
      { key: 'D', text: 'Belediyelere ait vergiler' },
      { key: 'E', text: 'Gümrük idareleri tarafından alınan vergiler' },
    ],
    correctOption: 'E',
    solutionSummary:
      'VUK m. 1 genel bütçeye giren vergi, resim ve harçlar ile il özel idareleri ve belediyelere ait vergi, resim ve harçları kapsar. VUK m. 2 hükmü gereği gümrük idareleri tarafından alınan vergi ve resimler (4458 sayılı Gümrük Kanunu’na tabi olduğundan) VUK kapsamı dışındadır.',
    goldenTip:
      'VUK m. 2 İstisnası: Gümrük idarelerince alınan vergi ve resimler VUK’a tabi değildir (belediyeler ve il özel idareleri ise VUK kapsamındadır).',
    visualDesignNote: 'VUK Kapsam Şeması: Genel Bütçe + Belediyeler + İl Özel İdareleri (Dahil) vs. Gümrük İdareleri (Hariç).',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK Kapsamı (m. 1 ve m. 2)',
      coreRuleTitle: 'Gümrük İdarelerince Alınan Vergiler VUK Dışındadır',
      coreRuleBody:
        'Gümrükte alınan vergi ve resimler kendi özel kanunu olan 4458 sayılı Gümrük Kanunu’na tabidir.',
      points: [
        { label: 'VUK Kapsamına Girenler (A–D)', status: 'correct', detail: 'KV, VİV, Belediye vergi ve harçları, İl özel idaresi gelirleri' },
        { label: 'E: Gümrük İdarelerince Alınanlar (m. 2)', status: 'trap', detail: '213 sayılı VUK kapsamına girmez' },
      ],
    },
  },
  {
    number: 88,
    category: 'vuk',
    topic: 'Vergilendirme Süreci: Tarh, Tebliğ, Tahakkuk, Tahsil',
    lawRef: '213 sayılı VUK m. 19, 20, 21, 22, 23',
    stem: '213 sayılı Vergi Usul Kanunu’na göre vergilendirme sürecine ilişkin aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Sürelerin hesaplanmasında, süre gün olarak belli edilmişse başladığı gün hesaba katılmaz ve son günün tatil saatinde biter.' },
      { key: 'B', text: 'Sürelerin hesaplanmasında, resmî tatil günleri süreye dâhildir, şu kadar ki, sürenin son günü resmî tatile rastlarsa tatili takibeden ilk iş gününün tatil saatinde biter.' },
      { key: 'C', text: 'Vergi alacağı vergi kanunlarının vergiyi bağladıkları olayın vukuu veya hukuki durumun tekemmülü ile doğar.' },
      { key: 'D', text: 'Tebliğ, vergilendirmeyi ilgilendiren ve hüküm ifade eden hususların yetkili makamlar tarafından mükellefe veya ceza sorumlusuna yazı ile bildirilmesidir.' },
      { key: 'E', text: 'Verginin tahsili, kanuna uygun surette tahakkuk ettirilmesidir.' },
    ],
    correctOption: 'E',
    solutionSummary:
      'VUK m. 23’e göre verginin tahsili, kanuna uygun surette ÖDENMESİDİR. "Tahakkuk" ise tarh ve tebliğ edilen verginin ödenecek aşamaya gelmesidir (m. 22). Dolayısıyla E şıkkındaki tanım yanlıştır.',
    goldenTip:
      '4T Zinciri: Tarh (hesaplama) → Tebliğ (yazılı bildirim) → Tahakkuk (ödenecek aşamaya gelme) → Tahsil (kanuna uygun ödenme).',
    visualDesignNote: '4T Vergilendirme Zinciri Akış Diyagramı: Tarh → Tebliğ → Tahakkuk → Tahsil (Ödenmesi).',
    infographic: {
      kind: 'flow',
      designTitle: '4T Vergilendirme Süreci (VUK m. 20–23)',
      stages: [
        { title: '1. Tarh & 2. Tebliğ', amountText: 'Hesaplama + Bildirim', subText: 'İdare vergiyi hesaplar ve yazılı olarak bildirir', tone: 'neutral' },
        { title: '3. Tahakkuk (m. 22)', amountText: 'Ödenecek Aşamaya Gelme', subText: 'Kesinleşme ve ödeme safhasına geçiştir', tone: 'positive' },
        { title: '4. Tahsil (m. 23)', amountText: 'Kanuna Uygun Ödenmesi', subText: 'E şıkkı tahsili tahakkukla karıştırdığı için yanlıştır', tone: 'accent' },
      ],
      summaryEquation: 'Tahsil = Tahakkuk ettirilmesi değil, verginin kanuna uygun surette ÖDENMESİDİR.',
    },
  },
  {
    number: 89,
    category: 'vuk',
    topic: 'Vergilendirme Süreci VUK’a Tabi Olmayan Vergi',
    lawRef: '213 sayılı VUK m. 2',
    stem: 'Aşağıdakilerden hangisinin vergilendirme süreci 213 sayılı Vergi Usul Kanunu’na tabi değildir?',
    options: [
      { key: 'A', text: 'Motorlu taşıtlar vergisi' },
      { key: 'B', text: 'Eğlence vergisi' },
      { key: 'C', text: 'Gelir vergisi' },
      { key: 'D', text: 'Katma değer vergisi' },
      { key: 'E', text: 'Gümrük vergisi' },
    ],
    correctOption: 'E',
    solutionSummary:
      'MTV, Eğlence vergisi (belediye vergisi), Gelir vergisi ve KDV 213 sayılı VUK’a tabidir. Gümrük vergisi ise VUK m. 2 uyarınca kapsam dışındadır.',
    goldenTip:
      'Eğlence vergisi bir belediye vergisi olduğu için VUK kapsamındadır; Gümrük vergisi ise kapsam dışıdır.',
    visualDesignNote: 'VUK Tabi Olanlar (MTV, Eğlence, GV, KDV) vs. Gümrük Vergisi Ayrım Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK’a Tabi Olmayan Vergi: Gümrük Vergisi',
      coreRuleTitle: 'Gümrük Vergisi 4458 Sayılı Kanuna Tabidir',
      coreRuleBody:
        'Belediye vergisi olan Eğlence Vergisi dahil yurt içi vergiler VUK’a tabi iken Gümrük Vergisi VUK m. 2 gereği hariçtir.',
      points: [
        { label: 'A, B, C, D: VUK Kapsamında', status: 'correct', detail: 'MTV, Eğlence vergisi (belediye), Gelir vergisi, KDV' },
        { label: 'E: Gümrük Vergisi', status: 'trap', detail: 'VUK kapsamı dışındadır' },
      ],
    },
  },
  {
    number: 90,
    category: 'vuk',
    topic: 'Yasaklanmış Faaliyetin Vergi Sorumluluğuna Etkisi',
    lawRef: '213 sayılı VUK m. 9/2',
    stem: '213 sayılı VUK’a göre mükellefiyet ve vergi ödevi ile ilgili aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Vergi sorumlusu, verginin ödenmesi bakımından, alacaklı vergi dairesine karşı muhatap olan kişidir.' },
      { key: 'B', text: 'Mükellefiyet ve vergi sorumluluğu için kanuni ehliyet şart değildir.' },
      { key: 'C', text: 'Vergiyi doğuran olayın kanunlarla yasak edilmiş olması vergi sorumluluğunu kaldırır.' },
      { key: 'D', text: 'Ölüm hâlinde mükelleflerin ödevleri, mirası reddetmemiş kanuni ve mansup mirasçılarına geçer.' },
      { key: 'E', text: 'Vergi muamelelerinde süreler vergi kanunları ile belli edilir.' },
    ],
    correctOption: 'C',
    solutionSummary:
      'VUK m. 9/2’nin açık hükmüne göre "Vergiyi doğuran olayın kanunlarla yasak edilmiş bulunması mükellefiyeti ve vergi sorumluluğunu KALDIRMAZ." Örneğin ruhsatsız veya kaçak faaliyetten kazanılan gelir de vergiye tabidir.',
    goldenTip:
      'Vergi Hukukunda Yasak Faaliyet İlkesi (m. 9/2): Kanuni ehliyet şart değildir ve yasaklanmış işlerden kazanç elde etmek vergi ödevini ortadan kaldırmaz.',
    visualDesignNote: 'VUK m. 8–14 Temel İlkeler Kartı: Yasaklanmış Fiil Sorumluluğu Kaldırmaz.',
    infographic: {
      kind: 'concept',
      designTitle: 'Mükellefiyet ve Vergi Sorumluluğu (m. 8–14)',
      coreRuleTitle: 'Yasaklanmış Olay Vergi Sorumluluğunu Kaldırmaz (m. 9/2)',
      coreRuleBody:
        'Kanunların yasakladığı bir faaliyetten gelir elde edilmesi dahi vergi mükellefiyetini ve sorumluluğunu ortadan kaldırmaz.',
      points: [
        { label: 'C: Yasak Olay Sorumluluğu Kaldırır (Yanlış)', status: 'trap', detail: 'VUK m. 9/2 gereği kesinlikle kaldırmaz' },
        { label: 'A, B, D, E: Doğru İlkeler', status: 'correct', detail: 'Ehliyet şart değil, ölümde mirası reddetmeyen mirasçılara geçer' },
      ],
    },
  },
  {
    number: 91,
    category: 'vuk',
    topic: 'Mukayyet Değer Tanımı',
    lawRef: '213 sayılı VUK m. 265',
    stem: '213 sayılı VUK’a göre, bir iktisadi kıymetin muhasebe kayıtlarında gösterilen hesap değerine verilen ad aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Borsa rayici' },
      { key: 'B', text: 'Tasarruf değeri' },
      { key: 'C', text: 'İtibari değer' },
      { key: 'D', text: 'Mukayyet değer' },
      { key: 'E', text: 'Rayiç bedel' },
    ],
    correctOption: 'D',
    solutionSummary:
      'VUK m. 265’e göre "Mukayyet değer, bir iktisadi kıymetin muhasebe kayıtlarında gösterilen hesap değeridir." İtibari değer ise kıymetin üzerinde yazılı nominal değerdir (m. 266).',
    goldenTip:
      'Mukayyet = Kayıtlı (Muhasebe kayıtlarındaki hesap değeri); İtibari = Üzerinde yazılı olan değer (kasa/nominal).',
    visualDesignNote: 'Değerleme Ölçüsü Tanım Eşleştirme Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'Mukayyet Değer (VUK m. 265)',
      coreRuleTitle: 'Muhasebe Kayıtlarında Gösterilen Hesap Değeri = Mukayyet Değer',
      coreRuleBody:
        'Defter kayıtlarındaki (kayıtlı) değer anlamına gelir; alacaklar, borçlar ve kuruluş giderleri mukayyet değerle değerlenir.',
      points: [
        { label: 'D: Mukayyet Değer (m. 265)', status: 'correct', detail: 'Muhasebe kayıtlarında gösterilen hesap değeridir' },
        { label: 'C: İtibari Değer (m. 266)', status: 'info', detail: 'Senet, tahvil, hisse senedi vb. üzerinde yazılı nominal değerdir' },
      ],
    },
  },
  {
    number: 92,
    category: 'vuk',
    topic: 'Vergi Ziyaı Cezası Zamanaşımı Süresi',
    lawRef: '213 sayılı VUK m. 374/1',
    stem: '213 sayılı VUK’a göre aşağıdaki sürelerden hangisi geçtikten sonra vergi ziyaı cezası kesilmez?',
    options: [
      { key: 'A', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu yılı takip eden yılın birinci gününden başlayarak beş yıl' },
      { key: 'B', text: 'Fiilin gerçekleştiği tarihi izleyen günden itibaren beş yıl' },
      { key: 'C', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu yılı takip eden yılın birinci gününden başlayarak üç yıl' },
      { key: 'D', text: 'Fiilin gerçekleştiği tarihi izleyen günden itibaren üç yıl' },
      { key: 'E', text: 'Cezanın bağlı olduğu vergi alacağının doğduğu yılı takip eden yılın birinci gününden başlayarak altı ay' },
    ],
    correctOption: 'A',
    solutionSummary:
      'VUK m. 374/1 uyarınca cezanın bağlı olduğu vergi alacağının doğduğu takvim yılını takip eden yılın birinci gününden başlayarak 5 yıl geçtikten sonra vergi ziyaı cezası kesilemez.',
    goldenTip:
      '78. soru ile aynı konuyu ölçer: Zamanaşımı başlangıcı fiil günü değil, "vergi alacağının doğduğu yılı takip eden yılın 1. günü"dür ve süresi 5 yıldır.',
    visualDesignNote: 'Başlangıç Günü ve 5 Yıl Bitişi Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Vergi Ziyaı Ceza Zamanaşımı Başlangıcı (m. 374)',
      spanLabel: 'Doğduğu Yılı İzleyen Yıl Başından İtibaren 5 Yıl',
      nodes: [
        { dateLabel: 'Doğum Yılı', title: 'Vergi Alacağının Doğması', detail: 'Başlangıç bu gün değil, izleyen yılın 1 Ocak günüdür' },
        { dateLabel: 'İzleyen 1 Ocak + 5 Yıl', title: '5 Yıllık Kesme Süresi', detail: '5. yılın sonunda ceza kesme yetkisi zamanaşımına uğrar', highlight: true },
      ],
      keyTakeaway: 'İzleyen yılın birinci gününden başlayarak 5 yıl (A şıkkı).',
    },
  },
  {
    number: 93,
    category: 'vuk',
    topic: 'Karşılıklar Tanımı',
    lawRef: '213 sayılı VUK m. 288',
    stem: '213 sayılı VUK’a göre hasıl olan veya husulü beklenen fakat miktarı katiyetle kestirilemeyen ve teşebbüs için bir borç mahiyetini arz eden belli bazı zararları karşılamak maksadıyla hesaben ayrılan meblağlar aşağıdakilerden hangisi ile ifade edilir?',
    options: [
      { key: 'A', text: 'Mukayyet değer' },
      { key: 'B', text: 'Zarar' },
      { key: 'C', text: 'Değerleme' },
      { key: 'D', text: 'Karşılık' },
      { key: 'E', text: 'İtibari değer' },
    ],
    correctOption: 'D',
    solutionSummary:
      'VUK m. 288’de "Hasıl olan veya husulü beklenen fakat miktarı katiyetle kestirilemeyen ve teşebbüs için bir borç mahiyetini arz eden belli bazı zararları karşılamak maksadıyla hesaben ayrılan meblağlara karşılık denir" şeklinde tanımlanır (ve mukayyet değerle pasifleştirilir).',
    goldenTip:
      'Miktarı kesin bilinmeyen + beklenen zarar için hesaben ayrılan tutar = Karşılık (VUK m. 288).',
    visualDesignNote: 'VUK m. 288 Karşılık Kavram Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'VUK m. 288 Karşılıklar',
      coreRuleTitle: 'Beklenen Zararlar İçin Ayrılan Meblağ = Karşılık',
      coreRuleBody:
        'Şüpheli alacaklar veya diğer beklenen zararları karşılamak üzere hesaben ayrılan tutarlar karşılıktır ve mukayyet değerle değerlenir.',
      points: [
        { label: 'D: Karşılık (m. 288)', status: 'correct', detail: 'Miktarı kesin kestirilemeyen beklenen zararlar için ayrılır' },
        { label: 'Değerleme Ölçüsü', status: 'info', detail: 'Karşılıklar mukayyet değerle pasifleştirilmek suretiyle değerlenir' },
      ],
    },
  },
  {
    number: 94,
    category: 'vuk',
    topic: 'Elektronik Tebligatın Yapılmış Sayıldığı Tarih',
    lawRef: '213 sayılı VUK m. 107/A',
    stem: '213 sayılı VUK’a göre elektronik ortamda tebligat, aşağıdaki hangi tarihte muhatabına yapılmış sayılır?',
    options: [
      { key: 'A', text: 'Elektronik adresine ulaştığı tarihi izleyen beşinci günün sonunda' },
      { key: 'B', text: 'Elektronik adresine ulaştığı tarihte' },
      { key: 'C', text: 'Elektronik adresine ulaştığı tarihi izleyen yedinci günün sonunda' },
      { key: 'D', text: 'Elektronik adresine gönderildiği tarihi izleyen üçüncü günün sonunda' },
      { key: 'E', text: 'Elektronik adresine gönderildiği tarihte' },
    ],
    correctOption: 'A',
    solutionSummary:
      'VUK m. 107/A uyarınca elektronik ortamda tebligat, muhatabın elektronik adresine ulaştığı tarihi izleyen 5. GÜNÜN SONUNDA yapılmış sayılır (okunup okunmamasından bağımsızdır).',
    goldenTip:
      'E-Tebligat (VUK m. 107/A): Ulaştığı tarihi izleyen 5. günün sonunda tebliğ edilmiş sayılır (dava ve ödeme süreleri 6. günden işlemeye başlar).',
    visualDesignNote: 'E-Tebligat 5 Gün Kuralı Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Elektronik Tebligat Süreci (VUK m. 107/A)',
      spanLabel: 'Ulaştığı Tarihi İzleyen 5. Günün Sonu',
      nodes: [
        { dateLabel: '0. Gün', title: 'Elektronik Adrese Ulaşma', detail: 'Tebligat mükellefin e-tebligat kutusuna düşer' },
        { dateLabel: '1–5. Gün', title: '5 Günlük Bekleme Süresi', detail: 'Mükellef açsa bile hukuki tebliğ tarihi değişmez' },
        { dateLabel: '5. Günün Sonu', title: 'TEBLİĞ EDİLMİŞ SAYILIR', detail: 'Dava açma (30 gün) ertesi günden itibaren başlar', highlight: true },
      ],
      keyTakeaway: 'Elektronik adresine ulaştığı tarihi izleyen beşinci günün sonunda tebliğ edilmiş sayılır.',
    },
  },
  {
    number: 95,
    category: 'vuk',
    topic: 'Vergi Tarhı Ön İşlemleri',
    lawRef: '213 sayılı VUK m. 127–152 ve Ek m. 1',
    stem: '213 sayılı Vergi Usul Kanunu’na göre, aşağıdakilerden hangisi vergi tarhı ön işlemlerinden biri değildir?',
    options: [
      { key: 'A', text: 'Yoklama' },
      { key: 'B', text: 'Uzlaşma' },
      { key: 'C', text: 'Arama' },
      { key: 'D', text: 'İzaha davet' },
      { key: 'E', text: 'İnceleme' },
    ],
    correctOption: 'B',
    solutionSummary:
      'Yoklama, vergi incelemesi, arama, bilgi toplama ve izaha davet vergi tarhına hazırlık/tespit niteliğindeki "tarh ön işlemleridir". Uzlaşma ise tarhiyat öncesi veya sonrası vergi ve cezada anlaşmaya yönelik barışçıl çözüm yoludur.',
    goldenTip:
      '5 Tarh Ön İşlemi (Araştırma/Tespit): Yoklama, İnceleme, Arama, Bilgi Toplama, İzaha Davet. Uzlaşma ise çözüm yoludur.',
    visualDesignNote: 'Tarh Öncesi Tespit Araçları vs. Çözüm Yolu (Uzlaşma) Akış Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'Vergi Tarhının Ön İşlemleri',
      coreRuleTitle: 'Uzlaşma Bir Tarh Ön İşlemi Değildir',
      coreRuleBody:
        'Yoklama, inceleme, arama ve izaha davet matrahı/vergi kaybını tespit etmeye yöneliktir; uzlaşma uyuşmazlığı çözer.',
      points: [
        { label: 'Ön İşlemler (A, C, D, E)', status: 'correct', detail: 'Yoklama, Arama, İzaha Davet, Vergi İncelemesi (+ Bilgi Toplama)' },
        { label: 'B: Uzlaşma (VUK Ek m. 1, 11)', status: 'trap', detail: 'Ön tespit/araştırma işlemi değil, idari çözüm müessesesidir' },
      ],
    },
  },
  {
    number: 96,
    category: 'vuk',
    topic: 'Uzlaşmanın Vaki Olmaması Halinde Kalan Dava Süresi',
    lawRef: '213 sayılı VUK Ek m. 7/4',
    stem: '213 sayılı VUK’a göre, mükellefin dava açma süresinin 26’ncı günü tarhiyat sonrası uzlaşmaya başvurması durumunda ancak uzlaşmanın vaki olmaması hâlinde, mükellef kaç gün içinde dava açabilir?',
    options: [
      { key: 'A', text: '4' },
      { key: 'B', text: '9' },
      { key: 'C', text: '15' },
      { key: 'D', text: '26' },
      { key: 'E', text: '30' },
    ],
    correctOption: 'C',
    solutionSummary:
      'Vergi mahkemesinde normal dava açma süresi 30 gündür. 26. günde uzlaşmaya başvurulduğunda geriye 30 − 26 = 4 gün kalmıştır. VUK Ek m. 7/4 uyarınca uzlaşmanın vaki olmaması halinde kalan süre 15 günden az ise bu süre 15 GÜNE UZAR. Dolayısıyla mükellef 15 gün içinde dava açabilir.',
    goldenTip:
      'Uzlaşma Vaki Olmazsa Kuralı: Kalan süre ≥ 15 gün ise kalan gün kadar; kalan süre < 15 gün ise (örneğin 4 gün) otomatik 15 güne uzar!',
    visualDesignNote: '30 Günlük Dava Çizelgesi + 4 Gün Kalan Sürenin 15 Güne Uzaması Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Uzlaşma Vaki Olmazsa Ek Dava Süresi (Ek m. 7)',
      spanLabel: 'Kalan 4 Gün (< 15 Gün) ⇒ 15 Güne Uzar',
      nodes: [
        { dateLabel: '1–26. Gün', title: '26. Günde Uzlaşma Başvurusu', detail: 'Normal 30 günlük sürenin 26 günü geçti, 4 gün kaldı' },
        { dateLabel: 'Uzlaşma Tutanağı', title: 'Uzlaşma Vaki Olmadı', detail: 'Tebliğden itibaren kalan süreye bakılır: 4 gün < 15 gün' },
        { dateLabel: 'Tebliğ + 15 Gün', title: '15 Güne Uzama Güvencesi', detail: 'VUK Ek m. 7/4 gereği kalan süre 15 güne tamamlanır', highlight: true },
      ],
      keyTakeaway: 'Kalan süre 15 günden az olduğu için mükellefin dava açma süresi 15 gün olur.',
    },
  },
  {
    number: 97,
    category: 'vuk',
    topic: 'Yoklama İşleminin Sınırı vs. Arama',
    lawRef: '213 sayılı VUK m. 127 ve m. 142',
    stem: 'Yoklama, vergi idaresinin yükümlüleri ve yükümlülükle ilgili maddi olayları, kayıtları ve konuları saptamaya yönelik araştırma işlemidir. Hangisi vergi idaresince yapılan yoklama işlemine örnek teşkil etmez?',
    options: [
      { key: 'A', text: 'Veraset ve intikal vergisinde beyan konusu bir gayrimenkulün varlığının yerinde saptanması' },
      { key: 'B', text: 'Gelir vergisinde serbest meslek erbabının işe başladığının işyerinde araştırılması' },
      { key: 'C', text: 'İşi bırakma bildiriminin doğruluğunun işyerinde araştırılması' },
      { key: 'D', text: 'Faturasız mal bulunup bulunmadığının iş yerinde araştırılması' },
      { key: 'E', text: 'Vergi kaçırdığı yolunda kuvvetli şüpheler bulunan kişinin işyerinde vergi suçuna ilişkin delillerin toplanması' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Vergi kaçırdığı yolunda kuvvetli emareler bulunan kişilerin işyerinde ve nezdinde vergi suçuna ilişkin delillerin toplanması "Yoklama" değil, Sulh Ceza Hâkiminin kararıyla yapılan "ARAMA" işlemidir (VUK m. 142).',
    goldenTip:
      'Yoklama (m. 127) rutin maddi tespitlerdir (hâkim kararı gerekmez); vergi kaçırma şüphesiyle suç delili toplama ise Arama’dır (m. 142, hâkim kararı şarttır).',
    visualDesignNote: 'Yoklama (m. 127) vs. Arama (m. 142) Yetki ve Kapsam Karşılaştırması.',
    infographic: {
      kind: 'concept',
      designTitle: 'Yoklama (m. 127) vs. Arama (m. 142)',
      coreRuleTitle: 'Suç Delili Toplamak Yoklama Değil, Arama İşlemidir',
      coreRuleBody:
        'Vergi kaçırma şüphesiyle delil arama işlemi Sulh Hâkimi kararı gerektiren VUK m. 142 Arama müessesesidir.',
      points: [
        { label: 'Yoklama Örnekleri (A–D)', status: 'correct', detail: 'İşe başlama/bırakma, taşınmaz tespiti, faturasız mal/belge düzeni kontrolü' },
        { label: 'E: Suç Delili Toplama (Arama)', status: 'trap', detail: 'Yoklama değildir; incelemeye yetkili olanların talebiyle hâkim kararlı Arama’dır' },
      ],
    },
  },
  {
    number: 98,
    category: 'vuk',
    topic: 'Borçların Değerleme Ölçüsü',
    lawRef: '213 sayılı VUK m. 285',
    stem: '213 sayılı VUK’a göre, vergi matrahlarının hesaplanması ile ilgili iktisadi kıymetlerin takdir ve tespitinde borçlar, değerleme ölçülerinden hangisi ile değerlenir?',
    options: [
      { key: 'A', text: 'Nominal değer' },
      { key: 'B', text: 'Rayiç bedel' },
      { key: 'C', text: 'Mukayyet değer' },
      { key: 'D', text: 'Alış bedeli' },
      { key: 'E', text: 'Borsa rayici' },
    ],
    correctOption: 'C',
    solutionSummary:
      'VUK m. 285/1 uyarınca "Borçlar mukayyet değerleriyle değerlenir." (Ayrıca m. 281’de alacaklar da mukayyet değerle değerlenir; senede bağlı olanlarda istenirse tasarruf değeriyle reeskont yapılabilir).',
    goldenTip:
      'Alacaklar (m. 281) ve Borçlar (m. 285) temel olarak Mukayyet Değer ile değerlenir.',
    visualDesignNote: 'VUK Değerleme Tablosu Özeti: Borçlar & Alacaklar → Mukayyet Değer.',
    infographic: {
      kind: 'concept',
      designTitle: 'Borçların Değerlemesi (VUK m. 285)',
      coreRuleTitle: 'Borçlar Mukayyet Değerle Değerlenir',
      coreRuleBody:
        'VUK m. 285 uyarınca işletme borçları muhasebe kayıtlarındaki hesap değeri (mukayyet değer) üzerinden değerlenir.',
      points: [
        { label: 'C: Mukayyet Değer (m. 285)', status: 'correct', detail: 'Borçların ve alacakların temel değerleme ölçüsüdür' },
        { label: 'İhtiyari Reeskont İstisnası', status: 'info', detail: 'Vadesi gelmemiş senede bağlı borçlar istenirse tasarruf değeriyle reeskonta tabi tutulabilir' },
      ],
    },
  },
  {
    number: 99,
    category: 'vuk',
    topic: 'Dava Açılmayan Vergi Cezalarının Ödeme Süresi',
    lawRef: '213 sayılı VUK m. 368/1',
    stem: '213 sayılı VUK’da düzenlenen vergi cezalarına karşı vergi mahkemesinde dava açılmamışsa dava açma süresinin bittiği tarihten başlayarak ne kadar süre içinde cezanın ödenmesi gerektiği öngörülmüştür?',
    options: [
      { key: 'A', text: '7 gün' },
      { key: 'B', text: '15 gün' },
      { key: 'C', text: '60 gün' },
      { key: 'D', text: '1 ay' },
      { key: 'E', text: '3 ay' },
    ],
    correctOption: 'D',
    solutionSummary:
      'VUK m. 368/1 uyarınca vergi cezalarına karşı dava açılmamışsa, dava açma süresinin (30 gün) bittiği tarihten (yani cezanın tahakkuk ettiği tarihten) başlayarak 1 AY içinde ödenir (dava açılıp mahkemece onanırsa ihbarname tebliğinden itibaren 1 ay içinde ödenir).',
    goldenTip:
      'Vergi ziyaı, usulsüzlük ve özel usulsüzlük cezaları dava açılmazsa dava süresinin bitiminden itibaren 1 AY içinde ödenir (m. 368).',
    visualDesignNote: 'Tebliğ → 30 Gün Dava Süresi → Tahakkuk + 1 Ay Ödeme Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Vergi Cezalarının Ödeme Süresi (VUK m. 368)',
      spanLabel: 'Dava Açma Süresi Bitiminden İtibaren 1 Ay',
      nodes: [
        { dateLabel: '0. Gün', title: 'Ceza İhbarnamesi Tebliği', detail: '30 günlük dava açma süresi başlar' },
        { dateLabel: '30. Gün Sonu', title: 'Dava Açılmazsa Kesinleşme', detail: 'Ceza tahakkuk eder (ödenecek aşamaya gelir)' },
        { dateLabel: '+1 Ay', title: 'Ödeme Vadesi (1 AY)', detail: 'VUK m. 368/1 gereği 1 ay içinde ödenir', highlight: true },
      ],
      keyTakeaway: 'Dava açılmayan vergi cezaları dava açma süresinin bittiği tarihten itibaren 1 ay içinde ödenir.',
    },
  },
  {
    number: 100,
    category: 'vuk',
    topic: 'Menfaati Bulunmayan Kaçakçılık Suçu Ortağının Cezası',
    lawRef: '213 sayılı VUK m. 360',
    stem: '213 sayılı VUK’da düzenlenen kaçakçılık suçlarına iştirak eden suç ortaklarının bu suçların işlenmesinde menfaatinin bulunmaması hâlinde, Türk Ceza Kanunu’nun suça iştirak hükümlerine göre haklarında verilecek ceza aşağıdaki hangi oranda uygulanır?',
    options: [
      { key: 'A', text: 'Bir kat artırılır.' },
      { key: 'B', text: 'Yarı oranında artırılır.' },
      { key: 'C', text: 'Yarı oranında indirilir.' },
      { key: 'D', text: 'Üçte bir oranında indirilir.' },
      { key: 'E', text: '%25 oranında indirilir.' },
    ],
    correctOption: 'C',
    solutionSummary:
      'VUK m. 360 hükmüne göre 359. maddede yazılı kaçakçılık suçlarının işlenişine iştirak eden suç ortaklarının bu suçların işlenmesinde MENFAATİNİN BULUNMAMASI hâlinde, TCK’nın suça iştirak hükümlerine göre hakkında verilecek cezanın YARISI İNDİRİLİR (%50 / yarı oranında indirilir).',
    goldenTip:
      'VUK m. 360 İştirak Kuralı: Suç ortağının maddi menfaati varsa tam ceza; menfaati yoksa TCK iştirak cezası YARI ORANINDA (1/2) indirilir!',
    visualDesignNote: 'Menfaat Var vs. Menfaat Yok Ceza İndirimi Karşılaştırma Akışı.',
    infographic: {
      kind: 'flow',
      designTitle: 'Kaçakçılığa İştirakte Menfaat Kriteri (VUK m. 360)',
      stages: [
        { title: 'Menfaat Bulunuyorsa', amountText: 'Tam Ceza (TCK İştirak)', subText: 'Suçtan maddi çıkar sağlayan ortağa indirim uygulanmaz', tone: 'neutral' },
        { title: 'Menfaat Bulunmuyorsa', amountText: 'Yarı Oranında İndirilir', subText: 'TCK suça iştirak cezası %50 (1/2) oranında düşürülür', tone: 'accent' },
      ],
      summaryEquation: 'Menfaat yoksa verilecek ceza yarı oranında indirilir (VUK m. 360).',
    },
  },
];
