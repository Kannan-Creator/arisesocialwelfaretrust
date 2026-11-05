import React from "react";
import VideoGallery from "@/components/VideoGallery";

export const metadata = {
  title: "Video Gallery | ARISE Social Welfare Trust",
  description: "Watch videos of our activities and initiatives.",
};

export default function VideosPage() {
  // ⚠️ Replace these YouTube video IDs with your actual IDs from youtube.com/@ariseswt
  const videoList = [
    {
      type: "youtube",
      title: "ARISE Social Welfare Trust — Introduction & Vision",
      videoId: "REPLACE_WITH_ACTUAL_ID_1",
      description: "An overview of who we are, our core mantra (Learn | Earn | Return), and the communities we serve across Chennai.",
    },
    {
      type: "youtube",
      title: "Stationery Distribution Drive 2026 — Vivek Vihar Tuition Centre",
      videoId: "REPLACE_WITH_ACTUAL_ID_2",
      description: "Watch highlights from our June 2026 stationery drive where 200+ students received notebooks, bags, and textbooks.",
    },
    {
      type: "youtube",
      title: "Tree Plantation Campaign — Mangadu, Chennai",
      videoId: "REPLACE_WITH_ACTUAL_ID_3",
      description: "Our monthly green drive where volunteers planted 300+ native saplings across schools and public parks in Chennai.",
    },
    {
      type: "youtube",
      title: "Elder Welfare Health Camp — October 2025",
      videoId: "REPLACE_WITH_ACTUAL_ID_4",
      description: "A glimpse into our elder care health camp where 120+ senior citizens received free medical consultations and medicines.",
    },
    {
      type: "youtube",
      title: "Festival Celebration at Old Age Home — Pongal 2026",
      videoId: "REPLACE_WITH_ACTUAL_ID_5",
      description: "ARISE volunteers celebrated Pongal with elders at our partner old age homes — with food, clothes, and joy.",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div 
        className="container-fluid page-header py-5 mb-5 wow fadeIn" 
        data-wow-delay="0.1s"
        style={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/storage/files/root143/whatsapp-image-2026-01-14-at-103349-am.jpeg) center center no-repeat',
          backgroundSize: 'cover',
          marginTop: '70px'
        }}
      >
        <div className="container-modern text-center py-5">
          <h1 className="display-4 text-white animate-fade-up mb-4">Video Gallery</h1>
          <p className="text-white fs-5 mb-0 animate-fade-up" style={{ animationDelay: '0.2s', maxWidth: '700px', margin: '0 auto' }}>
            Watch highlights of our activities, community programs, and exclusive behind-the-scenes footage hosted directly on our platform.
          </p>
        </div>
      </div>

      {/* Video Gallery Component */}
      <VideoGallery videos={videoList} />
    </>
  );
}
