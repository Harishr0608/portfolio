function Project({ title, when, problem, approach, tech, links }){
  return (
    <article className="tilt">
      <div className="card tilt-inner">
        <h3 className="tilt-title">{title}</h3>
        <p className="meta tilt-meta">{when}</p>
        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Approach:</strong> {approach}</p>
        <p className="meta"><strong>Tech:</strong> {tech}</p>
        {links && (
          <p className="meta">
            {links.map(({label, href}) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{marginRight: 12}}>{label}</a>
            ))}
          </p>
        )}
      </div>
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
