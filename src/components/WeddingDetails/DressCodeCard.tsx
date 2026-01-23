import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { DressCode } from "./types";

interface DressCodeCardProps {
  dressCodes: DressCode[];
}

export const DressCodeCard = ({ dressCodes }: DressCodeCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100"
  >
    <div className="text-center mb-6">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-amber-100 mb-4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-purple-600">
          <path d="M6.5 6.5L5 22h14l-1.5-15.5" />
          <path d="M9 6.5V3h6v3.5" />
          <path d="M5 22a14.5 14.5 0 0 1 7-3 14.5 14.5 0 0 1 7 3" />
        </svg>
      </div>
      <h3 className="text-2xl font-serif text-stone-800">Colours of the Day</h3>
      <p className="text-stone-500 text-sm mt-1">Dress to celebrate with us</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {dressCodes.map((code, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center p-4 rounded-xl bg-stone-50"
        >
          <p className="text-stone-600 font-medium mb-3">{code.family}</p>
          <div className="flex items-center gap-2">
            {code.colors.map((color, colorIdx) => (
              <div key={colorIdx} className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full shadow-inner border-2 border-white",
                    code.colorClasses[colorIdx]
                  )}
                />
                <span className="text-stone-700 text-sm">{color}</span>
                {colorIdx < code.colors.length - 1 && (
                  <span className="text-stone-300 mx-1">&</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);
