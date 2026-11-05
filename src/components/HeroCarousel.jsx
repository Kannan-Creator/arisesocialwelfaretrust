"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 0,
    imgSrc: "/storage/files/root143/whatsapp-image-2026-06-13-at-71153-am.jpeg",
    badge: "Educational Welfare",
    title: "Empowering Every Child",
    highlight: "To Learn & Grow",
    desc: "Supporting 200+ underprivileged students daily through tuition centres, stationery drives, and educational resources.",
  },
  {
    id: 1,
    imgSrc: "/storage/files/root143/picsart-26-01-20-12-01-22-210.jpg",
    badge: "Environmental Care",
    title: "Protecting Our Planet",
    highlight: "One Sapling at a Time",
    desc: "500+ native trees planted across Chennai parks, schools, and public spaces through our monthly green drives.",
  },
  {
    id: 2,
    imgSrc: "/storage/files/root143/img-20251018-145030008.jpg",
    badge: "Elder Welfare",
    title: "Dignity & Care",
    highlight: "For Our Silver Years",
    desc: "Regular health camps, festive celebrations, and meals for 150+ elders in partner old age homes across Chennai.",
  },
  {
    id: 3,
    imgSrc: "/storage/files/root143/img-20260126-wa0025.jpg",
    badge: "Community Service",
    title: "Building Communities",
    highlight: "Together We Rise",
    desc: "From distribution drives to medical camps — ARISE volunteers serve with heart, purpose, and accountability.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index) {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }

  const slide = slides[current];

  return (
    <section className="hero-root">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero-bg-layer ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.imgSrc})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Animated particles */}
      <div className="hero-particles">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="hero-particle" style={{
            left: `${(i * 5.8 + 3) % 100}%`,
            animationDelay: `${(i * 0.7) % 6}s`,
            animationDuration: `${6 + (i % 4)}s`,
            width: `${4 + (i % 5)}px`,
            height: `${4 + (i % 5)}px`,
            opacity: 0.15 + (i % 3) * 0.08,
          }} />
        ))}
      </div>

      {/* Caption */}
      <div className={`hero-content ${animating ? "hero-exit" : "hero-enter"}`} key={current}>
        <span className="hero-badge">
          <i className="fa fa-heart" style={{ marginRight: "7px", fontSize: "0.75rem" }} />
          {slide.badge}
        </span>
        <h1 className="hero-title">
          {slide.title}
          <span className="hero-title-accent"> {slide.highlight}</span>
        </h1>
        <p className="hero-desc">{slide.desc}</p>
        <div className="hero-actions">
          <Link href="/donate" className="hero-btn-primary">
            <i className="fa fa-heart" style={{ marginRight: "8px" }} />
            Donate Now
          </Link>
          <Link href="/about" className="hero-btn-outline">
            Learn More
            <i className="fa fa-arrow-right" style={{ marginLeft: "8px" }} />
          </Link>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint">
        <span className="hero-scroll-text">Scroll to explore</span>
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
      </div>

      {/* Stats strip */}
      <div className="hero-stats-strip">
        {[
          { num: "200+", label: "Students Supported" },
          { num: "500+", label: "Trees Planted" },
          { num: "150+", label: "Elders Cared For" },
          { num: "2+", label: "Years of Service" },
        ].map((s, i) => (
          <div key={i} className="hero-stat-item">
            <span className="hero-stat-num">{s.num}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        .hero-root {
          position: relative;
          height: 100vh;
          min-height: 700px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 110px;
          padding-bottom: 100px;
          box-sizing: border-box;
        }

        /* ---- backgrounds ---- */
        .hero-bg-layer {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1s ease, transform 8s ease;
          will-change: opacity, transform;
        }
        .hero-bg-layer.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.42) 0%,
            rgba(0, 0, 0, 0.18) 35%,
            rgba(0, 0, 0, 0.20) 65%,
            rgba(15, 8, 2, 0.48) 100%
          );
          z-index: 1;
        }

        /* ---- particles ---- */
        .hero-particles {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-particle {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          background: var(--primary);
          animation: particleFloat linear infinite;
        }
        @keyframes particleFloat {
          0%   { bottom: -20px; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { bottom: 110%; opacity: 0; transform: translateX(30px) rotate(360deg); }
        }

        /* ---- content ---- */
        .hero-content {
          position: relative;
          z-index: 4;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-enter .hero-badge,
        .hero-enter .hero-title,
        .hero-enter .hero-desc,
        .hero-enter .hero-actions {
          animation: heroFadeUp 0.7s ease forwards;
        }
        .hero-enter .hero-badge    { animation-delay: 0.05s; }
        .hero-enter .hero-title    { animation-delay: 0.16s; }
        .hero-enter .hero-desc     { animation-delay: 0.28s; }
        .hero-enter .hero-actions  { animation-delay: 0.40s; }

        .hero-exit .hero-badge,
        .hero-exit .hero-title,
        .hero-exit .hero-desc,
        .hero-exit .hero-actions {
          animation: heroFadeOut 0.35s ease forwards;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeOut {
          to { opacity: 0; transform: translateY(-18px); }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 140, 0, 0.18);
          border: 1px solid rgba(255, 155, 0, 0.45);
          color: #ffb84d;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.42rem 1.2rem;
          border-radius: 99px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
          margin-bottom: 1.5rem;
          opacity: 0;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 5.5vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 1.25rem;
          opacity: 0;
          text-shadow: 0 3px 18px rgba(0, 0, 0, 0.85), 0 6px 36px rgba(0, 0, 0, 0.7);
        }
        .hero-title-accent {
          background: linear-gradient(90deg, #ff9500, #ffcc44);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.8));
        }

        .hero-desc {
          font-size: clamp(1rem, 2vw, 1.22rem);
          color: #ffffff;
          max-width: 680px;
          margin: 0 auto 2.2rem;
          line-height: 1.7;
          opacity: 0;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.85), 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, var(--primary), #e07800);
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          border-radius: 99px;
          box-shadow: 0 8px 28px rgba(255,120,0,0.45);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 14px 36px rgba(255,120,0,0.55);
          color: #fff;
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 2rem;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.5);
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          border-radius: 99px;
          backdrop-filter: blur(10px);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.22);
          border-color: #fff;
          transform: translateY(-3px);
          color: #fff;
        }

        /* ---- dots ---- */
        .hero-dots {
          position: absolute;
          bottom: 110px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .hero-dot {
          width: 10px;
          height: 10px;
          border-radius: 99px;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .hero-dot.active {
          background: var(--primary);
          width: 28px;
        }

        /* ---- scroll hint ---- */
        .hero-scroll-hint {
          position: absolute;
          bottom: 136px;
          right: 2.5rem;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: scrollBounce 2.2s ease infinite;
        }
        .hero-scroll-text {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-family: var(--font-heading);
          writing-mode: vertical-lr;
          transform: rotate(180deg);
        }
        .hero-scroll-mouse {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255,255,255,0.4);
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 5px;
        }
        .hero-scroll-wheel {
          width: 4px;
          height: 8px;
          background: var(--primary);
          border-radius: 99px;
          animation: scrollWheel 1.8s ease infinite;
        }
        @keyframes scrollWheel {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }

        /* ---- stats strip ---- */
        .hero-stats-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 5;
          display: flex;
          justify-content: center;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(18px);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.1rem 2rem;
          gap: clamp(1.5rem, 5vw, 5rem);
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          animation: heroFadeUp 0.7s ease forwards;
        }
        .hero-stat-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          color: var(--primary);
          line-height: 1;
        }
        .hero-stat-label {
          font-size: clamp(0.7rem, 1.2vw, 0.82rem);
          color: rgba(255,255,255,0.65);
          font-family: var(--font-heading);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 576px) {
          .hero-scroll-hint { display: none; }
          .hero-stats-strip { gap: 1.5rem; padding: 0.9rem 1rem; }
          .hero-stat-label  { font-size: 0.65rem; }
        }
      `}</style>
    </section>
  );
}
