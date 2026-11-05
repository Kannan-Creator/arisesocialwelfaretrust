"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function DiwaliHero() {
  const [diyaLit, setDiyaLit] = useState(true);
  const [showWishModal, setShowWishModal] = useState(false);
  const [diyaCount, setDiyaCount] = useState(1284);
  const [copiedWish, setCopiedWish] = useState(false);
  const [sparksActive, setSparksActive] = useState(true);

  // Trigger festive fireworks effect when user lights the diya
  const handleDiyaClick = () => {
    setDiyaLit(true);
    setDiyaCount((prev) => prev + 1);
    setShowWishModal(true);
  };

  const copyWishText = () => {
    const text =
      "✨ May the divine light of Diwali illuminate your life with joy, good health, peace, and prosperity! Shubh Deepawali from ARISE Social Welfare Trust! 🪔 Join us in sharing the light: https://arisesocialwelfaretrust.org";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedWish(true);
      setTimeout(() => setCopiedWish(false), 2500);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ══════════════════════════════════════════════
           DIWALI GIVING FESTIVAL HERO & SECTION STYLES
           ══════════════════════════════════════════════ */
        .diwali-hero-section {
          position: relative;
          background: linear-gradient(180deg, #fffaf2 0%, #fef3e2 50%, #fae8ce 100%);
          color: #261710;
          overflow: hidden;
          padding: 3rem 1.5rem 4rem;
          border-bottom: 1px solid rgba(230, 160, 80, 0.25);
          font-family: var(--font-sans, "Inter", sans-serif);
        }

        /* Festive Background Rangoli / Mandala Pattern */
        .diwali-bg-mandala {
          position: absolute;
          top: -120px;
          right: -80px;
          width: 580px;
          height: 580px;
          opacity: 0.045;
          pointer-events: none;
          transform-origin: center;
          animation: diwaliRotateSlow 90s linear infinite;
        }

        .diwali-bg-skyline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 90px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,120 L0,105 Q30,105 40,85 Q50,65 60,85 Q70,105 100,105 L140,105 Q150,90 160,70 Q170,50 180,30 Q190,50 200,70 Q210,90 220,105 L280,105 Q300,105 310,95 Q320,80 340,80 Q360,80 370,95 Q380,105 400,105 L460,105 Q470,85 480,65 Q490,45 500,65 Q510,85 520,105 L580,105 Q600,105 610,90 Q620,70 635,50 Q650,70 660,90 Q670,105 690,105 L760,105 Q770,92 780,78 Q790,62 800,78 Q810,92 820,105 L880,105 Q900,105 910,85 Q920,40 935,25 Q950,40 960,85 Q970,105 990,105 L1060,105 Q1080,105 1095,85 Q1110,65 1125,85 Q1140,105 1160,105 L1200,105 L1200,120 Z' fill='%23d97706' fill-opacity='0.05'/%3E%3C/svg%3E") repeat-x bottom;
          pointer-events: none;
          z-index: 1;
        }

        /* Hanging Lanterns (Kandils) */
        .diwali-lantern {
          position: absolute;
          z-index: 5;
          pointer-events: none;
          transform-origin: top center;
        }
        .diwali-lantern.lantern-right {
          top: 0;
          right: 5%;
          animation: kandilSway 4.8s ease-in-out infinite alternate;
        }
        .diwali-lantern.lantern-left {
          top: 0;
          left: 3%;
          transform: scale(0.75);
          animation: kandilSway 5.6s ease-in-out infinite alternate-reverse;
          opacity: 0.85;
        }

        @keyframes kandilSway {
          0%   { transform: rotate(-3.5deg); }
          100% { transform: rotate(3.5deg); }
        }

        @keyframes diwaliRotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Container Layout */
        .diwali-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .diwali-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .diwali-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .diwali-lantern.lantern-left {
            display: none;
          }
        }

        /* ── Left Content Column ── */
        .diwali-content {
          position: relative;
          z-index: 3;
        }

        /* Pill Badge */
        .diwali-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.1rem;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(220, 130, 30, 0.35);
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #b45309;
          box-shadow: 0 2px 10px rgba(217, 119, 6, 0.08);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .diwali-badge-spark {
          color: #f59e0b;
          font-size: 1rem;
          animation: diwaliPulse 2s infinite ease-in-out;
        }

        /* Headline */
        .diwali-headline {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: clamp(2.5rem, 4.2vw, 4.2rem);
          font-weight: 800;
          line-height: 1.12;
          color: #24140b;
          letter-spacing: -0.025em;
          margin-bottom: 1.25rem;
        }

        .diwali-headline .share-light {
          display: inline;
          background: linear-gradient(135deg, #c2410c 0%, #ea580c 45%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
        }

        /* Paragraph */
        .diwali-paragraph {
          font-size: 1.12rem;
          line-height: 1.75;
          color: #574136;
          max-width: 540px;
          margin-bottom: 2.25rem;
        }

        @media (max-width: 991px) {
          .diwali-paragraph {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* Action Buttons */
        .diwali-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 2.25rem;
        }

        @media (max-width: 991px) {
          .diwali-actions {
            justify-content: center;
          }
        }

        .btn-diwali-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #991b1b 0%, #b91c1c 45%, #c2410c 100%);
          color: #ffffff !important;
          padding: 0.95rem 1.9rem;
          border-radius: 9999px;
          font-size: 1.05rem;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(185, 28, 28, 0.32);
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          text-decoration: none;
        }

        .btn-diwali-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 14px 30px rgba(185, 28, 28, 0.42);
          background: linear-gradient(135deg, #b91c1c 0%, #dc2626 50%, #ea580c 100%);
          color: #ffffff !important;
        }

        .btn-diwali-primary .btn-icon-heart {
          font-size: 1.1rem;
          display: inline-block;
          animation: diwaliHeartBeat 1.8s infinite ease-in-out;
        }

        .btn-diwali-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.85);
          color: #3f271a !important;
          padding: 0.95rem 1.8rem;
          border-radius: 9999px;
          font-size: 1.05rem;
          font-weight: 600;
          border: 1.5px solid rgba(217, 119, 6, 0.35);
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
          text-decoration: none;
          backdrop-filter: blur(8px);
        }

        .btn-diwali-secondary:hover {
          background: #ffffff;
          border-color: #d97706;
          color: #b45309 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(217, 119, 6, 0.12);
        }

        .btn-diwali-secondary .btn-disc-icon {
          width: 20px;
          height: 20px;
          border: 2px solid #d97706;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          color: #d97706;
          font-weight: 900;
        }

        /* Trust Badges Strip */
        .diwali-trust-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-size: 0.9rem;
          color: #6c5344;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .diwali-trust-row {
            justify-content: center;
          }
        }

        .trust-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        .trust-badge-icon {
          color: #c2410c;
          font-size: 0.95rem;
        }

        /* ── Right Column: Media Card with Celebrants & Glowing Diya ── */
        .diwali-media-col {
          position: relative;
          z-index: 3;
        }

        .diwali-card-wrapper {
          position: relative;
          max-width: 520px;
          margin: 0 auto;
        }

        /* Celebrant Photo Card Frame */
        .diwali-celebration-card {
          position: relative;
          border-radius: 26px;
          overflow: hidden;
          background: #1b120c;
          box-shadow: 0 20px 48px rgba(92, 45, 15, 0.18), 0 4px 16px rgba(0, 0, 0, 0.12);
          border: 2px solid rgba(245, 158, 11, 0.4);
          aspect-ratio: 16 / 11.5;
        }

        .diwali-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.02);
          transition: transform 0.6s ease;
        }

        .diwali-celebration-card:hover .diwali-card-img {
          transform: scale(1.05);
        }

        /* Sparkler Animation Overlays */
        .sparkler-burst {
          position: absolute;
          width: 70px;
          height: 70px;
          pointer-events: none;
          z-index: 2;
          transform-origin: center;
        }

        .sparkler-burst.left-spark {
          top: 10%;
          left: 12%;
          animation: sparkFlicker 0.4s infinite alternate;
        }

        .sparkler-burst.right-spark {
          top: 14%;
          right: 14%;
          animation: sparkFlicker 0.45s 0.2s infinite alternate;
        }

        @keyframes sparkFlicker {
          0%   { opacity: 0.65; transform: scale(0.9) rotate(0deg); }
          100% { opacity: 1;    transform: scale(1.2) rotate(25deg); }
        }

        /* Glowing Interactive Diya Badge (Bottom-Left overlap) */
        .diwali-interactive-diya {
          position: absolute;
          bottom: -15px;
          left: -22px;
          z-index: 5;
          cursor: pointer;
          user-select: none;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .diwali-interactive-diya:hover {
          transform: scale(1.1) translateY(-4px);
        }

        .diya-circle-disc {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: radial-gradient(circle, #3d1b12 0%, #200d07 70%, #150804 100%);
          border: 2px solid rgba(245, 158, 11, 0.7);
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6), inset 0 0 14px rgba(251, 191, 36, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Diya Aura Pulsing */
        .diya-aura-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0) 70%);
          animation: diyaAuraPulse 2.2s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes diyaAuraPulse {
          0%, 100% { transform: scale(1);   opacity: 0.55; }
          50%      { transform: scale(1.3); opacity: 0.95; }
        }

        /* Diya Flame */
        .diya-flame-svg {
          width: 44px;
          height: 44px;
        }

        .flame-core {
          transform-origin: bottom center;
          animation: flameWobble 0.8s ease-in-out infinite alternate;
        }

        @keyframes flameWobble {
          0%   { transform: scale(0.95, 0.95) rotate(-2deg); }
          100% { transform: scale(1.08, 1.15) rotate(2deg); }
        }

        .diya-tip-pill {
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          background: rgba(30, 15, 8, 0.9);
          color: #fef08a;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
          border: 1px solid rgba(245, 158, 11, 0.5);
          letter-spacing: 0.5px;
          pointer-events: none;
        }

        /* Overlapping Pill Badge (Bottom-Right of Card) */
        .diwali-card-pill-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          z-index: 4;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 9999px;
          padding: 0.45rem 1rem 0.45rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .diwali-card-pill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
          border-color: #d97706;
        }

        .card-pill-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #d97706;
          display: block;
        }

        .card-pill-text-group {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          text-align: left;
        }

        .card-pill-label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: 800;
          color: #9a3412;
        }

        .card-pill-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e130c;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        /* Floating Golden Sparkle Particles */
        .diwali-particles-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .diwali-sparkle-dot {
          position: absolute;
          border-radius: 50%;
          background: #f59e0b;
          animation: floatDiwaliParticle linear infinite;
        }

        @keyframes floatDiwaliParticle {
          0% {
            transform: translateY(105%) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0;
          }
        }

        /* ══════════════════════════════════════════════
           DIWALI IMPACT STATS BANNER (DIRECTLY BELOW HERO)
           ══════════════════════════════════════════════ */
        .diwali-impact-strip {
          margin-top: 3.5rem;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(220, 130, 30, 0.22);
          border-radius: 20px;
          padding: 1.8rem 2.2rem;
          box-shadow: 0 10px 30px rgba(180, 83, 9, 0.06);
          backdrop-filter: blur(12px);
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (max-width: 991px) {
          .diwali-impact-strip {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
            padding: 1.6rem 1.4rem;
          }
        }

        .impact-left-info {
          border-right: 1px solid rgba(220, 130, 30, 0.18);
          padding-right: 2rem;
        }

        @media (max-width: 991px) {
          .impact-left-info {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid rgba(220, 130, 30, 0.18);
            padding-bottom: 1.5rem;
          }
        }

        .impact-tag {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #b45309;
          margin-bottom: 0.35rem;
          display: inline-block;
        }

        .impact-headline {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: 1.55rem;
          font-weight: 800;
          color: #1f140e;
          margin-bottom: 0.4rem;
        }

        .impact-subtext {
          font-size: 0.95rem;
          color: #6a5245;
          line-height: 1.5;
        }

        /* 3-Col Stats on Right */
        .impact-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          text-align: center;
        }

        .impact-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .impact-stat-val {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: 2.1rem;
          font-weight: 800;
          color: #c2410c;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .impact-stat-lbl {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: #785e50;
        }

        /* ══════════════════════════════════════════════
           FESTIVE DIWALI WISHES MODAL / CARD
           ══════════════════════════════════════════════ */
        .diwali-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 10, 5, 0.75);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: diwaliFadeIn 0.3s ease;
        }

        @keyframes diwaliFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .diwali-modal-card {
          background: linear-gradient(145deg, #fffcf5 0%, #fef3e2 100%);
          border: 2px solid rgba(245, 158, 11, 0.6);
          border-radius: 28px;
          max-width: 520px;
          width: 100%;
          padding: 2.5rem 2rem;
          text-align: center;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45), 0 0 40px rgba(245, 158, 11, 0.25);
          animation: diwaliPopUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes diwaliPopUp {
          from { transform: scale(0.85); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }

        .diwali-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.06);
          border: none;
          font-size: 1.25rem;
          color: #644a3e;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .diwali-modal-close:hover {
          background: rgba(185, 28, 28, 0.15);
          color: #991b1b;
        }

        .modal-diya-glow {
          width: 72px;
          height: 72px;
          margin: 0 auto 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle, #fef08a 0%, #f59e0b 60%, rgba(245, 158, 11, 0) 100%);
          border-radius: 50%;
        }

        .modal-diwali-title {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: 1.95rem;
          font-weight: 800;
          color: #991b1b;
          margin-bottom: 0.6rem;
        }

        .modal-diwali-wish {
          font-size: 1.05rem;
          color: #4a3429;
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .modal-diya-count-badge {
          display: inline-block;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #b45309;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          margin-bottom: 1.8rem;
        }

        .modal-actions-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-modal-donate {
          background: linear-gradient(135deg, #991b1b 0%, #b91c1c 50%, #c2410c 100%);
          color: #fff !important;
          padding: 0.75rem 1.6rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(185, 28, 28, 0.3);
          transition: transform 0.2s;
        }

        .btn-modal-donate:hover {
          transform: translateY(-2px);
          color: #fff !important;
        }

        .btn-modal-copy {
          background: #ffffff;
          border: 1.5px solid #d97706;
          color: #9a3412;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-modal-copy:hover {
          background: #fffbeb;
        }
      ` }}
      />

      <section className="diwali-hero-section" id="diwali-celebration">
        {/* Floating Background Mandala */}
        <svg
          className="diwali-bg-mandala"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#d97706" strokeWidth="1.5">
            <circle cx="250" cy="250" r="230" />
            <circle cx="250" cy="250" r="190" strokeDasharray="6,6" />
            <circle cx="250" cy="250" r="140" />
            <circle cx="250" cy="250" r="90" strokeDasharray="4,4" />
            <circle cx="250" cy="250" r="40" />
            {[...Array(16)].map((_, i) => (
              <line
                key={i}
                x1="250"
                y1="250"
                x2={250 + 230 * Math.cos((i * Math.PI) / 8)}
                y2={250 + 230 * Math.sin((i * Math.PI) / 8)}
              />
            ))}
          </g>
        </svg>

        {/* Hanging Diwali Kandil Lantern (Right) */}
        <div className="diwali-lantern lantern-right">
          <svg width="76" height="150" viewBox="0 0 100 200" fill="none">
            {/* Hanging Cord */}
            <line x1="50" y1="0" x2="50" y2="40" stroke="#b45309" strokeWidth="2" />
            {/* Top Ring */}
            <circle cx="50" cy="40" r="5" stroke="#f59e0b" strokeWidth="2" fill="#fffbeb" />
            {/* Lantern Core (Diamond/Octagon) */}
            <polygon
              points="50,46 86,75 74,130 50,145 26,130 14,75"
              fill="url(#lanternGrad)"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />
            {/* Inner Glowing Pattern */}
            <polygon
              points="50,60 74,82 66,120 50,132 34,120 26,82"
              fill="#fbbf24"
              opacity="0.85"
            />
            <circle cx="50" cy="95" r="14" fill="#fef08a" opacity="0.95" />
            {/* Bottom Streamers / Tassels */}
            <path
              d="M32,132 Q30,170 24,195 M42,140 Q40,175 38,198 M50,145 L50,200 M58,140 Q60,175 62,198 M68,132 Q70,170 76,195"
              stroke="#d97706"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="lanternGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hanging Diwali Kandil Lantern (Left) */}
        <div className="diwali-lantern lantern-left">
          <svg width="60" height="120" viewBox="0 0 100 200" fill="none">
            <line x1="50" y1="0" x2="50" y2="40" stroke="#b45309" strokeWidth="2" />
            <polygon
              points="50,46 86,75 74,130 50,145 26,130 14,75"
              fill="url(#lanternGrad2)"
              stroke="#f59e0b"
              strokeWidth="2.5"
            />
            <circle cx="50" cy="95" r="14" fill="#fef08a" opacity="0.95" />
            <path
              d="M32,132 Q30,170 24,195 M50,145 L50,200 M68,132 Q70,170 76,195"
              stroke="#d97706"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="lanternGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c2410c" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Background Sparkle Particles */}
        <div className="diwali-particles-layer">
          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="diwali-sparkle-dot"
              style={{
                left: `${(i * 7.5 + 4) % 96}%`,
                width: `${4 + (i % 4)}px`,
                height: `${4 + (i % 4)}px`,
                animationDelay: `${(i * 0.6) % 5}s`,
                animationDuration: `${5.5 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {/* Golden Skyline Silhouette */}
        <div className="diwali-bg-skyline" />

        {/* ── Main Hero Content ── */}
        <div className="diwali-container">
          <div className="diwali-grid">
            {/* Left Column */}
            <div className="diwali-content">
              {/* Festival Badge */}
              <div className="diwali-pill-badge">
                <span className="diwali-badge-spark">✦</span>
                DIWALI GIVING FESTIVAL
              </div>

              {/* Title */}
              <h1 className="diwali-headline">
                This Diwali,
                <br />
                <span className="share-light">share the light.</span>
              </h1>

              {/* Narrative Text */}
              <p className="diwali-paragraph">
                Diwali is a celebration of light, hope, and togetherness. A small lamp may
                seem simple, but its gentle glow can bring warmth to a dark room. In the
                same way, even a small act of kindness can bring happiness and hope into
                someone&apos;s life.
              </p>

              {/* Action Buttons */}
              <div className="diwali-actions">
                <Link href="/donate" className="btn-diwali-primary">
                  <span className="btn-icon-heart">🤍</span>
                  <span>Donate for Diwali</span>
                  <span>→</span>
                </Link>

                <a href="#diwali-impact" className="btn-diwali-secondary">
                  <span className="btn-disc-icon">⊙</span>
                  <span>Discover the impact</span>
                  <span>↓</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="diwali-trust-row">
                <span className="trust-badge-item">
                  <span className="trust-badge-icon">🛡️</span>
                  <span>Secure Donation</span>
                </span>
                <span style={{ color: "#d97706", opacity: 0.4 }}>•</span>
                <span className="trust-badge-item">
                  <span className="trust-badge-icon">📄</span>
                  <span>80G Receipt</span>
                </span>
                <span style={{ color: "#d97706", opacity: 0.4 }}>•</span>
                <span className="trust-badge-item">
                  <span className="trust-badge-icon">❤️</span>
                  <span>Every Gift Matters</span>
                </span>
              </div>
            </div>

            {/* Right Column: Celebrants Photo Card */}
            <div className="diwali-media-col">
              <div className="diwali-card-wrapper">
                <div className="diwali-celebration-card">
                  {/* Photo of Elders Joyfully Celebrating with Sparklers */}
                  <img
                    src="/images/diwali-celebration-clean.jpg"
                    alt="Elderly residents celebrating Diwali with sparklers - ARISE Social Welfare Trust"
                    className="diwali-card-img"
                  />

                  {/* Sparkler animation bursts over the hand sparklers */}
                  {sparksActive && (
                    <>
                      <svg
                        className="sparkler-burst left-spark"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        {[...Array(8)].map((_, i) => (
                          <line
                            key={i}
                            x1="50"
                            y1="50"
                            x2={50 + 40 * Math.cos((i * Math.PI) / 4)}
                            y2={50 + 40 * Math.sin((i * Math.PI) / 4)}
                            stroke="#fef08a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        ))}
                        <circle cx="50" cy="50" r="10" fill="#ffffff" />
                      </svg>

                      <svg
                        className="sparkler-burst right-spark"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        {[...Array(8)].map((_, i) => (
                          <line
                            key={i}
                            x1="50"
                            y1="50"
                            x2={50 + 42 * Math.cos((i * Math.PI) / 4)}
                            y2={50 + 42 * Math.sin((i * Math.PI) / 4)}
                            stroke="#fef08a"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                          />
                        ))}
                        <circle cx="50" cy="50" r="10" fill="#ffffff" />
                      </svg>
                    </>
                  )}

                  {/* Pill Badge at bottom right of card */}
                  <Link
                    href="/our-daily-activities"
                    className="diwali-card-pill-badge"
                    title="View our Children & Elder Care initiatives"
                  >
                    <img
                      src="/storage/files/root143/whatsapp-image-2026-06-13-at-71153-am.jpeg"
                      alt="Children of ARISE Trust"
                      className="card-pill-avatar"
                    />
                    <div className="card-pill-text-group">
                      <span className="card-pill-label">ALSO THIS DIWALI</span>
                      <span className="card-pill-title">
                        Our Children&apos;s Home <span>→</span>
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Overlapping Interactive Glowing Diya (Bottom Left) */}
                <div
                  className="diwali-interactive-diya"
                  onClick={handleDiyaClick}
                  title="Click to Light a Diya & Receive Diwali Blessings!"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleDiyaClick();
                  }}
                >
                  <div className="diya-circle-disc">
                    <div className="diya-aura-ring" />
                    <svg
                      className="diya-flame-svg"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Terracotta/Brass Base */}
                      <path
                        d="M12 40 C14 50, 50 50, 52 40 C52 35, 12 35, 12 40 Z"
                        fill="url(#diyaBaseGrad)"
                        stroke="#f59e0b"
                        strokeWidth="1.5"
                      />
                      <ellipse cx="32" cy="38" rx="18" ry="4" fill="#78350f" />
                      {/* Flickering Flame */}
                      <g className="flame-core">
                        {/* Outer Flame */}
                        <path
                          d="M32 12 C35 22, 40 28, 38 36 C36 40, 28 40, 26 36 C24 28, 29 22, 32 12 Z"
                          fill="url(#diyaFlameOuter)"
                        />
                        {/* Inner Hot Flame */}
                        <path
                          d="M32 18 C33.5 24, 36 28, 35 34 C34 37, 30 37, 29 34 C28 28, 30.5 24, 32 18 Z"
                          fill="#fef08a"
                        />
                      </g>
                      <defs>
                        <linearGradient id="diyaBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#92400e" />
                        </linearGradient>
                        <linearGradient
                          id="diyaFlameOuter"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="35%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="diya-tip-pill">✨ Light Diya</span>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              DIWALI IMPACT STATS STRIP (Directly Below Hero)
              ══════════════════════════════════════════════ */}
          <div className="diwali-impact-strip" id="diwali-impact">
            <div className="impact-left-info">
              <span className="impact-tag">✦ DIWALI GIVING</span>
              <h3 className="impact-headline">One festival. Many reasons to hope.</h3>
              <p className="impact-subtext">
                Your kindness can become festive food, care kits, sweets, educational
                support, and shelter for elders and children in need this Diwali.
              </p>
            </div>

            <div className="impact-stats-grid">
              <div className="impact-stat-item">
                <span className="impact-stat-val">365</span>
                <span className="impact-stat-lbl">Days of Care</span>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-val">1</span>
                <span className="impact-stat-lbl">Shared Purpose</span>
              </div>
              <div className="impact-stat-item">
                <span className="impact-stat-val">ONE</span>
                <span className="impact-stat-lbl">Kind Act</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FESTIVE DIWALI WISHES INTERACTIVE MODAL
          ══════════════════════════════════════════════ */}
      {showWishModal && (
        <div
          className="diwali-modal-overlay"
          onClick={() => setShowWishModal(false)}
        >
          <div
            className="diwali-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="diwali-modal-close"
              onClick={() => setShowWishModal(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-diya-glow">
              <span style={{ fontSize: "2.4rem" }}>🪔</span>
            </div>

            <h3 className="modal-diwali-title">Shubh Deepawali! ✨</h3>

            <p className="modal-diwali-wish">
              May the divine light of Diwali illuminate your life with joy, good
              health, boundless prosperity, and peace. Thank you for being a beacon
              of kindness for underprivileged communities!
            </p>

            <div className="modal-diya-count-badge">
              🪔 {diyaCount.toLocaleString()} Diyas Lit by Well-Wishers
            </div>

            <div className="modal-actions-row">
              <Link
                href="/donate"
                className="btn-modal-donate"
                onClick={() => setShowWishModal(false)}
              >
                🤍 Donate for Diwali
              </Link>
              <button className="btn-modal-copy" onClick={copyWishText}>
                {copiedWish ? "✓ Wish Copied!" : "📋 Share Diwali Wish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
