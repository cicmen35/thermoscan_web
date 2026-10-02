import { useState, useEffect } from 'react';
import { HERO_BG_URL } from '../data/content';

const DYNAMIC_WORDS = ['budov', 'rodinných domov', 'bytov', 'novostavieb'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setWordIndex(0);
      setIsFading(false);
      return;
    }

    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    const timer = setInterval(() => {
      setIsFading(true);
      fadeTimer = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
        setIsFading(false);
      }, 280);
    }, 3200);

    return () => {
      clearInterval(timer);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, [reducedMotion]);

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


      {/* Animated floating thermal glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-orb-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-orb-2 pointer-events-none" />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 sm:pt-28 sm:pb-24 flex flex-col items-center text-center gap-6">
        <div className="flex flex-col gap-6 items-center">
          {/* Badge */}
          <div className="badge badge-outline text-primary border-primary/30 bg-primary/10 gap-2 px-4 py-3 text-sm font-medium rounded-full animate-hero-badge hover:border-primary/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Odborné posúdenie stavu nehnuteľnosti
          </div>

          {/* Heading with dynamic word transition */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white animate-hero-title">
            <span className="sr-only">Termovízia budov</span>
            <span
              aria-hidden="true"
              className={`inline-block text-gradient animate-gradient-pan transition-all duration-300 transform ${
                isFading
                  ? 'opacity-0 -translate-y-4 scale-95 blur-sm'
                  : 'opacity-100 translate-y-0 scale-100 blur-0'
              }`}
            >
              Termovízia {DYNAMIC_WORDS[wordIndex]}
            </span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 animate-hero-cta">
            <a
              id="hero-contact-cta"
              href="#kontakt"
              className="btn btn-primary btn-lg rounded-full shadow-xl shadow-orange-900/50 hover:scale-105 active:scale-95 transition-all animate-button-heat"
            >
              Kontaktujte nás
            </a>
            <a
              id="hero-learn-more"
              href="#termovizia"
              className="btn btn-ghost btn-lg rounded-full glass text-white hover:bg-white/15 hover:scale-105 active:scale-95 transition-all"
            >
              Zistiť viac
            </a>
          </div>

          {/* Quick stats */}
          <div className="stats stats-horizontal hidden sm:flex bg-transparent border-t border-white/10 shadow-none mt-4 pt-2 animate-hero-stats">
            {[
              { value: '1–2h', label: 'Trvanie merania' },
              { value: '10°C', label: 'Min. rozdiel teplôt' },
              { value: '1–2 dni', label: 'Dodanie správy' },
            ].map((stat) => (
              <div key={stat.label} className="stat px-6 py-0">
                <div className="stat-value text-2xl font-bold text-gradient-warm font-display">
                  {stat.value}
                </div>
                <div className="stat-desc text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 text-xs">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
