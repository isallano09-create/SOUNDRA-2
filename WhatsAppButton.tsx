import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  // Example phone number - usually this would be an env var
  const WHATSAPP_URL = "https://wa.me/1234567890?text=Hola%20Soundra!%20Me%20interesa%20saber%20más%20sobre%20la%20marca.";

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="glass px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap shadow-xl"
          >
            ¿Necesitas ayuda con tu estilo? ✨
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 group relative"
      >
        <MessageCircle size={32} fill="white" />
        
        {/* Pulsing Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      </motion.a>
    </div>
  );
}
