import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function FeaturedProducts({ onAddToCart, onViewDetail }) {
  const navigate = useNavigate();
  const featured = products.filter((p) => p.featured);

  return (
    <section id="destacados" className="py-20 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">Selección premium</p>
            <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
              Productos destacados
            </h2>
          </div>
          <button
            onClick={() => navigate('/catalogo')}
            className="hidden sm:flex items-center gap-1 text-secondary font-medium text-sm hover:gap-2 transition-all duration-200"
          >
            Ver todos
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetail={onViewDetail}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
