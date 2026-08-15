import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for Activities pages */
        .act-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .act-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .act-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .act-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .act-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.25rem;
          letter-spacing: -0.5px;
        }

        .act-desc {
          color: var(--foreground-muted);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Stats Section */
        .act-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        @media (max-width: 768px) {
          .act-stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .act-stat-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }

        .act-stat-num {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .act-stat-label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--foreground);
          margin-bottom: 0.25rem;
        }

        .act-stat-desc {
          font-size: 0.9rem;
          color: var(--foreground-muted);
        }

        /* Content Blocks split layout */
        .act-block-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        @media (max-width: 991px) {
          .act-block-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .act-block-grid:nth-child(even) {
            display: flex;
            flex-direction: column-reverse;
          }
        }

        .act-block-img-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/3;
        }

        .act-block-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .act-block-img-wrapper:hover .act-block-img {
          transform: scale(1.03);
        }

        .act-block-content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .act-block-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          color: var(--foreground);
        }

        .act-block-text {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          line-height: 1.7;
        }

        .act-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .act-bullet-item {
          display: flex;
          gap: 0.75rem;
          font-size: 0.95rem;
        }

        .act-bullet-item i {
          color: var(--primary);
          margin-top: 0.25rem;
        }
      ` }} />

      <HeroCarousel />

      <section className="act-section">
        <div className="act-container">
          {/* Header */}
          <div className="act-header wow fadeInUp">
            <span className="act-tag">Environmental Care</span>
            <h1 className="act-title">Our Monthly Activities</h1>
            <p className="act-desc">
              Preserving nature is safeguarding our future. Every month, Arise Social
              Welfare Trust drives eco-initiatives, organizing tree plantations and cleanups
              to create a cleaner, greener Chennai.
            </p>
          </div>

          {/* Stats */}
          <div className="act-stats-grid wow fadeInUp" data-wow-delay="0.1s">
            <div className="act-stat-card">
              <div className="act-stat-num">500+</div>
              <h3 className="act-stat-label">Saplings Planted</h3>
              <p className="act-stat-desc">Native tree saplings distributed and planted in public spaces.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">12+</div>
              <h3 className="act-stat-label">Clean-up Drives</h3>
              <p className="act-stat-desc">Monthly cleanup initiatives executed in local neighborhoods.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">1000+</div>
              <h3 className="act-stat-label">Community Reach</h3>
              <p className="act-stat-desc">Residents educated in plastic reduction and green waste management.</p>
            </div>
          </div>

          {/* Block 1: Monthly Sapling Drives */}
          <div className="act-block-grid">
            <div className="act-block-img-wrapper wow fadeInLeft">
              <img
                alt="Volunteers planting saplings"
                className="act-block-img"
                src="/storage/files/root143/picsart-26-01-20-12-01-22-210.jpg"
              />
            </div>
            <div className="act-block-content wow fadeInRight" data-wow-delay="0.1s">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Green Campaign</span>
              <h2 className="act-block-title">Monthly Tree Plantation &amp; Seedball Distribution</h2>
              <p className="act-block-text">
                Deforestation and urbanization are impacting our climate directly. We conduct
                monthly tree planting campaigns, placing native species (Neem, Pungai, Vaagai)
                in school campuses, temple grounds, and public parks, ensuring volunteer care
                to guarantee high survival rates.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Focus on native trees that require less water and support local fauna.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Seedball distribution drives during monsoon seasons.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Partnerships with local residential associations for post-plantation care.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2: Environmental Cleanups */}
          <div className="act-block-grid">
            <div className="act-block-content wow fadeInLeft">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Clean Community</span>
              <h2 className="act-block-title">Neighborhood Clean-up &amp; Plastic Awareness</h2>
              <p className="act-block-text">
                Our volunteers dedicate one Sunday every month to clean up public lakesides,
                parks, or street blocks. We don't just pick up litter; we install trash cans
                and engage directly with merchants to promote plastic-free habits.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Segregated waste collections sending recyclables to certified partners.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Awareness flyers explaining organic vs inorganic segregation at home.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Painting walls with clean green messages to deter future garbage dumps.</span>
                </li>
              </ul>
            </div>
            <div className="act-block-img-wrapper wow fadeInRight" data-wow-delay="0.1s">
              <img
                alt="Environmental cleanup drive"
                className="act-block-img"
                src="/storage/files/root143/whatsapp-image-2026-01-14-at-30011-pm-2.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
