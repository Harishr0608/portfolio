const skills = {
  'Programming Languages': ['Python', 'SQL', 'OOP Concepts', 'Data Structures and Algorithms', 'JavaScript (Basics)'],
  
  'Machine Learning': [
    'Supervised Learning (Regression, Classification)', 
    'Unsupervised Learning (Clustering, PCA)', 
    'Natural Language Processing', 
    'Deep Learning (Basics)',
    'Computer Vision',
    'Image Classification'
  ],
  
  'Generative AI & LLMs': [
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)', 
    'Prompt Engineering', 
    'LangChain', 
    'DSPy', 
    'LangGraph',
    'Chain-of-Thought Prompting',
    'LLM-as-a-Judge'
  ],

  'Cloud Platforms & AI Services': [
    'AWS Bedrock', 
    'Amazon Comprehend', 
    'AWS (General)'
  ],

  'Vector Databases & Search': [
    'ChromaDB', 
    'Vector Embeddings', 
    'OpenAI Embeddings API',
    'Similarity Search', 
    'Hybrid Search'
  ],

  'Data Engineering & Pipelines': [
    'ETL (Extract, Transform, Load)',
    'Data Preprocessing',
    'Feature Engineering', 
    'Feature Selection',
    'Pipeline Automation',
    'Asynchronous Processing'
  ],

  'Data Modeling': ['ER Diagrams', 'Dimensional Modeling', 'Normalization', 'Schema Design'],
  
  'Databases': ['MySQL', 'DynamoDB (NoSQL)'],
  
  'Web Development & APIs': [
    'FastAPI', 
    'Streamlit', 
    'RESTful APIs',
    'Web Applications',
    'Frontend Integration'
  ],

  'MLOps & Deployment': [
    'Docker', 
    'Model Deployment', 
    'Model Monitoring',
    'Production Systems',
    'Heroku'
  ],

  'Data Analysis & Visualization': [
    'Exploratory Data Analysis',
    'Pandas', 
    'NumPy', 
    'Matplotlib', 
    'Seaborn', 
    'Tableau', 
    'Power BI', 
    'Looker Studio',
    'MS Excel', 
    'Power Query'
  ],
  
  'Statistical Methods': [
    'Hypothesis Testing', 
    'Chi-Square', 
    'ANOVA', 
    'Statistical Modeling',
    'A/B Testing', 
    'Z-Test', 'T-Test', 'Covariance', 'Correlation'
  ],
  
  'ML Frameworks & Libraries': [
    'Scikit-Learn', 
    'XGBoost', 
    'TensorFlow', 
    'Keras', 
    'OpenCV'
  ],
  
  'Web Scraping & Automation': [
    'Beautiful Soup', 
    'Selenium', 
    'Web Automation'
  ],

  'Version Control & Collaboration': ['Git', 'GitHub', 'Agile Methodology'],
}



const education = [
  {
    school: 'Great Lakes Institute of Management',
    location: 'Chennai, IN',
    program: 'Post Graduate Program (Data Science and Engineering)',
    dates: '05/2024 – 12/2024',
    details: [
      'Relevant Coursework: Business Case Study, MS Excel, MySQL, Python, EDA, Feature Engineering, Data Visualization (incl. Tableau), Machine Learning, Model Deployment, Feature Selection, Web Scraping, ETL, Gen AI, NLP, Time Series Forecasting'
    ]
  },
  {
    school: 'Vellore Institute of Technology',
    location: 'Vellore, IN',
    program: 'M.Tech (5‑Year Integrated Software Engineering)',
    dates: '05/2023',
    details: []
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    program: '12th (Tamil Nadu State Board)',
    dates: '05/2018',
    details: []
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    program: '10th (Tamil Nadu State Board)',
    dates: '04/2016',
    details: []
  }
]

function Chip({ label }) {
  return <span className="chip">{label}</span>
}

function SkillGroup({ title, items }) { 
  return ( 
    <div className="card glow-card"> 
      <div className="card-head"> 
        <h3>{title}</h3> 
      </div> 
      <div className="chip-wrap"> 
        {items.map((it) => <Chip key={it} label={it} />)} 
      </div> 
    </div> 
  ) 
}

function TimelineItem({ item, last }) {
  return (
    <li className={`tl-item ${last ? 'tl-last' : ''}`}>
      <div className="tl-marker" />
      <div className="tl-card">
        <div className="tl-head">
          <h3 className="tl-school">{item.school}</h3>
          <span className="tl-dates">{item.dates}</span>
        </div>
        <p className="meta">{item.location}</p>
        <p className="tl-program">{item.program}</p>
        {item.details?.length > 0 && (
          <ul className="checklist">
            {item.details.map((d, i) => (
              <li key={i}><span className="check-icon" aria-hidden>✔</span>{d}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function About(){
  const aboutBlurb = `Machine Learning Engineer with production experience in LLM observability, retrieval-augmented generation, and intelligent automation systems. At Giggso, delivered enterprise-grade AI solutions including comprehensive LLM monitoring pipelines on AWS Bedrock, schema-aware RAG for DynamoDB querying, and scalable web scraping automation that reduced manual effort while improving data quality and system reliability.

Built diverse ML applications spanning real-time multi-source chatbots, predictive analytics for retail and finance, computer vision for safety compliance, and natural language processing for content analysis. Expertise includes transformer models, vector databases, async processing architectures, and full-stack AI deployment using modern frameworks like FastAPI, Streamlit, and Docker.

Passionate about bridging the gap between cutting-edge AI research and practical business applications, with a focus on building production-ready systems that combine generative AI capabilities with robust data engineering practices to deliver measurable impact across diverse domains.`
  return (
    <section className="section">
      {/* About hero */}
      <div className="about-hero card gradient-border">
        <div className="about-hero-left">
          <h2>About</h2>
          <p className="subtitle">{aboutBlurb}</p>
          <div className="about-badges">
            <span className="badge">Machine Learning</span>
            <span className="badge">Deep Learning(Basics)</span>
            <span className="badge">Natural Language Processing</span>
            <span className="badge">LLM & RAG Systems</span>
            <span className="badge">Agentic AI</span>
          </div>
        </div>
      </div>
      {/* Split layout: Skills | Education */}
      <div className="split-2">
        {/* Skills */}
        <section>
          <h2>Skills</h2>
          <div className="grid">
            {Object.entries(skills).map(([group, list]) => (
              <SkillGroup key={group} title={group} items={list} />
            ))}
          </div>
        </section>
        {/* Education timeline */}
        <section>
          <h2>Education</h2>
          <ol className="timeline">
            {education.map((ed, idx) => (
              <TimelineItem key={ed.school + idx} item={ed} last={idx === education.length - 1} />
            ))}
          </ol>
        </section>
      </div>
    </section>
  )
}