import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Privacy() {
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
        
        <h1 className="text-6xl font-bold tracking-tighter mb-12">PRIVACIDAD</h1>
        
        <div className="space-y-8 opacity-60 leading-relaxed text-sm">
          <section>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Información que Recopilamos</h2>
            <p>
              En SOUNDRA, respetamos tu privacidad. Recopilamos información necesaria para procesar tus pedidos y mejorar tu experiencia sonora y de moda, como tu nombre, correo electrónico y dirección de envío.
            </p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Uso de la Información</h2>
            <p>
              Utilizamos tus datos para personalizar tus recomendaciones de estilo y playlists, así como para mantenerte informado sobre nuevos drops y colaboraciones exclusivas.
            </p>
          </section>
          
          <section>
            <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">Seguridad</h2>
            <p>
              Toda tu información está protegida mediante encriptación SSL de nivel industrial. No compartimos tus datos personales con terceros para fines publicitarios ajenos a SOUNDRA.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
