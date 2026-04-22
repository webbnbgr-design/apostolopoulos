import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-midnight/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-midnight">
            Ι. Ν. ΑΠΟΣΤΟΛΟΠΟΥΛΟΣ
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            & ΣΥΝΕΡΓΑΤΕΣ • ΔΙΚΗΓΟΡΙΚΗ ΕΤΑΙΡΕΙΑ
          </span>
        </motion.div>

        <div className="hidden lg:flex items-center gap-12 text-sm font-medium uppercase tracking-widest text-midnight/70">
          <a href="#about" className="hover:text-gold transition-colors">Η Εταιρεία</a>
          <a href="#practice-areas" className="hover:text-gold transition-colors">Τομείς Πρακτικής</a>
          <a href="#team" className="hover:text-gold transition-colors">Η Ομάδα</a>
          <a href="#contact" className="hover:text-gold transition-colors">Επικοινωνία</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:2610270777" 
            className="flex items-center gap-2 bg-midnight text-white px-5 py-2.5 rounded-sm hover:bg-gold transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">2610 270777</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
