"use client";

import CTA from "@/components/history/CTA";
import ImageCarousel from "@/components/history/carousel";
import Timeline from "@/components/history/timeline";
import Hero from "@/components/history/hero";

export default function HistoryPage() {
  return (
    <div className="container mx-auto mt-20 sm:mt-24 md:mt-32">
      <Hero />
      <ImageCarousel baseVelocity={100} />
      <Timeline />
      <CTA />
    </div>
  );
}
