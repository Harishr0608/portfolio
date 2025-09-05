const skills = {
  'Programming Languages': ['Python', 'SQL', 'OOP Concepts', 'Data Structures and Algorithms'],
  'Machine Learning': [
    'Supervised Learning (Regression, Classification)',
    'Unsupervised Learning (Clustering, PCA)',
    'Natural Language Processing',
    'Deep Learning (Basics)'
  ],
  'Generative AI & LLMs': ['Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'LangChain', 'DSPy', 'AWS Bedrock', 'Amazon Comprehend', 'LangGraph'],
  'Data Modeling': ['ER Diagrams', 'Dimensional Modeling', 'Normalization', 'Schema Design', 'DynamoDB (NoSQL)'],
  'Data Analysis': ['Exploratory Data Analysis', 'Feature Engineering', 'Feature Selection'],
  'Statistical Methods': ['Hypothesis Testing', 'Chi-Square', 'ANOVA', 'Z-Test', 'T-Test', 'Covariance', 'Correlation'],
  'Data Manipulation': ['Pandas', 'NumPy', 'MS Excel', 'Power Query', 'ETL (Extract, Transform, Load)'],
  'Data Visualization': ['Matplotlib', 'Seaborn', 'Tableau', 'Power BI', 'Looker Studio'],
  'Databases': ['MySQL', 'DynamoDB'],
  'Version Control Systems': ['Git', 'GitHub'],
  'Tools & Frameworks': ['Scikit-Learn', 'SciPy', 'Selenium', 'LangChain', 'DSPy', 'OpenCV', 'TensorFlow', 'Keras', 'FastAPI'],
  'Model Deployment': ['Heroku'],
  'Web Scraping & Automation': ['Beautiful Soup', 'Selenium', 'Image Classification'],
  'Software Development': ['Agile Methodology'],
}

const education = [
  {
    school: 'Great Lakes Institute of Management',
    location: 'Chennai, IN',
    program: 'Post Graduate Program (Data Science and Engineering)',
    dates: '05/2024 – 12/2024',
    details: [
      'Relevant Coursework: Business Case Study, MS Excel, MySQL, Python, EDA, Feature Engineering, Data Visualization (incl. Tableau), Machine Learning, Model Deployment, Feature Selection, Web Scraping, ETL'
    ]
  },
  {
    school: 'Vellore Institute of Technology',
    location: 'Vellore, IN',
    program: 'M.Tech (5‑Year Integrated Software Engineering);',
    dates: '05/2023',
    details: []
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    program: '12th (Tamil Nadu State Board);',
    dates: '05/2018',
    details: []
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    program: '10th (Tamil Nadu State Board);',
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
  const aboutBlurb = `Machine Learning Engineer with a solid foundation in software engineering and practical experience in LLM applications, RAG, AWS Bedrock, and DynamoDB. Built real-time systems for prompt-response monitoring, case-sensitive NoSQL querying, and web automation with LLM pipelines. Focused on scalable ML/NLP solutions that combine generative AI with analytics to drive data-informed decisions.`
  return (
    <section className="section">
      {/* About hero */}
      <div className="about-hero card gradient-border">
        <div className="about-hero-left">
          <h2>About</h2>
          <p className="subtitle">{aboutBlurb}</p>
          <div className="about-badges">
            <span className="badge">LLM Observability</span>
            <span className="badge">Schema‑aware RAG</span>
            <span className="badge">AWS Bedrock</span>
            <span className="badge">DynamoDB</span>
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