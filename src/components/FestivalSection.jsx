"use client";
import React, { useState, useEffect, useRef } from "react";

export default function FestivalSection() {
  const [diyasLit, setDiyasLit] = useState([true, true, true, true, true]);
  const [copiedWish, setCopiedWish] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  const canvasRef = useRef(null);
  const welcomeCanvasRef = useRef(null);
  const sectionRef = useRef(null);
  const animationRef = useRef(null);
  const welcomeAnimationRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Entities: rockets shooting from bottom, and firework spark streaks
  const rocketsRef = useRef([]);
  const sparksRef = useRef([]);
  const welcomeRocketsRef = useRef([]);
  const welcomeSparksRef = useRef([]);

  // ─── Initialize / Resume Web Audio Context on User Gesture ───
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

  // ─── Launch a Rocket from the Bottom of the Canvas ───
  const launchRocket = (rocketsArray, sparksArray, canvasWidth, canvasHeight, startXRatio, targetYRatio) => {
    const x = canvasWidth * startXRatio;
    const targetY = canvasHeight * targetYRatio;
    const vy = -(11 + Math.random() * 4.5);
    const vx = (Math.random() - 0.5) * 1.8;

    const colors = [
      ["#ff1744", "#ff5252", "#ffd700"],
      ["#ff9100", "#ffea00", "#ffffff"],
      ["#00e676", "#69f0ae", "#ffd700"],
      ["#00e5ff", "#80d8ff", "#ffffff"],
      ["#d500f9", "#ea80fc", "#ffd700"],
      ["#ffd700", "#ffab00", "#ff6d00"],
    ];
    const burstColorSet = colors[Math.floor(Math.random() * colors.length)];

    playCrackerSound("launch");

    rocketsArray.push({
      x,
      y: canvasHeight - 5,
      prevX: x,
      prevY: canvasHeight - 5,
      vx,
      vy,
      targetY,
      burstColors: burstColorSet,
      trail: [],
      sparksTarget: sparksArray,
    });
  };

  // ─── Real Firecracker Explosion (Streaks with Motion Tails, NOT simple dots) ───
  const explodeRocket = (sparksArray, x, y, colors) => {
    playCrackerSound("blast");

    const count = 75 + Math.floor(Math.random() * 35);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.28;
      const speed = 2.8 + Math.random() * 6.8;
      const color = colors[Math.floor(Math.random() * colors.length)];

      sparksArray.push({
        x,
        y,
        prevX: x,
        prevY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        alpha: 1,
        decay: 0.013 + Math.random() * 0.015,
        gravity: 0.12,
        friction: 0.965,
        flicker: Math.random() > 0.35,
        tailLength: 6 + Math.random() * 5,
        history: [{ x, y }],
      });
    }

    // Micro crackling sparks (golden glitter sizzle)
    for (let k = 0; k < 25; k++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 3.5;
      sparksArray.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        prevX: x,
        prevY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: "#ffffff",
        alpha: 1,
        decay: 0.025 + Math.random() * 0.02,
        gravity: 0.08,
        friction: 0.94,
        flicker: true,
        tailLength: 3,
        history: [{ x, y }],
      });
    }
  };

  // ─── Update & Render Rocket & Real Firecracker Streaks ───
  const processCanvasFrame = (ctx, canvas, rocketsArray, sparksArray) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Update & Render Rockets climbing from bottom
    for (let i = rocketsArray.length - 1; i >= 0; i--) {
      const r = rocketsArray[i];
      r.prevX = r.x;
      r.prevY = r.y;
      r.x += r.vx;
      r.y += r.vy;
      r.vy += 0.12; // gravity slowing down rocket climbing

      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 7) r.trail.shift();

      // Draw burning rocket tail streak
      if (r.trail.length > 1) {
        ctx.save();
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.shadowColor = "#ff9100";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(r.trail[0].x, r.trail[0].y);
        for (let j = 1; j < r.trail.length; j++) {
          ctx.lineTo(r.trail[j].x, r.trail[j].y);
        }
        ctx.stroke();

        // Rocket burning tip
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Drop sparkling sparks behind the climbing rocket
      if (Math.random() > 0.3) {
        sparksArray.push({
          x: r.x + (Math.random() - 0.5) * 4,
          y: r.y + 4,
          prevX: r.x,
          prevY: r.y + 2,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 2 + 1.2,
          color: "#ffab00",
          alpha: 0.9,
          decay: 0.035,
          gravity: 0.15,
          friction: 0.96,
          flicker: true,
          tailLength: 3,
          history: [{ x: r.x, y: r.y }],
        });
      }

      // Check if rocket reached apex or target height -> EXPLODE!
      if (r.y <= r.targetY || r.vy >= -1.2) {
        explodeRocket(r.sparksTarget, r.x, r.y, r.burstColors);
        rocketsArray.splice(i, 1);
      }
    }

    // 2. Update & Render Real Firecracker Streaks (NOT simple glowing dots)
    for (let i = sparksArray.length - 1; i >= 0; i--) {
      const p = sparksArray[i];
      p.prevX = p.x;
      p.prevY = p.y;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.vy *= p.friction;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        sparksArray.splice(i, 1);
        continue;
      }

      p.history.push({ x: p.x, y: p.y });
      if (p.history.length > p.tailLength) p.history.shift();

      ctx.save();
      const currentAlpha = p.flicker && Math.random() > 0.4 ? p.alpha * 0.5 : p.alpha;
      ctx.globalAlpha = Math.max(0, currentAlpha);
      ctx.strokeStyle = p.color;
      ctx.lineWidth = Math.max(1, p.alpha * 2.2);
      ctx.lineCap = "round";
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;

      // Draw real elongated streak matching particle motion
      ctx.beginPath();
      if (p.history.length > 1) {
        ctx.moveTo(p.history[0].x, p.history[0].y);
        for (let j = 1; j < p.history.length; j++) {
          ctx.lineTo(p.history[j].x, p.history[j].y);
        }
      } else {
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // White-hot spark tip at the front
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
      ctx.restore();
    }
  };

  // ─── 1. FIRST-TIME OPEN: ROCKETS LAUNCH FROM BOTTOM & BURST ACROSS VIEWPORT ───
  useEffect(() => {
    const welcomeCanvas = welcomeCanvasRef.current;
    if (!welcomeCanvas) return;
    const ctx = welcomeCanvas.getContext("2d");

    const resize = () => {
      welcomeCanvas.width = window.innerWidth;
      welcomeCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Launch series of 4 rockets from the bottom of the screen on load
    const launchSequence = [
      { delay: 400, x: 0.28, targetY: 0.28 },
      { delay: 750, x: 0.68, targetY: 0.24 },
      { delay: 1100, x: 0.48, targetY: 0.32 },
      { delay: 1550, x: 0.35, targetY: 0.22 },
      { delay: 1950, x: 0.75, targetY: 0.30 },
    ];

    launchSequence.forEach(({ delay, x, targetY }) => {
      setTimeout(() => {
        if (welcomeCanvasRef.current) {
          launchRocket(
            welcomeRocketsRef.current,
            welcomeSparksRef.current,
            welcomeCanvas.width,
            welcomeCanvas.height,
            x,
            targetY
          );
        }
      }, delay);
    });

    let running = true;
    const loop = () => {
      if (!running) return;
      processCanvasFrame(
        ctx,
        welcomeCanvas,
        welcomeRocketsRef.current,
        welcomeSparksRef.current
      );
      welcomeAnimationRef.current = requestAnimationFrame(loop);
    };
    loop();

    const bannerTimer = setTimeout(() => {
      setShowWelcomeBanner(false);
    }, 7000);

    return () => {
      running = false;
      clearTimeout(bannerTimer);
      if (welcomeAnimationRef.current) cancelAnimationFrame(welcomeAnimationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ─── 2. SECTION CANVAS: ROCKETS LAUNCH & BURST OVER THE SECTION ───
  const triggerSectionRockets = (count = 4) => {
    getAudioContext();
    const canvas = canvasRef.current;
    if (!canvas) return;

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x = 0.18 + Math.random() * 0.64;
        const targetY = 0.2 + Math.random() * 0.35;
        launchRocket(
          rocketsRef.current,
          sparksRef.current,
          canvas.width,
          canvas.height,
          x,
          targetY
        );
      }, i * 320);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    let running = true;
    const loop = () => {
      if (!running) return;
      processCanvasFrame(
        ctx,
        canvas,
        rocketsRef.current,
        sparksRef.current
      );
      animationRef.current = requestAnimationFrame(loop);
    };
    loop();

    // Ambient rocket launch every 4.2 seconds in the section
    const ambientTimer = setInterval(() => {
      if (document.visibilityState === "visible" && canvasRef.current) {
        const x = 0.2 + Math.random() * 0.6;
        const targetY = 0.22 + Math.random() * 0.35;
        launchRocket(
          rocketsRef.current,
          sparksRef.current,
          canvas.width,
          canvas.height,
          x,
          targetY
        );
      }
    }, 4200);

    return () => {
      running = false;
      clearInterval(ambientTimer);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Click on a Diya launches a rocket from below that specific Diya!
  const handleDiyaClick = (index) => {
    getAudioContext();
    const next = [...diyasLit];
    next[index] = true;
    setDiyasLit(next);

    const canvas = canvasRef.current;
    if (canvas) {
      const xRatio = 0.18 + (index / (diyasLit.length - 1)) * 0.64;
      launchRocket(
        rocketsRef.current,
        sparksRef.current,
        canvas.width,
        canvas.height,
        xRatio,
        0.24 + Math.random() * 0.2
      );
    }
  };

  const copyWish = () => {
    const text =
      "✨ Happy Deepavali from ARISE Social Welfare Trust! 🪔 May this festival of lights illuminate your life with boundless joy, peace, and health. Join us in sharing light: https://arisesocialwelfaretrust.org";
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
           FIRST-TIME OPEN WELCOME CATCH OVERLAY & BAR
           ═════════════════════════════════════════════════ */
        .deepavali-first-open-canvas {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 9998;
        }

        .deepavali-catch-banner {
          position: fixed;
          top: 75px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          background: rgba(20, 10, 4, 0.94);
          backdrop-filter: blur(14px);
          border: 1.5px solid rgba(245, 158, 11, 0.7);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(245, 158, 11, 0.45);
          border-radius: 9999px;
          padding: 0.65rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #ffffff;
          animation: bannerSlideDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          max-width: 92vw;
        }

        @keyframes bannerSlideDown {
          from { transform: translate(-50%, -40px); opacity: 0; }
          to   { transform: translate(-50%, 0); opacity: 1; }
        }

        .catch-banner-title {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: 0.95rem;
          font-weight: 700;
          color: #fef08a;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .catch-banner-btn {
          background: linear-gradient(135deg, #ea580c, #f59e0b);
          color: #000 !important;
          font-weight: 800;
          font-size: 0.8rem;
          padding: 0.35rem 0.95rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(245, 158, 11, 0.5);
          transition: transform 0.2s ease;
        }

        .catch-banner-btn:hover {
          transform: scale(1.05);
        }

        .catch-banner-close {
          background: transparent;
          border: none;
          color: #cbd5e1;
          font-size: 1.15rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 0 0.2rem;
        }

        .catch-banner-close:hover {
          color: #ffffff;
        }

        /* ═════════════════════════════════════════════════
           DEEPAVALI CELEBRATION SECTION (ABOVE 'WHO WE ARE')
           Pure Festive Celebration • Real Rocket Crackers • No Tags
           ═════════════════════════════════════════════════ */
        .deepavali-festive-section {
          position: relative;
          background: radial-gradient(circle at 50% 20%, #261305 0%, #150902 60%, #0a0401 100%);
          color: #ffffff;
          padding: 5.5rem 1.5rem 5.5rem;
          overflow: hidden;
          border-top: 2px solid rgba(245, 158, 11, 0.35);
          border-bottom: 2px solid rgba(245, 158, 11, 0.35);
          font-family: var(--font-sans, "Inter", sans-serif);
        }

        /* Section Cracker Canvas Overlay */
        .deepavali-section-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        /* Ambient Festive Toran Ribbon */
        .deepavali-top-toran {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 20px;
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

        /* Background Mandala Watermark */
        .deepavali-watermark-mandala {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 780px;
          height: 780px;
          opacity: 0.045;
          pointer-events: none;
          animation: mandalaRotate 120s linear infinite;
        }

        @keyframes mandalaRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .deepavali-content-wrap {
          max-width: 1020px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
          text-align: center;
        }

        /* Festive Badge */
        .deepavali-top-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.55);
          color: #fbbf24;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 0.5rem 1.4rem;
          border-radius: 9999px;
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.25);
          margin-bottom: 1.6rem;
          backdrop-filter: blur(8px);
        }

        .pill-sparkle {
          animation: sparkGlow 1.2s infinite alternate;
        }

        @keyframes sparkGlow {
          from { transform: scale(1); opacity: 0.7; }
          to   { transform: scale(1.35); opacity: 1; filter: drop-shadow(0 0 8px #fbbf24); }
        }

        /* Main Headline */
        .deepavali-hero-title {
          font-family: var(--font-heading, "Outfit", sans-serif);
          font-size: clamp(2.4rem, 5.2vw, 4.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.35rem;
          letter-spacing: -0.025em;
          color: #ffffff;
        }

        .deepavali-title-glow {
          display: inline-block;
          background: linear-gradient(135deg, #fef08a 0%, #f59e0b 50%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 35px rgba(245, 158, 11, 0.45);
        }

        /* Warm Message */
        .deepavali-desc {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.8;
          color: #fde68a;
          max-width: 820px;
          margin: 0 auto 2.8rem;
          font-weight: 400;
        }

        .deepavali-motto {
          display: block;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.6rem;
          letter-spacing: 1px;
        }

        /* ── 5 Interactive Glowing Diyas (Joy, Health, Light, Peace, Hope) ── */
        .deepavali-diyas-deck {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.8rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .diya-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          user-select: none;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .diya-node:hover {
          transform: translateY(-8px) scale(1.15);
        }

        .diya-flame-holder {
          position: relative;
          width: 62px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .diya-halo-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.55) 0%, rgba(245, 158, 11, 0) 70%);
          animation: diyaAuraPulse 1.8s infinite ease-in-out;
        }

        @keyframes diyaAuraPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50%      { transform: scale(1.25); opacity: 0.95; }
        }

        .diya-lamp-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 0 14px rgba(245, 158, 11, 0.8));
          transition: filter 0.3s ease;
        }

        .diya-node:hover .diya-lamp-icon {
          filter: drop-shadow(0 0 24px rgba(254, 240, 138, 1));
        }

        .diya-name {
          font-size: 0.76rem;
          font-weight: 700;
          color: #fde047;
          margin-top: 0.25rem;
          letter-spacing: 0.5px;
        }

        /* ── Action Buttons (Burst Crackers • Share Wishes • Sound) ── */
        .deepavali-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .btn-celebrate-crackers {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: linear-gradient(135deg, #ea580c 0%, #f59e0b 50%, #eab308 100%);
          color: #0f0a05 !important;
          font-size: 1.1rem;
          font-weight: 800;
          padding: 1rem 2.4rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 35px rgba(245, 158, 11, 0.6), 0 6px 20px rgba(0, 0, 0, 0.35);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .btn-celebrate-crackers:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 50px rgba(245, 158, 11, 0.9);
        }

        .btn-share-greeting {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          border: 1.5px solid rgba(245, 158, 11, 0.5);
          font-size: 1.02rem;
          font-weight: 700;
          padding: 0.95rem 1.9rem;
          border-radius: 9999px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .btn-share-greeting:hover {
          background: rgba(245, 158, 11, 0.2);
          border-color: #f59e0b;
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }

        .btn-audio-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #cbd5e1;
          font-size: 0.85rem;
          padding: 0.55rem 1.15rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-audio-toggle:hover {
          color: #ffffff;
          border-color: rgba(245, 158, 11, 0.6);
        }
      ` }}
      />

      {/* ── 1. FIRST-TIME OPEN CRACKER BLAST OVERLAY (Rockets launch from bottom) ── */}
      <canvas className="deepavali-first-open-canvas" ref={welcomeCanvasRef} />

      {showWelcomeBanner && (
        <div className="deepavali-catch-banner">
          <span className="catch-banner-title">
            <span>🪔</span>
            <span>Shubh Deepavali from ARISE Trust!</span>
            <span>✨</span>
          </span>

          <button
            className="catch-banner-btn"
            onClick={() => {
              getAudioContext();
              const canvas = welcomeCanvasRef.current;
              if (canvas) {
                for (let i = 0; i < 4; i++) {
                  setTimeout(() => {
                    launchRocket(
                      welcomeRocketsRef.current,
                      welcomeSparksRef.current,
                      canvas.width,
                      canvas.height,
                      0.2 + Math.random() * 0.6,
                      0.2 + Math.random() * 0.35
                    );
                  }, i * 280);
                }
              }
            }}
          >
            🎆 Launch Rockets!
          </button>

          <button
            className="catch-banner-close"
            onClick={() => setShowWelcomeBanner(false)}
            title="Dismiss"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* ── 2. DEEPAVALI CELEBRATION SECTION (ABOVE 'WHO WE ARE') ── */}
      <section
        className="deepavali-festive-section"
        id="deepavali-celebration"
        ref={sectionRef}
      >
        {/* Festive Toran */}
        <div className="deepavali-top-toran" />

        {/* Dynamic Section Cracker Canvas */}
        <canvas className="deepavali-section-canvas" ref={canvasRef} />

        {/* Background Mandala */}
        <svg
          className="deepavali-watermark-mandala"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#f59e0b" strokeWidth="1.2">
            <circle cx="200" cy="200" r="180" />
            <circle cx="200" cy="200" r="140" strokeDasharray="5,5" />
            <circle cx="200" cy="200" r="100" />
            <circle cx="200" cy="200" r="60" strokeDasharray="3,3" />
            <circle cx="200" cy="200" r="25" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="200"
                x2={200 + 180 * Math.cos((i * Math.PI) / 6)}
                y2={200 + 180 * Math.sin((i * Math.PI) / 6)}
              />
            ))}
          </g>
        </svg>

        <div className="deepavali-content-wrap">
          {/* Festive Badge */}
          <div className="deepavali-top-pill">
            <span className="pill-sparkle">✨</span>
            <span>SHUBH DEEPAVALI • FESTIVAL OF LIGHTS</span>
            <span className="pill-sparkle">✨</span>
          </div>

          {/* Main Headline */}
          <h2 className="deepavali-hero-title">
            Happy Deepavali! <br />
            <span className="deepavali-title-glow">
              May the Light of Joy Fill Every Home 🪔
            </span>
          </h2>

          {/* Festive Blessing Message */}
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
                title="Click this Diya to shoot a rocket from it into the sky!"
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
              onClick={() => triggerSectionRockets(4)}
              title="Click to launch real sky rockets that shoot up and explode!"
            >
              <span style={{ fontSize: "1.3rem" }}>🚀</span>
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
              title={soundEnabled ? "Mute rocket sound" : "Enable realistic rocket whistle & blast sound"}
            >
              <span>{soundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF"}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
