import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTISTS } from '../data/mockData';
import { Music, ExternalLink, Play, X } from 'lucide-react';

export default function ArtistSection() {
  const [activePlayTrack, setActivePlayTrack] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    
    // Handle track URLs
    if (url.includes('spotify.com/track/')) {
      const match = url.match(/\/track\/([a-zA-Z0-9_-]+)/);
      const trackId = match ? match[1] : '';
      return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
    }
    
    // Handle artist URLs for embedding if needed (though usually we link them)
    if (url.includes('spotify.com/artist/')) {
      const match = url.match(/\/artist\/([a-zA-Z0-9_-]+)/);
      const artistId = match ? match[1] : '';
      return `https://open.spotify.com/embed/artist/${artistId}?utm_source=generator`;
    }
    
    return url;
  };

  return (
    <section id="artists" className="py-24 px-6 bg-brand-black relative overflow-hidden">
      {/* Y2K Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-2 block">Colaboraciones</span>
            <h2 className="text-6xl font-bold tracking-tighter leading-none">ARTISTA <br /> DEL MES</h2>
          </div>
          <p className="text-sm opacity-50 max-w-xs text-right hidden md:block">
            Exploramos la sinergia entre creadores sonoros y el lenguaje visual de Soundra.
          </p>
        </div>

        {ARTISTS.map((artist) => (
          <div key={artist.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl group"
            >
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent mix-blend-overlay" />
              
              <button 
                onClick={() => setActivePlayTrack(artist.trackUrl)}
                className="absolute bottom-8 right-8 w-16 h-16 bg-brand-purple text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-brand-purple/40 group/play"
              >
                <Play size={24} fill="white" className="group-hover/play:scale-110 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-mono font-bold text-brand-purple tracking-widest uppercase mb-4 block">
                  {artist.genre}
                </span>
                <h3 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
                  {artist.name}
                </h3>
                <p className="text-xl text-brand-beige/70 leading-relaxed max-w-lg italic">
                  "{artist.bio}"
                </p>
              </div>

              <div className="space-y-6">
                <div 
                  onClick={() => setActivePlayTrack(artist.trackUrl)}
                  className="glass p-6 rounded-2xl flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                      <Music size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest">Featured Track</h4>
                      <p className="text-xs opacity-50">{artist.featuredTrack}</p>
                    </div>
                  </div>
                  <ExternalLink size={18} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex-grow py-4 bg-white text-brand-black rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-brand-purple hover:text-white transition-all transform active:scale-95"
                  >
                    Ver Colección Exclusiva
                  </button>
                  <button 
                    onClick={() => window.open(artist.spotifyUrl, '_blank')}
                    className="px-8 py-4 border border-white/10 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all transform active:scale-95 flex items-center gap-2"
                  >
                    Spotify
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Track Player Modal */}
      <AnimatePresence>
        {activePlayTrack && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/90 backdrop-blur-sm"
            onClick={() => setActivePlayTrack(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-black border border-white/10 p-4 rounded-3xl w-full max-w-xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setActivePlayTrack(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                Cerrar <X size={20} />
              </button>
              
              <iframe 
                style={{ borderRadius: '12px' }}
                src={getEmbedUrl(activePlayTrack)}
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
