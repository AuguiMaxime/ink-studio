import { useState } from 'react'

const initialForm = { nom: '', email: '', telephone: '', zone: '', style: '', description: '' }

function validate(form) {
  const errors = {}
  if (form.nom.trim().length < 2) errors.nom = 'Nom requis.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Email invalide.'
  if (!/^(\+33|0)[1-9](\s?\d{2}){4}$/.test(form.telephone.trim())) errors.telephone = 'Numéro invalide (ex: 06 12 34 56 78).'
  if (!form.style) errors.style = 'Choisis un style.'
  if (form.description.trim().length < 10) errors.description = 'Décris ton projet (10 caractères minimum).'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...form, [name]: value }
    setForm(next)
    if (touched[name]) setErrors(validate(next))
  }
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const allErrors = validate(form)
    setErrors(allErrors)
    setTouched({ nom: true, email: true, telephone: true, style: true, description: true })
    if (Object.keys(allErrors).length > 0) return
    setSent(true)
    setForm(initialForm)
    setTouched({})
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">Étape 1</p>
          <h2>Demander une consultation</h2>
          <p>Chaque projet commence par un échange, en studio ou par visio. Aucun tatouage n'est réalisé sans ce premier rendez-vous.</p>
          <ul className="contact-details mono">
            <li>05 61 77 00 00</li>
            <li>studio@trait-tattoo.fr</li>
            <li>8 rue Pargaminières, Toulouse</li>
          </ul>
        </div>

        <form className="intake-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="nom">Nom</label>
            <input id="nom" name="nom" value={form.nom} onChange={handleChange} onBlur={handleBlur} />
            {touched.nom && errors.nom && <span className="error">{errors.nom}</span>}
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
            {touched.email && errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="telephone">Téléphone</label>
            <input id="telephone" name="telephone" value={form.telephone} onChange={handleChange} onBlur={handleBlur} placeholder="06 12 34 56 78" />
            {touched.telephone && errors.telephone && <span className="error">{errors.telephone}</span>}
          </div>
          <div className="field">
            <label htmlFor="style">Style souhaité</label>
            <select id="style" name="style" value={form.style} onChange={handleChange} onBlur={handleBlur}>
              <option value="">Sélectionner…</option>
              <option value="blackwork">Blackwork</option>
              <option value="fineline">Fine line</option>
              <option value="japonais">Japonais / irezumi</option>
              <option value="autre">Autre</option>
            </select>
            {touched.style && errors.style && <span className="error">{errors.style}</span>}
          </div>
          <div className="field">
            <label htmlFor="zone">Emplacement envisagé</label>
            <input id="zone" name="zone" value={form.zone} onChange={handleChange} placeholder="Avant-bras, dos…" />
          </div>
          <div className="field field-full">
            <label htmlFor="description">Décris ton projet</label>
            <textarea id="description" name="description" rows="4" value={form.description} onChange={handleChange} onBlur={handleBlur}></textarea>
            {touched.description && errors.description && <span className="error">{errors.description}</span>}
          </div>

          <button type="submit" className="btn-submit field-full">Envoyer la demande</button>
          {sent && <p className="success field-full">Demande envoyée — réponse sous 48h pour fixer la consultation.</p>}
        </form>
      </div>

      <style>{`
        .contact{ padding: 100px 0; }
        .contact-grid{ display:grid; gap:44px; }
        @media (min-width:900px){ .contact-grid{ grid-template-columns: 0.8fr 1.2fr; } }
        .contact-intro h2{ font-size: clamp(2rem,4.5vw,2.8rem); margin: 4px 0 18px; }
        .contact-intro p{ font-family: var(--font-body); text-transform:none; color:#3a3a38; max-width:40ch; margin-bottom:22px; }
        .contact-details{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.85rem; }

        .intake-form{ display:grid; grid-template-columns:1fr 1fr; gap:18px; background:#EFEDE8; padding:30px; border:2px solid var(--ink); }
        .field{ display:flex; flex-direction:column; gap:6px; }
        .field-full{ grid-column:1/-1; }
        .field label{ font-family: var(--font-mono); font-size:0.72rem; text-transform:uppercase; letter-spacing:0.03em; color:#5a5a56; }
        .field input, .field select, .field textarea{
          font-family: var(--font-body); padding:12px 14px; border:1.5px solid var(--ink);
          border-radius:0; background:#fff; font-size:0.95rem;
        }
        .error{ color: var(--red); font-size:0.78rem; font-family: var(--font-mono); }
        .btn-submit{
          background: var(--ink); color: var(--paper); border:none; padding:15px 20px;
          font-family: var(--font-body); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; cursor:pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .btn-submit:hover{ background: var(--red); transform: translateY(-2px); }
        .success{ color: var(--red); font-weight:600; font-size:0.9rem; font-family: var(--font-mono); }
      `}</style>
    </section>
  )
}
