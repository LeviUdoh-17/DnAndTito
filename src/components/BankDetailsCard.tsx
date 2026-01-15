import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// --- Data: Single Bank Detail ---
const accountDetails = {
  bankName: "United Bank for Africa, UBA",
  accountName: "Akinola Boludade",
  accountNumber: "2319849022",
};

// --- Sub-Component: The "Private Banking" Card ---
const BankDetailsCard = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField("number");
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-24 md:mt-32">
       {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">The Future Fund</h3>
        <p className="text-stone-500 font-sans font-light">For those who prefer a direct contribution.</p>
      </div>

      {/* The "Black Card" Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-[#1c1917] rounded-[2rem] shadow-2xl shadow-stone-900/20 p-8 md:p-12 text-stone-200"
      >
        {/* Decorative background noise for texture */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Gold sheen gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Account Details */}
        <div className="relative z-10 flex flex-col items-center gap-8 text-center pt-4">
          
          {/* Bank Name */}
          <div className="space-y-1">
            <span className="block text-[10px] uppercase tracking-widest text-stone-500">Bank Name</span>
            <div className="flex items-center gap-3 justify-center">
                <p className="font-serif text-3xl text-stone-100">{accountDetails.bankName}</p>
            </div>
          </div>

          {/* Account Number (Click to Copy) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCopy(accountDetails.accountNumber)}
            className="group relative px-8 py-5 bg-white/5 border border-white/10 rounded-xl transition-colors hover:bg-white/10 hover:border-amber-500/30 w-full md:w-auto min-w-[300px]"
          >
            <span className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2 group-hover:text-amber-500/80 transition-colors">
              Account Number
            </span>
            <div className="flex items-center justify-center gap-4">
              <span className="font-mono text-3xl md:text-4xl text-white tracking-widest">
                {accountDetails.accountNumber}
              </span>
              
              {/* Copy Icon / Checkmark */}
              <div className="text-stone-500 group-hover:text-amber-400">
                <AnimatePresence mode="wait">
                  {copiedField === 'number' ? (
                    <motion.svg 
                      key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg 
                      key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* "Copied" Tooltip */}
            <AnimatePresence>
              {copiedField === 'number' && (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-amber-400 font-sans tracking-wide"
                >
                  Copied to clipboard
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Account Name */}
          <div className="space-y-1">
             <span className="block text-[10px] uppercase tracking-widest text-stone-500">Account Name</span>
             <p className="font-sans text-lg text-stone-300 tracking-wide">{accountDetails.accountName}</p>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export { BankDetailsCard };