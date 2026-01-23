import { motion } from "framer-motion";
import type { WeddingDate } from "./types";

interface DateCardProps {
  date: WeddingDate;
}

export const DateCard = ({ date }: DateCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative inline-flex flex-col items-center"
  >
    <div className="relative bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
      {/* Top accent */}
      <div className="h-2 bg-gradient-to-r from-purple-500 via-amber-400 to-emerald-500" />
      
      <div className="px-10 py-8 text-center">
        <p className="text-stone-500 text-sm uppercase tracking-[0.2em] font-medium">
          {date.day}
        </p>
        <p className="text-6xl md:text-7xl font-serif text-stone-800 my-2">
          {date.date}
        </p>
        <p className="text-xl font-serif text-stone-600">
          {date.month}
        </p>
        <p className="text-stone-400 text-sm mt-1">
          {date.year}
        </p>
      </div>
    </div>
    
    {/* Decorative ribbon */}
    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-r from-purple-100 to-amber-100 rounded-full blur-sm" />
  </motion.div>
);
