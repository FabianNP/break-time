import { Link } from 'react-router-dom'
import { CHARACTERS } from '../data/gameData'

export default function Footer() {
  return (
    <footer style={{
      background:'var(--void)', borderTop:'1px solid var(--border)',
      padding:'64px 0 28px', position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', bottom:-80, left:'50%', transform:'translateX(-50%)',
        width:600, height:200,
        background:'radial-gradient(ellipse,rgba(139,43,226,0.12) 0%,transparent 70%)',
        pointerEvents:'none',
      }}/>

      <div className="container">
        <div className="grid-footer">

          {/* BRAND */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{
                width:30, height:30,
                background:'linear-gradient(135deg,var(--neon-purple),var(--neon-blue))',
                clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:13,
              }}>⚡</div>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'0.95rem', letterSpacing:'0.08em', color:'var(--glow-purple)' }}>
                BREAK TIME
              </span>
            </div>
            <p style={{ color:'var(--text-dim)', fontFamily:'var(--font-body)', fontSize:'0.9rem', lineHeight:1.8, maxWidth:280 }}>
              Pixel art 2D multijugador donde el tiempo se rompió y tú decides cómo termina. Disponible en Android.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:20 }}>
              {['𝕏','📱','💬'].map((ic,i) => (
                <button key={i} style={{
                  width:34, height:34, background:'var(--panel)', border:'1px solid var(--border)',
                  color:'var(--text-secondary)', cursor:'pointer', fontSize:'0.85rem',
                  display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--neon-purple)';e.currentTarget.style.color='var(--neon-purple)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--text-secondary)'}}
                >{ic}</button>
              ))}
            </div>
          </div>

          {/* NAV */}
          <div>
            <h4 style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--neon-blue)', marginBottom:20 }}>
              Explorar
            </h4>
            {[{l:'Inicio',href:'/'},{l:'Lore',href:'/#lore'},{l:'Personajes',href:'/#characters'},{l:'Descargar',href:'/#download'}].map(item=>(
              <a key={item.l} href={item.href} style={{ display:'block', color:'var(--text-dim)', fontFamily:'var(--font-body)', fontSize:'0.9rem', marginBottom:11, transition:'color 0.2s' }}
                onMouseEnter={e=>e.target.style.color='var(--text-primary)'}
                onMouseLeave={e=>e.target.style.color='var(--text-dim)'}
              >{item.l}</a>
            ))}
          </div>

          {/* CHARS */}
          <div>
            <h4 style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--neon-green)', marginBottom:20 }}>
              Personajes
            </h4>
            {CHARACTERS.map(c=>(
              <Link key={c.id} to={`/character/${c.id}`} style={{ display:'block', color:'var(--text-dim)', fontFamily:'var(--font-body)', fontSize:'0.9rem', marginBottom:11, transition:'color 0.2s' }}
                onMouseEnter={e=>e.target.style.color='var(--text-primary)'}
                onMouseLeave={e=>e.target.style.color='var(--text-dim)'}
              >{c.name}</Link>
            ))}
          </div>
        </div>

        <div style={{ height:1, background:'linear-gradient(90deg,transparent,var(--border),var(--neon-purple),var(--border),transparent)', marginBottom:24 }}/>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ color:'var(--text-dim)', fontFamily:'var(--font-mono)', fontSize:'0.7rem' }}>
            © 2025 Break Time Studio · Todos los derechos reservados
          </p>
          <p style={{ color:'var(--text-dim)', fontFamily:'var(--font-mono)', fontSize:'0.7rem' }}>
            <span style={{color:'var(--neon-purple)'}}>// </span>La ruptura fue inevitable. Tú no.
          </p>
        </div>
      </div>

    </footer>
  )
}
