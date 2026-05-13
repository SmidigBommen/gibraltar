"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/content/questions";
import { loadAnswers, saveAnswers } from "@/lib/storage";
import type { Answers, Level } from "@/types/assessment";

export default function AssessmentPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);
  const question = questions[index];
  const progress = useMemo(() => ((index + 1) / questions.length) * 100, [index]);

  useEffect(() => {
    setAnswers(loadAnswers());
  }, []);

  function answer(value: Level) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    saveAnswers(next);
  }

  function next() {
    if (index === questions.length - 1) {
      router.push("/results");
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <main className="container question-wrap">
      <div className="progress" aria-label={`Question ${index + 1} of ${questions.length}`}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <p>Question {index + 1} of {questions.length}</p>
      <section className="card">
        <div className="level-badge">{question.dimension}</div>
        <h2>{question.prompt}</h2>
        {question.options.map((option) => (
          <button
            className={`option ${answers[question.id] === option.value ? "selected" : ""}`}
            key={option.value}
            onClick={() => answer(option.value)}
            type="button"
          >
            <strong>{option.value}</strong> — {option.label}
          </button>
        ))}
      </section>
      <div className="actions">
        <button className="button" disabled={index === 0} onClick={() => setIndex(index - 1)} type="button">Back</button>
        <button className="button primary" disabled={answers[question.id] === undefined} onClick={next} type="button">
          {index === questions.length - 1 ? "See results" : "Next"}
        </button>
      </div>
    </main>
  );
}
