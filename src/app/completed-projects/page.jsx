import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  const projects = [
    {
      id: 1,
      title: "Vivek Vihar Study Materials Distribution",
      date: "June 2026",
      status: "Completed",
      badgeClass: "badge-completed",
      image: "/storage/files/root143/whatsapp-image-2026-06-13-at-71153-am.jpeg",
      desc: "Distributed essential writing supplies, books, bags, and geometry kits to pupils studying in rural schools around Chennai districts, preventing financial-driven dropouts.",
      metrics: [
        "200+ students directly sponsored",
        "Vivek Vihar Tuition Center collaboration",
        "Supported by 1999 & 2024 batch alumni"
      ]
    },
    {
      id: 2,
      title: "Elderly Welfare & Health Assessment Drive",
      date: "October 2025",
      status: "Completed",
      badgeClass: "badge-completed",
      image: "/storage/files/root143/img-20251018-145030008.jpg",
      desc: "Organized a day-long health checkup and diagnostic clinic for elders living in underserved homes, offering free cardiovascular checks, sugar testing, and basic medicine kits.",
      metrics: [
        "120+ elders screened",
        "Free physician consultations",
        "Supplied spects & mobility supports"
      ]
    },
    {
      id: 3,
      title: "Monsoon Plantation Drive",
      date: "January 2026",
      status: "Completed",
      badgeClass: "badge-completed",
      image: "/storage/files/root143/picsart-26-01-20-12-01-22-210.jpg",
      desc: "Conducted sapling plantation drives in suburban neighborhoods. Planted over 300 native species of Neem and Pungai, ensuring local committee post-plantation irrigation care.",
      metrics: [
        "300+ native saplings planted",
        "Coordinated with student volunteers",
        "Est. 85% survival monitoring rate"
      ]
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for Projects Pages */
        .proj-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .proj-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .proj-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .proj-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .proj-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 1.25rem;
          letter-spacing: -0.5px;
        }

        .proj-desc {
          color: var(--foreground-muted);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Projects Grid Layout */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        @media (max-width: 768px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
        }

        .proj-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .proj-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }

        .proj-card-img-wrapper {
          position: relative;
          padding-top: 60%; /* Aspect Ratio 5:3 */
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .proj-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-card:hover .proj-card-img {
          transform: scale(1.04);
        }

        .proj-card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .proj-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .proj-card-date {
          font-size: 0.85rem;
          color: var(--foreground-muted);
          font-weight: 500;
        }

        .proj-badge {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-pill);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .badge-completed {
          background: rgba(34, 197, 94, 0.08);
          color: rgb(34, 197, 94);
        }

        .badge-active {
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
        }

        .badge-planning {
          background: rgba(100, 116, 139, 0.08);
          color: rgb(100, 116, 139);
        }

        .proj-card-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          transition: color var(--transition-fast);
        }

        .proj-card:hover .proj-card-title {
          color: var(--primary);
        }

        .proj-card-text {
          font-size: 0.95rem;
          color: var(--foreground-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .proj-metrics-list {
          list-style: none;
          padding: 0;
          margin: 0 mt-auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-top: 1px dashed var(--border);
          padding-top: 1.25rem;
        }

        .proj-metrics-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--foreground);
        }

        .proj-metrics-item i {
          color: var(--primary);
        }
      ` }} />

      <HeroCarousel />

      <section className="proj-section">
        <div className="proj-container">
          {/* Header */}
          <div className="proj-header wow fadeInUp">
            <span className="proj-tag">Project Milestones</span>
            <h1 className="proj-title">Completed Projects</h1>
            <p className="proj-desc">
              Every successfully executed project strengthens our resolve. Explore
              the direct visual achievements and audited metrics of our finished drives.
            </p>
          </div>

          {/* Grid */}
          <div className="proj-grid">
            {projects.map((project, idx) => {
              const delay = `${(idx % 3) * 0.1}s`;
              return (
                <div
                  className="proj-card wow fadeInUp"
                  data-wow-delay={delay}
                  key={project.id}
                >
                  <div className="proj-card-img-wrapper">
                    <img
                      alt={project.title}
                      className="proj-card-img"
                      src={project.image}
                    />
                  </div>
                  <div className="proj-card-content">
                    <div className="proj-card-meta">
                      <span className="proj-card-date">
                        <i className="fa fa-calendar me-1"></i> {project.date}
                      </span>
                      <span className={`proj-badge ${project.badgeClass}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="proj-card-title">{project.title}</h3>
                    <p className="proj-card-text">{project.desc}</p>
                    <ul className="proj-metrics-list">
                      {project.metrics.map((metric, i) => (
                        <li className="proj-metrics-item" key={i}>
                          <i className="fa fa-check-circle"></i>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
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
