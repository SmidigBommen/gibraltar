# Technology and Implementation Plan

## MVP Goal

Build a no-login interactive web app that lets users complete a short vibe coding / agentic engineering assessment and receive a personalized result.

The MVP should include:

1. Landing page.
2. Assessment flow.
3. Scoring engine.
4. Results page.
5. Level reference page.
6. Markdown export.

No backend is required for the first version.

---

# Recommended Stack

## Preferred Stack

- **Next.js** for routing and static/server-rendered pages.
- **TypeScript** for scoring model safety.
- **Tailwind CSS** for styling.
- **shadcn/ui** or similar component primitives.
- **Recharts** for simple result visualizations.
- **localStorage** for saving in-progress answers.

## Alternative Lightweight Stack

- Vite.
- React.
- TypeScript.
- Tailwind CSS.

Use this if the app does not need Next.js routing or server-side features.

---

# Application Routes

## `/`

Landing page.

Components:

- Hero.
- CTA button.
- Short explanation.
- Level preview cards.
- Why this matters section.

## `/assessment`

Interactive questionnaire.

Components:

- Progress indicator.
- Question card.
- Answer options.
- Back/next buttons.
- Optional section indicator.
- Local autosave.

## `/results`

Personalized result.

Components:

- Current level card.
- Safe delegation level card.
- Aspirational level card.
- Score breakdown chart.
- Gap analysis.
- Recommended next practices.
- Suggested workflow.
- Copy/download actions.

## `/levels`

Reference page for the six levels.

Components:

- Six detailed level cards.
- Human role.
- AI role.
- Example work.
- Risks.

## `/about`

Methodology and caveats.

Components:

- Explanation of scoring.
- Explanation of current vs safe vs aspirational level.
- Caveats about overtrust and automation.

---

# Data Model

## Dimension Type

```ts
export type Dimension =
  | "aiUsage"
  | "taskComplexity"
  | "contextManagement"
  | "verification"
  | "decomposition"
  | "technicalDepth"
  | "workflowSophistication"
  | "ambition";
```

## Level Type

```ts
export type Level = 0 | 1 | 2 | 3 | 4 | 5;
```

## Question Model

```ts
export interface AnswerOption {
  label: string;
  value: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Question {
  id: string;
  dimension: Dimension;
  prompt: string;
  options: AnswerOption[];
}
```

## Assessment State

```ts
export type Answers = Record<string, number>;

export interface DimensionScores {
  aiUsage: number;
  taskComplexity: number;
  contextManagement: number;
  verification: number;
  decomposition: number;
  technicalDepth: number;
  workflowSophistication: number;
  ambition: number;
}

export interface AssessmentResult {
  currentLevel: Level;
  safeDelegationLevel: Level;
  aspirationalLevel: Level;
  dimensionScores: DimensionScores;
  gaps: Gap[];
  recommendations: Recommendation[];
}

export interface Gap {
  dimension: Dimension;
  score: number;
  message: string;
}

export interface Recommendation {
  title: string;
  description: string;
}
```

---

# Static Content Model

## Level Definition

```ts
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
  colorToken: string;
}
```

Store level definitions in:

```txt
src/content/levels.ts
```

Store questions in:

```txt
src/content/questions.ts
```

Store recommendations in:

```txt
src/content/recommendations.ts
```

---

# Scoring Logic

## Dimension Scores

Each question maps to one dimension and has a value from 0 to 5.

If there is one question per dimension, the dimension score is simply the selected value.

If future versions include multiple questions per dimension, calculate the average.

## Current Level

Current level reflects actual behavior and present usage.

```ts
currentLevel = bucketAverage([
  aiUsage,
  taskComplexity,
  contextManagement,
  workflowSophistication,
]);
```

## Safe Delegation Level

Safe delegation level reflects how much autonomy the user can responsibly give AI.

```ts
safeDelegationLevel = bucketAverage([
  verification,
  technicalDepth,
  decomposition,
  workflowSophistication,
]);
```

## Aspirational Level

Aspirational level reflects where the user wants to go.

```ts
aspirationalLevel = bucketAverage([
  ambition,
  taskComplexity,
  workflowSophistication,
]);
```

## Bucket Function

Initial implementation:

```ts
export function bucketAverage(values: number[]): Level {
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.max(0, Math.min(5, Math.round(average))) as Level;
}
```

Possible future implementation:

- Use thresholds instead of rounding.
- Penalize high ambition when verification is low.
- Cap safe delegation level based on verification score.

## Safety Cap Rule

For the MVP, consider adding a safety cap:

```ts
safeDelegationLevel = Math.min(
  safeDelegationLevel,
  verification + 1,
  technicalDepth + 1
) as Level;
```

This prevents someone with weak verification from being classified as safe for high-autonomy workflows.

---

# Result Logic

## Gap Detection

Important gaps:

1. Aspirational level is 2 or more levels above safe delegation level.
2. Current level is above safe delegation level.
3. Verification is lower than task complexity.
4. Workflow sophistication is lower than ambition.
5. Context management is lower than task complexity.

## Gap Messages

Example rules:

```ts
if (aspirationalLevel - safeDelegationLevel >= 2) {
  gaps.push({
    dimension: "ambition",
    score: scores.ambition,
    message: "Your ambition is ahead of your current safety practices. Focus on verification, decomposition, and workflow maturity before increasing autonomy."
  });
}
```

## Recommendations

Recommendations should be selected based on:

- Current level.
- Safe delegation level.
- Lowest scoring dimensions.
- Gap between ambition and safety.

Example:

```ts
if (scores.verification <= 2) {
  recommendations.push({
    title: "Strengthen verification",
    description: "Review diffs, run tests, and add regression checks before accepting AI-generated changes."
  });
}
```

---

# Component Plan

## Layout Components

- `AppShell`
- `Header`
- `Footer`
- `Container`

## Assessment Components

- `AssessmentFlow`
- `QuestionCard`
- `AnswerOptionCard`
- `ProgressBar`
- `AssessmentNavigation`

## Results Components

- `LevelResultCard`
- `ScoreBreakdown`
- `GapAnalysis`
- `RecommendationList`
- `SuggestedWorkflow`
- `MarkdownExportButton`

## Level Reference Components

- `LevelCard`
- `LevelGrid`
- `LevelDetail`

---

# State Management

MVP does not need global state libraries.

Use:

- React state for active assessment flow.
- localStorage for persistence.
- URL query params or localStorage for results.

## localStorage Keys

```txt
vibeAssessment.answers
vibeAssessment.completedAt
```

## Result Storage

Option 1:

- Recompute result from localStorage answers on `/results`.

Option 2:

- Encode answers in URL for shareable links.

MVP recommendation:

- Use localStorage first.
- Add URL-encoded sharing later.

---

# Markdown Export

Users should be able to download or copy a Markdown summary.

## Export Content

- Current level.
- Safe delegation level.
- Aspirational level.
- Dimension scores.
- Gap analysis.
- Recommended next practices.

## Implementation

Create:

```txt
src/lib/exportMarkdown.ts
```

Function:

```ts
export function generateMarkdownReport(result: AssessmentResult): string;
```

Download helper:

```ts
export function downloadMarkdown(filename: string, content: string): void;
```

---

# File Structure

Recommended structure:

```txt
src/
  app/
    page.tsx
    assessment/
      page.tsx
    results/
      page.tsx
    levels/
      page.tsx
    about/
      page.tsx
  components/
    layout/
    assessment/
    results/
    levels/
    ui/
  content/
    levels.ts
    questions.ts
    recommendations.ts
  lib/
    scoring.ts
    gaps.ts
    recommendations.ts
    exportMarkdown.ts
    storage.ts
  types/
    assessment.ts
```

If using Vite instead of Next.js, replace `src/app` with standard React Router routes.

---

# Implementation Phases

## Phase 1 — Static Content and Routing

- Set up app shell.
- Create landing page.
- Create levels page.
- Add static content definitions.

## Phase 2 — Assessment Flow

- Implement question model.
- Build question UI.
- Add answer state.
- Add progress and navigation.
- Persist answers to localStorage.

## Phase 3 — Scoring and Results

- Implement scoring functions.
- Implement gap detection.
- Implement recommendation selection.
- Build results page.
- Add score visualization.

## Phase 4 — Export and Polish

- Add Markdown export.
- Add copy summary action.
- Improve responsive design.
- Add empty/error states.
- Add accessibility checks.

## Phase 5 — Future Enhancements

- Shareable result URLs.
- PDF export.
- Team assessment mode.
- Anonymous benchmark data.
- Email capture.
- Admin-editable questions.
- AI-generated 30-day plan.

---

# Testing Plan

## Unit Tests

Test:

- `bucketAverage`.
- Current level calculation.
- Safe delegation level calculation.
- Aspirational level calculation.
- Safety cap behavior.
- Gap detection.
- Recommendation selection.
- Markdown export.

## UI Tests

Test:

- User can complete assessment.
- Back/next navigation works.
- Progress indicator updates.
- Results render after completion.
- localStorage persistence works.
- Markdown export creates expected content.

## Manual QA

Check:

- Mobile layout.
- Keyboard navigation.
- Screen reader labels.
- Color contrast.
- Empty state if user visits `/results` without answers.

---

# Accessibility Requirements

- All answer options should be keyboard-selectable.
- Use semantic buttons or radio groups.
- Progress indicator should have accessible text.
- Charts should include text alternatives.
- Do not rely on color alone to communicate level.
- Ensure sufficient contrast, especially for Level 5 dark styling.

---

# Deployment

## MVP Deployment Options

- Vercel for Next.js.
- Netlify for Vite/React.
- Static export if no server features are needed.

## Environment Variables

None needed for MVP.

Future versions may need variables for:

- Analytics.
- Email capture.
- Backend API.
- Authentication.

---

# Analytics Plan

Optional for MVP.

If added, track only anonymous product events:

- Assessment started.
- Assessment completed.
- Result level generated.
- Markdown exported.
- Level reference viewed.

Avoid collecting raw answers unless there is explicit consent.

---

# Privacy Notes

MVP should be privacy-friendly:

- No login.
- No backend storage.
- Answers stored locally in the browser.
- Clear notice if analytics are later added.

---

# Definition of Done for MVP

- User can start assessment from landing page.
- User can answer all questions.
- User receives current, safe, and aspirational levels.
- User sees dimension score breakdown.
- User sees gap analysis and recommendations.
- User can view all six level definitions.
- User can export results as Markdown.
- App works on desktop and mobile.
- Basic accessibility requirements are met.
