import React from "react";
import { galleryData } from "@/constants/galleryData";

export default function GalleryPage() {
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
          <h1 className="display-4 text-white animate-fade-up mb-4">Our Activity Gallery</h1>
          <p className="text-white fs-5 mb-0 animate-fade-up" style={{ animationDelay: '0.2s', maxWidth: '700px', margin: '0 auto' }}>
            Explore moments and memories from our various community outreach and welfare programs.
          </p>
        </div>
      </div>

      <div className="container-modern section-padding" id="gallery">
        <div className="row g-4">
          {galleryData.map((item, index) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 wow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card overflow-hidden h-100 d-flex flex-column">
                
                {/* Image Container */}
                <div className="position-relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <a data-lightbox="portfolio" href={item.fullImage}>
                    <img
                      alt={`Gallery Item ${item.id}`}
                      className="img-fluid w-100 h-100"
                      src={item.thumbnail}
                      style={{ objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
                    />
                  </a>
                </div>

                {/* Footer/Link */}
                <div className="p-3 bg-white text-center flex-grow-1 d-flex flex-column justify-content-center">
                  {item.linkUrl ? (
                    <a 
                      href={item.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="fw-bold text-primary-modern text-uppercase d-inline-flex align-items-center justify-content-center gap-2"
                      style={{ fontSize: '0.9rem', letterSpacing: '1px' }}
                    >
                      {item.linkText}
                      <i className="fa fa-external-link"></i>
                    </a>
                  ) : (
                    <span className="text-muted" style={{ fontSize: '0.9rem' }}>Activity Photo</span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
