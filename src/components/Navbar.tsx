import { useState, useEffect } from 'react';
import { NAV_LINKS, CONTACT, LOGO_URL } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled ? 'glass shadow-lg shadow-black/20 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="navbar-start">
          <a href="/" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="ThermoScan Logo"
              className="h-10 w-auto object-contain drop-shadow-md"
              loading="eager"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full text-white/70 hover:text-white hover:bg-white/10 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="navbar-end gap-2">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="btn btn-primary btn-sm hidden md:inline-flex gap-2 rounded-full shadow-lg shadow-orange-900/40"
            id="nav-phone-cta"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {CONTACT.phone}
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="btn btn-ghost btn-sm md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 flex flex-col gap-1 transition-all">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="menu menu-vertical glass-dark mx-4 mt-2 rounded-2xl p-2 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="btn btn-primary btn-sm rounded-xl mt-1 justify-center"
            >
              {CONTACT.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
