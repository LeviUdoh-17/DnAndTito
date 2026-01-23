import { motion } from "framer-motion";

export const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-purple-600 text-sm uppercase tracking-[0.25em] font-medium mb-3"
    >
      Join Us In Celebration
    </motion.p>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 tracking-tight">
      Wedding Details
    </h2>
  </motion.div>
);
