import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

function enableReveal(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) return
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-visible')
        io.unobserve(e.target)
      }
    }),
    { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
  )
  document.querySelectorAll('.reveal').forEach(el => io.observe(el))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)

requestAnimationFrame(enableReveal)
