import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Navigation } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-midnight text-white py-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Επικοινωνία</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
                Είμαστε στη διάθεσή σας για οποιοδήποτε νομικό ζήτημα σας απασχολεί. Η εμπειρία μας είναι η δική σας σιγουριά.
              </p>

              <div className="space-y-8">
                <a href="tel:2610270777" className="group flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors">
                    <Phone className="w-5 h-5 group-hover:text-midnight transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Τηλέφωνο</p>
                    <p className="text-xl font-medium">2610 270777</p>
                  </div>
                </a>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Διεύθυνση</p>
                    <p className="text-xl font-medium">Αθανασίου Διάκου 29, Πάτρα (Κέντρο)</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Τ.Κ.</p>
                    <p className="text-xl font-medium">262 22</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white text-midnight p-10 md:p-16 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
              <h3 className="text-3xl font-serif mb-6">Προγραμματίστε Συνάντηση</h3>
              <p className="text-midnight/70 mb-10 leading-relaxed text-justify-greek">
                Καλέστε μας άμεσα για την ανάθεση της υπόθεσής σας ή για να κλείσετε ένα ραντεβού στα γραφεία μας στην καρδιά της Πάτρας.
              </p>
              <a 
                href="tel:2610270777" 
                className="inline-flex items-center gap-4 bg-midnight text-white px-8 py-4 uppercase tracking-[0.2em] font-bold text-sm hover:bg-gold hover:text-midnight transition-colors"
              >
                ΚΑΛΕΣΤΕ ΤΩΡΑ
                <Phone className="w-4 h-4" />
              </a>
            </div>
            
            <div className="mt-12 opacity-10 pointer-events-none">
              <span className="font-serif text-6xl italic md:text-8xl">Patras, Greece</span>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] uppercase tracking-[0.2em]">
          <div>
            © {currentYear} Ιωάννης Ν. Αποστολόπουλος & Συνεργάτες. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Legal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
