export type DimensionKey =
  | "intensity"
  | "social"
  | "show"
  | "commit"
  | "gear"
  | "outdoor";

export const DIMENSIONS: DimensionKey[] = [
  "intensity",
  "social",
  "show",
  "commit",
  "gear",
  "outdoor",
];

export const DIMENSION_LABELS: Record<DimensionKey, string> = {
  intensity: "强度",
  social: "社交",
  show: "表演",
  commit: "投入",
  gear: "装备",
  outdoor: "户外",
};

export interface Personality {
  id: string;
  en: string;
  cn: string;
  emoji: string;
  punch: string;
  desc: string;
  category: string;
  traits: Record<DimensionKey, number>;
}

export interface QuestionOption {
  text: string;
  effects: Partial<Record<DimensionKey, number>>;
}

export interface Question {
  id: number;
  prompt: string;
  options: QuestionOption[];
}
