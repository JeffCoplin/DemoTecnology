import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice, getWhatsAppLink } from '../data/products';

const badgeStyles = {
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
  error: 'bg-error/10 text-error',
};

export default function ProductDetail({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const specEntries = Object.entries(product.specs).filter(([, v]) => v !== null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-on-surface/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-3xl overflow-hidden w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-ambient"
        >
          {/* Image */}
          <div className="relative aspect-video bg-surface-container-low">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 glass-card rounded-full flex items-center justify-center shadow-card"
            >
              <span className="material-symbols-outlined text-on-surface">close</span>
            </button>
            {product.badge && (
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm ${badgeStyles[product.badgeColor] || 'bg-surface/80 text-on-surface'}`}>
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4">
            <div>
              <p className="font-body text-on-surface-variant text-xs uppercase tracking-widest capitalize mb-1">
                {product.category}
              </p>
              <h2 className="font-headline font-bold text-on-surface text-2xl tracking-tight">
                {product.name}
              </h2>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mt-2">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="font-headline font-bold text-on-surface text-3xl">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-body text-on-surface-variant text-sm line-through pb-1">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-error/10 text-error text-xs font-medium px-2 py-0.5 rounded-full pb-1">
                    -{discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Specs */}
            {specEntries.length > 0 && (
              <div className="bg-surface-container-low rounded-2xl p-4">
                <p className="font-headline font-semibold text-on-surface text-sm mb-3">Especificaciones</p>
                <div className="grid grid-cols-2 gap-3">
                  {specEntries.map(([key, value]) => (
                    <div key={key}>
                      <p className="font-body text-on-surface-variant text-xs capitalize">
                        {key === 'ram' ? 'RAM' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="font-body text-on-surface text-sm font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => { onAddToCart(product); onClose(); }}
                className="flex-1 flex items-center justify-center gap-2 bg-surface-container text-on-surface py-3.5 rounded-2xl font-medium text-sm hover:bg-surface-container-high transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                Agregar al carrito
              </button>
              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-3.5 rounded-2xl font-medium text-sm hover:bg-secondary-container transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
