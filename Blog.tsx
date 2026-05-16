import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  content: string;
  date: string;
}

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    { 
      id: 1, 
      title: 'La evolución del Streetwear Y2K', 
      category: 'Cultura', 
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
      date: 'Mayo 12, 2024',
      content: 'El fenómeno del Y2K ha regresado con una fuerza imparable. Desde los pantalones de tiro bajo hasta las estéticas futuristas metálicas, el streetwear actual está bebiendo directamente de la nostalgia de principios de milenio. Soundra explora cómo esta tendencia no es solo visual, sino que viene acompañada de una curaduría sonora de ritmos electrónicos y glitches que definen la era digital actual.'
    },
    { 
      id: 2, 
      title: 'Cómo el Lo-Fi cambió la moda urbana', 
      category: 'Música', 
      image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800',
      date: 'Mayo 08, 2024',
      content: 'Más que un género musical, el Lo-Fi se ha convertido en un estilo de vida. La estética "chill" influenciada por los ritmos lentos y nostálgicos ha dictado una nueva dirección en la moda: el confort elevado. Siluetas oversized, texturas suaves y paletas de colores deslavados son el uniforme de una generación que busca la tranquilidad en medio del caos urbano.'
    },
    { 
      id: 3, 
      title: 'Drops exclusivos: Soundra x Luna Rae', 
      category: 'Tendencias', 
      image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&q=80&w=800',
      date: 'Mayo 01, 2024',
      content: 'Nuestra colaboración más reciente con la artista visual Luna Rae ha llegado. Una colección limitada que fusiona el arte digital con telas técnicas de alta calidad. Cada prenda incluye un código QR único que desbloquea una experiencia sonora inmersiva diseñada específicamente para complementar el diseño de la pieza.'
    },
  ];

  return (
    <section id="journal" className="py-24 px-6 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-neon uppercase mb-2 block">Cultura</span>
            <h2 className="text-6xl font-bold tracking-tighter leading-none">SOUNDRA <br /> JOURNAL</h2>
          </div>
          <button 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-neon transition-colors"
          >
            Ver Todo <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative bg-white/5">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
                  <span className="text-[8px] font-bold tracking-widest uppercase opacity-80">{article.category}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tighter mb-4 group-hover:text-brand-neon transition-colors">
                {article.title}
              </h3>
              <p className="text-sm opacity-50 mb-6 line-clamp-2">
                Exploramos la intersección entre las tendencias visuales y las frecuencias sonoras que definen nuestra generación.
              </p>
              <button 
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform"
              >
                Leer Más <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/90 backdrop-blur-xl"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="max-w-4xl w-full max-h-[90vh] bg-brand-black border border-white/10 rounded-3xl overflow-hidden overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="text-brand-neon text-xs font-bold tracking-widest uppercase mb-4 block">
                    {selectedArticle.category} • {selectedArticle.date}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>
              <div className="p-12 md:p-16">
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl md:text-2xl opacity-80 leading-relaxed font-light mb-8 italic border-l-4 border-brand-neon pl-8">
                    Exploramos la intersección entre las tendencias visuales y las frecuencias sonoras que definen nuestra generación.
                  </p>
                  <div className="text-lg opacity-60 leading-loose space-y-6">
                    {selectedArticle.content.split('\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <p>
                      En Soundra Journal, no solo reportamos tendencias, las escuchamos. Nuestra misión es crear un ecosistema donde la moda se siente tan bien como suena tu track favorito de late-night.
                    </p>
                  </div>
                  
                  <div className="mt-16 pt-16 border-t border-white/5 flex justify-center">
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="px-12 py-5 bg-white text-brand-black rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-brand-neon transition-all"
                    >
                      Cerrar Artículo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

