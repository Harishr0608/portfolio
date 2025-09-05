import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <header className="navbar reveal">
        <div className="container navbar-inner">
          <div className="brand">
            <span className="brand-badge">HR</span>
            <span>Harish R</span>
          </div>
          <nav className="nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}
