import { CATEGORIES, CATEGORY_MAP } from '../data/allQuestions';
import { TaxQuestion } from '../types/question';

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatTL(val: number): string {
  const abs = Math.abs(val);
  return `${val < 0 ? '−' : ''}${abs.toLocaleString('tr-TR')} TL`;
}

function renderInfographicHtml(q: TaxQuestion): string {
  const cat = CATEGORY_MAP[q.category];
  const info = q.infographic;

  if (info.kind === 'waterfall') {
    const maxVal = Math.max(...info.steps.map((s) => Math.abs(s.amount)), 1);
    const rows = info.steps
      .map((s) => {
        const pct = s.type === 'ignore' ? 18 : Math.max(8, Math.round((Math.abs(s.amount) / maxVal) * 100));
        const color =
          s.type === 'result'
            ? cat.accentHex
            : s.type === 'add'
              ? '#0284c7'
              : s.type === 'sub'
                ? '#be123c'
                : s.type === 'ignore'
                  ? '#cbd5e1'
                  : '#334155';
        return `
          <div class="wf-row ${s.type === 'result' ? 'wf-result' : ''}">
            <div class="wf-label">
              <strong>${esc(s.label)}</strong>
              ${s.note ? `<small>${esc(s.note)}</small>` : ''}
            </div>
            <div class="wf-track"><div class="wf-bar" style="width:${pct}%;background:${color}"></div></div>
            <div class="wf-val" style="color:${color}">${s.type === 'ignore' ? 'Hariç' : esc(formatTL(s.amount))}</div>
          </div>`;
      })
      .join('');
    return `
      <div class="info-head">
        <div><span class="kicker">Şelale Hesaplama Diyagramı</span><h3>${esc(info.designTitle)}</h3></div>
        <code>${esc(info.formulaSummary)}</code>
      </div>
      <div class="wf-list">${rows}</div>
      <div class="info-foot">
        <span>${esc(info.finalValueLabel)}</span>
        <strong style="color:${cat.accentHex}">${esc(info.finalValueText)}</strong>
      </div>`;
  }

  if (info.kind === 'threshold') {
    const pct = Math.min(100, Math.round((info.totalCounted / info.limitAmount) * 100));
    const items = info.items
      .map(
        (it) => `
        <div class="th-item">
          <div><strong>${esc(it.label)}</strong><small>${esc(it.ruleNote)}</small></div>
          <div class="th-nums"><span>${esc(it.includedRatio)}</span><strong>${esc(it.countedAmount.toLocaleString('tr-TR'))} TL</strong></div>
        </div>`
      )
      .join('');
    return `
      <div class="info-head">
        <div><span class="kicker">Eşik & Sınır Göstergesi</span><h3>${esc(info.designTitle)}</h3></div>
        <code>${esc(info.limitAmount.toLocaleString('tr-TR'))} TL Sınır</code>
      </div>
      <div class="gauge-box">
        <div class="gauge-meta"><span>Dikkate Alınan: ${esc(info.totalCounted.toLocaleString('tr-TR'))} TL</span><strong>${esc(info.verdictLabel)} (%${pct})</strong></div>
        <div class="gauge-track"><div class="gauge-fill" style="width:${pct}%;background:${info.isExceeded ? '#be123c' : '#047857'}"></div></div>
      </div>
      <div class="th-list">${items}</div>`;
  }

  if (info.kind === 'timeline') {
    const nodes = info.nodes
      .map(
        (n, i) => `
        <div class="tl-node ${n.highlight ? 'tl-hi' : ''}" style="${n.highlight ? `border-color:${cat.accentHex}` : ''}">
          <div class="tl-idx" style="background:${n.highlight ? cat.accentHex : '#e2e8f0'};color:${n.highlight ? '#fff' : '#334155'}">${i + 1}</div>
          <div><span class="tl-date" style="color:${cat.accentHex}">${esc(n.dateLabel)}</span><strong>${esc(n.title)}</strong><p>${esc(n.detail)}</p></div>
        </div>`
      )
      .join('');
    return `
      <div class="info-head">
        <div><span class="kicker">Kronolojik Süreç & Vade</span><h3>${esc(info.designTitle)}</h3></div>
        <code>${esc(info.spanLabel)}</code>
      </div>
      <div class="tl-list">${nodes}</div>
      <div class="info-foot"><span>Özet</span><strong>${esc(info.keyTakeaway)}</strong></div>`;
  }

  if (info.kind === 'flow') {
    const stages = info.stages
      .map(
        (st) => `
        <div class="fl-card ${st.tone === 'accent' ? 'fl-acc' : ''}" style="${st.tone === 'accent' ? `border-color:${cat.accentHex}` : ''}">
          <div><strong>${esc(st.title)}</strong><p>${esc(st.subText)}</p></div>
          <div class="fl-amt" style="color:${st.tone === 'accent' ? cat.accentHex : '#0f172a'}">${esc(st.amountText)}</div>
        </div>`
      )
      .join('');
    return `
      <div class="info-head">
        <div><span class="kicker">Kademeli Akış Şeması</span><h3>${esc(info.designTitle)}</h3></div>
      </div>
      <div class="fl-list">${stages}</div>
      <div class="info-foot"><span>Özet Denklem</span><strong>${esc(info.summaryEquation)}</strong></div>`;
  }

  // Concept
  const pts = info.points
    .map(
      (pt) => `
      <div class="cp-pt cp-${pt.status}">
        <strong>${esc(pt.label)}</strong>
        <p>${esc(pt.detail)}</p>
      </div>`
    )
    .join('');
  return `
    <div class="info-head">
      <div><span class="kicker">Mevzuat Karar Kartı</span><h3>${esc(info.designTitle)}</h3></div>
    </div>
    <div class="cp-core" style="border-color:${cat.accentHex}">
      <strong style="color:${cat.accentHex}">${esc(info.coreRuleTitle)}</strong>
      <p>${esc(info.coreRuleBody)}</p>
    </div>
    <div class="cp-list">${pts}</div>`;
}

export function buildOfflineHtmlDeck(questions: TaxQuestion[]): string {
  const coverCards = CATEGORIES.map(
    (c, idx) => `
    <button class="cov-card" onclick="goSlide(${questions.findIndex((q) => q.category === c.id) + 1})">
      <div class="cov-top" style="color:${c.accentHex}">0${idx + 1} · ${esc(c.shortTitle)}</div>
      <strong>${esc(c.fullTitle)}</strong>
      <small>${esc(c.lawCode)} · ${esc(c.questionRange)}</small>
    </button>`
  ).join('');

  const slidesHtml = questions
    .map((q) => {
      const cat = CATEGORY_MAP[q.category];
      const opts = q.options
        ? `<div class="opts">${q.options
            .map(
              (o) =>
                `<div class="opt ${o.key === q.correctOption ? 'opt-ok' : ''}"><span>${o.key}</span><div>${esc(o.text)}</div></div>`
            )
            .join('')}</div>`
        : q.directAnswer
          ? `<div class="direct-ans" style="border-color:${cat.accentHex}"><small>Doğru Sonuç</small><strong style="color:${cat.accentHex}">${esc(q.directAnswer)}</strong></div>`
          : q.subAnswers
            ? `<div class="subs">${q.subAnswers
                .map(
                  (s) =>
                    `<div class="sub"><div><strong>${esc(s.label)}</strong><span style="color:${cat.accentHex}">${esc(s.answer)}</span></div><small>${esc(s.explanation)}</small></div>`
                )
                .join('')}</div>`
            : '';

      const bullets = q.bulletDetails
        ? `<ul class="bullets">${q.bulletDetails.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
        : '';

      return `
      <section class="slide">
        <div class="slide-head" style="border-top:4px solid ${cat.accentHex}">
          <div class="meta" style="color:${cat.accentHex}">${esc(cat.fullTitle)} · ${esc(cat.lawCode)} · ${esc(q.lawRef)}</div>
          <h2>Soru ${String(q.number).padStart(2, '0')} — ${esc(q.topic)}</h2>
        </div>
        <div class="slide-grid">
          <div class="col-left">
            <p class="stem">${esc(q.stem)}</p>
            ${bullets}
            ${opts}
            <div class="sol-box">
              <div class="sol-title">Çözüm Açıklaması</div>
              <p>${esc(q.solutionSummary)}</p>
              <div class="tip"><strong>Altın İpucu:</strong> ${esc(q.goldenTip)}</div>
            </div>
          </div>
          <div class="col-right">
            <div class="info-card">${renderInfographicHtml(q)}</div>
            <div class="design-note"><strong>Görsel Tasarım:</strong> ${esc(q.visualDesignNote)}</div>
          </div>
        </div>
      </section>`;
    })
    .join('');

  const html = `<!doctype html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<title>Vergi Mevzuatı — 100 Altın Soru İnfografik Slayt Sunumu</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#f1f5f9;color:#0f172a}
  .bar{position:sticky;top:0;z-index:20;background:#fff;border-bottom:1px solid #cbd5e1;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px}
  .bar h1{margin:0;font-size:15px}
  .controls{display:flex;align-items:center;gap:8px}
  .btn{border:1px solid #cbd5e1;background:#fff;color:#0f172a;padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer}
  .btn-dark{background:#0f172a;color:#fff;border-color:#0f172a}
  .stage{max-width:1280px;margin:18px auto;padding:0 16px}
  .slide{display:none;background:#fff;border:1px solid #cbd5e1;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(15,23,42,.05)}
  .slide.active{display:block}
  .cover{padding:36px}
  .cover h2{font-size:28px;margin:8px 0 12px}
  .cov-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:24px}
  .cov-card{text-align:left;padding:14px;border:1px solid #cbd5e1;border-radius:10px;background:#f8fafc;cursor:pointer}
  .cov-card strong{display:block;margin:6px 0 4px;font-size:14px}
  .cov-card small{color:#64748b;font-size:11px}
  .cov-top{font-size:12px;font-weight:700}
  .slide-head{padding:14px 20px;border-bottom:1px solid #e2e8f0;background:#f8fafc}
  .meta{font-size:11px;font-weight:700}
  .slide-head h2{margin:4px 0 0;font-size:18px}
  .slide-grid{display:grid;grid-template-columns:5fr 7fr}
  @media(max-width:900px){.slide-grid{grid-template-columns:1fr}}
  .col-left{padding:18px 20px;border-right:1px solid #e2e8f0;display:flex;flex-direction:column;justify-content:space-between;gap:12px}
  .col-right{padding:18px 20px;background:#f8fafc;display:flex;flex-direction:column;gap:10px}
  .stem{margin:0;font-size:13px;line-height:1.5;font-weight:500}
  .bullets{margin:0;padding:10px 14px 10px 26px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .opts{display:flex;flex-direction:column;gap:6px}
  .opt{display:flex;gap:8px;align-items:flex-start;padding:7px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .opt span{font-family:monospace;font-weight:700;background:#f1f5f9;padding:2px 6px;border-radius:4px}
  .opt-ok{background:#ecfdf5;border-color:#6ee7b7;color:#065f46;font-weight:600}
  .opt-ok span{background:#047857;color:#fff}
  .direct-ans{padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;background:#f8fafc}
  .direct-ans small{display:block;font-size:11px;color:#64748b}
  .subs{display:flex;flex-direction:column;gap:6px}
  .sub{padding:8px 10px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;font-size:12px}
  .sub>div{display:flex;justify-content:space-between;gap:8px}
  .sol-box{border-top:1px solid #e2e8f0;padding-top:10px;font-size:12px;line-height:1.5;color:#334155}
  .sol-title{font-size:11px;font-weight:700;color:#64748b;margin-bottom:4px}
  .sol-box p{margin:0 0 8px}
  .tip{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:8px 10px;font-size:11.5px;color:#78350f}
  .info-card{background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;flex:1;display:flex;flex-direction:column;justify-content:space-between;gap:12px}
  .info-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;border-bottom:1px solid #e2e8f0;padding-bottom:8px}
  .info-head h3{margin:2px 0 0;font-size:15px}
  .info-head code{font-size:11px;background:#f1f5f9;padding:4px 8px;border-radius:6px;border:1px solid #e2e8f0}
  .kicker{font-size:11px;color:#64748b;display:block}
  .wf-list,.th-list,.tl-list,.fl-list,.cp-list{display:flex;flex-direction:column;gap:7px}
  .wf-row{display:grid;grid-template-columns:1.3fr 1fr auto;align-items:center;gap:10px;padding:6px 8px;border:1px solid #f1f5f9;border-radius:6px;font-size:12px}
  .wf-result{background:#f8fafc;border-color:#cbd5e1}
  .wf-label small{display:block;color:#64748b;font-size:11px}
  .wf-track{height:8px;background:#f1f5f9;border-radius:4px;overflow:hidden}
  .wf-bar{height:100%}
  .wf-val{font-family:monospace;font-weight:700;text-align:right}
  .info-foot{background:#0f172a;color:#fff;padding:10px 12px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;font-size:12px}
  .gauge-box{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:10px}
  .gauge-meta{display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px}
  .gauge-track{height:12px;background:#fff;border:1px solid #cbd5e1;border-radius:4px;overflow:hidden}
  .gauge-fill{height:100%}
  .th-item{display:flex;justify-content:space-between;padding:8px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .th-item small{display:block;color:#64748b}
  .th-nums{text-align:right;font-family:monospace}
  .th-nums span{display:block;font-size:11px;color:#64748b}
  .tl-node{display:flex;gap:10px;padding:9px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .tl-hi{background:#f8fafc}
  .tl-idx{width:22px;height:22px;border-radius:5px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0}
  .tl-date{font-family:monospace;font-weight:700;font-size:11px;display:block}
  .tl-node p{margin:2px 0 0;color:#475569;font-size:11.5px}
  .fl-card{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 12px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .fl-acc{background:#f8fafc}
  .fl-card p{margin:3px 0 0;color:#475569;font-size:11.5px}
  .fl-amt{font-family:monospace;font-weight:700;font-size:13px;text-align:right}
  .cp-core{padding:10px 12px;border:1px solid #cbd5e1;border-radius:8px;background:#f8fafc;font-size:12px}
  .cp-core p{margin:4px 0 0;color:#334155}
  .cp-pt{padding:9px 10px;border:1px solid #e2e8f0;border-radius:8px;font-size:12px}
  .cp-pt p{margin:3px 0 0;color:#475569;font-size:11.5px}
  .cp-correct{background:#ecfdf5;border-color:#a7f3d0}
  .cp-trap{background:#fff1f2;border-color:#fecdd3}
  .design-note{background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:8px 12px;font-size:11px;color:#475569}
  @media print{
    .bar{display:none!important}
    .stage{max-width:none;margin:0;padding:0}
    .slide{display:block!important;page-break-after:always;break-after:page;box-shadow:none;margin-bottom:0}
    @page{size:A4 landscape;margin:8mm}
  }
</style>
</head>
<body>
<div class="bar">
  <h1>Vergi Mevzuatı · 100 Altın Soru İnfografik Sunum</h1>
  <div class="controls">
    <span id="counter" style="font-family:monospace;font-size:12px;color:#475569">Slayt 00 / ${questions.length}</span>
    <button class="btn" onclick="goSlide(0)">Kapak</button>
    <button class="btn" onclick="prev()">← Önceki</button>
    <button class="btn btn-dark" onclick="next()">Sonraki →</button>
    <button class="btn" onclick="window.print()">PDF / Yazdır</button>
  </div>
</div>
<main class="stage">
  <section class="slide active cover">
    <div style="font-size:12px;font-weight:700;color:#64748b">VERGİ MEVZUATI VE UYGULAMALARI · ÇEVRİMDIŞI İNFOGRAFİK SLAYT SUNUMU</div>
    <h2>100 Altın Soru — Soru, Çözüm ve Görsel İnfografik</h2>
    <p style="font-size:14px;color:#475569;max-width:740px">Ok tuşları (← / →) ile slaytlar arasında gezebilir veya “PDF / Yazdır” düğmesiyle tüm slaytları yatay PDF olarak kaydedebilirsiniz.</p>
    <button class="btn btn-dark" style="padding:10px 18px;font-size:13px" onclick="goSlide(1)">Sunumu Başlat (Soru 1) →</button>
    <div class="cov-grid">${coverCards}</div>
  </section>
  ${slidesHtml}
</main>
<script>
  let cur=0;
  const slides=document.querySelectorAll('.slide');
  const counter=document.getElementById('counter');
  function goSlide(n){
    if(n<0||n>=slides.length)return;
    slides[cur].classList.remove('active');
    cur=n;
    slides[cur].classList.add('active');
    counter.textContent=cur===0?'Kapak / ${questions.length}':'Slayt '+String(cur).padStart(2,'0')+' / ${questions.length}';
    if(history.replaceState){history.replaceState(null,'',cur===0?'#kapak':'#slayt='+cur);}
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function next(){goSlide(cur+1)}
  function prev(){goSlide(cur-1)}
  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight')next();
    if(e.key==='ArrowLeft')prev();
  });
  const m=location.hash.match(/slayt=(\\d+)/);
  if(m){const idx=parseInt(m[1],10);if(idx>=0&&idx<slides.length)goSlide(idx);}
</script>
</body>
</html>`;

  return html;
}

export function downloadOfflineHtmlDeck(
  questions: TaxQuestion[],
  fileName = 'Vergi_Mevzuati_100_Altin_Soru_Sunum.html'
): void {
  const html = buildOfflineHtmlDeck(questions);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
