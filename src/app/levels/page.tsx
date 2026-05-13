import { levels } from "@/content/levels";

export default function LevelsPage() {
  return (
    <main className="container section">
      <div className="eyebrow">Reference</div>
      <h1>The six levels</h1>
      <p className="lead">A practical ladder from manual coding to autonomous software production.</p>
      <div className="grid">
        {levels.map((level) => (
          <article className="card" key={level.level}>
            <div className="level-badge">Level {level.level}</div>
            <h2>{level.name}</h2>
            <p>{level.shortDescription}</p>
            <h3>Human role</h3>
            <p>{level.humanRole}</p>
            <h3>AI role</h3>
            <p>{level.aiRole}</p>
            <h3>Example work</h3>
            <ul>{level.exampleWork.map((item) => <li key={item}>{item}</li>)}</ul>
            <h3>Risks</h3>
            <ul>{level.risks.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </main>
  );
}
