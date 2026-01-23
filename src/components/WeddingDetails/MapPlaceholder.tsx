import { motion } from "framer-motion";

export const MapPlaceholder = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative flex-1 min-h-[200px] bg-stone-100 rounded-2xl overflow-hidden"
  >
    <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mb-2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <p className="text-sm font-medium">Redemption Camp</p>
      <p className="text-xs">Ogun State, Nigeria</p>
      <a
        href="https://maps.google.com/?q=Redemption+Camp+Ogun+State+Nigeria"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 px-4 py-2 bg-white rounded-lg text-stone-600 text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm"
      >
        Get Directions
      </a>
    </div>
  </motion.div>
);
