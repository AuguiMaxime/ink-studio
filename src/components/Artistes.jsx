import { useReveal } from '../useReveal'

const artists = [
  { name: 'Naïm Kessler', spec: 'Blackwork & géométrie' },
  { name: 'Alba Ferreira', spec: 'Fine line & botanique' },
  { name: 'Ryo Takahashi', spec: 'Irezumi & japonais' },
]

export default function Artistes() {
  const [ref, inView] = useReveal(0.2)

  return (
    <section className="artistes" id="artistes">
      <div className="wrap">
        <p className="eyebrow">L'équipe</p>
        <h2 className="light-h2">Trois mains, trois écritures</h2>

        <div ref={ref} className={`artist-grid ${inView ? 'in-view' : ''}`}>
          {artists.map((a, i) => (
            <article className="artist" key={a.name} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="artist-mark">{a.name.split(' ').map(w => w[0]).join('')}</div>
              <h3>{a.name}</h3>
              <p>{a.spec}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .artistes{ padding: 100px 0; background: var(--ink); color: var(--paper); }
        .light-h2{ color: var(--paper); font-size: clamp(2rem, 4.5vw, 3rem); margin: 4px 0 48px; }
        .artist-grid{ display:grid; gap:32px; grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); }
        .artist{ opacity:0; transform: translateY(16px); transition: opacity 0.5s ease, transform 0.5s ease; }
        .artist-grid.in-view .artist{ opacity:1; transform: translateY(0); }
        .artist-mark{
          width:64px; height:64px; border:2px solid var(--red); color: var(--red);
          display:flex; align-items:center; justify-content:center;
          font-family: var(--font-display); font-size:1.1rem; margin-bottom:18px;
        }
        .artist h3{ font-family: var(--font-body); font-weight:700; text-transform:none; letter-spacing:0; font-size:1.1rem; margin-bottom:6px; color: var(--paper); }
        .artist p{ font-family: var(--font-mono); font-size:0.78rem; color: var(--grey); }
      `}</style>
    </section>
  )
}
