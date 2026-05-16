import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Music2 } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="aspect-[3/4] overflow-hidden bg-brand-gray/10 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            // Use a fashion-specific seed for fallbacks
            img.src = `https://picsum.photos/seed/fashion-${product.id}/800/1000`;
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          <button 
            onClick={() => addToCart(product)}
            className="w-12 h-12 bg-white text-brand-black rounded-full flex items-center justify-center hover:bg-brand-neon transition-colors"
          >
            <ShoppingCart size={20} />
          </button>
          <button 
            onClick={() => document.getElementById('moods')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 glass text-[10px] font-bold tracking-widest uppercase hover:bg-white/20 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Music2 size={14} />
            Ver Experiencia
          </button>
        </div>

        {/* Mood Tag */}
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
          <span className="text-[9px] font-bold tracking-widest uppercase opacity-80">
            {product.mood}
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold tracking-tight group-hover:text-brand-neon transition-colors">
            {product.name}
          </h3>
          <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">
            {product.category}
          </p>
        </div>
        <span className="text-sm font-mono font-medium">
          ${product.price}
        </span>
      </div>
    </motion.div>
  );
}
