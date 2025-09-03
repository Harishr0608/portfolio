// src/App.jsx
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Experience from './pages/Experience.jsx' // NEW

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.5 }}>
      <header style={{ display: 'flex', gap: 16, padding: '12px 16px', borderBottom: '1px solid #e5e7eb' }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link> {/* NEW */}
        <Link to="/contact">Contact</Link>
      </header>

      <main style={{ maxWidth: 980, margin: '32px auto', padding: '0 16px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} /> {/* NEW */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
