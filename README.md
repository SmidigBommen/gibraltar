# Gibraltar

Gibraltar is a planning project for an interactive web assessment that helps people classify their current level of vibe coding / agentic engineering.

The goal is to help users understand:

- Their current AI-assisted coding level.
- Their safe delegation level.
- Their aspirational level.
- The gap between ambition and reliable practice.
- Concrete next steps for improving their workflow.

## Core Idea

The central question is:

> How much work can you safely delegate to AI while still maintaining judgment, correctness, and ownership?

This project uses a six-level model inspired by modern AI-assisted software development workflows.

## Vibe Coding Levels

- **Level 0 — Manual Labor**: Humans retain complete control. AI may be used as search or explanation, but the human remains the sole author.
- **Level 1 — Assisted Tasks**: Developers delegate small, discrete jobs such as tests, docstrings, comments, or helpers.
- **Level 2 — Active Partnership**: Developers pair with AI like a colleague and use coding tools in a productive flow state.
- **Level 3 — Human Oversight**: AI becomes the primary developer while humans review, manage, and guide work.
- **Level 4 — Autonomous with Guidance**: Humans write specs and create workflows while agents execute for extended periods.
- **Level 5 — Dark Factory**: A mostly autonomous system turns specs into software with little or no routine human involvement.

## Documents

- [`vibe-coding-levels.md`](./vibe-coding-levels.md) — the level framework, classification dimensions, scoring rubric, and ambition tracks.
- [`content-design-plan.md`](./content-design-plan.md) — content strategy, user journey, assessment questions, result content, and visual design direction.
- [`technology-implementation-plan.md`](./technology-implementation-plan.md) — proposed routes, data model, scoring logic, components, implementation phases, testing, and deployment plan.

## Proposed Web Experience

The planned MVP is a no-login interactive web app with:

1. Landing page.
2. Assessment flow.
3. Scoring engine.
4. Results page.
5. Level reference page.
6. Markdown export.

## Recommended MVP Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- localStorage for answer persistence

## Status

Planning phase.
