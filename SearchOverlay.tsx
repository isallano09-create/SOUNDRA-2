import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = React.useState('');
  
  const results = React.useMemo(() => {
    if (query.length < 2) return [];
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-md flex flex-col"
        >
          <div className="p-6 flex justify-end">
            <button 
              onClick={onClose}
              className="p-4 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center px-6">
            <div className="w-full max-w-3xl relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-neon" size={24} />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="BUSCAR EN EL SONIDO..."
                className="w-full bg-transparent border-b-2 border-white/20 py-8 px-16 text-3xl md:text-5xl font-bold tracking-tighter text-white placeholder:text-white/10 focus:outline-none focus:border-brand-neon transition-colors uppercase"
              />
            </div>

            <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {results.length > 0 ? (
                  results.map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="w-20 h-24 bg-brand-gray/20 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] font-bold tracking-widest text-brand-neon uppercase mb-1">{product.category}</span>
                        <h3 className="text-lg font-bold text-white tracking-tight">{product.name}</h3>
                        <div className="mt-2 flex items-center gap-2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          VER PRODUCTO <ArrowRight size={14} />
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : query.length >= 2 ? (
                  <div className="col-span-full text-center opacity-30 uppercase tracking-widest text-sm">
                    No se encontraron resultados para "{query}"
                  </div>
                ) : (
                  <div className="col-span-full">
                    <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase block mb-4">Sugerencias</span>
                    <div className="flex flex-wrap gap-2 text-white/50">
                      {['CARGO', 'URBAN', 'Y2K', 'HOODIE', 'NIGHT'].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-bold hover:border-brand-neon hover:text-brand-neon transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
