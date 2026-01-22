import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import type { StoryData } from "./types";
import { MobilePhotoStrip } from "./MobilePhotoStrip";
import { StoryContent } from "./StoryContent";

interface StoryCardProps {
  story: StoryData;
  activeStory: "dn" | "tito";
  direction: number;
}

export const StoryCard = ({ story, activeStory, direction }: StoryCardProps) => {
  return (
    <motion.div
      layout
      className="relative w-full max-w-2xl bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-stone-100 overflow-hidden"
    >
      {/* Gradient accent bar */}
      <motion.div
        className={cn(
          "h-1.5 bg-gradient-to-r",
          story.accentColor
        )}
        layoutId="accent-bar"
      />

      <div className="p-6 md:p-10 lg:p-12">
        {/* Mobile Photo Strip */}
        <MobilePhotoStrip media={story.media} />

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <StoryContent 
            key={activeStory} 
            story={story} 
            direction={direction} 
          />
        </AnimatePresence>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 pt-6 border-t border-stone-100 text-center"
        >
          <p className="font-serif text-2xl text-stone-700 italic">
            — {story.name}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
