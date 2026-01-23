import { motion } from "framer-motion";

export const BottomNote = () => (
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.5 }}
    className="text-center text-stone-400 text-sm mt-16 max-w-lg mx-auto"
  >
    We are so grateful for your love and support. Your presence at our wedding would mean the world to us.
    <span className="block mt-2 text-purple-400">— Tito & DN</span>
  </motion.p>
);
