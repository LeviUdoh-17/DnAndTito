"use client";

import { motion } from "framer-motion";
import { BankDetailsCard } from "./BankDetailsCard";

// --- Types & Data ---

const wishlistItems = [
  { 
    label: "Washing Machine", 
    category: "Laundry",
    image: "https://unsplash.com/photos/5cpBWEl6y6c/download?force=true" 
  },
  { 
    label: "Deep Freezer", 
    category: "Appliances",
    image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/69/3143292/1.jpg?8465" 
  },
  { 
    label: "TV (55 Inches)", 
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000" 
  },
  { 
    label: "Gas Cooker", 
    category: "Cooking",
    image: "https://unsplash.com/photos/hWloR2p8GBk/download?force=true" 
  },
  { 
    label: "Microwave Oven", 
    category: "Kitchen",
    image: "https://unsplash.com/photos/wnqJcgJXHXk/download?force=true" 
  },
  { 
    label: "Air Fryer", 
    category: "Healthy Living",
    image: "https://unsplash.com/photos/tdUOpMLDPGo/download?force=true" 
  },
  { 
    label: "Blender Set", 
    category: "Preparation",
    image: "https://unsplash.com/photos/ZN_86cZrSN0/download?force=true" 
  },
  { 
    label: "Toasting Machine", 
    category: "Breakfast",
    image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/0296514/1.jpg?6284" 
  },
  { 
    label: "12.5kg Gas Cylinder", 
    category: "Utility",
    image: "https://unsplash.com/photos/rwjz0jBZPqs/download?force=true"
  },
  { 
    label: "Kitchen Utensils", 
    category: "Dining",
    image: "https://unsplash.com/photos/2Cc0KnE3lCs/download?force=true"
  },
  { 
    label: "Ironing Board", 
    category: "Home Care",
    image: "https://unsplash.com/photos/gma1zfS3_6E/download?force=true"
  },
  { 
    label: "Shoe Rack", 
    category: "Organization",
    image: "https://unsplash.com/photos/gIk3ekcetd0/download?force=true"
  },
];

// --- Sub-Components ---

const NoiseBackground = () => (
  <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-multiply">
    <svg className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.6"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// --- Main Component ---

export default function GiftRegistrySection() {
  return (
    <section id="registry" className="relative w-full py-32 md:py-32 bg-[#FDFBF9] overflow-hidden">
      <NoiseBackground />

      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">

        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="inline-block py-1 px-3 border border-stone-200 rounded-full text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-stone-500 mb-6 bg-white/50 backdrop-blur-sm">
            Registry
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight mb-8">
            The Best Gift <span className="italic font-light text-stone-600">is You</span>
          </h2>
          <div className="w-px h-16 bg-gradient-to-b from-stone-300 to-transparent mx-auto mb-8" />
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Your presence is the greatest gift. However, for those who have expressed a wish to offer a token of love, we have curated a few items.
          </p>
        </motion.div>

        {/* --- The Grid (Images + Text) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {wishlistItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col bg-white border border-stone-100 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-stone-200/40 hover:-translate-y-1"
            >
              
              {/* Image Area (Top 60%) */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img 
                  src={item.image} 
                  alt={item.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle dark gradient at bottom of image for contrast if needed */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Text Area (Bottom 40%) */}
              <div className="flex flex-col flex-grow p-6 text-center">
                
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-stone-400 mb-3 block">
                  {item.category}
                </span>
                
                <h3 className="font-serif text-xl text-stone-800 leading-tight mb-2 group-hover:text-amber-900 transition-colors">
                  {item.label}
                </h3>
                
                {/* Decorative short line */}
                <div className="w-8 h-px bg-stone-200 mx-auto mt-auto group-hover:bg-amber-300 transition-colors duration-300" />
                
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- Bank Details Section --- */}
        <div className="mt-20">
             <BankDetailsCard />
        </div>

        {/* --- Footer/Note --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 text-center"
        >
          <p className="font-serif italic text-stone-400 text-lg">
            With love and gratitude, DN & Tito
          </p>
        </motion.div>

      </div>
    </section>
  );
}