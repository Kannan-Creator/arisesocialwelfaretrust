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
            <span className="act-tag">Elder Support &amp; Welfare</span>
            <h1 className="act-title">Our Yearly Activities</h1>
            <p className="act-desc">
              Dignity in the silver years is a basic human right. We coordinate
              regular and yearly support systems to provide nutrition, clothing,
              and healthcare to elders in local old age homes.
            </p>
          </div>

          {/* Stats */}
          <div className="act-stats-grid wow fadeInUp" data-wow-delay="0.1s">
            <div className="act-stat-card">
              <div className="act-stat-num">150+</div>
              <h3 className="act-stat-label">Elders Sponsored</h3>
              <p className="act-stat-desc">Receiving ongoing health monitoring and monthly nutrition support.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">4+</div>
              <h3 className="act-stat-label">Homes Supported</h3>
              <p className="act-stat-desc">Collaborative care with registered elder homes in Chennai districts.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">100%</div>
              <h3 className="act-stat-label">Volunteer Presence</h3>
              <p className="act-stat-desc">Every visit features personal interaction and warm conversations.</p>
            </div>
          </div>

          {/* Block 1: Festival Distributions */}
          <div className="act-block-grid">
            <div className="act-block-img-wrapper wow fadeInLeft">
              <img
                alt="Festival clothing distribution"
                className="act-block-img"
                src="/storage/files/root143/img-20260126-wa0025.jpg"
              />
            </div>
            <div className="act-block-content wow fadeInRight" data-wow-delay="0.1s">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Festival Joy</span>
              <h2 className="act-block-title">Yearly Clothing &amp; Meal Distributions</h2>
              <p className="act-block-text">
                During key festivals (Diwali, Pongal), we distribute new clothes,
                hygiene products, and prepare special festive lunches for the residents of
                our partner old age homes. Celebrating together makes the elders feel
                remembered, respected, and loved.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Distribution of quality dhotis, sarees, towels, and bedsheets.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Preparation of fresh, high-nutrition traditional meals.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Cultural activities involving youth volunteers and elders.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2: Medical Camps */}
          <div className="act-block-grid">
            <div className="act-block-content wow fadeInLeft">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Health Support</span>
              <h2 className="act-block-title">Regular Health Camps &amp; Medical Aids</h2>
              <p className="act-block-text">
                Many elder homes struggle with rising medical costs. We sponsor medical checkup
                drives, bring in qualified general practitioners, and supply regular medications,
                spectacles, and walking support aids.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Basic diagnostic tests (blood sugar, pressure, eye tests).</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Provision of prescription medicines for chronic ailments.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Sponsoring minor surgeries (cataracts) in alliance with eye hospitals.</span>
                </li>
              </ul>
            </div>
            <div className="act-block-img-wrapper wow fadeInRight" data-wow-delay="0.1s">
              <img
                alt="Medical checkup camp"
                className="act-block-img"
                src="/storage/files/root143/img-20251018-145030008.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
