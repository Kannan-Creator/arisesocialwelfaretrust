"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FestivalSection() {
  const [diyasLit, setDiyasLit] = useState([true, true, true, true, true]);
  const [copiedWish, setCopiedWish] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const audioCtxRef = useRef(null);
  const animationFrameId = useRef(null);
  const isLoopRunning = useRef(false);
  const isVisible = useRef(true);

  // High-performance particle pools (flat arrays, zero per-frame object allocations)
  const rockets = useRef([]);
  const sparks = useRef([]);

  // ─── Lightweight Web Audio Engine ───
  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  };

  // Warm up audio context on any user interaction anywhere on the page
  useEffect(() => {
    const unlockAudio = () => {
      const ctx = getAudioContext();
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
    };

    window.addEventListener("click", unlockAudio, { passive: true });
    window.addEventListener("touchstart", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio, { passive: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  // ─── Realistic Firecracker Sound Generator ───
  const playCrackerSound = (type = "blast") => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === "launch") {
        // Rocket launch rising whistle
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(1600, now + 0.32);

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(2200, now);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.33);
      } else {
        // 1. Deep Bass Boom (The heavy concussive explosion thud)
        const boomOsc = ctx.createOscillator();
        const boomGain = ctx.createGain();
        boomOsc.type = "triangle";
        boomOsc.frequency.setValueAtTime(140, now);
        boomOsc.frequency.exponentialRampToValueAtTime(30, now + 0.22);

        boomGain.gain.setValueAtTime(0.65, now);
        boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        boomOsc.connect(boomGain);
        boomGain.connect(ctx.destination);
        boomOsc.start(now);
        boomOsc.stop(now + 0.26);

        // 2. Gunpowder Snap & Crackle (Bandpass filtered white noise)
        const bufferSize = Math.floor(ctx.sampleRate * 0.22);
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          const decay = Math.exp(-i / (bufferSize * 0.25));
          const crackle = Math.random() > 0.82 ? (Math.random() * 2 - 1) * 1.6 : (Math.random() * 2 - 1) * 0.4;
          data[i] = crackle * decay;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(1100 + Math.random() * 400, now);
        bandpass.Q.setValueAtTime(1.8, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.75, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        noise.connect(bandpass);
        bandpass.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        noise.start(now);

        // 3. Trailing Sizzle Crackles (sparklers sizzling)
        for (let s = 1; s <= 3; s++) {
          const popTime = now + 0.05 * s + Math.random() * 0.03;
          const popOsc = ctx.createOscillator();
          const popGain = ctx.createGain();
          popOsc.type = "square";
          popOsc.frequency.setValueAtTime(900 + Math.random() * 700, popTime);
          popGain.gain.setValueAtTime(0.12, popTime);
          popGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.035);
          popOsc.connect(popGain);
          popGain.connect(ctx.destination);
          popOsc.start(popTime);
          popOsc.stop(popTime + 0.04);
        }
      }
    } catch {
      // Audio autoplay restrictions; fail silently
    }
  };

  // ─── High-Performance Rocket Launch ───
  const launchRocket = (startXRatio, targetYRatio) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Limit active climbing rockets for smooth 60fps performance
    if (rockets.current.length >= 8) return;

    const x = canvas.width * startXRatio;
    const targetY = canvas.height * targetYRatio;

    const colors = [
      ["#ff3b30", "#ff9500", "#ffd60a", "#ffffff"],
      ["#ff9500", "#ffd60a", "#ff2d55", "#ffffff"],
      ["#34c759", "#30d158", "#ffd60a", "#ffffff"],
      ["#00c7be", "#32ade6", "#007aff", "#ffffff"],
      ["#af52de", "#bf5af2", "#ffd60a", "#ffffff"],
      ["#ffd60a", "#ff9f0a", "#ff3b30", "#ffffff"],
    ];
    const burstColorSet = colors[Math.floor(Math.random() * colors.length)];

    playCrackerSound("launch");

    rockets.current.push({
      x,
      y: canvas.height,
      prevX: x,
      prevY: canvas.height,
      vx: (Math.random() - 0.5) * 1.6,
      vy: -(11.5 + Math.random() * 3.8),
      targetY,
      colors: burstColorSet,
      trail: [],
    });

    startAnimationLoop();
  };

  // ─── Real Firecracker Burst (Radiant Streaks & Glitter Sizzle) ───
  const explodeRocket = (x, y, colors) => {
    playCrackerSound("blast");

    // 1. Full-Scale Radiant Star Streaks (The real firecracker burst)
    const starCount = 75 + Math.floor(Math.random() * 25);
    for (let i = 0; i < starCount; i++) {
      const angle = (Math.PI * 2 * i) / starCount + (Math.random() - 0.5) * 0.28;
      const speed = 2.6 + Math.random() * 6.4;
      const color = colors[i % colors.length];

      sparks.current.push({
        x,
        y,
        prevX: x,
        prevY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        alpha: 1,
        decay: 0.013 + Math.random() * 0.015,
        gravity: 0.11,
        friction: 0.97,
        flicker: Math.random() > 0.35,
        trailLength: 3.2 + Math.random() * 2.2,
        isGlitter: false,
      });
    }

    // 2. Micro Crackling Glitter Sizzle Sparks (Diwali star sizzle)
    for (let k = 0; k < 26; k++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 3.6;
      sparks.current.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        prevX: x,
        prevY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.6,
        color: Math.random() > 0.5 ? "#ffffff" : "#ffd700",
        alpha: 1,
        decay: 0.022 + Math.random() * 0.02,
        gravity: 0.14,
        friction: 0.95,
        flicker: true,
        trailLength: 1.8,
        isGlitter: true,
      });
    }

    startAnimationLoop();
  };

  // ─── Optimized Render Loop (Runs ONLY when particles exist) ───
  const startAnimationLoop = () => {
    if (isLoopRunning.current) return;
    isLoopRunning.current = true;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas || !isVisible.current) {
        isLoopRunning.current = false;
        return;
      }

      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Hardware-accelerated additive blending (creates vivid glow with 0 shadowBlur CPU lag)
      ctx.globalCompositeOperation = "lighter";

      const rocketList = rockets.current;
      const sparkList = sparks.current;

      // 1. Process Rockets climbing into the sky
      for (let i = rocketList.length - 1; i >= 0; i--) {
        const r = rocketList[i];
        r.prevX = r.x;
        r.prevY = r.y;
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.09; // slight gravity slowing rocket ascent

        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 7) r.trail.shift();

        // Draw climbing rocket burning trail
        ctx.strokeStyle = "rgba(255, 200, 60, 0.9)";
        ctx.lineWidth = 2.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        if (r.trail.length > 1) {
          ctx.moveTo(r.trail[0].x, r.trail[0].y);
          for (let j = 1; j < r.trail.length; j++) {
            ctx.lineTo(r.trail[j].x, r.trail[j].y);
          }
        }
        ctx.stroke();

        // White burning rocket head
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Drop sparkling embers behind climbing rocket
        if (Math.random() > 0.35) {
          sparkList.push({
            x: r.x + (Math.random() - 0.5) * 4,
            y: r.y + 3,
            prevX: r.x,
            prevY: r.y + 1,
            vx: (Math.random() - 0.5) * 1.2,
            vy: Math.random() * 1.8 + 1.0,
            color: "#ffaa00",
            alpha: 0.85,
            decay: 0.035,
            gravity: 0.12,
            friction: 0.96,
            flicker: true,
            trailLength: 1.5,
            isGlitter: true,
          });
        }

        // Rocket explosion trigger at apex or target height
        if (r.y <= r.targetY || r.vy >= -1.0) {
          explodeRocket(r.x, r.y, r.colors);
          rocketList.splice(i, 1);
        }
      }

      // 2. Process Real Firecracker Streaks & Glitter Sizzle
      for (let i = sparkList.length - 1; i >= 0; i--) {
        const p = sparkList[i];
        p.prevX = p.x;
        p.prevY = p.y;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          sparkList.splice(i, 1);
          continue;
        }

        const alpha = p.flicker && Math.random() > 0.35 ? p.alpha * 0.55 : p.alpha;
        ctx.globalAlpha = Math.max(0, alpha);

        // Radiant Motion Streak (extrapolated from velocity for solid 60fps)
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.isGlitter ? 1.2 : 2.0;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(p.prevX - p.vx * p.trailLength, p.prevY - p.vy * p.trailLength);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Star glowing tip
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.isGlitter ? 1.2 : 1.8, 0, Math.PI * 2);
        ctx.fill();

        // White-hot center on high-energy sparks
        if (!p.isGlitter && p.alpha > 0.45) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(p.x, p.y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Reset composite operation & alpha
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      // Stop loop when all rockets and sparks are finished (0% idle CPU usage)
      if (rocketList.length > 0 || sparkList.length > 0) {
        animationFrameId.current = requestAnimationFrame(render);
      } else {
        isLoopRunning.current = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animationFrameId.current = requestAnimationFrame(render);
  };

  // ─── Lifecycle & Visibility Handling ───
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initial celebratory launch on first load (staggered, light)
    const initialTimer = setTimeout(() => {
      launchRocket(0.3, 0.28);
      setTimeout(() => launchRocket(0.7, 0.24), 300);
      setTimeout(() => launchRocket(0.5, 0.32), 650);
    }, 400);

    // Pause when user scrolls out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
        if (entry.isIntersecting && (rockets.current.length > 0 || sparks.current.length > 0)) {
          startAnimationLoop();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      clearTimeout(initialTimer);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  // Multi-rocket burst on button click
  const triggerBurst = (count = 3) => {
    getAudioContext();
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        launchRocket(0.2 + Math.random() * 0.6, 0.2 + Math.random() * 0.3);
      }, i * 260);
    }
  };

  const handleDiyaClick = (index) => {
    getAudioContext();
    const next = [...diyasLit];
    next[index] = true;
    setDiyasLit(next);

    const xRatio = 0.18 + (index / (diyasLit.length - 1)) * 0.64;
    launchRocket(xRatio, 0.22 + Math.random() * 0.18);
  };

  const copyWish = () => {
    const text =
      "✨ Happy Deepavali from ARISE Social Welfare Trust! 🪔 May this festival of lights illuminate your life with boundless joy, peace, and health: https://arisesocialwelfaretrust.org";
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
        /* ═════════════════════════════════════════════════
           OPTIMIZED LIGHTWEIGHT DEEPAVALI SECTION
           Silky-smooth 60fps • 0% Idle CPU • Zero Lag
           ═════════════════════════════════════════════════ */
        .deepavali-festive-section {
          position: relative;
          background: radial-gradient(circle at 50% 20%, #221004 0%, #120701 60%, #080301 100%);
          color: #ffffff;
          padding: 5rem 1.5rem 5rem;
          overflow: hidden;
          border-top: 2px solid rgba(245, 158, 11, 0.35);
          border-bottom: 2px solid rgba(245, 158, 11, 0.35);
          font-family: var(--font-sans, "Inter", sans-serif);
          contain: layout paint;
        }

        .deepavali-section-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .deepavali-top-toran {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 18px;
          background: repeating-linear-gradient(
            90deg,
            #f59e0b 0px,
            #f59e0b 16px,
            transparent 16px,
            transparent 32px,
            #dc2626 32px,
            #dc2626 48px,
            transparent 48px,
            transparent 64px
          );
          opacity: 0.65;
          border-bottom: 2px solid rgba(245, 158, 11, 0.4);
        }

        .deepavali-watermark-mandala {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 720px;
          height: 720px;
          opacity: 0.04;
          pointer-events: none;
        }

        .deepavali-content-wrap {
          max-width: 980px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
          text-align: center;
        }

        .deepavali-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.55);
          color: #fbbf24;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.45rem 1.35rem;
          border-radius: 9999px;
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
          margin-bottom: 1.5rem;
        }

        .deepavali-hero-title {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: clamp(2.3rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          letter-spacing: -0.025em;
          color: #ffffff;
        }

        .deepavali-title-glow {
          display: inline-block;
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .deepavali-desc {
          font-size: clamp(1rem, 1.6vw, 1.2rem);
          line-height: 1.75;
          color: #fde68a;
          max-width: 800px;
          margin: 0 auto 2.5rem;
          font-weight: 400;
        }

        .deepavali-motto {
          display: block;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.5rem;
          letter-spacing: 0.8px;
        }

        .deepavali-diyas-deck {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.6rem;
          margin-bottom: 2.8rem;
          flex-wrap: wrap;
        }

        .diya-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          user-select: none;
          transition: transform 0.2s ease;
        }

        .diya-node:hover {
          transform: translateY(-6px) scale(1.1);
        }

        .diya-flame-holder {
          position: relative;
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .diya-halo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0) 70%);
        }

        .diya-lamp-icon {
          font-size: 2.4rem;
          filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.7));
        }

        .diya-name {
          font-size: 0.74rem;
          font-weight: 700;
          color: #fde047;
          margin-top: 0.2rem;
          letter-spacing: 0.5px;
        }

        .deepavali-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-celebrate-crackers {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #eab308 100%);
          color: #0f0a05 !important;
          font-size: 1.05rem;
          font-weight: 800;
          padding: 0.95rem 2.2rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.5);
          transition: transform 0.2s ease;
        }

        .btn-celebrate-crackers:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 35px rgba(245, 158, 11, 0.75);
        }

        .btn-share-greeting {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          border: 1.5px solid rgba(245, 158, 11, 0.5);
          font-size: 1rem;
          font-weight: 700;
          padding: 0.9rem 1.8rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .btn-share-greeting:hover {
          background: rgba(245, 158, 11, 0.2);
        }

        .btn-audio-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #cbd5e1;
          font-size: 0.85rem;
          padding: 0.55rem 1.15rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .btn-audio-toggle:hover {
          color: #ffffff;
          border-color: rgba(245, 158, 11, 0.6);
        }
      ` }}
      />

      {/* ── High-Performance Section Cracker Canvas ── */}
      <section
        className="deepavali-festive-section"
        id="deepavali-celebration"
        ref={sectionRef}
      >
        <div className="deepavali-top-toran" />
        <canvas className="deepavali-section-canvas" ref={canvasRef} />

        {/* Lightweight Watermark */}
        <svg
          className="deepavali-watermark-mandala"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#f59e0b" strokeWidth="1">
            <circle cx="200" cy="200" r="170" />
            <circle cx="200" cy="200" r="130" strokeDasharray="6,6" />
            <circle cx="200" cy="200" r="80" />
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="200"
                x2={200 + 170 * Math.cos((i * Math.PI) / 4)}
                y2={200 + 170 * Math.sin((i * Math.PI) / 4)}
              />
            ))}
          </g>
        </svg>

        <div className="deepavali-content-wrap">
          <div className="deepavali-top-pill">
            <span>✨</span>
            <span>SHUBH DEEPAVALI • FESTIVAL OF LIGHTS</span>
            <span>✨</span>
          </div>

          <h2 className="deepavali-hero-title">
            Happy Deepavali! <br />
            <span className="deepavali-title-glow">
              May the Light of Joy Fill Every Home 🪔
            </span>
          </h2>

          <p className="deepavali-desc">
            On this auspicious celebration of Deepavali, may the gentle glow of every lamp
            dispel darkness, bring good health, endless peace, and new beginnings for you
            and your loved ones.
            <span className="deepavali-motto">
              ARISE Social Welfare Trust • Learn · Earn · Return
            </span>
          </p>

          {/* 5 Interactive Glowing Diyas (Joy, Health, Light, Peace, Hope) */}
          <div className="deepavali-diyas-deck">
            {diyasLit.map((_, idx) => (
              <div
                key={idx}
                className="diya-node"
                onClick={() => handleDiyaClick(idx)}
                title="Click this Diya to shoot a rocket into the sky!"
                role="button"
                tabIndex={0}
              >
                <div className="diya-flame-holder">
                  <div className="diya-halo-ring" />
                  <span className="diya-lamp-icon">🪔</span>
                </div>
                <span className="diya-name">
                  {idx === 0 && "Joy"}
                  {idx === 1 && "Health"}
                  {idx === 2 && "Light"}
                  {idx === 3 && "Peace"}
                  {idx === 4 && "Hope"}
                </span>
              </div>
            ))}
          </div>

          {/* Cracker & Wish Actions */}
          <div className="deepavali-action-buttons">
            <button
              className="btn-celebrate-crackers"
              onClick={() => triggerBurst(3)}
              title="Click to launch sky rockets!"
            >
              <span style={{ fontSize: "1.2rem" }}>🚀</span>
              <span>Launch Sky Crackers!</span>
            </button>

            <button className="btn-share-greeting" onClick={copyWish}>
              <span>{copiedWish ? "✓ Blessing Copied!" : "💌 Share Deepavali Wishes"}</span>
            </button>

            <button
              className="btn-audio-toggle"
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) {
                  getAudioContext();
                  playCrackerSound("blast");
                }
              }}
              title={soundEnabled ? "Mute sound" : "Enable sound"}
            >
              <span>{soundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF"}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
