import { CheckCircle2, AlertTriangle, MinusCircle, Percent } from 'lucide-react';
import { CategoryMeta, ThresholdInfographicData } from '../../types/question';

interface Props {
  data: ThresholdInfographicData;
  category: CategoryMeta;
  revealed: boolean;
}

export function ThresholdGaugeInfographic({ data, category, revealed }: Props) {
  const usagePct = Math.min(100, Math.round((data.totalCounted / data.limitAmount) * 100));

  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="pb-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">Eşik & Oran Sınır Göstergesi</p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">{data.designTitle}</h3>
        </div>
        <div className="text-right">
          <span className="text-[11px] text-slate-500 block">{data.limitLabel}</span>
          <span className="font-mono tabular-nums text-sm font-semibold text-slate-900">
            {data.limitAmount.toLocaleString('tr-TR')} TL
          </span>
        </div>
      </div>

      {/* Gauge bar */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-slate-700">Dikkate Alınan Borç Toplamı</span>
          <span
            className={`font-mono tabular-nums font-semibold ${
              revealed ? category.textClass : 'text-slate-300 blur-[3px]'
            }`}
          >
            {data.totalCounted.toLocaleString('tr-TR')} TL / {data.limitAmount.toLocaleString('tr-TR')} TL
          </span>
        </div>
        <div className="relative h-4 bg-white border border-slate-200 rounded-md overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              !revealed
                ? 'bg-slate-200'
                : data.isExceeded
                  ? 'bg-rose-600'
                  : 'bg-emerald-600'
            }`}
            style={{ width: revealed ? `${usagePct}%` : '0%' }}
          />
          <div
            className="absolute inset-y-0 right-0 w-0.5 bg-slate-900"
            title="3x Öz Sermaye Sınırı"
          />
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 font-mono tabular-nums">
            Doluluk: {revealed ? `%${usagePct}` : '—'}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-medium ${
              !revealed
                ? 'text-slate-300 blur-[3px]'
                : data.isExceeded
                  ? 'text-rose-700'
                  : 'text-emerald-700'
            }`}
          >
            {data.isExceeded ? (
              <AlertTriangle className="w-3.5 h-3.5" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5" />
            )}
            {data.verdictLabel}
          </span>
        </div>
      </div>

      {/* Item breakdown */}
      <div className="space-y-2 flex-1 flex flex-col justify-center">
        {data.items.map((item, idx) => {
          const isIncluded = item.status === 'included';
          const isPartial = item.status === 'partial';
          const StatusIcon = isIncluded
            ? CheckCircle2
            : isPartial
              ? Percent
              : MinusCircle;

          return (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-white border border-slate-200"
            >
              <div className="min-w-0 flex items-start gap-2.5">
                <StatusIcon
                  className={`w-4 h-4 mt-0.5 shrink-0 ${
                    !revealed
                      ? 'text-slate-300'
                      : isIncluded
                        ? 'text-sky-700'
                        : isPartial
                          ? 'text-amber-700'
                          : 'text-slate-400'
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-800">{item.label}</div>
                  <div className="text-[11px] text-slate-500">
                    {revealed ? item.ruleNote : 'Kural analizi çözümde gösterilir'}
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-mono tabular-nums text-[11px] text-slate-500">
                  Brüt: {item.rawAmount.toLocaleString('tr-TR')} TL ·{' '}
                  <span className={revealed ? 'font-semibold text-slate-800' : 'blur-[3px]'}>
                    {item.includedRatio}
                  </span>
                </div>
                <div
                  className={`font-mono tabular-nums text-xs font-semibold ${
                    !revealed
                      ? 'text-slate-300 blur-[3px]'
                      : item.countedAmount === 0
                        ? 'text-slate-400'
                        : 'text-slate-900'
                  }`}
                >
                  {item.countedAmount.toLocaleString('tr-TR')} TL
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
