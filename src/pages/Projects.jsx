// src/pages/Projects.jsx
const Card = ({ title, desc, tech }) => (
  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
    <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
    <p style={{ margin: '0 0 6px', color: '#4b5563' }}>{desc}</p>
    <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>Tech: {tech}</p>
  </div>
)

export default function Projects() {
  return (
    <section style={{ display: 'grid', gap: 16 }}>
      <h2>Projects</h2>
      <Card
        title="Real‑Time Multi‑Source RAG Chatbot"
        desc="Schema‑aware retrieval with embeddings and observability for reliable answers."
        tech="Python, LangChain/DSPy, DynamoDB, AWS Bedrock/Comprehend"
      />
      <Card
        title="Loan Approval Prediction"
        desc="Classification workflow and feature engineering for approval likelihood."
        tech="Python, scikit‑learn"
      />
      <Card
        title="Real‑Time Face Mask Detection"
        desc="Camera inference pipeline to detect mask usage."
        tech="Python, TensorFlow/Keras, OpenCV"
      />
    </section>
  )
}
