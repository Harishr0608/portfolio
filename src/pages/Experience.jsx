export default function Experience() {
  return (
    <section className="section experience-section">
      <h2 className="section-title">Experience</h2>
      <article className="experience-card">
        <header className="experience-header">
          <h3 className="role">Machine Learning Engineer — Giggso</h3>
          <p className="meta">Chennai, IN • Dec 2024 – Jul 2025</p>
        </header>

        <div className="experience-content">
          <ul className="experience-list">
            <li>
              <div className="check-icon">✔</div>
              <div className="experience-text">
                <h4>Trinity Product – LLM Observability System</h4>
                <p>
                  Designed and deployed complete LLM observability pipelines on AWS Bedrock to monitor and improve output quality across multiple LLM datasets. 
                  Used both automated evaluation jobs and LLM-as-a-judge to assess model performance on multiple quality dimensions. Integrated Amazon Comprehend 
                  for sentiment analysis to evaluate tone and feedback loops for continuous retraining.
                </p>
                <p>
                  Implemented metrics across multiple categories: 
                  <strong>Firewall</strong> (Toxicity, Jailbreak, Injection, Refusal, Privacy Check), 
                  <strong>Observability</strong> (Sentiment Analysis),
                  <strong>Clarity</strong> (hallucination, faithfulness, bias, completeness, correctness, coherence, helpfulness, refusal, groundedness),
                  <strong>Performance</strong> (BERTScore, BLEU, ROUGE, METEOR, BLEURT, Accuracy, Robustness, F1 Score), 
                  <strong>Relevance</strong> (context precision, recall, relevancy, entities recall).
                </p>
              </div>
            </li>

            <li>
              <div className="check-icon">✔</div>
              <div className="experience-text">
                <h4>Shay Product – Retrieval-Augmented Generation (RAG) with DynamoDB</h4>
                <p>
                  Developed a schema-aware RAG pipeline for intelligent NoSQL querying over DynamoDB using LLMs. Designed embeddings with LangChain from table names,
                  schema, attributes, and sample rows while optimizing cost by avoiding full dataset embeddings. Created a Chain-of-Thought prompting strategy for 
                  accurate <code>scan</code> and <code>query</code> operations with adaptive case-sensitive logic for better precision and performance.
                </p>
              </div>
            </li>

            <li>
              <div className="check-icon">✔</div>
              <div className="experience-text">
                <h4>Shay Product – E-commerce Web Scraping</h4>
                <p>
                  Built a semi-automated scraping system to extract product data with reduced LLM dependency. Used a two-phase approach:
                </p>
                <ol>
                  <li>Extracted product URLs based on user-defined categories and product limits.</li>
                  <li>Analyzed HTML samples to auto-generate XPath/CSS selectors with LLMs and reused them for large-scale scraping across similar pages.</li>
                </ol>
                <p>
                  This improved scalability, reduced unnecessary LLM calls, and enhanced scraping reliability across multiple product categories.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <footer className="experience-footer">
          <p className="meta">
            Stack: Python, LLM Observability, LangChain, DSPy, Bedrock, Comprehend, DynamoDB, FastAPI, Web Scraping, Selenium, Image Classification, Beautiful Soup, Docker, Kubernetes, Streamlit, AWS, Azure
          </p>
        </footer>
      </article>
    </section>
  );
}
