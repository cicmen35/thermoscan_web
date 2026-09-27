import { CONTACT } from '../data/content';

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="badge badge-outline text-success border-success/30 bg-success/10 gap-2 px-4 py-3 text-sm font-medium rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Kontakt
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Neváhajte nás{' '}
            <span className="text-gradient">kontaktovať</span>
          </h2>
          <p className="text-base-content/60 max-w-2xl text-base leading-relaxed">
            Na základe Vášho dopytu pre Vás pripravíme
            cenovú ponuku. Následne po jej odsúhlasení si dohodneme termín a vykonáme obhliadku.
            Vypracujeme protokol o termovíznom meraní, ktorý po uhradení dohodnutej ceny odovzdáme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info + process steps */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <div
              id="contact-phone"
              className="card glass"
            >
              <div className="card-body flex-row items-center gap-3.5 sm:gap-5 p-4 sm:p-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base-content/40 text-xs sm:text-sm mb-0.5 sm:mb-1">Zavolajte nám</div>
                  <div className="text-white font-semibold text-base sm:text-xl truncate">{CONTACT.phone}</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div
              id="contact-email"
              className="card glass"
            >
              <div className="card-body flex-row items-center gap-3.5 sm:gap-5 p-4 sm:p-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-info/20 to-accent/20 flex items-center justify-center text-info shrink-0">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base-content/40 text-xs sm:text-sm mb-0.5 sm:mb-1">Napíšte nám</div>
                  <div className="text-white font-semibold text-xs xs:text-sm sm:text-lg truncate">{CONTACT.email}</div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="card glass">
              <div className="card-body flex-row items-center gap-3.5 sm:gap-5 p-4 sm:p-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center text-success shrink-0">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base-content/40 text-xs sm:text-sm mb-0.5 sm:mb-1">Nájdete nás</div>
                  <div className="text-white font-semibold text-sm sm:text-base truncate">{CONTACT.address}</div>
                  <div className="text-base-content/60 text-xs sm:text-sm truncate">{CONTACT.city}, {CONTACT.country}</div>
                </div>
              </div>
            </div>

            {/* Process steps */}
            <div className="card glass-dark mt-2">
              <div className="card-body p-6">
                <h3 className="card-title font-display font-bold text-white mb-2">Ako to funguje?</h3>
                <ul className="steps steps-vertical">
                  {[
                    'Zaslanie dopytu a cenová ponuka',
                    'Odsúhlasenie ponuky a dohodnutie termínu',
                    'Vykonanie obhliadky a merania',
                    'Vypracovanie protokolu a odovzdanie',
                  ].map((step, i) => (
                    <li key={i} className="step step-primary text-base-content/70 text-sm text-left">
                      {step}
                    </li>
                  ))}
                </ul>
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

  const fieldset = 'fieldset';
  const legend = 'fieldset-legend text-base-content/50 text-xs uppercase tracking-wide';

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="card glass h-full"
    >
      <div className="card-body gap-4 p-8">
        <h3 className="card-title font-display font-bold text-2xl text-white mb-1">Získajte cenovú ponuku</h3>

        {/* First + last name */}
        <div className="grid grid-cols-2 gap-4">
          <div className={fieldset}>
            <legend className={legend}>Meno *</legend>
            <input
              id="firstName" name="firstName" type="text" required minLength={2}
              autoComplete="given-name" placeholder="Ján"
              className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60"
            />
          </div>
          <div className={fieldset}>
            <legend className={legend}>Priezvisko *</legend>
            <input
              id="lastName" name="lastName" type="text" required minLength={2}
              autoComplete="family-name" placeholder="Novák"
              className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60"
            />
          </div>
        </div>

        {/* Email */}
        <div className={fieldset}>
          <legend className={legend}>E-mail *</legend>
          <input
            id="contactEmail" name="email" type="email" required
            autoComplete="email" placeholder="jan.novak@email.sk"
            className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60"
          />
        </div>

        {/* Phone */}
        <div className={fieldset}>
          <legend className={legend}>Telefón</legend>
          <input
            id="contactPhone" name="phone" type="tel"
            autoComplete="tel" placeholder="+421 9XX XXX XXX"
            className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60"
          />
        </div>

        {/* Property type + location */}
        <div className="grid grid-cols-2 gap-4">
          <div className={fieldset}>
            <legend className={legend}>Typ objektu *</legend>
            <select
              id="propertyType" name="propertyType" required defaultValue=""
              className="select select-bordered w-full bg-white/5 border-white/10 text-white appearance-none cursor-pointer"
            >
              <option value="" disabled>Vybrať…</option>
              <option>Rodinný dom</option>
              <option>Bytový dom</option>
              <option>Byt</option>
              <option>Kancelárske priestory</option>
              <option>Novostavba</option>
              <option>Iné</option>
            </select>
          </div>
          <div className={fieldset}>
            <legend className={legend}>Lokalita *</legend>
            <input
              id="location" name="location" type="text" required
              placeholder="Nitra, Bratislava…"
              className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60"
            />
          </div>
        </div>

        {/* Message */}
        <div className={fieldset}>
          <legend className={legend}>Správa</legend>
          <textarea
            id="message" name="message" rows={3}
            placeholder="Veľkosť objektu, ďalšie informácie…"
            className="textarea textarea-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/60 resize-none"
          />
        </div>

        <button
          id="contact-form-submit"
          type="submit"
          className="btn btn-primary btn-lg mt-auto w-full rounded-2xl shadow-xl shadow-orange-900/40 hover:scale-[1.02] active:scale-100 transition-transform"
        >
          Odoslať správu
        </button>

        <p className="text-base-content/25 text-xs text-center -mt-2">
          * Povinné polia. Formulár otvorí váš e-mailový klient.
        </p>
      </div>
    </form>
  );
}
