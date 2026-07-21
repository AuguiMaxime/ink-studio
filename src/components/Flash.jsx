import { useReveal } from '../useReveal'

const flashes = [
  {
    num: 'N°01', title: 'Serpent linéaire', style: 'Fine line', price: '90€',
    art: <path d="M30 80 Q60 20 90 60 Q120 100 90 130 Q60 160 90 110" stroke="var(--ink)" fill="none" strokeWidth="2.5" strokeLinecap="round" />
  },
  {
    num: 'N°02', title: 'Vague japonaise', style: 'Irezumi', price: '140€',
    art: <path d="M20 100 Q50 60 80 100 Q110 140 140 100 Q100 90 90 60" stroke="var(--ink)" fill="none" strokeWidth="2.5" strokeLinecap="round" />
  },
  {
    num: 'N°03', title: 'Dague blackwork', style: 'Blackwork', price: '120€',
    art: <path d="M80 20 L80 100 M60 100 L100 100 M80 100 L60 140 M80 100 L100 140" stroke="var(--ink)" fill="none" strokeWidth="3" strokeLinecap="round" />
  },
  {
    num: 'N°04', title: 'Constellation', style: 'Fine line', price: '75€',
    art: <g stroke="var(--ink)" fill="var(--ink)" strokeWidth="1.6"><circle cx="40" cy="50" r="2.5" /><circle cx="80" cy="30" r="2.5" /><circle cx="110" cy="70" r="2.5" /><circle cx="70" cy="100" r="2.5" /><path d="M40 50 L80 30 L110 70 L70 100 L40 50" fill="none" /></g>
  },
  {
    num: 'N°05', title: 'Croissant &amp; ronce', style: 'Blackwork', price: '95€',
    art: <path d="M100 30 A40 40 0 1 0 100 130 A30 30 0 1 1 100 30Z M60 60 Q40 70 50 90 M55 100 Q35 105 45 120" stroke="var(--ink)" fill="var(--ink)" strokeWidth="1.8" />
  },
  {
    num: 'N°06', title: 'Main ouverte', style: 'Fine line', price: '110€',
    art: <path d="M80 130 L80 60 M65 130 L65 70 M95 130 L95 70 M50 120 L50 85 M110 120 L110 85 M50 120 Q80 150 110 120" stroke="var(--ink)" fill="none" strokeWidth="2.4" strokeLinecap="round" />
  },
]

export default function Flash() {
  const [ref, inView] = useReveal(0.1)

  return (
    <section className="flash" id="flash">
      <div className="wrap">
        <p className="eyebrow">Planche du mois</p>
        <h2>Flash disponible</h2>
        <p className="flash-note">Pièces uniques, réalisées une seule fois. Emplacement à discuter en consultation.</p>

        <div ref={ref} className={`flash-grid ${inView ? 'in-view' : ''}`}>
          {flashes.map((f, i) => (
            <article className="flash-card" key={f.num} style={{ transitionDelay: `${i * 70}ms` }}>
              <svg viewBox="0 0 160 160" className="flash-svg">{f.art}</svg>
              <div className="flash-info">
                <span className="flash-num mono">{f.num}</span>
                <h3>{f.title}</h3>
                <div className="flash-meta">
                  <span className="flash-style mono">{f.style}</span>
                  <span className="flash-price mono">{f.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .flash{ padding: 100px 0; }
        .flash h2{ font-size: clamp(2rem, 4.5vw, 3rem); margin: 4px 0 14px; }
        .flash-note{ font-family: var(--font-body); text-transform:none; color:#3a3a38; max-width: 52ch; margin-bottom:44px; }
        .flash-grid{ display:grid; gap:2px; background: var(--ink); border: 2px solid var(--ink); }
        @media (min-width:640px){ .flash-grid{ grid-template-columns: repeat(2,1fr); } }
        @media (min-width:1000px){ .flash-grid{ grid-template-columns: repeat(3,1fr); } }
        .flash-card{
          background: var(--paper); padding: 22px;
          opacity:0; transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .flash-grid.in-view .flash-card{ opacity:1; transform: translateY(0); }
        .flash-svg{ width:100%; height:140px; margin-bottom:14px; }
        .flash-num{ font-size:0.68rem; color: var(--grey); display:block; margin-bottom:6px; }
        .flash-info h3{ font-family: var(--font-body); font-weight:700; text-transform:none; font-size:1.05rem; letter-spacing:0; margin-bottom:10px; }
        .flash-meta{ display:flex; justify-content:space-between; font-size:0.72rem; }
        .flash-style{ color: var(--red); }
        .flash-price{ color: var(--ink); }
      `}</style>
    </section>
  )
}
