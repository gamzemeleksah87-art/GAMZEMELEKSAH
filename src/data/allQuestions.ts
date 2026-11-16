import { CategoryMeta, TaxCategoryId, TaxQuestion } from '../types/question';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';
import { questionsPart3 } from './questionsPart3';
import { questionsPart4 } from './questionsPart4';
import { questionsPart5 } from './questionsPart5';

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'kvk',
    shortTitle: 'Kurumlar',
    fullTitle: 'Kurumlar Vergisi',
    lawCode: '5520 sayılı KVK',
    accentHex: '#0369A1',
    lightBgClass: 'bg-sky-50',
    textClass: 'text-sky-800',
    borderClass: 'border-sky-200',
    barClass: 'bg-sky-700',
    questionRange: 'Soru 1–22 (5 hariç)',
  },
  {
    id: 'aatuhk',
    shortTitle: '6183 AATUHK',
    fullTitle: 'Amme Alacaklarının Tahsil Usulü',
    lawCode: '6183 sayılı AATUHK',
    accentHex: '#B45309',
    lightBgClass: 'bg-amber-50',
    textClass: 'text-amber-800',
    borderClass: 'border-amber-200',
    barClass: 'bg-amber-700',
    questionRange: 'Soru 23–38',
  },
  {
    id: 'kdv',
    shortTitle: 'KDV',
    fullTitle: 'Katma Değer Vergisi',
    lawCode: '3065 sayılı KDVK',
    accentHex: '#047857',
    lightBgClass: 'bg-emerald-50',
    textClass: 'text-emerald-800',
    borderClass: 'border-emerald-200',
    barClass: 'bg-emerald-700',
    questionRange: 'Soru 39–64',
  },
  {
    id: 'otv',
    shortTitle: 'ÖTV',
    fullTitle: 'Özel Tüketim Vergisi',
    lawCode: '4760 sayılı ÖTVK',
    accentHex: '#BE123C',
    lightBgClass: 'bg-rose-50',
    textClass: 'text-rose-800',
    borderClass: 'border-rose-200',
    barClass: 'bg-rose-700',
    questionRange: 'Soru 65–76',
  },
  {
    id: 'vuk',
    shortTitle: 'VUK',
    fullTitle: 'Vergi Usul Kanunu',
    lawCode: '213 sayılı VUK',
    accentHex: '#4338CA',
    lightBgClass: 'bg-indigo-50',
    textClass: 'text-indigo-800',
    borderClass: 'border-indigo-200',
    barClass: 'bg-indigo-700',
    questionRange: 'Soru 77–100',
  },
];

export const CATEGORY_MAP: Record<TaxCategoryId, CategoryMeta> = CATEGORIES.reduce(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {} as Record<TaxCategoryId, CategoryMeta>
);

export const ALL_QUESTIONS: TaxQuestion[] = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
  ...questionsPart5,
];
