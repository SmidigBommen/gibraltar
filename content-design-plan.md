# Content and Design Plan

## Product Concept

Create an interactive web experience that helps people classify their current level of vibe coding / agentic engineering, understand their safe delegation level, and identify the next practices that will help them progress.

The experience should feel less like a generic quiz and more like a guided self-assessment for modern AI-assisted software work.

## Primary User Promise

> Discover how you currently work with AI, how much work you can safely delegate, and what to practice next.

## Audience

- Developers using AI coding tools.
- Product builders and founders using AI to ship faster.
- Engineering leaders exploring agentic workflows.
- People trying to understand whether they are coding, vibe coding, or managing agents.

## Core Framing

The central classification question is:

> How much work can you safely delegate to AI while still maintaining judgment, correctness, and ownership?

This should appear prominently in the experience.

---

# Level Framework

## Level 0 — Manual Labor

Humans retain complete control. Not a character hits the disk without explicit human approval. AI may be used as search or explanation, but the human remains the sole author.

## Level 1 — Assisted Tasks

Developers delegate specific, discrete tasks to AI tools while handling critical work themselves. Examples: unit tests, docstrings, simple helpers, comments, small transformations.

## Level 2 — Active Partnership

The developer pairs with AI like a colleague. AI is used continuously inside coding tools and acts like a junior colleague for implementation, refactoring, debugging, and routine work.

## Level 3 — Human Oversight

The AI becomes the primary developer while humans shift toward management and review. The human spends more time reviewing code, managing tasks, and checking results than typing code directly.

## Level 4 — Autonomous with Guidance

Humans transition to specification and planning roles. They draft specs, create skills or workflows, let agents work for extended periods, and return to check results and tests.

## Level 5 — Dark Factory

The process becomes fully autonomous: a black box that turns specs into software. Human involvement becomes optional for ordinary operation. Robots do not need the lights.

---

# User Journey

## 1. Landing Page

Goal: explain the concept quickly and invite the user to begin.

### Content Sections

1. Hero
   - Headline: “Find your vibe coding level.”
   - Subheadline: “Understand how you work with AI today, what you can safely delegate, and how to progress toward agentic engineering.”
   - CTA: “Start Assessment”

2. Concept Explanation
   - Short explanation of the six levels.
   - Emphasize that this is about delegation and ownership, not hype.

3. Why It Matters
   - Avoid overtrusting AI.
   - Identify the next workflow upgrade.
   - Understand the gap between ambition and safe practice.

4. Level Preview
   - Six compact level cards.

## 2. Assessment

Goal: ask focused questions tied to classification dimensions.

### Experience Style

- One question at a time or grouped by section.
- Clear progress indicator.
- Short answer options.
- No long intake form.
- No account required.

### Tone

- Direct.
- Practical.
- Non-judgmental.
- Slightly playful but credible.

## 3. Results

Goal: provide a useful, personalized classification.

### Result Sections

1. Current Level
   - Level number and name.
   - Short explanation.
   - “What this means.”

2. Safe Delegation Level
   - Based on verification, technical depth, workflow maturity, and decomposition.
   - Warns if ambition exceeds safe practice.

3. Aspirational Level
   - Based on where the user wants to go.
   - Shows future direction.

4. Score Breakdown
   - Bars or radar chart for each dimension.

5. Gap Analysis
   - Explains the largest gaps between current behavior, safe delegation, and ambition.

6. Recommended Next Practices
   - 3–5 concrete actions.

7. Suggested Workflow
   - A practical loop for the user’s next AI-assisted coding task.

8. Export / Share
   - Copy summary.
   - Download Markdown.
   - Optional shareable link in later versions.

## 4. Level Reference Page

Goal: provide a browsable explanation of all six levels.

Sections:

- Level cards.
- Human role.
- AI role.
- Example work.
- Risks.
- What moves someone to the next level.

## 5. About / Methodology Page

Goal: explain that the framework is a practical maturity model, not a scientific diagnosis.

Include:

- What the assessment measures.
- Why current, safe, and aspirational levels are separated.
- Caveats around automation and overtrust.

---

# Assessment Dimensions

## 1. AI Usage Frequency

Measures how central AI is to the user’s coding workflow.

## 2. Task Complexity

Measures the largest and most complex task the user would delegate to AI.

## 3. Context Management

Measures how well the user gives AI useful files, constraints, examples, logs, and goals.

## 4. Verification Skill

Measures how the user checks AI-generated work.

## 5. Decomposition Skill

Measures whether the user can break vague goals into AI-actionable tasks.

## 6. Technical Depth

Measures whether the user can understand, debug, and reason about generated code.

## 7. Workflow Sophistication

Measures whether the user has a repeatable AI-assisted development process.

## 8. Ambition

Measures where the user wants to go with vibe coding or agentic engineering.

---

# Question Bank

## AI Usage Frequency

**How often is AI part of your coding workflow?**

- 0: Rarely or never.
- 1: Occasionally for explanations or examples.
- 2: Frequently for small tasks.
- 3: Daily as part of coding.
- 4: AI agents are part of my normal workflow.
- 5: AI systems can operate without my constant involvement.

## Task Complexity

**What is the largest coding task you would delegate to AI?**

- 0: Search or explain something.
- 1: Write a test, comment, docstring, or helper.
- 2: Implement a bounded feature with supervision.
- 3: Work on full tickets while I review.
- 4: Execute from a spec over many hours.
- 5: Produce software autonomously from specs.

## Context Management

**How do you usually give context to AI?**

- 0: I ask vague questions without much context.
- 1: I paste small snippets.
- 2: I include relevant files or examples.
- 3: I provide goals, constraints, files, and expected behavior.
- 4: I provide specs, acceptance criteria, and test expectations.
- 5: My workflow automatically provides the right context to agents.

## Verification Skill

**How do you check AI-generated work?**

- 0: I mostly trust it.
- 1: I skim the output.
- 2: I review the code and run it manually.
- 3: I review diffs and run tests/type checks.
- 4: I use CI, regression tests, and structured review.
- 5: I have strong automated evals, monitoring, and rollback.

## Decomposition Skill

**How do you turn a vague goal into AI-executable work?**

- 0: I usually ask the AI to figure it all out.
- 1: I give a broad request.
- 2: I break it into a few steps.
- 3: I define scoped tasks with clear outcomes.
- 4: I write detailed specs and acceptance criteria.
- 5: I maintain reusable task patterns, specs, or workflows.

## Technical Depth

**If AI-generated code breaks, what can you do?**

- 0: I am usually stuck.
- 1: I can ask AI to try again.
- 2: I can make small fixes.
- 3: I can debug most issues in familiar code.
- 4: I can reason about architecture, edge cases, and maintainability.
- 5: I can design systems, review deeply, and catch subtle failures.

## Workflow Sophistication

**Which best describes your AI coding workflow?**

- 0: No real workflow.
- 1: Occasional chat.
- 2: AI inside my editor.
- 3: Agent works on scoped tasks.
- 4: Repeatable spec → implementation → test loop.
- 5: Autonomous software production pipeline.

## Ambition

**Where do you want to go with AI-assisted coding?**

- 0: I am just curious.
- 1: I want help with small coding tasks.
- 2: I want to code faster with AI as a partner.
- 3: I want to manage agents that implement work for me.
- 4: I want to design workflows where agents execute from specs.
- 5: I want to build or operate autonomous software systems.

---

# Result Content Rules

## Current Level

Based primarily on actual behavior:

- AI usage frequency.
- Task complexity.
- Context management.
- Workflow sophistication.

## Safe Delegation Level

Based primarily on reliability and control:

- Verification skill.
- Technical depth.
- Decomposition skill.
- Workflow sophistication.

## Aspirational Level

Based on desired future direction:

- Ambition.
- Task complexity.
- Workflow sophistication.

---

# Recommended Next Practices by Level

## Level 0 → Level 1

- Use AI for explanations and examples.
- Ask AI to write simple tests or comments.
- Compare AI output against documentation.
- Keep manual control over final changes.

## Level 1 → Level 2

- Use AI inside the coding environment.
- Provide more context before asking for code.
- Ask for implementation plans.
- Review generated code line by line.
- Run tests before accepting changes.

## Level 2 → Level 3

- Break work into scoped tickets.
- Ask agents to inspect before editing.
- Review diffs carefully.
- Add regression tests.
- Use branches, commits, or worktrees for isolation.

## Level 3 → Level 4

- Write specs and acceptance criteria.
- Create reusable prompts or skills.
- Add CI and stronger automated checks.
- Let agents run longer only inside guardrails.
- Review summaries, tests, and diffs systematically.

## Level 4 → Level 5

- Invest in evals, monitoring, rollback, and governance.
- Restrict autonomy to well-specified domains first.
- Build strong audit trails.
- Define policies for deployment and human escalation.
- Treat full autonomy as an operational system, not a demo.

---

# Visual Design Direction

## Tone

- Modern.
- Clear.
- Slightly futuristic.
- Engineering-literate.
- Not overly corporate.

## Visual Elements

- Level cards.
- Progress bar.
- Result badge.
- Score bars or radar chart.
- Gap indicator.
- Recommended checklist.
- Export/share controls.

## Level Colors

- Level 0 — Gray.
- Level 1 — Blue.
- Level 2 — Green.
- Level 3 — Amber.
- Level 4 — Purple.
- Level 5 — Black / near-black.

## Design Priorities

1. The assessment should feel fast.
2. Results should be useful even if the user does not share data.
3. The levels should be easy to scan.
4. The tool should avoid shaming lower levels.
5. The tool should warn gently about unsafe over-delegation.
