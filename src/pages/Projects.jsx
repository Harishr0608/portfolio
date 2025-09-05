function Project({ title, when, problem, approach, tech, links }){
  return (
    <article className="card glow-card project">
      <div className="project-head">
        <h3>{title}</h3>
        <span className="badge badge-soft">{when}</span>
      </div>
      <p className="kicker">Problem</p>
      <p>{problem}</p>
      <p className="kicker">Approach</p>
      <p>{approach}</p>
      <p className="meta"><strong>Tech:</strong> {tech}</p>
      {links && (
        <p className="meta links">
          {links.map(({label, href}) => (
            <a className="link-pill" key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </p>
      )}
    </article>
  )
}
export default function Projects(){
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        <Project
          title="Real‑Time Multi‑Source RAG Chatbot"
          when="07/2025"
          problem="Ingest and query PDFs, DOCX, Excel, HTML, YouTube, and URLs in real time with source‑attributed answers."
          approach="Modular LangGraph agents for ingest/retrieval; OpenAI embeddings in ChromaDB; FastAPI backend; Streamlit UI; Dockerized."
          tech="LangGraph, OpenAI, ChromaDB, FastAPI, Streamlit, Docker"
          links={[{label:'GitHub', href:'https://github.com/Harishr0608/Real-Time-Multi-Source-RAG-Chatbot.git'}]}
        />
        <Project
          title="Loan Approval Prediction"
          when="10/2024"
          problem="Predict approval outcomes to identify high‑risk applicants and reduce defaults."
          approach="Engineered features and evaluated multiple models; achieved ~95.05% accuracy with XGBoost while keeping interpretability."
          tech="scikit‑learn, XGBoost, Pandas, NumPy, Matplotlib, Seaborn"
          links={[{label:'GitHub', href:'https://github.com/Harishr0608/Loan-Approval-Prediction'}]}
        />
        <Project
          title="Real‑Time Face Mask Detection"
          when="11/2023"
          problem="Classify masked vs unmasked faces in camera streams for public‑health monitoring."
          approach="Lightweight CNN with MobileNetV2 and OpenCV pipeline for robust real‑time inference."
          tech="TensorFlow/Keras, OpenCV, CNN (MobileNetV2)"
          links={[{label:'GitHub', href:'https://github.com/Harishr0608/Real-time-Face-Mask-Detection'}]}
        />
      </div>
    </section>
  )
}