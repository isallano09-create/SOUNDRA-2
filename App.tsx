import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodSection from './components/MoodSection';
import ProductCard from './components/ProductCard';
import OutfitBuilder from './components/OutfitBuilder';
import MoodScanner from './components/MoodScanner';
import Community from './components/Community';
import Blog from './components/Blog';
import CartDrawer from './components/CartDrawer';
import BackgroundMusic from './components/BackgroundMusic';
import ArtistSection from './components/ArtistSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import { PRODUCTS, MOODS } from './data/mockData';
import { CartProvider } from './context/CartContext';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <AppContent />
      </CartProvider>
    </Router>
  );
}

function HomePage() {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filteredProducts = (activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.mood === activeFilter || p.category === activeFilter)
  ).filter(p => !p.hiddenFromShop);

  const filters = [
    { id: 'all', label: 'Todos' },
    ...MOODS.map(m => ({ id: m.id, label: m.label }))
  ];

  return (
    <main>
      <Hero />
      
      <MoodSection onMoodSelect={(mood) => {
        setActiveFilter(mood);
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Shop Section */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-brand-neon uppercase mb-2 block">Colección</span>
            <h2 className="text-6xl font-bold tracking-tighter leading-none">SHOP THE <br /> SOUND</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter.id 
                  ? 'bg-brand-neon text-brand-black neon-glow' 
                  : 'glass hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <OutfitBuilder />

      <ArtistSection />

      <MoodScanner onMoodSelect={(mood) => {
        setActiveFilter(mood);
        document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      <Community />

      <Blog />

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 bg-brand-neon text-brand-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="flex whitespace-nowrap animate-marquee py-4">
            {Array(20).fill('SOUNDRA ').map((t, i) => (
              <span key={i} className="text-[15vw] font-bold tracking-tighter uppercase leading-none">{t}</span>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">ÚNETE AL <br /> RITMO</h2>
          <p className="text-lg font-medium mb-12 opacity-80">
            Recibe acceso exclusivo a drops limitados y playlists curadas por artistas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="TU EMAIL" 
              className="flex-grow bg-brand-black/5 border-2 border-brand-black px-8 py-4 rounded-full text-sm font-bold placeholder:text-brand-black/40 focus:outline-none"
            />
            <button className="bg-brand-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-beige selection:bg-brand-neon selection:text-brand-black">
      <Navbar />
      <CartDrawer />
      <BackgroundMusic />
      <WhatsAppButton />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
      </Routes>

      <Footer />
    </div>
  );
}
