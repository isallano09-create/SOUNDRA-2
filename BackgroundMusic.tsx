import React from 'react';
import { Volume2, VolumeX, Music, Loader2 } from 'lucide-react';
import { getRunwayMusicUrl } from '../services/geminiService';
import { motion, AnimatePresence } from 'motion/react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Pre-fetch URL so it's ready for the user click
  React.useEffect(() => {
    const preFetch = async () => {
      try {
        const url = await getRunwayMusicUrl();
        setAudioUrl(url);
      } catch (e) {
        console.error("Pre-fetch music failed", e);
      }
    };
    preFetch();
  }, []);

  const handleTogglePlay = async () => {
    if (!audioUrl) {
      setIsLoading(true);
      try {
        const url = await getRunwayMusicUrl();
        setAudioUrl(url);
        setIsPlaying(true);
      } catch (error) {
        console.error("Music initialization failed:", error);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Playback failed:", err);
      }
    }
  };

  const handleNextTrack = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    try {
      const url = await getRunwayMusicUrl();
      setAudioUrl(url);
      // Wait for it to be set then play
      setTimeout(() => {
        audioRef.current?.play().catch(console.error);
        setIsPlaying(true);
      }, 100);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = 0.4; // Subtle volume
    }
  }, [isMuted]);

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center gap-4">
      <AnimatePresence>
        {!isPlaying && !isLoading && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleTogglePlay}
            className="glass p-4 rounded-full flex items-center gap-3 hover:bg-brand-neon hover:text-brand-black transition-all group shadow-xl shadow-brand-neon/10"
          >
            <Music size={20} className="group-hover:animate-bounce" />
            <span className="text-[10px] font-bold tracking-widest uppercase">Activar Pasarela Sonora</span>
          </motion.button>
        )}
      </AnimatePresence>

      {isLoading && (
        <div className="glass p-4 rounded-full flex items-center gap-3">
          <Loader2 size={20} className="animate-spin text-brand-neon" />
          <span className="text-[10px] font-bold tracking-widest uppercase opacity-50 text-white">Sintonizando...</span>
        </div>
      )}

      {isPlaying && !isLoading && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="glass p-4 rounded-full hover:bg-white/10 transition-colors text-white"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <div 
            onClick={handleTogglePlay}
            className="glass px-6 py-4 rounded-full flex items-center gap-4 cursor-pointer hover:bg-white/5 group border border-white/5 active:scale-95 transition-transform"
            title="Pause"
          >
            <div className="flex gap-1 items-end h-4">
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div 
                  key={i}
                  animate={{ height: isMuted || !isPlaying ? 4 : [4, 16, 8, 12, 4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-brand-neon"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold tracking-widest uppercase opacity-50 text-white leading-none mb-1">SOUNDRA RUNWAY CHANNEL</span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/90">
                LIVE ON AIR
              </span>
            </div>
          </div>
          
          <button
            onClick={handleNextTrack}
            className="glass p-4 rounded-full hover:bg-white/10 transition-colors text-white"
            title="Siguiente pista"
          >
            <Music size={16} />
          </button>
        </div>
      )}

      {audioUrl && (
        <audio 
          ref={audioRef} 
          src={audioUrl} 
          loop 
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => {
            console.error("Audio error, trying next track");
            handleNextTrack({ stopPropagation: () => {} } as any);
          }}
        />
      )}
    </div>
  );
}
