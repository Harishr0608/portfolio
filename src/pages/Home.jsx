export default function Home(){
  return (
    <section className="hero reveal">
      <h1 className="hero-title">Machine Learning Engineer</h1>
      <p className="subtitle">
        ML engineer with hands‑on experience delivering LLM observability on AWS Bedrock, schema‑aware RAG on DynamoDB, and adaptive web scraping at scale, blending generative AI with robust data engineering for measurable business impact.
      </p>
      <div className="cta">
        <a className="btn" href="mailto:harishr0608@gmail.com">Get in touch</a>
        <a className="btn outline" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn outline" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      <div className="section">
        <h2>Highlights</h2>
        <div className="grid">
          <div className="card tilt reveal"><div className="tilt-inner">
            <h3>LLM Observability</h3>
            <p className="meta">Automated quality checks with Bedrock evaluation jobs and Comprehend sentiment to monitor outputs continuously.</p>
          </div></div>
          <div className="card tilt reveal"><div className="tilt-inner">
            <h3>Schema‑aware RAG</h3>
            <p className="meta">Optimized embeddings from table schema/attributes and CoT prompting to generate accurate NoSQL queries.</p>
          </div></div>
          <div className="card tilt reveal"><div className="tilt-inner">
            <h3>Smart Scraping</h3>
            <p className="meta">Two‑phase pipeline with adaptive selectors to reduce LLM calls and scale across categories.</p>
          </div></div>
        </div>
      </div>
    </section>
  )
}
