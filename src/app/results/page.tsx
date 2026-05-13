"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLevel } from "@/content/levels";
import { questions } from "@/content/questions";
import { generateMarkdownReport, downloadMarkdown } from "@/lib/exportMarkdown";
import { calculateResult } from "@/lib/scoring";
import { loadAnswers } from "@/lib/storage";
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

function LevelCard({ title, levelNumber }: { title: string; levelNumber: number }) {
  const level = getLevel(levelNumber);
  return (
    <article className="card">
      <div className="level-badge">{title}</div>
      <h3>Level {level.level} — {level.name}</h3>
      <p>{level.shortDescription}</p>
    </article>
  );
}

export default function ResultsPage() {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const answers = loadAnswers();
    const isComplete = questions.every((question) => answers[question.id] !== undefined);
    setComplete(isComplete);
    if (isComplete) setResult(calculateResult(answers));
  }, []);

  if (!complete || !result) {
    return (
      <main className="container hero">
        <h1>No result yet</h1>
        <p className="lead">Complete the assessment first to generate your current, safe, and aspirational levels.</p>
        <Link className="button primary" href="/assessment">Start assessment</Link>
      </main>
    );
  }

  const markdown = generateMarkdownReport(result);

  return (
    <main>
      <section className="container result-hero">
        <div className="eyebrow">Your result</div>
        <h1>Level {result.currentLevel} — {getLevel(result.currentLevel).name}</h1>
        <p className="lead">Your current AI-assisted workflow is compared with your safe delegation level and your ambition.</p>
        <div className="actions">
          <button className="button primary" onClick={() => downloadMarkdown("vibe-coding-result.md", markdown)} type="button">Download Markdown</button>
          <button className="button" onClick={() => navigator.clipboard.writeText(markdown)} type="button">Copy summary</button>
        </div>
      </section>

      <section className="container section grid">
        <LevelCard title="Current level" levelNumber={result.currentLevel} />
        <LevelCard title="Safe delegation level" levelNumber={result.safeDelegationLevel} />
        <LevelCard title="Aspirational level" levelNumber={result.aspirationalLevel} />
      </section>

      <section className="container section">
        <h2>Score breakdown</h2>
        <div className="card">
          {Object.entries(result.dimensionScores).map(([key, value]) => (
            <div className="score-row" key={key}>
              <span>{labels[key]}</span>
              <div className="score-bar"><span style={{ width: `${(value / 5) * 100}%` }} /></div>
              <span>{value.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section grid">
        <article className="card">
          <h2>Gap analysis</h2>
          {result.gaps.length ? result.gaps.map((gap) => (
            <div key={gap.title}>
              <h3>{gap.title}</h3>
              <p>{gap.message}</p>
            </div>
          )) : <p>No major gaps detected.</p>}
        </article>
        <article className="card">
          <h2>Recommended next practices</h2>
          <ul>
            {result.recommendations.map((rec) => <li key={rec.title}><strong>{rec.title}:</strong> {rec.description}</li>)}
          </ul>
        </article>
      </section>
    </main>
  );
}
