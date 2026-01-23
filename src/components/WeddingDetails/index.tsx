import { weddingDate, events, dressCodes, contacts } from "./data";
import { SectionHeader } from "./SectionHeader";
import { DateCard } from "./DateCard";
import { EventCard } from "./EventCard";
import { DecorativeDivider } from "./DecorativeDivider";
import { DressCodeCard } from "./DressCodeCard";
import { RSVPCard } from "./RSVPCard";
import { ContactCard } from "./ContactCard";
import { MapPlaceholder } from "./MapPlaceholder";
import { FloralAccent } from "./FloralAccent";
import { BottomNote } from "./BottomNote";

export default function WeddingDetailsSection() {
  return (
    <section id="details" className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden bg-[#FDFBF7]">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Floral accents */}
      <FloralAccent className="absolute top-12 left-8 rotate-12 hidden lg:block" />
      <FloralAccent className="absolute top-12 right-8 -rotate-12 -scale-x-100 hidden lg:block" />

      <div className="container relative mx-auto px-4 max-w-6xl">
        <SectionHeader />

        {/* Date Card */}
        <div className="flex justify-center mb-16">
          <DateCard date={weddingDate} />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <DecorativeDivider />

        {/* Dress Code */}
        <div className="max-w-2xl mx-auto mb-12">
          <DressCodeCard dressCodes={dressCodes} />
        </div>

        <DecorativeDivider />

        {/* RSVP & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <RSVPCard />
          <div className="flex flex-col gap-6">
            <ContactCard contacts={contacts} />
            <MapPlaceholder />
          </div>
        </div>

        <BottomNote />
      </div>
    </section>
  );
}
