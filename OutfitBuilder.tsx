import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data/mockData';
import { Product, OutfitCombination } from '../types';
import { Plus, Music, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OutfitBuilder() {
  const [outfit, setOutfit] = React.useState<OutfitCombination>({});
  const [isGenerating, setIsGenerating] = React.useState(false);

  const categories = {
    accessory: PRODUCTS.filter(p => p.type === 'accessory'),
    top: PRODUCTS.filter(p => p.type === 'top'),
    bottom: PRODUCTS.filter(p => p.type === 'bottom'),
    shoes: PRODUCTS.filter(p => p.type === 'shoes'),
  };

  const handleSelect = (type: keyof OutfitCombination, product: Product) => {
    setOutfit(prev => ({ ...prev, [type]: product }));
  };

  const handleComplete = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00FF00', '#E8E1D9', '#A855F7']
      });
    }, 1500);
  };

  const clearOutfit = () => setOutfit({});

  return (
    <section id="outfit-builder" className="py-24 px-6 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-neon/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="sticky top-24">
          <span className="text-xs font-bold tracking-widest text-brand-neon uppercase mb-2 block">Styling Lab</span>
          <h2 className="text-6xl font-bold tracking-tighter mb-6 leading-none">EDITORIAL <br /> BUILDER</h2>
          <p className="text-brand-beige/60 mb-12 max-w-md">
            Organiza visualmente las piezas de la colección SOUNDRA en una composición anatómica profesional.
          </p>

          <div className="space-y-10">
            {Object.entries(categories).map(([key, items]) => (
              items.length > 0 && (
                <div key={key} className="space-y-4">
                  <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-50 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white/20" />
                    {key === 'top' ? 'Parte Superior' : 
                     key === 'bottom' ? 'Parte Inferior' : 
                     key === 'shoes' ? 'Calzado' : 'Accesorios'}
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                    {items.map(p => (
                      <button 
                        key={p.id}
                        onClick={() => handleSelect(key as keyof OutfitCombination, p)}
                        className={`flex-shrink-0 group relative w-24 h-24 border transition-all ${outfit[key as keyof OutfitCombination]?.id === p.id ? 'border-brand-neon bg-brand-neon/5' : 'border-white/10 grayscale hover:grayscale-0 opacity-40 hover:opacity-100'}`}
                      >
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-brand-neon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Plus size={20} className="text-brand-black" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <button 
              onClick={handleComplete}
              disabled={!outfit.top && !outfit.bottom || isGenerating}
              className="px-12 py-5 bg-brand-neon text-brand-black font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              {isGenerating ? <RefreshCw className="animate-spin" /> : <Sparkles size={18} />}
              {isGenerating ? 'Curando Outfit...' : 'Completar Look'}
            </button>
            <button 
              onClick={clearOutfit}
              className="px-8 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-3"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="relative min-h-[900px] bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 flex items-start justify-center overflow-hidden">
          {/* Editorial Background Elements */}
          <div className="absolute top-12 left-12 text-[120px] font-bold text-white/[0.03] leading-none select-none tracking-tighter italic">LAB</div>
          <div className="absolute bottom-12 right-12 text-[120px] font-bold text-white/[0.03] leading-none select-none tracking-tighter italic">002</div>
          
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <AnimatePresence mode="wait">
            {outfit.top || outfit.bottom || outfit.shoes || outfit.accessory ? (
              <motion.div 
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full flex flex-col items-center pt-8"
              >
                {/* Accessory Slot (Anatomical: Top of Head) */}
                {outfit.accessory && (
                  <motion.div 
                    layoutId={`preview-${outfit.accessory.id}`}
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="z-50 relative -mb-16"
                  >
                    <div className="absolute -top-4 right-0 bg-brand-neon px-2 py-1 text-[8px] font-black text-brand-black uppercase tracking-tighter">Accesorio</div>
                    <img 
                      src={outfit.accessory.image} 
                      className="w-44 h-44 object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                      style={{ objectPosition: outfit.accessory.imagePosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
  
                {/* Top Slot (Anatomical: Upper Torso) */}
                {outfit.top && (
                  <motion.div 
                    layoutId={`preview-${outfit.top.id}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="z-40 relative"
                  >
                    <div className="absolute top-10 -left-6 bg-white px-2 py-1 text-[8px] font-black text-brand-black uppercase tracking-tighter mix-blend-difference">Parte Superior</div>
                    <img 
                      src={outfit.top.image} 
                      className="w-[400px] h-[400px] object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                      style={{ objectPosition: outfit.top.imagePosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
  
                {/* Bottom Slot (Anatomical: Lower Torso/Legs) */}
                {outfit.bottom && (
                  <motion.div 
                    layoutId={`preview-${outfit.bottom.id}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="z-30 relative -mt-32"
                  >
                    <div className="absolute top-20 -right-6 bg-white px-2 py-1 text-[8px] font-black text-brand-black uppercase tracking-tighter mix-blend-difference">Parte Inferior</div>
                    <img 
                      src={outfit.bottom.image} 
                      className="w-[380px] h-[450px] object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" 
                      style={{ objectPosition: outfit.bottom.imagePosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
  
                {/* Shoes Slot (Anatomical: Ground) */}
                {outfit.shoes && (
                  <motion.div 
                    layoutId={`preview-${outfit.shoes.id}`}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="z-20 relative -mt-20"
                  >
                    <div className="absolute bottom-4 -left-4 bg-brand-neon px-2 py-1 text-[8px] font-black text-brand-black uppercase tracking-tighter">Calzado</div>
                    <img 
                      src={outfit.shoes.image} 
                      className="w-56 h-56 object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                      style={{ objectPosition: outfit.shoes.imagePosition || 'center' }}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
  
                {/* Aesthetic Detail Labels */}
                <div className="absolute top-24 right-0 w-px h-64 bg-gradient-to-b from-transparent via-brand-neon to-transparent opacity-20 hidden md:block" />
                <div className="absolute top-48 left-0 w-px h-64 bg-gradient-to-b from-transparent via-white to-transparent opacity-10 hidden md:block" />
  
                {/* Editorial Info Footer */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/5 pt-8">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-neon uppercase mb-4 block">Composition Summary</span>
                    <div className="flex flex-col gap-1">
                      {outfit.top && <p className="text-[11px] font-bold uppercase tracking-tight opacity-50">{outfit.top.name}</p>}
                      {outfit.bottom && <p className="text-[11px] font-bold uppercase tracking-tight opacity-50">{outfit.bottom.name}</p>}
                      {outfit.accessory && <p className="text-[11px] font-bold uppercase tracking-tight opacity-50">{outfit.accessory.name}</p>}
                      <p className="text-3xl font-bold mt-4 tracking-tighter">
                        ${( (outfit.top?.price || 0) + (outfit.bottom?.price || 0) + (outfit.shoes?.price || 0) + (outfit.accessory?.price || 0) )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center ml-auto mb-4 grayscale">
                      <Music size={14} className="opacity-40" />
                    </div>
                    <h3 className="text-5xl font-black tracking-tighter leading-none mb-1">SOUNDRA</h3>
                    <p className="text-[9px] font-bold tracking-[0.5em] opacity-30 uppercase">Styling Laboratory v.1.0</p>
                  </div>
                </div>

                {isGenerating && (
                  <div className="absolute inset-0 bg-brand-black/20 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-8 z-50 rounded-3xl">
                    <div className="w-12 h-12 border-2 border-brand-neon border-t-transparent rounded-full animate-spin mb-4" />
                    <h3 className="text-xl font-bold tracking-tighter">REGISTRANDO...</h3>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="text-center p-12 relative">
                <div className="w-32 h-32 border border-dashed border-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <Plus className="opacity-20" size={40} />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter opacity-30 leading-tight">
                  LABORATORIO <br /> DE ESTILO
                </h3>
                <p className="text-xs tracking-widest opacity-20 uppercase mt-4">SOUNDRA ASSETS ONLY</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
