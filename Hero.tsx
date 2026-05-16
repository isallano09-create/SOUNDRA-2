import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source 
            src="https://ljfzftlfflhzunhuuhbj.supabase.co/storage/v1/object/sign/videos/Girl_moving_between_202604111120.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNDNlODM1NC1iODc2LTRiOWQtYmJlOC1mM2I4MjI1YWMxMjciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ2aWRlb3MvR2lybF9tb3ZpbmdfYmV0d2Vlbl8yMDI2MDQxMTExMjAubXA0IiwiaWF0IjoxNzc1OTI0NDYwLCJleHAiOjE4MDc0NjA0NjB9.ffaupPccU9HiL1YjaQEY6QGBp7PVVGWZRBNro_bohKA" 
            type="video/mp4" 
          />
        </video>
        
        {/* Ambient Animation Layer (always visible fallback) */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-neon mb-4 block">
            The Sound of Style
          </span>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.85]">
            SOUNDRA <br />
            <span className="text-brand-beige italic text-5xl md:text-7xl">DRESS THE SOUND</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-neon transition-colors flex items-center gap-2 group cursor-pointer"
            >
              Explorar Colección
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('moods')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Play size={16} fill="white" />
              Ver Experiencia
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
