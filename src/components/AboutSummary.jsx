import React from "react";

export default function AboutSummary() {
  return (
    <>
      {/* Introduction Section */}
      <div className="container-modern section-padding" id="about">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow animate-fade-up">
            <div className="position-relative overflow-hidden rounded shadow-lg" style={{ borderRadius: 'var(--radius-lg)' }}>
              <img
                className="img-fluid w-100"
                src="/storage/files/root143/whatsapp-image-2026-01-14-at-103349-am.jpeg"
                alt="About Arise"
                style={{ objectFit: 'cover', minHeight: '400px' }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h5 className="text-uppercase text-primary-modern fw-bold mb-2 tracking-wide">Who We Are</h5>
            <h1 className="mb-4 display-5 fw-bold text-gradient">ARISE Social Welfare Trust</h1>
            <div className="fs-6 text-muted mb-4">
              <p className="mb-4">
                The Trust is humbly entering its second year of service and purpose. All ARISE Social Welfare Trust communications reflect our Core Mantra — <strong>Learn | Earn | Return</strong> — clearly connecting service, sustainability, and societal impact with gratitude and purpose.
              </p>
              <p className="mb-4">
                Guided by this purpose-driven vision, we have contributed in meaningful ways to the Ramakrishna Mission, Old Age Homes, and Trusts supporting differently-abled children across education, environmental care, and sustainable transformation.
              </p>
              <p>
                As we move forward, let us remain focused on strengthening our team and scaling ARISE as a responsible and impactful organization, creating sustainable value for society.
              </p>
            </div>
            <a href="/about" className="btn-modern mt-3">Discover More</a>
          </div>
        </div>
      </div>

      {/* 1st Year Anniversary Highlight */}
      <div className="py-5" style={{ background: 'var(--primary-light)', color: 'white' }}>
        <div className="container-modern text-center py-5">
          <h2 className="display-4 fw-bold mb-3 animate-fade-up text-white">1st Year Anniversary</h2>
          <p className="fs-5 mb-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>Celebrating a year of continuous service, growth, and community empowerment.</p>
        </div>
      </div>

      {/* Events Section (Stationery Distribution) */}
      <div className="container-modern section-padding">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 wow animate-fade-up">
             <div className="glass-card p-5 h-100">
              <h3 className="text-primary-modern mb-3 fw-bold text-center">Distribution Details</h3>
              <p className="text-muted mb-4 text-center">
                The event is being conducted at the <strong>Vivek Vihar Tuition Centre</strong> in Thathaimanji, run by the RKM 2024 &amp; 1999 Batch under the auspices of the Sri Ramakrishna Mission Students Home, Mylapore, Chennai.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4 mt-4">
                <div className="d-flex align-items-center gap-2 text-muted">
                  <i className="fa fa-calendar text-primary-modern fs-5"></i>
                  <span>14 June 2026</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted">
                  <i className="fa fa-clock-o text-primary-modern fs-5"></i>
                  <span>10:15 AM to 11:55 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
