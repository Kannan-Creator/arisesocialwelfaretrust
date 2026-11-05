"use client";
import Link from "next/link";

/**
 * PageHero — shared top banner for all inner pages.
 *
 * Props:
 *   title      — main heading (string, required)
 *   subtitle   — small descriptor below title (string, optional)
 *   breadcrumb — array of { label, href } objects; last item is active
 *   bgImage    — optional background image URL (string)
 */
export default function PageHero({ title, subtitle, breadcrumb = [], bgImage }) {
  return (
    <>
      <style>{`
        .ph-hero {
          position: relative;
          min-height: 260px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: linear-gradient(135deg, #0f1117 0%, #1a1f2e 40%, #0f1117 100%);
          padding-top: 90px;
        }
        .ph-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          opacity: 0.18;
          z-index: 0;
        }
        .ph-watermark {
          position: absolute;
          right: -40px;
          bottom: -30px;
          width: 280px;
          opacity: 0.06;
          pointer-events: none;
          z-index: 0;
        }
        .ph-hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 4px;
          background: linear-gradient(90deg, var(--primary), hsl(45,100%,60%));
          z-index: 2;
        }
        .ph-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2.5rem 2rem 2.8rem;
        }
        .ph-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,144,0,0.12);
          border: 1px solid rgba(255,144,0,0.3);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          margin-bottom: 0.9rem;
        }
        .ph-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1.15;
          margin-bottom: 0.4rem;
        }
        .ph-title-accent {
          background: linear-gradient(90deg, var(--primary), hsl(45,100%,60%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ph-subtitle {
          color: rgba(255,255,255,0.55);
          font-size: 1.05rem;
          margin-bottom: 1.4rem;
          max-width: 560px;
        }
        .ph-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ph-breadcrumb li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
        }
        .ph-breadcrumb a {
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
        }
        .ph-breadcrumb a:hover { color: var(--primary); }
        .ph-sep { color: rgba(255,255,255,0.25); font-size: 0.7rem; }
        .ph-active { color: var(--primary); font-weight: 600; }
      `}</style>

      <section className="ph-hero">
        {bgImage && <img src={bgImage} alt="" className="ph-bg-img" aria-hidden="true" />}
        <img
          src="/storage/files/root143/whatsapp-image-2026-01-14-at-103349-am.jpeg"
          alt=""
          className="ph-watermark"
          aria-hidden="true"
        />
        <div className="ph-inner">
          {subtitle && (
            <div className="ph-tag">
              <i className="fa fa-circle" style={{ fontSize: "0.4rem" }} />
              {subtitle}
            </div>
          )}
          <h1 className="ph-title">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="ph-breadcrumb">
              <li><Link href="/">Home</Link></li>
              {breadcrumb.map((crumb, i) => (
                <li key={i}>
                  <span className="ph-sep">›</span>
                  {i === breadcrumb.length - 1 ? (
                    <span className="ph-active">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
    </>
  );
}
