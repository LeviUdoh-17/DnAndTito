"use client";

import { motion } from "framer-motion";

// --- Types & Data ---

// The Wishlist Items
const wishlistItems = [
  "Honeymoon Fund for Bali",
  "KitchenAid Stand Mixer (Cream)",
  "Home Renovation Contribution",
  "Le Creuset Dutch Oven",
  "Vintage Vinyl Record Player",
  "Nespresso Coffee Machine",
  "Airbnb Gift Cards",
  "Spa Day for Two",
];

// --- Main Component ---

export default function GiftRegistrySection() {
  return (
    <section id="registry" className="relative w-full py-24 md:py-32 overflow-hidden bg-[#FDFBF7]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />

      <div className="container relative mx-auto px-4 max-w-4xl min-h-[500px] flex items-center justify-center">
        
        {/* --- Main Content Card --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Removed backdrop-blur since there are no images behind it anymore. 
          // Made shadow slightly softer.
          className="relative z-1 w-full bg-white p-12 md:p-16 shadow-xl rounded-[2rem] text-center border border-stone-100"
        >
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 tracking-tight mb-6">
              The Best Gift is You
            </h2>
            <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed font-sans">
              Your presence at our wedding is the greatest gift of all. 
              However, for those who have expressed a wish to offer a token of love, we have compiled a few things that would help us build our new life together.
            </p>
          </div>

          {/* The List - Clean, Sans-Serif, No Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-left max-w-2xl mx-auto mb-12">
            {wishlistItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center py-2 border-b border-stone-100"
              >
                {/* Simple text bullet */}
                <span className="text-stone-300 mr-4 text-xs">●</span>
                <span className="text-stone-800 font-sans text-lg font-medium tracking-wide tracking-normal">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Closing & CTA */}
          <div>
             <p className="text-stone-600 font-sans mb-8">Thank you for your generosity and love.</p>
             {/* <button className="px-10 py-4 bg-stone-900 text-white font-sans font-medium rounded-full hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 tracking-wide">
                View Registry Details
             </button> */}
          </div>

        </motion.div>

      </div>
    </section>
  );
}