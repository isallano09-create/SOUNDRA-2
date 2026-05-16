import React from 'react';
import { Instagram, Twitter, Youtube, Music2, ArrowUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate back to home then scroll
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold tracking-tighter mb-8 cursor-pointer" onClick={() => navigate('/')}>SOUNDRA</h2>
          <p className="text-brand-beige/40 max-w-sm mb-12">
            La moda como extensión del sonido. Una plataforma innovadora que fusiona estilo, música y cultura urbana.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/soundra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-brand-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com/soundra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-brand-black transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://youtube.com/@soundra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-brand-black transition-all">
              <Youtube size={18} />
            </a>
            <a href="https://tiktok.com/@soundra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-neon hover:text-brand-black transition-all">
              <Music2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 mb-8">Navegación</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><button onClick={() => scrollToSection('shop')} className="hover:text-brand-neon transition-colors cursor-pointer">Colecciones</button></li>
            <li><button onClick={() => scrollToSection('moods')} className="hover:text-brand-neon transition-colors cursor-pointer">Moods</button></li>
            <li><button onClick={() => scrollToSection('artists')} className="hover:text-brand-neon transition-colors cursor-pointer">Artistas</button></li>
            <li><button onClick={() => scrollToSection('community')} className="hover:text-brand-neon transition-colors cursor-pointer">Comunidad</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 mb-8">Soporte</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/shipping" className="hover:text-brand-neon transition-colors">Envíos</Link></li>
            <li><Link to="/returns" className="hover:text-brand-neon transition-colors">Devoluciones</Link></li>
            <li><Link to="/contact" className="hover:text-brand-neon transition-colors">Contacto</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-neon transition-colors">Privacidad</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-bold tracking-widest uppercase opacity-30">
          © 2026 SOUNDRA — DRESS THE SOUND. ALL RIGHTS RESERVED.
        </p>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
        >
          Back to Top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
