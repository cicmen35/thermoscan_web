import { SERVICES } from '../data/content';

const serviceIcons = [
  // House check icon
  <svg key="house" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>,
  // Thermometer icon
  <svg key="therm" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>,
  // Shield icon
  <svg key="shield" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
];

export default function Services() {
  return (
    <section id="termovizia" className="relative py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 section-blur-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-orange-300 text-sm font-medium">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Naše služby
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Termovízia a jej{' '}
            <span className="text-gradient">využitie</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
            Meranie termovíznou kamerou patrí k vysoko efektívnym nedeštruktívnym metódam merania,
            ktorým dokážeme odhaliť skryté nedostatky v obalových konštrukciách budov a ich
            častí.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="group relative glass rounded-3xl p-8 flex flex-col gap-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300 pointer-events-none" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-orange-400 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all duration-300">
                {serviceIcons[i]}
              </div>

              <h3 className="font-display font-bold text-xl text-white">{service.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="glass-dark rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                Kedy merať?
              </h3>
              <p className="text-white/60 leading-relaxed">
                Ideálne v chladnejších mesiacoch (jeseň až jar), keď je rozdiel medzi vnútornou
                a vonkajšou teplotou aspoň 10 °C. Vtedy sú tepelné úniky najlepšie viditeľné.
              </p>
              <p className="text-white/60 leading-relaxed">
                Je využiteľné ako pri novostavbách v rámci kontroly kvality prevedených prác,
                tak rekonštrukciách budov, kde slúži na diagnostikovanie problematických častí v budove.
              </p>

            </div>

            {/* Temperature scale visual */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-white/40 mb-1">
                <span>Studené</span>
                <span>Teplé</span>
              </div>
              <div className="h-4 rounded-full bg-gradient-to-r from-blue-600 via-green-400 via-yellow-400 to-red-500 shadow-lg" />
              <div className="flex flex-col gap-2 sm:hidden">
                {[
                  { dot: 'bg-blue-500', label: 'Tepelné úniky', desc: 'Modré oblasti = studené miesta' },
                  { dot: 'bg-yellow-400', label: 'Prechodné zóny', desc: 'Oblasti s miernymi stratami' },
                  { dot: 'bg-red-500', label: 'Tepelné mosty', desc: 'Červené = problémové miesta' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.dot}`} />
                    <span className="text-white/70 text-sm font-medium">{item.label}</span>
                    <span className="text-white/40 text-xs ml-auto">{item.desc}</span>
                  </div>
                ))}
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-4 mt-2">
                {[
                  { color: 'from-blue-600/20 to-blue-600/10 border-blue-500/30 text-blue-400', label: 'Tepelné úniky', desc: 'Modré oblasti = studené miesta' },
                  { color: 'from-yellow-500/20 to-yellow-500/10 border-yellow-500/30 text-yellow-400', label: 'Prechodné zóny', desc: 'Oblasti s miernymi stratami' },
                  { color: 'from-red-600/20 to-red-600/10 border-red-500/30 text-red-400', label: 'Tepelné mosty', desc: 'Červené = problémové miesta' },
                ].map((item) => (
                  <div key={item.label} className={`rounded-2xl p-4 bg-gradient-to-br ${item.color} border`}>
                    <div className={`font-semibold text-sm mb-1 ${item.color.split(' ').find(c => c.startsWith('text-'))}`}>
                      {item.label}
                    </div>
                    <div className="text-white/50 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
