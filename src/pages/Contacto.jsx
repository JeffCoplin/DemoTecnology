import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data/products';

const contactItems = [
  {
    icon: 'chat',
    label: 'WhatsApp',
    value: '+1 (809) 123-4567',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero información')}`,
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
    description: 'Respuesta en minutos. Disponible todos los días.',
  },
  {
    icon: 'location_on',
    label: 'Ubicación',
    value: 'Santo Domingo, República Dominicana',
    href: null,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    description: 'Envíos a todo el territorio nacional.',
  },
  {
    icon: 'schedule',
    label: 'Horario de atención',
    value: 'Lun – Sáb: 8:00am – 8:00pm',
    href: null,
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    description: 'Domingo: 10:00am – 4:00pm',
  },
  {
    icon: 'local_shipping',
    label: 'Envíos',
    value: 'Entrega en 24–48 horas',
    href: null,
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    description: 'Express disponible para Santo Domingo.',
  },
];

const faqs = [
  {
    q: '¿Cómo hago un pedido?',
    a: 'Escríbenos por WhatsApp con el nombre del producto y te guiamos en todo el proceso de compra.',
  },
  {
    q: '¿Los productos son originales?',
    a: 'Sí, todos nuestros productos son 100% originales con garantía oficial del fabricante.',
  },
  {
    q: '¿Cuánto tarda la entrega?',
    a: 'Entregamos en 24-48 horas en todo el país. Para Santo Domingo ofrecemos entrega express el mismo día.',
  },
  {
    q: '¿Aceptan tarjetas de crédito?',
    a: 'Aceptamos efectivo, transferencia bancaria y tarjetas de crédito/débito. Coordinamos el pago por WhatsApp.',
  },
];

export default function Contacto() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">
              Estamos aquí para ti
            </p>
            <h1 className="font-headline text-5xl font-bold text-on-surface tracking-tight">
              Contáctanos
            </h1>
            <p className="font-body text-on-surface-variant mt-3 text-lg max-w-xl">
              Escríbenos por WhatsApp o consulta la información de contacto. ¡Respondemos rápido!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface-container-lowest rounded-3xl p-6 shadow-ambient flex flex-col gap-4"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-2xl ${item.color}`}>{item.icon}</span>
                </div>
                <div>
                  <p className="font-body text-on-surface-variant text-xs mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline font-semibold text-on-surface hover:text-secondary transition-colors block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-headline font-semibold text-on-surface">{item.value}</p>
                  )}
                  <p className="font-body text-on-surface-variant text-xs mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main contact area */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary rounded-3xl p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between gap-8"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/5" />
              </div>
              <div className="relative">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-3xl">chat</span>
                </div>
                <h2 className="font-headline font-bold text-white text-3xl mb-3">
                  ¡Escríbenos ahora!
                </h2>
                <p className="font-body text-white/70 text-base leading-relaxed">
                  La forma más rápida de contactarnos. Te atendemos personalmente y te ayudamos a encontrar el producto perfecto.
                </p>
              </div>
              <div className="relative flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero información sobre sus productos')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20c15e] text-white py-4 rounded-2xl font-medium text-base transition-all duration-300 hover:shadow-card"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Abrir WhatsApp
                </a>
                <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Sin costo
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Respuesta inmediata
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <h2 className="font-headline font-bold text-on-surface text-2xl mb-2">
                Preguntas frecuentes
              </h2>
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-ambient"
                >
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                    <span className="font-headline font-semibold text-on-surface text-sm pr-4">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-lg flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-4">
                    <p className="font-body text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
