import { motion } from "framer-motion";

export const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 md:mb-16"
    >
      {/* Decorative heart */}
      <div className="mb-4 text-stone-300">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 tracking-tight">
        Our Love Story
      </h2>
      <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
        Two hearts, one journey — hear it from both of us
      </p>
    </motion.div>
  );
};
