export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Studio de tatouage — Toulouse</p>
          <h1>Un seul <span className="accent">trait</span>,<br />bien placé.</h1>
          <p className="hero-lead">
            Blackwork, fine line, japonais. Trois artistes, un studio, une
            exigence commune : ce qui est tatoué reste. Consultation
            obligatoire avant chaque projet.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-red">Demander une consultation</a>
            <a href="#flash" className="btn btn-line">Voir le flash</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 320 320" width="100%" height="100%">
            <g className="ink-draw" fill="none" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M160 30C220 30 270 80 270 160C270 240 220 290 160 290C100 290 50 240 50 160C50 80 100 30 160 30Z" />
              <path d="M110 130 Q160 90 210 130" />
              <path d="M100 180 Q160 230 220 180" />
              <circle cx="160" cy="160" r="6" fill="var(--red)" stroke="none" />
            </g>
          </svg>
        </div>
      </div>

      <style>{`
        .hero{ padding: 64px 0 96px; border-bottom: 2px solid var(--ink); }
        .hero-grid{ display:grid; gap:44px; align-items:center; }
        @media (min-width:900px){ .hero-grid{ grid-template-columns: 1.1fr 0.9fr; } }
        .hero-copy h1{ font-size: clamp(2.6rem, 7vw, 4.6rem); margin-bottom:24px; }
        .hero-copy .accent{ color: var(--red); }
        .hero-lead{ max-width: 46ch; color:#3a3a38; font-size:1.05rem; margin-bottom:32px; font-family: var(--font-body); text-transform:none; }
        .hero-actions{ display:flex; flex-wrap:wrap; gap:14px; }

        .btn{ display:inline-block; font-family: var(--font-body); font-weight:700; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.04em; padding:14px 26px; border-radius:0; border:2px solid transparent; transition: transform 0.15s ease, background 0.2s, color 0.2s, border-color 0.2s; }
        .btn:hover{ transform: translateY(-2px); }
        .btn-red{ background: var(--red); color: var(--paper); border-color: var(--red); }
        .btn-red:hover{ background: var(--ink); border-color: var(--ink); }
        .btn-line{ border-color: var(--ink); color: var(--ink); }
        .btn-line:hover{ border-color: var(--red); color: var(--red); }

        .hero-art{ display:flex; justify-content:center; }
        .hero-art svg{ max-width: 320px; }
        .ink-draw path{
          stroke-dasharray: 700; stroke-dashoffset:700;
          animation: draw-ink 2s ease forwards;
        }
        @keyframes draw-ink{ to{ stroke-dashoffset:0; } }
      `}</style>
    </section>
  )
}
