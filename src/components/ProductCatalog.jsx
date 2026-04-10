import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductCatalog({ activeCategory, onCategoryChange, onAddToCart, onViewDetail }) {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filtered = useMemo(() => {
    let list = products;

    if (activeCategory !== 'todos') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, search, sortBy]);

  return (
    <section id="catalogo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-body text-secondary text-sm font-medium uppercase tracking-widest mb-2">Catálogo completo</p>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
            Todos los productos
          </h2>
        </motion.div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface-container-low pl-10 pr-4 py-3 rounded-2xl text-sm font-body text-on-surface placeholder:text-on-surface-variant/60 outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-surface-container-low text-on-surface text-sm font-body px-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-secondary/30 transition-all duration-200 cursor-pointer"
          >
            <option value="default">Ordenar por</option>
            <option value="price-asc">Menor precio</option>
            <option value="price-desc">Mayor precio</option>
            <option value="name">Nombre A-Z</option>
          </select>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
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

        {/* Results count */}
        <p className="font-body text-on-surface-variant text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewDetail={onViewDetail}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/40">search_off</span>
              <p className="font-headline font-semibold text-on-surface text-lg">No encontramos resultados</p>
              <p className="font-body text-on-surface-variant text-sm">Intenta con otra búsqueda o categoría</p>
              <button
                onClick={() => { setSearch(''); onCategoryChange('todos'); }}
                className="mt-2 text-secondary font-medium text-sm hover:underline"
              >
                Limpiar filtros
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
