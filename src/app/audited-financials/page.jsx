import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  const documents = [
    {
      id: 1,
      title: "Audited Financial Statement FY 2025 - 2026",
      type: "PDF Document",
      size: "2.4 MB",
      date: "Pending Audit Filing",
      icon: "fa-file-pdf-o",
      link: "#"
    },
    {
      id: 2,
      title: "Audited Financial Statement FY 2024 - 2025",
      type: "PDF Document",
      size: "1.8 MB",
      date: "August 2025",
      icon: "fa-file-pdf-o",
      link: "#"
    },
    {
      id: 3,
      title: "Trust 80G Tax Exemption Certificate",
      type: "Tax Credential",
      size: "Official Copy",
      date: "Certified",
      icon: "fa-shield",
      link: "#"
    },
    {
      id: 4,
      title: "Trust 12A Registration Certificate",
      type: "Tax Credential",
      size: "Official Copy",
      date: "Certified",
      icon: "fa-shield",
      link: "#"
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
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
          padding: 2.25rem 2rem;
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
          font-size: 1.15rem;
          color: var(--foreground);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .rep-card-meta {
          font-size: 0.85rem;
          color: var(--foreground-muted);
          margin-bottom: 1.25rem;
          display: flex;
          gap: 0.75rem;
        }

        .rep-card-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
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

        /* Statement Block */
        .rep-transparency-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 4rem;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        @media (max-width: 991px) {
          .rep-transparency-card {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
            padding: 2rem;
          }
        }

        .rep-trans-shield {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.08);
          color: rgb(34, 197, 94);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.8rem;
          min-width: 90px;
        }

        .rep-trans-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }

        .rep-trans-text {
          color: var(--foreground-muted);
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 0;
        }
      ` }} />

      <HeroCarousel />

      <section className="rep-section">
        <div className="rep-container">
          {/* Header */}
          <div className="rep-header wow fadeInUp">
            <span className="rep-tag">Assessment Reports</span>
            <h1 className="rep-title">Audited Financials</h1>
            <p className="rep-desc">
              Transparency builds trust. We maintain absolute financial discipline,
              making our annual tax registration certificates and audited balance sheets
              open for public review.
            </p>
          </div>

          {/* Transparency Statement Card */}
          <div className="rep-transparency-card wow fadeInUp" data-wow-delay="0.1s">
            <div className="rep-trans-shield">
              <i className="fa fa-shield"></i>
            </div>
            <div>
              <h3 className="rep-trans-title">Our Transparency Commitment</h3>
              <p className="rep-trans-text">
                Every rupee contributed to Arise Social Welfare Trust is audited by
                certified, independent chartered accountants. We declare all incomes,
                expenses, administrative costs, and project deployment statements
                promptly.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="rep-grid">
            {documents.map((doc, idx) => {
              const delay = `${(idx % 3) * 0.1}s`;
              return (
                <div
                  className="rep-card wow fadeInUp"
                  data-wow-delay={delay}
                  key={doc.id}
                >
                  <div className="rep-doc-icon">
                    <i className={`fa ${doc.icon}`}></i>
                  </div>
                  <div className="rep-card-info">
                    <h3 className="rep-card-title">{doc.title}</h3>
                    <div className="rep-card-meta">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                    <a className="rep-card-btn" href={doc.link}>
                      <i className="fa fa-download"></i> Download File
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
