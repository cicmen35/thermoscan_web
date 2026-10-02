import { useEffect, useRef } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  images: readonly GalleryImage[];
  activeIndex: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function GalleryLightbox({
  images,
  activeIndex,
  onChange,
  onClose,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeIndexRef = useRef(activeIndex);
  const onChangeRef = useRef(onChange);
  const onCloseRef = useRef(onClose);
  activeIndexRef.current = activeIndex;
  onChangeRef.current = onChange;
  onCloseRef.current = onClose;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current();
      if (event.key === 'ArrowLeft') {
        onChangeRef.current((activeIndexRef.current - 1 + images.length) % images.length);
      }
      if (event.key === 'ArrowRight') {
        onChangeRef.current((activeIndexRef.current + 1) % images.length);
      }
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [images.length]);

  const image = images[activeIndex];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galéria: ${image.alt}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col items-center gap-4">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="btn btn-circle btn-ghost absolute right-0 top-0 z-10 bg-black/60 text-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Zavrieť galériu"
        >
          <span aria-hidden="true" className="text-2xl">×</span>
        </button>

        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        <p id="lightbox-caption" className="max-w-3xl text-center text-sm text-white/80">
          {image.alt}
        </p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onChange((activeIndex - 1 + images.length) % images.length)}
            className="btn btn-circle glass text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Predchádzajúci snímok"
          >
            <span aria-hidden="true">←</span>
          </button>
          <span className="text-sm tabular-nums text-white/70">
            {activeIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            onClick={() => onChange((activeIndex + 1) % images.length)}
            className="btn btn-circle glass text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Nasledujúci snímok"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
