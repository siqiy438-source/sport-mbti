import type { DimensionKey } from "../types";
import { enrichmentsPart1 } from "./enrichments-part1";
import { enrichmentsPart2 } from "./enrichments-part2";

export interface Enrichment {
  /** 详细人格档案，200-300 字 */
  longDesc: string;
  /** 6 维度逐项解读 */
  dimNotes: Record<DimensionKey, string>;
}

export const enrichments: Record<string, Enrichment> = {
  ...enrichmentsPart1,
  ...enrichmentsPart2,
};

export function getEnrichment(id: string): Enrichment | undefined {
  return enrichments[id];
}
