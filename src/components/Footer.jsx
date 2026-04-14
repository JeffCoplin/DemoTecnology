import { WHATSAPP_NUMBER } from '../data/products';

const links = {
  Tienda: ['Inicio', 'Catálogo', 'Ofertas', 'Nuevos Productos'],
  Servicio: ['Envíos', 'Devoluciones', 'Garantía', 'FAQ'],
  Empresa: ['Sobre Nosotros', 'Contáctanos', 'Trabaja con Nosotros'],
};

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-base">devices</span>
              </div>
              <span className="font-headline font-bold text-lg tracking-tight">
                Tu<span className="text-secondary-container">Tienda</span>
              </span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed">
              Tu tienda de confianza. Productos originales con los mejores precios del mercado.
            </p>
            <div className="flex gap-3 mt-2">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary/60 flex items-center justify-center transition-colors duration-200"
                  aria-label={social}
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/40 flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-headline font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs font-body">
          <p>© {new Date().getFullYear()} Tu Tienda. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
