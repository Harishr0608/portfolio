import { useState } from 'react';
import profileImage from '../assets/profile.jpg'; // add your image path here

export default function Home() {
  const [fabOpen, setFabOpen] = useState(false);

  return (
    <section className="hero container">
      <div className="hero-content">
        {/* Image on left */}
        <div className="hero-image">
          <img src={profileImage} alt="Harish R" />
        </div>

        {/* Info on right */}
        <div className="hero-info">
          <h1 className="title-3d">Harish R</h1>
          <h2 className="role">AI/ML Engineer</h2>
          <p className="subtitle">
            ML engineer with hands‑on experience delivering LLM observability on AWS Bedrock,
            schema‑aware RAG on DynamoDB, and adaptive web scraping at scale, blending generative AI
            with robust data engineering for measurable business impact.
          </p>

          {/* Desktop CTA buttons */}
          <div className="cta desktop-only">
            <a className="btn" href="mailto:harishr0608@gmail.com">
              <span className="btn-ico" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16Z"/>
                </svg>
              </span>
              Get in touch
            </a>
            <a className="btn outline" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn outline" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Floating Action Button */}
      <div className={`fab mobile-only ${fabOpen ? 'open' : ''}`}>
        <button className="fab-btn" aria-label="Open quick actions" onClick={() => setFabOpen(v => !v)}>
          <span className="fab-dot" />
        </button>
        <div className="fab-panel" role="menu">
          <a className="icon-btn" href="tel:+916379918090" aria-label="Call">📞</a>
          <a className="icon-btn" href="mailto:harishr0608@gmail.com" aria-label="Email">✉️</a>
          <a className="icon-btn" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
          <a className="icon-btn" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        </div>
      </div>

      <div className="section">
        <h2>Highlights</h2>
        <div className="grid">
          <div className="card feature-card">
            <div className="feature-head"><span className="spark" aria-hidden></span><h3>LLM Observability</h3></div>
            <p className="meta">Automated quality checks with Bedrock evaluation jobs and Comprehend sentiment to monitor outputs continuously.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-head"><span className="spark" aria-hidden></span><h3>Schema‑aware RAG</h3></div>
            <p className="meta">Optimized embeddings from table schema/attributes and CoT prompting to generate accurate NoSQL queries.</p>
          </div>
          <div className="card feature-card">
            <div className="feature-head"><span className="spark" aria-hidden></span><h3>Smart Scraping</h3></div>
            <p className="meta">Two‑phase pipeline with adaptive selectors to reduce LLM calls and scale across categories.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
