import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  FileSpreadsheet,
  Link2,
  Printer,
  X,
} from 'lucide-react';
import { ALL_QUESTIONS, CATEGORIES } from '../data/allQuestions';
import { TaxCategoryId } from '../types/question';
import { downloadOfflineHtmlDeck } from '../utils/exportHtml';
import { downloadPptxDeck } from '../utils/exportPptx';

interface Props {
  open: boolean;
  onClose: () => void;
  onPrintAllPdf: () => void;
}

export function DownloadModal({ open, onClose, onPrintAllPdf }: Props) {
  const [scope, setScope] = useState<'all' | TaxCategoryId>('all');
  const [busyPptx, setBusyPptx] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<'html' | 'app' | null>(null);

  if (!open) return null;

  const shareOrigin =
    typeof window !== 'undefined'
      ? window.location.hostname.includes('ais-dev-')
        ? window.location.origin.replace('ais-dev-', 'ais-pre-')
        : window.location.origin
      : '';

  const htmlPresentationUrl = `${shareOrigin}/sunum.html`;
  const mainAppUrl = `${shareOrigin}/`;

  const copyLink = async (url: string, key: 'html' | 'app') => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedKey(key);
      setStatusMessage('Paylaşım linki panoya kopyalandı. Arkadaşınıza doğrudan gönderebilirsiniz.');
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setStatusMessage(`Link: ${url}`);
    }
  };

  const targetQuestions =
    scope === 'all'
      ? ALL_QUESTIONS
      : ALL_QUESTIONS.filter((q) => q.category === scope);

  const scopeLabel =
    scope === 'all'
      ? 'Tum_99_Soru'
      : CATEGORIES.find((c) => c.id === scope)?.shortTitle.replace(/\s+/g, '_') ?? scope;

  const handlePptx = async () => {
    setBusyPptx(true);
    setStatusMessage(null);
    try {
      await downloadPptxDeck(
        targetQuestions,
        `Vergi_Mevzuati_${scopeLabel}_Slaytlar.pptx`
      );
      setStatusMessage(
        `${targetQuestions.length + 1} slaytlık PowerPoint (.pptx) dosyası indirildi.`
      );
    } catch {
      setStatusMessage('PowerPoint dosyası oluşturulurken hata oluştu.');
    } finally {
      setBusyPptx(false);
    }
  };

  const handleHtml = () => {
    downloadOfflineHtmlDeck(
      targetQuestions,
      `Vergi_Mevzuati_${scopeLabel}_Sunum.html`
    );
    setStatusMessage(
      `${targetQuestions.length + 1} slaytlık çevrimdışı HTML sunum dosyası indirildi.`
    );
  };

  const handlePdf = () => {
    onClose();
    setTimeout(() => {
      onPrintAllPdf();
    }, 120);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/45 backdrop-blur-[1px]">
      <div className="w-full max-w-xl bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Sunumu Paylaş ve İndir
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Arkadaşınızla çevrimiçi HTML sunum linkini paylaşın veya cihazınıza indirin
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

        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Online Shareable HTML Presentation Link */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
              <Link2 className="w-4 h-4 text-sky-700" />
              <span>Arkadaşınla Paylaşabileceğin Canlı HTML Sunum Linki</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2">
                <span className="text-[11px] font-medium text-slate-500 shrink-0 px-1">
                  HTML Sunum:
                </span>
                <input
                  type="text"
                  readOnly
                  value={htmlPresentationUrl}
                  onFocus={(e) => e.target.select()}
                  className="flex-1 min-w-0 font-mono text-[11px] text-slate-800 bg-transparent focus:outline-none"
                />
                <a
                  href="/sunum.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Yeni sekmede aç"
                  className="p-1.5 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => copyLink(htmlPresentationUrl, 'html')}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-slate-900 text-white text-[11px] font-medium hover:bg-slate-800 shrink-0 cursor-pointer"
                >
                  {copiedKey === 'html' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Kopyalandı
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Kopyala
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-2">
                <span className="text-[11px] font-medium text-slate-500 shrink-0 px-1">
                  Tam Uygulama:
                </span>
                <input
                  type="text"
                  readOnly
                  value={mainAppUrl}
                  onFocus={(e) => e.target.select()}
                  className="flex-1 min-w-0 font-mono text-[11px] text-slate-800 bg-transparent focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => copyLink(mainAppUrl, 'app')}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 text-[11px] font-medium hover:bg-slate-100 shrink-0 cursor-pointer"
                >
                  {copiedKey === 'app' ? (
                    <>
                      <Check className="w-3 h-3" />
                      Kopyalandı
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Kopyala
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Scope Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-2">
              Dosya Olarak İndirme Kapsamı ({targetQuestions.length} soru slaytı)
            </label>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setScope('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  scope === 'all'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                Tümü (99 Soru)
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setScope(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    scope === cat.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {cat.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Format Options */}
          <div className="space-y-2.5">
            {/* Option 1: PowerPoint (.pptx) */}
            <button
              type="button"
              disabled={busyPptx}
              onClick={handlePptx}
              className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-white transition-colors flex items-center justify-between gap-4 cursor-pointer disabled:opacity-60"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    PowerPoint Sunumu İndir (.pptx)
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    16:9 widescreen formatında düzenlenebilir soru ve infografik slaytları
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium shrink-0">
                <Download className="w-3.5 h-3.5" />
                {busyPptx ? 'Hazırlanıyor...' : '.pptx İndir'}
              </span>
            </button>

            {/* Option 2: Offline HTML Presentation */}
            <button
              type="button"
              onClick={handleHtml}
              className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-white transition-colors flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                  <FileCode2 className="w-4 h-4 text-sky-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    Çevrimdışı HTML Sunum İndir (.html)
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Tek dosyalık taşınabilir sunum (WhatsApp / e-posta ile de gönderilebilir)
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-medium shrink-0">
                <Download className="w-3.5 h-3.5" />
                .html İndir
              </span>
            </button>

            {/* Option 3: Print / Save All 99 Slides as Landscape PDF */}
            <button
              type="button"
              onClick={handlePdf}
              className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-white transition-colors flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Printer className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    PDF Olarak Kaydet (Tüm 99 Slayt · Yatay A4)
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Yazdırma penceresinde “PDF olarak kaydet” seçerek tek PDF oluşturun
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs font-medium shrink-0">
                <Printer className="w-3.5 h-3.5" />
                PDF Yazdır
              </span>
            </button>
          </div>

          {statusMessage && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs font-medium text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
