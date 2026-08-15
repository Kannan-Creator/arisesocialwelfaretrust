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
            <span className="act-tag">Educational Welfare</span>
            <h1 className="act-title">Our Daily Activities</h1>
            <p className="act-desc">
              Education is the primary catalyst for social change. We coordinate
              and support daily educational initiatives to empower underprivileged
              children and build self-reliant futures.
            </p>
          </div>

          {/* Stats */}
          <div className="act-stats-grid wow fadeInUp" data-wow-delay="0.1s">
            <div className="act-stat-card">
              <div className="act-stat-num">200+</div>
              <h3 className="act-stat-label">Students Supported</h3>
              <p className="act-stat-desc">Receiving active sponsorship and daily tutoring assistance.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">500+</div>
              <h3 className="act-stat-label">Stationery Kits</h3>
              <p className="act-stat-desc">Notebooks, bags, and textbooks distributed to local schools.</p>
            </div>
            <div className="act-stat-card">
              <div className="act-stat-num">100%</div>
              <h3 className="act-stat-label">System Driven</h3>
              <p className="act-stat-desc">Every donation and project audited, tracked, and transparently reported.</p>
            </div>
          </div>

          {/* Block 1: Vivek Vihar Tuition Centre */}
          <div className="act-block-grid">
            <div className="act-block-img-wrapper wow fadeInLeft">
              <img
                alt="Students studying at Vivek Vihar Tuition Centre"
                className="act-block-img"
                src="/storage/files/root143/whatsapp-image-2026-01-14-at-103349-am.jpeg"
              />
            </div>
            <div className="act-block-content wow fadeInRight" data-wow-delay="0.1s">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Daily Learning Center</span>
              <h2 className="act-block-title">Vivek Vihar Tuition Centre</h2>
              <p className="act-block-text">
                Located in Thathaimanji, Chennai, the tuition centre is run under the
                auspices of the Sri Ramakrishna Mission Students Home. We support daily
                evening tutorials where rural children receive focused homework help,
                subject guidance, and value-based lessons.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Dedicated local tutors supporting grades 1 to 10.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Daily meals/snacks and safe environment for children.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Regular assessment of student progress and report cards.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2: Stationery and Textbook Distribution */}
          <div className="act-block-grid">
            <div className="act-block-content wow fadeInLeft">
              <span className="act-tag" style={{ fontSize: "0.8rem" }}>Essential Supplies</span>
              <h2 className="act-block-title">Notebooks &amp; Study Kit Distributions</h2>
              <p className="act-block-text">
                Lack of basic educational supplies often leads to dropouts in rural public
                schools. Arise Social Welfare Trust actively conducts stationery drives,
                providing premium quality notebooks, school bags, and writing kits at
                the beginning of each term.
              </p>
              <ul className="act-bullet-list">
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Direct distribution inside rural government schools.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Collaboration with local teachers to identify needy students.</span>
                </li>
                <li className="act-bullet-item">
                  <i className="fa fa-check-circle"></i>
                  <span>100% volunteer-led drive packing and delivery.</span>
                </li>
              </ul>
            </div>
            <div className="act-block-img-wrapper wow fadeInRight" data-wow-delay="0.1s">
              <img
                alt="Stationery distribution event"
                className="act-block-img"
                src="/storage/files/root143/whatsapp-image-2026-06-13-at-71153-am.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
