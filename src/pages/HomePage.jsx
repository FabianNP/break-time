import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { LORE, CHARACTERS, hexToRgb } from '../data/gameData'

/* ═══════════════════════════════════════════════════════ HERO */
function Hero() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 90)
    return () => clearInterval(t)
  }, [])

  const GLITCH = '!@#$%^&*<>?|{}[]'
  const BASE   = 'BREAK TIME'
  const title  = tick % 55 < 3
    ? BASE.split('').map(c => Math.random() > 0.65 ? GLITCH[Math.floor(Math.random()*GLITCH.length)] : c).join('')
    : BASE

  return (
    <section style={{ minHeight:'100vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden', paddingTop:80 }}>

      {/* BG GRID */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)',
        backgroundSize:'64px 64px',
      }}/>

      {/* GLOW ORBS */}
      <div className="anim-float" style={{ position:'absolute', top:'15%', right:'8%', width:420, height:420, borderRadius:'50%', background:'radial-gradient(circle,rgba(139,43,226,0.18) 0%,transparent 70%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'15%', left:'4%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(34,211,160,0.12) 0%,transparent 70%)', animation:'float 7s ease-in-out infinite reverse', pointerEvents:'none' }}/>

      {/* SCAN LINE */}
      <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
        <div style={{ position:'absolute', left:0, right:0, height:2, background:'linear-gradient(90deg,transparent,rgba(14,165,233,0.5),transparent)', animation:'scan 5s linear infinite' }}/>
      </div>

      <div className="container" style={{ position:'relative', zIndex:1, width:'100%' }}>
        <div style={{ maxWidth:680 }}>

          {/* BADGE */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(34,211,160,0.08)', border:'1px solid rgba(34,211,160,0.28)',
            padding:'6px 16px', fontFamily:'var(--font-mono)', fontSize:'0.65rem',
            color:'var(--neon-green)', letterSpacing:'0.2em', marginBottom:28,
          }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--neon-green)', display:'inline-block', animation:'pulse-glow 2s infinite' }}/>
            DISPONIBLE EN ANDROID · PIXEL ART 2D
          </div>

          {/* TITLE */}
          <h1 className="anim-flicker" style={{
            fontFamily:'var(--font-display)', fontWeight:900,
            fontSize:'clamp(3rem,9vw,6.5rem)', lineHeight:1,
            letterSpacing:'0.04em', marginBottom:12,
            background:'linear-gradient(135deg,var(--glow-purple),var(--glow-blue),var(--neon-green))',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          }}>{title}</h1>

          <p style={{ fontFamily:'var(--font-title)', fontSize:'clamp(0.85rem,2vw,1.15rem)', color:'var(--accent-gold)', letterSpacing:'0.3em', textTransform:'uppercase', marginBottom:28 }}>
            El tiempo se rompió. Tú no.
          </p>

          <p style={{ color:'var(--text-secondary)', fontFamily:'var(--font-body)', fontSize:'1.05rem', lineHeight:1.85, maxWidth:520, marginBottom:40 }}>
            Una ruptura temporal fusionó eras en una sola realidad fragmentada.
            Pistoleros cuánticos, hackers místicas y entidades cósmicas se enfrentan
            en un mundo pixel donde pasado, presente y futuro colisionan.
          </p>

          <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            {/* <a href="#download" className="btn btn-primary">⬇ Descargar Gratis</a> en pausa: todavía no está en Play Store */}
            <a href="#lore" className="btn btn-primary">▶ Conocer el Lore</a>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            {[[`${CHARACTERS.length}`,'Personajes únicos'],['∞','Líneas temporales'],['2D','Pixel art']].map(([v,l])=>(
              <div key={l}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:'1.9rem', fontWeight:900, color:'var(--neon-purple)', textShadow:'0 0 24px rgba(139,43,226,0.6)' }}>{v}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', color:'var(--text-dim)', letterSpacing:'0.15em', textTransform:'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* VIDEO PLACEHOLDER */}
        <div className="px-corner hide-mobile" style={{
          position:'absolute', right:0, top:'50%', transform:'translateY(-50%)',
          width:'44%', aspectRatio:'16/9',
          background:'var(--panel)', border:'1px solid var(--border)',
          display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:14,
          overflow:'hidden',
        }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 40% 60%,rgba(139,43,226,0.18) 0%,transparent 65%)' }}/>
          <div style={{ width:70, height:70, borderRadius:'50%', border:'2px solid var(--neon-purple)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:28, color:'var(--neon-purple)', cursor:'pointer', position:'relative', transition:'all 0.3s', background:'rgba(139,43,226,0.1)' }}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 0 30px var(--neon-purple)';e.currentTarget.style.background='rgba(139,43,226,0.2)'}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.background='rgba(139,43,226,0.1)'}}
          >▶</div>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--text-dim)', letterSpacing:'0.1em', position:'relative' }}>// GAMEPLAY_TRAILER.mp4</span>
          <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--neon-purple),var(--neon-blue),var(--neon-green))' }}/>
        </div>
      </div>

      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:1, background:'linear-gradient(90deg,transparent,var(--neon-purple),var(--neon-blue),transparent)' }}/>
    </section>
  )
}

/* ═══════════════════════════════════════════════════ FEATURE STRIP */
function FeatureStrip() {
  const items = [
    { icon:'⚔️', label:'Combate Temporal',  desc:'Batallas donde el tiempo es tu arma principal' },
    { icon:'🌀', label:'Anomalías',          desc:'Grietas vivas que distorsionan la realidad' },
    { icon:'🗺️', label:'Mundos Fusionados', desc:'Oeste cósmico con pixel art artesanal único' },
    { icon:'🎮', label:'Pixel Art 2D',       desc:'Arte fotograma a fotograma con alma propia' },
  ]
  return (
    <div style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', background:'var(--deep)', padding:'48px 0', overflow:'hidden' }}>
      <div className="container">
        <div className="grid-features">
          {items.map((item,i)=>(
            <div key={i} style={{ padding:'28px 22px', textAlign:'center', background:'var(--deep)' }}>
              <div style={{ fontSize:30, marginBottom:12 }}>{item.icon}</div>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--neon-blue)', marginBottom:8 }}>{item.label}</div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--text-dim)', lineHeight:1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════ LORE */
function LoreSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="section" id="lore" style={{ background:'var(--void)' }}>
      <div className="container">

        <div className="sec-divider">
          <div className="sec-divider-line" style={{ background:'linear-gradient(90deg,transparent,var(--neon-purple))' }}/>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.8rem)', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--neon-purple)', whiteSpace:'nowrap' }}>
            // {LORE.title}
          </h2>
          <div className="sec-divider-line" style={{ background:'linear-gradient(90deg,var(--neon-purple),transparent)' }}/>
        </div>

        <p style={{ textAlign:'center', fontFamily:'var(--font-title)', fontSize:'clamp(1rem,2.5vw,1.5rem)', color:'var(--accent-gold)', letterSpacing:'0.2em', marginBottom:60 }}>
          {LORE.subtitle}
        </p>

        <div className="grid-lore">
          {/* TABS */}
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            {LORE.chapters.map((ch,i)=>(
              <button key={ch.id} onClick={()=>setActive(i)} style={{
                background: active===i ? 'rgba(139,43,226,0.14)' : 'transparent',
                border:`1px solid ${active===i?'var(--neon-purple)':'var(--border)'}`,
                padding:'18px 20px', cursor:'pointer', textAlign:'left',
                transition:'all 0.2s', display:'flex', alignItems:'center', gap:14,
              }}>
                <span style={{ fontSize:22 }}>{ch.icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:active===i?'var(--neon-purple)':'var(--text-dim)', marginBottom:4 }}>Cap. {ch.id}</div>
                  <div style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.95rem', color:active===i?'var(--text-primary)':'var(--text-secondary)' }}>{ch.title}</div>
                </div>
                {active===i && <span style={{ marginLeft:'auto', color:'var(--neon-purple)', fontSize:'1.1rem' }}>›</span>}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="px-corner lore-content" style={{ background:'var(--panel)', border:'1px solid var(--border)', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--neon-purple),var(--neon-blue))' }}/>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.3em', color:'var(--neon-blue)', marginBottom:14 }}>
              ARCHIVO_{String(LORE.chapters[active].id).padStart(3,'0')}.LOG
            </div>
            <h3 style={{ fontFamily:'var(--font-title)', fontSize:'1.7rem', color:'var(--glow-purple)', marginBottom:22 }}>
              {LORE.chapters[active].title}
            </h3>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.02rem', color:'var(--text-secondary)', lineHeight:1.95 }}>
              {LORE.chapters[active].text}
            </p>
            <div style={{ position:'absolute', bottom:14, right:18, fontFamily:'var(--font-mono)', fontSize:'0.58rem', color:'var(--text-dim)' }}>
              CLASSIFIED · NEXARION_ARCHIVES
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════ CHARACTERS */
function CharactersSection() {
  const navigate = useNavigate()
  return (
    <section className="section" id="characters" style={{ background:'var(--deep)', borderTop:'1px solid var(--border)' }}>
      <div className="container">
        <div className="sec-divider">
          <div className="sec-divider-line" style={{ background:'linear-gradient(90deg,transparent,var(--neon-blue))' }}/>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(1.1rem,2.5vw,1.8rem)', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--neon-blue)', whiteSpace:'nowrap' }}>
            // Guardianes
          </h2>
          <div className="sec-divider-line" style={{ background:'linear-gradient(90deg,var(--neon-blue),transparent)' }}/>
        </div>

        <p style={{ textAlign:'center', fontFamily:'var(--font-body)', fontSize:'1.05rem', color:'var(--text-secondary)', maxWidth:520, margin:'0 auto 60px', lineHeight:1.8 }}>
          Diez guardianes. Historias separadas que se cruzan a través de las mismas grietas. Haz clic para conocer su historia.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:22 }}>
          {CHARACTERS.map(char => <CharCard key={char.id} char={char} onClick={()=>navigate(`/character/${char.id}`)}/>)}
        </div>
      </div>
    </section>
  )
}

function CharCard({ char, onClick }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        background: hov ? `linear-gradient(160deg,rgba(${hexToRgb(char.color)},0.1),var(--panel))` : 'var(--panel)',
        border:`1px solid ${hov?char.color:'var(--border)'}`,
        cursor:'pointer', transition:'all 0.3s',
        transform: hov?'translateY(-6px)':'translateY(0)',
        boxShadow: hov?`0 20px 40px rgba(${hexToRgb(char.color)},0.18)`:'none',
        position:'relative', overflow:'hidden',
      }}
    >
      <div style={{ height:3, background:`linear-gradient(90deg,${char.color},${char.accent})`, opacity:hov?1:0.45, transition:'opacity 0.3s' }}/>

      {/* PORTRAIT */}
      <div style={{
        height:196,
        background:`radial-gradient(ellipse at 50% 80%,rgba(${hexToRgb(char.color)},0.18) 0%,transparent 70%),var(--surface)`,
        display:'flex', alignItems:'center', justifyContent:'center',
        position:'relative', overflow:'hidden', borderBottom:'1px solid var(--border)',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize:'20px 20px' }}/>
        {char.sprite ? (
          <img src={char.sprite} alt={char.name} style={{ height:'85%', maxWidth:'80%', objectFit:'contain', animation:hov?'float 3s ease-in-out infinite':'none', filter:`drop-shadow(0 0 18px ${char.color})`, position:'relative', imageRendering:'pixelated' }}/>
        ) : (
          <div style={{ fontSize:70, animation:hov?'float 3s ease-in-out infinite':'none', filter:`drop-shadow(0 0 18px ${char.color})`, position:'relative' }}>{char.emoji}</div>
        )}
        <div style={{ position:'absolute', top:10, left:10, background:'rgba(0,0,0,0.75)', border:`1px solid ${char.color}`, padding:'3px 9px', fontFamily:'var(--font-mono)', fontSize:'0.5rem', color:char.color, letterSpacing:'0.1em' }}>{char.era}</div>
        <div style={{ position:'absolute', top:10, right:10, background:'rgba(0,0,0,0.75)', border:'1px solid var(--border)', padding:'3px 9px', fontFamily:'var(--font-mono)', fontSize:'0.5rem', color:'var(--text-secondary)', letterSpacing:'0.1em' }}>{char.roleIcon} {char.role}</div>
      </div>

      <div style={{ padding:'18px 18px 22px' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.05rem', letterSpacing:'0.07em', marginBottom:4 }}>{char.name}</h3>
        <div style={{ fontFamily:'var(--font-title)', fontSize:'0.78rem', color:char.color, marginBottom:11, letterSpacing:'0.04em' }}>{char.title}</div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.83rem', color:'var(--text-dim)', lineHeight:1.6, marginBottom:14 }}>{char.description}</p>

        {/* SKINS — en pausa hasta definir el contenido final, ver gameData.js
        <div style={{ display:'flex', gap:5, marginBottom:14, alignItems:'center' }}>
          {char.skins.map(s=>(
            <div key={s.name} title={`${s.name} · ${s.rarity}`} style={{ width:18, height:18, borderRadius:2, background:s.color, border:'1px solid rgba(255,255,255,0.1)', cursor:'pointer', transition:'transform 0.2s', opacity:0.82 }}
              onMouseEnter={e=>{e.target.style.transform='scale(1.35)';e.target.style.opacity='1'}}
              onMouseLeave={e=>{e.target.style.transform='scale(1)';e.target.style.opacity='0.82'}}
            />
          ))}
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', color:'var(--text-dim)', marginLeft:4 }}>{char.skins.length} skins</span>
        </div>
        */}

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', color:'var(--text-dim)' }}>Dif: {char.difficulty}</span>
          <span style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', color:char.color, letterSpacing:'0.15em' }}>Ver perfil ›</span>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════ DOWNLOAD */
// Sección de descarga en pausa: el juego todavía no está publicado en Play Store.
// La página se publica igual para que la gente se integre con la historia primero.
/*
function DownloadSection() {
  return (
    <section className="section" id="download" style={{ background:'var(--void)', borderTop:'1px solid var(--border)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:800, height:350, background:'radial-gradient(ellipse,rgba(139,43,226,0.1) 0%,rgba(14,165,233,0.06) 40%,transparent 70%)', pointerEvents:'none' }}/>

      <div className="container" style={{ position:'relative', zIndex:1, textAlign:'center' }}>
        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', letterSpacing:'0.3em', color:'var(--neon-green)', marginBottom:18 }}>{'>'} DESCARGA_DISPONIBLE.APK</div>

        <h2 style={{
          fontFamily:'var(--font-display)', fontWeight:900,
          fontSize:'clamp(2rem,6vw,3.8rem)', letterSpacing:'0.04em',
          background:'linear-gradient(135deg,var(--glow-purple),var(--glow-blue))',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:16,
        }}>Únete a la Ruptura</h2>

        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.05rem', color:'var(--text-secondary)', maxWidth:440, margin:'0 auto 44px', lineHeight:1.85 }}>
          Gratuito. Sin pay-to-win. Solo tú, tus reflejos y un universo fracturado esperando ser restaurado.
        </p>

        <a
          href="https://play.google.com/store"
          target="_blank" rel="noopener noreferrer"
          style={{
            display:'inline-flex', alignItems:'center', gap:18,
            background:'linear-gradient(135deg,rgba(139,43,226,0.18),rgba(14,165,233,0.18))',
            border:'1px solid var(--neon-purple)', padding:'20px 44px',
            color:'var(--text-primary)', transition:'all 0.3s', minWidth:280,
          }}
          onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 0 40px rgba(139,43,226,0.4),0 0 80px rgba(139,43,226,0.15)';e.currentTarget.style.transform='translateY(-3px)'}}
          onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)'}}
        >
          <div style={{ fontSize:36 }}>▶</div>
          <div style={{ textAlign:'left' }}>
            <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', color:'var(--text-dim)', letterSpacing:'0.15em', marginBottom:2 }}>DISPONIBLE EN</div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.05rem', letterSpacing:'0.07em' }}>Google Play</div>
          </div>
        </a>

        <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:'var(--text-dim)', letterSpacing:'0.1em', marginTop:16 }}>
          Android 6.0+ · Gratis · &lt; 150 MB
        </div>

        <div style={{ display:'flex', gap:28, justifyContent:'center', marginTop:52, flexWrap:'wrap' }}>
          {[['🔒','Sin anuncios invasivos'],['⚡','Updates constantes'],['🎮','Multijugador próximo']].map(([ic,tx])=>(
            <div key={tx} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'var(--font-body)', fontSize:'0.85rem', color:'var(--text-dim)' }}>
              <span>{ic}</span><span>{tx}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
*/

/* ══════════════════════════════════════════════════ HOME PAGE */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <LoreSection />
      <CharactersSection />
      {/* <DownloadSection /> en pausa: todavía no está en Play Store */}
    </>
  )
}
