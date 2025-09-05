export default function Experience(){
  return (
    <section className="section">
      <h2>Experience</h2>
      <article className="card glow-card">
        <h3>Machine Learning Engineer — Giggso</h3>
        <p className="meta">Chennai, IN • Dec 2024 – Jul 2025</p>
        <ul className="checklist">
          <li>
            <span className="check-icon" aria-hidden>✔</span>
            <strong>Trinity Product – LLM Observability System:</strong> 
            Designed and deployed complete LLM observability pipelines on AWS Bedrock to monitor and improve output quality across multiple LLM datasets.  
            Leveraged both automated evaluation jobs and LLM-as-a-judge modes to assess model responses on key quality dimensions.  
            Integrated Amazon Comprehend sentiment analysis to detect emotional tone and feedback sentiment, enabling fine-grained quality checks for hallucination, bias, groundedness, clarity, and faithfulness.  
            Implemented metrics across multiple categories including:
            <em>Firewall</em> (Toxicity, Jailbreak, Injection, Refusal, Privacy Check), 
            <em>Observability</em> (Sentiment Analysis), 
            <em>Clarity</em> (hallucination, faithfulness, bias, completeness, correctness, coherence, helpfulness, professional tone, refusal, groundedness),  
            <em>Performance</em> (BERTScore, BLEU, ROUGE, METEOR, BLEURT, GLEU, Accuracy, Robustness, F1 Score), and  
            <em>Relevance</em> (context precision, recall, relevancy, entities recall).  
            This provided a detailed real-time view into LLM behavior for continuous improvement and retraining loops.
          </li>

          <li>
            <span className="check-icon" aria-hidden>✔</span>
            <strong>Shay Product – Retrieval-Augmented Generation (RAG) with DynamoDB:</strong>  
            Developed a schema-aware RAG pipeline to enable intelligent NoSQL querying over DynamoDB using LLMs.  
            Designed embeddings using LangChain from table names, schema, attributes, and representative sample rows, carefully avoiding full dataset embedding to save compute and storage costs.  
            Constructed a Chain-of-Thought (CoT) prompting strategy that guided LLMs to generate accurate DynamoDB <code>scan</code> and <code>query</code> operations dynamically.  
            Engineered adaptive, case-sensitive logic to intelligently switch between scan and query modes based on access patterns, filter conditions, and schema constraints, improving both efficiency and query precision.
          </li>

          <li>
            <span className="check-icon" aria-hidden>✔</span>
            <strong>Shay Product – E-commerce Web Scraping:</strong>  
            Built a semi-automated web scraping system for e-commerce product data that significantly reduced reliance on repeated LLM calls.  
            Implemented a two-phase scraping pipeline:
            <ol>
              <li>Extracted product URLs based on user-defined categories and product limits.</li>
              <li>Analyzed the HTML source of random sample pages to automatically generate XPath and CSS selectors using LLMs, then reused these selectors to scrape product details across similar pages at scale.</li>
            </ol>
            This adaptive selector generation approach minimized unnecessary LLM invocations, improved reliability, and allowed the system to scale seamlessly across multiple product categories.
          </li>
        </ul>
        <p className="meta">
          Stack: Python, LLM Observability, LangChain, DSPy, Bedrock, Comprehend, DynamoDB, FastAPI, Web Scraping, Selenium, Image Classification, Beautiful Soup, Docker, Kubernetes, Streamlit
        </p>
      </article>
    </section>
  )
}
