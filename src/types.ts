// ============ MBTI 4 维（心理底色，每维 [-10, +10]） ============
// 负值偏左字母，正值偏右字母
export type MbtiDim = "EI" | "SN" | "TF" | "JP";

export const MBTI_DIMS: MbtiDim[] = ["EI", "SN", "TF", "JP"];

export const MBTI_DIM_LABELS: Record<MbtiDim, { left: string; right: string; leftCN: string; rightCN: string }> = {
  EI: { left: "I", right: "E", leftCN: "内向", rightCN: "外向" },
  SN: { left: "S", right: "N", leftCN: "实感", rightCN: "直觉" },
  TF: { left: "T", right: "F", leftCN: "思考", rightCN: "情感" },
  JP: { left: "J", right: "P", leftCN: "判断", rightCN: "感知" },
};

export type MbtiLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
export type MbtiType =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

/** 把 MBTI 4 维分数转成 16 型字母 */
export function scoresToMbtiType(scores: Record<MbtiDim, number>): MbtiType {
  const ei: MbtiLetter = scores.EI >= 0 ? "E" : "I";
  const sn: MbtiLetter = scores.SN >= 0 ? "N" : "S";
  const tf: MbtiLetter = scores.TF >= 0 ? "F" : "T";
  const jp: MbtiLetter = scores.JP >= 0 ? "P" : "J";
  return (ei + sn + tf + jp) as MbtiType;
}

/** 把 MBTI 4 字母转回向量 (±6 为典型值) */
export function mbtiTypeToScores(t: MbtiType): Record<MbtiDim, number> {
  return {
    EI: t[0] === "E" ? 6 : -6,
    SN: t[1] === "N" ? 6 : -6,
    TF: t[2] === "F" ? 6 : -6,
    JP: t[3] === "P" ? 6 : -6,
  };
}

// ============ 运动行为 4 维（表层，每维 [0, 10]） ============
export type SportDim = "intensity" | "commit" | "show" | "outdoor";

export const SPORT_DIMS: SportDim[] = ["intensity", "commit", "show", "outdoor"];

export const SPORT_DIM_LABELS: Record<SportDim, string> = {
  intensity: "强度",
  commit: "投入度",
  show: "表演欲",
  outdoor: "户外偏好",
};

// 兼容旧代码（详情页雷达图用）
export type DimensionKey = SportDim;
export const DIMENSIONS = SPORT_DIMS;
export const DIMENSION_LABELS = SPORT_DIM_LABELS;

// ============ 头像性别 ============
export type Gender = "male" | "female";

// ============ 人格定义 ============
export interface Personality {
  id: string;
  en: string;
  cn: string;
  emoji: string;
  punch: string;
  desc: string;
  category: string;
  /** 主 MBTI 型 */
  mbti: MbtiType;
  /** MBTI 4 维向量 [-10, 10] */
  mbtiScores: Record<MbtiDim, number>;
  /** 运动 4 维向量 [0, 10] */
  traits: Record<SportDim, number>;
}

// ============ 题库 ============
export interface QuestionEffect {
  /** MBTI 维度加减分（每个题对 0-2 个 MBTI 维度有影响） */
  mbti?: Partial<Record<MbtiDim, number>>;
  /** 运动维度加减分 */
  sport?: Partial<Record<SportDim, number>>;
}

export interface QuestionOption {
  text: string;
  effects: QuestionEffect;
}

export interface Question {
  id: number;
  prompt: string;
  options: QuestionOption[];
}
