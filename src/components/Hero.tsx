import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';

// Hashtags for cycling animation
const hashtags = [
  "#ourforeverlookslikethis",
  "#TítòTémi",
  "#TT2026",
  "#theakinsola's"
];

// Assets from your story data
const heroSlides = [
  { 
    type: 'image', 
    src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1770295746/dntito_-_Edited_l6qeqj.png' 
  },
  { 
    type: 'image', 
    src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1770322773/2_op47rt.webp' 
  },
  { 
    type: 'image', 
    // src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1770300217/631eaa19-51c2-4e63-b01e-83cb5a5d1e31_1_j5xezi.png' 
    src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1770322773/1_gmtlkl.webp' 
  },
  { 
    type: 'image', 
    src: 'https://res.cloudinary.com/drnwxb8cm/image/upload/v1770322773/3_ensnqo.webp' 
  },
 ];

export default function MaskedVideoHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentHashtag, setCurrentHashtag] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    // Auto-advance hashtags
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHashtag((prev) => (prev + 1) % hashtags.length);
        }, 3000); // 3 seconds per hashtag
        return () => clearInterval(timer);
    }, []);

    return (
        <main id="hero" className="h-screen w-full bg-white flex items-center justify-center">
            <div className="relative w-full h-full md:w-[98%] md:h-[94%] border-none md:rounded-tl-[3rem] md:rounded-br-[3rem] overflow-hidden shadow-2xl bg-stone-900">
                
                {/* <img src="https://res.cloudinary.com/drnwxb8cm/image/upload/v1770295746/dntito_-_Edited_l6qeqj.png" className="absolute inset-0 w-full h-full object-cover" alt="DN and Tito's Hero Pic" /> */}

                {/* --- ORIGINAL VIDEO (COMMENTED OUT) --- */}
                {/* <video className="absolute inset-0 w-full h-full object-cover" src="DN&TITO_Template.mp4" autoPlay loop muted /> */}

                {/* --- NEW SLIDESHOW --- */}
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {heroSlides[currentSlide].type === 'video' ? (
                            <video 
                                className="w-full h-full object-cover" 
                                src={heroSlides[currentSlide].src} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                            />
                        ) : (
                            <img 
                                className="w-full h-full object-cover" 
                                src={heroSlides[currentSlide].src} 
                                alt="Couple Moment" 
                            />
                        )}
                    </motion.div>
                </AnimatePresence> 

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

                <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-12">
                    <Navbar />

                    {/* Main Text Content */}
                    <div className="flex flex-col items-center justify-center flex-1 mt-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-4xl md:text-6xl lg:text-7xl text-[#e6c07b] text-center font-serif font-normal tracking-wide leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]"
                        >
                            We are getting married
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xl md:text-2xl lg:text-3xl text-[#e6c07b] text-center font-serif font-normal tracking-wide leading-tight mt-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]"
                        >
                            Dominion & Tito
                        </motion.p>
                    </div>

                    {/* Top Right Logo Block */}
                    <div
                        style={{ clipPath: "url(#custom-clip)" }}
                        className="bg-white absolute top-[-0.9px] right-[-0.2px] w-[25rem] md:w-[30rem] h-[5rem] md:h-[6rem] flex items-start justify-center text-black shadow-lg z-20"
                    >
                        <img src="/DTLogo.png" className='pl-20 h-[2.3rem] md:h-[2.8rem] object-contain ' alt="Dominion and Tito Logo" />
                    </div>

                    {/* Bottom Left Info Block (Date + Hashtags) */}
                    <div
                        style={{ clipPath: "url(#custom-clip-2)" }}
                        className="bg-white absolute bottom-[-0.9px] left-[-0.2px] w-[28rem] md:w-[34rem] h-[7rem] md:h-[8rem] flex flex-col items-center justify-end shadow-lg pr-10"
                    >
                        <h3 className='text-xl mt-5 md:text-3xl fairplay font-semibold tracking-wide text-gray-900'>
                            February 28, 2026
                        </h3>
                        <p className='text-xs md:text-sm tracking-widest text-gray-600 uppercase mb-1'>
                            Ogun State, Nigeria
                        </p>
                        
                        {/* --- HASHTAGS WITH FADE ANIMATION --- */}
                        <div className="flex gap-3 text-[10px] md:text-xs font-bold text-[#b38728] tracking-widest uppercase mt-1 h-4 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentHashtag}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {hashtags[currentHashtag]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}