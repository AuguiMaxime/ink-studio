export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <span className="footer-brand">TRAIT</span>
          <p className="mono">8 rue Pargaminières, Toulouse</p>
        </div>
        <nav className="footer-nav mono">
          <a href="#mentions">Mentions légales</a>
          <a href="#top">Haut de page</a>
        </nav>
        <p className="mono footer-copy">© 2026 Trait Studio — SIRET 887 561 220 00019 — Tatouage interdit aux mineurs sans autorisation parentale</p>
      </div>

      <style>{`
        .footer{ background: var(--ink); color: var(--grey); padding: 44px 0; border-top: 2px solid var(--ink); }
        .footer-inner{ display:flex; flex-wrap:wrap; gap:20px; align-items:center; justify-content:space-between; }
        .footer-brand{ font-family: var(--font-display); color: var(--paper); font-size:1.2rem; display:block; margin-bottom:6px; }
        .footer p{ font-size:0.8rem; margin:0; }
        .footer-nav{ display:flex; gap:20px; flex-wrap:wrap; font-size:0.8rem; }
        .footer-nav a:hover{ color: var(--red); }
        .footer-copy{ width:100%; font-size:0.68rem; opacity:0.7; margin-top:14px; }
      `}</style>
    </footer>
  )
}
