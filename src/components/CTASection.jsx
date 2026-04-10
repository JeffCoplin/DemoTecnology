import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data/products';

export default function CTASection() {
  const navigate = useNavigate();
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero información sobre sus productos')}`;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-on-surface rounded-3xl overflow-hidden p-8 lg:p-16 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <span className="font-body text-secondary text-sm font-medium uppercase tracking-widest">
              ¿Listo para comprar?
            </span>
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-xl">
              Consigue la tech que quieres hoy mismo
            </h2>
            <p className="font-body text-white/60 max-w-md text-base leading-relaxed">
              Escríbenos por WhatsApp y te ayudamos a elegir el producto perfecto para ti. Atención personalizada, sin complicaciones.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20c15e] text-white px-6 py-3.5 rounded-full font-medium text-base transition-all duration-300 hover:shadow-card"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Hablar por WhatsApp
              </a>
              <button
                onClick={() => navigate('/catalogo')}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-medium text-base transition-all duration-300"
              >
                <span className="material-symbols-outlined text-base">grid_view</span>
                Ver catálogo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
