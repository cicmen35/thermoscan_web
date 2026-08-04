import { CONTACT, HERO_BG_URL } from '../data/content';

export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_URL}
          alt="Termovízne meranie budov"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-transparent" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'pulse 3s ease-in-out 1s infinite' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Odborné posúdenie stavu nehnuteľnosti
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            Termovízia{' '}
            <span className="text-gradient">budov</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-lg">
            Meranie termovíznou kamerou patrí k vysoko efektívnym nedeštruktívnym metódam merania,
            ktorým dokážeme odhaliť skryté nedostatky v obalových konštrukciách budov.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              id="hero-contact-cta"
              href="#kontakt"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-orange-900/50"
            >
              Kontaktujte nás
            </a>
            <a
              id="hero-learn-more"
              href="#termovizia"
              className="px-8 py-4 rounded-full glass text-white font-semibold text-base hover:bg-white/15 transition-all duration-200"
            >
              Zistiť viac
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/10">
            {[
              { value: '1–2h', label: 'Trvanie merania' },
              { value: '10°C', label: 'Min. rozdiel teplôt' },
              { value: '1–2 dni', label: 'Dodanie správy' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-gradient-warm font-display">
                  {stat.value}
                </span>
                <span className="text-xs text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Contact card */}
        <div className="lg:flex hidden justify-end">
          <div className="glass rounded-3xl p-8 w-full max-w-sm flex flex-col gap-6">
            <h2 className="text-xl font-bold font-display text-white">Kontaktujte nás</h2>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/40 transition-colors">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/40">Zavolajte nám</div>
                  <div className="font-semibold">{CONTACT.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/40 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/40">Napíšte nám</div>
                  <div className="font-semibold text-sm">{CONTACT.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <span className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-white/40">Nájdete nás</div>
                  <div className="font-semibold text-sm">
                    {CONTACT.address}, {CONTACT.city}
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#kontakt"
              id="hero-card-cta"
              className="w-full text-center py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Získať cenovú ponuku
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
