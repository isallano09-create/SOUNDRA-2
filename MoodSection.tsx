import React from 'react';
import { motion } from 'motion/react';
import { MOODS } from '../data/mockData';
import { cn } from '../lib/utils';
import { Mood } from '../types';

interface MoodSectionProps {
  onMoodSelect: (mood: Mood) => void;
}

export default function MoodSection({ onMoodSelect }: MoodSectionProps) {
  return (
    <section id="moods" className="py-24 px-6 overflow-hidden bg-brand-black">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-xs font-bold tracking-[0.4em] text-brand-neon uppercase mb-4 block">Identidad Sonora</span>
          <h2 className="text-7xl font-bold tracking-tighter leading-none">VIVE EL <br /> MOMENTO</h2>
        </div>
        <p className="text-xs font-bold tracking-widest leading-relaxed opacity-40 max-w-xs md:text-right uppercase">
          Curaduría premium donde la textura de la tela se funde con la frecuencia del sonido.
        </p>
      </div>

      <div className="flex gap-4 md:grid md:grid-cols-3 lg:grid-cols-6 overflow-x-auto pb-12 no-scrollbar snap-x">
        {MOODS.map((mood, index) => (
          <motion.div
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[80vw] md:w-auto aspect-[3/5] relative group cursor-pointer snap-start overflow-hidden rounded-[2rem] md:rounded-none group"
          >
            {/* Background Image */}
            <img 
              src={mood.image} 
              alt={mood.label}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                // Use mood-specific fashion seeds
                img.src = `https://picsum.photos/seed/fashion-mood-${mood.id}/800/1200`;
              }}
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500", `bg-${mood.color}`)} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-4 overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-3 mb-2"
                >
                  <span className={cn("w-1 h-1 rounded-full animate-pulse", `bg-${mood.color}`)} />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white opacity-60 uppercase">
                    {mood.music}
                  </span>
                </motion.div>
                
                <h3 className="text-3xl font-bold tracking-tighter text-white uppercase group-hover:text-brand-neon transition-colors duration-300">
                  {mood.label}
                </h3>
              </div>
              
              <div className="h-px w-0 group-hover:w-full bg-brand-neon transition-all duration-500" />
              
              <p className="mt-4 text-[9px] font-bold tracking-widest text-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 uppercase">
                Ver Colección — {mood.id}
              </p>
            </div>

            {/* Index Label (Recipe 1 style) */}
            <div className="absolute top-8 left-8">
              <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
                0{index + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
