import React from 'react';
import { ShoppingBag, Music, User, Search } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  const { totalItems, setIsOpen } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between",
      isScrolled || pathname !== '/' ? "glass py-3" : "bg-transparent"
    )}>
      <div className="flex items-center gap-8">
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tighter text-white cursor-pointer"
        >
          SOUNDRA
        </Link>
        <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-widest uppercase opacity-70">
          <button onClick={() => scrollToSection('shop')} className="hover:opacity-100 transition-opacity">Shop</button>
          <button onClick={() => scrollToSection('moods')} className="hover:opacity-100 transition-opacity">Moods</button>
          <button onClick={() => scrollToSection('artists')} className="hover:opacity-100 transition-opacity">Artists</button>
          <button onClick={() => scrollToSection('community')} className="hover:opacity-100 transition-opacity">Community</button>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
        >
          <Search size={20} />
        </button>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors relative text-white"
        >
          <ShoppingBag size={20} />
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-brand-neon text-brand-black text-[10px] font-bold rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
        >
          <User size={20} />
        </button>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
}
