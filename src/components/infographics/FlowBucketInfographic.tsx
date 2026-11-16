import { ArrowDown, Layers } from 'lucide-react';
import { CategoryMeta, FlowInfographicData } from '../../types/question';

interface Props {
  data: FlowInfographicData;
  category: CategoryMeta;
  revealed: boolean;
}

export function FlowBucketInfographic({ data, category, revealed }: Props) {
  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="pb-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">Kademeli Akış & Dağılım Şeması</p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">{data.designTitle}</h3>
        </div>
        <Layers className="w-4 h-4 text-slate-400 shrink-0" />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2">
        {data.stages.map((stage, idx) => {
          const isAccent = stage.tone === 'accent';
          const isPositive = stage.tone === 'positive';
          const isMuted = stage.tone === 'muted';

          return (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-full p-3 rounded-lg border flex items-center justify-between gap-4 ${
                  !revealed
                    ? 'bg-white border-slate-200'
                    : isAccent
                      ? `${category.lightBgClass} ${category.borderClass}`
                      : isPositive
                        ? 'bg-emerald-50/60 border-emerald-200'
                        : isMuted
                          ? 'bg-slate-50 border-slate-200'
                          : 'bg-white border-slate-200'
                }`}
              >
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-900">{stage.title}</div>
                  <div
                    className={`text-xs mt-0.5 ${
                      !revealed ? 'text-slate-300 blur-[3px]' : 'text-slate-600'
                    }`}
                  >
                    {stage.subText}
                  </div>
                </div>
                <div
                  className={`font-mono tabular-nums text-sm font-semibold text-right shrink-0 ${
                    !revealed
                      ? 'text-slate-300 blur-[4px]'
                      : isAccent
                        ? category.textClass
                        : isPositive
                          ? 'text-emerald-800'
                          : isMuted
                            ? 'text-slate-500'
                            : 'text-slate-900'
                  }`}
                >
                  {stage.amountText}
                </div>
              </div>
              {idx < data.stages.length - 1 && (
                <ArrowDown className="w-4 h-4 text-slate-300 my-1" />
              )}
            </div>
          );
        })}
      </div>

      <div className="p-3 rounded-lg bg-slate-900 text-slate-100 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-400 shrink-0">Özet Denklem</span>
        <span
          className={`font-mono tabular-nums text-xs font-medium text-right ${
            revealed ? 'text-white' : 'text-slate-600 blur-[3px]'
          }`}
        >
          {data.summaryEquation}
        </span>
      </div>
    </div>
  );
}
