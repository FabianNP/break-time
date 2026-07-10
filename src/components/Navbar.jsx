import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Inicio',       href: '/'           },
  { label: 'Lore',         href: '/#lore'      },
  { label: 'Personajes',   href: '/#characters' },
  // { label: 'Descargar',    href: '/#download'  }, // en pausa: todavía no está en Play Store
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.35s',
      background: scrolled ? 'rgba(3,2,10,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(139,43,226,0.25)' : 'none',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height: 72 }}>

        {/* ── LOGO ── */}
        <Link to="/" style={{ display:'flex', alignItems:'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36,
            background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-blue))',
            clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize: 16,
          }}>⚡</div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: '1.05rem', letterSpacing: '0.08em',
            background: 'linear-gradient(90deg, var(--glow-purple), var(--glow-blue))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            BREAK<span style={{ WebkitTextFillColor:'var(--neon-green)' }}> TIME</span>
          </span>
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <ul style={{ display:'flex', gap: 36, listStyle:'none', alignItems:'center' }} className="hide-mobile">
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} style={{
                fontFamily:'var(--font-display)', fontSize:'0.6rem', fontWeight:600,
                letterSpacing:'0.2em', textTransform:'uppercase',
                color:'var(--text-secondary)', transition:'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--neon-green)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >{l.label}</a>
            </li>
          ))}
          {/* Botón de descarga en pausa: todavía no está en Play Store
          <li>
            <a href="/#download" className="btn btn-primary" style={{ fontSize:'0.58rem', padding:'9px 18px' }}>
              ⬇ Descargar
            </a>
          </li>
          */}
        </ul>

        {/* ── HAMBURGER ── */}
        <button onClick={() => setMenuOpen(v => !v)} style={{
          display:'none', background:'none', border:'none', cursor:'pointer',
          flexDirection:'column', gap: 5, padding: 8,
        }} className="show-mobile hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block', width: 24, height: 2,
              background:'var(--neon-purple)', transition:'all 0.3s',
              transform: menuOpen && i===0 ? 'rotate(45deg) translate(5px,5px)'
                       : menuOpen && i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
              opacity: menuOpen && i===1 ? 0 : 1,
            }}/>
          ))}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div style={{
          background:'rgba(3,2,10,0.98)', borderTop:'1px solid var(--border)', padding:'20px 24px',
        }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display:'block', fontFamily:'var(--font-display)', fontSize:'0.75rem',
              letterSpacing:'0.2em', textTransform:'uppercase',
              color:'var(--text-secondary)', padding:'14px 0',
              borderBottom:'1px solid var(--border)',
            }}>{l.label}</a>
          ))}
        </div>
      )}

    </nav>
  )
}
