export type Dimension =
  | "aiUsage"
  | "taskComplexity"
  | "contextManagement"
  | "verification"
  | "decomposition"
  | "technicalDepth"
  | "workflowSophistication"
  | "ambition";

export type Level = 0 | 1 | 2 | 3 | 4 | 5;

export interface AnswerOption {
  label: string;
  value: Level;
}

export interface Question {
  id: string;
  dimension: Dimension;
  prompt: string;
  options: AnswerOption[];
}

export type Answers = Record<string, Level>;

export type DimensionScores = Record<Dimension, number>;

export interface Gap {
  title: string;
  message: string;
}

export interface Recommendation {
  title: string;
  description: string;
}

export interface AssessmentResult {
  currentLevel: Level;
  safeDelegationLevel: Level;
  aspirationalLevel: Level;
  dimensionScores: DimensionScores;
  gaps: Gap[];
  recommendations: Recommendation[];
}

export interface LevelDefinition {
  level: Level;
  name: string;
  shortDescription: string;
  humanRole: string;
  aiRole: string;
  typicalBehavior: string[];
  goodFor: string[];
  risks: string[];
  exampleWork: string[];
  color: string;
}
