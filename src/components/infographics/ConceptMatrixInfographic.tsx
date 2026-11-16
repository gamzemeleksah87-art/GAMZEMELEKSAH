import { BookOpen, CheckCircle2, XCircle, Info } from 'lucide-react';
import { CategoryMeta, ConceptInfographicData } from '../../types/question';

interface Props {
  data: ConceptInfographicData;
  category: CategoryMeta;
  revealed: boolean;
}

export function ConceptMatrixInfographic({ data, category, revealed }: Props) {
  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="pb-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">Mevzuat Karar & Karşılaştırma Kartı</p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">{data.designTitle}</h3>
        </div>
        <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
      </div>

      {/* Core statutory rule */}
      <div
        className={`p-3.5 rounded-lg border ${
          revealed
            ? `${category.lightBgClass} ${category.borderClass}`
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="text-xs font-medium text-slate-500">Temel Kanun Kuralı</div>
        <div
          className={`text-sm font-semibold mt-0.5 ${
            revealed ? category.textClass : 'text-slate-300 blur-[4px]'
          }`}
        >
          {data.coreRuleTitle}
        </div>
        <p
          className={`text-xs leading-relaxed mt-1 ${
            revealed ? 'text-slate-700' : 'text-slate-300 blur-[3px]'
          }`}
        >
          {data.coreRuleBody}
        </p>
      </div>

      {/* Structured comparison points */}
      <div className="space-y-2 flex-1 flex flex-col justify-center">
        {data.points.map((pt, idx) => {
          const isCorrect = pt.status === 'correct';
          const isTrap = pt.status === 'trap';
          const Icon = isCorrect ? CheckCircle2 : isTrap ? XCircle : Info;

          return (
            <div
              key={idx}
              className={`p-3 rounded-lg border flex items-start gap-2.5 ${
                !revealed
                  ? 'bg-white border-slate-200'
                  : isCorrect
                    ? 'bg-emerald-50/60 border-emerald-200'
                    : isTrap
                      ? 'bg-rose-50/60 border-rose-200'
                      : 'bg-white border-slate-200'
              }`}
            >
              <Icon
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  !revealed
                    ? 'text-slate-300'
                    : isCorrect
                      ? 'text-emerald-700'
                      : isTrap
                        ? 'text-rose-700'
                        : 'text-sky-700'
                }`}
              />
              <div className="min-w-0">
                <div
                  className={`text-xs font-semibold ${
                    !revealed
                      ? 'text-slate-400 blur-[3px]'
                      : isCorrect
                        ? 'text-emerald-900'
                        : isTrap
                          ? 'text-rose-900'
                          : 'text-slate-900'
                  }`}
                >
                  {pt.label}
                </div>
                <p
                  className={`text-xs mt-0.5 leading-relaxed ${
                    !revealed ? 'text-slate-300 blur-[3px]' : 'text-slate-600'
                  }`}
                >
                  {pt.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
