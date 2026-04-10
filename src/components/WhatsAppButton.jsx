import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../data/products';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-on-surface text-white px-4 py-2 rounded-2xl text-sm font-body shadow-ambient whitespace-nowrap"
          >
            ¿Necesitas ayuda?
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-on-surface rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito ayuda con un producto')}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-card hover:shadow-ambient transition-shadow duration-300"
        aria-label="Chat por WhatsApp"
      >
        <span className="material-symbols-outlined text-white text-2xl">chat</span>

        {/* Ping animation */}
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>
    </div>
  );
}
