"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types ---
interface ProposalVideoProps {
  videoSrc: string;
  posterSrc?: string;
  date?: string;
  location?: string;
  headline?: string;
  subheadline?: string;
}

// --- Decorative Elements ---
const FloralWatermark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("w-32 h-32 md:w-48 md:h-48 text-stone-200/50", className)}
    fill="currentColor"
  >
    <path d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0 Z" />
  </svg>
);

const PlayButton = ({ onClick, isPlaying }: { onClick: () => void; isPlaying: boolean }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="absolute inset-0 flex items-center justify-center z-20 group outline-none"
  >
    <AnimatePresence>
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative"
        >
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-white/40 animate-[spin_10s_linear_infinite]" />
          
          {/* Main Button with Glassmorphism */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/30 backdrop-blur-md border border-white/50 shadow-xl flex items-center justify-center group-hover:bg-white/40 transition-all duration-500">
            <svg 
              className="w-8 h-8 md:w-10 md:h-10 text-stone-900 ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          
          {/* Text Label */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max">
            <span className="text-white font-serif tracking-widest text-xs uppercase drop-shadow-md">
              Play Video
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

// --- Main Component ---
export default function ProposalVideoSection({
  videoSrc = "/proposal-video.mp4",
  posterSrc,
  date = "August 2025",
  location = "Emmanuel Park, Redemption City",
  headline = "She Said Yes",
  subheadline = "The beginning of forever",
}: ProposalVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-[#FDFCF8] overflow-hidden"
    >
      {/* Background Elements - Subtle and Professional */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grain Texture (Optional, adds paper feel) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
        
        {/* Abstract Shapes */}
        <motion.div style={{ y: yParallax }} className="absolute top-0 right-0 opacity-40">
           <FloralWatermark />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }} className="absolute bottom-0 left-0 opacity-40">
           <FloralWatermark className="rotate-90" />
        </motion.div>
      </div>

      <motion.div style={{ opacity }} className="container relative mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-stone-500 text-xs md:text-sm tracking-[0.3em] uppercase border-b border-stone-300 pb-2">
              The Proposal
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-900 tracking-tight">
              {headline}
            </h2>
            <p className="text-stone-500 font-serif italic text-lg md:text-xl">
              {subheadline}
            </p>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Quote Left - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-64 text-right space-y-4"
          >
            <div className="w-12 h-px bg-stone-300 ml-auto" />
            <p className="text-stone-600 font-serif italic text-xl leading-relaxed">
              "Every love story is beautiful, but ours is my absolute favorite."
            </p>
            <p className="text-stone-400 text-xs uppercase tracking-widest">{date}</p>
          </motion.div>

          {/* Video Player Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* "Photo Frame" Layers for depth */}
            <div className="absolute -inset-3 bg-white border border-stone-200 rounded-[2rem] shadow-sm transform rotate-2 transition-transform duration-700 group-hover:rotate-3" />
            <div className="absolute -inset-3 bg-white border border-stone-200 rounded-[2rem] shadow-sm transform -rotate-2 transition-transform duration-700 group-hover:-rotate-3" />
            
            {/* Main Container */}
            <div className="relative z-10 bg-stone-100 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-900/10">
              <div 
                className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[9/16] cursor-pointer"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  playsInline
                  className="w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Video Overlay Gradient (Visible when paused) */}
                <motion.div
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-stone-900/20 backdrop-brightness-[0.95]"
                />

                <PlayButton onClick={togglePlay} isPlaying={isPlaying} />

                {/* Location Badge */}
                {!isPlaying && (
                  <div className="absolute bottom-8 left-0 right-0 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs tracking-widest uppercase">
                      {location}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Quote Right - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block w-64 text-left space-y-4"
          >
            <div className="w-12 h-px bg-stone-300 mr-auto" />
            <p className="text-stone-600 font-serif italic text-xl leading-relaxed">
              "In that moment, time stood still and my heart knew — this is forever."
            </p>
            <p className="text-stone-400 text-xs uppercase tracking-widest">{location}</p>
          </motion.div>

        </div>

        {/* Mobile Quote (Visible only on small screens) */}
        <div className="lg:hidden mt-12 text-center max-w-sm mx-auto">
          <p className="text-stone-600 font-serif italic text-lg">
            "In that moment, time stood still and my heart knew — this is forever."
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-stone-400 text-xs uppercase tracking-widest">
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>{location}</span>
          </div>
        </div>

      </motion.div>
    </section>
  );
}