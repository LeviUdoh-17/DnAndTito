import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import type { MediaItem } from "./types";

interface PhotoGalleryProps {
  media: MediaItem[];
  side: "left" | "right";
  isActive: boolean;
}

export const PhotoGallery = ({ media, side, isActive }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [media.length, isActive]);

  return (
    <div className={cn(
      "hidden lg:flex flex-col gap-4 w-72 xl:w-80",
      side === "left" ? "items-end pr-8" : "items-start pl-8"
    )}>
      {/* Main featured photo */}
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
        animate={{ opacity: isActive ? 1 : 0.3, x: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "relative w-56 xl:w-64 h-[25rem] xl:h-[30rem] rounded-2xl overflow-hidden shadow-2xl",
          side === "left" ? "rotate-[-4deg]" : "rotate-[4deg]"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={media[currentIndex].id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/90 text-sm font-light tracking-wide">
            {media[currentIndex].caption}
          </p>
        </div>
      </motion.div>

      {/* Thumbnail strip */}
      <div className={cn(
        "flex gap-2",
        side === "left" ? "flex-row-reverse mr-6" : "ml-6"
      )}>
        {media.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "w-12 h-12 rounded-lg overflow-hidden transition-all duration-300",
              idx === currentIndex 
                ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-[#FDFBF7] scale-110" 
                : "opacity-60 hover:opacity-100"
            )}
          >
            {item.type === "video" ? (
              <div className="w-full h-full bg-stone-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            ) : (
              <img src={item.src} alt="" className="object-cover w-full h-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
