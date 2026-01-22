import { useState } from "react";
import { stories } from "./storyData";
import { SectionHeader } from "./SectionHeader";
import { StoryToggle } from "./StoryToggle";
import { PhotoGallery } from "./PhotoGallery";
import { StoryCard } from "./StoryCard";
import { DesktopTimeline, MobileTimeline } from "./Timeline";

export default function OurStorySection() {
  const [activeStory, setActiveStory] = useState<"dn" | "tito">("dn");
  const [direction, setDirection] = useState(1);

  const handleToggle = (story: "dn" | "tito") => {
    setDirection(story === "tito" ? 1 : -1);
    setActiveStory(story);
  };

  const currentStory = stories[activeStory];

  return (
    <section id="story" className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-[#FDFBF7]">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 max-w-7xl">
        <SectionHeader />

        <StoryToggle activeStory={activeStory} onToggle={handleToggle} />

        {/* Main Content Area */}
        <div className="flex items-start justify-center gap-4 lg:gap-8">
          {/* Left Photo Gallery - Desktop */}
          <PhotoGallery 
            media={stories.dn.media} 
            side="left" 
            isActive={activeStory === "dn"} 
          />

          {/* Center Story Card */}
          <StoryCard 
            story={currentStory} 
            activeStory={activeStory} 
            direction={direction} 
          />

          {/* Right Photo Gallery - Desktop */}
          <PhotoGallery 
            media={stories.tito.media} 
            side="right" 
            isActive={activeStory === "tito"} 
          />
        </div>

        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </section>
  );
}
