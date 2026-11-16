import { ArrowRight, BarChart3, Calendar, Download, GitBranch, Layers, Scale } from 'lucide-react';
import { CATEGORIES, ALL_QUESTIONS } from '../data/allQuestions';
import { TaxCategoryId } from '../types/question';

interface Props {
  onStartDeck: () => void;
  onJumpCategory: (categoryId: TaxCategoryId) => void;
  onOpenDownload: () => void;
}

const DESIGN_PATTERNS = [
  {
    icon: BarChart3,
    title: 'Şelale (Waterfall) Diyagramı',
    desc: 'Matrah ekleme (+), istisna/zarar düşümü (−) ve net vergi hesabı',
  },
  {
    icon: Scale,
    title: 'Eşik & Sınır Göstergesi',
    desc: 'Örtülü sermaye (3× öz sermaye) ve oran kısıtlamaları',
  },
  {
    icon: Calendar,
    title: 'Kronolojik Zaman Çizelgesi',
    desc: 'Tescil, beyan, ödeme, indirim ve zamanaşımı vadeleri',
  },
  {
    icon: Layers,
    title: 'Kademeli Akış Şeması',
    desc: 'İhraç kayıtlı tecil-terkin, sermaye azaltımı ve zincir vergileme',
  },
  {
    icon: GitBranch,
    title: 'Mevzuat Karşılaştırma Kartı',
    desc: 'Temel kanun maddesi, doğru kural ve sınav tuzağı ayrımı',
  },
];

export function CoverSlide({ onStartDeck, onJumpCategory, onOpenDownload }: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 lg:p-10 shadow-xs flex flex-col justify-between gap-8 min-h-[580px]">
      {/* Top Split: Hero Title + CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Vergi Mevzuatı ve Uygulamaları · İnteraktif İnfografik Slayt Sunumu
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mt-2 text-balance">
              100 Altın Soru — Tek Slaytta Soru, Çözüm ve Görsel İnfografik
            </h1>
            <p className="text-sm lg:text-base text-slate-600 mt-3 leading-relaxed max-w-2xl">
              Her soru, cevabı ve kanun gerekçesi tek bir 16:9 slayt düzeninde bir araya getirildi.
              Sunum akışında klavye oklarıyla ilerleyebilir, sınav modunda cevapları gizleyerek
              kendinizi test edebilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onStartDeck}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Sunumu Başlat (Soru 1)
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              İndir (.pptx / .html / PDF)
            </button>
            <span className="text-xs text-slate-500 font-mono tabular-nums">
              Toplam 99 Soru Slaytı (Kaynak PDF’te 5. soru boş bırakılmıştır)
            </span>
          </div>
        </div>

        {/* Right: 5 Visual Design Patterns Overview */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-slate-500">Slayt Tasarım Mimarisi</p>
            <h2 className="text-base font-semibold text-slate-900 mt-0.5">
              Her Slayt İçin 5 Net İnfografik Şablonu
            </h2>
          </div>
          <div className="space-y-2.5">
            {DESIGN_PATTERNS.map((pat, i) => {
              const Icon = pat.icon;
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-slate-900">{pat.title}</div>
                    <div className="text-xs text-slate-500 leading-snug">{pat.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom: 5 Chapter Flow Cards */}
      <div className="pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-900">Sunum Akışı — 5 Kanun Bölümü</h2>
          <span className="text-xs text-slate-500">Doğrudan ilgili bölüme geçmek için tıklayın</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {CATEGORIES.map((cat, idx) => {
            const count = ALL_QUESTIONS.filter((q) => q.category === cat.id).length;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onJumpCategory(cat.id)}
                className="text-left p-3.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 transition-colors flex flex-col justify-between gap-2 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono tabular-nums">
                    <span>0{idx + 1}</span>
                    <span>{count} Slayt</span>
                  </div>
                  <div className={`text-sm font-semibold mt-1 ${cat.textClass}`}>
                    {cat.shortTitle}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">{cat.fullTitle}</div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{cat.questionRange}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
