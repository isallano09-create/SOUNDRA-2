import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Truck, Globe, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Shipping() {
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
        
        <h1 className="text-6xl font-bold tracking-tighter mb-12">ENVÍOS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-3xl text-center">
            <Clock className="mx-auto mb-4 text-brand-neon" size={32} />
            <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Despacho</h3>
            <p className="text-[10px] opacity-50 uppercase">24-48 HORAS HÁBILES</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <Truck className="mx-auto mb-4 text-brand-neon" size={32} />
            <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Nacional</h3>
            <p className="text-[10px] opacity-50 uppercase">3-5 DÍAS LABORALES</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center">
            <Globe className="mx-auto mb-4 text-brand-neon" size={32} />
            <h3 className="text-xs font-bold uppercase tracking-widest mb-2">Mundial</h3>
            <p className="text-[10px] opacity-50 uppercase">7-15 DÍAS LABORALES</p>
          </div>
        </div>
        
        <div className="space-y-8 opacity-60 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Costos de Envío</h2>
            <p>
              Ofrecemos envío gratuito en todos los pedidos superiores a $200. Para pedidos menores, el costo se calculará en la pantalla de pago basándose en tu ubicación.
            </p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Seguimiento</h2>
            <p>
              Una vez que tu pedido sea despachado, recibirás un correo electrónico con un número de seguimiento y un enlace a nuestra playlist de "On the Road" para que disfrutes mientras esperas tu drop.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
