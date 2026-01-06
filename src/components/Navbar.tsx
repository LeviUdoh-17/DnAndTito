"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Assuming you have lucide-react or similar icon lib

const navLinks = [
  { name: "Our Story", href: "story" },
  { name: "Gifts", href: "registry" }, // Changed href to match ID usually used for registry
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll to detect Active Section & Sticky State
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // 1. Detect Scrolled State (Threshold 50px)
      setIsScrolled(scrollY > 50);

      // 2. Detect Active Section
      const sections = ["hero", "story", "registry", "rsvp"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for better accuracy
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic Text Color Class based on Scroll State
  const textColorClass = isScrolled ? "text-stone-800" : "text-white/90";
  const hoverColorClass = isScrolled ? "hover:bg-stone-100" : "hover:bg-white/10";
  const activeBgClass = isScrolled ? "bg-stone-200 text-black" : "bg-white/20 text-white";

  return (
    <>
      <motion.div 
        className={`fixed top-8 left-3 w-full z-[1000] flex px-4 pointer-events-none`}
        animate={{
          justifyContent: isScrolled ? "center" : "flex-start"
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        <motion.nav
          layout="position"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`
            pointer-events-auto
            relative flex items-center justify-between md:justify-center gap-2 md:gap-8 
            py-2 px-4 md:px-3 md:py-2
            rounded-full border transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? "bg-white/85 border-white/50 shadow-lg shadow-stone-200/20 backdrop-blur-xl w-auto min-w-[300px]"
                : "bg-black/20 border-white/10 backdrop-blur-md w-auto"
            }
          `}
        >
          {/* --- LEFT LINK (Desktop) --- */}
          <div className="hidden md:flex items-center">
            <NavButton 
              link={navLinks[0]} 
              isActive={activeSection === navLinks[0].href}
              onClick={() => scrollTo(navLinks[0].href)}
              textColor={textColorClass}
              activeBg={activeBgClass}
              hoverBg={hoverColorClass}
            />
          </div>

          {/* --- CENTER LOGO --- */}
          <div className="px-2 flex flex-col items-center justify-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <div
              className={`
                flex flex-col items-center justify-center transition-all duration-500
                ${!isScrolled ? "scale-110" : "scale-100"}
              `}
            >
              <span
                className={`
                  font-serif font-bold text-lg leading-[0.85] tracking-tight text-center transition-all duration-500
                  ${
                    !isScrolled
                      ? "bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent drop-shadow-sm" 
                      : "text-stone-900"
                  }
                `}
              >
                DN &<br />
                TITO
              </span>
            </div>
          </div>

          {/* --- RIGHT LINK (Desktop) --- */}
          <div className="hidden md:flex items-center">
             <NavButton 
              link={navLinks[1]} 
              isActive={activeSection === navLinks[1].href}
              onClick={() => scrollTo(navLinks[1].href)}
              textColor={textColorClass}
              activeBg={activeBgClass}
              hoverBg={hoverColorClass}
            />
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${textColorClass} ${hoverColorClass}`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </motion.div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-0 w-full z-[999] px-4 flex justify-center"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl w-full max-w-sm overflow-hidden p-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`
                    w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-widest transition-colors
                    ${activeSection === link.href ? "bg-stone-100 text-stone-900" : "text-stone-500 hover:bg-stone-50 hover:text-stone-800"}
                  `}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Helper Component for Desktop Buttons ---
const NavButton = ({ link, isActive, onClick, textColor, activeBg, hoverBg }: any) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300
      ${isActive ? activeBg : `${textColor} ${hoverBg}`}
    `}
  >
    {link.name}
  </button>
);

export default Navbar;