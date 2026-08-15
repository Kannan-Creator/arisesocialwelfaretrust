import React from "react";

export default function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="col-lg-4 col-md-6 mb-4 wow animate-fade-up">
      <div className="glass-card overflow-hidden h-100 d-flex flex-column">
        {imageUrl && (
          <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
            <img 
              className="img-fluid w-100 h-100" 
              src={imageUrl} 
              alt={title} 
              style={{ objectFit: 'cover', transition: 'transform var(--transition-slow)' }}
            />
            {/* Hover effect for image added via CSS or inline for simplicity */}
            <div 
              className="position-absolute top-0 start-0 w-100 h-100" 
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}
            ></div>
          </div>
        )}
        <div className="p-4 flex-grow-1 d-flex flex-column bg-white">
          <h4 className="mb-3 fw-bold text-dark">{title}</h4>
          <p className="text-muted flex-grow-1">{description}</p>
          <a
            className="fw-bold text-primary-modern text-uppercase mt-3 d-inline-flex align-items-center gap-2"
            href="#"
            style={{ fontSize: '0.9rem', letterSpacing: '1px' }}
          >
            Read More
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
