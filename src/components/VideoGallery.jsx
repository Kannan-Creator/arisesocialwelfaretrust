"use client";
import React from "react";

export default function VideoGallery({ videos }) {
  return (
    <div className="container-modern section-padding">
      <div className="row g-5">
        {videos.map((video, index) => (
          <div key={index} className="col-lg-6 wow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="glass-card overflow-hidden h-100 d-flex flex-column">
              
              {/* Video Player Container */}
              <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}>
                
                {video.type === 'youtube' ? (
                  <iframe
                    className="position-absolute top-0 start-0 w-100 h-100"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    className="position-absolute top-0 start-0 w-100 h-100"
                    controls
                    preload="metadata"
                    style={{ objectFit: 'cover' }}
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

              </div>

              {/* Video Info */}
              <div className="p-4 bg-white flex-grow-1">
                <h4 className="fw-bold text-dark mb-2">{video.title}</h4>
                {video.description && (
                  <p className="text-muted mb-0">{video.description}</p>
                )}
                <div className="mt-3">
                  <span className="badge" style={{ background: 'var(--primary-light)', color: 'white' }}>
                    {video.type === 'youtube' ? 'YouTube' : 'Internal Video'}
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
