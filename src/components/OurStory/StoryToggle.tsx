import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface StoryToggleProps {
  activeStory: "dn" | "tito";
  onToggle: (story: "dn" | "tito") => void;
}

export const StoryToggle = ({ activeStory, onToggle }: StoryToggleProps) => {
  return (
    <div className="flex justify-center mb-8 md:mb-10">
      <div className="relative inline-flex bg-stone-100 rounded-full p-1.5 shadow-inner">
        {/* Sliding background */}
        <motion.div
          className={cn(
            "absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r shadow-md",
            activeStory === "dn" 
              ? "from-[#e6c07b] to-amber-700" 
              : "from-emerald-400 to-emerald-500"
          )}
          initial={false}
          animate={{
            left: activeStory === "dn" ? "6px" : "50%",
            right: activeStory === "dn" ? "50%" : "6px",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        
        <button
          onClick={() => onToggle("dn")}
          className={cn(
            "relative z-10 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-300",
            activeStory === "dn" ? "text-white" : "text-stone-600 hover:text-stone-800"
          )}
        >
          <span className="items-center gap-2">
            DN&apos;s Story
          </span>
        </button>
        
        <button
          onClick={() => onToggle("tito")}
          className={cn(
            "relative z-10 px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-colors duration-300",
            activeStory === "tito" ? "text-white" : "text-stone-600 hover:text-stone-800"
          )}
        >
          <span className="items-center gap-2">
            Tito&apos;s Story
          </span>
        </button>
      </div>
    </div>
  );
};
