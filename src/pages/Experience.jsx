export default function Experience(){
  return (
    <section className="section">
      <h2>Experience</h2>
      <article className="card glow-card">
        <h3>Machine Learning Engineer — Giggso</h3>
        <p className="meta">Chennai, IN • Dec 2024 – Jul 2025</p>
        <ul className="checklist">
          <li><span className="check-icon" aria-hidden>✔</span>Designed LLM observability with AWS Bedrock evaluation jobs (auto + LLM‑as‑a‑judge) and Comprehend sentiment for continuous quality monitoring.</li>
          <li><span className="check-icon" aria-hidden>✔</span>Built schema‑aware RAG over DynamoDB: embeddings from schema/attributes/samples, CoT prompting, and dynamic case‑sensitive logic for scan vs query.</li>
          <li><span className="check-icon" aria-hidden>✔</span>Engineered a two‑phase scraping pipeline using adaptive selectors to cut LLM calls and scale across e‑commerce categories.</li>
        </ul>
        <p className="meta">Stack: Python, LangChain/DSPy, Bedrock, Comprehend, DynamoDB, FastAPI, Docker</p>
      </article>
    </section>
  )
}