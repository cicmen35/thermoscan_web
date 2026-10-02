import { WHY_US_TEXT, WHY_US_POINTS } from '../data/content';
import { FeatureIcon } from './icons';

export default function WhyUs() {
  return (
    <section id="precomy" className="relative py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-transparent to-blue-950/20 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left">
            <div className="badge badge-outline text-primary border-primary/30 bg-primary/10 gap-2 px-4 py-3 text-sm font-medium rounded-full self-center lg:self-start">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Prečo my?
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Termovízna diagnostika{' '}
              <span className="text-gradient-warm">na profesionálnej úrovni</span>
            </h2>

            <p className="text-base-content/60 leading-relaxed text-base">{WHY_US_TEXT}</p>

            <a
              id="whyus-contact-cta"
              href="#kontakt"
              className="btn btn-primary btn-lg rounded-full shadow-xl shadow-orange-900/40 hover:scale-105 transition-transform self-center lg:self-start mt-2"
            >
              Získať cenovú ponuku
            </a>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {WHY_US_POINTS.map((point, i) => (
              <div
                key={point.label}
                id={`whyus-point-${i}`}
                className="card glass hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="card-body p-4 sm:p-6 gap-2.5 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 shrink-0">
                    <FeatureIcon name={point.icon} />
                  </div>
                  <h3 className="card-title font-display font-bold text-white text-base sm:text-lg">{point.label}</h3>
                  <p className="text-base-content/50 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
