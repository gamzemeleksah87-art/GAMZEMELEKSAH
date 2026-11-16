import { TaxQuestion } from '../types/question';

export const questionsPart2: TaxQuestion[] = [
  {
    number: 23,
    category: 'aatuhk',
    topic: 'Limited Şirket Ortaklarının Kamu Borcu Sorumluluğu',
    lawRef: '6183 sayılı AATUHK m. 35',
    stem: 'Aşağıdakilerden hangisi 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun’a göre limited şirket ortaklarının kamu borçlarından doğan sorumluluğuna ilişkin doğru bir ifadedir?',
    options: [
      { key: 'A', text: 'Limited şirket ortakları, kamu borçlarından sadece koydukları sermaye ile sınırlı olarak sorumludur.' },
      { key: 'B', text: 'Limited şirket ortakları, kamu borçlarından hiçbir şekilde sorumlu tutulamaz; sorumluluk sadece şirket tüzel kişiliğine aittir.' },
      { key: 'C', text: 'Limited şirket ortakları, şirketten ayrıldıklarında geçmiş kamu borçlarından hiçbir şekilde sorumlu tutulmaz.' },
      { key: 'D', text: 'Limited şirket ortakları, şirketin ödenmeyen kamu borçlarından sermaye payları oranında ve tüm malvarlıklarıyla müteselsilen sorumludur.' },
      { key: 'E', text: 'Limited şirket ortaklarının kamu borçlarından sorumluluğu, sadece şirket müdürlerinin kusuru hâlinde doğar.' },
    ],
    correctOption: 'D',
    solutionSummary:
      '6183 sayılı Kanun m. 35 uyarınca limited şirket ortakları, şirketten tamamen veya kısmen tahsil edilemeyen veya tahsil edilemeyeceği anlaşılan amme alacağından sermaye hisseleri oranında doğrudan doğruya ve tüm malvarlıklarıyla sorumlu olurlar.',
    goldenTip:
      'Ticaret hukukunda ortak koyduğu sermaye ile sınırlı sorumludur; ancak 6183 m. 35 kamu borçlarında ortağı sermaye payı oranında TÜM MALVARLIĞIYLA sorumlu tutar (şirketten tahsil edilememe şartıyla).',
    visualDesignNote: 'Kavram & Karşılaştırma Kartı: Özel Hukuk Sorumluluğu vs. Kamu Borcu Sorumluluğu (6183 m. 35) ve şıkların elenmesi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Limited Şirket Ortağının Sorumluluk Sınırı',
      coreRuleTitle: '6183 Sayılı Kanun Madde 35 Kuralı',
      coreRuleBody:
        'Şirketten tahsil edilemeyen kamu alacağından ortaklar, sermaye hisseleri oranında ve tüm kişisel malvarlıklarıyla sorumludur.',
      points: [
        { label: 'Sermaye Payı Oranı & Tüm Malvarlığı', status: 'correct', detail: 'Şirket borcunun ortaktaki hisse payı kadarı tüm şahsi varlıktan takip edilir' },
        { label: 'Hisse Devri Durumu', status: 'info', detail: 'Payını devreden ve devralan ortaklar devir öncesi borçlardan müteselsilen sorumludur' },
        { label: 'Tuzak: Sermaye ile Sınırlılık', status: 'trap', detail: 'TTK’daki sermaye ile sınırlı sorumluluk kuralı kamu borçlarında geçerli değildir' },
      ],
    },
  },
  {
    number: 24,
    category: 'aatuhk',
    topic: 'Bağışlama ve İvazsız Tasarrufların Hükümsüzlüğü',
    lawRef: '6183 sayılı AATUHK m. 28',
    stem: '6183 sayılı Kanun’a göre amme alacağını ödememiş borçlulardan, mal beyanında bulunmayan veya mallarının borca yetmediği anlaşılanların ödeme müddetinin başladığı tarihten geriye doğru kaç yıl içinde yaptıkları bağışlamalar ve ivazsız tasarruflar hükümsüzdür?',
    options: [
      { key: 'A', text: 'Bir' },
      { key: 'B', text: 'İki' },
      { key: 'C', text: 'Üç' },
      { key: 'D', text: 'Dört' },
      { key: 'E', text: 'Beş' },
    ],
    correctOption: 'B',
    solutionSummary:
      '6183 sayılı Kanun m. 28 uyarınca amme alacağını ödememiş borçluların, ödeme müddetinin başladığı tarihten veya hakkındaki takip muamelelerinden geriye doğru 2 yıl içinde yaptıkları bağışlamalar ve ivazsız tasarruflar hükümsüzdür.',
    goldenTip:
      'İvazsız tasarrufların (bağışlamaların) iptalinde geriye dönük süre 2 yıldır (aynı maddede akrabalarla yapılan bazı tasarruflar da bağışlama hükmündedir).',
    visualDesignNote: 'Geriye Dönük Zaman Çizelgesi: Ödeme müddetinin başladığı tarihten 2 yıl geriye tarama penceresi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'İvazsız Tasarrufların İptali (2 Yıl Penceresi)',
      spanLabel: 'Ödeme Müddeti Başlangıcından Geriye Doğru 2 Yıl',
      nodes: [
        { dateLabel: 'T − 2 Yıl', title: 'Hükümsüzlük Sınırı Başlangıcı', detail: 'Bu tarihten sonraki bağışlamalar iptale tabidir', highlight: true },
        { dateLabel: 'T − 2 Yıl → T', title: 'İvazsız Tasarruf İnceleme Dönemi', detail: 'Karşılıksız devirler ve düşük bedelli akraba satışları' },
        { dateLabel: 'T (Vade/Takip)', title: 'Ödeme Müddeti Başlangıcı', detail: '6183 m. 28 uyarınca geriye dönük 2 yıl taranır', highlight: true },
      ],
      keyTakeaway: 'Ödeme müddetinin başladığı tarihten geriye doğru 2 yıl içindeki bağışlamalar hükümsüzdür.',
    },
  },
  {
    number: 25,
    category: 'aatuhk',
    topic: 'Tecil Müessesesi',
    lawRef: '6183 sayılı AATUHK m. 48',
    stem: '6183 sayılı Kanun’a göre amme borcunun vadesinde ödenmesi amme borçlusunu çok zor duruma düşürecekse, borçlu tarafından yazı ile istenmiş ve teminat gösterilmiş olmak şartıyla, alacaklı amme idaresince; amme alacağının 36 ayı geçmemek üzere ve faiz alınarak ertelenmesi hangi kavram ile ifade edilir?',
    options: [
      { key: 'A', text: 'Terkin' },
      { key: 'B', text: 'Teminat' },
      { key: 'C', text: 'Tecil' },
      { key: 'D', text: 'İptal' },
      { key: 'E', text: 'Silinme' },
    ],
    correctOption: 'C',
    solutionSummary:
      '6183 sayılı Kanun m. 48’de tanımlanan bu erteleme ve taksitlendirme kurumu "Tecil"dir. Şartları: çok zor durum, yazılı talep, teminat, azami 36 ay süre ve tecil faizi.',
    goldenTip:
      'Tecil şartları: (1) Çok zor durum, (2) Yazılı talep, (3) Teminat (50.000 TL üstü kısım için %50), (4) En fazla 36 ay, (5) Tecil faizi.',
    visualDesignNote: '4 Şart + Sonuç Akış Kartı: Çok zor durum + Yazılı talep + Teminat + Tecil faizi → Azami 36 Ay Tecil.',
    infographic: {
      kind: 'concept',
      designTitle: '6183 m. 48 Tecil Kurumu Şartları',
      coreRuleTitle: 'Tecil = Şartlı Erteleme ve Taksitlendirme',
      coreRuleBody:
        'Amme borcunun en fazla 36 ay süreyle, tecil faizi uygulanarak ertelenmesi işlemidir.',
      points: [
        { label: 'Çok Zor Durum & Yazılı Talep', status: 'correct', detail: 'Borçlunun mali likiditesini sarsacak durum yazılı olarak talep edilmelidir' },
        { label: 'Teminat & Azami 36 Ay', status: 'correct', detail: 'Teminat gösterilir ve süre 36 ayı aşamaz' },
        { label: 'Terkin ile Farkı', status: 'trap', detail: 'Terkin borcu tamamen ortadan kaldırır; tecil ise faizli ertelemedir' },
      ],
    },
  },
  {
    number: 26,
    category: 'aatuhk',
    topic: 'Asgari Ücreti Aşmayan Aylık Gelirlerde Haciz Sınırı',
    lawRef: '6183 sayılı AATUHK m. 71',
    stem: '6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun’a göre, asgari ücreti aşmayan aylık gelirlerin ne kadarlık kısmından fazlası haczolunamaz?',
    options: [
      { key: 'A', text: 'Onda birinden' },
      { key: 'B', text: 'Dörtte birinden' },
      { key: 'C', text: 'Yarısından' },
      { key: 'D', text: 'Üçte ikisinden' },
      { key: 'E', text: 'Dörtte üçünden' },
    ],
    correctOption: 'A',
    solutionSummary:
      '6183 sayılı Kanun m. 71 uyarınca aylıklar, ödenekler ve her çeşit ücretlerin üçte birinden az, dörtte birinden çok olmamak üzere haczedilebilir. Ancak asgari ücreti aşmayan aylık gelirlerin ONDA BİRİNDEN (1/10) fazlası haczolunamaz.',
    goldenTip:
      'Genel ücret haczi sınırı 1/4 ile 1/3 arasıdır; ancak "asgari ücreti aşmayan" aylık gelirlerde üst sınır 1/10 (onda bir)’dur.',
    visualDesignNote: 'Kademeli Oran Karşılaştırması: Normal Maaş (1/4 – 1/3) vs. Asgari Ücret Altı (Azami 1/10).',
    infographic: {
      kind: 'concept',
      designTitle: 'Aylık Gelirlerde Haciz Sınırı (m. 71)',
      coreRuleTitle: 'Asgari Ücreti Aşmayan Gelirde Üst Sınır: 1/10',
      coreRuleBody:
        'Asgari ücretlinin geçimini korumak için aylık gelirinin en fazla %10’u (onda biri) haczedilebilir.',
      points: [
        { label: 'Asgari Ücreti Aşmayan Gelir', status: 'correct', detail: 'Onda birinden (1/10) fazlası haczolunamaz' },
        { label: 'Normal Aylık / Ücretler', status: 'info', detail: 'Üçte birinden (1/3) çok, dörtte birinden (1/4) az olamaz' },
        { label: 'Tuzak: Dörtte Bir (1/4)', status: 'trap', detail: '1/4 genel taban orandır, asgari ücreti aşmayan gelir sınırı değildir' },
      ],
    },
  },
  {
    number: 27,
    category: 'aatuhk',
    topic: 'Tahsil Zamanaşımını Kesen Nedenler',
    lawRef: '6183 sayılı AATUHK m. 103',
    stem: 'Aşağıdakilerden hangisi 6183 sayılı Kanun’a göre tahsil zamanaşımını kesen nedenlerden biri değildir?',
    options: [
      { key: 'A', text: 'Ödeme emri tebliği' },
      { key: 'B', text: 'Haciz tatbiki' },
      { key: 'C', text: 'Kamu (amme) alacağının teminata bağlanması' },
      { key: 'D', text: 'Mal bildirimi, mal edinme ve mal artmalarının bildirilmesi' },
      { key: 'E', text: 'Borçlunun ölmesi' },
    ],
    correctOption: 'E',
    solutionSummary:
      '6183 sayılı Kanun m. 103’te tahsil zamanaşımını kesen haller tek tek sayılmıştır: ödeme, haciz tatbiki, cebren tahsilat, ödeme emri tebliği, mal bildirimi/mal edinme bildirimi, teminata bağlanma, yargı bozma kararı vb. Borçlunun ölmesi zamanaşımını kesmez.',
    goldenTip:
      'Borçlunun ölümü halinde borç mirası reddetmeyen mirasçılara geçer ve takip devam eder; ölüm tek başına zamanaşımını kesen bir işlem değildir.',
    visualDesignNote: 'Kesen vs. Kesmeyen Ayrım Matrisi: 6183 m. 103’te sayılan 4 kesen işlem ve istisna olan "Ölüm".',
    infographic: {
      kind: 'concept',
      designTitle: 'Tahsil Zamanaşımını Kesen Haller (m. 103)',
      coreRuleTitle: 'Borçlunun Ölmesi Zamanaşımını Kesmez',
      coreRuleBody:
        'Kesilme halinde süre kesilmenin rastladığı takvim yılını takip eden yılın başından itibaren yeniden 5 yıl olarak işler.',
      points: [
        { label: 'Ödeme Emri Tebliği & Haciz Tatbiki', status: 'correct', detail: '6183 m. 103 uyarınca zamanaşımını keser' },
        { label: 'Teminat & Mal Bildirimi', status: 'correct', detail: 'Teminata bağlama ve mal artışı bildirimleri keser' },
        { label: 'Borçlunun Ölmesi', status: 'trap', detail: 'm. 103’te sayılan kesme nedenlerinden biri DEĞİLDİR' },
      ],
    },
  },
  {
    number: 28,
    category: 'aatuhk',
    topic: 'İhtiyati Hacze İtiraz Süresi',
    lawRef: '6183 sayılı AATUHK m. 15 (7061 s.K. değişikliği)',
    stem: '6183 sayılı Kanun’a göre, haklarında ihtiyati haciz tatbik olunanlar haczin tatbik tarihinden itibaren kaç gün içinde alacaklı tahsil dairesine ait itiraz işlerine bakan vergi mahkemesi nezdinde ihtiyati haciz sebebine itiraz edebilirler?',
    options: [
      { key: 'A', text: '7 gün' },
      { key: 'B', text: '10 gün' },
      { key: 'C', text: '15 gün' },
      { key: 'D', text: '30 gün' },
      { key: 'E', text: '60 gün' },
    ],
    correctOption: 'C',
    solutionSummary:
      '7061 sayılı Kanunla değiştirilen 6183 sayılı Kanun m. 15 uyarınca ihtiyati haciz sebebine karşı itiraz/dava açma süresi 15 gündür (gıyapta yapılan hacizlerde de tebliğ tarihinden itibaren 15 gündür).',
    goldenTip:
      '7061 sayılı Kanunla 6183’teki pek çok 7 günlük süre (ihtiyati hacze itiraz, ödeme emrine itiraz, teminatın paraya çevrilmesi vb.) 15 güne çıkarılmıştır.',
    visualDesignNote: 'Süre Zaman Çizelgesi: İhtiyati haciz tatbikinden (veya gıyapta tebliğinden) itibaren 15 günlük itiraz penceresi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'İhtiyati Hacze İtiraz Süresi (m. 15)',
      spanLabel: '7061 Sayılı Kanun Sonrası Güncel Süre: 15 Gün',
      nodes: [
        { dateLabel: '0. Gün', title: 'İhtiyati Haciz Tatbiki / Tebliği', detail: 'Hazırda tatbik tarihi, gıyapta tebliğ tarihi başlar', highlight: true },
        { dateLabel: '1–15. Gün', title: 'Vergi Mahkemesine Başvuru', detail: 'Sadece ihtiyati haciz sebebine itiraz edilebilir', highlight: true },
        { dateLabel: 'Eski Bilgi Uyarısı', title: '7 Gün Tuzağı', detail: 'Eski mevzuattaki 7 gün süresi 7061 s.K. ile 15 güne çıkmıştır' },
      ],
      keyTakeaway: 'İhtiyati hacze itiraz ve dava açma süresi 15 gündür.',
    },
  },
  {
    number: 29,
    category: 'aatuhk',
    topic: 'Cebren Tahsil Sürecinin Başlangıcı',
    lawRef: '6183 sayılı AATUHK m. 54 ve m. 55',
    stem: '6183 sayılı Kanun’a göre, vadesinde ödenmeyen kamu alacağına ilişkin cebren tahsil süreci aşağıdakilerden hangisi ile başlar?',
    options: [
      { key: 'A', text: 'Kamu alacağına ilişkin ödeme emrinin borçluya tebliğ edilmesi' },
      { key: 'B', text: 'Borçlunun borcu için hata düzeltme yoluna başvurması' },
      { key: 'C', text: 'Borçlunun borcunun terkini için yargı yoluna başvurması' },
      { key: 'D', text: 'Borçlunun borca karşılık gelen malvarlığının haczedilmesi' },
      { key: 'E', text: 'Borçlunun iflas etmesi' },
    ],
    correctOption: 'A',
    solutionSummary:
      '6183 m. 55 uyarınca amme alacağını vadesinde ödemeyenlere 15 gün içinde borçlarını ödemeleri veya mal bildiriminde bulunmaları lüzumu bir "Ödeme Emri" ile tebliğ olunur. Cebren takip süreci ödeme emri tebliği ile başlar.',
    goldenTip:
      'Ödeme emri tebliğ edilmeden doğrudan hacze geçilemez (teminatlı alacaklarda ise m. 56’ya göre teminatın paraya çevrileceği bildirimi yapılır).',
    visualDesignNote: '3 Adımlı Cebren Takip Akışı: Vade Geçimi → Ödeme Emri Tebliği (15 Gün) → Haciz / Paraya Çevirme.',
    infographic: {
      kind: 'flow',
      designTitle: 'Cebren Tahsil Süreci Başlangıç Adımları',
      stages: [
        { title: '1. Vadenin Dolması', amountText: 'Ödeme Yapılmadı', subText: 'Gecikme zammı işlemeye başlar', tone: 'muted' },
        { title: '2. Ödeme Emri Tebliği (m. 55)', amountText: 'Sürecin Başlangıcı', subText: '15 gün içinde öde veya mal bildirimi yap', tone: 'accent' },
        { title: '3. Cebri İcra (Haciz)', amountText: 'Malvarlığı Takibi', subText: 'Ödeme emrine uyulmazsa haciz uygulanır', tone: 'neutral' },
      ],
      summaryEquation: 'Vade Sonu → Ödeme Emri Tebliği (Başlangıç) → 15 Gün Süre → Haciz',
    },
  },
  {
    number: 30,
    category: 'aatuhk',
    topic: 'Gecikme Zammı Uygulama Esasları',
    lawRef: '6183 sayılı AATUHK m. 51',
    stem: '6183 sayılı Kanun’a göre, gecikme zammının uygulanmasında aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Amme alacağının ödeme müddeti içinde ödenmeyen kısmına vadenin bitim tarihinden itibaren her ay için ayrı ayrı kanuni oranda gecikme zammı tatbik olunur.' },
      { key: 'B', text: 'Ay kesirlerine isabet eden gecikme zammı günlük olarak hesap edilir.' },
      { key: 'C', text: 'Aslın ödenmiş olması gecikme zammının takip ve tahsiline mani değildir.' },
      { key: 'D', text: 'Gecikme zammının tatbik müddeti, tecilde tecilin yapıldığı, iflas halinde iflasın açıldığı, aciz halinde bu durumun sabit olduğu güne kadar olan müddettir.' },
      { key: 'E', text: 'Gecikme zammının önceden borçluya bildirilmesi şarttır.' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Gecikme zammı vade tarihinin bitiminden itibaren kanun gereği kendiliğinden işler; idarenin önceden borçluya ihtar veya bildirim yapması şart değildir. Diğer tüm seçenekler m. 51 hükümlerine birebir uygundur.',
    goldenTip:
      'Gecikme zammı kendiliğinden (otomatik) doğar; ön bildirim şartı yoktur. Ay kesirleri günlük hesaplanır ve asıl borç ödense bile birikmiş zam takip edilebilir.',
    visualDesignNote: 'Doğru vs. Yanlış Kural Kartı: 6183 m. 51’in 4 doğru kuralı ve 1 yanlış bildirim iddiası.',
    infographic: {
      kind: 'concept',
      designTitle: 'Gecikme Zammı Kuralları (m. 51)',
      coreRuleTitle: 'Kendiliğinden İşler · Önceden Bildirim Şart Değildir',
      coreRuleBody:
        'Vadenin dolmasıyla birlikte kanuni oran üzerinden aylık, ay kesirlerinde ise günlük olarak otomatik hesaplanır.',
      points: [
        { label: 'Ay Kesirleri Günlük Hesaplanır', status: 'correct', detail: 'Ayın tamamı değil, gecikilen gün sayısı dikkate alınır' },
        { label: 'Tecil / İflas / Aciz Durdurur', status: 'correct', detail: 'Bu hallerin oluştuğu tarihte gecikme zammı süresi durur' },
        { label: 'Yanlış İddia: Ön Bildirim Şartı', status: 'trap', detail: 'Gecikme zammı için borçluya önceden bildirim yapılması gerekmez' },
      ],
    },
  },
  {
    number: 31,
    category: 'aatuhk',
    topic: 'Tahsil Zamanaşımını Kesen vs. Durduran Haller',
    lawRef: '6183 sayılı AATUHK m. 103 ve m. 104',
    stem: 'Aşağıdakilerden hangisi 6183 sayılı Kanun’a göre tahsil zamanaşımını kesen hallerden biri değildir?',
    options: [
      { key: 'A', text: 'Mal bildirimi' },
      { key: 'B', text: 'Haciz tatbikı' },
      { key: 'C', text: 'Amme alacağının teminata bağlanması' },
      { key: 'D', text: 'Borçlunun yabancı memlekette bulunması' },
      { key: 'E', text: 'Ödeme emri tebliği' },
    ],
    correctOption: 'D',
    solutionSummary:
      'Borçlunun yabancı memlekette bulunması, hileli iflas etmesi veya terekesinin tasfiyesi dolayısıyla hakkında takibat yapılmasına imkân bulunmaması 6183 m. 104 uyarınca tahsil zamanaşımını DURDURAN (işlemesini durduran) sebeplerdir; kesen sebepler (m. 103) değildir.',
    goldenTip:
      'Kesen (m. 103) = Süre sıfırlanır ve izleyen yıl başından yeniden 5 yıl başlar. Durduran (m. 104: Yabancı memleket / hileli iflas / tereke) = Süre olduğu yerde bekler, engel kalkınca kaldığı yerden devam eder.',
    visualDesignNote: 'Kesen (Sıfırlama) vs. Durduran (Duraklatma) Karşılaştırma Diyagramı.',
    infographic: {
      kind: 'concept',
      designTitle: 'Kesme (m. 103) vs. Durma (m. 104) Ayrımı',
      coreRuleTitle: 'Yabancı Memlekette Bulunmak Süreyi DURDURUR, Kesmez',
      coreRuleBody:
        'Takip engeli yaratan haller (yabancı ülke, hileli iflas, tereke tasfiyesi) zamanaşımını durdurur.',
      points: [
        { label: 'Kesen Haller (m. 103)', status: 'correct', detail: 'Mal bildirimi, haciz, teminat, ödeme emri tebliği süreyi sıfırlar' },
        { label: 'Durduran Haller (m. 104)', status: 'trap', detail: 'Borçlunun yabancı memlekette bulunması süreyi durdurur' },
        { label: 'Yeniden Başlama Farkı', status: 'info', detail: 'Durma kalkınca eski süreye eklenerek devam eder' },
      ],
    },
  },
  {
    number: 32,
    category: 'aatuhk',
    topic: 'Amme Alacağını Güvence Altına Alan Önlemler',
    lawRef: '6183 sayılı AATUHK m. 9–36',
    stem: '6183 sayılı Kanun’a göre, aşağıdakilerden hangisi amme alacağını güvence altına alan önlemlerden biri değildir?',
    options: [
      { key: 'A', text: 'İhtiyati haciz' },
      { key: 'B', text: 'Tasarrufun iptali' },
      { key: 'C', text: 'Rüçhan hakkı' },
      { key: 'D', text: 'Teminat' },
      { key: 'E', text: 'Uzlaşma' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Teminat isteme, ihtiyati haciz, ihtiyati tahakkuk, rüçhan hakkı, tasarrufun iptali davası ve amme alacağı ödenmeden yapılmayacak işlemler 6183 sayılı Kanun’daki güvence (koruma) önlemleridir. Uzlaşma ise 213 sayılı VUK’ta yer alan idari çözüm yoludur.',
    goldenTip:
      'Uzlaşma bir tahsil güvence önlemi değil, VUK Ek m. 1 ve Ek m. 11’de düzenlenen tarhiyat öncesi/sonrası uyuşmazlık çözüm yoludur.',
    visualDesignNote: '6183 Koruma Kalkanı Matrisi: 4 güvence önlemi ile VUK müessesesi olan Uzlaşmanın ayrıştırılması.',
    infographic: {
      kind: 'concept',
      designTitle: 'Amme Alacağı Koruma Önlemleri (6183)',
      coreRuleTitle: 'Uzlaşma 213 Sayılı VUK Müessesesidir',
      coreRuleBody:
        '6183 sayılı Kanun tahsil güvenliğini sağlamak için teminat, ihtiyati haciz, ihtiyati tahakkuk, rüçhan hakkı ve iptal davası öngörür.',
      points: [
        { label: '6183 Güvence Önlemleri', status: 'correct', detail: 'İhtiyati haciz, Tasarrufun iptali, Rüçhan hakkı, Teminat, İhtiyati tahakkuk' },
        { label: 'Uzlaşma (VUK Ek m. 1)', status: 'trap', detail: '6183 koruma önlemi değildir; tarh aşaması çözüm yoludur' },
      ],
    },
  },
  {
    number: 33,
    category: 'aatuhk',
    topic: 'Tahsil Zamanaşımını Kesen Haller (Tekrar Soru)',
    lawRef: '6183 sayılı AATUHK m. 103–104',
    stem: 'Aşağıdakilerden hangisi 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun’a göre tahsil zamanaşımını kesen hallerden biri değildir?',
    options: [
      { key: 'A', text: 'Mal bildirimi' },
      { key: 'B', text: 'Haciz tatbikı' },
      { key: 'C', text: 'Amme alacağının teminata bağlanması' },
      { key: 'D', text: 'Borçlunun yabancı memlekette bulunması' },
      { key: 'E', text: 'Ödeme emri tebliği' },
    ],
    correctOption: 'D',
    solutionSummary:
      '31. soru ile aynı metne sahip olan bu soruda da borçlunun yabancı memlekette bulunması tahsil zamanaşımını kesen değil, 6183 m. 104 uyarınca durduran sebeptir.',
    goldenTip:
      'Kaynak PDF’te 31 ve 33 numaralı sorular aynı kalıpta yer almaktadır; kural değişmez: Yabancı ülke = Durma sebebi (m. 104).',
    visualDesignNote: 'Hızlı Pekiştirme Kartı: Kesme (m. 103) ile Durma (m. 104) karşılaştırma özeti.',
    infographic: {
      kind: 'concept',
      designTitle: '6183 m. 103 vs. m. 104 Hızlı Tekrar',
      coreRuleTitle: 'Yabancı Memlekette Bulunma = Durma Sebebi',
      coreRuleBody:
        'Mal bildirimi, haciz, teminat ve ödeme emri tebliği zamanaşımını keser; borçlunun yurt dışında bulunması ise zamanaşımını durdurur.',
      points: [
        { label: 'm. 103 Kesen İşlemler', status: 'correct', detail: 'Mal bildirimi, haciz, teminat, ödeme emri tebliği' },
        { label: 'm. 104 Durduran Haller', status: 'trap', detail: 'Borçlunun yabancı memlekette bulunması (kesmez, durdurur)' },
      ],
    },
  },
  {
    number: 34,
    category: 'aatuhk',
    topic: 'Ödeme Emrine İtiraz Sebepleri (Sınırlı Sayım)',
    lawRef: '6183 sayılı AATUHK m. 58',
    stem: 'I. Vergi borcunun olmadığı · II. Vergi borcunun kısmen ödendiği · III. Verginin hukuka aykırı olduğu · IV. Vergi tarhiyatının hatalı olduğu · V. Vergi borcunun zamanaşımına uğradığı. Yukarıdakilerden hangileri ödeme emrine itiraz sebepleri arasında yer alabilir?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'II ve III' },
      { key: 'C', text: 'I, II ve V' },
      { key: 'D', text: 'I, III ve V' },
      { key: 'E', text: 'II, III ve IV' },
    ],
    correctOption: 'C',
    solutionSummary:
      '6183 m. 58’e göre kendisine ödeme emri tebliğ olunan şahıs 15 gün içinde yalnızca şu 3 gerekçeyle dava açabilir: (1) Böyle bir borcu olmadığı (I), (2) Kısmen ödediği (II), (3) Zamanaşımına uğradığı (V). Tarhiyatın hukuka aykırılığı veya hatası ödeme emri aşamasında ileri sürülemez.',
    goldenTip:
      'Ödeme Emrine İtirazın 3 Kuralı: "Borcum Yok / Kısmen Ödedim / Zamanaşımına Uğradı". Esasa ilişkin tarhiyat itirazları ihbarname aşamasında yapılmalıdır.',
    visualDesignNote: '3 Geçerli İtiraz vs. 2 Geçersiz İtiraz Filtre Matrisi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Ödeme Emrine İtirazda Sınırlı 3 Sebep (m. 58)',
      coreRuleTitle: 'Yalnızca Borç Yokluğu, Kısmi Ödeme ve Zamanaşımı',
      coreRuleBody:
        'Kesinleşmiş amme alacağının tahsil aşamasında verginin esasına veya tarhiyat hatasına yönelik itiraz dinlenmez.',
      points: [
        { label: 'I, II ve V: Geçerli İtirazlar', status: 'correct', detail: 'Borcu olmadığı, kısmen ödendiği, zamanaşımına uğradığı' },
        { label: 'III ve IV: Geçersiz İtirazlar', status: 'trap', detail: 'Hukuka aykırılık ve tarhiyat hatası ödeme emri itirazı değildir' },
      ],
    },
  },
  {
    number: 35,
    category: 'aatuhk',
    topic: 'Teminatlı Alacaklarda Ödeme Bildirimi Süresi',
    lawRef: '6183 sayılı AATUHK m. 56 (7061 s.K.)',
    stem: '6183 sayılı Kanun’a göre karşılığında teminat gösterilmiş bulunan amme alacağı vadesinde ödenmediği takdirde, borcun ödenmesi aksi hâlde teminatın paraya çevrileceği borçluya bildirilir. Bu bildirimde ödeme yapması için borçluya kaç gün verilir?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '7' },
      { key: 'C', text: '15' },
      { key: 'D', text: '30' },
      { key: 'E', text: '60' },
    ],
    correctOption: 'C',
    solutionSummary:
      '6183 sayılı Kanun m. 56 uyarınca teminatlı alacaklarda borçluya borcunu ödemesi, aksi halde teminatın paraya çevrileceği veya diğer şekillerle cebren tahsile devam olunacağı bildirilir ve 15 gün süre verilir (7061 s.K. öncesi 7 gündü).',
    goldenTip:
      '6183 m. 55 (Ödeme Emri), m. 56 (Teminatın Paraya Çevrilmesi) ve m. 15 (İhtiyati Hacze İtiraz) sürelerinin tamamı 7061 sayılı Kanunla 15 gün olmuştur.',
    visualDesignNote: 'Bildirim Süresi Zaman Çizelgesi: Vade sonrası tebliğden itibaren 15 günlük son ödeme penceresi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Teminatlı Alacakta Paraya Çevirme Süresi (m. 56)',
      spanLabel: 'Bildirim Tebliğinden İtibaren 15 Gün',
      nodes: [
        { dateLabel: '0. Gün', title: 'Bildirim Tebliği', detail: 'Teminatın paraya çevrileceği borçluya bildirilir' },
        { dateLabel: '1–15. Gün', title: 'Son Ödeme Süresi', detail: '7061 s.K. ile 7 günden 15 güne çıkarılmıştır', highlight: true },
        { dateLabel: '16. Gün +', title: 'Teminatın Paraya Çevrilmesi', detail: 'Ödenmezse teminat nakde çevrilir', highlight: true },
      ],
      keyTakeaway: 'Teminatlı alacaklarda borçluya tanınan ödeme süresi 15 gündür.',
    },
  },
  {
    number: 36,
    category: 'aatuhk',
    topic: 'Ödeme Emrine İtiraz Edilemeyecek Durum',
    lawRef: '6183 sayılı AATUHK m. 58',
    stem: '6183 sayılı Kanun’a göre, aşağıdakilerden hangisi kendisine ödeme emri tebliğ olunan şahsın ödeme emrine itiraz gerekçesi olamaz?',
    options: [
      { key: 'A', text: 'Böyle bir borcu olmadığı' },
      { key: 'B', text: 'Borcu tamamen ödediği' },
      { key: 'C', text: 'Tarhiyatın vergi hukukuna uygun olmadığı' },
      { key: 'D', text: 'Borcu kısmen ödediği' },
      { key: 'E', text: 'Borcun zamanaşımına uğradığı' },
    ],
    correctOption: 'C',
    solutionSummary:
      '6183 m. 58 gereği ödeme emrine sadece borcun olmadığı (veya tamamen ödendiği), kısmen ödendiği veya zamanaşımına uğradığı gerekçeleriyle itiraz edilebilir. "Tarhiyatın vergi hukukuna uygun olmadığı" iddiası tarh/ihbarname aşamasına aittir, ödeme emrine itiraz gerekçesi olamaz.',
    goldenTip:
      'Ödeme emri kesinleşmiş alacaklar için gönderilir; bu yüzden tarhiyatın hukuka uygunluğu bu aşamada tartışılamaz.',
    visualDesignNote: 'İtiraz Filtresi Kartı: 4 geçerli ödeme/zamanaşımı savunmasına karşı "Tarhiyatın Hukukiliği"nin reddedilmesi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Ödeme Emrinde Tartışılamayacak Konu',
      coreRuleTitle: 'Tarhiyatın Hukuka Uygunluğu İtiraz Gerekçesi Olamaz',
      coreRuleBody:
        'Vergi borcu kesinleştikten sonra gönderilen ödeme emrine karşı yalnızca borcun mevcudiyeti, ödemesi veya zamanaşımı ileri sürülebilir.',
      points: [
        { label: 'Kabul Edilen Gerekçeler', status: 'correct', detail: 'Borç yok, tamamen/kısmen ödendi, zamanaşımına uğradı' },
        { label: 'Reddedilen Gerekçe (C)', status: 'trap', detail: 'Tarhiyatın vergi hukukuna uygun olmadığı ileri sürülemez' },
      ],
    },
  },
  {
    number: 37,
    category: 'aatuhk',
    topic: 'İhtiyati Haciz Sebepleri vs. Hapsen Tazyik',
    lawRef: '6183 sayılı AATUHK m. 13 ve m. 60',
    stem: '6183 sayılı Kanun’a göre, aşağıdakilerden hangisi ihtiyati haciz uygulanmasını gerektiren hallerden biri değildir?',
    options: [
      { key: 'A', text: 'Teşebbüsün muvazaalı olduğu ve hakikatte başkasına aidiyeti hakkında deliller elde edilmişse' },
      { key: 'B', text: 'Borçlunun belli ikametgahının olmaması' },
      { key: 'C', text: 'Mal bildirimine çağrılan borçlunun belli müddet içinde mal bildiriminde bulunmamış veya noksan bildirimde bulunmuş olması' },
      { key: 'D', text: 'Borçlu kaçmışsa veya kaçması, mallarını kaçırması ve hileli yollara sapması ihtimalleri varsa' },
      { key: 'E', text: 'Borçludan teminat gösterilmesi istendiği halde belli müddette teminat veya kefil göstermemiş yahut şahsi kefalet teklifi veya gösterdiği kefil kabul edilmemişse' },
    ],
    correctOption: 'C',
    solutionSummary:
      '6183 m. 13’te sayılan ihtiyati haciz nedenleri arasında teminat vermemek, ikametgâhı olmamak, kaçmak/mal kaçırmak ve muvazaalı teşebbüs yer alır. Ancak mal bildiriminde bulunmamak ihtiyati haciz sebebi değil, 6183 m. 60’ta düzenlenen "hapsen tazyik" sebebidir (yine m. 13/7’de ancak mal bildiriminde mal göstermeyip sonradan malı çıkması veya gerçeğe aykırı bildirim vs. değil, doğrudan mal bildiriminde bulunmamanın yaptırımı m. 60 hapsen tazyiktir).',
    goldenTip:
      'Mal bildiriminde bulunmamanın doğrudan yaptırımı İhtiyati Haciz değil, 6183 m. 60 uyarınca bir defaya mahsus 3 ayı geçmemek üzere HAPSEN TAZYİK’tir.',
    visualDesignNote: 'Müessese Ayrım Kartı: m. 13 İhtiyati Haciz Sebepleri ile m. 60 Hapsen Tazyik Sebebinin net ayrımı.',
    infographic: {
      kind: 'concept',
      designTitle: 'm. 13 İhtiyati Haciz vs. m. 60 Hapsen Tazyik',
      coreRuleTitle: 'Mal Bildiriminde Bulunmamak Hapsen Tazyik Sebebidir',
      coreRuleBody:
        'Süresinde mal bildiriminde bulunmayan borçluya 6183 m. 60 gereği hapsen tazyik uygulanır; bu durum m. 13’te yer alan bir ihtiyati haciz nedeni değildir.',
      points: [
        { label: 'm. 13 İhtiyati Haciz Sebepleri', status: 'correct', detail: 'Teminat vermeme, ikametgah yokluğu, kaçma/hile, muvazaalı teşebbüs' },
        { label: 'm. 60 Hapsen Tazyik (C Şıkkı)', status: 'trap', detail: 'Mal bildiriminde bulunmama veya noksan bildirim hapsen tazyik gerektirir' },
      ],
    },
  },
  {
    number: 38,
    category: 'aatuhk',
    topic: 'İhtiyati Haciz Sebeplerine Karşı Dava Açma Süreleri',
    lawRef: '6183 sayılı AATUHK m. 15',
    stem: '6183 sayılı Kanun’a göre, ihtiyati haciz sebeplerine karşı dava; haczin tatbik edildiği tarihten itibaren ---- gün içinde, gıyapta yapılan hacizlerde ise haczin tebliğ edildiği tarihten itibaren ---- gün içinde ilgili vergi mahkemesinde açılmalıdır.',
    options: [
      { key: 'A', text: '7 / 7' },
      { key: 'B', text: '15 / 15' },
      { key: 'C', text: '15 / 30' },
      { key: 'D', text: '30 / 15' },
      { key: 'E', text: '30 / 30' },
    ],
    correctOption: 'B',
    solutionSummary:
      '7061 sayılı Kanun ile 6183 m. 15’te yapılan değişiklik sonrası hem hazırda yapılan ihtiyati hacizlerde tatbik tarihinden itibaren, hem de gıyapta yapılan hacizlerde tebliğ tarihinden itibaren dava açma süresi 15 / 15 gündür.',
    goldenTip:
      'Hazırda tatbikten 15 gün, gıyapta tebliğden 15 gün: Her iki boşluğun da cevabı 15’tir.',
    visualDesignNote: 'Çift Başlangıçlı Zaman Çizelgesi: Hazırda Tatbik (+15 gün) ve Gıyapta Tebliğ (+15 gün) paralelliği.',
    infographic: {
      kind: 'timeline',
      designTitle: 'İhtiyati Hacizde İki Durum, Tek Süre: 15 / 15',
      spanLabel: 'Her İki Durumda da 15 Günlük Dava Süresi',
      nodes: [
        { dateLabel: 'Durum 1: Hazırda', title: 'Haczin Tatbik Tarihi + 15 Gün', detail: 'Borçlunun huzurunda yapılan hacizde tatbik günü başlar', highlight: true },
        { dateLabel: 'Durum 2: Gıyapta', title: 'Haczin Tebliğ Tarihi + 15 Gün', detail: 'Borçlu yokken yapılan hacizde tebligat günü başlar', highlight: true },
      ],
      keyTakeaway: 'Doğru tamamlama: 15 / 15 (7061 sayılı Kanun sonrası güncel süre).',
    },
  },
];
