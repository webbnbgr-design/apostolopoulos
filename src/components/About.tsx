import { motion } from 'motion/react';
import { Award, Target, Star, Newspaper } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Πάνω από τρεις δεκαετίες</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-midnight mb-8">
                Η Πορεία μας <br/> στο Χρόνο
              </h2>
              <div className="space-y-6 text-midnight/80 text-lg leading-relaxed text-justify-greek">
                <p>
                  Από την ίδρυσή του το 1991, το δικηγορικό γραφείο του Ιωάννη Ν. Αποστολόπουλου έχει διαγράψει μια σταθερά ανοδική και επιτυχημένη πορεία στον νομικό κόσμο της Πάτρας και της ευρύτερης επικράτειας.
                </p>
                <p>
                  Με επίκεντρο τη μαχόμενη δικηγορία και την εξειδίκευση σε σοβαρές ποινικές υποθέσεις, το γραφείο μας έχει αναγνωριστεί για την αποτελεσματικότητά του στο χειρισμό κακουργημάτων και σύνθετων αστικών διαφορών.
                </p>
                <p>
                  Η εμπειρία των 35 ετών αποτελεί την εγγύηση για κάθε εντολέα μας, προσφέροντας την ασφάλεια ενός θεσμού που συνδυάζει την παραδοσιακή δικηγορική ηθική με τις σύγχρονες νομικές απαιτήσεις.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <h4 className="font-serif text-xl text-midnight font-bold">35+</h4>
                    <p className="text-xs uppercase tracking-widest text-midnight/60">Έτη Εμπειρίας</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="w-8 h-8 text-gold" />
                  <div>
                    <h4 className="font-serif text-xl text-midnight font-bold">5/5</h4>
                    <p className="text-xs uppercase tracking-widest text-midnight/60">Κριτικές</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background accent */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-gold/20 pointer-events-none"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-midnight p-10 text-white rounded-sm relative overflow-hidden group">
              <Newspaper className="absolute -right-8 -bottom-8 w-40 h-40 text-gold/5 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-6 flex items-center gap-3 text-gold">
                <span className="w-8 h-px bg-gold"></span>
                Αναγνώριση στον Τύπο
              </h3>
              <p className="text-white/70 leading-relaxed italic text-justify-greek">
                "Ο χειρισμός δύσκολων υποθέσεων και η σταθερή παρουσία στις δικαστικές αίθουσες έχουν καταστήσει το γραφείο Αποστολόπουλου σημείο αναφοράς για την νομική πρακτική στην Αχαΐα."
              </p>
              <div className="mt-6 text-xs uppercase tracking-widest text-white/40">
                Media Mention • Local News
              </div>
            </div>

            <div className="bg-white p-10 border border-midnight/10 rounded-sm">
              <Target className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-2xl font-serif text-midnight mb-4">Φιλοσοφία & Στόχος</h3>
              <p className="text-midnight/70 leading-relaxed text-justify-greek">
                Στόχος μας είναι η παροχή νομικών υπηρεσιών υψηλού επιπέδου, με απόλυτο σεβασμό στον άνθρωπο και τις ανάγκες του, επιτυγχάνοντας το βέλτιστο δυνατό αποτέλεσμα ακόμη και στις πιο απαιτητικές συνθήκες.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
