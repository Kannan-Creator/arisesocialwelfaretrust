import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSummary from "@/components/AboutSummary";
import FAQ from "@/components/FAQ";

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <div className="pt-1">
        <AboutSummary />
        <FAQ />
      </div>
    </>
  );
}
