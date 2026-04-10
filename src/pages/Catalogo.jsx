import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCatalog from '../components/ProductCatalog';

export default function Catalogo({ onAddToCart, onViewDetail }) {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(
    location.state?.category || 'todos'
  );

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

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
              Technology Store RD
            </p>
            <h1 className="font-headline text-5xl font-bold text-on-surface tracking-tight">
              Catálogo de Productos
            </h1>
            <p className="font-body text-on-surface-variant mt-3 text-lg max-w-xl">
              Encuentra los mejores productos tecnológicos al mejor precio. Entrega rápida en todo el país.
            </p>
          </motion.div>
        </div>
      </section>

      <ProductCatalog
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onAddToCart={onAddToCart}
        onViewDetail={onViewDetail}
      />
    </main>
  );
}
