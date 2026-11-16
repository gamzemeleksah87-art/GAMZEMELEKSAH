import { CheckCircle2, Eye, EyeOff, Lightbulb, Palette, XCircle } from 'lucide-react';
import { CATEGORY_MAP } from '../data/allQuestions';
import { OptionItem, TaxQuestion } from '../types/question';
import { ConceptMatrixInfographic } from './infographics/ConceptMatrixInfographic';
import { FlowBucketInfographic } from './infographics/FlowBucketInfographic';
import { ThresholdGaugeInfographic } from './infographics/ThresholdGaugeInfographic';
import { TimelineInfographic } from './infographics/TimelineInfographic';
import { WaterfallInfographic } from './infographics/WaterfallInfographic';

interface Props {
  question: TaxQuestion;
  revealed: boolean;
  selectedOption: OptionItem['key'] | null;
  onSelectOption: (key: OptionItem['key']) => void;
  onToggleReveal: () => void;
}

export function SlideCanvas({
  question,
  revealed,
  selectedOption,
  onSelectOption,
  onToggleReveal,
}: Props) {
  const category = CATEGORY_MAP[question.category];

  const renderInfographic = () => {
    switch (question.infographic.kind) {
      case 'waterfall':
        return (
          <WaterfallInfographic
            data={question.infographic}
            category={category}
            revealed={revealed}
          />
        );
      case 'threshold':
        return (
          <ThresholdGaugeInfographic
            data={question.infographic}
            category={category}
            revealed={revealed}
          />
        );
      case 'timeline':
        return (
          <TimelineInfographic
            data={question.infographic}
            category={category}
            revealed={revealed}
          />
        );
      case 'flow':
        return (
          <FlowBucketInfographic
            data={question.infographic}
            category={category}
            revealed={revealed}
          />
        );
      case 'concept':
        return (
          <ConceptMatrixInfographic
            data={question.infographic}
            category={category}
            revealed={revealed}
          />
        );
    }
  };

  return (
    <article className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col">
      {/* Slide Header: Zero-pill unboxed metadata + Title + Reveal toggle */}
      <div className="px-5 py-3.5 lg:px-7 lg:py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className={`font-semibold ${category.textClass}`}>{category.fullTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{category.lawCode}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-slate-600">{question.lawRef}</span>
          </div>
          <h2 className="text-lg lg:text-xl font-bold text-slate-900 mt-0.5 text-balance">
            <span className="font-mono tabular-nums mr-2 text-slate-500">
              Soru {String(question.number).padStart(2, '0')}
            </span>
            {question.topic}
          </h2>
        </div>

        <button
          type="button"
          onClick={onToggleReveal}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          {revealed ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-slate-500" />
              Çözümü Gizle
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-slate-700" />
              Çözümü Göster
            </>
          )}
        </button>
      </div>

      {/* Main 2-Zone Slide Body: Left Question + Answer / Right Visual Infographic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Zone (5 cols): Question Stem, Options / SubAnswers, Solution */}
        <div className="lg:col-span-5 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between gap-4">
          <div className="space-y-3.5">
            {/* Stem */}
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              {question.stem}
            </p>

            {/* Optional bullet details */}
            {question.bulletDetails && question.bulletDetails.length > 0 && (
              <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {question.bulletDetails.map((item, idx) => (
                  <li key={idx} className="leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Multiple Choice Options */}
            {question.options && (
              <div className="space-y-1.5">
                {question.options.map((opt) => {
                  const isCorrect = question.correctOption === opt.key;
                  const isSelected = selectedOption === opt.key;
                  const showCorrect = revealed && isCorrect;
                  const showWrong = revealed && isSelected && !isCorrect;

                  return (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => onSelectOption(opt.key)}
                      className={`w-full text-left px-3 py-2 rounded-lg border text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${
                        showCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                          : showWrong
                            ? 'bg-rose-50 border-rose-300 text-rose-950'
                            : isSelected
                              ? 'bg-slate-100 border-slate-400 text-slate-900 font-medium'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span
                        className={`font-mono font-semibold w-5 h-5 rounded flex items-center justify-center shrink-0 text-[11px] ${
                          showCorrect
                            ? 'bg-emerald-700 text-white'
                            : showWrong
                              ? 'bg-rose-700 text-white'
                              : isSelected
                                ? 'bg-slate-800 text-white'
                                : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="flex-1 leading-snug">{opt.text}</span>
                      {showCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      )}
                      {showWrong && (
                        <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Direct Answer (for open-ended calculation questions Q1-Q9) */}
            {question.directAnswer && (
              <div
                className={`p-3 rounded-lg border ${
                  revealed
                    ? `${category.lightBgClass} ${category.borderClass}`
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[11px] font-medium text-slate-500 block">
                  Doğru Sonuç / Cevap
                </span>
                <span
                  className={`font-mono tabular-nums text-sm font-semibold mt-0.5 block ${
                    revealed ? category.textClass : 'text-slate-300 blur-[4px] select-none'
                  }`}
                >
                  {question.directAnswer}
                </span>
              </div>
            )}

            {/* Sub-answers (for multi-part Q21) */}
            {question.subAnswers && (
              <div className="space-y-1.5">
                {question.subAnswers.map((sub, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-800">{sub.label}</span>
                      <span
                        className={`font-mono font-semibold ${
                          revealed ? category.textClass : 'text-slate-300 blur-[4px]'
                        }`}
                      >
                        {sub.answer}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        revealed ? 'text-slate-600' : 'text-slate-300 blur-[3px]'
                      }`}
                    >
                      {sub.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Concise Solution Explanation */}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <div>
              <div className="text-[11px] font-semibold text-slate-500 mb-1">
                Çözüm Açıklaması
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  revealed ? 'text-slate-700' : 'text-slate-300 blur-[4px] select-none'
                }`}
              >
                {question.solutionSummary}
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-snug">
                <span className="font-semibold text-slate-800">Altın Sınav İpucu: </span>
                <span className={revealed ? 'text-slate-600' : 'text-slate-300 blur-[3px]'}>
                  {question.goldenTip}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone (7 cols): Interactive Visual Infographic + Visual Design Recommendation */}
        <div className="lg:col-span-7 p-5 lg:p-6 bg-slate-50/50 flex flex-col justify-between gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 lg:p-5 flex-1 flex flex-col">
            {renderInfographic()}
          </div>

          {/* Slide Visual Design Recommendation Strip */}
          <div className="px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5">
            <Palette className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-600 leading-snug">
              <span className="font-semibold text-slate-800">Slayt Görsel Tasarım Önerisi: </span>
              {question.visualDesignNote}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
