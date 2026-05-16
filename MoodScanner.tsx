import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { scanMood } from '../services/geminiService';
import { Search, Music, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface MoodScannerProps {
  onMoodSelect?: (mood: string) => void;
}

export default function MoodScanner({ onMoodSelect }: MoodScannerProps) {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const moodImages: Record<string, string> = {
    chill: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800',
    hype: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=800',
    sad: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=800',
    night: 'https://images.unsplash.com/photo-1514525253344-f81bad3b7431?auto=format&fit=crop&q=80&w=800',
    urban: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80&w=800',
    elegant: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
  };

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const data = await scanMood(input);
      if (data) {
        setResult(data);
      } else {
        setError("Lo sentimos, no pudimos procesar tu mood. Intenta con otra frase.");
      }
    } catch (err) {
      setError("Hubo un error de conexión. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-brand-beige text-brand-black">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-brand-black/40 uppercase mb-2 block">Función Pro</span>
        <h2 className="text-6xl font-bold tracking-tighter mb-8 leading-none">ESCANEA TU MOOD</h2>
        <p className="text-brand-black/60 mb-12 max-w-xl mx-auto">
          Escribe una canción, una frase o cómo te sientes hoy. Nuestra IA curará una experiencia visual y musical exclusiva para ti.
        </p>

        <form onSubmit={handleScan} className="relative max-w-2xl mx-auto mb-16">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ej: 'Midnight City de M83' o 'Me siento con mucha energía hoy'"
            className="w-full bg-white border-2 border-brand-black/10 px-8 py-6 rounded-full text-lg focus:outline-none focus:border-brand-black transition-all pr-20"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="absolute right-3 top-3 bottom-3 aspect-square bg-brand-black text-white rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-brand-black transition-all disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Search size={24} />}
          </button>
        </form>

        {error && (
          <p className="text-red-500 mb-8 font-medium">{error}</p>
        )}

        <AnimatePresence>
          {result && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass bg-white/80 p-12 rounded-[3rem] text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-brand-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full">
                    {result.mood}
                  </span>
                  <Sparkles size={16} className="text-brand-neon" />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter mb-4 leading-tight uppercase">
                  {result.playlist_name}
                </h3>
                <p className="text-lg italic opacity-70 mb-8">
                  "{result.description}"
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Music size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest">Recomendación</h4>
                      <p className="text-sm opacity-60">{result.outfit_recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-square bg-brand-black rounded-2xl overflow-hidden relative group">
                <img 
                  src={moodImages[result.mood as string] || moodImages.urban} 
                  alt="Vibe Recommendation"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => onMoodSelect?.(result.mood)}
                    className="px-8 py-4 bg-white text-brand-black font-bold uppercase tracking-widest text-[10px] hover:bg-brand-neon transition-colors"
                  >
                    Ver Colección {result.mood}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
