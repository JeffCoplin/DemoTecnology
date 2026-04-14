import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-secondary-container/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-tertiary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 w-fit bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium"
          >
            <span className="material-symbols-outlined text-base">bolt</span>
            Entrega rápida a todo el país
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold text-on-surface leading-tight tracking-tight"
          >
            La tecnología
            <br />
            <span className="text-secondary">que necesitas,</span>
            <br />
            al precio justo.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-body text-on-surface-variant text-lg max-w-md leading-relaxed"
          >
            Smartphones, laptops, tablets y accesorios premium. Compra fácil y rápido por WhatsApp. ¡Somos tu tienda tech de confianza!
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => navigate('/catalogo')}
              className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-medium text-base hover:bg-secondary-container transition-all duration-300 hover:shadow-card"
            >
              <span className="material-symbols-outlined text-base">grid_view</span>
              Ver catálogo
            </button>
            <button
              onClick={() => navigate('/contacto')}
              className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/40 text-on-surface px-6 py-3 rounded-full font-medium text-base hover:bg-surface-container transition-all duration-300"
            >
              <span className="material-symbols-outlined text-base text-[#25D366]">chat</span>
              Contáctanos
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex gap-8 pt-4 border-t border-outline-variant/30"
          >
            {[
              { value: '500+', label: 'Productos' },
              { value: '24h', label: 'Entrega' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-headline font-bold text-2xl text-on-surface">{stat.value}</p>
                <p className="font-body text-on-surface-variant text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="relative hidden lg:grid grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-high">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
                alt="MacBook Pro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-high">
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80"
                alt="PlayStation 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-high">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"
                alt="iPhone 15"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-high">
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80"
                alt="iPad Pro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -left-6 top-1/2 -translate-y-1/2 glass-card border border-outline-variant/20 rounded-2xl px-4 py-3 shadow-ambient"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#25D366] text-xl">chat</span>
              <div>
                <p className="font-headline font-semibold text-on-surface text-sm">Compra por WhatsApp</p>
                <p className="font-body text-on-surface-variant text-xs">Respuesta en minutos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="absolute -right-4 bottom-16 glass-card border border-outline-variant/20 rounded-2xl px-4 py-3 shadow-ambient"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-xl">local_shipping</span>
              <div>
                <p className="font-headline font-semibold text-on-surface text-sm">Entrega en 24h</p>
                <p className="font-body text-on-surface-variant text-xs">Todo el país</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-on-surface-variant"
      >
        <span className="text-xs font-body">Explorar</span>
        <span className="material-symbols-outlined text-base">expand_more</span>
      </motion.div>
    </section>
  );
}
