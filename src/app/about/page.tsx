export default function AboutPage() {
  return (
    <main className="container hero">
      <div className="eyebrow">Methodology</div>
      <h1>Built around delegation, safety, and ownership.</h1>
      <p className="lead">
        Gibraltar is not a scientific diagnosis. It is a practical self-assessment for understanding how you currently work with AI and what needs to improve before giving AI more autonomy.
      </p>
      <section className="grid section">
        <article className="card">
          <h2>Current level</h2>
          <p>Based on actual behavior: AI usage, task complexity, context management, and workflow sophistication.</p>
        </article>
        <article className="card">
          <h2>Safe delegation level</h2>
          <p>Based on reliability and control: verification, technical depth, decomposition, and workflow maturity.</p>
        </article>
        <article className="card">
          <h2>Aspirational level</h2>
          <p>Based on where you want to go: ambition, task complexity, and workflow sophistication.</p>
        </article>
      </section>
    </main>
  );
}
