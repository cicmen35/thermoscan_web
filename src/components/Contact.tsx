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
          {/* Contact info cards */}
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
                <div className="text-white/60 text-sm">
                  {CONTACT.city}, {CONTACT.country}
                </div>
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

          {/* Right: CTA card */}
          <div className="flex flex-col gap-4">
            <div className="glass rounded-3xl p-8 md:p-10 flex flex-col gap-6 h-full">
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-2xl text-white">
                  Získajte nezáväznú cenovú ponuku
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Stačí nám napísať základné informácie o objekte (veľkosť, lokalita, typ
                  stavby) a my vám obratom zašleme nezáväznú cenovú ponuku.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <a
                  id="contact-call-cta"
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-xl shadow-orange-900/40"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Zavolajte: {CONTACT.phone}
                </a>
                <a
                  id="contact-email-cta"
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-center gap-3 py-4 rounded-2xl glass text-white font-semibold text-base hover:bg-white/15 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Napíšte: {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
