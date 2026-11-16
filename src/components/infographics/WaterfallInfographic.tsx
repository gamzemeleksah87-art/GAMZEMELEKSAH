import { Ban, CheckCircle2, Minus, Plus, Equal } from 'lucide-react';
import { CategoryMeta, WaterfallInfographicData } from '../../types/question';

interface Props {
  data: WaterfallInfographicData;
  category: CategoryMeta;
  revealed: boolean;
}

function formatTL(val: number): string {
  const abs = Math.abs(val);
  return `${val < 0 ? '−' : ''}${abs.toLocaleString('tr-TR')} TL`;
}

export function WaterfallInfographic({ data, category, revealed }: Props) {
  const maxVal = Math.max(
    ...data.steps.map((s) => Math.abs(s.amount)),
    1
  );

  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-200">
        <div>
          <p className="text-xs font-medium text-slate-500">Şelale Hesaplama Diyagramı</p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">{data.designTitle}</h3>
        </div>
        <span className="font-mono text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 shrink-0">
          {data.formulaSummary}
        </span>
      </div>

      <div className="space-y-1.5 flex-1 flex flex-col justify-center">
        {data.steps.map((step, idx) => {
          const widthPct =
            step.type === 'ignore'
              ? 18
              : Math.max(8, Math.round((Math.abs(step.amount) / maxVal) * 100));

          const isResult = step.type === 'result';
          const isSubtotal = step.type === 'subtotal';
          const isAdd = step.type === 'add';
          const isSub = step.type === 'sub';
          const isIgnore = step.type === 'ignore';

          const barColor = isResult
            ? category.barClass
            : isSubtotal
              ? 'bg-slate-700'
              : isAdd
                ? 'bg-sky-600'
                : isSub
                  ? 'bg-rose-600'
                  : isIgnore
                    ? 'bg-slate-300'
                    : 'bg-slate-500';

          const Icon = isResult
            ? CheckCircle2
            : isAdd
              ? Plus
              : isSub
                ? Minus
                : isIgnore
                  ? Ban
                  : Equal;

          return (
            <div
              key={idx}
              className={`grid grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)_auto] items-center gap-3 px-2.5 py-1.5 rounded-lg border ${
                isResult && revealed
                  ? `${category.lightBgClass} ${category.borderClass}`
                  : isSubtotal
                    ? 'bg-slate-100/80 border-slate-200'
                    : 'bg-white border-slate-100'
              }`}
            >
              <div className="min-w-0 flex items-center gap-2">
                <Icon
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isResult
                      ? category.textClass
                      : isAdd
                        ? 'text-sky-700'
                        : isSub
                          ? 'text-rose-700'
                          : 'text-slate-500'
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-xs font-medium text-slate-800 truncate">{step.label}</div>
                  {step.note && (
                    <div className="text-[11px] text-slate-500 truncate">{step.note}</div>
                  )}
                </div>
              </div>

              <div className="h-2.5 bg-slate-100 rounded-sm overflow-hidden">
                <div
                  className={`h-full rounded-sm transition-all duration-300 ${
                    revealed ? barColor : 'bg-slate-200'
                  }`}
                  style={{ width: revealed ? `${widthPct}%` : '0%' }}
                />
              </div>

              <div
                className={`font-mono tabular-nums text-xs text-right min-w-[96px] ${
                  !revealed
                    ? 'text-slate-300 select-none blur-[3px]'
                    : isResult
                      ? `font-semibold ${category.textClass}`
                      : isSub
                        ? 'text-rose-700 font-medium'
                        : isAdd
                          ? 'text-sky-800 font-medium'
                          : isIgnore
                            ? 'text-slate-400 line-through'
                            : 'text-slate-900 font-medium'
                }`}
              >
                {isIgnore ? 'Hariç' : formatTL(step.amount)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2.5 border-t border-slate-200 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-500 block">{data.finalValueLabel}</span>
          <span
            className={`font-mono tabular-nums text-lg font-semibold ${
              revealed ? category.textClass : 'text-slate-300 blur-[4px]'
            }`}
          >
            {data.finalValueText}
          </span>
        </div>
        {data.secondaryMetric && (
          <div className="text-right">
            <span className="text-xs text-slate-500 block">{data.secondaryMetric.label}</span>
            <span
              className={`font-mono tabular-nums text-xs font-medium ${
                revealed ? 'text-slate-700' : 'text-slate-300 blur-[3px]'
              }`}
            >
              {data.secondaryMetric.value}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
