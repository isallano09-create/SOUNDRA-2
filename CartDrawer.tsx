import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-brand-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-black border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 flex items-center justify-between border-bottom border-white/5">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-brand-neon" />
                <h2 className="text-xl font-bold tracking-tighter">TU CARRITO ({totalItems})</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p className="text-sm font-bold uppercase tracking-widest">Tu carrito está vacío</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-xs underline underline-offset-4 hover:text-brand-neon transition-colors"
                  >
                    Seguir explorando
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 flex-shrink-0 bg-brand-gray/10 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-bold tracking-tight">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="opacity-0 group-hover:opacity-50 hover:opacity-100 transition-opacity"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{item.category}</p>
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div className="flex items-center border border-white/10 rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-brand-neon transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-mono">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-brand-neon transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-mono font-medium">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white/5 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-50">Subtotal</span>
                  <span className="text-2xl font-mono font-bold">${totalPrice}</span>
                </div>
                <p className="text-[10px] opacity-40 uppercase tracking-widest">Impuestos y envío calculados al finalizar la compra.</p>
                <button className="w-full py-4 bg-brand-neon text-brand-black font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform shadow-lg shadow-brand-neon/20">
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
