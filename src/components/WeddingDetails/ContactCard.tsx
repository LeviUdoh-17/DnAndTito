import { motion } from "framer-motion";
import type { Contact } from "./types";

interface ContactCardProps {
  contacts: Contact[];
}

export const ContactCard = ({ contacts }: ContactCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 text-center"
  >
    <h3 className="text-xl font-serif text-white mb-2">Need More Information?</h3>
    <p className="text-stone-400 text-sm mb-6">
      Reach out to our coordinators for any questions
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {contacts.map((contact, idx) => (
        <a
          key={idx}
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-purple-300">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-white font-medium">{contact.name}</p>
            <p className="text-stone-400 text-sm">{contact.role}</p>
            <p className="text-purple-300 text-sm mt-0.5">{contact.phone}</p>
          </div>
        </a>
      ))}
    </div>
  </motion.div>
);
