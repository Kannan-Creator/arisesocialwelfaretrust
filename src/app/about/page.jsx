import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for About/Who We Are Page */
        .about-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        @media (max-width: 991px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        .about-image-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/3;
        }

        .about-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .about-image-card:hover .about-img {
          transform: scale(1.04);
        }

        .about-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .about-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .about-p {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .about-highlight-box {
          background: #ffffff;
          border-left: 4px solid var(--primary);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          box-shadow: var(--shadow-sm);
          margin-bottom: 1.5rem;
        }

        .about-highlight-text {
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.5;
          color: var(--foreground);
        }

        /* Mantra Cards Styling */
        .about-mantra-section {
          background: #ffffff;
          padding: 5rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .about-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .about-section-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .about-section-desc {
          color: var(--foreground-muted);
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.05rem;
        }

        .about-mantra-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .about-mantra-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-mantra-card {
          background: var(--background);
          border-radius: var(--radius-md);
          padding: 2.5rem 2rem;
          text-align: center;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .about-mantra-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary);
          transform: scaleX(0);
          transition: transform var(--transition-normal);
        }

        .about-mantra-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          background: #ffffff;
        }

        .about-mantra-card:hover::before {
          transform: scaleX(1);
        }

        .about-mantra-icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        .about-mantra-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }

        .about-mantra-desc {
          color: var(--foreground-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Focus Area Grid Styles */
        .about-focus-section {
          padding: 5rem 0;
        }

        .about-focus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 991px) {
          .about-focus-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 575px) {
          .about-focus-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-focus-card {
          background: #ffffff;
          padding: 2rem 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          text-align: center;
          transition: all var(--transition-fast);
        }

        .about-focus-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .about-focus-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.2rem;
          color: rgba(255, 144, 0, 0.15);
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .about-focus-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
        }

        .about-focus-desc {
          font-size: 0.9rem;
          color: var(--foreground-muted);
          line-height: 1.5;
        }

        /* Mission and Vision Columns */
        .about-mv-section {
          background: linear-gradient(180deg, #ffffff 0%, var(--background) 100%);
          padding: 5rem 0;
          border-top: 1px solid var(--border);
        }

        .about-mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .about-mv-grid {
            grid-template-columns: 1fr;
          }
        }

        .about-mv-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .about-mv-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
        }

        .about-mv-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .about-mv-p {
          color: var(--foreground-muted);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .about-mv-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .about-mv-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--foreground);
        }

        .about-mv-item i {
          color: var(--primary);
          margin-top: 0.25rem;
        }
      ` }} />

      <HeroCarousel />

      {/* Main Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-hero-grid">
            {/* Image Block */}
            <div className="about-image-card wow fadeInLeft">
              <img
                alt="ARISE Social Welfare Trust Founding Members"
                className="about-img"
                src="/storage/files/root143/whatsapp-image-2026-01-14-at-120506-pm.jpeg"
              />
            </div>

            {/* Story Content */}
            <div className="wow fadeInRight" data-wow-delay="0.1s">
              <span className="about-tag">Who We Are</span>
              <h1 className="about-title">About ARISE Social Welfare Trust</h1>
              <p className="about-p">
                ARISE Social Welfare Trust is a purpose-driven, system-oriented
                social service organization founded by Pitchaimani Ramasamy along
                with a close group of 35-years bonded friends from the Ramakrishna
                Mission school background.
              </p>
              <div className="about-highlight-box">
                <p className="about-highlight-text">
                  "ARISE was not created as a charity platform. It was created as a
                  responsibility platform to give back to society with structure,
                  discipline, and long-term commitment."
                </p>
              </div>
              <p className="about-p">
                Our journey is deeply rooted in gratitude. Gratitude to our school,
                our teachers, and society at large. We maintain a strong belief
                that what we have received must be returned with purpose, integrity,
                and active engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mantra Section */}
      <section className="about-mantra-section">
        <div className="about-container">
          <div className="about-section-header wow fadeInUp">
            <span className="about-tag">Our Philosophy</span>
            <h2 className="about-section-title">Core Mantra</h2>
            <p className="about-section-desc">
              We believe service should not be emotional but intentional; support
              should not be random but systematic; impact should not be temporary
              but sustainable.
            </p>
          </div>

          <div className="about-mantra-grid">
            {/* Learn */}
            <div className="about-mantra-card wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-mantra-icon">
                <i className="fa fa-book"></i>
              </div>
              <h3 className="about-mantra-name">Learn</h3>
              <p className="about-mantra-desc">
                We learn from society, absorbing lessons of resilience, observing
                challenges, and finding gaps where support is urgently needed.
              </p>
            </div>

            {/* Earn */}
            <div className="about-mantra-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-mantra-icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <h3 className="about-mantra-name">Earn</h3>
              <p className="about-mantra-desc">
                We earn through responsibility, building professional careers and
                gathering resources with absolute integrity and transparency.
              </p>
            </div>

            {/* Return */}
            <div className="about-mantra-card wow fadeInUp" data-wow-delay="0.3s">
              <div className="about-mantra-icon">
                <i className="fa fa-heart"></i>
              </div>
              <h3 className="about-mantra-name">Return</h3>
              <p className="about-mantra-desc">
                We return through service, channeling resources directly back into
                underprivileged communities to create permanent, positive shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas (What makes us different) */}
      <section className="about-focus-section">
        <div className="about-container">
          <div className="about-section-header wow fadeInUp">
            <span className="about-tag">System Driven Approach</span>
            <h2 className="about-section-title">What Makes ARISE Different</h2>
            <p className="about-section-desc">
              We stand apart because of our structured methodology. We prioritize
              durability and accountability over emotional reactions.
            </p>
          </div>

          <div className="about-focus-grid">
            <div className="about-focus-card wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-focus-num">01</div>
              <h3 className="about-focus-name">Planning</h3>
              <p className="about-focus-desc">
                Thorough requirements validation and project planning before executing any welfare action.
              </p>
            </div>

            <div className="about-focus-card wow fadeInUp" data-wow-delay="0.2s">
              <div className="about-focus-num">02</div>
              <h3 className="about-focus-name">Documentation</h3>
              <p className="about-focus-desc">
                Detailed reporting and complete financial transparency before displaying our outcomes.
              </p>
            </div>

            <div className="about-focus-card wow fadeInUp" data-wow-delay="0.3s">
              <div className="about-focus-num">03</div>
              <h3 className="about-focus-name">Discipline</h3>
              <p className="about-focus-desc">
                Maintaining steady, dedicated operational habits before scaling or expanding our reach.
              </p>
            </div>

            <div className="about-focus-card wow fadeInUp" data-wow-delay="0.4s">
              <div className="about-focus-num">04</div>
              <h3 className="about-focus-name">Sustainability</h3>
              <p className="about-focus-desc">
                Securing long-term resources and presence before expanding projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-mv-section">
        <div className="about-container">
          <div className="about-mv-grid">
            {/* Mission Card */}
            <div className="about-mv-card wow fadeInLeft">
              <div className="about-mv-icon">
                <i className="fa fa-paper-plane"></i>
              </div>
              <h2 className="about-mv-title">Our Mission</h2>
              <p className="about-mv-p">
                To create consistent, measurable, and dignified social impact through
                a system-driven approach, guided by the values nurtured by the
                Ramakrishna Mission.
              </p>
              <ul className="about-mv-list">
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Need-based intervention audits</span>
                </li>
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Reviewed, recorded, and monitored activities</span>
                </li>
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Continuous support over one-day relief camps</span>
                </li>
              </ul>
            </div>

            {/* Vision Card */}
            <div className="about-mv-card wow fadeInRight">
              <div className="about-mv-icon">
                <i className="fa fa-eye"></i>
              </div>
              <h2 className="about-mv-title">Our Vision</h2>
              <p className="about-mv-p">
                To provide meaningful, value-based education to rural communities,
                nurturing young minds to grow with confidence, discover potential,
                and create hopeful smiles for a brighter future.
              </p>
              <ul className="about-mv-list">
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Build dignified old-age care environments</span>
                </li>
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Enable self-reliant, resilient families</span>
                </li>
                <li className="about-mv-item">
                  <i className="fa fa-check"></i>
                  <span>Establish Arise as a trusted, CSR-ready trust</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
