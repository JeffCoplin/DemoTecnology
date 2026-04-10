import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice, getWhatsAppLink } from '../data/products';

export default function CartModal({ isOpen, onClose, cart, onRemove, onUpdateQty }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const whatsappMessage = cart.length > 0
    ? encodeURIComponent(
        `Hola, quiero hacer un pedido:\n\n${cart
          .map((item) => `• ${item.name} x${item.qty} — ${formatPrice(item.price * item.qty)}`)
          .join('\n')}\n\n*Total: ${formatPrice(total)}*`
      )
    : '';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 flex flex-col shadow-ambient"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface">shopping_cart</span>
                <h2 className="font-headline font-bold text-on-surface text-lg">Carrito</h2>
                {cart.length > 0 && (
                  <span className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cart.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <span className="material-symbols-outlined text-5xl text-on-surface-variant/30">shopping_cart</span>
                  <p className="font-headline font-semibold text-on-surface">Tu carrito está vacío</p>
                  <p className="font-body text-on-surface-variant text-sm">Agrega productos para verlos aquí</p>
                  <button
                    onClick={onClose}
                    className="mt-2 text-secondary font-medium text-sm hover:underline"
                  >
                    Seguir comprando
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-3 bg-surface-container-low rounded-2xl p-3"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-headline font-semibold text-on-surface text-sm line-clamp-2 leading-tight">
                          {item.name}
                        </p>
                        <p className="font-body text-secondary font-medium text-sm mt-1">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty - 1)}
                            className="w-6 h-6 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="font-body text-on-surface text-sm font-medium w-5 text-center">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.qty + 1)}
                            className="w-6 h-6 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="ml-auto w-6 h-6 rounded-full hover:bg-error/10 flex items-center justify-center transition-colors text-on-surface-variant hover:text-error"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-4 border-t border-outline-variant/30 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-body text-on-surface-variant text-sm">Total</span>
                  <span className="font-headline font-bold text-on-surface text-xl">{formatPrice(total)}</span>
                </div>
                <a
                  href={`https://wa.me/18091234567?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20c15e] text-white py-3.5 rounded-2xl font-medium transition-all duration-300"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Pedir por WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
