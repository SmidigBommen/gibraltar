import type { Answers } from "@/types/assessment";

const ANSWERS_KEY = "vibeAssessment.answers";

export function loadAnswers(): Answers {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(ANSWERS_KEY) ?? "{}") as Answers;
  } catch {
    return {};
  }
}

export function saveAnswers(answers: Answers) {
  window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function clearAnswers() {
  window.localStorage.removeItem(ANSWERS_KEY);
}
