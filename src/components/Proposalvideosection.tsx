"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
const FloralCorner = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("w-24 h-24 md:w-32 md:h-32 text-stone-300/60", className)}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <path d="M10,50 Q30,30 50,10 Q45,35 50,50 Q35,45 10,50" />
    <path d="M50,10 Q55,25 70,20 Q60,35 50,50" />
    <path d="M10,50 Q25,55 20,70 Q35,60 50,50" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <circle cx="30" cy="30" r="2" fill="currentColor" />
    <circle cx="25" cy="45" r="1.5" fill="currentColor" />
    <circle cx="45" cy="25" r="1.5" fill="currentColor" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const PlayButton = ({ onClick, isPlaying }: { onClick: () => void; isPlaying: boolean }) => (
  <motion.button
    onClick={onClick}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="absolute inset-0 flex items-center justify-center z-20 group"
  >
    <div className="relative">
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 80, height: 80, margin: -10 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ width: 80, height: 80, margin: -10 }}
      />
      
      {/* Main button */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
        {isPlaying ? (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-stone-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6 md:w-8 md:h-8 text-stone-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </div>
    </div>
    
    {/* Text label */}
    {!isPlaying && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-1/4 text-white text-sm font-medium tracking-wide drop-shadow-lg"
      >
        Watch the moment
      </motion.span>
    )}
  </motion.button>
);

// --- Main Component ---
export default function ProposalVideoSection({
  videoSrc = "/proposal-video.mp4",
  posterSrc,
  date = "December 2022",
  location = "A moment forever cherished",
  headline = "She Said Yes",
  subheadline = "The moment that changed everything",
}: ProposalVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

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

  const handleVideoClick = () => {
    if (hasInteracted) {
      togglePlay();
    }
  };

  // Hide controls after playing for a bit
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isPlaying) {
      timeout = setTimeout(() => setShowControls(false), 3000);
    } else {
      setShowControls(true);
    }
    return () => clearTimeout(timeout);
  }, [isPlaying]);

  // Show controls on mouse move
  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900"
    >
      {/* Animated background texture */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </motion.div>

      {/* Soft gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-900/20 via-transparent to-amber-900/20" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      <motion.div style={{ opacity }} className="container relative mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-rose-400" />
            <HeartIcon className="text-rose-400" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-rose-400" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight mb-4">
            {headline}
          </h2>
          <p className="text-stone-400 text-lg md:text-xl font-light">
            {subheadline}
          </p>
        </motion.div>

        {/* Main Content - Video with decorations */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Left decorative text - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end text-right max-w-xs"
          >
            <FloralCorner className="rotate-180 mb-6" />
            <blockquote className="text-stone-300 text-xl font-serif italic leading-relaxed">
              "In that moment, time stood still and my heart knew — 
              <span className="text-rose-300"> this is forever.</span>"
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-stone-500" />
              <span className="text-stone-500 text-sm tracking-widest uppercase">{date}</span>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            onMouseMove={handleMouseMove}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 md:-inset-4 border border-stone-600/30 rounded-3xl" />
            <div className="absolute -inset-6 md:-inset-8 border border-stone-700/20 rounded-[2rem]" />
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-rose-400/60 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-rose-400/60 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-400/60 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400/60 rounded-br-lg" />

            {/* Video wrapper - Portrait aspect ratio */}
            <div 
              className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 cursor-pointer"
              onClick={handleVideoClick}
            >
              {/* Gradient overlay when not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10" />
              )}

              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play/Pause overlay */}
              {(showControls || !isPlaying) && (
                <PlayButton onClick={togglePlay} isPlaying={isPlaying} />
              )}

              {/* Video info overlay - bottom */}
              {!isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10"
                >
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-1">
                    {location}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Floating hearts decoration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 text-rose-400/40"
            >
              <HeartIcon className="w-6 h-6" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-6 top-1/3 text-rose-400/30"
            >
              <HeartIcon className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Right decorative text - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-start text-left max-w-xs"
          >
            <FloralCorner className="mb-6 -scale-x-100" />
            <blockquote className="text-stone-300 text-xl font-serif italic leading-relaxed">
              "I had been praying for this moment, and when it came, 
              <span className="text-amber-300"> God's faithfulness overwhelmed me.</span>"
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-stone-500 text-sm tracking-widest uppercase">{location}</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-stone-500" />
            </div>
          </motion.div>
        </div>

        {/* Mobile quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="lg:hidden mt-10 text-center px-4"
        >
          <blockquote className="text-stone-300 text-lg font-serif italic leading-relaxed max-w-md mx-auto">
            "In that moment, time stood still and my heart knew — 
            <span className="text-rose-300"> this is forever.</span>"
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-stone-600" />
            <span className="text-stone-500 text-sm tracking-widest uppercase">{date}</span>
            <div className="w-8 h-px bg-stone-600" />
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
            <div className="flex gap-1">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                className="w-1.5 h-1.5 rounded-full bg-rose-400"
              />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
              />
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-1.5 h-1.5 rounded-full bg-rose-400"
              />
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}