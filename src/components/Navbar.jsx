import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Catálogo', to: '/catalogo' },
    { label: 'Contáctanos', to: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-ambient' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-base">devices</span>
            </div>
            <span className="font-headline font-bold text-on-surface text-lg tracking-tight">
              Tu<span className="text-secondary">Tienda</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-secondary'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors duration-200"
              aria-label="Carrito"
            >
              <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            <Link
              to="/contacto"
              className="hidden md:flex items-center gap-1.5 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary-container transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              WhatsApp
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              <span className="material-symbols-outlined text-on-surface-variant">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-nav border-t border-outline-variant/20 px-4 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-body text-base font-medium py-1 transition-colors ${
                    isActive ? 'text-secondary' : 'text-on-surface'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 bg-secondary text-white px-4 py-2.5 rounded-full text-sm font-medium w-fit"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Contactar por WhatsApp
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
