import { useState } from 'react';
import { GALLERY_IMAGES } from '../data/content';
import GalleryLightbox from './GalleryLightbox';
import SectionHeader from './ui/SectionHeader';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <>
      <section id="galeria" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          tone="info"
          eyebrow="Termovízne snímky"
          icon={(
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          )}
          title={<>Ukážka <span className="text-gradient">snímkov</span></>}
          description="Ukážka príkladov termovíznych snímkov z obhliadok."
          maxWidth="max-w-xl"
        />

        {/* Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              type="button"
              key={i}
              id={`gallery-img-${i}`}
              onClick={() => setActiveImage(i)}
              aria-label={`Otvoriť snímok: ${img.alt}`}
              className={`group relative overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-4">
                <p className="text-white text-xs font-medium leading-snug">{img.alt}</p>
              </div>
              {/* Thermal color tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
      </section>
      {activeImage !== null && (
        <GalleryLightbox
          images={GALLERY_IMAGES}
          activeIndex={activeImage}
          onChange={setActiveImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
