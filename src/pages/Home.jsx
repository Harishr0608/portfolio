// Inline icons reused here too
const GitHub = (props) => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.74-1.34-1.74-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.97 0-1.32.47-2.39 1.25-3.24-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.25 2.95.12 3.26.78.85 1.25 1.92 1.25 3.24 0 4.64-2.81 5.66-5.49 5.97.43.37.81 1.09.81 2.2v3.26c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
  </svg>
)
const LinkedIn = (props) => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.4v1.56h.05c.47-.9 1.61-1.86 3.31-1.86 3.54 0 4.19 2.33 4.19 5.36v6.39zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.13 20.45H3.55V9h3.58v11.45z"/>
  </svg>
)
const Mail = (props) => (
  <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2ZM2 8.1V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.1l-10 6.25Z"/>
  </svg>
)

export default function Home(){
  return (
    <section className="hero">
      <h1>Machine Learning Engineer</h1>
      <p className="subtitle">
        ML engineer with hands‑on experience delivering LLM observability on AWS Bedrock, schema‑aware RAG on DynamoDB, and adaptive web scraping at scale, blending generative AI with robust data engineering for measurable business impact.
      </p>

      {/* Full buttons (hidden on small screens) */}
      <div className="cta">
        <a className="btn hide-mobile" href="mailto:harishr0608@gmail.com" aria-label="Email">
          <Mail style={{marginRight:8}} /> Get in touch
        </a>
        <a className="btn outline hide-mobile" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedIn style={{marginRight:8}} /> LinkedIn
        </a>
        <a className="btn outline hide-mobile" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHub style={{marginRight:8}} /> GitHub
        </a>
      </div>

      {/* Compact icon-only actions for phones */}
      <div className="cta-icons show-mobile" aria-label="Quick actions">
        <a className="icon-btn" href="mailto:harishr0608@gmail.com" aria-label="Email"><Mail /></a>
        <a className="icon-btn" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
        <a className="icon-btn" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
      </div>

      <div className="section">
        <h2>Highlights</h2>
        <div className="grid">
          <div className="card reveal">
            <h3>LLM Observability</h3>
            <p className="meta">Automated quality checks with Bedrock evaluation jobs and Comprehend sentiment to monitor outputs continuously.</p>
          </div>
          <div className="card reveal">
            <h3>Schema‑aware RAG</h3>
            <p className="meta">Optimized embeddings from table schema/attributes and CoT prompting to generate accurate NoSQL queries.</p>
          </div>
          <div className="card reveal">
            <h3>Smart Scraping</h3>
            <p className="meta">Two‑phase pipeline with adaptive selectors to reduce LLM calls and scale across categories.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
