import { CONTACT } from '../data/content';

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-green-300 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Kontakt
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Neváhajte nás{' '}
            <span className="text-gradient">kontaktovať</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-base leading-relaxed">
            Po telefonickom dohovore pre Vás pripravíme cenovú ponuku. Následne po jej
            odsúhlasení si dohodneme termín a vykonáme obhliadku. Vypracujeme protokol o
            termovíznom meraní, ktorý po uhradení dohodnutej ceny odovzdáme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info + process steps */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <a
              id="contact-phone"
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="group glass rounded-3xl p-6 flex items-center gap-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-400 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300 shrink-0">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Zavolajte nám</div>
                <div className="text-white font-semibold text-xl">{CONTACT.phone}</div>
              </div>
              <svg className="w-5 h-5 text-white/20 ml-auto group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email */}
            <a
              id="contact-email"
              href={`mailto:${CONTACT.email}`}
              className="group glass rounded-3xl p-6 flex items-center gap-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-blue-400 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300 shrink-0">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Napíšte nám</div>
                <div className="text-white font-semibold text-lg">{CONTACT.email}</div>
              </div>
              <svg className="w-5 h-5 text-white/20 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Address */}
            <div className="glass rounded-3xl p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-green-400 shrink-0">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-white/40 text-sm mb-1">Nájdete nás</div>
                <div className="text-white font-semibold">{CONTACT.address}</div>
                <div className="text-white/60 text-sm">{CONTACT.city}, {CONTACT.country}</div>
              </div>
            </div>

            {/* Process steps */}
            <div className="glass-dark rounded-3xl p-6 mt-2">
              <h3 className="font-display font-bold text-white mb-4">Ako to funguje?</h3>
              <div className="flex flex-col gap-3">
                {[
                  'Telefonický dohovor a cenová ponuka',
                  'Odsúhlasenie ponuky a dohodnutie termínu',
                  'Vykonanie obhliadky a merania',
                  'Vypracovanie protokolu a odovzdanie',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-white/70 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="flex flex-col">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Form ────────────────────────────────────────────────────────────────────

function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body =
      `Meno: ${data.get('firstName')} ${data.get('lastName')}\n` +
      `Email: ${data.get('email')}\n` +
      `Telefón: ${data.get('phone') || '—'}\n` +
      `Typ objektu: ${data.get('propertyType')}\n` +
      `Lokalita: ${data.get('location')}\n\n` +
      `Správa:\n${data.get('message') || '—'}`;
    window.location.href =
      `mailto:${CONTACT.email}` +
      `?subject=${encodeURIComponent('Dopyt – ' + data.get('propertyType'))}` +
      `&body=${encodeURIComponent(body)}`;
  }

  const input =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm ' +
    'placeholder:text-white/30 focus:outline-none focus:border-orange-500/60 transition-all duration-200';
  const label = 'block text-white/50 text-xs font-medium mb-1.5 uppercase tracking-wide';

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="glass rounded-3xl p-8 flex flex-col gap-5 h-full"
    >
      <div>
        <h3 className="font-display font-bold text-2xl text-white">Získajte cenovú ponuku</h3>
        <p className="text-white/40 text-sm mt-1">Odpovieme do 1 pracovného dňa.</p>
      </div>

      {/* First + last name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={label}>Meno *</label>
          <input id="firstName" name="firstName" type="text" required minLength={2}
            autoComplete="given-name" placeholder="Ján" className={input} />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>Priezvisko *</label>
          <input id="lastName" name="lastName" type="text" required minLength={2}
            autoComplete="family-name" placeholder="Novák" className={input} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contactEmail" className={label}>E-mail *</label>
        <input id="contactEmail" name="email" type="email" required
          autoComplete="email" placeholder="jan.novak@email.sk" className={input} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contactPhone" className={label}>Telefón</label>
        <input id="contactPhone" name="phone" type="tel"
          autoComplete="tel" placeholder="+421 9XX XXX XXX" className={input} />
      </div>

      {/* Property type + location */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="propertyType" className={label}>Typ objektu *</label>
          <select id="propertyType" name="propertyType" required defaultValue=""
            className={`${input} appearance-none cursor-pointer`}>
            <option value="" disabled>Vybrať…</option>
            <option>Rodinný dom</option>
            <option>Bytový dom</option>
            <option>Byt</option>
            <option>Kancelárske priestory</option>
            <option>Novostavba</option>
            <option>Iné</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className={label}>Lokalita *</label>
          <input id="location" name="location" type="text" required
            placeholder="Nitra, Bratislava…" className={input} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={label}>Správa</label>
        <textarea id="message" name="message" rows={3}
          placeholder="Veľkosť objektu, ďalšie informácie…"
          className={`${input} resize-none`} />
      </div>

      <button
        id="contact-form-submit"
        type="submit"
        className="mt-auto w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-base hover:opacity-90 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-xl shadow-orange-900/40"
      >
        Odoslať dopyt
      </button>

      <p className="text-white/25 text-xs text-center -mt-2">
        * Povinné polia. Formulár otvorí váš e-mailový klient.
      </p>
    </form>
  );
}
