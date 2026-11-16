import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CategoryMeta, TimelineInfographicData } from '../../types/question';

interface Props {
  data: TimelineInfographicData;
  category: CategoryMeta;
  revealed: boolean;
}

export function TimelineInfographic({ data, category, revealed }: Props) {
  return (
    <div className="flex flex-col justify-between h-full gap-3">
      <div className="pb-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">Kronolojik Süreç & Vade Çizelgesi</p>
          <h3 className="text-base font-semibold text-slate-900 mt-0.5">{data.designTitle}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 shrink-0">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          {data.spanLabel}
        </span>
      </div>

      {/* Horizontal / Vertical responsive timeline */}
      <div className="flex-1 flex flex-col justify-center gap-2.5">
        {data.nodes.map((node, idx) => {
          const isHighlight = node.highlight && revealed;
          return (
            <div key={idx} className="relative flex items-stretch gap-3">
              {/* Left step connector */}
              <div className="flex flex-col items-center w-6 shrink-0">
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-semibold border ${
                    isHighlight
                      ? `${category.barClass} text-white border-transparent`
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {idx + 1}
                </div>
                {idx < data.nodes.length - 1 && (
                  <div className="w-px flex-1 bg-slate-200 my-1" />
                )}
              </div>

              {/* Node card */}
              <div
                className={`flex-1 p-3 rounded-lg border transition-colors ${
                  isHighlight
                    ? `${category.lightBgClass} ${category.borderClass}`
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-mono tabular-nums text-xs font-semibold ${
                      isHighlight ? category.textClass : 'text-slate-600'
                    }`}
                  >
                    {node.dateLabel}
                  </span>
                  {idx < data.nodes.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  )}
                </div>
                <div
                  className={`text-sm font-semibold mt-0.5 ${
                    !revealed && node.highlight ? 'text-slate-300 blur-[3px]' : 'text-slate-900'
                  }`}
                >
                  {node.title}
                </div>
                <p
                  className={`text-xs mt-0.5 ${
                    !revealed && node.highlight ? 'text-slate-300 blur-[3px]' : 'text-slate-600'
                  }`}
                >
                  {node.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`p-3 rounded-lg border flex items-start gap-2.5 ${
          revealed
            ? `${category.lightBgClass} ${category.borderClass}`
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <CheckCircle2
          className={`w-4 h-4 mt-0.5 shrink-0 ${
            revealed ? category.textClass : 'text-slate-300'
          }`}
        />
        <div className={`text-xs font-medium ${revealed ? 'text-slate-800' : 'text-slate-300 blur-[3px]'}`}>
          {data.keyTakeaway}
        </div>
      </div>
    </div>
  );
}
