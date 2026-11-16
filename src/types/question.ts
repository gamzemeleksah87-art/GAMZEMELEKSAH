export type TaxCategoryId = 'kvk' | 'aatuhk' | 'kdv' | 'otv' | 'vuk';

export interface CategoryMeta {
  id: TaxCategoryId;
  shortTitle: string;
  fullTitle: string;
  lawCode: string;
  accentHex: string;
  lightBgClass: string;
  textClass: string;
  borderClass: string;
  barClass: string;
  questionRange: string;
}

export interface OptionItem {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface WaterfallStep {
  label: string;
  amount: number;
  type: 'base' | 'add' | 'sub' | 'ignore' | 'subtotal' | 'result';
  note?: string;
}

export interface WaterfallInfographicData {
  kind: 'waterfall';
  designTitle: string;
  formulaSummary: string;
  steps: WaterfallStep[];
  finalValueLabel: string;
  finalValueText: string;
  secondaryMetric?: {
    label: string;
    value: string;
  };
}

export interface ThresholdItem {
  label: string;
  rawAmount: number;
  includedRatio: string;
  countedAmount: number;
  status: 'included' | 'partial' | 'excluded';
  ruleNote: string;
}

export interface ThresholdInfographicData {
  kind: 'threshold';
  designTitle: string;
  limitLabel: string;
  limitAmount: number;
  totalCounted: number;
  isExceeded: boolean;
  verdictLabel: string;
  items: ThresholdItem[];
}

export interface TimelineNode {
  dateLabel: string;
  title: string;
  detail: string;
  highlight?: boolean;
}

export interface TimelineInfographicData {
  kind: 'timeline';
  designTitle: string;
  spanLabel: string;
  nodes: TimelineNode[];
  keyTakeaway: string;
}

export interface FlowStage {
  title: string;
  amountText: string;
  subText: string;
  tone: 'neutral' | 'positive' | 'accent' | 'muted';
}

export interface FlowInfographicData {
  kind: 'flow';
  designTitle: string;
  stages: FlowStage[];
  summaryEquation: string;
}

export interface ConceptRulePoint {
  label: string;
  status: 'correct' | 'trap' | 'info';
  detail: string;
}

export interface ConceptInfographicData {
  kind: 'concept';
  designTitle: string;
  coreRuleTitle: string;
  coreRuleBody: string;
  points: ConceptRulePoint[];
}

export type InfographicData =
  | WaterfallInfographicData
  | ThresholdInfographicData
  | TimelineInfographicData
  | FlowInfographicData
  | ConceptInfographicData;

export interface SubAnswer {
  label: string;
  answer: string;
  explanation: string;
}

export interface TaxQuestion {
  number: number;
  category: TaxCategoryId;
  topic: string;
  lawRef: string;
  stem: string;
  bulletDetails?: string[];
  options?: OptionItem[];
  correctOption?: 'A' | 'B' | 'C' | 'D' | 'E';
  directAnswer?: string;
  subAnswers?: SubAnswer[];
  solutionSummary: string;
  goldenTip: string;
  visualDesignNote: string;
  infographic: InfographicData;
}
