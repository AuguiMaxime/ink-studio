import { useReveal } from '../useReveal'

const steps = [
  { title: 'Consultation', desc: 'Échange sur le projet, l\u2019emplacement et la faisabilité. Devis remis sur place.' },
  { title: 'Matériel à usage unique', desc: 'Aiguilles, grips et encres à usage unique, ouverts devant vous.' },
  { title: 'Stérilisation', desc: 'Autoclave certifié pour tout le matériel réutilisable, contrôles réguliers.' },
  { title: 'Suivi cicatrisation', desc: 'Fiche de soins remise et disponibilité pour toute question post-séance.' },
]

export default function Process() {
  const [ref, inView] = useReveal(0.2)

  return (
    <section className="process" id="process">
      <div className="wrap">
        <p className="eyebrow">Ce qu'on ne montre pas assez</p>
        <h2>Hygiène &amp; suivi</h2>

        <div ref={ref} className={`process-grid ${inView ? 'in-view' : ''}`}>
          {steps.map((s, i) => (
            <div className="process-item" key={s.title} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="process-index mono">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process{ padding: 100px 0; }
        .process h2{ font-size: clamp(2rem, 4.5vw, 3rem); margin: 4px 0 48px; }
        .process-grid{ display:grid; gap:2px; background: var(--ink); border:2px solid var(--ink); }
        @media (min-width:720px){ .process-grid{ grid-template-columns: repeat(4,1fr); } }
        .process-item{
          background: var(--paper); padding: 28px 22px;
          opacity:0; transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .process-grid.in-view .process-item{ opacity:1; transform: translateY(0); }
        .process-index{ color: var(--red); font-size:0.9rem; display:block; margin-bottom:14px; }
        .process-item h3{ font-family: var(--font-body); font-weight:700; text-transform:none; font-size:1rem; letter-spacing:0; margin-bottom:8px; }
        .process-item p{ font-family: var(--font-body); text-transform:none; color:#3a3a38; font-size:0.9rem; }
      `}</style>
    </section>
  )
}
