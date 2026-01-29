import CityNameSwitcher from "@/components/home/CityNameSwitcher";
import CTA from "@/components/home/CTA";
import Heatmap from "@/components/home/Heatmap";
import Hero from "@/components/home/Hero";
import Infos from "@/components/home/Infos";
import Stats from "@/components/home/Stats";
import getHeatmapData from "@/lib/map";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mb-64">
        <Stats />
        <Infos />

        <CityNameSwitcher />

        <Suspense fallback={<div className="w-1/2 h-128 flex items-center justify-center">Loading map...</div>}>
          <div className="flex justify-center my-16">
            <Heatmap />
          </div>
        </Suspense>

        <CTA />
      </div>
    </>

  );
}
