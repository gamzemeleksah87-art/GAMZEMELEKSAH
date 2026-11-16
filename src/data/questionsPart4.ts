import { TaxQuestion } from '../types/question';

export const questionsPart4: TaxQuestion[] = [
  {
    number: 65,
    category: 'otv',
    topic: 'ÖTV Kanunu’nda Teslim Tanımı',
    lawRef: '4760 sayılı ÖTVK m. 2/1-e',
    stem: '4760 sayılı Özel Tüketim Vergisi Kanunu’na göre, bir mal üzerindeki tasarruf hakkının malik veya adına hareket edenlerce, alıcıya veya adına hareket edenlere devredilmesi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'İstisna' },
      { key: 'B', text: 'İlk iktisap' },
      { key: 'C', text: 'İthalat' },
      { key: 'D', text: 'Kayıt ve tescil' },
      { key: 'E', text: 'Teslim' },
    ],
    correctOption: 'E',
    solutionSummary:
      'ÖTV Kanunu m. 2/1-e hükmü uyarınca "Teslim", bir mal üzerindeki tasarruf hakkının malik veya adına hareket edenlerce, alıcıya veya adına hareket edenlere devredilmesini ifade eder.',
    goldenTip:
      'ÖTV Kanunu’ndaki "Teslim" tanımı KDV Kanunu m. 2’deki teslim tanımı ile birebir aynıdır.',
    visualDesignNote: 'Kavram Tanım Kartı: Malikten alıcıya tasarruf hakkı devri (Teslim) ile İlk İktisap/İthalat ayrımı.',
    infographic: {
      kind: 'concept',
      designTitle: 'ÖTV Kanunu Madde 2 Tanımları',
      coreRuleTitle: 'Tasarruf Hakkının Devri = Teslim (E)',
      coreRuleBody:
        'Bir mal üzerindeki tasarruf hakkının alıcıya devredilmesi ÖTV Kanunu’nda "Teslim" kavramıyla tanımlanır.',
      points: [
        { label: 'Teslim (m. 2/1-e)', status: 'correct', detail: 'Tasarruf hakkının malikçe alıcıya veya adına hareket edenlere devri' },
        { label: 'İlk İktisap (m. 2/1-b)', status: 'info', detail: '(II) sayılı listedeki kayıt/tescile tabi araçların ilk kez edinilmesi' },
        { label: 'İthalat (m. 2/1-a)', status: 'info', detail: 'Malların Türkiye Cumhuriyeti Gümrük Bölgesine girişi' },
      ],
    },
  },
  {
    number: 66,
    category: 'otv',
    topic: 'ÖTV’de Vergiyi Doğuran Olay',
    lawRef: '4760 sayılı ÖTVK m. 3',
    stem: '4760 sayılı Özel Tüketim Vergisi Kanunu’na göre, aşağıdakilerden hangisi vergiyi doğuran olay değildir?',
    options: [
      { key: 'A', text: 'Komisyoncular vasıtasıyla yapılan satışlarda malların alıcıya teslimi' },
      { key: 'B', text: 'İlk iktisap hâllerinde malın teslimi' },
      { key: 'C', text: 'İthalatta malların antrepoya konulması' },
      { key: 'D', text: 'Malın tesliminden önce fatura verilmesi hâllerinde, faturada gösterilen miktarla sınırlı olmak üzere fatura düzenlenmesi' },
      { key: 'E', text: 'Konsinyasyon suretiyle yapılan satışlarda malların alıcıya teslimi' },
    ],
    correctOption: 'C',
    solutionSummary:
      'ÖTV m. 3/e uyarınca ithalatta vergiyi doğuran olay malların antrepoya konulması değil, 4458 sayılı Gümrük Kanunu’na göre gümrük yükümlülüğünün doğması (ithalat beyannamesinin tescili / serbest dolaşıma giriş) anında meydana gelir.',
    goldenTip:
      'Antrepoya mal konulması henüz millileştirme (serbest dolaşıma giriş) olmadığından ne ÖTV ne de KDV doğurur.',
    visualDesignNote: 'Vergiyi Doğuran 4 Olay vs. Antrepo İstisnası Karşılaştırma Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'ÖTV’de Vergiyi Doğuran Olaylar (m. 3)',
      coreRuleTitle: 'Antrepoya Mal Koymak ÖTV Doğurmaz',
      coreRuleBody:
        'İthalatta ÖTV, antrepoya girişte değil Gümrük Kanunu uyarınca gümrük yükümlülüğü doğduğunda (serbest dolaşıma girişte) doğar.',
      points: [
        { label: 'C: İthalatta Antrepoya Koyma', status: 'trap', detail: 'Vergiyi doğuran olay DEĞİLDİR (gümrük yükümlülüğü henüz doğmamıştır)' },
        { label: 'A, B, D, E: Vergiyi Doğuran Haller', status: 'correct', detail: 'İlk iktisapta teslim, faturanın önce kesilmesi, komisyoncu/konsinyede alıcıya teslim' },
      ],
    },
  },
  {
    number: 67,
    category: 'otv',
    topic: 'ÖTV’nin Konusuna Giren İşlem',
    lawRef: '4760 sayılı ÖTVK m. 1 ve (II) Sayılı Liste',
    stem: '4760 sayılı Özel Tüketim Vergisi Kanunu’na göre aşağıdaki işlemlerden hangisi vergiye tabidir?',
    options: [
      { key: 'A', text: 'Yurtdışından yapılan otomobil ithalatı' },
      { key: 'B', text: 'KDV’ye tabi olmayan ikinci el konut satışı' },
      { key: 'C', text: 'Menkul kıymet alım satım işlemi' },
      { key: 'D', text: 'Hizmet sektöründe verilen danışmanlık hizmeti' },
      { key: 'E', text: 'Yurtdışına motorlu taşıt satışı' },
    ],
    correctOption: 'A',
    solutionSummary:
      'ÖTV Kanunu’na ekli 4 listede yer alan mallar ÖTV’ye tabidir; hizmetler, konutlar ve menkul kıymetler ÖTV konusuna girmez. Yurt dışına motorlu taşıt satışı ihracat istisnasıdır (m. 5). Yurt dışından yapılan otomobil ithalatı (II sayılı liste) ise ilk iktisap/ithalat hükümleri çerçevesinde ÖTV’ye tabidir.',
    goldenTip:
      'ÖTV tek aşamalı bir mal vergisidir: Hizmetler, gayrimenkuller ve menkul kıymetler asla ÖTV’ye tabi değildir; ihracat ise istisnadır.',
    visualDesignNote: 'ÖTV 4 Liste Kapsam Filtresi: Taşıt İthalatı (Tabi) vs. Konut/Hizmet/İhracat (Tabi Değil).',
    infographic: {
      kind: 'concept',
      designTitle: 'ÖTV’nin Konusu ve 4 Liste Kapsamı',
      coreRuleTitle: 'Yurt Dışından Otomobil İthalatı ÖTV’ye Tabidir',
      coreRuleBody:
        'Otomobil (II) sayılı listede yer alan bir maldır; ikinci el konut, hizmet ve menkul kıymet ÖTV dışındadır, ihracat ise istisnadır.',
      points: [
        { label: 'A: Otomobil İthalatı ((II) Liste)', status: 'correct', detail: 'ÖTV Kanunu’na ekli (II) sayılı liste kapsamında vergiye tabidir' },
        { label: 'B, C, D: Konut, Menkul Kıymet, Hizmet', status: 'info', detail: 'ÖTV yalnızca 4 listedeki mallara uygulanır' },
        { label: 'E: Yurt Dışına Taşıt Satışı', status: 'info', detail: 'ÖTV m. 5 İhracat İstisnası kapsamındadır' },
      ],
    },
  },
  {
    number: 68,
    category: 'otv',
    topic: 'Engelli Taşıt İstisnasında Güncel Yararlanma Süresi',
    lawRef: '4760 sayılı ÖTVK m. 7/2 (7537 s.K. değişikliği)',
    stem: '4760 sayılı ÖTV Kanunu’na göre engellilerin kullandığı istisnaya tabi kayıt ve tescile tabi binek otomobillerde, istisnadan yararlanma şartı kaç yılda bir defaya mahsus olmak üzere düzenlenmiştir?',
    options: [
      { key: 'A', text: '2' },
      { key: 'B', text: '4' },
      { key: 'C', text: '6' },
      { key: 'D', text: '10' },
      { key: 'E', text: '15' },
    ],
    correctOption: 'D',
    solutionSummary:
      '7537 sayılı Kanun ile 27.12.2024 tarihinden itibaren ÖTV Kanunu m. 7/2’de yapılan değişiklikle, engellilerin ÖTV istisnasından yararlanarak taşıt iktisap etme süresi 5 yıldan 10 YILA çıkarılmıştır (10 yılda bir defaya mahsus).',
    goldenTip:
      'Güncel Mevzuat: Engelli ÖTV istisnası artık 5 yılda bir değil, 10 yılda bir defaya mahsus uygulanmaktadır (ayrıca yerli katkı şartı da getirilmiştir).',
    visualDesignNote: 'Değişiklik Zaman Çizelgesi: Eski 5 Yıl kuralından 27.12.2024 itibarıyla 10 Yıl kuralına geçiş.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Engelli ÖTV İstisnası Yararlanma Süresi (m. 7/2)',
      spanLabel: '7537 Sayılı Kanunla 10 Yılda Bir Defa',
      nodes: [
        { dateLabel: 'Önceki Kural', title: '5 Yılda Bir Defa', detail: '27.12.2024 öncesinde geçerli eski süre' },
        { dateLabel: '27.12.2024 +', title: '7537 s.K. Güncel Kural: 10 YIL', detail: 'Engelliler 10 yılda bir defaya mahsus istisnadan yararlanır', highlight: true },
      ],
      keyTakeaway: 'Güncel ÖTV m. 7/2 uyarınca yararlanma süresi 10 yılda bir defadır.',
    },
  },
  {
    number: 69,
    category: 'otv',
    topic: 'ÖTV Kanunu’nda Yer Almayan Kurum',
    lawRef: '4760 sayılı ÖTVK vs. 5520 sayılı KVK m. 7',
    stem: 'Aşağıdakilerden hangisi 4760 sayılı Özel Tüketim Vergisi Kanunu’nda düzenlenmemiştir?',
    options: [
      { key: 'A', text: 'İhracat istisnası' },
      { key: 'B', text: 'Diplomatik istisna' },
      { key: 'C', text: 'Vergi indirimi' },
      { key: 'D', text: 'Vergiyi doğuran olay' },
      { key: 'E', text: 'Kontrol edilen yabancı kurum kazancı' },
    ],
    correctOption: 'E',
    solutionSummary:
      'İhracat istisnası (m. 5), Diplomatik istisna (m. 6), Vergi indirimi (m. 9) ve Vergiyi doğuran olay (m. 3) 4760 sayılı ÖTV Kanunu’nda yer alır. "Kontrol edilen yabancı kurum kazancı" ise 5520 sayılı Kurumlar Vergisi Kanunu m. 7’de düzenlenen vergi güvenlik müessesesidir.',
    goldenTip:
      'ÖTV tek aşamalı olsa da, ÖTV ödenmiş bir malın başka bir ÖTV’li mal imalinde kullanılması halinde m. 9 kapsamında "Vergi İndirimi" vardır.',
    visualDesignNote: 'Kanun Eşleştirme Kartı: ÖTV Kanunu Maddeleri (m. 3, 5, 6, 9) vs. KVK Madde 7.',
    infographic: {
      kind: 'concept',
      designTitle: 'ÖTV Kanunu Yapısı vs. KVK Müessesesi',
      coreRuleTitle: 'Kontrol Edilen Yabancı Kurum Kazancı KVK m. 7’dedir',
      coreRuleBody:
        'İhracat istisnası, diplomatik istisna, vergi indirimi ve vergiyi doğuran olay ÖTVK içinde düzenlenmiştir.',
      points: [
        { label: 'ÖTVK’da Yer Alanlar (A–D)', status: 'correct', detail: 'm. 5 İhracat, m. 6 Diplomatik, m. 9 Vergi İndirimi, m. 3 Vergiyi Doğuran Olay' },
        { label: 'E: Kontrol Edilen Yabancı Kurum', status: 'trap', detail: 'ÖTVK’da yoktur; 5520 sayılı KVK m. 7 müessesesidir' },
      ],
    },
  },
  {
    number: 70,
    category: 'otv',
    topic: '(I) Sayılı Liste Mallarının Amaç Dışı Kullanımı ve Ceza',
    lawRef: '4760 sayılı ÖTVK m. 13/2 · 213 sayılı VUK m. 341',
    stem: '4760 sayılı ÖTV Kanunu’na göre, benzin ve mazot gibi ürünlerin yer aldığı Kanun’a ekli (I) sayılı listedeki malları teslim alanların, bu malları daha yüksek tutarda vergiye tabi bir mal olarak kullanmaları hâlinde, aradaki vergi farkı açısından hangi ceza uygulanır?',
    options: [
      { key: 'A', text: 'Birinci derece usulsüzlük' },
      { key: 'B', text: 'İkinci derece usulsüzlük' },
      { key: 'C', text: 'Özel usulsüzlük' },
      { key: 'D', text: 'Vergi ziyaı' },
      { key: 'E', text: 'Kaçakçılık' },
    ],
    correctOption: 'D',
    solutionSummary:
      'ÖTV Kanunu m. 13/2 uyarınca (I) sayılı listedeki malları teslim alanların bunları daha yüksek tutarda vergiye tabi bir mal olarak kullanmaları veya üçüncü kişilere satmaları hâlinde, aradaki vergi farkı teslim alan adına tarh olunur ve bu vergi farkı üzerinden VUK uyarınca VERGİ ZİYAI CEZASI kesilir.',
    goldenTip:
      'Vergi kaybına (fark ÖTV’nin doğmasına) yol açan bu durum doğrudan VUK m. 341 kapsamında "Vergi Ziyaı" cezasını gerektirir (ÖTV m. 13/2).',
    visualDesignNote: 'Amaç Dışı Kullanım Yaptırım Akışı: Düşük Vergili Teslim → Yüksek Vergili Kullanım → Fark ÖTV + Vergi Ziyaı Cezası.',
    infographic: {
      kind: 'flow',
      designTitle: '(I) Sayılı Liste Amaç Dışı Kullanım Müeyyidesi',
      stages: [
        { title: '1. Düşük ÖTV ile Teslim Alma', amountText: '(I) Sayılı Liste', subText: 'Akaryakıt/solvent vb. indirimli/düşük ÖTV’li mal', tone: 'neutral' },
        { title: '2. Yüksek Vergili Mal Gibi Kullanma', amountText: 'Fark ÖTV Doğar', subText: 'ÖTV m. 13/2 sorumluluk doğumu', tone: 'positive' },
        { title: '3. Uygulanacak Ceza', amountText: 'Vergi Ziyaı Cezası', subText: 'Vergi farkı alıcı adına tarh edilir + Vergi Ziyaı kesilir', tone: 'accent' },
      ],
      summaryEquation: 'ÖTVK m. 13/2: Aradaki vergi farkı + VUK Vergi Ziyaı Cezası',
    },
  },
  {
    number: 71,
    category: 'otv',
    topic: 'Konsinye Satışlarda Vergiyi Doğuran Olay',
    lawRef: '4760 sayılı ÖTVK m. 3/b',
    stem: '4760 sayılı Özel Tüketim Vergisi Kanunu’na göre, aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Bir mal üzerindeki tasarruf hakkının malik veya adına hareket edenlerce, alıcıya veya adına hareket edenlere devredilmesi teslimi ifade eder.' },
      { key: 'B', text: 'Mal teslimi veya ilk iktisap hâllerinde, malın teslimi veya ilk iktisabı vergiyi doğuran olaydır.' },
      { key: 'C', text: 'Malın konsinasyon suretiyle satışında vergiyi doğuran olay, imalatçı tarafından bu malların konsinye işletmelere verildiği anda doğar.' },
      { key: 'D', text: 'Özel tüketim vergisi, Kanun’a ekli listelerde yazılı malların karşılarında gösterilen tutar ve/veya oranlarda alınır.' },
      { key: 'E', text: 'Özel tüketim vergisi, mükelleflerin yazılı beyanları üzerine tarh olunur.' },
    ],
    correctOption: 'C',
    solutionSummary:
      'ÖTV Kanunu m. 3/b gereği komisyoncular vasıtasıyla veya konsinyasyon suretiyle yapılan satışlarda vergiyi doğuran olay, malların konsinye işletmeye verildiği anda değil, KONSİNYE İŞLETME TARAFINDAN NİHAİ ALICIYA TESLİM EDİLDİĞİ ANDA doğar.',
    goldenTip:
      'Konsinyasyon ve komisyonculukta mal emanet olarak verilmiş sayılır; ÖTV malın gerçek alıcıya teslim edildiği anda doğar.',
    visualDesignNote: 'Konsinye Zincir Diyagramı: İmalatçı → (Vergisiz) Konsinye İşletme → (ÖTV Doğar) Alıcı.',
    infographic: {
      kind: 'flow',
      designTitle: 'Konsinye Satışta ÖTV Doğumu (m. 3/b)',
      stages: [
        { title: '1. İmalatçı → Konsinye İşletme', amountText: 'ÖTV Doğmaz', subText: 'Mülkiyet/tasarruf devri henüz gerçekleşmedi', tone: 'muted' },
        { title: '2. Konsinye İşletme → Alıcı', amountText: 'ÖTV DOĞAR', subText: 'Malın alıcıya teslimi anında vergiyi doğuran olay gerçekleşir', tone: 'accent' },
      ],
      summaryEquation: 'C şıkkı konsinye işletmeye verildiği anda doğar dediği için yanlıştır.',
    },
  },
  {
    number: 72,
    category: 'otv',
    topic: 'Mülkiyeti Muhafaza Kaydıyla Satışta Zilyetlik Devri',
    lawRef: '4760 sayılı ÖTVK m. 2/2',
    stem: '4760 sayılı Özel Tüketim Vergisi Kanunu’na göre, “mülkiyeti muhafaza kaydıyla yapılan satışlarda zilyetliğin devri” aşağıdakilerden hangisi sayılır?',
    options: [
      { key: 'A', text: 'İstisna' },
      { key: 'B', text: 'Teslim' },
      { key: 'C', text: 'Vergi İndirimi' },
      { key: 'D', text: 'Hizmet İfası' },
      { key: 'E', text: 'Muafiyet' },
    ],
    correctOption: 'B',
    solutionSummary:
      'ÖTV m. 2/2 (ve benzer şekilde KDV m. 2/2) uyarınca mülkiyeti muhafaza kaydıyla yapılan satışlarda, taksitlerin bitip mülkiyetin geçmesi beklenmez; zilyetliğin alıcıya devri anında TESLİM gerçekleşmiş sayılır.',
    goldenTip:
      'Mülkiyeti muhafaza kaydıyla satışta zilyetlik devri = Teslim (ÖTV ve KDV için aynıdır!).',
    visualDesignNote: 'Zilyetlik Devri = Teslim Eşitliği Kavram Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'Mülkiyeti Muhafaza Kaydıyla Satış (m. 2/2)',
      coreRuleTitle: 'Zilyetliğin Devri = Teslim Sayılır',
      coreRuleBody:
        'Hukuki mülkiyet satıcıda kalsa bile fiili kullanım (zilyetlik) alıcıya geçtiği anda teslim gerçekleşir ve ÖTV doğar.',
      points: [
        { label: 'B: Teslim (ÖTVK m. 2/2)', status: 'correct', detail: 'Zilyetliğin devri anında teslim gerçekleşmiş kabul edilir' },
        { label: 'Taksit Bitimi Beklenmez', status: 'info', detail: 'Vergiyi geciktirmemek için kanun zilyetlik devrini esas almıştır' },
      ],
    },
  },
  {
    number: 73,
    category: 'otv',
    topic: 'ÖTV’de İhracat İstisnası ve Serbest Bölge Tuzağı',
    lawRef: '4760 sayılı ÖTVK m. 5 · ÖTV Genel Tebliğleri',
    stem: '4760 sayılı ÖTV Kanunu’na göre, bu Kanuna ekli listelerdeki malların ihracat teslimleri ile ilgili olarak aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Teslimin; ikametgâhı, işyeri, kanuni ve iş merkezleri yurt dışında olan alıcılara yapılması ve malın TC Gümrük Bölgesinden çıkmış olması şartlarının birlikte gerçekleşmesi halinde teslim ÖTV’den istisnadır.' },
      { key: 'B', text: 'Teslimin, serbest bölgelerdeki alıcılara yapılması ve teslim konusu malın bir serbest bölgeye vasıl olması şartlarının birlikte gerçekleşmesi halinde malların teslimi ÖTV’den istisnadır.' },
      { key: 'C', text: 'Teslimin, yurt içinde bulunan bir işletmenin yurt dışında faaliyet gösteren şubelerine yapılması ve malın TC Gümrük Bölgesinden çıkmış olması halinde teslim ÖTV’den istisnadır.' },
      { key: 'D', text: 'Kanuna ekli listelerdeki malların ihraç edilmeden önce yurt dışındaki alıcı adına hareket edenlere veya bizzat alıcıya işlenmek üzere yurt içinde teslimi ihracat teslimi sayılmadığından ÖTV’den istisna değildir.' },
      { key: 'E', text: 'Kanuna ekli (III) ve (IV) sayılı listelerdeki malların gümrüksüz satış mağazalarına veya bunların depolarına teslimi ÖTV’den istisnadır.' },
    ],
    correctOption: 'B',
    solutionSummary:
      'ÖTV Kanunu m. 5/1’de ihracat teslimi sayılmak için malın "Türkiye Cumhuriyeti Gümrük Bölgesinden çıkmış olması" şarttır; KDV Kanunu’ndaki "serbest bölgeye vasıl olma" ibaresi ÖTV Kanunu’nda YER ALMAZ. Serbest bölgeler TC Gümrük Bölgesi sınırları içinde kabul edildiğinden serbest bölgelere yapılan teslimler ÖTV bakımından ihracat istisnası kapsamında DEĞİLDİR.',
    goldenTip:
      'Büyük Sınav Tuzağı: KDV’de serbest bölgeye teslim İSTİSNADIR; ancak ÖTV’de serbest bölgeye yapılan teslimler İHRACAT İSTİSNASI DEĞİLDİR (ÖTV ödenir)!',
    visualDesignNote: 'KDV vs. ÖTV Serbest Bölge Karşılaştırma Matrisi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Serbest Bölgelere Teslim: KDV vs. ÖTV Farkı',
      coreRuleTitle: 'ÖTV’de Serbest Bölge Teslimi İhracat İstisnası Sayılmaz',
      coreRuleBody:
        'ÖTV m. 5’te sadece TC Gümrük Bölgesinden çıkış şartı vardır; KDV’deki "serbest bölgeye vasıl olma" hükmü ÖTV’de yoktur.',
      points: [
        { label: 'B: Serbest Bölge Teslimi (Yanlış)', status: 'trap', detail: 'ÖTV’den istisna DEĞİLDİR (KDV istisnasıyla karıştırılmamalıdır)' },
        { label: 'A, C, D, E: Doğru ÖTV m. 5 Kuralları', status: 'correct', detail: 'Yurt dışı çıkışlı teslimler, yurt dışı şube, gümrüksüz satış mağazaları (III & IV) istisnadır' },
      ],
    },
  },
  {
    number: 74,
    category: 'otv',
    topic: '(II) Sayılı Liste Araçlarda İlk İktisap Sayılmayan Hal',
    lawRef: '4760 sayılı ÖTVK m. 2/1-b',
    stem: '4760 sayılı ÖTV Kanunu’na göre aşağıdakilerden hangisi Kanun’a ekli (II) sayılı listedeki mallardan kayıt ve tescile tâbi olanların ilk iktisabı sayılmaz?',
    options: [
      { key: 'A', text: 'Distribütör (P) A.Ş. tarafından ithal edilen motosikletin motorlu araç ticareti yapan (T) Bayisi tarafından satmak amacıyla alınması' },
      { key: 'B', text: '(F) Otomotiv A.Ş.’nin ithal ettiği bir binek otomobili kullanmak üzere aktifine alması' },
      { key: 'C', text: 'Bayan (L)’nin Almanya’dan aldığı 2. el binek otomobili Türkiye’de adına kayıt ve tescil ettirmesi' },
      { key: 'D', text: 'Bay (K)’nın icra dairesinin düzenlediği müzayededen daha önce Türkiye’de trafik siciline kayıt ve tescil edilmemiş bir sıfır binek otomobili satın alarak adına kayıt ve tescil ettirmesi' },
      { key: 'E', text: 'Bay (S)’nin yetkili (Y) bayisinden sıfır motosiklet satın alarak adına kayıt ve tescil ettirmesi' },
    ],
    correctOption: 'A',
    solutionSummary:
      'ÖTV m. 2/1-b uyarınca motorlu araç ticareti yapanların "SATMAK AMACIYLA" Türkiye’de henüz kayıt ve tescil edilmemiş araçları distribütörden veya ithalatçıdan alması ilk iktisap SAYILMAZ; ilk iktisap bayinin nihai tüketiciye satışıyla (veya kullanmak üzere aktifine almasıyla) gerçekleşir.',
    goldenTip:
      'Bayinin satmak üzere araç almasında ÖTV doğmaz (ilk iktisap değildir). İster sıfır ister yurt dışından 2. el olsun, Türkiye’de ilk kez kullanılmak/tescil edilmek üzere alınması ilk iktisaptır.',
    visualDesignNote: 'Distribütör → Bayi (İlk İktisap Değil) → Nihai Tüketici (İlk İktisap) Zincir Akışı.',
    infographic: {
      kind: 'flow',
      designTitle: 'Kayıt ve Tescile Tabi Taşıtlarda İlk İktisap (m. 2/1-b)',
      stages: [
        { title: 'Distribütör → Motorlu Araç Bayisi', amountText: 'İlk İktisap SAYILMAZ', subText: 'Satmak amacıyla alım (A Şıkkı · ÖTV doğmaz)', tone: 'muted' },
        { title: 'Bayi → Nihai Alıcı (veya Aktife Alma)', amountText: 'İLK İKTİSAP', subText: 'B, C, D, E şıkları Türkiye’de ilk iktisap sayılır ve ÖTV doğar', tone: 'accent' },
      ],
      summaryEquation: 'Motorlu araç ticareti yapanların satmak amacıyla alımı ilk iktisap değildir.',
    },
  },
  {
    number: 75,
    category: 'otv',
    topic: 'ÖTV Mükellefleri (Tüm Galeriler Tuzağı)',
    lawRef: '4760 sayılı ÖTVK m. 4',
    stem: '4760 sayılı ÖTV Kanunu’na göre aşağıdakilerden hangisi Özel Tüketim Vergisinin mükelleflerinden biri değildir?',
    options: [
      { key: 'A', text: '(I), (III) ve (IV) sayılı listelerdeki malları imal veya ithal edenler' },
      { key: 'B', text: '(II) sayılı listedeki kayıt ve tescile tabi olmayan malları müzayede yoluyla satanlar' },
      { key: 'C', text: '(II) sayılı listedeki kayıt ve tescile tabi olan malları ticari amaçla perakende olarak nihai tüketiciye satan tüm galeriler' },
      { key: 'D', text: '(II) sayılı listedeki kayıt ve tescile tabi olan malları kullanmak üzere ithal edenler' },
      { key: 'E', text: 'Motorlu araç ticareti yapanlar' },
    ],
    correctOption: 'C',
    solutionSummary:
      'ÖTV m. 4’e göre (II) sayılı listedeki kayıt ve tescile tabi araçlarda mükellef; "motorlu araç ticareti yapanlar", kullanmak üzere ithal edenler veya müzayede yoluyla satışını gerçekleştirenlerdir. Türkiye’de daha önce kayıt ve tescil edilmiş (2. el) araçları perakende satan "tüm galeriler" ÖTV mükellefi değildir.',
    goldenTip:
      'İkinci el oto galerileri ÖTV mükellefi değildir; ÖTV yalnızca ilk iktisap aşamasında motorlu araç ticareti yapan yetkili bayi/distribütörler tarafından ödenir.',
    visualDesignNote: 'ÖTV m. 4 Mükellef Sayılanlar vs. 2. El Oto Galerileri Ayrımı.',
    infographic: {
      kind: 'concept',
      designTitle: 'ÖTV Mükellefleri (Kanun m. 4)',
      coreRuleTitle: 'Kayıt ve Tescilli Araçları Satan Tüm Galeriler ÖTV Mükellefi Değildir',
      coreRuleBody:
        'Yalnızca henüz tescil edilmemiş araçlarda ilk iktisap yapan motorlu araç ticareti mükellefleri ÖTV mükellefidir.',
      points: [
        { label: 'C: Tüm Perakende Galeriler (Yanlış)', status: 'trap', detail: 'Tescilli 2. el araç satan galeriler ÖTV mükellefi değildir' },
        { label: 'A, B, D, E: Kanuni Mükellefler', status: 'correct', detail: 'İmal/ithal edenler, müzayede satıcıları, kullanmak için ithal edenler, motorlu araç ticareti yapanlar' },
      ],
    },
  },
  {
    number: 76,
    category: 'otv',
    topic: 'Otomobil İthalatı, Gümrük KDV’si ve İlk İktisap ÖTV Hesaplaması',
    lawRef: '4760 sayılı ÖTVK m. 4, 11 · 3065 sayılı KDVK m. 21',
    stem: 'Distribütör (X) A.Ş., 200.000 TL bedel ile ithal ettiği otomobili bayisi (Y) A.Ş.’ye %18 kârla satmıştır. Bayi (Y) A.Ş. de aynı otomobili nihai tüketici Mithat Bey’e %12 kârla satmıştır. (KDV %20, ÖTV %100). Sırasıyla (1) ÖTV mükellefi, (2) Gümrükte ödenecek KDV ve (3) İlk iktisapta hesaplanacak ÖTV tutarı nedir?',
    options: [
      { key: 'A', text: 'Distribütör (X) A.Ş. – 40.000 TL – 200.000 TL' },
      { key: 'B', text: 'Bayi (Y) A.Ş. – 80.000 TL – 236.000 TL' },
      { key: 'C', text: 'Bayi (Y) A.Ş. – 40.000 TL – 264.320 TL' },
      { key: 'D', text: 'Distribütör (X) A.Ş. – 40.000 TL – 264.320 TL' },
      { key: 'E', text: 'Bayi (Y) A.Ş. – 47.200 TL – 317.184 TL' },
    ],
    correctOption: 'C',
    solutionSummary:
      '1) Kayıt/tescile tabi araçta ilk iktisap satışı tüketiciye yapıldığı aşamada doğar, dolayısıyla ÖTV beyannamesini Bayi (Y) A.Ş. verir. 2) Distribütör (X) ithalat sırasında ÖTV ödemez; gümrükte sadece 200.000 × %20 = 40.000 TL KDV öder. 3) (X) → (Y) satış bedeli = 200.000 × 1,18 = 236.000 TL; (Y) → Mithat Bey satış bedeli (ÖTV Matrahı) = 236.000 × 1,12 = 264.320 TL. ÖTV (%100) = 264.320 TL.',
    goldenTip:
      'Distribütör ithalatta ÖTV ödemediği için gümrük KDV matrahı sadece 200.000 TL’dir (40.000 TL KDV). ÖTV ise son satış bedeli (264.320 TL) üzerinden Bayi (Y) tarafından beyan edilir.',
    visualDesignNote: '3 Aşamalı Değer Zinciri: Gümrük (200B → 40B KDV) → Bayi Alışı (236B) → Nihai Satış (264.320 ÖTV Matrahı).',
    infographic: {
      kind: 'flow',
      designTitle: 'Otomobil Ticaret Zincirinde KDV & ÖTV Hesabı',
      stages: [
        {
          title: '1. İthalat (Gümrük Aşaması)',
          amountText: '40.000 TL Gümrük KDV',
          subText: '200.000 × %20 KDV · Kayıt/tescilli araçta ithalde ÖTV doğmaz',
          tone: 'neutral',
        },
        {
          title: '2. Distribütör (X) → Bayi (Y) (%18 Kâr)',
          amountText: '236.000 TL',
          subText: '200.000 × 1,18 (Satmak için alımda yine ÖTV doğmaz)',
          tone: 'positive',
        },
        {
          title: '3. Bayi (Y) → Mithat Bey (%12 Kâr · İlk İktisap)',
          amountText: '264.320 TL ÖTV',
          subText: '236.000 × 1,12 = 264.320 TL Matrah × %100 ÖTV · Mükellef: Bayi (Y)',
          tone: 'accent',
        },
      ],
      summaryEquation: 'Bayi (Y) A.Ş. – 40.000 TL – 264.320 TL',
    },
  },
];
