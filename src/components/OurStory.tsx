"use client";

import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types & Data ---

type MediaType = "image" | "video";

interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
}

// Mock Data: Replace these URLs with your actual wedding assets
const cornerMedia: { [key: string]: MediaItem[] } = {
  topLeft: [
    { id: "tl1", type: "image", src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" },
    { id: "tl2", type: "video", src: "/DN&TITO_Template.mp4" }, // Sample vertical video
  ],
  topRight: [
    { id: "tr2", type: "image", src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop" },
    { id: "tr2", type: "image", src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop" },
],
bottomLeft: [
      { id: "bl1", type: "video", src: "/DN&TITO_Template.mp4" },
    { id: "bl2", type: "image", src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop" },
  ],
  bottomRight: [
    { id: "br1", type: "video", src: "/DN&TITO_Template.mp4" },
    { id: "br2", type: "image", src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop" },
  ],
};
// --- Sub-Component: Slideshow Card ---

interface SlideshowCardProps {
  media: MediaItem[];
  className?: string;
  rotation: string; // Tailwind rotation class
  interval?: number;
}

const SlideshowCard = ({ media, className, rotation, interval = 5000 }: SlideshowCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, interval);
    return () => clearInterval(timer);
  }, [media.length, interval]);

  return (
    <div
      className={cn(
        "absolute w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-96 overflow-hidden rounded-xl border-4 border-white shadow-xl transition-transform duration-500 hover:scale-105 z-0",
        rotation,
        className
      )}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={media[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-stone-200"
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
              alt="Moment from our story"
              className="object-cover w-full h-full"
            />
          )}
          {/* Subtle Overlay to ensure text contrast if overlapped significantly (optional) */}
          <div className="absolute inset-0 bg-black/5" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---

export default function OurStorySection() {
  return (
    <section id="story" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#FDFBF7]">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />

      <div className="container relative mx-auto px-4 max-w-7xl min-h-[600px] flex items-center justify-center">
        
        <SlideshowCard 
          media={cornerMedia.topLeft} 
          rotation="-rotate-6" 
          className="top-0 left-0 md:-left-12 lg:left-0 origin-bottom-right"
          interval={6000} 
        />

        <SlideshowCard 
          media={cornerMedia.topRight} 
          rotation="rotate-3" 
          className="top-4 right-0 md:-right-8 lg:right-12 origin-bottom-left"
          interval={5500} 
        />

        <SlideshowCard 
          media={cornerMedia.bottomLeft} 
          rotation="rotate-2" 
          className="bottom-0 left-4 md:-left-4 lg:left-8 origin-top-right"
          interval={7000} 
        />

        <SlideshowCard 
          media={cornerMedia.bottomRight} 
          rotation="-rotate-3" 
          className="bottom-6 right-0 md:-right-12 lg:right-0 origin-top-left"
          interval={6500} 
        />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-1 max-w-2xl w-full bg-white/95 backdrop-blur-sm p-10 md:p-14 shadow-2xl rounded-[2rem] text-center border border-stone-100"
        >
          {/* Decorative element */}
          <div className="mb-6 text-stone-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mx-auto">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 mb-8 tracking-tight">
            Our Story
          </h2>

          <div className="space-y-6 text-lg text-stone-600 font-sans leading-relaxed">
            <p>
              It started with a shared glance across a crowded coffee shop on a rainy Tuesday. 
              What began as a conversation about a stolen umbrella turned into hours of 
              laughter, three refills of latte, and the feeling that we had known each other 
              for lifetimes.
            </p>
            <p>
              Five years, countless adventures, and two adopted golden retrievers later, 
              we stood on the cliffs of Santorini where Michael got down on one knee. 
              The answer was the easiest decision of our lives.
            </p>
            <p className="font-medium text-stone-800 pt-2">
              We are so excited to start this next chapter with our favorite people.
            </p>
          </div>

          {/* <div className="mt-10"> */}
            {/* <button className="px-8 py-3 bg-stone-900 text-white font-medium rounded-full hover:bg-stone-700 transition-colors duration-300 tracking-wide">
              View The Gallery
            </button> */}
          {/* </div> */}
        </motion.div>

      </div>
    </section>
  );
}