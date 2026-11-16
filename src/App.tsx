import { useCallback, useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  LayoutGrid,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Home,
} from 'lucide-react';
import { ALL_QUESTIONS, CATEGORIES, CATEGORY_MAP } from './data/allQuestions';
import { OptionItem, TaxCategoryId } from './types/question';
import { CoverSlide } from './components/CoverSlide';
import { SlideCanvas } from './components/SlideCanvas';
import { QuestionIndexDrawer } from './components/QuestionIndexDrawer';
import { DownloadModal } from './components/DownloadModal';
import { PrintAllDeck } from './components/PrintAllDeck';

function getInitialSlideIndex(): number {
  if (typeof window === 'undefined') return -1;
  const params = new URLSearchParams(window.location.search);
  const soruParam = params.get('soru');
  if (soruParam) {
    const num = parseInt(soruParam, 10);
    const idx = ALL_QUESTIONS.findIndex((q) => q.number === num);
    if (idx !== -1) return idx;
  }
  const bolumParam = params.get('bolum');
  if (bolumParam) {
    const idx = ALL_QUESTIONS.findIndex((q) => q.category === bolumParam);
    if (idx !== -1) return idx;
  }
  return -1;
}

export default function App() {
  // -1 = Cover Slide, 0..98 = Question slides (99 questions total)
  const [slideIndex, setSlideIndex] = useState<number>(getInitialSlideIndex);
  const [quizMode, setQuizMode] = useState<boolean>(false);
  const [revealedMap, setRevealedMap] = useState<Record<number, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, OptionItem['key']>>({});
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [downloadOpen, setDownloadOpen] = useState<boolean>(false);
  const [printAllActive, setPrintAllActive] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalQuestions = ALL_QUESTIONS.length;
  const currentQuestion = slideIndex >= 0 ? ALL_QUESTIONS[slideIndex] : null;
  const currentCategoryMeta = currentQuestion ? CATEGORY_MAP[currentQuestion.category] : null;

  const isCurrentRevealed = currentQuestion
    ? quizMode
      ? Boolean(revealedMap[currentQuestion.number])
      : true
    : true;

  const goPrev = useCallback(() => {
    setSlideIndex((prev) => Math.max(-1, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setSlideIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
  }, [totalQuestions]);

  const jumpToCategory = useCallback((catId: TaxCategoryId) => {
    const idx = ALL_QUESTIONS.findIndex((q) => q.category === catId);
    if (idx !== -1) {
      setSlideIndex(idx);
    }
  }, []);

  const toggleRevealCurrent = useCallback(() => {
    if (!currentQuestion) return;
    if (!quizMode) {
      setQuizMode(true);
      setRevealedMap((prev) => ({ ...prev, [currentQuestion.number]: false }));
      return;
    }
    setRevealedMap((prev) => ({
      ...prev,
      [currentQuestion.number]: !prev[currentQuestion.number],
    }));
  }, [currentQuestion, quizMode]);

  const handleSelectOption = useCallback(
    (key: OptionItem['key']) => {
      if (!currentQuestion) return;
      setSelectedOptions((prev) => ({ ...prev, [currentQuestion.number]: key }));
      if (quizMode) {
        setRevealedMap((prev) => ({ ...prev, [currentQuestion.number]: true }));
      }
    },
    [currentQuestion, quizMode]
  );

  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      setIsFullscreen((prev) => !prev);
    }
  }, []);

  const triggerPrintAllPdf = useCallback(() => {
    setPrintAllActive(true);
    setTimeout(() => {
      window.print();
    }, 150);
  }, []);

  useEffect(() => {
    const onAfterPrint = () => {
      setPrintAllActive(false);
    };
    window.addEventListener('afterprint', onAfterPrint);
    return () => window.removeEventListener('afterprint', onAfterPrint);
  }, []);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (drawerOpen || downloadOpen) {
        if (e.key === 'Escape') {
          setDrawerOpen(false);
          setDownloadOpen(false);
        }
        return;
      }
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === ' ' && currentQuestion) {
        e.preventDefault();
        toggleRevealCurrent();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen, downloadOpen, goNext, goPrev, currentQuestion, toggleRevealCurrent]);

  const progressPct =
    slideIndex < 0 ? 0 : Math.round(((slideIndex + 1) / totalQuestions) * 100);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 no-print">
        {/* Top Bar Contract: Exactly 3 zones separated by gap-8 */}
        {!isFullscreen && (
          <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-3.5 flex items-center justify-between gap-8">
            {/* Zone 1: Single-line Brand Wordmark */}
            <button
              type="button"
              onClick={() => setSlideIndex(-1)}
              className="text-base lg:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 cursor-pointer font-display"
            >
              Vergi Mevzuatı Sunumu
            </button>

            {/* Zone 2: 5 Concise Single-Line Chapter Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              {CATEGORIES.map((cat) => {
                const isActive = currentQuestion?.category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => jumpToCategory(cat.id)}
                    className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                      isActive
                        ? `${cat.textClass} border-current font-semibold`
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    {cat.shortTitle}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary CTA */}
            <div className="flex items-center shrink-0">
              <button
                type="button"
                onClick={() => setDownloadOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Sunumu İndir
              </button>
            </div>
          </header>
        )}

        {/* Presentation Flow Toolbar */}
        <div className="bg-white/90 border-b border-slate-200 px-4 lg:px-8 py-2.5">
          <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3">
            {/* Left: Home + Index Drawer + Quiz Mode + Fullscreen */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setSlideIndex(-1)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  slideIndex === -1
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                Kapak
              </button>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Tüm Slaytlar (99)
              </button>

              <button
                type="button"
                onClick={() => {
                  setQuizMode((prev) => !prev);
                  setRevealedMap({});
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  quizMode
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {quizMode ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    Sınav Modu Açık
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    Çözümlü Sunum Modu
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    Tam Ekrandan Çık
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    Tam Ekran
                  </>
                )}
              </button>
            </div>

            {/* Right: Slide Counter & Prev/Next Stepper */}
            <div className="flex items-center gap-2">
              {isFullscreen && (
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  İndir
                </button>
              )}

              <span className="font-mono tabular-nums text-xs text-slate-600 px-2">
                {slideIndex === -1
                  ? 'Slayt 00 / 99'
                  : `Slayt ${String(slideIndex + 1).padStart(2, '0')} / ${totalQuestions} · Soru ${currentQuestion?.number}`}
              </span>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={slideIndex <= -1}
                  aria-label="Önceki slayt"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  Önceki
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={slideIndex >= totalQuestions - 1}
                  aria-label="Sonraki slayt"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Sonraki
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Thin Progress Track */}
          <div className="max-w-[1360px] mx-auto mt-2 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-200 ${
                currentCategoryMeta ? currentCategoryMeta.barClass : 'bg-slate-800'
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Main Slide Stage */}
        <main className="flex-1 w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-5 flex flex-col justify-center">
          {slideIndex === -1 || !currentQuestion ? (
            <CoverSlide
              onStartDeck={() => setSlideIndex(0)}
              onJumpCategory={jumpToCategory}
              onOpenDownload={() => setDownloadOpen(true)}
            />
          ) : (
            <SlideCanvas
              question={currentQuestion}
              revealed={isCurrentRevealed}
              selectedOption={selectedOptions[currentQuestion.number] ?? null}
              onSelectOption={handleSelectOption}
              onToggleReveal={toggleRevealCurrent}
            />
          )}
        </main>

        {/* Quiet Footer */}
        <footer className="px-4 lg:px-8 py-3 border-t border-slate-200 bg-white text-[11px] text-slate-500">
          <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-2">
            <span>
              Vergi Mevzuatı ve Uygulamaları · 100 Altın Soru İnfografik Slayt Sunumu
            </span>
            <span>
              Klavye Kısayolları: ← Önceki · → Sonraki · Boşluk (Space) Çözümü Göster/Gizle
            </span>
          </div>
        </footer>

        {/* Slide Sorter / Question Index Drawer */}
        <QuestionIndexDrawer
          open={drawerOpen}
          currentSlideIndex={slideIndex}
          onSelectSlide={setSlideIndex}
          onClose={() => setDrawerOpen(false)}
        />

        {/* Download Export Modal */}
        <DownloadModal
          open={downloadOpen}
          onClose={() => setDownloadOpen(false)}
          onPrintAllPdf={triggerPrintAllPdf}
        />
      </div>

      {/* Hidden Print-All Deck for Landscape PDF Export */}
      <PrintAllDeck active={printAllActive} />
    </>
  );
}
