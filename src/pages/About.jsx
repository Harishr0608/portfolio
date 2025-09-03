// src/pages/About.jsx
const skills = {
  Languages: ['Python','SQL','OOP','DSA'],
  'ML & AI': ['Supervised/Unsupervised','NLP','RAG','Prompt Eng','TensorFlow','Keras','scikit‑learn','XGBoost'],
  'Generative AI': ['LangChain','DSPy','AWS Bedrock','Amazon Comprehend','LangGraph'],
  Data: ['Pandas','NumPy','ETL','EDA','Feature Eng','Feature Selection','Data Modeling','DynamoDB','MySQL'],
  Web: ['FastAPI','Streamlit','Selenium','BeautifulSoup','OpenCV'],
  Viz: ['Matplotlib','Seaborn','Tableau','Power BI','Looker Studio'],
  Dev: ['Git','GitHub','Docker','Heroku','Agile']
}

export default function About(){
  return (
    <section className="section">
      <h2>About</h2>
      <p className="subtitle">
        Blending ML engineering with software craft: build reliable LLM and retrieval systems, ship data pipelines, and surface insights with clean UX. {/* Resume-derived narrative */}
      </p>
      <div className="grid">
        {Object.entries(skills).map(([group, list]) => (
          <div className="card" key={group}>
            <h3>{group}</h3>
            <p className="meta">{list.join(' • ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
