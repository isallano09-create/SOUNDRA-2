import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MessageCircle, Share2, TrendingUp, X, Send } from 'lucide-react';
import { cn } from '../lib/utils';

interface Post {
  id: number;
  user: string;
  image: string;
  likes: number;
  mood: string;
  isLiked?: boolean;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([
    { 
      id: 1, 
      user: '@vibe_master', 
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800', 
      likes: 1200, 
      mood: 'night' 
    },
    { 
      id: 2, 
      user: '@cyber_punk', 
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800', 
      likes: 850, 
      mood: 'hype' 
    },
    { 
      id: 3, 
      user: '@lofi_girl', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', 
      likes: 2100, 
      mood: 'chill' 
    },
  ]);

  const [activeCommentPost, setActiveCommentPost] = useState<Post | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const handleLike = (id: number) => {
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleShare = (post: Post) => {
    const url = window.location.href;
    navigator.clipboard.writeText(`${url}#post-${post.id}`).then(() => {
      setShareStatus(`Enlace de ${post.user} copiado`);
      setTimeout(() => setShareStatus(null), 2000);
    });
  };

  return (
    <section id="community" className="py-24 px-6 bg-brand-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-neon uppercase mb-2 block">Comunidad</span>
            <h2 className="text-6xl font-bold tracking-tighter leading-none">SOUNDRA <br /> VIBE CHECK</h2>
          </div>
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest opacity-50">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-neon" />
              <span>Trending Outfits</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={16} />
              <span>Top Vibes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img 
                src={post.image} 
                alt={post.user} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://picsum.photos/seed/fashion-${post.id}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold tracking-tight">{post.user}</span>
                  <span className="px-3 py-1 glass text-[8px] font-bold tracking-widest uppercase rounded-full">{post.mood}</span>
                </div>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={cn(
                      "flex items-center gap-2 text-xs font-bold transition-all transform active:scale-125",
                      post.isLiked ? "text-brand-neon" : "hover:text-brand-neon"
                    )}
                  >
                    <Heart size={16} fill={post.isLiked ? "currentColor" : "none"} /> {post.likes}
                  </button>
                  <button 
                    onClick={() => setActiveCommentPost(post)}
                    className="flex items-center gap-2 text-xs font-bold hover:text-brand-neon transition-colors"
                  >
                    <MessageCircle size={16} />
                  </button>
                  <button 
                    onClick={() => handleShare(post)}
                    className="flex items-center gap-2 text-xs font-bold hover:text-brand-neon transition-colors ml-auto"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setIsJoinModalOpen(true)}
            className="px-12 py-5 border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-neon hover:text-brand-black hover:border-brand-neon transition-all transform active:scale-95"
          >
            Únete a la Comunidad
          </button>
        </div>
      </div>

      {/* Share Toast */}
      <AnimatePresence>
        {shareStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase z-50 text-brand-neon border border-brand-neon/20"
          >
            {shareStatus}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comments Modal */}
      <AnimatePresence>
        {activeCommentPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/95 backdrop-blur-md"
            onClick={() => setActiveCommentPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-brand-black border border-white/10 rounded-3xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tighter uppercase">Comentarios</h3>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest">Post de {activeCommentPost.user}</p>
                </div>
                <button onClick={() => setActiveCommentPost(null)} className="p-2 hover:bg-white/5 rounded-full">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {[1, 2].map(i => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-gray/20 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-widest">User_{i}00</p>
                      <p className="text-xs opacity-60">Increíble outfit, la combinación de colores es perfecta para el mood {activeCommentPost.mood}.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Escribe un comentario..." 
                    className="flex-grow bg-transparent text-sm focus:outline-none"
                  />
                  <button className="text-brand-neon hover:scale-110 transition-transform">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Community Modal */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/95 backdrop-blur-md"
            onClick={() => setIsJoinModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-black border border-white/10 p-10 rounded-[2.5rem] w-full max-w-md relative text-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsJoinModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 bg-brand-neon text-brand-black rounded-full flex items-center justify-center mx-auto mb-8">
                <TrendingUp size={32} />
              </div>

              <h3 className="text-4xl font-bold tracking-tighter mb-4 uppercase">Únete al Gremio</h3>
              <p className="opacity-60 text-sm mb-10 leading-relaxed">
                Forma parte de la comunidad SOUNDRA. Comparte tus outfits, vota por los mejores moods y accede a ventas anticipadas.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsJoinModalOpen(false); }}>
                <input 
                  type="text" 
                  placeholder="USUARIO" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:border-brand-neon focus:outline-none transition-colors"
                  required
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-widest focus:border-brand-neon focus:outline-none transition-colors"
                  required
                />
                <button className="w-full bg-brand-neon text-brand-black py-5 rounded-2xl font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-neon/20 mt-4">
                  Registrarme
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
