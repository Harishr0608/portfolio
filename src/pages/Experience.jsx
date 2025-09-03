// src/pages/Experience.jsx
export default function Experience() {
  const roles = [
    {
      company: 'Giggso',
      title: 'Machine Learning Engineer',
      location: 'Chennai, IN',
      dates: 'Dec 2024 – Jul 2025',
      highlights: [
        'Designed real‑time LLM observability pipelines on AWS Bedrock & Comprehend (LLM‑as‑a‑judge + sentiment & evaluation jobs).',
        'Built schema‑aware RAG on DynamoDB with optimized embeddings and robust retrieval for reliable answers.',
        'Automated large‑scale web scraping pipelines; solved case‑sensitive NoSQL query issues to increase data quality.',
      ],
      skills: [
        'Python', 'LangChain', 'DSPy', 'AWS Bedrock', 'Comprehend',
        'DynamoDB', 'MySQL', 'FastAPI', 'Docker'
      ]
    }
  ];

  return (
    <section style={{ maxWidth: 980, margin: '0 auto', padding: '0 16px' }}>
      <h2 style={{ margin: '24px 0' }}>Experience</h2>

      {roles.map((r) => (
        <article key={r.company} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <header style={{ marginBottom: 8 }}>
            <h3 style={{ margin: 0 }}>{r.title} — {r.company}</h3>
            <p style={{ margin: '4px 0', color: '#6b7280' }}>
              {r.location} • {r.dates}
            </p>
          </header>

          <ul style={{ paddingLeft: 18, margin: '8px 0' }}>
            {r.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>

          <p style={{ marginTop: 8, fontSize: 14, color: '#6b7280' }}>
            Skills: {r.skills.join(', ')}
          </p>
        </article>
      ))}
    </section>
  );
}
