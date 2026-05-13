# Vibe Coding / Agentic Engineering Levels

A practical framework for classifying work by how much can be safely delegated to AI while preserving human judgment, correctness, and ownership.

## Core Classification Idea

The key question is not simply:

> How much AI do you use?

It is:

> How much work can you safely delegate to AI while still maintaining judgment, correctness, and ownership?

This separates casual AI-assisted coding from serious agentic engineering.

---

## Level 0 — Manual Labor

**Description:**  
Humans retain complete control. Not a character hits the disk without explicit human approval. Developers may use AI as a search tool or occasionally accept suggestions, but fundamentally remain the sole author.

**Human role:** Sole author and final decision-maker.

**AI role:** Search, explanation, autocomplete, or occasional suggestion.

**Typical behavior:**

- Writes most or all code manually.
- Uses AI similarly to documentation or search.
- Accepts little or no code without reviewing every line.
- Keeps tight control over every change.

**Good for:**

- Learning fundamentals.
- High-stakes or sensitive changes.
- Deep debugging and system understanding.
- Situations where trust in automation is low.

**Risks:**

- Slow iteration.
- Underuse of useful automation.
- Human becomes the bottleneck for repetitive work.

**Example work:**

- Ask AI to explain an API.
- Search for examples.
- Manually write and approve every change.

---

## Level 1 — Assisted Tasks

**Description:**  
Developers delegate specific, discrete jobs to AI tools while handling critical work themselves. Productivity increases, but the developer’s core role remains unchanged.

**Human role:** Primary developer.

**AI role:** Task assistant for small, bounded jobs.

**Typical behavior:**

- Delegates small tasks such as tests, docstrings, comments, examples, or simple transformations.
- Keeps architecture, integration, and critical logic human-led.
- Reviews generated output before accepting it.
- Uses AI to reduce friction rather than change the development process.

**Good for:**

- Unit tests.
- Documentation.
- Boilerplate.
- Small refactors.
- Isolated helper functions.

**Risks:**

- Mistaking small-task productivity for system-level capability.
- Accepting low-quality generated code because the task feels minor.
- Remaining stuck in manual workflows despite using AI frequently.

**Example work:**

- “Write a unit test for this.”
- “Add a docstring.”
- “Convert this function to TypeScript.”

---

## Level 2 — Active Partnership

**Description:**  
The developer pairs with AI like a colleague. This often feels like a productive flow state. Many current AI-native developers operate here, offloading routine work to an AI junior colleague through specialized coding tools rather than only using chat interfaces.

**Human role:** Pair programmer, reviewer, and technical lead for the immediate task.

**AI role:** Junior colleague that can implement, refactor, debug, and suggest next steps.

**Typical behavior:**

- Works with AI continuously inside the coding environment.
- Delegates routine implementation and refactoring.
- Gives context, constraints, and feedback.
- Alternates between AI generation and human review.
- Maintains ownership of architecture and correctness.

**Good for:**

- Feature implementation.
- Multi-step debugging.
- Refactoring.
- Test creation.
- Routine engineering work.

**Risks:**

- Overtrusting the “flow state.”
- Letting the AI shape architecture accidentally.
- Weak verification of code that appears plausible.
- Confusing velocity with quality.

**Example work:**

- Implement a feature with AI editing multiple related pieces under close supervision.
- Ask AI to diagnose an error, patch it, and add a regression test.
- Use an AI coding tool as a daily pair programmer.

---

## Level 3 — Human Oversight

**Description:**  
The AI becomes the primary developer while humans shift toward management and review. The coding agent may be running in multiple tabs or tasks, and the human spends much of the day reviewing code. This transition can feel regressive because the human writes less code and manages more work.

**Human role:** Manager, reviewer, planner, and quality gate.

**AI role:** Primary implementer across tasks.

**Typical behavior:**

- Runs one or more coding agents on scoped tickets.
- Reviews diffs, test results, and implementation choices.
- Breaks work into manageable tasks for agents.
- Uses version control, CI, and rollback mechanisms.
- Spends more time supervising than typing code.

**Good for:**

- Parallelized implementation.
- Bug investigation.
- Multi-file changes.
- Backlog execution.
- Codebase maintenance.

**Risks:**

- Review fatigue.
- Hidden regressions.
- Poor task specification.
- Agents producing large, difficult-to-review diffs.
- The work feeling slower or less satisfying before the workflow matures.

**Example work:**

- Assign three agents to separate tickets and review their PRs.
- Have an agent investigate a failing checkout flow and propose a patch.
- Let an agent implement a feature while the human reviews tests and diffs.

---

## Level 4 — Autonomous with Guidance

**Description:**  
Humans transition to specification and planning roles rather than coding. After drafting specs and crafting custom skills or workflows, developers can leave agents running for extended periods and later check whether the tests pass.

**Human role:** Spec writer, planner, workflow designer, and evaluator.

**AI role:** Semi-autonomous executor that plans, implements, tests, and iterates within constraints.

**Typical behavior:**

- Writes detailed specs instead of direct code instructions.
- Creates reusable skills, prompts, tools, or workflows.
- Lets agents run for long periods with defined goals and guardrails.
- Checks test results, summaries, and final diffs after execution.
- Builds feedback loops for quality and correction.

**Good for:**

- Large migrations.
- Repetitive feature families.
- Product prototypes.
- Internal tooling.
- AI-assisted software factories.

**Risks:**

- Specs that are too vague or too brittle.
- Tests becoming the only definition of correctness.
- Hard-to-debug agent behavior.
- Automation running ahead of human understanding.
- Security and reliability gaps if guardrails are weak.

**Example work:**

- Draft a feature spec, provide acceptance tests, and let the agent work for hours.
- Build a reusable skill for implementing a standard CRUD flow.
- Ask the agent to migrate a module and report back with passing tests.

---

## Level 5 — Dark Factory

**Description:**  
The process becomes fully autonomous: a black box that turns specs into software. Named after Fanuc’s robot factory, this represents complete automation where human involvement becomes unnecessary. Robots do not need the lights.

**Human role:** Optional upstream intent setter, owner, or governor.

**AI role:** Autonomous software production system.

**Typical behavior:**

- Software is generated, tested, improved, and possibly deployed without routine human intervention.
- Humans may provide high-level goals, policies, or business constraints.
- The system handles planning, coding, validation, and iteration internally.
- Human review is no longer required for ordinary operation.

**Good for:**

- Highly constrained domains with strong specs and evals.
- Automated internal software generation.
- Continuous product or infrastructure adaptation.
- Mature AI-native engineering systems.

**Risks:**

- Loss of visibility and control.
- Accountability gaps.
- Misaligned output at scale.
- Security, compliance, and safety failures.
- Difficulty knowing when the black box is wrong.

**Example work:**

- A system that turns approved specs into deployed software without human coding or review.
- Autonomous maintenance of a codebase against changing requirements.
- Continuous generation and validation of product experiments.

---

# Classification Dimensions

Use these dimensions to classify someone’s current level, safe level, and aspirational level.

## 1. AI Usage Frequency

Questions:

- How often is AI part of the coding workflow?
- Is AI used occasionally, daily, or by default?
- Is AI used only for answers, or also for implementation?

## 2. Task Complexity

Questions:

- What is the largest task comfortably delegated to AI?
- Does the person use AI for snippets, functions, bugs, features, architecture, or workflows?
- Does the work involve one file, multiple files, or entire systems?

## 3. Context Management

Questions:

- Does the person provide relevant files, constraints, examples, logs, and goals?
- Can they scope context appropriately?
- Can they tell when the AI lacks enough information?

## 4. Verification Skill

Questions:

- How is AI-generated work checked?
- Are tests, type checking, linting, CI, review, or evals used?
- Does the person inspect diffs before accepting changes?
- Can they explain why the solution works?

## 5. Decomposition Skill

Questions:

- Can vague goals be broken into AI-actionable tasks?
- Can the person create step-by-step implementation plans?
- Can they decide what should be automated and what should remain human-led?

## 6. Technical Depth

Questions:

- Could the person fix the code if AI failed?
- Do they understand the architecture?
- Can they reason about performance, security, edge cases, and maintainability?

## 7. Workflow Sophistication

Questions:

- Is the workflow ad hoc chat, or repeatable process?
- Are agents, scripts, templates, CI, evals, or custom tools involved?
- Is there a defined loop for planning, coding, testing, and review?

## 8. Ambition

Questions:

- Does the person want to code faster, learn deeply, ship products, lead teams, or build autonomous systems?
- How much technical depth do they want?
- Are they optimizing for speed, understanding, reliability, autonomy, product creation, business leverage, or engineering mastery?

---

# Simple Scoring Rubric

Score each dimension from 0 to 5.

| Dimension | 0 | 5 |
|---|---|---|
| AI usage | Never uses AI | AI is core workflow |
| Task delegation | Only asks questions | Delegates complex workflows |
| Context skill | Gives vague prompts | Provides complete useful context |
| Verification | Trusts blindly | Uses strong tests/review/evals |
| Technical depth | Cannot debug | Can reason deeply |
| Workflow maturity | Ad hoc chat | Repeatable agentic system |
| Ambition | Curiosity only | Wants AI-native engineering |

Then classify three levels:

1. **Current Level** — based on actual behavior.
2. **Safe Level** — based on verification, judgment, and technical skill.
3. **Aspirational Level** — based on ambition and desired direction.

Important: someone may have Level 5 ambition but only Level 1 verification skills. That means they need a growth path, not just more powerful tools.

---

# Example Classification Output

## Current Level: 2 — Active Partnership

You use AI regularly to generate functions, debug issues, and implement small features. You understand much of what it produces and can usually verify it manually.

## Strengths

- Comfortable prompting AI.
- Able to work with real code.
- Interested in larger projects.

## Risks

- Verification is still informal.
- Larger multi-file changes may introduce hidden bugs.
- Architecture decisions may be inconsistent.

## Recommended Next Level

Move toward **Level 3 — Human Oversight**.

## Next Practices

1. Use version control carefully.
2. Review every diff.
3. Add tests before asking AI to make larger changes.
4. Ask AI to produce a plan before editing.
5. Break work into small tickets.
6. Practice debugging AI-generated mistakes.

---

# Ambition Tracks

## Track 1 — Builder

For people who want to build apps, prototypes, and personal tools.

**Goal:** Level 1 → Level 3

**Focus:**

- Prompting.
- Debugging.
- App structure.
- Deployment.
- Basic testing.

## Track 2 — Professional Engineer

For people who want to become stronger software engineers with AI.

**Goal:** Level 2 → Level 4

**Focus:**

- Architecture.
- Testing.
- Code quality.
- Security.
- Maintainability.
- Code review.

## Track 3 — Founder / Product Creator

For people who want to ship products quickly.

**Goal:** Level 2 → Level 4

**Focus:**

- Rapid prototyping.
- User feedback.
- MVP scoping.
- No-code, low-code, and AI-code combinations.
- Deployment.
- Analytics.

## Track 4 — Agentic Engineering Leader

For people who want to lead teams or build AI-native engineering workflows.

**Goal:** Level 3 → Level 5

**Focus:**

- Agent orchestration.
- Evaluation.
- Guardrails.
- CI/CD.
- Multi-agent workflows.
- Human-in-the-loop systems.
- Governance.

---

# Recommended Structure for a Tool or Advisory System

1. Classification dimensions.
2. Scoring model.
3. Current level classification.
4. Ambition classification.
5. Gap analysis.
6. Recommended next practices.
7. Suggested tools and workflows.
8. Safety and quality checklist.
9. 30-day progression plan.
