import { TaxQuestion } from '../types/question';

export const questionsPart3: TaxQuestion[] = [
  {
    number: 39,
    category: 'kdv',
    topic: 'KDV İndirim Hakkının Kullanılabileceği En Son Dönem',
    lawRef: '3065 sayılı KDVK m. 29/3 (7104 s.K.)',
    stem: '3065 sayılı KDV Kanunu’na göre, (X) A.Ş. 08.03.2019 tarihli alış faturasında yer alan KDV’den doğan indirim hakkını, kanuni defterlere kaydedilmiş olması koşuluyla en geç hangi vergilendirme döneminde kullanabilir?',
    options: [
      { key: 'A', text: 'Mart 2019' },
      { key: 'B', text: 'Nisan 2019' },
      { key: 'C', text: 'Aralık 2019' },
      { key: 'D', text: 'Mart 2020' },
      { key: 'E', text: 'Aralık 2020' },
    ],
    correctOption: 'E',
    solutionSummary:
      '7104 sayılı Kanun ile 01.01.2019 tarihinden itibaren yürürlüğe giren KDV m. 29/3 uyarınca indirim hakkı, vergiyi doğuran olayın vuku bulduğu takvim yılını TAKİP EDEN takvim yılı aşılmamak şartıyla, belgelerin kanuni defterlere kaydedildiği dönemde kullanılabilir. 2019 yılını takip eden takvim yılının son dönemi Aralık 2020’dir.',
    goldenTip:
      'Eski kural aynı takvim yılıydı; 7104 sayılı Kanunla süre "izleyen takvim yılının sonuna (Aralık 2020)" kadar uzatılmıştır.',
    visualDesignNote: '2 Takvim Yıllık İndirim Penceresi Zaman Çizelgesi: 08.03.2019 Fatura → Aralık 2019 (1. Yıl) → Aralık 2020 (Son Sınır).',
    infographic: {
      kind: 'timeline',
      designTitle: 'KDV İndirim Hakkı 2 Takvim Yılı Penceresi',
      spanLabel: 'Mart 2019’dan Aralık 2020 Sonuna Kadar',
      nodes: [
        { dateLabel: '08.03.2019', title: 'Vergiyi Doğuran Olay (Fatura)', detail: 'Alış faturası tarihi' },
        { dateLabel: '2019 Takvim Yılı', title: 'İçinde Bulunulan Yıl', detail: 'Deftere kayıt dönemi' },
        { dateLabel: '31.12.2020 (Aralık 2020)', title: 'En Son İndirim Dönemi', detail: '7104 s.K. gereği takip eden yılın sonu', highlight: true },
      ],
      keyTakeaway: 'İzleyen takvim yılı aşılmamak şartıyla en geç Aralık 2020 döneminde indirilebilir.',
    },
  },
  {
    number: 40,
    category: 'kdv',
    topic: 'KDV Matrahına Dâhil Olmayan Unsurlar',
    lawRef: '3065 sayılı KDVK m. 24 ve m. 25',
    stem: '3065 sayılı KDV Kanunu’na göre, aşağıdakilerden hangisi katma değer vergisinin matrahına dâhil unsurlar arasında yer almaz?',
    options: [
      { key: 'A', text: 'Teslim alanın gösterdiği yere kadar satıcı tarafından yapılan taşıma, yükleme ve boşaltma giderleri' },
      { key: 'B', text: 'Servis ve benzer adlar altında sağlanan her türlü menfaat, hizmet ve değerler' },
      { key: 'C', text: 'Fatura ve benzeri vesikalarda gösterilen ticari teamüllere uygun miktardaki iskontolar' },
      { key: 'D', text: 'Vade farkı, fiyat farkı, faiz ve prim gibi çeşitli gelirler' },
      { key: 'E', text: 'Ambalaj giderleri, sigorta, komisyon ve benzeri gider karşılıkları' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 24’e göre taşıma, yükleme, ambalaj, sigorta, komisyon, vade farkı, fiyat farkı, faiz, prim ve servis gelirleri matraha dâhildir. KDV m. 25/a uyarınca fatura veya benzeri vesikalarda gösterilen ticari teamüllere uygun miktardaki iskontolar ise matraha dâhil edilmez (matrahtan düşülür).',
    goldenTip:
      'Matrahtan düşülen sadece 2 şey vardır (m. 25): (1) Faturada gösterilen ticari teamüle uygun iskonto, (2) Hesaplanan KDV’nin kendisi.',
    visualDesignNote: 'Matrah Sepeti (Dahil vs. Hariç) Kartı: 4 dahil kalem ile dışarıda bırakılan iskonto kaleminin görsel ayrımı.',
    infographic: {
      kind: 'concept',
      designTitle: 'KDV Matrahı (m. 24 Dahil · m. 25 Hariç)',
      coreRuleTitle: 'Ticari Teamüle Uygun İskonto Matrahtan Düşülür',
      coreRuleBody:
        'Faturada açıkça gösterilen iskonto KDV matrahına girmez; taşıma, ambalaj, sigorta ve vade farkı matraha eklenir.',
      points: [
        { label: 'm. 24 Matraha Dahil Unsurlar', status: 'info', detail: 'Taşıma, yükleme, servis, vade/fiyat farkı, faiz, prim, ambalaj, sigorta, komisyon' },
        { label: 'm. 25 Matrah Dışı (C Şıkkı)', status: 'correct', detail: 'Faturada gösterilen ticari teamüle uygun iskontolar matraha dâhil edilmez' },
      ],
    },
  },
  {
    number: 41,
    category: 'kdv',
    topic: 'KDV İstisnası Kapsamına Girmeyen İşlem',
    lawRef: '3065 sayılı KDVK m. 1, 13/b, 17/4',
    stem: '3065 sayılı KDV Kanunu’na göre, aşağıdakilerden hangisi istisna kapsamına girmez?',
    options: [
      { key: 'A', text: 'İktisadi işletmelere dâhil bulunan gayrimenkullerin kiralanması işlemleri' },
      { key: 'B', text: 'Deniz ve hava taşıma araçları için liman ve hava meydanlarında yapılan hizmetler' },
      { key: 'C', text: 'Serbest bölgelerde verilen hizmetler' },
      { key: 'D', text: 'Banka ve sigorta muameleleri vergisi kapsamına giren işler' },
      { key: 'E', text: 'Basit usulde vergilendirilen mükellefler tarafından yapılan teslim ve hizmetler' },
    ],
    correctOption: 'A',
    solutionSummary:
      'KDV m. 17/4-d uyarınca istisna olan işlem "iktisadi işletmelere dâhil OLMAYAN" gayrimenkullerin kiralanmasıdır. İktisadi işletmelere (şirket aktifine) dâhil bulunan gayrimenkullerin kiralanması ise KDV’ye tabidir (istisna değildir).',
    goldenTip:
      'Okuma tuzağına dikkat: İktisadi işletmeye DÂHİL gayrimenkul kiralaması = KDV’li; İktisadi işletmeye DÂHİL OLMAYAN (şahsi konut/işyeri) kiralaması = KDV’den İstisna.',
    visualDesignNote: 'İstisna vs. KDV’li Ayrım Kartı: "Dâhil" ile "Dâhil Olmayan" kelime farkını vurgulayan kavram kutusu.',
    infographic: {
      kind: 'concept',
      designTitle: 'Gayrimenkul Kiralamasında KDV Sınırı',
      coreRuleTitle: 'İktisadi İşletmeye Dâhil Gayrimenkul Kirası KDV’ye Tabidir',
      coreRuleBody:
        'Şirketlerin aktifindeki taşınmazları kiralaması ticari işlem kapsamında KDV’ye tabidir; istisna kapsamına girmez.',
      points: [
        { label: 'Aktife Kayıtlı Taşınmaz Kirası (A)', status: 'trap', detail: 'İstisna DEĞİLDİR; genel oranda (%20) KDV’ye tabidir' },
        { label: 'Diğer 4 Seçenek (m. 13/b & 17/4)', status: 'correct', detail: 'Liman/hava meydanı, serbest bölge, BSMV ve basit usul işlemleri KDV’den istisnadır' },
      ],
    },
  },
  {
    number: 42,
    category: 'kdv',
    topic: 'KDV İndirimi ve Belgelendirme Kuralları',
    lawRef: '3065 sayılı KDVK m. 29/3 ve m. 34',
    stem: '3065 sayılı KDV Kanunu’na göre, KDV’nin indirim konusu yapılması ve indirimin belgelendirilmesine ilişkin aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Perakende satış fişlerinde katma değer vergisinin ayrıca gösterilmesi zorunlu olmayıp, vergili bedelin tek tutar hâlinde ifade edilmesi mümkündür.' },
      { key: 'B', text: 'Katma değer vergisi, alış faturası veya benzeri vesikalar ile gümrük makbuzu üzerinde ayrıca gösterilmelidir.' },
      { key: 'C', text: 'Faturalar, vergiyi doğuran olayın vuku bulduğu takvim yılı aşılmamak şartıyla kanuni defterlere kaydedilmelidir.' },
      { key: 'D', text: 'Gider belgesi olarak kabul edilen yazar kasa fişlerinde ayrıca gösterilen katma değer vergisi, bu belgelerin kanuni defterlere de kaydedilmesi şartıyla indirim konusu yapılır.' },
      { key: 'E', text: 'Hakediş belgesinde gösterilen katma değer vergisi bu belgeye dayalı olarak indirim konusu yapılabilir.' },
    ],
    correctOption: 'C',
    solutionSummary:
      '7104 sayılı Kanun değişikliği sonrası KDV m. 29/3 uyarınca faturalar vergiyi doğuran olayın vuku bulduğu takvim yılını TAKİP EDEN takvim yılı aşılmamak şartıyla kanuni defterlere kaydedilip indirilebilir. C şıkkındaki "takvim yılı aşılmamak" ifadesi eski ve yanlıştır.',
    goldenTip:
      'İndirim süresi 1 yıl değil, vuku bulduğu yılı takip eden takvim yılı sonuna kadar (toplamda ~2 takvim yılı) geçerlidir.',
    visualDesignNote: 'Belgelendirme Kuralları ve Süre Hatası Karşılaştırma Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'KDV İndirim ve Belge Kuralları (m. 29 & 34)',
      coreRuleTitle: 'İndirim Süresi Takip Eden Takvim Yılının Sonuna Kadardır',
      coreRuleBody:
        'Aynı takvim yılıyla sınırlama kuralı 2019’da kalkmıştır; izleyen yılın sonuna kadar deftere kayıtla indirim mümkündür.',
      points: [
        { label: 'Doğru Kurallar (A, B, D, E)', status: 'correct', detail: 'Fatura/gümrük makbuzu, perakende fiş esnekliği, gider yazar kasa fişi, hakediş indirimi' },
        { label: 'Yanlış İfade (C Şıkkı)', status: 'trap', detail: '"Takvim yılı aşılmamak" yanlış; "takip eden takvim yılı aşılmamak" doğrudur' },
      ],
    },
  },
  {
    number: 43,
    category: 'kdv',
    topic: 'KDV’nin Konusuna Giren ve Tabi İşlem',
    lawRef: '3065 sayılı KDVK m. 1 ve m. 17/4',
    stem: '3065 sayılı Katma Değer Vergisi Kanunu’na göre aşağıdakilerden hangisi vergiye tabidir?',
    options: [
      { key: 'A', text: 'Bir şirketin ortağına kâr payı dağıtması' },
      { key: 'B', text: 'Bir bankanın müşterisine kullandırdığı kredi karşılığında faiz geliri elde etmesi' },
      { key: 'C', text: 'Bir işletmenin sahip olduğu taşıtı üçüncü kişilere ücret karşılığı kiraya vermesi' },
      { key: 'D', text: 'Bir sigorta şirketinin hasar tazminatı ödemesi' },
      { key: 'E', text: 'Bir şirketin iştirak hisselerini satması' },
    ],
    correctOption: 'C',
    solutionSummary:
      'Ticari işletmenin aktifindeki taşıtı ücret karşılığı kiraya vermesi KDV m. 1/1 ve 1/3-f gereği KDV’ye tabidir. Kâr payı ve tazminat ödemeleri teslim/hizmet sayılmaz; banka kredi faizi BSMV kapsamında istisnadır; hisse senedi/iştirak hissesi teslimleri KDV m. 17/4-g-r kapsamında istisnadır.',
    goldenTip:
      'İktisadi işletmeye ait her türlü mal ve hakkın kiralanması (taşıt dahil) KDV konusuna girer ve vergiye tabidir.',
    visualDesignNote: '5 İşlemin Vergi Durumu Filtresi: Konu Dışı / BSMV / İstisna vs. KDV’ye Tabi İşlem.',
    infographic: {
      kind: 'concept',
      designTitle: 'Hangi İşlem KDV’ye Tabidir?',
      coreRuleTitle: 'İşletme Aktifindeki Taşıtın Kiralanması KDV’ye Tabidir',
      coreRuleBody:
        'Ticari faaliyet çerçevesinde yapılan kiralama hizmetleri genel hükümler uyarınca KDV doğurur.',
      points: [
        { label: 'C: İşletme Taşıtı Kiralaması', status: 'correct', detail: 'Ticari faaliyet kapsamı hizmet ifası → KDV’ye tabidir' },
        { label: 'A & D: Kâr Payı ve Tazminat', status: 'info', detail: 'Teslim veya hizmet karşılığı değildir (KDV konusu dışı)' },
        { label: 'B & E: Banka Faizi & Hisse Satışı', status: 'info', detail: 'KDV m. 17/4 kapsamında istisnadır' },
      ],
    },
  },
  {
    number: 44,
    category: 'kdv',
    topic: 'KDV’den İstisna Olmayan Teslim',
    lawRef: '3065 sayılı KDVK m. 17/4-e ve 17/4-g',
    stem: '3065 sayılı Katma Değer Vergisi Kanunu’na göre aşağıdakilerden hangisi vergiden istisna değildir?',
    options: [
      { key: 'A', text: 'Öğrenciye satışı yapılan kırtasiye malzemesi teslimi' },
      { key: 'B', text: 'Banka ve sigorta muameleleri vergisi kapsamına giren işlem' },
      { key: 'C', text: 'Külçe altın ve külçe gümüş teslimi' },
      { key: 'D', text: 'Hisse senedi teslimi' },
      { key: 'E', text: 'Türkiye’de kurulu borsalarda işlem gören sermaye piyasası araçlarının teslimi' },
    ],
    correctOption: 'A',
    solutionSummary:
      'Külçe altın/gümüş, hisse senedi, borsada işlem gören sermaye piyasası araçları (m. 17/4-g) ile BSMV kapsamına giren işlemler (m. 17/4-e) KDV’den istisnadır. Öğrenciye yapılan kırtasiye malzemesi satışı ise genel veya indirimli oranda KDV’ye tabidir (istisna değildir).',
    goldenTip:
      'Basılı kitap ve süreli yayınlar m. 13/n ile istisnadır ancak kırtasiye malzemeleri (defter, kalem vb.) KDV’ye tabidir.',
    visualDesignNote: 'KDV m. 17/4 Finansal İstisnalar vs. Kırtasiye Satışı Karşılaştırması.',
    infographic: {
      kind: 'concept',
      designTitle: 'İstisna Listesi vs. Vergiye Tabi Kırtasiye',
      coreRuleTitle: 'Kırtasiye Malzemesi Satışı KDV’ye Tabidir',
      coreRuleBody:
        'Defter, kalem ve kırtasiye ürünleri için KDV istisnası bulunmaz; vergiye tabi ticari teslimdir.',
      points: [
        { label: 'A: Kırtasiye Malzemesi Teslimi', status: 'trap', detail: 'İstisna DEĞİLDİR (KDV hesaplanır)' },
        { label: 'B, C, D, E: Finansal / BSMV İstisnaları', status: 'correct', detail: 'KDV m. 17/4-e ve 17/4-g uyarınca KDV’den istisnadır' },
      ],
    },
  },
  {
    number: 45,
    category: 'kdv',
    topic: 'Belgesiz Mal/Hizmet Alımında İbraz Süresi',
    lawRef: '3065 sayılı KDVK m. 9/2',
    stem: '3065 sayılı KDV Kanunu’na göre vergi incelemesi sırasında belgesiz mal bulundurdukları veya hizmet satın aldıkları tespit edilen mükelleflere, bu mal ve hizmetlere ait alış belgelerinin ibrazı için tespit tarihinden itibaren kaç gün süre verilir?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '5' },
      { key: 'C', text: '10' },
      { key: 'D', text: '15' },
      { key: 'E', text: '30' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 9/2 uyarınca fiili veya kaydi envanter sırasında belgesiz mal bulundurulduğu tespit edilirse, alış belgelerinin ibrazı için tespit tarihinden itibaren 10 günlük süre verilir; ibraz edilemezse KDV mükellef adına re’sen tarh edilir.',
    goldenTip:
      'Belgesiz mal alış belgesi ibraz süresi = 10 gün (VUK genel süre 15 gün ile karıştırmayınız!).',
    visualDesignNote: 'Tespit → 10 Gün İbraz Penceresi → İbraz Edilmezse Re’sen Tarhiyat Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Belgesiz Mal İbraz Süresi (KDV m. 9/2)',
      spanLabel: 'Tespit Tarihinden İtibaren 10 Gün',
      nodes: [
        { dateLabel: '0. Gün', title: 'İnceleme Sırasında Tespit', detail: 'Belgesiz mal veya hizmet alımı saptanır' },
        { dateLabel: '1–10. Gün', title: 'Alış Belgesi İbraz Süresi', detail: 'Mükellefe 10 gün kesin süre tanınır', highlight: true },
        { dateLabel: '10. Gün Sonrası', title: 'İbraz Edilmezse Müeyyide', detail: 'Emsal bedel üzerinden KDV + ceza tarh edilir' },
      ],
      keyTakeaway: 'KDV m. 9/2 kapsamındaki alış belgesi ibraz süresi 10 gündür.',
    },
  },
  {
    number: 46,
    category: 'kdv',
    topic: 'KDV’de Vergiyi Doğuran Olay',
    lawRef: '3065 sayılı KDVK m. 10',
    stem: 'Aşağıdakilerden hangisi 3065 sayılı Katma Değer Vergisi Kanunu’na göre vergiyi doğuran olaydır?',
    options: [
      { key: 'A', text: 'Yurtdışında yerleşik müşteriye verilen hizmetin ifası' },
      { key: 'B', text: 'Malın alıcıya teslimi' },
      { key: 'C', text: 'Fatura düzenlenmeksizin sipariş avansının alınması' },
      { key: 'D', text: 'Malın üretilip depoya konulması' },
      { key: 'E', text: 'Malın üretilmesi' },
    ],
    correctOption: 'B',
    solutionSummary:
      'KDV m. 10/a’ya göre mal teslimi ve hizmet ifası hallerinde vergiyi doğuran olay malın teslimi veya hizmetin yapılması anında doğar. Fatura düzenlenmeden alınan sipariş avansı, üretim veya depoya koyma vergiyi doğurmaz.',
    goldenTip:
      'Avans alınması tek başına KDV doğurmaz; ancak avans için fatura düzenlenirse faturadaki tutarla sınırlı olarak KDV doğar (m. 10/b).',
    visualDesignNote: 'KDV Doğuran vs. Doğurmayan Olaylar Matrisi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Vergiyi Doğuran Olay (KDV m. 10)',
      coreRuleTitle: 'Malın Alıcıya Teslimi ile KDV Doğar',
      coreRuleBody:
        'Üretim, depolama veya faturasız avans tahsilatı KDV bakımından vergiyi doğuran olay değildir.',
      points: [
        { label: 'B: Malın Alıcıya Teslimi', status: 'correct', detail: 'KDV m. 10/a temel vergiyi doğuran olaydır' },
        { label: 'C: Faturasız Sipariş Avansı', status: 'trap', detail: 'Fatura düzenlenmedikçe avans almak KDV doğurmaz' },
        { label: 'D & E: Üretim / Depoya Koyma', status: 'info', detail: 'İşletme içi süreçlerdir, teslim sayılmaz' },
      ],
    },
  },
  {
    number: 47,
    category: 'kdv',
    topic: 'Kısım Kısım Teslimlerde Vergiyi Doğuran Olay',
    lawRef: '3065 sayılı KDVK m. 10',
    stem: '3065 sayılı KDV Kanunu’na göre aşağıdakilerden hangisi katma değer vergisinde vergiyi doğuran olay ile ilgili olarak yanlıştır?',
    options: [
      { key: 'A', text: 'Mal teslimi ve hizmet ifası hâllerinde, malın teslimi veya hizmetin yapılması' },
      { key: 'B', text: 'Malın tesliminden veya hizmetin yapılmasından önce fatura veya benzeri belgeler verilmesi hâllerinde, bu belgelerde gösterilen miktarla sınırlı olmak üzere fatura veya benzeri belgelerin düzenlenmesi' },
      { key: 'C', text: 'Kısım kısım mal teslimi veya hizmet yapılması mutad olan veya bu hususlarda mutabık kalınan hâllerde, teslimin veya hizmetin tamamının yapılması' },
      { key: 'D', text: 'Komisyoncular vasıtasıyla yapılan satışlarda, malların alıcıya teslimi' },
      { key: 'E', text: 'Malın alıcıya veya onun adına hareket edenlere gönderilmesi hâlinde, malın nakliyesine başlanması veya nakliyeci veya sürücüye tevdii' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 10/c hükmüne göre kısım kısım mal teslimi veya hizmet yapılması mutad olan ya da bu hususlarda mutabık kalınan hallerde vergiyi doğuran olay tamamının bitmesiyle değil, HER BİR KISMIN teslimi veya bir kısım hizmetin yapılmasıyla doğar.',
    goldenTip:
      'Kısmi teslimde tamamını bekleme kuralı yoktur; teslim edilen her parça (kısım) kendi teslim anında KDV doğurur.',
    visualDesignNote: 'Parçalı Teslim Zaman Akışı: 1. Kısım Teslimi (KDV Doğar) · 2. Kısım Teslimi (KDV Doğar) vurgusu.',
    infographic: {
      kind: 'concept',
      designTitle: 'Kısım Kısım Teslim Kuralı (m. 10/c)',
      coreRuleTitle: 'Her Bir Kısmın Tesliminde KDV Ayrı Ayrı Doğar',
      coreRuleBody:
        'C şıkkındaki "tamamının yapılması" ifadesi kanunun açık lafzına aykırıdır.',
      points: [
        { label: 'Doğru Kural (m. 10/c)', status: 'correct', detail: 'Her bir kısmın teslimi veya bir kısım hizmetin yapılması anında doğar' },
        { label: 'Yanlış İfade (C Şıkkı)', status: 'trap', detail: 'Teslimin veya hizmetin tamamının bitmesi beklenmez' },
        { label: 'Diğer Kurallar (A, B, D, E)', status: 'info', detail: 'Önce fatura, komisyoncu teslimi ve nakliyeciye tevdi m. 10 ile uyumludur' },
      ],
    },
  },
  {
    number: 48,
    category: 'kdv',
    topic: 'Belgesiz Mal Alış Belgesi İbraz Süresi (Tekrar)',
    lawRef: '3065 sayılı KDVK m. 9/2',
    stem: '3065 sayılı KDV Kanunu’na göre vergi incelemesi sırasında belgesiz mal bulundurdukları veya hizmet satın aldıkları tespit edilen mükelleflere, bu mal ve hizmetlere ait alış belgelerinin ibrazı için tespit tarihinden itibaren kaç gün süre verilir?',
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '5' },
      { key: 'C', text: '10' },
      { key: 'D', text: '15' },
      { key: 'E', text: '30' },
    ],
    correctOption: 'C',
    solutionSummary:
      '45. soru ile aynı kalıpta sorulan bu sorunun cevabı da KDV m. 9/2 uyarınca 10 gündür.',
    goldenTip:
      'Kaynak PDF’te 45 ve 48 numaralı sorular aynı metinle yer almaktadır: Tespit tarihinden itibaren 10 gün.',
    visualDesignNote: '10 Günlük İbraz Süreci Özeti.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Belgesiz Mal/Hizmet Alımında 10 Gün (m. 9/2)',
      spanLabel: 'Tespit → 10 Gün İbraz Süresi',
      nodes: [
        { dateLabel: 'Tespit Günü', title: 'Belgesiz Mal / Hizmet Tespiti', detail: 'Vergi incelemesi sırasında saptanır' },
        { dateLabel: '+10 Gün', title: 'Belge İbraz Penceresi', detail: 'Alış belgeleri 10 gün içinde ibraz edilmelidir', highlight: true },
      ],
      keyTakeaway: 'İbraz süresi 10 gündür.',
    },
  },
  {
    number: 49,
    category: 'kdv',
    topic: 'KDV Matrahına Dâhil Olmayan Unsur: İskonto',
    lawRef: '3065 sayılı KDVK m. 25/a',
    stem: '3065 sayılı KDV Kanunu’na göre, aşağıdakilerden hangisi matraha dahil unsurlar içinde yer almaz?',
    options: [
      { key: 'A', text: 'Prim' },
      { key: 'B', text: 'Kur farkı' },
      { key: 'C', text: 'Komisyon' },
      { key: 'D', text: 'İskonto' },
      { key: 'E', text: 'Vade farkı' },
    ],
    correctOption: 'D',
    solutionSummary:
      'Prim, kur farkı, komisyon ve vade farkı KDV m. 24/c gereği matraha dâhildir. Faturada gösterilen ticari teamüllere uygun iskonto ise m. 25/a gereği matraha dâhil edilmez.',
    goldenTip:
      'Kur farkı da vade farkı gibi matraha dâhildir (m. 24/c); iskonto ise matrahtan indirilir.',
    visualDesignNote: '4 Artı Unsur vs. 1 Eksi Unsur (İskonto) Görsel Kutusu.',
    infographic: {
      kind: 'concept',
      designTitle: 'Matraha Dahil Unsurlar (m. 24) vs. İskonto (m. 25)',
      coreRuleTitle: 'İskonto Matrahtan İndirilir',
      coreRuleBody:
        'Prim, kur farkı, komisyon ve vade farkı bedele eklenerek KDV matrahını büyütür; iskonto ise düşülür.',
      points: [
        { label: 'D: İskonto (Matraha Girmez)', status: 'correct', detail: 'Ticari teamüle uygun ve faturada gösterilen iskonto düşülür' },
        { label: 'A, B, C, E (Matraha Dahildir)', status: 'info', detail: 'Prim, kur farkı, komisyon ve vade farkı KDV’ye tabidir' },
      ],
    },
  },
  {
    number: 50,
    category: 'kdv',
    topic: 'İstisnadan Vazgeçme Süresi',
    lawRef: '3065 sayılı KDVK m. 18/3',
    stem: 'Vergiden istisna edilmiş işlemleri yapanların, istisnadan vazgeçeceklerine ilişkin talepleri üzerine vergi mükellefiyetleri tesis olunur. Bu şekilde mükellef olanlar kaç yıl geçmedikçe mükellefiyetten çıkamazlar?',
    options: [
      { key: 'A', text: '1 yıl' },
      { key: 'B', text: '2 yıl' },
      { key: 'C', text: '3 yıl' },
      { key: 'D', text: '4 yıl' },
      { key: 'E', text: '5 yıl' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 18/3 uyarınca istisnadan vazgeçerek isteğe bağlı KDV mükellefi olanlar, mükellefiyetlerinin tesis edildiği tarihten itibaren 3 yıl geçmedikçe mükellefiyetten çıkamazlar. Süre bitmeden çıkış bildirilmezse 3 yıl daha uzar.',
    goldenTip:
      'İstisnadan vazgeçmede bağlayıcılık süresi 3 yıldır (3 yıl sonunda bildirim yapılmazsa otomatik 3 yıl daha uzar).',
    visualDesignNote: '3 Yıllık Zorunlu Mükellefiyet Döngüsü Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'İstisnadan Vazgeçmede 3 Yıl Kuralı (m. 18)',
      spanLabel: 'Talep Tarihinden İtibaren 3 Yıl Çıkış Yasağı',
      nodes: [
        { dateLabel: 'Talep Tarihi', title: 'Mükellefiyet Tesisi', detail: 'Vergi dairesine yazılı başvuru ile başlar' },
        { dateLabel: '1–3. Yıl', title: '3 Yıllık Bağlılık Süresi', detail: '3 yıl dolmadan mükellefiyetten çıkılamaz', highlight: true },
        { dateLabel: '3. Yıl Sonu', title: 'Çıkış veya Otomatik Uzama', detail: 'Bildirilmezse mükellefiyet 3 yıl daha uzar' },
      ],
      keyTakeaway: 'İstisnadan vazgeçenler 3 yıl geçmedikçe mükellefiyetten çıkamaz.',
    },
  },
  {
    number: 51,
    category: 'kdv',
    topic: 'Türkiye’de Benimsenen KDV Tipi',
    lawRef: '3065 sayılı KDVK Genel Esasları',
    stem: '3065 sayılı KDV Kanunu’na göre, ülkemizde katma değer vergisi uygulaması bakımından aşağıdakilerden hangisi benimsenmiştir?',
    options: [
      { key: 'A', text: 'Gelir tipi' },
      { key: 'B', text: 'Gayrisafi hasıla tipi' },
      { key: 'C', text: 'Tüketim tipi' },
      { key: 'D', text: 'Ücret tipi' },
      { key: 'E', text: 'Safi ücret tipi' },
    ],
    correctOption: 'C',
    solutionSummary:
      'Ülkemizde yatırım malları (ATİK) dâhil tüm mal ve hizmet alımlarında ödenen KDV’nin indirilmesine izin veren "Tüketim Tipi KDV" benimsenmiştir.',
    goldenTip:
      '3 KDV Tipi: Gayrisafi Hasıla (yatırım indirimi yok), Gelir (amortisman kadar indirim), Tüketim Tipi (yatırım KDV’si tamamen ve derhal indirilir — Türkiye!).',
    visualDesignNote: '3 KDV Tipi Karşılaştırma Matrisi: Yatırım mallarının KDV indirimi açısından Tüketim Tipinin vurgulanması.',
    infographic: {
      kind: 'concept',
      designTitle: 'Ekonomik KDV Tipleri ve Türkiye Uygulaması',
      coreRuleTitle: 'Türkiye’de Tüketim Tipi KDV Uygulanır',
      coreRuleBody:
        'Amortismana tabi iktisadi kıymet (yatırım) alımlarında yüklenilen KDV tamamen indirim konusu yapılabilir.',
      points: [
        { label: 'Tüketim Tipi (Türkiye · C)', status: 'correct', detail: 'Yatırım malları KDV’si dâhil tüm girdi KDV’leri indirilir' },
        { label: 'Gelir Tipi (A)', status: 'info', detail: 'Sadece amortisman payına isabet eden KDV indirilir' },
        { label: 'Gayrisafi Hasıla Tipi (B)', status: 'info', detail: 'Yatırım malları KDV’sinin indirimine izin verilmez' },
      ],
    },
  },
  {
    number: 52,
    category: 'kdv',
    topic: 'KDV Genel Hükümler ve Diplomatik İstisna',
    lawRef: '3065 sayılı KDVK m. 15, 18, 24, 25',
    stem: '3065 sayılı Katma Değer Vergisi Kanunu’na göre, aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Vade farkı matraha dâhil unsurlardandır.' },
      { key: 'B', text: 'Hesaplanan katma değer vergisi matraha dâhil olmayan unsurlardandır.' },
      { key: 'C', text: 'Teslim alanın gösterdiği yere kadar satıcı tarafından yapılan taşıma, yükleme ve boşaltma giderleri matraha dâhil unsurlardandır.' },
      { key: 'D', text: 'Vergiden istisna edilmiş işlemleri yapanlar, ilgili vergi dairesine yazılı başvuruda bulunarak, belirtecekleri işlem türleri için vergiye tabi tutulmalarını talep edebilirler.' },
      { key: 'E', text: 'Uluslararası anlaşmalar gereğince vergi muafiyeti tanınan uluslararası kuruluşların mensuplarına yapılan teslimler vergiye tabidir.' },
    ],
    correctOption: 'E',
    solutionSummary:
      'KDV m. 15/1-b hükmüne göre uluslararası anlaşmalar gereğince vergi muafiyeti tanınan uluslararası kuruluşlara ve bunların mensuplarına yapılan teslim ve hizmetler KDV’den İSTİSNADIR (Diplomatik İstisna). Bu nedenle "vergiye tabidir" diyen E şıkkı yanlıştır.',
    goldenTip:
      'KDV m. 15 Diplomatik İstisna: Karşılıklı olmak şartıyla yabancı devlet temsilcilikleri ve vergi muafiyeti tanınan uluslararası kuruluşlar ile mensuplarına yapılan teslimler istisnadır.',
    visualDesignNote: '4 Doğru Kural vs. Diplomatik İstisna İhlali (E Şıkkı) Karşılaştırması.',
    infographic: {
      kind: 'concept',
      designTitle: 'KDV Temel Kuralları & Diplomatik İstisna (m. 15)',
      coreRuleTitle: 'Uluslararası Kuruluş Mensuplarına Teslimler İstisnadır',
      coreRuleBody:
        'Muafiyet tanınan uluslararası kuruluşlara ve mensuplarına yapılan teslimler KDV m. 15 kapsamında vergiden istisnadır.',
      points: [
        { label: 'Doğru İlkeler (A, B, C, D)', status: 'correct', detail: 'Vade farkı ve satıcı taşıması matraha girer; KDV matraha girmez; istisnadan vazgeçilebilir' },
        { label: 'Yanlış İfade (E Şıkkı)', status: 'trap', detail: 'Uluslararası kuruluş mensuplarına teslimler vergiye tabi DEĞİL, istisnadır' },
      ],
    },
  },
  {
    number: 53,
    category: 'kdv',
    topic: 'Teslim Sayılan Haller vs. Bedelsiz Küspe İadesi',
    lawRef: '3065 sayılı KDVK m. 3',
    stem: '3065 sayılı Katma Değer Vergisi Kanunu’na göre, aşağıdakilerden hangisi teslim sayılmaz?',
    options: [
      { key: 'A', text: 'İşletme sahibinin ticaretini yaptığı dayanıklı tüketim mallarından bir kısmını ücret, ikramiye, hediye, teberru gibi adlarla işletme personeline vermesi' },
      { key: 'B', text: 'Su, elektrik, gaz, ısıtma, soğutma ve benzeri şekillerde dağıtım yapılması' },
      { key: 'C', text: 'Çiftçilerin şeker fabrikalarına teslim ettikleri şeker pancarı karşılığında fabrikanın pancar bedeli dışında çiftçiye ayrıca bedelsiz küspe vermesi' },
      { key: 'D', text: 'İşletme sahibinin ticaretini yaptığı dayanıklı tüketim mallarından bir kısmını kendi şahsi ihtiyacında kullanmak üzere işletmeden çekmesi' },
      { key: 'E', text: 'Akaryakıt ticareti ile uğraşan bir şahsın, satmak amacıyla aldığı akaryakıtın bir kısmını özel otomobilinde kullanması' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 3 uyarınca işletmeden özel çekişler, personele bedelsiz mal verilmesi ve su/elektrik/gaz dağıtımları teslim sayılır. Ancak KDV m. 3/c ve KDV Genel Uygulama Tebliği uyarınca şeker fabrikalarının pancar teslimi karşılığında çiftçilere bedelsiz küspe vermesi teslim sayılmaz.',
    goldenTip:
      'Şeker fabrikalarının çiftçiye bedelsiz küspe vermesi KDV uygulamasında klasik "Teslim Sayılmayan Hal" örneğidir.',
    visualDesignNote: 'Teslim Sayılanlar (İşletmeden Çekiş, Dağıtım) vs. Teslim Sayılmayan (Bedelsiz Küspe) Karşılaştırma Kartı.',
    infographic: {
      kind: 'concept',
      designTitle: 'KDV m. 3 Teslim Sayılan & Sayılmayan Haller',
      coreRuleTitle: 'Pancar Karşılığı Bedelsiz Küspe Verilmesi Teslim Sayılmaz',
      coreRuleBody:
        'İşletmeden özel çekişler ve enerji dağıtımı teslim sayılırken, şeker pancarı üreticisine bedelsiz küspe iadesi teslim değildir.',
      points: [
        { label: 'Teslim Sayılan Haller (A, B, D, E)', status: 'info', detail: 'Personele verme, su/elektrik/gaz dağıtımı, işletme sahibinin şahsi çekişi' },
        { label: 'Teslim Sayılmayan (C Şıkkı)', status: 'correct', detail: 'Şeker fabrikasının pancar bedeli dışında çiftçiye bedelsiz küspe vermesi' },
      ],
    },
  },
  {
    number: 54,
    category: 'kdv',
    topic: 'İmha Edilen İlaçların KDV’si, Vade Farkı ve Ödenecek KDV',
    lawRef: '3065 sayılı KDVK m. 24/c, 29, 30/c · VUK m. 278',
    stem: '(Z) İlaç A.Ş.’nin Aralık 2025 işlemleri: Mal/hizmet alımı 100.000 ₺ (KDV 10.000 ₺); Yurt içi satış 500.000 ₺ (KDV 50.000 ₺); Kullanım süresi dolan 10.000 ₺ ilaç takdir komisyonu huzurunda imha edilmiş (yüklenilen KDV 1.000 ₺); Şubat satışına ait 6.000 ₺ vade farkı hesaplanmış; Önceki dönemden devreden KDV 5.000 ₺’dir. Ödenecek KDV kaç ₺’dir? (KDV %10)',
    options: [
      { key: 'A', text: '34.000' },
      { key: 'B', text: '34.600' },
      { key: 'C', text: '35.600' },
      { key: 'D', text: '36.000' },
      { key: 'E', text: '36.600' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Hesaplanan KDV = 50.000 TL (mal satışı) + 600 TL (6.000 × %10 vade farkı KDV’si) = 50.600 TL. Kullanım süresi dolup takdir komisyonu huzurunda imha edilen ilaçlar KDV m. 30/c ve Tebliğ uyarınca "zayi olan mal" sayıldığından daha önce indirilen 1.000 TL KDV "İlave Edilecek KDV" olarak eklenir (Toplam Hesaplanan = 51.600 TL). İndirilecek KDV = 10.000 + 5.000 = 15.000 TL. Ödenecek KDV = 51.600 − 15.000 = 36.600 TL.',
    goldenTip:
      'Miadı dolan ilaçların takdir komisyonu kararıyla imhasında bedel VUK yönünden gider yazılır; ancak KDV m. 30/c yönünden zayi mal sayıldığından yüklenilen KDV (1.000 TL) "İlave Edilecek KDV" ile iade/düzeltme edilir.',
    visualDesignNote: 'Hesaplanan KDV + İlave Edilecek KDV − İndirilecek KDV Şelale Diyagramı.',
    infographic: {
      kind: 'waterfall',
      designTitle: 'Aralık 2025 KDV Beyanname Özeti (%10 Oran)',
      formulaSummary: '(50.000 + 600 + 1.000 İlave) − (10.000 + 5.000) = 36.600 TL',
      steps: [
        { label: 'Yurt İçi Satışlar Hesaplanan KDV', amount: 50000, type: 'base' },
        { label: 'Vade Farkı KDV’si (6.000 × %10)', amount: 600, type: 'add', note: 'KDV m. 24/c matraha dahil' },
        { label: 'İmha Edilen İlaç İlave Edilecek KDV', amount: 1000, type: 'add', note: 'KDV m. 30/c zayi mal düzeltmesi' },
        { label: 'Bu Dönem Alışları İndirilecek KDV', amount: -10000, type: 'sub' },
        { label: 'Önceki Dönemden Devreden KDV', amount: -5000, type: 'sub' },
        { label: 'Ödenecek KDV Tutarı', amount: 36600, type: 'result' },
      ],
      finalValueLabel: 'Ödenecek Net KDV',
      finalValueText: '36.600 TL',
    },
  },
  {
    number: 55,
    category: 'kdv',
    topic: 'İhraç Kayıtlı Teslimlerde Tecil-Terkin Süresi',
    lawRef: '3065 sayılı KDVK m. 11/1-c',
    stem: '3065 sayılı KDV Kanunu’na göre, ihraç kaydıyla teslimlerde tecil terkin uygulamasına ilişkin aşağıdakilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'İhraç edilmek şartıyla imalatçılar tarafından kendilerine teslim edilen mallara ait KDV, ihracatçılar tarafından ödenmez.' },
      { key: 'B', text: 'İmalatçılar tarafından ihraç kaydıyla teslimin yapıldığı dönemde, teslime ilişkin beyan edilen KDV, vergi dairesince tarh ve tahakkuk ettirildikten sonra tecil edilir.' },
      { key: 'C', text: 'Malların, ihracatçıya teslim tarihini takip eden ay başından itibaren altı ay içinde ihraç edilmesi halinde, tecil edilen vergi terkin olunur.' },
      { key: 'D', text: 'İhraç kaydıyla teslim edilen mallar, 213 sayılı VUK’ta belirtilen mücbir sebepler nedeniyle ihraç edilemez ise, tecil edilen vergi tecil edildiği tarihten itibaren 6183 sayılı Kanun’a göre geçerli tecil faizi ile birlikte tahsil edilir.' },
      { key: 'E', text: 'İhracatın mücbir sebep nedeniyle gerçekleştirilememesi halinde, sürenin dolduğu tarihten itibaren on beş gün içinde başvuran ihracatçılara üç aya kadar ek süre verilebilir.' },
    ],
    correctOption: 'C',
    solutionSummary:
      'KDV m. 11/1-c’nin açık hükmüne göre ihraç kaydıyla teslim edilen malların, ihracatçıya teslim tarihini takip eden ay başından itibaren 6 AY değil, 3 AY içinde ihraç edilmesi gerekmektedir. Bu nedenle C şıkkı kesin olarak yanlıştır.',
    goldenTip:
      'İhraç kayıtlı teslimde normal ihracat süresi = Teslimi izleyen ay başından itibaren 3 AY (zorunlu hallerde +3 aya kadar ek süre).',
    visualDesignNote: 'İhraç Kayıtlı Teslim 3 Ay + 3 Ay Ek Süre Zaman Çizelgesi.',
    infographic: {
      kind: 'timeline',
      designTitle: 'Tecil-Terkin İhracat Süresi (KDV m. 11/1-c)',
      spanLabel: 'Teslimi İzleyen Ay Başından İtibaren 3 Ay (6 Ay Değil!)',
      nodes: [
        { dateLabel: 'Teslim Ayı', title: 'İmalatçıdan İhracatçıya Teslim', detail: 'KDV faturada gösterilir ancak ihracatçıdan tahsil edilmez' },
        { dateLabel: 'İzleyen 3 Ay', title: 'Kanuni İhracat Süresi (3 AY)', detail: '3 ay içinde ihraç edilirse tecil edilen vergi terkin edilir', highlight: true },
        { dateLabel: '+15 Gün Başvuru', title: 'Mücbir / Zorunlu Ek Süre', detail: '3 aya kadar ek süre verilebilir' },
      ],
      keyTakeaway: 'C şıkkı 6 ay dediği için yanlıştır; kanuni süre 3 aydır.',
    },
  },
  {
    number: 56,
    category: 'kdv',
    topic: 'KDV İstisnası vs. Özel Matrah Şekli',
    lawRef: '3065 sayılı KDVK m. 17/4 ve m. 23/a',
    stem: 'Aşağıdakilerden hangisi 3065 sayılı KDV Kanunu’na göre, Katma Değer Vergisinden istisna değildir?',
    options: [
      { key: 'A', text: 'Banka ve Sigorta Muameleleri Vergisi kapsamına giren işlemler' },
      { key: 'B', text: 'Gelir Vergisi Kanunu’na göre kazançları basit usulde tespit edilen mükellefler tarafından yapılan teslim ve hizmetler' },
      { key: 'C', text: 'Spor-Toto oyununda ve Millî Piyango dahil her türlü piyangoda, oyuna ve piyangoya katılma bedelleri' },
      { key: 'D', text: 'Külçe altın ve külçe gümüş teslimleri' },
      { key: 'E', text: 'İktisadi işletmelere dahil olmayan gayrimenkullerin kiralanması işlemleri' },
    ],
    correctOption: 'C',
    solutionSummary:
      'Spor-Toto, Milli Piyango ve benzeri şans oyunlarında oyuna ve piyangoya katılma bedelleri KDV’den istisna DEĞİLDİR; KDV m. 23/a uyarınca "Özel Matrah Şekli" kapsamında KDV’ye tabidir. Diğer 4 seçenek m. 17/4 kapsamında KDV istisnasıdır.',
    goldenTip:
      'Şans oyunları (Milli Piyango, Spor-Toto, At Yarışları) KDV’den istisna değildir; Özel Matrah Şekli uygulanarak vergilendirilir (m. 23).',
    visualDesignNote: 'm. 17/4 İstisnalar vs. m. 23 Özel Matrah Şekli Karşılaştırması.',
    infographic: {
      kind: 'concept',
      designTitle: 'İstisna (m. 17) vs. Özel Matrah (m. 23)',
      coreRuleTitle: 'Spor-Toto ve Millî Piyango İstisna Değil, Özel Matrahtır',
      coreRuleBody:
        'Katılma bedelleri üzerinden teşkilat tarafından merkezden KDV hesaplanır; vergiden istisna değildir.',
      points: [
        { label: 'C: Şans Oyunları Katılma Bedeli', status: 'trap', detail: 'KDV m. 23/a Özel Matrah Şekli → KDV’ye tabidir (İstisna değil)' },
        { label: 'A, B, D, E Seçenekleri', status: 'correct', detail: 'Tamamı KDV m. 17/4 kapsamında vergiden istisnadır' },
      ],
    },
  },
  {
    number: 57,
    category: 'kdv',
    topic: '2 No.lu KDV Ödeme Şartı (7491) ve Kasa Kur Farkı',
    lawRef: '3065 sayılı KDVK m. 29/1-ç (7491 s.K.)',
    stem: '(XYZ) A.Ş.’nin 2025/Aralık işlemleri: Mal/hizmet alımı 500.000 ₺ (KDV 100.000 ₺); Yurt içi satış 2.000.000 ₺ (KDV 400.000 ₺); Kasım’da alınan özel güvenlik hizmetine ait 2 No.lu KDV beyanıyla tahakkuk eden 120.000 ₺ KDV 28/12/2025’te ödenmiştir; Kasadaki döviz değerlemesinden 300.000 ₺ kur farkı geliri oluşmuştur; Önceki dönemden devreden KDV 50.000 ₺’dir. Aralık/2025 ödenecek KDV kaç ₺’dir?',
    options: [
      { key: 'A', text: '130.000' },
      { key: 'B', text: '180.000' },
      { key: 'C', text: '190.000' },
      { key: 'D', text: '250.000' },
      { key: 'E', text: '310.000' },
    ],
    correctOption: 'A',
    solutionSummary:
      'Kasadaki yabancı paranın dönem sonu değerlemesinden doğan 300.000 TL kur farkı geliri bir teslim/hizmet bedeli olmadığı için KDV konusuna GİRMEZ. Hesaplanan KDV = 400.000 TL. 7491 sayılı Kanunla sorumlu sıfatıyla 2 No.lu beyannameyle beyan edilen KDV’nin indirilebilmesi için ÖDENMİŞ olması şarttır; 120.000 TL 28/12/2025’te ödendiğinden Aralık 2025’te indirilir! Toplam İndirilecek KDV = 100.000 + 50.000 + 120.000 = 270.000 TL. Ödenecek KDV = 400.000 − 270.000 = 130.000 TL.',
    goldenTip:
      'İki Güncel Tuzak: (1) Kasadaki döviz değerleme kur farkı KDV’sizdir. (2) 7491 s.K. gereği 2 No.lu KDV ödenmeden indirilemez; ödendiği ay (Aralık) beyannamesinde indirilir.',
    visualDesignNote: 'KDV Beyanname Şelalesi: 2 No.lu ödenen KDV’nin (120B) indirim havuzuna girişi ve kasa kur farkının elenmesi.',
    infographic: {
      kind: 'waterfall',
      designTitle: '2025/Aralık KDV Hesabı (7491 s.K. 2 No.lu Şartı)',
      formulaSummary: '400.000 − (100.000 + 50.000 + 120.000 Ödenen 2 No.lu KDV) = 130.000 TL',
      steps: [
        { label: 'Yurt İçi Teslim Hesaplanan KDV', amount: 400000, type: 'base' },
        { label: 'Kasadaki Döviz Değerleme Kur Farkı', amount: 0, type: 'ignore', note: '300.000 TL · Teslim/hizmet değil, KDV konusu dışı' },
        { label: 'Alış Faturaları İndirilecek KDV', amount: -100000, type: 'sub' },
        { label: 'Önceki Dönemden Devreden KDV', amount: -50000, type: 'sub' },
        { label: '28/12/2025 Ödenen 2 No.lu KDV İndirimi', amount: -120000, type: 'sub', note: 'Ödendiği Aralık döneminde indirilir' },
        { label: '2025/Aralık Ödenecek KDV', amount: 130000, type: 'result' },
      ],
      finalValueLabel: 'Ödenecek KDV Tutarı',
      finalValueText: '130.000 TL',
    },
  },
  {
    number: 58,
    category: 'kdv',
    topic: 'Hizmetlerde KDV’nin Konusu (Türkiye’de Faydalanma)',
    lawRef: '3065 sayılı KDVK m. 1 ve m. 6/b',
    stem: '3065 sayılı KDV Kanunu’na göre Türkiye’deki bir firmanın aşağıda yaptığı hizmetlerden hangisi katma değer vergisinin konusuna girer?',
    options: [
      { key: 'A', text: 'Yurt dışındaki bir firmanın mallarının, yine yurt dışındaki bir başka firmaya pazarlanmasına yönelik olarak yurt dışında verdiği satış komisyonculuğu hizmeti' },
      { key: 'B', text: 'Yurt dışında yaptığı inşaat, onarım ve montaj işleri' },
      { key: 'C', text: 'Yurt dışında düzenlenen bir fuara Türkiye’den katılan firmalara yurt dışında verdiği stant kurulumu ve montaj hizmeti' },
      { key: 'D', text: 'Türkiye’deki başka bir firmanın personeline, yabancı firmalarla tanıştırma, bilgilendirme ve eğitim şeklinde yurt dışında verdiği danışmanlık hizmeti' },
      { key: 'E', text: 'Yurt dışındaki firmalara ait ürünlerin Türkiye’de satışı için bu firmalara verdiği pazarlama ve aracılık hizmetleri' },
    ],
    correctOption: 'E',
    solutionSummary:
      'KDV m. 6/b uyarınca işlemlerin Türkiye’de yapılması, hizmetin Türkiye’de yapılması veya hizmetten Türkiye’de faydalanılması halinde işlem KDV konusuna girer. E şıkkında yurt dışı firmaların ürünlerinin Türkiye’de satışı için pazarlama/aracılık hizmeti Türkiye’de verilmekte ve Türkiye’deki satışa yönelik olarak burada faydalanılmaktadır.',
    goldenTip:
      'Hizmet ihracatı istisnası için müşterinin yurt dışında olması yetmez; hizmetten YURT DIŞINDA faydalanılması da şarttır. Türkiye’deki satışa aracılıkta faydalanma Türkiye’dedir.',
    visualDesignNote: 'Mülkilik (Yer ve Faydalanma) Matrisi: Yurt Dışı Hizmet/Fayda (Konu Dışı) vs. Türkiye’de İfa ve Fayda (KDV’ye Tabi).',
    infographic: {
      kind: 'concept',
      designTitle: 'Hizmetin Türkiye’de Yapılması / Faydalanılması (m. 6)',
      coreRuleTitle: 'Türkiye’deki Satış İçin Verilen Aracılık Hizmeti KDV’ye Tabidir',
      coreRuleBody:
        'Müşteri yurt dışında olsa bile hizmet Türkiye’de ifa ediliyorsa veya Türkiye’de faydalanılıyorsa KDV doğar.',
      points: [
        { label: 'E: Türkiye’deki Satış İçin Aracılık', status: 'correct', detail: 'İfa ve faydalanma Türkiye’de gerçekleşir → KDV konusuna girer' },
        { label: 'A, B, C, D: Yurt Dışında İfa & Faydalanma', status: 'info', detail: 'Hizmet yurt dışında yapılıp yurt dışında tüketildiğinden KDV konusu dışıdır' },
      ],
    },
  },
  {
    number: 59,
    category: 'kdv',
    topic: 'İhraç Kayıtlı Teslimde Tecil Edilebilir ve Tecil Edilecek KDV',
    lawRef: '3065 sayılı KDVK m. 11/1-c',
    stem: 'İmalatçı (VYZ) A.Ş., 2026/Ocak döneminde yurt içi toptancıya 1.000.000 ₺, ihracatçıya ihraç kaydıyla 9.000.000 ₺ otomobil yedek parçası teslim etmiştir. Toplam indirilecek KDV 1.500.000 ₺’dir. Sırasıyla tecil edilebilir KDV ve tecil edilecek KDV tutarları kaç ₺’dir? (KDV %20)',
    options: [
      { key: 'A', text: '1.300.000 / 500.000' },
      { key: 'B', text: '1.500.000 / 200.000' },
      { key: 'C', text: '1.500.000 / 500.000' },
      { key: 'D', text: '1.800.000 / 200.000' },
      { key: 'E', text: '1.800.000 / 500.000' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Yurt içi KDV = 1.000.000 × %20 = 200.000 TL. İhraç kayıtlı teslim KDV = 9.000.000 × %20 = 1.800.000 TL (Tecil Edilebilir KDV). Toplam Hesaplanan KDV = 2.000.000 TL. İndirilecek KDV (1.500.000 TL) düşülürse fark (Ödenecek KDV) = 500.000 TL olur. Ödenecek KDV (500.000) < Tecil Edilebilir KDV (1.800.000) olduğundan küçük olan 500.000 TL tecil edilir (kalan 1.300.000 TL iade alınır).',
    goldenTip:
      'Tecil Edilecek KDV = min(Tecil Edilebilir KDV, Ödenecek KDV Farkı). Aradaki fark (1.800.000 − 500.000 = 1.300.000 TL) ihracat gerçekleşince iade edilir.',
    visualDesignNote: '3 Aşamalı Tecil-İade Akışı: Toplam Hesaplanan KDV − İndirilecek KDV → Kıyaslama → Tecil (500B) ve İade (1.3M).',
    infographic: {
      kind: 'flow',
      designTitle: 'İhraç Kayıtlı KDV Tecil & İade Dengesi',
      stages: [
        {
          title: 'Tecil Edilebilir KDV (İhraç Kayıtlı)',
          amountText: '1.800.000 TL',
          subText: '9.000.000 × %20 (Yurt içi +200.000 = 2.000.000 Toplam)',
          tone: 'neutral',
        },
        {
          title: 'Fark (Hesaplanan − İndirilecek)',
          amountText: '500.000 TL',
          subText: '2.000.000 − 1.500.000 İndirilecek KDV',
          tone: 'positive',
        },
        {
          title: 'Tecil Edilecek KDV (Küçük Olan)',
          amountText: '500.000 TL',
          subText: 'İade edilecek KDV: 1.800.000 − 500.000 = 1.300.000 TL',
          tone: 'accent',
        },
      ],
      summaryEquation: 'Tecil Edilebilir: 1.800.000 TL · Tecil Edilecek: 500.000 TL',
    },
  },
  {
    number: 60,
    category: 'kdv',
    topic: 'KDV Matrahı Hesaplama (Alıcının Ödediği Kargo)',
    lawRef: '3065 sayılı KDVK m. 24 ve m. 25',
    stem: 'Kasım 2025 mal satışı: Satış bedeli 500.000 TL, Vade farkı 40.000 TL, Ambalaj gideri 20.000 TL, Satıcı tarafından alıcıya yansıtılan nakliye 30.000 TL, Alıcı tarafından doğrudan kargo firmasına ödenen taşıma 25.000 TL, Faturada gösterilen ticari teamüllere uygun iskonto 50.000 TL. (KDV %20) KDV matrahı kaç TL’dir?',
    options: [
      { key: 'A', text: '590.000' },
      { key: 'B', text: '540.000' },
      { key: 'C', text: '510.000' },
      { key: 'D', text: '500.000' },
      { key: 'E', text: '560.000' },
    ],
    correctOption: 'B',
    solutionSummary:
      'Satış bedeli (500.000) + Vade farkı (40.000) + Ambalaj (20.000) + Satıcıca yansıtılan nakliye (30.000) − Fatura iskontosu (50.000) = 540.000 TL. Alıcının doğrudan kargo firmasına ödediği 25.000 TL satıcının teslim bedeline/matrahına dâhil edilmez.',
    goldenTip:
      'Satıcının üstlenip alıcıya yansıttığı taşıma matraha girer; alıcının kargoya kendi doğrudan ödediği taşıma satıcının matrahına girmez.',
    visualDesignNote: 'Matrah Şelalesi: 25.000 TL doğrudan alıcı kargo ödemesinin "Hariç" olarak elenmesiyle 540.000 TL matrah.',
    infographic: {
      kind: 'waterfall',
      designTitle: 'Mal Satışı KDV Matrahı Hesaplaması',
      formulaSummary: '500.000 + 40.000 + 20.000 + 30.000 − 50.000 = 540.000 TL',
      steps: [
        { label: 'Malın Satış Bedeli', amount: 500000, type: 'base' },
        { label: 'Vade Farkı', amount: 40000, type: 'add' },
        { label: 'Ambalaj Gideri', amount: 20000, type: 'add' },
        { label: 'Satıcıca Yansıtılan Nakliye', amount: 30000, type: 'add' },
        { label: 'Alıcının Doğrudan Ödediği Kargo', amount: 0, type: 'ignore', note: '25.000 TL · Satıcı matrahına dahil değil' },
        { label: 'Faturada Gösterilen İskonto', amount: -50000, type: 'sub', note: 'KDV m. 25/a düşülür' },
        { label: 'KDV Matrahı', amount: 540000, type: 'result' },
      ],
      finalValueLabel: 'KDV Matrahı',
      finalValueText: '540.000 TL',
    },
  },
  {
    number: 61,
    category: 'kdv',
    topic: 'Özel Matrah Şekilleri Kapsamı',
    lawRef: '3065 sayılı KDVK m. 23 ve m. 13/n',
    stem: 'Aşağıdakilerden hangisi Katma Değer Vergisi Kanunu’nda özel matrah şekli olarak düzenlenmemiştir?',
    options: [
      { key: 'A', text: 'Millî Piyango biletlerinin satışında oyuna katılma bedeli' },
      { key: 'B', text: 'At yarışlarına katılma karşılığında alınan bedel' },
      { key: 'C', text: 'Altın ziynet eşyası satışında külçe altın bedeli düşüldükten sonra kalan tutar' },
      { key: 'D', text: 'Belirli şartlarla ikinci el motorlu kara taşıtı satışında alış bedeli düşüldükten sonra kalan tutar' },
      { key: 'E', text: 'Basılı kitap teslimleri' },
    ],
    correctOption: 'E',
    solutionSummary:
      'Milli Piyango, at yarışları, altın ziynet işçilik farkı ve ikinci el araç/taşınmaz kâr marjı KDV m. 23’te düzenlenen Özel Matrah Şekilleridir. Basılı kitap ve süreli yayın teslimleri ise özel matrah değil, KDV m. 13/n kapsamında tam istisnadır.',
    goldenTip:
      'Özel matrah şekilleri (m. 23): Şans oyunları, at yarışları, altın/gümüş işçilik farkı, 2. el araç/taşınmaz alım-satım kârı, ön ödemeli telefon kartları vb. Kitaplar ise m. 13/n tam istisnadır.',
    visualDesignNote: 'Özel Matrah Şekilleri Listesi vs. Basılı Kitap Tam İstisnası (m. 13/n).',
    infographic: {
      kind: 'concept',
      designTitle: 'KDV m. 23 Özel Matrah Şekilleri',
      coreRuleTitle: 'Basılı Kitap Özel Matrah Değil, Tam İstisnadır (m. 13/n)',
      coreRuleBody:
        'A, B, C ve D şıkları matrahın özel yöntemle belirlendiği KDV’li işlemlerken, basılı kitap teslimi vergiden istisnadır.',
      points: [
        { label: 'm. 23 Özel Matrah Şekilleri (A–D)', status: 'info', detail: 'Milli Piyango, at yarışları, ziynet işçiliği, 2. el taşıt kâr farkı' },
        { label: 'E: Basılı Kitap Teslimleri', status: 'correct', detail: 'Özel matrah değildir; KDV m. 13/n kapsamında tam istisnadır' },
      ],
    },
  },
  {
    number: 62,
    category: 'kdv',
    topic: 'Teslim Sonrası Vade Farkı ve KDV Matrahı',
    lawRef: '3065 sayılı KDVK m. 24 ve m. 25',
    stem: 'KDV’ye tabi bir mal tesliminde aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Satıcının, alıcının gösterdiği yere kadar yaptığı taşıma gideri matraha eklenir.' },
      { key: 'B', text: 'Teslimden sonra, ödemenin gecikmesi nedeniyle doğan vade farkı matraha dâhil edilmez.' },
      { key: 'C', text: 'Faturada gösterilen, ticari teamüle uygun iskonto matrahtan düşülür.' },
      { key: 'D', text: 'Geri verilmesi mutat boş kaplara ilişkin depozito, teminat niteliğini koruduğu sürece matraha eklenmez.' },
      { key: 'E', text: 'Ambalaj ve sigorta giderleri, ayrıca gösterilmiş olsalar da matraha dâhil edilir.' },
    ],
    correctOption: 'B',
    solutionSummary:
      'KDV m. 24/c ve KDV Genel Uygulama Tebliği uyarınca mal teslimi veya hizmet ifasından SONRA ödemenin gecikmesi nedeniyle doğan vade farkı, fiyat farkı ve kur farkları için ayrıca fatura düzenlenir ve KDV matrahına dâhil edilir.',
    goldenTip:
      'Teslim anında da olsa, teslimden sonra geç ödeme sebebiyle de doğsa vade farkı mutlaka KDV’ye tabidir.',
    visualDesignNote: 'Matrah Kuralları Doğrulama Kartı: B şıkkının m. 24/c ile çelişkisinin gösterimi.',
    infographic: {
      kind: 'concept',
      designTitle: 'Teslim Sonrası Vade Farkı Kuralı (m. 24/c)',
      coreRuleTitle: 'Geç Ödeme Nedeniyle Doğan Vade Farkı Matraha Dâhildir',
      coreRuleBody:
        'Vade farkı teslimden sonra ortaya çıksa bile yeni fatura ile KDV’ye tabi tutulur; B şıkkı yanlıştır.',
      points: [
        { label: 'B: Teslim Sonrası Vade Farkı (Yanlış)', status: 'trap', detail: 'Matraha dâhil edilmez ifadesi yanlıştır; KDV’ye tabidir' },
        { label: 'A, C, D, E: Doğru Matrah Kuralları', status: 'correct', detail: 'Satıcı taşıması/ambalaj/sigorta eklenir; iskonto ve geri alınan depozito eklenmez' },
      ],
    },
  },
  {
    number: 63,
    category: 'kdv',
    topic: 'KDV Hesaplama (Depozito ve Gider Kalemleri)',
    lawRef: '3065 sayılı KDVK m. 24 ve m. 25',
    stem: 'Bir işletme KDV’ye tabi malları 600.000 TL bedelle satmıştır (KDV hariç): Ticari teamüle uygun iskonto 30.000 TL, Alıcının gösterdiği yere satıcıca yapılan taşıma 15.000 TL, Ambalaj gideri 8.000 TL, Sigorta gideri 4.000 TL, Vade farkı 12.000 TL, Boş kaplara ait depozito 20.000 TL. KDV oranı %20 ise hesaplanan KDV kaç TL’dir?',
    options: [
      { key: 'A', text: '121.800' },
      { key: 'B', text: '125.800' },
      { key: 'C', text: '118.000' },
      { key: 'D', text: '129.800' },
      { key: 'E', text: '120.000' },
    ],
    correctOption: 'A',
    solutionSummary:
      'Geri verilmesi mutat boş kaplara ait 20.000 TL depozito teminat niteliğinde olduğundan matraha EKLENMEZ. Matrah = 600.000 − 30.000 (iskonto) + 15.000 (taşıma) + 8.000 (ambalaj) + 4.000 (sigorta) + 12.000 (vade farkı) = 609.000 TL. Hesaplanan KDV (%20) = 609.000 × %20 = 121.800 TL.',
    goldenTip:
      'Boş kaplara ait iade edilebilir depozitolar matraha girmez (geri verilmezse girer). Soruda KDV matrahı (609.000) değil, Hesaplanan KDV (121.800) sorulmaktadır!',
    visualDesignNote: 'Matrah ve %20 Vergi Şelalesi: 20.000 TL depozitonun dışarıda bırakılması ve 609.000 × %20 hesabı.',
    infographic: {
      kind: 'waterfall',
      designTitle: 'Matrahtan Hesaplanan KDV’ye (%20)',
      formulaSummary: '(600.000 − 30.000 + 15.000 + 8.000 + 4.000 + 12.000) × %20 = 121.800 TL',
      steps: [
        { label: 'Mal Satış Bedeli', amount: 600000, type: 'base' },
        { label: 'Ticari Teamüle Uygun İskonto', amount: -30000, type: 'sub' },
        { label: 'Taşıma + Ambalaj + Sigorta', amount: 27000, type: 'add', note: '15.000 + 8.000 + 4.000' },
        { label: 'Vade Farkı', amount: 12000, type: 'add' },
        { label: 'Boş Kap Depozitosu', amount: 0, type: 'ignore', note: '20.000 TL · Teminat niteliği, matraha girmez' },
        { label: 'KDV Matrahı', amount: 609000, type: 'subtotal' },
        { label: 'Hesaplanan KDV (%20)', amount: 121800, type: 'result' },
      ],
      finalValueLabel: 'Hesaplanan KDV Tutarı',
      finalValueText: '121.800 TL',
    },
  },
  {
    number: 64,
    category: 'kdv',
    topic: 'İhraç Kayıtlı Teslimde Tecil Edilebilir, Tecil Edilecek ve İade KDV',
    lawRef: '3065 sayılı KDVK m. 11/1-c',
    stem: 'Tekstil imalatçısı (ABC) A.Ş., 2026/Nisan’da yurt içi toptancıya 2.000.000 ₺, ihracatçı (Z) Ltd. Şti.’ye ihraç kaydıyla 8.000.000 ₺ kumaş teslim etmiştir. Önceki dönemden devreden KDV 400.000 ₺, bu dönem indirilecek KDV 1.100.000 ₺’dir. İhracat süresinde gerçekleşmiştir. Sırasıyla tecil edilebilir, tecil edilecek ve iade edilecek KDV kaç ₺’dir? (%20)',
    options: [
      { key: 'A', text: '1.600.000 / 900.000 / 700.000' },
      { key: 'B', text: '1.600.000 / 500.000 / 1.100.000' },
      { key: 'C', text: '2.000.000 / 500.000 / 1.500.000' },
      { key: 'D', text: '1.600.000 / 0 / 1.600.000' },
      { key: 'E', text: '2.000.000 / 900.000 / 1.100.000' },
    ],
    correctOption: 'B',
    solutionSummary:
      'Yurt içi KDV = 2.000.000 × %20 = 400.000 TL. İhraç kayıtlı teslim KDV = 8.000.000 × %20 = 1.600.000 TL (Tecil Edilebilir KDV). Toplam Hesaplanan KDV = 2.000.000 TL. Toplam İndirilecek KDV = 400.000 (devreden) + 1.100.000 (dönem) = 1.500.000 TL. Fark (Ödenecek KDV) = 500.000 TL. Tecil Edilecek KDV = min(1.600.000, 500.000) = 500.000 TL. İade Edilecek KDV = 1.600.000 − 500.000 = 1.100.000 TL.',
    goldenTip:
      'Önceki dönemden devreden KDV (400.000 TL) toplam indirilecek KDV havuzuna dâhil edilir; Tecil Edilecek + İade Edilecek toplamı her zaman Tecil Edilebilir KDV’ye (500B + 1.1M = 1.6M) eşittir!',
    visualDesignNote: '3’lü Kova Akış Diyagramı: 1.6M Tecil Edilebilir → 500B Tecil + 1.1M İade.',
    infographic: {
      kind: 'flow',
      designTitle: 'Nisan 2026 Tecil-Terkin ve İade Dağılımı',
      stages: [
        {
          title: '1. Tecil Edilebilir KDV',
          amountText: '1.600.000 TL',
          subText: '8.000.000 × %20 (Toplam Hesaplanan = 2.000.000 TL)',
          tone: 'neutral',
        },
        {
          title: '2. Tecil Edilecek KDV',
          amountText: '500.000 TL',
          subText: '2.000.000 − (400.000 + 1.100.000) = 500.000 TL Fark',
          tone: 'positive',
        },
        {
          title: '3. İade Alınacak KDV',
          amountText: '1.100.000 TL',
          subText: '1.600.000 − 500.000 = 1.100.000 TL',
          tone: 'accent',
        },
      ],
      summaryEquation: '1.600.000 / 500.000 / 1.100.000 (Doğrulama: 500B + 1.100B = 1.600B)',
    },
  },
];
