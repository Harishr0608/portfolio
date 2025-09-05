export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer reveal">
      <div className="container">
        <div className="footer-inner">
          <span>© {year} Harish R — All rights reserved.</span>
          <nav className="footer-links" aria-label="Footer">
            <a href="mailto:harishr0608@gmail.com">Email</a>
            <a href="https://github.com/Harishr0608" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/harishr0608/" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
