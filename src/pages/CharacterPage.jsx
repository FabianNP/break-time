import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { CHARACTERS, hexToRgb } from '../data/gameData'
// RARITY_COLORS: solo lo usaba el panel de skins, comentado más abajo.

export default function CharacterPage() {
  const { id }      = useParams()
  const navigate    = useNavigate()
  const char        = CHARACTERS.find(c => c.id === id)
  // Skins y tabs de habilidades en pausa hasta definir ese contenido — ver bloques comentados abajo.
  // const [skin, setSkin]     = useState(0)
  // const [tab, setTab]       = useState('lore')

  // scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!char) return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24, paddingTop:80 }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'2.5rem', color:'var(--neon-purple)' }}>ERR_404</div>
      <p style={{ color:'var(--text-dim)' }}>Personaje no encontrado en esta línea temporal.</p>
      <button className="btn btn-outline" onClick={()=>navigate('/')}>← Volver</button>
    </div>
  )

  return (
    <div style={{ minHeight:'100vh', paddingTop:80 }}>

      {/* BG */}
      <div style={{
        position:'fixed', inset:0, zIndex:0, pointerEvents:'none',
        background:`radial-gradient(ellipse at 75% 25%,rgba(${hexToRgb(char.color)},0.1) 0%,transparent 55%), radial-gradient(ellipse at 20% 75%,rgba(${hexToRgb(char.accent)},0.07) 0%,transparent 50%), var(--void)`,
      }}/>

      <div className="container" style={{ position:'relative', zIndex:1, paddingTop:36, paddingBottom:80 }}>

        {/* BACK */}
        <button onClick={()=>navigate(-1)} style={{
          background:'none', border:'none', cursor:'pointer',
          fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--text-dim)',
          letterSpacing:'0.15em', marginBottom:36,
          display:'flex', alignItems:'center', gap:8, transition:'color 0.2s',
        }}
          onMouseEnter={e=>e.currentTarget.style.color='var(--text-primary)'}
          onMouseLeave={e=>e.currentTarget.style.color='var(--text-dim)'}
        >← VOLVER / GUARDIANES</button>

        {/* TWO-COL LAYOUT */}
        <div className="grid-char-page">

          {/* ── LEFT ── */}
          <div>
            {/* PORTRAIT */}
            <div className="px-corner" style={{
              aspectRatio:'1', background:`radial-gradient(ellipse at 50% 80%,rgba(${hexToRgb(char.color)},0.22) 0%,transparent 70%),var(--panel)`,
              border:`1px solid ${char.color}`, display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:130, position:'relative', overflow:'hidden', marginBottom:20,
              boxShadow:`0 0 60px rgba(${hexToRgb(char.color)},0.18)`,
            }}>
              <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize:'24px 24px' }}/>
              {char.sprite ? (
                <img src={char.sprite} alt={char.name} className="anim-float" style={{ height:'82%', maxWidth:'78%', objectFit:'contain', filter:`drop-shadow(0 0 28px ${char.color})`, position:'relative', imageRendering:'pixelated' }}/>
              ) : (
                <div className="anim-float" style={{ fontSize:130, filter:`drop-shadow(0 0 28px ${char.color})`, position:'relative' }}>{char.emoji}</div>
              )}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${char.color},${char.accent})` }}/>
              <div style={{ position:'absolute', bottom:14, left:14, background:'rgba(0,0,0,0.82)', border:`1px solid ${char.color}`, padding:'5px 12px', fontFamily:'var(--font-mono)', fontSize:'0.58rem', color:char.color, letterSpacing:'0.15em' }}>{char.roleIcon} {char.role.toUpperCase()}</div>
              <div style={{ position:'absolute', bottom:14, right:14, fontFamily:'var(--font-mono)', fontSize:'0.58rem', color:'var(--text-dim)' }}>{char.difficulty}</div>
            </div>

            {/* SKINS — en pausa hasta definir el contenido final, ver gameData.js
            <div style={{ background:'var(--panel)', border:'1px solid var(--border)', padding:'22px' }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'0.3em', color:'var(--neon-green)', textTransform:'uppercase', marginBottom:18 }}>// Skins Disponibles</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:7 }}>
                {char.skins.map((s,i)=>(
                  <button key={s.name} onClick={()=>setSkin(i)} style={{
                    display:'flex', alignItems:'center', gap:14,
                    background: skin===i ? `rgba(${hexToRgb(s.color)},0.1)` : 'transparent',
                    border:`1px solid ${skin===i?s.color:'var(--border)'}`,
                    padding:'11px 14px', cursor:'pointer', transition:'all 0.2s', textAlign:'left',
                  }}>
                    <div style={{ width:26, height:26, background:s.color, borderRadius:2, boxShadow:skin===i?`0 0 12px ${s.color}`:'none', flexShrink:0 }}/>
                    <div>
                      <div style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.88rem', color:skin===i?'var(--text-primary)':'var(--text-secondary)' }}>{s.name}</div>
                      <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', color:RARITY_COLORS[s.rarity], letterSpacing:'0.1em' }}>{s.rarity.toUpperCase()}</div>
                    </div>
                    {skin===i && <span style={{ marginLeft:'auto', color:s.color }}>✓</span>}
                  </button>
                ))}
              </div>
            </div>
            */}
          </div>

          {/* ── RIGHT ── */}
          <div>
            <div style={{ marginBottom:28 }}>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', letterSpacing:'0.25em', color:char.color, marginBottom:8 }}>GUARDIÁN · {char.era.toUpperCase()}</div>
              <h1 style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:'clamp(2.4rem,5vw,4rem)', letterSpacing:'0.04em', lineHeight:1, marginBottom:8, textShadow:`0 0 30px rgba(${hexToRgb(char.color)},0.5)` }}>{char.name}</h1>
              <div style={{ fontFamily:'var(--font-title)', fontSize:'1.15rem', color:'var(--text-secondary)', letterSpacing:'0.08em' }}>{char.title}</div>
            </div>

            {/* VIDEO PLACEHOLDER */}
            <div style={{ width:'100%', aspectRatio:'16/9', background:'var(--panel)', border:`1px solid ${char.color}`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:12, marginBottom:28, position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at center,rgba(${hexToRgb(char.color)},0.1) 0%,transparent 65%)` }}/>
              <div style={{ width:56, height:56, borderRadius:'50%', border:`2px solid ${char.color}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, color:char.color, cursor:'pointer', position:'relative', transition:'all 0.3s', background:`rgba(${hexToRgb(char.color)},0.1)` }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 0 28px ${char.color}`}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow='none'}}
              >▶</div>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', color:'var(--text-dim)', position:'relative' }}>// {char.name.toUpperCase()}_SPOTLIGHT.mp4</span>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${char.color},${char.accent})` }}/>
            </div>

            {/* TABS + HABILIDADES — en pausa hasta definir el contenido final, ver gameData.js
            <div style={{ display:'flex', borderBottom:'1px solid var(--border)', marginBottom:24 }}>
              {['lore','habilidades'].map(t=>(
                <button key={t} onClick={()=>setTab(t)} style={{
                  background:'none', border:'none',
                  borderBottom:`2px solid ${tab===t?char.color:'transparent'}`,
                  padding:'11px 22px', cursor:'pointer',
                  fontFamily:'var(--font-display)', fontSize:'0.58rem', fontWeight:700,
                  letterSpacing:'0.2em', textTransform:'uppercase',
                  color:tab===t?char.color:'var(--text-dim)',
                  transition:'all 0.2s', marginBottom:-1,
                }}>{t}</button>
              ))}
            </div>

            {tab==='lore' ? (
              <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', color:'var(--text-secondary)', lineHeight:2 }}>{char.lore}</p>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
                {char.abilities.map((ab,i)=>(
                  <div key={ab} style={{ display:'flex', alignItems:'center', gap:16, background:'var(--panel)', border:'1px solid var(--border)', padding:'15px 18px', position:'relative' }}>
                    <div style={{ position:'absolute', left:0, top:0, bottom:0, width:2, background:char.color }}/>
                    <div style={{ width:30, height:30, background:`rgba(${hexToRgb(char.color)},0.18)`, border:`1px solid ${char.color}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-display)', fontSize:'0.65rem', fontWeight:900, color:char.color, flexShrink:0 }}>{i+1}</div>
                    <span style={{ fontFamily:'var(--font-body)', fontWeight:600, fontSize:'0.95rem' }}>{ab}</span>
                  </div>
                ))}
              </div>
            )}
            */}
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', color:'var(--text-secondary)', lineHeight:2 }}>{char.lore}</p>
          </div>
        </div>

        {/* OTHER CHARS */}
        <div style={{ marginTop:72 }}>
          <div style={{ fontFamily:'var(--font-display)', fontSize:'0.55rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:20 }}>// Otros Guardianes</div>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            {CHARACTERS.filter(c=>c.id!==char.id).map(c=>(
              <button key={c.id} onClick={()=>navigate(`/character/${c.id}`)} style={{
                display:'flex', alignItems:'center', gap:12,
                background:'var(--panel)', border:'1px solid var(--border)',
                padding:'13px 18px', cursor:'pointer', transition:'all 0.2s', color:'var(--text-primary)',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=c.color;e.currentTarget.style.boxShadow=`0 0 18px rgba(${hexToRgb(c.color)},0.18)`}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.boxShadow='none'}}
              >
                <span style={{ fontSize:22 }}>{c.emoji}</span>
                <div style={{ textAlign:'left' }}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.08em' }}>{c.name}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.52rem', color:c.color, letterSpacing:'0.1em' }}>{c.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
