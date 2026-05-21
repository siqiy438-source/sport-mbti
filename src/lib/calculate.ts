import { personalities } from "../data/personalities";
import {
  DIMENSIONS,
  type DimensionKey,
  type Personality,
  type QuestionOption,
} from "../types";

export type Scores = Record<DimensionKey, number>;

export function initialScores(): Scores {
  return { intensity: 5, social: 5, show: 5, commit: 5, gear: 5, outdoor: 5 };
}

export function applyAnswer(scores: Scores, option: QuestionOption): Scores {
  const next: Scores = { ...scores };
  for (const k of DIMENSIONS) {
    const delta = option.effects[k];
    if (typeof delta === "number") {
      next[k] = clamp(next[k] + delta, 0, 10);
    }
  }
  return next;
}

export function matchPersonality(scores: Scores): Personality {
  let best = personalities[0];
  let bestDist = Infinity;
  for (const p of personalities) {
    let d = 0;
    for (const dim of DIMENSIONS) {
      const diff = p.traits[dim] - scores[dim];
      d += diff * diff;
    }
    if (d < bestDist) {
      bestDist = d;
      best = p;
    }
  }
  return best;
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}
