import React from "react";
import VideoGallery from "@/components/VideoGallery";

export const metadata = {
  title: "Video Gallery | ARISE Social Welfare Trust",
  description: "Watch videos of our activities and initiatives.",
};

export default function VideosPage() {
  // Replace these with actual Video IDs and paths
  const videoList = [
    {
      type: "youtube",
      title: "ARISE Introduction & Vision",
      videoId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID!
      description: "Learn more about our core mantra: Learn | Earn | Return.",
    },
    {
      type: "youtube",
      title: "Community Outreach 2026",
      videoId: "3JZ_D3ELwOQ", // Replace with your actual YouTube video ID!
      description: "Highlights from our recent community outreach programs.",
    },
    {
      type: "local",
      title: "Behind The Scenes (Not on YouTube)",
      url: "/storage/files/placeholder-video.mp4", // Upload an mp4 to public/storage/files/ and update this path
      description: "Exclusive footage of our team preparing for the Stationery Distribution Programme.",
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
