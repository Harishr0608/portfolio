// src/pages/About.jsx
export default function About() {
  const skills = [
    'Python, SQL',
    'ML/NLP, LangChain, DSPy',
    'TensorFlow/Keras, scikit‑learn',
    'AWS Bedrock, Comprehend',
    'Databases: DynamoDB, MySQL',
    'APIs & Apps: FastAPI, Streamlit',
    'Docker, Git'
  ]
  return (
    <section>
      <h2>About</h2>
      <p style={{ color: '#4b5563' }}>
        Machine Learning Engineer experienced in building scalable AI/ML solutions, RAG pipelines, and data engineering workflows. Previously at Giggso, delivered LLM observability and real‑time pipelines.
      </p>
      <h3>Skills</h3>
      <ul>
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
