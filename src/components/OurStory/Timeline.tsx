import { motion } from "framer-motion";

export const DesktopTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-16 text-center hidden md:block"
    >
      <div className="inline-flex items-center gap-4 text-stone-400 text-sm">
        <span className="w-12 h-px bg-stone-300" />
        <span>2016 — Best Friends</span>
        <span className="w-2 h-2 rounded-full bg-[#e6c07b]" />
        <span>2021 — Something Changed</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span>2023 — Forever Begins</span>
        <span className="w-12 h-px bg-stone-300" />
      </div>
    </motion.div>
  );
};

export const MobileTimeline = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-12 md:hidden"
    >
      <div className="flex flex-col items-center gap-3 text-stone-400 text-sm">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-stone-300" />
          <span>2016 — Best Friends</span>
        </div>
        <div className="w-px h-4 bg-stone-200" />
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>2021 — Something Changed</span>
        </div>
        <div className="w-px h-4 bg-stone-200" />
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>2023 — Forever Begins</span>
        </div>
      </div>
    </motion.div>
  );
};
