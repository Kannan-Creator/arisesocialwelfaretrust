import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import FestivalSection from "@/components/FestivalSection";
import AboutSummary from "@/components/AboutSummary";
import FAQ from "@/components/FAQ";
import { festivalConfig } from "@/config/festival";

export const metadata = {
  title: "Home | ARISE Social Welfare Trust — Learn · Earn · Return",
  description:
    "ARISE Social Welfare Trust is a Chennai-based NGO empowering underprivileged communities through education, environmental care, and elder welfare. Join us — donate, volunteer, or partner with us today.",
};

export default function Page() {
  return (
    <>
      {/* ── 1. Original Website Hero Carousel ── */}
      <HeroCarousel />

      {/* ── 2. New Festival Section (Above "Who We Are" - Toggleable via src/config/festival.js) ── */}
      {festivalConfig.enabled && <FestivalSection />}

      {/* ── 3. Original Existing Sections (Who We Are & FAQ) ── */}
      <div className="pt-1">
        <AboutSummary />
        <FAQ />
      </div>
    </>
  );
}
