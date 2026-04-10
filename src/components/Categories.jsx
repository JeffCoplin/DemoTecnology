import { motion } from 'framer-motion';
import { categories } from '../data/products';

const categoryImages = {
  laptops: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
  moviles: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80',
  tablets: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
  accesorios: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
  consolas: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&q=80',
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Categories({ activeCategory, onCategoryChange }) {
  const displayCategories = categories.filter((c) => c.id !== 'todos');

  return (
    <section id="categorias" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">Categorías</p>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
            Encuentra lo que buscas
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {displayCategories.map((cat) => (
            <motion.button
              key={cat.id}
              variants={item}
              onClick={() => onCategoryChange(cat.id)}
              className={`group relative overflow-hidden rounded-3xl aspect-square cursor-pointer transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'ring-2 ring-secondary ring-offset-2 ring-offset-background'
                  : ''
              }`}
            >
              <img
                src={categoryImages[cat.id]}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-4 gap-1">
                <span className="material-symbols-outlined text-white text-2xl">{cat.icon}</span>
                <span className="font-headline font-semibold text-white text-sm">{cat.label}</span>
              </div>
              {activeCategory === cat.id && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xs">check</span>
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-secondary text-white shadow-card'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className="material-symbols-outlined text-sm">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
