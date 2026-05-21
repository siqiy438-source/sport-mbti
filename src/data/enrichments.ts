import { enrichmentsPart1 } from "./enrichments-part1";
import { enrichmentsPart2 } from "./enrichments-part2";

export interface Enrichment {
  /** 详细人格档案，200-300 字 */
  longDesc: string;
  /** 各维度逐项解读（兼容旧的 6 维 schema：social/gear/intensity/commit/show/outdoor） */
  dimNotes: Partial<Record<string, string>>;
}

export const enrichments: Record<string, Enrichment> = {
  ...enrichmentsPart1,
  ...enrichmentsPart2,
};

export function getEnrichment(id: string): Enrichment | undefined {
  return enrichments[id];
}
