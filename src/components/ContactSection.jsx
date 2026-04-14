import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data/products';

const contactItems = [
  {
    icon: 'chat',
    label: 'WhatsApp',
    value: '+00 (000) 000-0000',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: 'location_on',
    label: 'Ubicación',
    value: 'Tu Ciudad, Tu País',
    href: null,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
  },
  {
    icon: 'schedule',
    label: 'Horario',
    value: 'Lun - Sáb: 8am - 8pm',
    href: null,
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">Contáctanos</p>
            <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-4">
              Estamos aquí para ayudarte
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              ¿Tienes preguntas sobre algún producto? ¿Quieres hacer un pedido? Escríbenos por WhatsApp y te atendemos en minutos.
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined text-xl ${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-body text-on-surface-variant text-xs mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-headline font-semibold text-on-surface hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-headline font-semibold text-on-surface">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-lowest rounded-3xl p-8 shadow-ambient"
          >
            <div className="text-center flex flex-col gap-6">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-3xl flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-4xl text-[#25D366]">chat</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface text-2xl mb-2">
                  ¡Compra por WhatsApp!
                </h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                  Envíanos un mensaje con el producto que quieres y te damos todos los detalles. Pago fácil, entrega rápida.
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero hacer un pedido')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20c15e] text-white py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-card"
              >
                <span className="material-symbols-outlined">chat</span>
                Iniciar conversación
              </a>
              <div className="flex justify-center gap-6 text-on-surface-variant text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  Respuesta rápida
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  Sin comisiones
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
