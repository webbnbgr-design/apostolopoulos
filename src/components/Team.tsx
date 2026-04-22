import { motion } from 'motion/react';
import { UserPlus } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Ανθρώπινο Δυναμικό</span>
            <h2 className="text-4xl md:text-5xl font-serif text-midnight">Η Ομάδα & η Συνεχής Ανάπτυξη</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gold font-medium uppercase tracking-widest text-xs"
          >
            <UserPlus className="w-5 h-5" />
            Προσλήψεις έμπειρων συνεργατών
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Main Lawyer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-midnight p-10 md:p-16 text-white flex flex-col md:flex-row gap-12 items-center text-center md:text-left"
          >
            <div className="w-48 h-48 bg-white/10 border border-white/20 flex items-center justify-center font-serif text-4xl italic text-white/40">
              Ι.Ν.Α.
            </div>
            <div>
              <h3 className="text-3xl font-serif mb-2">Ιωάννης Ν. Αποστολόπουλος</h3>
              <p className="text-gold font-medium uppercase tracking-[0.2em] text-xs mb-8">Ιδρυτής & Διαχειριστής Εταίρος</p>
              <p className="text-white/70 leading-relaxed text-justify-greek max-w-xl">
                Με πάνω από 3 δεκαετίες στην ενεργό δικηγορία, ο κ. Αποστολόπουλος αποτελεί έναν από τους πλέον έμπειρους νομικούς της Πάτρας, έχοντας χειριστεί υποθέσεις που απασχόλησαν έντονα την κοινή γνώμη και τη νομική κοινότητα.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-10 border border-midnight/5 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif text-midnight mb-4">Νέες Συνεργασίες</h3>
            <p className="text-midnight/70 leading-relaxed text-justify-greek mb-8">
              Η εταιρεία μας επενδύει σταθερά στην εξέλιξη, εντάσσοντας στο δυναμικό της έμπειρους δικηγόρους και εξειδικευμένους συνεργάτες για την παροχή ολοκληρωμένων λύσεων.
            </p>
            <div className="w-12 h-px bg-gold"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
