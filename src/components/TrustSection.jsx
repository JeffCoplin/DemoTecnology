import { motion } from 'framer-motion';

const features = [
  {
    icon: 'local_shipping',
    title: 'Entrega rápida',
    description: 'Recibe tu pedido en 24-48 horas en todo el país. Entrega express disponible.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: 'verified',
    title: 'Productos originales',
    description: '100% garantizados. Todos nuestros productos son originales con garantía oficial.',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
  },
  {
    icon: 'support_agent',
    title: 'Soporte 24/7',
    description: 'Estamos disponibles por WhatsApp para resolver cualquier duda o inconveniente.',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: 'price_check',
    title: 'Mejor precio',
    description: 'Garantizamos los mejores precios del mercado. Si encuentras más barato, lo igualamos.',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustSection() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">Por qué elegirnos</p>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
            Tu satisfacción es nuestra prioridad
          </h2>
          <p className="font-body text-on-surface-variant mt-4 max-w-xl mx-auto">
            Llevamos años ayudando a nuestros clientes a conseguir la mejor tecnología al mejor precio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              className="bg-surface-container-lowest rounded-3xl p-6 shadow-ambient flex flex-col gap-4 hover:shadow-card transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${feat.bg} rounded-2xl flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-2xl ${feat.color}`}>{feat.icon}</span>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-on-surface text-base mb-1">{feat.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{feat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-secondary rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
          </div>
          <div className="relative">
            <span className="material-symbols-outlined text-white/40 text-6xl mb-4 block">format_quote</span>
            <p className="font-headline text-white text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              "Compré mi MacBook Pro y llegó en menos de 24 horas. El servicio por WhatsApp fue increíble. ¡Totalmente recomendado!"
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg">person</span>
              </div>
              <div className="text-left">
                <p className="font-headline font-semibold text-white text-sm">María R.</p>
                <p className="font-body text-white/60 text-xs">Cliente satisfecho</p>
              </div>
              <div className="ml-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-yellow-300 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
