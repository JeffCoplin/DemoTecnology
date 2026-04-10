import { motion } from 'framer-motion';
import { formatPrice, getWhatsAppLink } from '../data/products';

const badgeStyles = {
  secondary: 'bg-secondary/10 text-secondary',
  tertiary: 'bg-tertiary/10 text-tertiary',
  error: 'bg-error/10 text-error',
};

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group bg-surface-container-lowest rounded-3xl overflow-hidden shadow-ambient hover:shadow-card transition-all duration-300 cursor-pointer flex flex-col"
      onClick={() => onViewDetail(product)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.badge && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[product.badgeColor] || 'bg-surface/80 text-on-surface'}`}>
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-error/10 text-error">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick add to cart */}
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-secondary hover:text-white text-on-surface shadow-card"
          aria-label="Agregar al carrito"
        >
          <span className="material-symbols-outlined text-base">add_shopping_cart</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex-1">
          <p className="font-body text-xs text-on-surface-variant capitalize mb-1">{product.category}</p>
          <h3 className="font-headline font-semibold text-on-surface text-base leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="font-body text-on-surface-variant text-xs mt-1 line-clamp-2">{product.description}</p>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="font-headline font-bold text-on-surface text-lg">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="font-body text-on-surface-variant text-xs line-through pb-0.5">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
            className="flex-1 flex items-center justify-center gap-1.5 bg-surface-container text-on-surface py-2 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
            Agregar
          </button>
          <a
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 bg-secondary text-white px-3 py-2 rounded-xl text-sm font-medium hover:bg-secondary-container transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
