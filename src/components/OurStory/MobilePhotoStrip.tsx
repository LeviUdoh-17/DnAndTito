import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import type { MediaItem } from "./types";

interface MobilePhotoStripProps {
  media: MediaItem[];
}

export const MobilePhotoStrip = ({ media }: MobilePhotoStripProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [media.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % media.length);
      } else {
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
      }
    }
  };

  return (
    <div className="lg:hidden mb-8">
      <div 
        className="relative w-full aspect-[4/6] rounded-2xl overflow-hidden shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={media[currentIndex].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {media[currentIndex].type === "video" ? (
              <video
                src={media[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            ) : (
              <img
                src={media[currentIndex].src}
                alt={media[currentIndex].caption || ""}
                className="object-cover w-full h-full"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <p className="text-white/90 text-sm font-light">
            {media[currentIndex].caption}
          </p>
          <div className="flex gap-1.5">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  idx === currentIndex ? "bg-white w-6" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-stone-400 text-xs mt-2">Swipe to see more</p>
    </div>
  );
};
