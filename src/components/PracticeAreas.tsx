import { motion } from 'motion/react';
import { Scale, ShieldCheck, Briefcase, Gavel, Landmark } from 'lucide-react';

const practiceAreas = [
  {
    title: "Ποινικό Δίκαιο",
    description: "Εξειδικευμένος χειρισμός σοβαρών ποινικών υποθέσεων (κυρίως κακουργημάτων) με έμφαση στην υπεράσπιση των δικαιωμάτων του κατηγορουμένου.",
    icon: Gavel
  },
  {
    title: "Αστικό Δίκαιο",
    description: "Πλήρης κάλυψη σε υποθέσεις οικογενειακού, εμπράγματου, κληρονομικού δικαίου και διαφορών αναγκαστικής εκτέλεσης.",
    icon: Scale
  },
  {
    title: "Εμπορικό Δίκαιο",
    description: "Συμβουλευτική υποστήριξη επιχειρήσεων, σύσταση εταιρειών, εμπορικές συμβάσεις και επίλυση εταιρικών διαφορών.",
    icon: Briefcase
  },
  {
    title: "Τραπεζικό Δίκαιο",
    description: "Διαχείριση υποθέσεων υπερχρεωμένων νοικοκυριών (Νόμος Κατσέλη) και προστασία δανειοληπτών έναντι πιστωτικών ιδρυμάτων.",
    icon: Landmark
  },
  {
    title: "Διοικητικό Δίκαιο",
    description: "Εκπροσώπηση ενώπιων διοικητικών αρχών και δικαστηρίων για ζητήματα φορολογικού και υπαλληλικού δικαίου.",
    icon: ShieldCheck
  }
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Υπηρεσίες</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-midnight">Τομείς Πρακτικής</h2>
          <div className="w-24 h-px bg-gold mx-auto mt-8 opacity-30"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-midnight/10 hover:border-gold/30 transition-colors bg-white group"
            >
              <area.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif text-midnight mb-4">{area.title}</h3>
              <p className="text-midnight/70 leading-relaxed text-justify-greek">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
