import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/60 uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block font-medium"
        >
          Established 1991
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1]"
        >
          35 Έτη Νομικής Πρακτικής: <br/>
          <span className="serif-italic text-white/80">Αξιοπιστία, Εμπειρία, Αποτέλεσμα</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Δικηγορική Εταιρεία Ιωάννης Ν. Αποστολόπουλος & Συνεργάτες. <br className="hidden md:block" /> 
          Στιβαρή εκπροσώπηση, απόλυτη εχεμύθεια και προσήλωση στο δίκαιο.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="tel:2610270777" 
            className="px-10 py-5 bg-gold text-midnight text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
          >
            Ανάθεση Υπόθεσης
          </a>
          <a 
            href="#about" 
            className="px-10 py-5 border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
          >
            Η Ιστορία μας
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
