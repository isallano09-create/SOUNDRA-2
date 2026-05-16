import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Send, Mail, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <div className="min-h-screen bg-brand-black text-brand-beige py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12"
        >
          <ArrowLeft size={16} /> Back to Soundra
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h1 className="text-6xl font-bold tracking-tighter mb-8 leading-none">CONTÁCTANOS</h1>
            <p className="opacity-60 mb-12 text-lg">
              ¿Tienes dudas sobre un drop o quieres colaborar con nosotros? Estamos en la misma frecuencia.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-brand-neon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</h4>
                  <p className="font-bold">support@soundra.urban</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-brand-neon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">HQ</h4>
                  <p className="font-bold">Berlin, Germany</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-brand-neon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">WhatsApp</h4>
                  <p className="font-bold">+49 157 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-neon text-brand-black rounded-full flex items-center justify-center">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold tracking-tighter uppercase">Mensaje Recibido</h3>
                <p className="opacity-60 text-sm">Te responderemos en menos de 24 horas. Keep vibing.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-neon hover:opacity-100 transition-opacity"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Nombre</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Mensaje</label>
                  <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-neon focus:outline-none transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-brand-neon text-brand-black py-4 rounded-xl font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-brand-neon/20">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
