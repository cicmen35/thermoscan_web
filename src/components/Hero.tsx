import { HERO_BG_URL } from '../data/content';

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center gap-6">
        <div className="flex flex-col gap-6 items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Odborné posúdenie stavu nehnuteľnosti
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
            Termovízia{' '}
            <span className="text-gradient">budov</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Meranie termovíznou kamerou patrí k vysoko efektívnym nedeštruktívnym metódam merania,
            ktorým dokážeme odhaliť skryté nedostatky v obalových konštrukciách budov.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
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
          <div className="hidden sm:flex flex-wrap gap-8 mt-4 pt-6 border-t border-white/10">
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

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
