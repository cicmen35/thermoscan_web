import { WHY_US_TEXT, WHY_US_POINTS } from '../data/content';

const icons = [
  // Target/precision
  <svg key="target" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>,
  // Shield check
  <svg key="shield" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Heart/human
  <svg key="heart" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>,
  // Clock/speed
  <svg key="clock" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function WhyUs() {
  return (
    <section id="precomy" className="relative py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-transparent to-blue-950/20 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-300 text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Prečo my?
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Presnosť, spoľahlivosť{' '}
              <span className="text-gradient-warm">a ľudský prístup</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-base">{WHY_US_TEXT}</p>

            <a
              id="whyus-contact-cta"
              href="#kontakt"
              className="self-start mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-xl shadow-orange-900/40"
            >
              Získať cenovú ponuku
            </a>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {WHY_US_POINTS.map((point, i) => (
              <div
                key={point.label}
                id={`whyus-point-${i}`}
                className="group glass rounded-3xl p-6 flex flex-col gap-3 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-400 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                  {icons[i]}
                </div>
                <h3 className="font-display font-bold text-white text-lg">{point.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
