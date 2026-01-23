import type { WeddingDate, Event, DressCode, Contact } from "./types";

export const weddingDate: WeddingDate = {
  day: "Saturday",
  date: "28",
  month: "February",
  year: "2026",
};

export const events: Event[] = [
  {
    id: "engagement",
    name: "Engagement Ceremony",
    time: "8:00 AM",
    venue: "CRNPS Hall",
    address: "Redemption Camp, Ogun State",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </svg>
    ),
  },
  {
    id: "church",
    name: "Church Service",
    time: "11:00 AM",
    venue: "Bible College Chapel",
    address: "Redemption Camp, Ogun State",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M18 21V7.5l-6-4.5-6 4.5V21" />
        <path d="M12 3v4" />
        <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
        <path d="M3 21h18" />
        <path d="M10 7h4" />
      </svg>
    ),
  },
  {
    id: "reception",
    name: "Reception",
    time: "Following Church Service",
    venue: "By Invitation Only",
    address: "Details provided upon RSVP confirmation",
    isRestricted: true,
    note: "Strictly by Invitation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 12h6m-3-3v6" />
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

export const dressCodes: DressCode[] = [
  {
    family: "Bride's Family",
    colors: ["Purple", "Gold"],
    colorClasses: ["bg-purple-600", "bg-amber-400"],
  },
  {
    family: "Groom's Family",
    colors: ["Green", "Gold"],
    colorClasses: ["bg-emerald-600", "bg-amber-400"],
  },
];

export const contacts: Contact[] = [
  { name: "Kemi", phone: "+234 801 234 5678", role: "Bride's Side" },
  { name: "James", phone: "+234 802 345 6789", role: "Groom's Side" },
];
