import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { StoryData } from "./types";

interface StoryContentProps {
  story: StoryData;
  direction: number;
}

export const StoryContent = ({ story, direction }: StoryContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Story Header */}
      <div className="text-center mb-8">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r bg-clip-text text-transparent mb-2",
            story.accentColor
          )}
        >
          {story.title}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-serif text-stone-800 italic"
        >
          {story.subtitle}
        </motion.h3>
      </div>

      {/* Story Paragraphs */}
      <div className="space-y-5 text-stone-600 leading-relaxed">
        {story.paragraphs.map((paragraph, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="text-base md:text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};
