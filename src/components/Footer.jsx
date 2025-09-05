export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="container">
        © {year} Harish R — All rights reserved.
      </div>
    </footer>
  )
}
