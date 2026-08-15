import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  const folders = [
    {
      id: 1,
      title: "June 2026 Monthly Impact Report",
      desc: "Contains details regarding Vivek Vihar tuition center distributions and school textbook initiatives.",
      link: "https://drive.google.com/drive/folders/1xnCmIRIsO5nyTzCWp55aea0Ncg7fT6TS"
    },
    {
      id: 2,
      title: "May 2026 Monthly Impact Report",
      desc: "Summary of environment sapling plantings and clean-up drive logistics in Mangadu blocks.",
      link: "https://drive.google.com/drive/folders/1xnCmIRIsO5nyTzCWp55aea0Ncg7fT6TS"
    },
    {
      id: 3,
      title: "April 2026 Monthly Impact Report",
      desc: "Report on elder checkup camps and holiday clothing distribution coordination.",
      link: "https://drive.google.com/drive/folders/1xnCmIRIsO5nyTzCWp55aea0Ncg7fT6TS"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for Reports / Document Hub Pages */
        .rep-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .rep-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .rep-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .rep-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .rep-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.25rem;
          letter-spacing: -0.5px;
        }

        .rep-desc {
          color: var(--foreground-muted);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Document Cards Grid */
        .rep-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .rep-grid {
            grid-template-columns: 1fr;
          }
        }

        .rep-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          padding: 2.5rem 2rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          transition: all var(--transition-normal);
        }

        .rep-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }

        .rep-doc-icon {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          min-width: 54px;
        }

        .rep-card-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .rep-card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.2rem;
          color: var(--foreground);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .rep-card-meta {
          font-size: 0.9rem;
          color: var(--foreground-muted);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .rep-card-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.2rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--foreground);
          background: var(--background);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-decoration: none;
        }

        .rep-card:hover .rep-card-btn {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
        }

        /* Large Google Drive card */
        .rep-drive-box {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        }

        @media (max-width: 991px) {
          .rep-drive-box {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
            padding: 2rem;
          }
        }

        .rep-drive-info {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        @media (max-width: 768px) {
          .rep-drive-info {
            flex-direction: column;
            text-align: center;
          }
        }

        .rep-drive-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          min-width: 80px;
        }

        .rep-drive-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
        }

        .rep-drive-text {
          color: var(--foreground-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
        }

        .rep-drive-btn {
          padding: 1rem 2rem;
        }
      ` }} />

      <HeroCarousel />

      <section className="rep-section">
        <div className="rep-container">
          {/* Header */}
          <div className="rep-header wow fadeInUp">
            <span className="rep-tag">Impact Metrics</span>
            <h1 className="rep-title">Monthly Reports</h1>
            <p className="rep-desc">
              We document before we display. Review our monthly field reports,
              activity rosters, and photos directly in our public shared archive.
            </p>
          </div>

          {/* Large Drive Card */}
          <div className="rep-drive-box wow fadeInUp" data-wow-delay="0.1s">
            <div className="rep-drive-info">
              <div className="rep-drive-icon">
                <i className="fa fa-folder-open"></i>
              </div>
              <div>
                <h3 className="rep-drive-title">Google Drive Impact Center</h3>
                <p className="rep-drive-text">
                  Access the primary drive folder holding all compiled monthly PDF reports,
                  certified logs, and activity pictures directly.
                </p>
              </div>
            </div>
            <a
              className="btn-modern rep-drive-btn"
              href="https://drive.google.com/drive/folders/1xnCmIRIsO5nyTzCWp55aea0Ncg7fT6TS"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-external-link me-2"></i> Browse Drive
            </a>
          </div>

          {/* Folder grid */}
          <div className="rep-grid">
            {folders.map((folder, idx) => {
              const delay = `${(idx % 3) * 0.1}s`;
              return (
                <div
                  className="rep-card wow fadeInUp"
                  data-wow-delay={delay}
                  key={folder.id}
                >
                  <div className="rep-doc-icon">
                    <i className="fa fa-folder"></i>
                  </div>
                  <div className="rep-card-info">
                    <h3 className="rep-card-title">{folder.title}</h3>
                    <p className="rep-card-meta">{folder.desc}</p>
                    <a
                      className="rep-card-btn"
                      href={folder.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i> View Folder
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
