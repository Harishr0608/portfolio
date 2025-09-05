import { useEffect } from 'react'
import { NavLink, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function ScrollToTop(){
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  // Mobile nav toggle without changing flow
  function MobileNav(){
    const checkboxId = 'nav-toggle'
    return (
      <>
        <input id={checkboxId} type="checkbox" className="nav-toggle" aria-label="Toggle navigation" />
        <label htmlFor={checkboxId} className="hamburger" aria-hidden>
          <span></span><span></span><span></span>
        </label>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </>
    )
  }

  return (
    <div className="app-shell">
      <header className="navbar" role="banner">
        <div className="container navbar-inner">
          <div className="brand" aria-label="Harish R Home">
            <span className="brand-badge">HR</span>
            <span className="brand-text">Harish R</span>
          </div>
          <MobileNav />
        </div>
      </header>
      <main>
        <ScrollToTop />
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