import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = React.useState<'login' | 'register'>('login');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-brand-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[120] px-6"
          >
            <div className="bg-brand-black border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="p-8">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter text-white mb-2 uppercase">
                      {mode === 'login' ? 'Bienvenido' : 'Únete al Ritmo'}
                    </h2>
                    <p className="text-xs font-bold tracking-widest text-white/30 uppercase">
                      {mode === 'login' ? 'Ingresa a tu cuenta Soundra' : 'Crea tu perfil de estilo'}
                    </p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-widest text-brand-neon uppercase ml-4">Email</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                      <input 
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-14 text-sm focus:outline-none focus:border-brand-neon transition-colors text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold tracking-widest text-brand-neon uppercase ml-4">Password</label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                      <input 
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-14 text-sm focus:outline-none focus:border-brand-neon transition-colors text-white"
                      />
                    </div>
                  </div>

                  <button className="w-full bg-white text-brand-black font-bold uppercase tracking-widest text-xs py-5 rounded-full hover:bg-brand-neon transition-all flex items-center justify-center gap-2 group">
                    {mode === 'login' ? 'Iniciar Sesión' : 'Continuar'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <button 
                    onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                    className="text-[10px] font-bold tracking-widest text-white/40 uppercase hover:text-white transition-colors underline underline-offset-4"
                  >
                    {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                  </button>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 flex justify-between items-center bg-gradient-to-r from-brand-neon/5 to-transparent">
                <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">O continúa con</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                    <LogIn size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
