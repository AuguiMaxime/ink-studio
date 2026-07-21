import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#flash', label: 'Flash' },
    { href: '#artistes', label: 'Artistes' },
    { href: '#process', label: 'Hygiène' },
    { href: '#contact', label: 'Consultation' },
  ]

  return (
    <header className="header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">TRAIT</a>
        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <button className={`burger ${open ? 'burger-open' : ''}`} aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>

      <style>{`
        .header{ position:sticky; top:0; z-index:50; background: var(--paper); border-bottom: 2px solid var(--ink); }
        .header-inner{ display:flex; align-items:center; justify-content:space-between; height:74px; }
        .brand{ font-family: var(--font-display); font-size:1.6rem; letter-spacing:0.04em; }
        .nav{ display:none; gap:28px; }
        .nav a{ font-size:0.88rem; font-weight:600; text-transform:uppercase; letter-spacing:0.03em; }
        .nav a:hover{ color: var(--red); }
        @media (min-width:800px){ .nav{ display:flex; } }
        .burger{ width:40px; height:40px; border:none; background:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px; }
        .burger span{ width:22px; height:2px; background:var(--ink); transition:transform 0.25s, opacity 0.25s; }
        .burger-open span:nth-child(1){ transform:translateY(7px) rotate(45deg); }
        .burger-open span:nth-child(2){ opacity:0; }
        .burger-open span:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }
        @media (min-width:800px){ .burger{ display:none; } }
        .nav-open{ display:flex; flex-direction:column; position:absolute; top:74px; left:0; right:0; background:var(--paper); border-bottom:2px solid var(--ink); padding:8px 24px 20px; }
        .nav-open a{ padding:14px 0; border-top:1px solid rgba(11,11,11,0.12); }
      `}</style>
    </header>
  )
}
