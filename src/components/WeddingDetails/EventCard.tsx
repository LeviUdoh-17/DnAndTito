import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import type { Event } from "./types";

interface EventCardProps {
  event: Event;
  index: number;
}

export const EventCard = ({ event, index }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className={cn(
      "relative group",
      event.isRestricted && "order-last lg:order-none"
    )}
  >
    <div
      className={cn(
        "relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border transition-all duration-300 h-full",
        event.isRestricted
          ? "border-amber-200 hover:border-amber-300 hover:shadow-amber-100/50"
          : "border-stone-100 hover:border-purple-200 hover:shadow-purple-100/50"
      )}
    >
      {/* Restricted badge */}
      {event.isRestricted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full shadow-md">
          {event.note}
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
          event.isRestricted
            ? "bg-amber-50 text-amber-600 group-hover:bg-amber-100"
            : "bg-purple-50 text-purple-600 group-hover:bg-purple-100"
        )}
      >
        {event.icon}
      </div>

      {/* Event name */}
      <h3 className="text-xl md:text-2xl font-serif text-stone-800 mb-4">
        {event.name}
      </h3>

      {/* Details */}
      <div className="space-y-3">
        {/* Time */}
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 mt-0.5 text-stone-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-stone-400 uppercase tracking-wide">Time</p>
            <p className="text-stone-700 font-medium">{event.time}</p>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 mt-0.5 text-stone-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-stone-400 uppercase tracking-wide">Venue</p>
            <p className="text-stone-700 font-medium">{event.venue}</p>
            <p className="text-stone-500 text-sm">{event.address}</p>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div
        className={cn(
          "absolute bottom-0 right-0 w-16 h-16 rounded-tl-[3rem] opacity-10",
          event.isRestricted
            ? "bg-gradient-to-tl from-amber-400"
            : "bg-gradient-to-tl from-purple-400"
        )}
      />
    </div>
  </motion.div>
);
