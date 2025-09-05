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
              <span className="btn-ico" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-4V8z"/>
                </svg>
              </span>
              LinkedIn
            </a>
            <a className="btn outline" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer">
              <span className="btn-ico" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.2-3.37-1.2-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.37 1.12 2.95.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .85-.28 2.79 1.05a9.3 9.3 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.81-4.58 5.06.36.32.69.96.69 1.94v2.88c0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
                </svg>
              </span>
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
          <a className="icon-btn" href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.45V23h-4V8z"/></svg>
          </a>
          <a className="icon-btn" href="https://github.com/Harishr0608" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49v-1.73c-2.78.62-3.37-1.2-3.37-1.2-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.9 1.57 2.37 1.12 2.95.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .85-.28 2.79 1.05a9.3 9.3 0 0 1 5.08 0c1.94-1.33 2.79-1.05 2.79-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.81-4.58 5.06.36.32.69.96.69 1.94v2.88c0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
          </a>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="section certifications">
        <h2>Certifications</h2>
        <div className="grid">
          <a className="btn" href="https://fsp-assessment-certificates.s3-ap-southeast-1.amazonaws.com/HarishR-66976144.pdf" target="_blank" rel="noreferrer">
            Big Data Foundation
          </a>
          <a className="btn" href="https://www.credly.com/badges/83aba520-abc2-49ff-addc-229f3ffcd5cb/linked_in_profile" target="_blank" rel="noreferrer">
            Azure Fundamentals
          </a>
          <a className="btn" href="https://www.credly.com/badges/db2032c9-5a77-470e-bbe1-66d558283b78/linked_in_profile" target="_blank" rel="noreferrer">
            Azure AI Fundamentals
          </a>
        </div>
      </div>
    </section>
  );
}
