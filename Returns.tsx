import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, RefreshCw, ShieldCheck, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Returns() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-brand-black text-brand-beige py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12"
        >
          <ArrowLeft size={16} /> Back to Soundra
        </button>
        
        <h1 className="text-6xl font-bold tracking-tighter mb-12">DEVOLUCIONES</h1>
        
        <div className="space-y-12 leading-relaxed text-sm">
          <section className="glass p-8 rounded-3xl">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
              <ShieldCheck className="text-brand-neon" /> Política de 30 Días
            </h2>
            <p className="opacity-60 mb-4">
              Aceptamos devoluciones dentro de los 30 días posteriores a la recepción de tu pedido. Las prendas deben estar en su estado original, sin usar y con todas las etiquetas, incluyendo el código QR de la playlist exclusiva.
            </p>
          </section>
          
          <section className="glass p-8 rounded-3xl">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
              <RefreshCw className="text-brand-neon" /> Proceso de Cambio
            </h2>
            <p className="opacity-60 mb-4">
              Si la talla no es la correcta para tu ritmo, el primer cambio nacional es gratuito. Solo tienes que contactar a nuestro equipo de soporte para generar tu etiqueta de retorno.
            </p>
          </section>

          <section className="p-8 border border-white/5 rounded-3xl">
            <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
              <AlertCircle className="opacity-50" /> Excepciones
            </h2>
            <p className="opacity-40">
              No aceptamos devoluciones de drops de edición limitada o colaboraciones exclusivas con artistas una vez que el sello de seguridad ha sido removido.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
