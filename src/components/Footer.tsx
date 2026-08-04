import { CONTACT, LOGO_URL, NAV_LINKS } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src={LOGO_URL}
              alt="ThermoScan Logo"
              className="h-10 w-auto object-contain drop-shadow-md opacity-90"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Profesionálne termovízne merania budov pre rodinné domy, bytové domy, kancelárske
              priestory aj nové stavby.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider">
              Navigácia
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="text-white/50 hover:text-white transition-colors duration-200"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/50 hover:text-white transition-colors duration-200"
              >
                {CONTACT.email}
              </a>
              <span className="text-white/40">
                {CONTACT.address}, {CONTACT.city}
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider">Kde nás nájdete</h4>
            <div className="rounded-xl overflow-hidden border border-white/10 w-full aspect-square">
              <iframe
                title="ThermoScan – Pod zlatým brehom 59, Nitra"
                src="https://www.google.com/maps?q=Pod+zlatým+brehom+59,+94901+Nitra,+Slovensko&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            Copyright © {year} | thermoscan.sk
          </p>
          <button
            id="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-white/30 hover:text-white/70 text-xs transition-colors duration-200"
          >
            Návrat hore
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
