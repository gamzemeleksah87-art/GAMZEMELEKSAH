import PptxGenJS from 'pptxgenjs';
import { CATEGORIES, CATEGORY_MAP } from '../data/allQuestions';
import { TaxQuestion } from '../types/question';

function stripHash(hex: string): string {
  return hex.replace('#', '');
}

function formatTL(val: number): string {
  const abs = Math.abs(val);
  return `${val < 0 ? '−' : ''}${abs.toLocaleString('tr-TR')} TL`;
}

export async function downloadPptxDeck(
  questions: TaxQuestion[],
  fileName = 'Vergi_Mevzuati_100_Altin_Soru_Slaytlar.pptx'
): Promise<void> {
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9'; // 10 x 5.625 in
  pptx.title = 'Vergi Mevzuatı ve Uygulamaları — 100 Altın Soru İnfografik Sunum';
  pptx.subject = 'KVK, 6183 AATUHK, KDV, ÖTV, VUK Çözümlü Slaytlar';

  // 1. Cover Slide
  const cover = pptx.addSlide();
  cover.background = { color: 'F8FAFC' };

  cover.addShape(pptx.ShapeType.rect, {
    x: 0.4,
    y: 0.4,
    w: 9.2,
    h: 4.825,
    fill: { color: 'FFFFFF' },
    line: { color: 'E2E8F0', width: 1 },
  });

  cover.addText('VERGİ MEVZUATI VE UYGULAMALARI · İNFOGRAFİK SLAYT SUNUMU', {
    x: 0.75,
    y: 0.65,
    w: 8.5,
    h: 0.3,
    fontSize: 10,
    bold: true,
    color: '64748B',
    fontFace: 'Arial',
  });

  cover.addText('100 Altın Soru\nSoru, Çözüm ve Görsel İnfografik', {
    x: 0.75,
    y: 1.05,
    w: 8.5,
    h: 1.1,
    fontSize: 28,
    bold: true,
    color: '0F172A',
    fontFace: 'Arial',
  });

  cover.addText(
    `Toplam ${questions.length} soru slaytı (Kaynak PDF’te 5. soru boş bırakıldığı için 1–4 ve 6–100 arası). Her slayt tek bakışta soru metnini, doğru cevabı, kanun gerekçesini ve görsel infografiği içerir.`,
    {
      x: 0.75,
      y: 2.25,
      w: 8.5,
      h: 0.6,
      fontSize: 12,
      color: '475569',
      fontFace: 'Arial',
    }
  );

  // 5 Chapter Summary Cards on Cover
  const cardW = 1.64;
  const gap = 0.12;
  CATEGORIES.forEach((cat, idx) => {
    const cx = 0.75 + idx * (cardW + gap);
    const cy = 3.15;
    const accent = stripHash(cat.accentHex);

    cover.addShape(pptx.ShapeType.rect, {
      x: cx,
      y: cy,
      w: cardW,
      h: 1.65,
      fill: { color: 'F8FAFC' },
      line: { color: 'CBD5E1', width: 1 },
    });

    cover.addShape(pptx.ShapeType.rect, {
      x: cx,
      y: cy,
      w: cardW,
      h: 0.08,
      fill: { color: accent },
      line: { color: accent, width: 0 },
    });

    cover.addText(`0${idx + 1} · ${cat.shortTitle}`, {
      x: cx + 0.1,
      y: cy + 0.18,
      w: cardW - 0.2,
      h: 0.28,
      fontSize: 11,
      bold: true,
      color: accent,
      fontFace: 'Arial',
    });

    cover.addText(cat.fullTitle, {
      x: cx + 0.1,
      y: cy + 0.48,
      w: cardW - 0.2,
      h: 0.55,
      fontSize: 9.5,
      color: '1E293B',
      fontFace: 'Arial',
    });

    cover.addText(`${cat.lawCode}\n${cat.questionRange}`, {
      x: cx + 0.1,
      y: cy + 1.08,
      w: cardW - 0.2,
      h: 0.45,
      fontSize: 8.5,
      color: '64748B',
      fontFace: 'Arial',
    });
  });

  // 2. Question Slides
  for (const q of questions) {
    const cat = CATEGORY_MAP[q.category];
    const accent = stripHash(cat.accentHex);
    const slide = pptx.addSlide();
    slide.background = { color: 'F8FAFC' };

    // Outer Slide Frame
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.25,
      y: 0.22,
      w: 9.5,
      h: 5.18,
      fill: { color: 'FFFFFF' },
      line: { color: 'CBD5E1', width: 1 },
    });

    // Top Accent Bar
    slide.addShape(pptx.ShapeType.rect, {
      x: 0.25,
      y: 0.22,
      w: 9.5,
      h: 0.06,
      fill: { color: accent },
      line: { color: accent, width: 0 },
    });

    // Header Breadcrumb & Title
    slide.addText(`${cat.fullTitle}  ·  ${cat.lawCode}  ·  ${q.lawRef}`, {
      x: 0.45,
      y: 0.34,
      w: 9.1,
      h: 0.22,
      fontSize: 8.5,
      bold: true,
      color: accent,
      fontFace: 'Arial',
    });

    slide.addText(`Soru ${String(q.number).padStart(2, '0')} — ${q.topic}`, {
      x: 0.45,
      y: 0.54,
      w: 9.1,
      h: 0.34,
      fontSize: 14,
      bold: true,
      color: '0F172A',
      fontFace: 'Arial',
    });

    // Header Divider
    slide.addShape(pptx.ShapeType.line, {
      x: 0.25,
      y: 0.92,
      w: 9.5,
      h: 0,
      line: { color: 'E2E8F0', width: 1 },
    });

    // Vertical Divider between Left (Question/Solution) and Right (Infographic)
    slide.addShape(pptx.ShapeType.line, {
      x: 4.9,
      y: 0.92,
      w: 0,
      h: 4.48,
      line: { color: 'E2E8F0', width: 1 },
    });

    // LEFT COLUMN (x: 0.42, w: 4.32)
    let cursorY = 1.02;

    const stemText = q.bulletDetails
      ? `${q.stem}\n• ${q.bulletDetails.join('\n• ')}`
      : q.stem;

    const stemHeight = stemText.length > 340 ? 1.55 : stemText.length > 220 ? 1.25 : 1.0;

    slide.addText(stemText, {
      x: 0.42,
      y: cursorY,
      w: 4.35,
      h: stemHeight,
      fontSize: stemText.length > 360 ? 8 : 8.8,
      color: '1E293B',
      fontFace: 'Arial',
      valign: 'top',
    });
    cursorY += stemHeight + 0.06;

    // Options or Direct Answer or SubAnswers
    if (q.options && q.options.length > 0) {
      const optRows = q.options.map((opt) => {
        const isCorrect = opt.key === q.correctOption;
        return [
          {
            text: `${opt.key}) ${opt.text}`,
            options: {
              fontSize: opt.text.length > 85 ? 7.3 : 8,
              bold: isCorrect,
              color: isCorrect ? '065F46' : '334155',
              fill: { color: isCorrect ? 'ECFDF5' : 'FFFFFF' },
              valign: 'middle' as const,
            },
          },
        ];
      });

      const optH = Math.min(1.65, q.options.length * 0.31);
      slide.addTable(optRows, {
        x: 0.42,
        y: cursorY,
        w: 4.35,
        h: optH,
        border: { type: 'solid', pt: 0.5, color: 'E2E8F0' },
        margin: [2, 5, 2, 5],
      });
      cursorY += optH + 0.08;
    } else if (q.directAnswer) {
      slide.addShape(pptx.ShapeType.rect, {
        x: 0.42,
        y: cursorY,
        w: 4.35,
        h: 0.46,
        fill: { color: 'F1F5F9' },
        line: { color: accent, width: 1 },
      });
      slide.addText(`Doğru Sonuç: ${q.directAnswer}`, {
        x: 0.5,
        y: cursorY + 0.05,
        w: 4.2,
        h: 0.36,
        fontSize: 9.5,
        bold: true,
        color: accent,
        fontFace: 'Arial',
        valign: 'middle',
      });
      cursorY += 0.54;
    } else if (q.subAnswers) {
      const subRows = q.subAnswers.map((s) => [
        {
          text: `${s.label}: ${s.answer}`,
          options: { fontSize: 7.8, bold: true, color: '0F172A', fill: { color: 'F8FAFC' } },
        },
      ]);
      const subH = Math.min(1.3, q.subAnswers.length * 0.31);
      slide.addTable(subRows, {
        x: 0.42,
        y: cursorY,
        w: 4.35,
        h: subH,
        border: { type: 'solid', pt: 0.5, color: 'E2E8F0' },
        margin: [2, 5, 2, 5],
      });
      cursorY += subH + 0.08;
    }

    // Solution Summary + Golden Tip at bottom left
    const remainingH = Math.max(0.85, 5.28 - cursorY);
    const tipH = 0.56;
    const solH = Math.max(0.5, remainingH - tipH - 0.06);

    slide.addText(`Çözüm: ${q.solutionSummary}`, {
      x: 0.42,
      y: cursorY,
      w: 4.35,
      h: solH,
      fontSize: 7.8,
      color: '334155',
      fontFace: 'Arial',
      valign: 'top',
    });

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.42,
      y: 4.74,
      w: 4.35,
      h: 0.54,
      fill: { color: 'FFFBEB' },
      line: { color: 'FDE68A', width: 0.75 },
    });
    slide.addText(`Altın İpucu: ${q.goldenTip}`, {
      x: 0.5,
      y: 4.77,
      w: 4.2,
      h: 0.48,
      fontSize: 7.5,
      color: '78350F',
      fontFace: 'Arial',
      valign: 'middle',
    });

    // RIGHT COLUMN (x: 5.05, w: 4.55) — INFOGRAPHIC PANEL
    const rx = 5.05;
    const rw = 4.52;

    slide.addText(q.infographic.designTitle, {
      x: rx,
      y: 1.0,
      w: rw,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: '0F172A',
      fontFace: 'Arial',
    });

    const info = q.infographic;
    if (info.kind === 'waterfall') {
      slide.addText(info.formulaSummary, {
        x: rx,
        y: 1.3,
        w: rw,
        h: 0.24,
        fontSize: 8,
        color: '475569',
        fontFace: 'Courier New',
      });

      const rows = info.steps.map((st) => [
        {
          text: st.note ? `${st.label} (${st.note})` : st.label,
          options: {
            fontSize: 8,
            bold: st.type === 'result' || st.type === 'subtotal',
            color: st.type === 'result' ? accent : '1E293B',
            fill: { color: st.type === 'result' ? 'F1F5F9' : 'FFFFFF' },
          },
        },
        {
          text: st.type === 'ignore' ? 'Hariç' : formatTL(st.amount),
          options: {
            fontSize: 8,
            bold: st.type === 'result' || st.type === 'subtotal',
            align: 'right' as const,
            color:
              st.type === 'result'
                ? accent
                : st.type === 'sub'
                  ? 'BE123C'
                  : st.type === 'add'
                    ? '0369A1'
                    : '0F172A',
            fill: { color: st.type === 'result' ? 'F1F5F9' : 'FFFFFF' },
          },
        },
      ]);

      slide.addTable(rows, {
        x: rx,
        y: 1.58,
        w: rw,
        colW: [3.12, 1.4],
        border: { type: 'solid', pt: 0.5, color: 'E2E8F0' },
        margin: [3, 6, 3, 6],
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 4.35,
        w: rw,
        h: 0.48,
        fill: { color: '0F172A' },
        line: { color: '0F172A', width: 0 },
      });
      slide.addText(`${info.finalValueLabel}:  ${info.finalValueText}`, {
        x: rx + 0.12,
        y: 4.4,
        w: rw - 0.24,
        h: 0.38,
        fontSize: 10.5,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        valign: 'middle',
      });
    } else if (info.kind === 'threshold') {
      slide.addText(`${info.limitLabel}: ${info.limitAmount.toLocaleString('tr-TR')} TL`, {
        x: rx,
        y: 1.32,
        w: rw,
        h: 0.25,
        fontSize: 8.5,
        bold: true,
        color: '334155',
        fontFace: 'Arial',
      });

      const pct = Math.min(100, Math.round((info.totalCounted / info.limitAmount) * 100));
      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 1.62,
        w: rw,
        h: 0.22,
        fill: { color: 'E2E8F0' },
        line: { color: 'CBD5E1', width: 0.5 },
      });
      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 1.62,
        w: Math.max(0.2, (rw * pct) / 100),
        h: 0.22,
        fill: { color: info.isExceeded ? 'BE123C' : '047857' },
        line: { color: info.isExceeded ? 'BE123C' : '047857', width: 0 },
      });

      slide.addText(`${info.verdictLabel}  (%${pct})`, {
        x: rx,
        y: 1.88,
        w: rw,
        h: 0.24,
        fontSize: 8.5,
        bold: true,
        color: info.isExceeded ? 'BE123C' : '047857',
        fontFace: 'Arial',
      });

      const rows = info.items.map((it) => [
        { text: `${it.label}\n${it.ruleNote}`, options: { fontSize: 7.8, color: '1E293B' } },
        { text: it.includedRatio, options: { fontSize: 8, bold: true, align: 'center' as const, color: accent } },
        {
          text: `${it.countedAmount.toLocaleString('tr-TR')} TL`,
          options: { fontSize: 8, bold: true, align: 'right' as const, color: '0F172A' },
        },
      ]);

      slide.addTable(rows, {
        x: rx,
        y: 2.2,
        w: rw,
        colW: [2.72, 0.6, 1.2],
        border: { type: 'solid', pt: 0.5, color: 'E2E8F0' },
        margin: [3, 5, 3, 5],
      });
    } else if (info.kind === 'timeline') {
      slide.addText(info.spanLabel, {
        x: rx,
        y: 1.32,
        w: rw,
        h: 0.25,
        fontSize: 8.5,
        bold: true,
        color: accent,
        fontFace: 'Arial',
      });

      info.nodes.forEach((node, nIdx) => {
        const ny = 1.65 + nIdx * 0.66;
        slide.addShape(pptx.ShapeType.rect, {
          x: rx,
          y: ny,
          w: rw,
          h: 0.58,
          fill: { color: node.highlight ? 'F1F5F9' : 'FFFFFF' },
          line: { color: node.highlight ? accent : 'E2E8F0', width: node.highlight ? 1 : 0.75 },
        });
        slide.addText(`${node.dateLabel}  —  ${node.title}`, {
          x: rx + 0.12,
          y: ny + 0.05,
          w: rw - 0.24,
          h: 0.22,
          fontSize: 8.8,
          bold: true,
          color: node.highlight ? accent : '0F172A',
          fontFace: 'Arial',
        });
        slide.addText(node.detail, {
          x: rx + 0.12,
          y: ny + 0.28,
          w: rw - 0.24,
          h: 0.24,
          fontSize: 8,
          color: '475569',
          fontFace: 'Arial',
        });
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 4.35,
        w: rw,
        h: 0.45,
        fill: { color: '0F172A' },
        line: { color: '0F172A', width: 0 },
      });
      slide.addText(info.keyTakeaway, {
        x: rx + 0.12,
        y: 4.38,
        w: rw - 0.24,
        h: 0.39,
        fontSize: 8.5,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        valign: 'middle',
      });
    } else if (info.kind === 'flow') {
      info.stages.forEach((st, sIdx) => {
        const sy = 1.45 + sIdx * 0.92;
        const isAcc = st.tone === 'accent';
        slide.addShape(pptx.ShapeType.rect, {
          x: rx,
          y: sy,
          w: rw,
          h: 0.78,
          fill: { color: isAcc ? 'F1F5F9' : 'FFFFFF' },
          line: { color: isAcc ? accent : 'CBD5E1', width: isAcc ? 1.2 : 0.75 },
        });
        slide.addText(st.title, {
          x: rx + 0.12,
          y: sy + 0.06,
          w: 2.6,
          h: 0.26,
          fontSize: 9,
          bold: true,
          color: '0F172A',
          fontFace: 'Arial',
        });
        slide.addText(st.amountText, {
          x: rx + 2.7,
          y: sy + 0.06,
          w: 1.7,
          h: 0.28,
          fontSize: 9.5,
          bold: true,
          align: 'right',
          color: isAcc ? accent : '0F172A',
          fontFace: 'Arial',
        });
        slide.addText(st.subText, {
          x: rx + 0.12,
          y: sy + 0.36,
          w: rw - 0.24,
          h: 0.34,
          fontSize: 8,
          color: '475569',
          fontFace: 'Arial',
        });
      });

      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 4.35,
        w: rw,
        h: 0.45,
        fill: { color: '0F172A' },
        line: { color: '0F172A', width: 0 },
      });
      slide.addText(info.summaryEquation, {
        x: rx + 0.12,
        y: 4.38,
        w: rw - 0.24,
        h: 0.39,
        fontSize: 8.5,
        bold: true,
        color: 'FFFFFF',
        fontFace: 'Arial',
        valign: 'middle',
      });
    } else {
      // Concept
      slide.addShape(pptx.ShapeType.rect, {
        x: rx,
        y: 1.4,
        w: rw,
        h: 1.05,
        fill: { color: 'F8FAFC' },
        line: { color: accent, width: 1 },
      });
      slide.addText(info.coreRuleTitle, {
        x: rx + 0.12,
        y: 1.46,
        w: rw - 0.24,
        h: 0.32,
        fontSize: 9.5,
        bold: true,
        color: accent,
        fontFace: 'Arial',
      });
      slide.addText(info.coreRuleBody, {
        x: rx + 0.12,
        y: 1.8,
        w: rw - 0.24,
        h: 0.58,
        fontSize: 8.2,
        color: '334155',
        fontFace: 'Arial',
      });

      info.points.forEach((pt, pIdx) => {
        const py = 2.6 + pIdx * 0.72;
        const fillC =
          pt.status === 'correct'
            ? 'ECFDF5'
            : pt.status === 'trap'
              ? 'FFF1F2'
              : 'FFFFFF';
        const lineC =
          pt.status === 'correct'
            ? 'A7F3D0'
            : pt.status === 'trap'
              ? 'FECDD3'
              : 'E2E8F0';
        const titleC =
          pt.status === 'correct'
            ? '065F46'
            : pt.status === 'trap'
              ? '9F1239'
              : '0F172A';

        slide.addShape(pptx.ShapeType.rect, {
          x: rx,
          y: py,
          w: rw,
          h: 0.64,
          fill: { color: fillC },
          line: { color: lineC, width: 0.75 },
        });
        slide.addText(pt.label, {
          x: rx + 0.12,
          y: py + 0.05,
          w: rw - 0.24,
          h: 0.24,
          fontSize: 8.5,
          bold: true,
          color: titleC,
          fontFace: 'Arial',
        });
        slide.addText(pt.detail, {
          x: rx + 0.12,
          y: py + 0.29,
          w: rw - 0.24,
          h: 0.3,
          fontSize: 7.8,
          color: '334155',
          fontFace: 'Arial',
        });
      });
    }

    // Bottom Right Design Note Strip
    slide.addShape(pptx.ShapeType.rect, {
      x: rx,
      y: 4.92,
      w: rw,
      h: 0.36,
      fill: { color: 'F8FAFC' },
      line: { color: 'E2E8F0', width: 0.5 },
    });
    slide.addText(`Görsel Tasarım: ${q.visualDesignNote}`, {
      x: rx + 0.08,
      y: 4.94,
      w: rw - 0.16,
      h: 0.32,
      fontSize: 7,
      color: '64748B',
      fontFace: 'Arial',
      valign: 'middle',
    });
  }

  await pptx.writeFile({ fileName });
}
