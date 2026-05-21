import { personalities } from "../data/personalities";
import {
  MBTI_DIMS,
  SPORT_DIMS,
  scoresToMbtiType,
  type MbtiDim,
  type MbtiType,
  type Personality,
  type QuestionOption,
  type SportDim,
} from "../types";

export interface Scores {
  /** MBTI 4 维，每维 [-10, 10]，正数偏 E/N/F/P */
  mbti: Record<MbtiDim, number>;
  /** 运动 4 维，每维 [0, 10] */
  sport: Record<SportDim, number>;
}

const MBTI_WEIGHT = 1.5;
const SPORT_WEIGHT = 1.0;

const MBTI_CLAMP = 10;
const SPORT_CLAMP_LO = 0;
const SPORT_CLAMP_HI = 10;

export function initialScores(): Scores {
  return {
    mbti: { EI: 0, SN: 0, TF: 0, JP: 0 },
    sport: { intensity: 5, commit: 5, show: 5, outdoor: 5 },
  };
}

export function applyAnswer(scores: Scores, option: QuestionOption): Scores {
  const next: Scores = {
    mbti: { ...scores.mbti },
    sport: { ...scores.sport },
  };
  if (option.effects.mbti) {
    for (const k of MBTI_DIMS) {
      const delta = option.effects.mbti[k];
      if (typeof delta === "number") {
        next.mbti[k] = clamp(next.mbti[k] + delta, -MBTI_CLAMP, MBTI_CLAMP);
      }
    }
  }
  if (option.effects.sport) {
    for (const k of SPORT_DIMS) {
      const delta = option.effects.sport[k];
      if (typeof delta === "number") {
        next.sport[k] = clamp(
          next.sport[k] + delta,
          SPORT_CLAMP_LO,
          SPORT_CLAMP_HI,
        );
      }
    }
  }
  return next;
}

export function matchPersonality(scores: Scores): {
  personality: Personality;
  mbti: MbtiType;
} {
  let best = personalities[0];
  let bestDist = Infinity;
  for (const p of personalities) {
    let d = 0;
    for (const dim of MBTI_DIMS) {
      const diff = p.mbtiScores[dim] - scores.mbti[dim];
      d += MBTI_WEIGHT * diff * diff;
    }
    for (const dim of SPORT_DIMS) {
      const diff = p.traits[dim] - scores.sport[dim];
      d += SPORT_WEIGHT * diff * diff;
    }
    if (d < bestDist) {
      bestDist = d;
      best = p;
    }
  }
  return {
    personality: best,
    mbti: scoresToMbtiType(scores.mbti),
  };
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}
