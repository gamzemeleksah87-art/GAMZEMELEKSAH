import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ALL_QUESTIONS, CATEGORIES, CATEGORY_MAP } from '../data/allQuestions';

interface Props {
  open: boolean;
  currentSlideIndex: number; // -1 for cover, 0..98 for questions
  onSelectSlide: (index: number) => void;
  onClose: () => void;
}

export function QuestionIndexDrawer({
  open,
  currentSlideIndex,
  onSelectSlide,
  onClose,
}: Props) {
  const [query, setQuery] = useState('');

  const filteredQuestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_QUESTIONS;
    return ALL_QUESTIONS.filter(
      (item) =>
        String(item.number).includes(q) ||
        item.topic.toLowerCase().includes(q) ||
        item.lawRef.toLowerCase().includes(q) ||
        item.stem.toLowerCase().includes(q)
    );
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-[1px]">
      <div className="w-full max-w-2xl bg-white h-full border-l border-slate-200 flex flex-col shadow-xl">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Slayt Akışı & İçindekiler (100 Altın Soru)
            </h2>
            <p className="text-xs text-slate-500">
              Kapak + 99 soru slaytı arasında doğrudan geçiş yapın (Soru 5 PDF’te boştur)
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Kapat"
            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Soru no, konu veya kanun maddesi ara (ör. 54, örtülü, tecil)..."
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500"
            />
          </div>
        </div>

        {/* Grid List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Cover Slide shortcut */}
          <button
            type="button"
            onClick={() => {
              onSelectSlide(-1);
              onClose();
            }}
            className={`w-full text-left p-3 rounded-lg border transition-colors flex items-center justify-between cursor-pointer ${
              currentSlideIndex === -1
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-400'
            }`}
          >
            <div>
              <span className="text-xs font-semibold block">Slayt 00 · Sunum Kapak & Akış Özeti</span>
              <span
                className={`text-[11px] ${
                  currentSlideIndex === -1 ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                5 kanun bölümü ve 5 infografik şablonu tanıtımı
              </span>
            </div>
            <span className="font-mono text-xs">Kapak</span>
          </button>

          {CATEGORIES.map((cat) => {
            const catItems = filteredQuestions.filter((q) => q.category === cat.id);
            if (catItems.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-2.5">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                  <h3 className={`text-xs font-semibold ${cat.textClass}`}>
                    {cat.fullTitle} · {cat.lawCode}
                  </h3>
                  <span className="font-mono text-[11px] text-slate-500">{catItems.length} slayt</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {catItems.map((q) => {
                    const idx = ALL_QUESTIONS.findIndex((item) => item.number === q.number);
                    const isActive = idx === currentSlideIndex;
                    const meta = CATEGORY_MAP[q.category];

                    return (
                      <button
                        key={q.number}
                        type="button"
                        onClick={() => {
                          onSelectSlide(idx);
                          onClose();
                        }}
                        className={`text-left p-2.5 rounded-lg border transition-colors flex items-start gap-2.5 cursor-pointer ${
                          isActive
                            ? `${meta.lightBgClass} ${meta.borderClass}`
                            : 'bg-white border-slate-200 hover:border-slate-400'
                        }`}
                      >
                        <span
                          className={`font-mono tabular-nums text-xs font-semibold w-7 h-7 rounded flex items-center justify-center shrink-0 ${
                            isActive ? `${meta.barClass} text-white` : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {q.number}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-slate-900 truncate">
                            {q.topic}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate">{q.lawRef}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-10 text-xs text-slate-500">
              Aramanızla eşleşen soru bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
