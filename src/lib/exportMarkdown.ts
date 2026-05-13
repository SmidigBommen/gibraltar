import { getLevel } from "@/content/levels";
import type { AssessmentResult } from "@/types/assessment";

const labels: Record<string, string> = {
  aiUsage: "AI usage",
  taskComplexity: "Task complexity",
  contextManagement: "Context management",
  verification: "Verification",
  decomposition: "Decomposition",
  technicalDepth: "Technical depth",
  workflowSophistication: "Workflow sophistication",
  ambition: "Ambition",
};

export function generateMarkdownReport(result: AssessmentResult): string {
  const current = getLevel(result.currentLevel);
  const safe = getLevel(result.safeDelegationLevel);
  const aspirational = getLevel(result.aspirationalLevel);

  return `# Vibe Coding Assessment Result

## Levels

- Current level: Level ${current.level} — ${current.name}
- Safe delegation level: Level ${safe.level} — ${safe.name}
- Aspirational level: Level ${aspirational.level} — ${aspirational.name}

## Score Breakdown

${Object.entries(result.dimensionScores).map(([key, value]) => `- ${labels[key]}: ${value.toFixed(1)} / 5`).join("\n")}

## Gaps

${result.gaps.length ? result.gaps.map((gap) => `### ${gap.title}\n\n${gap.message}`).join("\n\n") : "No major gaps detected."}

## Recommendations

${result.recommendations.map((rec) => `### ${rec.title}\n\n${rec.description}`).join("\n\n")}
`;
}

export function downloadMarkdown(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
