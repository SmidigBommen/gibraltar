import Link from "next/link";
import { levels } from "@/content/levels";

export default function Home() {
  return (
    <main>
      <section className="container hero">
        <div className="eyebrow">Vibe coding level finder</div>
        <h1>How much work can you safely delegate to AI?</h1>
        <p className="lead">
          Gibraltar helps you classify your current AI-assisted coding level, your safe delegation level, and your path toward agentic engineering.
        </p>
        <div className="actions">
          <Link className="button primary" href="/assessment">Start assessment</Link>
          <Link className="button" href="/levels">Explore levels</Link>
        </div>
      </section>

      <section className="container section">
        <h2>The six levels</h2>
        <div className="grid">
          {levels.map((level) => (
            <article className="card" key={level.level}>
              <div className="level-badge">Level {level.level}</div>
              <h3>{level.name}</h3>
              <p>{level.shortDescription}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
