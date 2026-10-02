import { SERVICES } from '../data/content';
import { FeatureIcon } from './icons';
import SectionHeader from './ui/SectionHeader';

export default function Services() {
  return (
    <section id="termovizia" className="relative py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 section-blur-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Naše služby"
          icon={(
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          )}
          title={<>Termovízia a jej <span className="text-gradient">využitie</span></>}
          description="Meranie termovíznou kamerou patrí k vysoko efektívnym nedeštruktívnym metódam merania, ktorým dokážeme odhaliť skryté nedostatky v obalových konštrukciách budov a ich častí."
        />

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="card glass hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-900/20 group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-[var(--radius-box)] bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300 pointer-events-none" />

              <div className="card-body gap-5">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <FeatureIcon name={service.icon} className="w-8 h-8" />
                </div>

                <h3 className="card-title font-display font-bold text-xl text-white">{service.title}</h3>
                <p className="text-base-content/60 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="card glass-dark">
          <div className="card-body">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col gap-4">
                <h3 className="card-title font-display font-bold text-2xl md:text-3xl text-white">
                  Kedy merať?
                </h3>
                <p className="text-base-content/60 leading-relaxed">
                  Ideálne v chladnejších mesiacoch (jeseň až jar), keď je rozdiel medzi vnútornou
                  a vonkajšou teplotou aspoň 10 °C. Vtedy sú tepelné úniky najlepšie viditeľné.
                </p>
                <p className="text-base-content/60 leading-relaxed">
                  Je využiteľné ako pri novostavbách v rámci kontroly kvality prevedených prác,
                  tak rekonštrukciách budov, kde slúži na diagnostikovanie problematických častí v budove.
                </p>
              </div>

              {/* Temperature scale visual */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-base-content/40 mb-1">
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
                      <span className="text-base-content/40 text-xs ml-auto">{item.desc}</span>
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
                      <div className="text-base-content/50 text-xs">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
