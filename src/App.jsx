import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CartModal from './components/CartModal';
import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function AnimatedRoutes({ onAddToCart, onViewDetail }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home onAddToCart={onAddToCart} onViewDetail={onViewDetail} />} />
          <Route path="/catalogo" element={<Catalogo onAddToCart={onAddToCart} onViewDetail={onViewDetail} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => i.id !== id));
    } else {
      setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
    }
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar
          cartCount={cartCount}
          onCartOpen={() => setCartOpen(true)}
        />

        <div className="flex-1">
          <AnimatedRoutes
            onAddToCart={addToCart}
            onViewDetail={setSelectedProduct}
          />
        </div>

        <Footer />
        <WhatsAppButton />

        <CartModal
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
        />

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
