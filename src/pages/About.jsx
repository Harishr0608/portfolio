// src/pages/About.jsx
const skills = {
  'Programming Languages': ['Python', 'SQL', 'OOP Concepts', 'Data Structures and Algorithms'],
  'Machine Learning': [
    'Supervised Learning (Regression, Classification)',
    'Unsupervised Learning (Clustering, PCA)',
    'Natural Language Processing',
    'Deep Learning (Basics)'
  ],
  'Generative AI & LLMs': ['RAG', 'Prompt Engineering', 'LangChain', 'DSPy', 'AWS Bedrock', 'Amazon Comprehend'],
  'Data Modeling': ['ER Diagrams', 'Dimensional Modeling', 'Normalization', 'Schema Design', 'DynamoDB (NoSQL)'],
  'Data Analysis': ['Exploratory Data Analysis', 'Feature Engineering', 'Feature Selection'],
  'Statistical Methods': ['Hypothesis Testing', 'Chi‑Square', 'ANOVA', 'Z‑Test', 'T‑Test', 'Covariance', 'Correlation'],
  'Data Manipulation': ['Pandas', 'NumPy', 'MS Excel', 'Power Query', 'ETL (Extract, Transform, Load)'],
  'Data Visualization': ['Matplotlib', 'Seaborn', 'Tableau', 'Power BI', 'Looker Studio'],
  'Databases': ['MySQL', 'DynamoDB'],
  'Version Control': ['Git', 'GitHub'],
  'Tools & Frameworks': ['Scikit‑Learn', 'SciPy', 'Selenium', 'LangChain', 'DSPy', 'OpenCV', 'TensorFlow', 'Keras', 'FastAPI'],
  'Model Deployment': ['Heroku'],
  'Web Scraping & Automation': ['Beautiful Soup', 'Selenium', 'Image Classification'],
  'Software Development': ['Agile Methodology']
};

const education = [
  {
    school: 'Great Lakes Institute of Management',
    location: 'Chennai, IN',
    credential: 'Post Graduate Program (Data Science and Engineering)',
    period: '05/2024 – 12/2024',
    details:
      'Coursework: Business Case Study, MS Excel, MySQL, Python, EDA, Feature Engineering, Visualization (incl. Tableau), Machine Learning, Model Deployment, Feature Selection, Web Scraping, ETL'
  },
  {
    school: 'Vellore Institute of Technology',
    location: 'Vellore, IN',
    credential: 'M.Tech (5‑Year Integrated Software Engineering); CGPA: 7.57',
    period: '05/2023'
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    credential: '12th (Tamil Nadu State Board); 72.0%',
    period: '05/2018'
  },
  {
    school: 'Orange International Matriculation School',
    location: 'Arani, IN',
    credential: '10th (Tamil Nadu State Board); 88.6%',
    period: ''
  }
];

export default function About() {
  return (
    <section className="section">
      <h2 className="section-title">About</h2>

      <p className="subtitle">
        Machine Learning Engineer with a software engineering foundation, experienced in LLM applications,
        Retrieval‑Augmented Generation on DynamoDB, AWS Bedrock, and observability pipelines, with a focus on
        reliable retrieval, case‑sensitive NoSQL logic, and scalable web automation that turns data into
        measurable business outcomes. {/* summary from resume */}
      </p>

      {/* Two-column responsive layout */}
      <div className="about-layout">
        {/* Skills */}
        <div>
          <h3 className="section-subtitle">Skills</h3>
          <div className="skills-groups">
            {Object.entries(skills).map(([group, list]) => (
              <div className="card skills-card" key={group}>
                <div className="skills-header">
                  <span className="skills-dot" />
                  <h4>{group}</h4>
                </div>
                <div className="chips">
                  {list.map(item => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <aside>
          <h3 className="section-subtitle">Education</h3>
          <ol className="timeline" aria-label="Education timeline">
            {education.map((e) => (
              <li className="timeline-item card" key={e.school + e.credential}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-body">
                  <div className="timeline-top">
                    <h4 className="timeline-title">{e.school}</h4>
                    <span className="timeline-meta">{e.location}</span>
                  </div>
                  <p className="timeline-credential">{e.credential}</p>
                  <p className="timeline-period">{e.period}</p>
                  {e.details && <p className="meta">{e.details}</p>}
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
