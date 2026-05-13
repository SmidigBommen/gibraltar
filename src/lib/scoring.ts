import { questions } from "@/content/questions";
import type { Answers, AssessmentResult, Dimension, DimensionScores, Gap, Level, Recommendation } from "@/types/assessment";

const dimensions: Dimension[] = [
  "aiUsage",
  "taskComplexity",
  "contextManagement",
  "verification",
  "decomposition",
  "technicalDepth",
  "workflowSophistication",
  "ambition",
];

export function bucketAverage(values: number[]): Level {
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.max(0, Math.min(5, Math.round(average))) as Level;
}

export function calculateDimensionScores(answers: Answers): DimensionScores {
  const scores = Object.fromEntries(dimensions.map((dimension) => [dimension, 0])) as DimensionScores;
  const counts = Object.fromEntries(dimensions.map((dimension) => [dimension, 0])) as Record<Dimension, number>;

  for (const question of questions) {
    const answer = answers[question.id];
    if (answer !== undefined) {
      scores[question.dimension] += answer;
      counts[question.dimension] += 1;
    }
  }

  for (const dimension of dimensions) {
    scores[dimension] = counts[dimension] ? scores[dimension] / counts[dimension] : 0;
  }

  return scores;
}

export function calculateResult(answers: Answers): AssessmentResult {
  const s = calculateDimensionScores(answers);

  const currentLevel = bucketAverage([
    s.aiUsage,
    s.taskComplexity,
    s.contextManagement,
    s.workflowSophistication,
  ]);

  const uncappedSafeLevel = bucketAverage([
    s.verification,
    s.technicalDepth,
    s.decomposition,
    s.workflowSophistication,
  ]);

  const safeDelegationLevel = Math.min(
    uncappedSafeLevel,
    Math.round(s.verification + 1),
    Math.round(s.technicalDepth + 1),
  ) as Level;

  const aspirationalLevel = bucketAverage([
    s.ambition,
    s.taskComplexity,
    s.workflowSophistication,
  ]);

  const gaps = detectGaps(s, currentLevel, safeDelegationLevel, aspirationalLevel);
  const recommendations = selectRecommendations(s, currentLevel, safeDelegationLevel, aspirationalLevel);

  return { currentLevel, safeDelegationLevel, aspirationalLevel, dimensionScores: s, gaps, recommendations };
}

function detectGaps(scores: DimensionScores, current: Level, safe: Level, aspirational: Level): Gap[] {
  const gaps: Gap[] = [];

  if (aspirational - safe >= 2) {
    gaps.push({
      title: "Ambition is ahead of safety",
      message: "Your desired level of autonomy is higher than your current verification and workflow practices support. Strengthen review, tests, and task decomposition before increasing autonomy.",
    });
  }

  if (current > safe) {
    gaps.push({
      title: "Current delegation may be risky",
      message: "Your actual AI use appears to be ahead of your safe delegation level. Add stronger checks before letting AI handle larger changes.",
    });
  }

  if (scores.verification + 1 < scores.taskComplexity) {
    gaps.push({
      title: "Verification gap",
      message: "The work you delegate is more complex than the checks you use to validate it. Review diffs, run tests, and add regression coverage.",
    });
  }

  if (scores.contextManagement + 1 < scores.taskComplexity) {
    gaps.push({
      title: "Context gap",
      message: "You may be asking AI to do work without enough context. Provide files, constraints, examples, acceptance criteria, and expected behavior.",
    });
  }

  if (scores.workflowSophistication + 1 < scores.ambition) {
    gaps.push({
      title: "Workflow gap",
      message: "Your ambitions require more repeatable workflows: planning, implementation, testing, review, and rollback.",
    });
  }

  return gaps;
}

function selectRecommendations(scores: DimensionScores, current: Level, safe: Level, aspirational: Level): Recommendation[] {
  const recommendations: Recommendation[] = [];

  if (scores.verification <= 2) {
    recommendations.push({ title: "Strengthen verification", description: "Review diffs, run tests or type checks, and add regression tests before accepting AI-generated changes." });
  }

  if (scores.contextManagement <= 2) {
    recommendations.push({ title: "Provide richer context", description: "Give AI the relevant files, constraints, examples, logs, and expected behavior before asking for implementation." });
  }

  if (scores.decomposition <= 2) {
    recommendations.push({ title: "Decompose before delegating", description: "Break vague goals into scoped tasks with clear outcomes. Ask the AI for a plan before it edits code." });
  }

  if (current <= 1) {
    recommendations.push({ title: "Start with bounded tasks", description: "Use AI for tests, docstrings, small helpers, and explanations while retaining close control over final code." });
  } else if (current === 2) {
    recommendations.push({ title: "Move toward oversight safely", description: "Use branches, scoped tickets, and diff review so agents can work on larger tasks without losing control." });
  } else if (current >= 3) {
    recommendations.push({ title: "Systematize your agent workflow", description: "Create reusable specs, acceptance criteria, CI checks, and rollback paths for agent-produced work." });
  }

  if (aspirational > safe) {
    recommendations.push({ title: "Close the autonomy gap", description: "Before increasing autonomy, improve the lowest safety dimensions: verification, technical depth, decomposition, and workflow maturity." });
  }

  return recommendations.slice(0, 5);
}
