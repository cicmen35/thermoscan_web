import { GALLERY_IMAGES } from '../data/content';

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 flex flex-col items-center gap-4">
          <div className="badge badge-outline text-info border-info/30 bg-info/10 gap-2 px-4 py-3 text-sm font-medium rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            Termovízne snímky
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            Ukážka{' '}
            <span className="text-gradient">snímkov</span>
          </h2>
          <p className="text-base-content/60 max-w-xl text-base leading-relaxed">
            Ukážka príkladov termovíznych snímkov z obhliadok.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              id={`gallery-img-${i}`}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-medium leading-snug">{img.alt}</p>
              </div>
              {/* Thermal color tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
