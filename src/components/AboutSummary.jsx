"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Animated counter hook ── */
function useCountUp(target, duration = 2000, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

/* ── Intersection observer hook ── */
function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const stats = [
  { num: 200, suffix: "+", label: "Students Supported", icon: "fa-graduation-cap", color: "#ff9000" },
  { num: 500, suffix: "+", label: "Trees Planted",      icon: "fa-tree",            color: "#22c55e" },
  { num: 150, suffix: "+", label: "Elders Cared For",   icon: "fa-heart",           color: "#ec4899" },
  { num: 12,  suffix: "+", label: "Active Volunteers",  icon: "fa-users",           color: "#6366f1" },
];

const activities = [
  {
    icon: "fa-book",
    color: "#ff9000",
    bg: "rgba(255,144,0,0.08)",
    title: "Daily Education",
    desc: "Running the Vivek Vihar Tuition Centre providing free evening classes and study kits to underprivileged children.",
    href: "/our-daily-activities",
  },
  {
    icon: "fa-tree",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    title: "Monthly Green Drives",
    desc: "Monthly tree planting, seedball distributions and neighbourhood cleanup campaigns across Chennai.",
    href: "/our-monthly-activities",
  },
  {
    icon: "fa-home",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    title: "Elder Care",
    desc: "Festive celebrations, health camps, and meal distributions at partner old age homes every year.",
    href: "/our-yearly-activities",
  },
];

export default function AboutSummary() {
  const [statsRef, statsInView]   = useInView(0.3);
  const [sectionRef, sectionInView] = useInView(0.15);
  const [cardsRef, cardsInView]   = useInView(0.15);

  return (
    <>
      {/* ─── ABOUT INTRO ─── */}
      <section className="as-section" ref={sectionRef}>
        <div className="as-container">
          <div className="as-intro-grid">
            {/* Image side */}
            <div className={`as-img-side ${sectionInView ? "as-animate-left" : "as-hidden"}`}>
              <div className="as-img-wrapper">
                <img
                  src="/storage/files/root143/whatsapp-image-2026-01-14-at-103349-am.jpeg"
                  alt="ARISE Social Welfare Trust in action"
                  className="as-main-img"
                />
                {/* Floating badge */}
                <div className="as-float-badge">
                  <i className="fa fa-award" style={{ fontSize: "1.4rem", color: "#ff9000" }} />
                  <div>
                    <div className="as-float-num">80G & 12A</div>
                    <div className="as-float-sub">Tax Certified</div>
                  </div>
                </div>
                {/* Accent card */}
                <div className="as-accent-card">
                  <img
                    src="/storage/files/root143/img-20260126-wa0025.jpg"
                    alt="Festival activity"
                    className="as-accent-img"
                  />
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className={`as-text-side ${sectionInView ? "as-animate-right" : "as-hidden"}`}>
              <span className="as-tag">Who We Are</span>
              <h2 className="as-title">
                Driven by Purpose.
                <span className="as-title-accent"> Powered by People.</span>
              </h2>
              <p className="as-lead">
                ARISE Social Welfare Trust operates on a simple yet powerful mantra —{" "}
                <strong>Learn | Earn | Return</strong>. In just two years, we have
                grown into a force for change in Chennai's underserved communities.
              </p>
              <p className="as-body">
                From daily tuition centres to monthly environmental campaigns and
                yearly elder care, every initiative is fully volunteer-led,
                transparently audited, and community-first.
              </p>

              {/* Mini feature list */}
              <ul className="as-feature-list">
                {[
                  "Registered & 80G / 12A Tax Certified Trust",
                  "100% volunteer-run — zero admin overhead fees",
                  "Audited annual reports published for public review",
                  "Partnerships with Ramakrishna Mission & local schools",
                ].map((f, i) => (
                  <li key={i} className="as-feature-item">
                    <span className="as-check"><i className="fa fa-check" /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="as-cta-row">
                <Link href="/about" className="as-btn-primary">Our Full Story</Link>
                <Link href="/donate" className="as-btn-ghost">
                  <i className="fa fa-heart" style={{ marginRight: "7px", color: "#ff9000" }} />
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT COUNTERS ─── */}
      <section className="as-stats-section" ref={statsRef}>
        <div className="as-container">
          <div className="as-stats-header">
            <span className="as-tag as-tag-white">Our Impact</span>
            <h2 className="as-stats-title">Numbers That Matter</h2>
            <p className="as-stats-desc">Every figure is verified, audited, and backed by field documentation.</p>
          </div>
          <div className="as-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} active={statsInView} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACTIVITIES CARDS ─── */}
      <section className="as-activities-section" ref={cardsRef}>
        <div className="as-container">
          <div className="as-activities-header">
            <span className="as-tag">What We Do</span>
            <h2 className="as-activities-title">Our Core Programmes</h2>
            <p className="as-activities-desc">
              Three pillars of action — education, environment, and elder care — creating lasting change.
            </p>
          </div>
          <div className="as-cards-grid">
            {activities.map((a, i) => (
              <div
                key={i}
                className={`as-activity-card ${cardsInView ? "as-card-enter" : "as-hidden"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="as-card-icon" style={{ background: a.bg, color: a.color }}>
                  <i className={`fa ${a.icon}`} />
                </div>
                <h3 className="as-card-title">{a.title}</h3>
                <p className="as-card-desc">{a.desc}</p>
                <Link href={a.href} className="as-card-link" style={{ color: a.color }}>
                  Learn More <i className="fa fa-arrow-right" style={{ marginLeft: "5px" }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANTRA BANNER ─── */}
      <section className="as-mantra-section">
        <div className="as-mantra-bg" />
        <div className="as-container as-mantra-inner">
          <div className="as-mantra-content">
            <span className="as-tag as-tag-white">Our Core Philosophy</span>
            <h2 className="as-mantra-title">Learn · Earn · Return</h2>
            <p className="as-mantra-text">
              Every action we take is guided by gratitude — for what we have learned,
              what we have earned, and our responsibility to give back to society.
            </p>
            <div className="as-mantra-actions">
              <Link href="/donate" className="hero-btn-primary">
                <i className="fa fa-heart" style={{ marginRight: "8px" }} />
                Make a Donation
              </Link>
              <Link href="/contact" className="hero-btn-outline">
                Join as Volunteer
              </Link>
            </div>
          </div>
          <div className="as-mantra-img-side">
            <img
              src="/storage/files/root143/img-20260601-wa0000.jpg"
              alt="ARISE activities"
              className="as-mantra-img"
            />
          </div>
        </div>
      </section>

      {/* ─── EVENT HIGHLIGHT ─── */}
      <section className="as-event-section">
        <div className="as-container">
          <div className="as-event-card">
            <div className="as-event-icon">
              <i className="fa fa-calendar-check-o" />
            </div>
            <div className="as-event-info">
              <span className="as-tag" style={{ marginBottom: "0.5rem" }}>Latest Activity</span>
              <h3 className="as-event-title">Stationery Distribution Drive — Vivek Vihar Tuition Centre</h3>
              <p className="as-event-desc">
                Notebooks, school bags, pens and textbooks distributed to 200+ underprivileged students.
                Conducted by ARISE volunteers in collaboration with the RKM 1999 & 2024 Alumni Batches.
              </p>
              <div className="as-event-meta">
                <span><i className="fa fa-calendar" /> 14 June 2026</span>
                <span><i className="fa fa-clock-o" /> 10:15 AM – 11:55 AM</span>
                <span><i className="fa fa-map-marker" /> Thathaimanji, Chennai</span>
              </div>
            </div>
            <Link href="/our-daily-activities" className="as-event-btn">View Activity</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Layout ── */
        .as-section           { padding: 6rem 0; background: var(--background); }
        .as-container         { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

        /* ── Animations ── */
        .as-hidden            { opacity: 0; transform: translateY(30px); }
        @keyframes asSlideLeft  { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
        @keyframes asSlideRight { from { opacity:0; transform:translateX(50px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes asCardEnter  { from { opacity:0; transform:translateY(36px);  } to { opacity:1; transform:translateY(0); } }
        .as-animate-left  { animation: asSlideLeft  0.75s cubic-bezier(.16,1,.3,1) forwards; }
        .as-animate-right { animation: asSlideRight 0.75s cubic-bezier(.16,1,.3,1) 0.15s forwards; }
        .as-card-enter    { animation: asCardEnter  0.65s cubic-bezier(.16,1,.3,1) both; }

        /* ── Tag ── */
        .as-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 0.85rem;
        }
        .as-tag-white { color: rgba(255,255,255,0.8); }

        /* ── Intro grid ── */
        .as-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .as-intro-grid { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── Image side ── */
        .as-img-side     { position: relative; }
        .as-img-wrapper  {
          position: relative;
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
          padding: 2.6rem 2.2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .as-main-img {
          width: 100%;
          max-width: 420px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: contain;
          display: block;
        }
        .as-float-badge {
          position: absolute;
          top: -16px;
          right: 20px;
          background: #fff;
          border-radius: 16px;
          padding: 0.75rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
          border: 1px solid var(--border);
          z-index: 3;
        }
        .as-float-num  { font-family: var(--font-heading); font-weight: 800; font-size: 0.95rem; color: var(--foreground); }
        .as-float-sub  { font-size: 0.72rem; color: var(--foreground-muted); font-weight: 600; }
        .as-accent-card {
          position: absolute;
          bottom: -18px;
          left: -18px;
          width: 135px;
          height: 95px;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 14px 30px rgba(0,0,0,0.18);
          border: 4px solid #fff;
          z-index: 3;
        }
        .as-accent-img { width: 100%; height: 100%; object-fit: cover; }

        /* ── Text side ── */
        .as-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.9rem, 3vw, 2.8rem);
          letter-spacing: -1px;
          color: var(--foreground);
          margin-bottom: 1.2rem;
          line-height: 1.15;
        }
        .as-title-accent {
          background: linear-gradient(90deg, var(--primary), #ffcc44);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .as-lead  { font-size: 1.05rem; color: var(--foreground);       line-height: 1.7; margin-bottom: 0.85rem; }
        .as-body  { font-size: 0.97rem; color: var(--foreground-muted); line-height: 1.7; margin-bottom: 1.8rem; }

        .as-feature-list  { list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 0.65rem; }
        .as-feature-item  { display: flex; align-items: flex-start; gap: 0.7rem; font-size: 0.95rem; color: var(--foreground); }
        .as-check {
          width: 22px; height: 22px; min-width: 22px;
          border-radius: 50%;
          background: rgba(255,144,0,0.12);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; margin-top: 2px;
        }

        .as-cta-row      { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
        .as-btn-primary {
          display: inline-flex; align-items: center;
          padding: 0.78rem 1.8rem;
          background: linear-gradient(135deg, var(--primary), #e07800);
          color: #fff;
          font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem;
          border-radius: 99px;
          box-shadow: 0 6px 22px rgba(255,120,0,0.35);
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .as-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,120,0,0.45); color: #fff; }
        .as-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 0.78rem 1.8rem;
          background: transparent;
          border: 1.5px solid var(--border);
          color: var(--foreground);
          font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem;
          border-radius: 99px;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .as-btn-ghost:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-2px); }

        /* ── Stats section ── */
        .as-stats-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        .as-stats-section::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(255,144,0,0.07);
          pointer-events: none;
        }
        .as-stats-header  { text-align: center; margin-bottom: 3.5rem; }
        .as-stats-title   { font-family: var(--font-heading); font-weight: 900; font-size: clamp(1.8rem, 3.5vw, 2.8rem); color: #fff; margin-bottom: 0.85rem; }
        .as-stats-desc    { color: rgba(255,255,255,0.55); font-size: 1.05rem; max-width: 540px; margin: 0 auto; }

        .as-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) { .as-stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .as-stats-grid { grid-template-columns: 1fr; } }

        /* ── Activities ── */
        .as-activities-section { padding: 6rem 0; background: var(--background); }
        .as-activities-header  { text-align: center; margin-bottom: 3.5rem; }
        .as-activities-title   { font-family: var(--font-heading); font-weight: 900; font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: var(--foreground); margin-bottom: 0.75rem; }
        .as-activities-desc    { color: var(--foreground-muted); font-size: 1.05rem; max-width: 580px; margin: 0 auto; }

        .as-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 900px) { .as-cards-grid { grid-template-columns: 1fr; } }

        .as-activity-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.25rem 2rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          display: flex; flex-direction: column; gap: 0.9rem;
        }
        .as-activity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }
        .as-card-icon {
          width: 56px; height: 56px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
        }
        .as-card-title { font-family: var(--font-heading); font-weight: 800; font-size: 1.15rem; color: var(--foreground); margin: 0; }
        .as-card-desc  { font-size: 0.95rem; color: var(--foreground-muted); line-height: 1.65; margin: 0; flex-grow: 1; }
        .as-card-link  { font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; transition: gap 0.2s; }
        .as-card-link:hover { gap: 6px; }

        /* ── Mantra banner ── */
        .as-mantra-section {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1a0a00 100%);
          overflow: hidden;
          padding: 6rem 0;
        }
        .as-mantra-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,144,0,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .as-mantra-inner {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
          position: relative; z-index: 1;
        }
        @media (max-width: 900px) {
          .as-mantra-inner { grid-template-columns: 1fr; gap: 3rem; }
          .as-mantra-img-side { display: none; }
        }
        .as-mantra-title {
          font-family: var(--font-heading); font-weight: 900;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          color: #fff; margin-bottom: 1.1rem; letter-spacing: -1px;
        }
        .as-mantra-text  { color: rgba(255,255,255,0.65); font-size: 1.05rem; line-height: 1.75; margin-bottom: 2.2rem; }
        .as-mantra-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .as-mantra-img {
          width: 100%; aspect-ratio: 4/3;
          object-fit: cover; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        /* ── reuse hero button classes ── */
        .hero-btn-primary {
          display: inline-flex; align-items: center;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, var(--primary), #e07800);
          color: #fff;
          font-family: var(--font-heading); font-weight: 700; font-size: 1rem;
          border-radius: 99px;
          box-shadow: 0 8px 28px rgba(255,120,0,0.45);
          transition: all 0.25s ease; text-decoration: none;
        }
        .hero-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(255,120,0,0.55); color: #fff; }
        .hero-btn-outline {
          display: inline-flex; align-items: center;
          padding: 0.85rem 2rem;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.5);
          color: #fff;
          font-family: var(--font-heading); font-weight: 700; font-size: 1rem;
          border-radius: 99px; backdrop-filter: blur(10px);
          transition: all 0.25s ease; text-decoration: none;
        }
        .hero-btn-outline:hover { background: rgba(255,255,255,0.22); border-color: #fff; transform: translateY(-3px); color: #fff; }

        /* ── Event card ── */
        .as-event-section { padding: 5rem 0; background: var(--background-alt); }
        .as-event-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem 2.5rem;
          box-shadow: var(--shadow-md);
          display: flex; align-items: flex-start; gap: 2rem;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .as-event-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        @media (max-width: 768px) { .as-event-card { flex-direction: column; gap: 1.5rem; } }
        .as-event-icon {
          width: 64px; height: 64px; min-width: 64px;
          border-radius: 16px;
          background: rgba(255,144,0,0.1);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
        }
        .as-event-info  { flex-grow: 1; }
        .as-event-title { font-family: var(--font-heading); font-weight: 800; font-size: 1.2rem; color: var(--foreground); margin-bottom: 0.5rem; }
        .as-event-desc  { color: var(--foreground-muted); font-size: 0.95rem; line-height: 1.65; margin-bottom: 1rem; }
        .as-event-meta  {
          display: flex; flex-wrap: wrap; gap: 1rem;
          font-size: 0.85rem; font-weight: 600; color: var(--foreground-muted);
        }
        .as-event-meta i { color: var(--primary); margin-right: 4px; }
        .as-event-btn {
          display: inline-flex; align-items: center; white-space: nowrap;
          padding: 0.7rem 1.5rem;
          background: linear-gradient(135deg, var(--primary), #e07800);
          color: #fff;
          font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem;
          border-radius: 99px; text-decoration: none;
          box-shadow: 0 6px 20px rgba(255,120,0,0.35);
          transition: all 0.25s ease;
          align-self: center;
        }
        .as-event-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,120,0,0.45); color: #fff; }
      `}</style>
    </>
  );
}

/* ── Stat card sub-component ── */
function StatCard({ stat, active, delay }) {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  const count = useCountUp(stat.num, 1800, started);

  return (
    <div className="as-stat-card">
      <div className="as-sc-icon" style={{ background: `${stat.color}18`, color: stat.color }}>
        <i className={`fa ${stat.icon}`} />
      </div>
      <div className="as-sc-num" style={{ color: stat.color }}>
        {count}{stat.suffix}
      </div>
      <div className="as-sc-label">{stat.label}</div>
      <style>{`
        .as-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2.2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .as-stat-card:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.14);
        }
        .as-sc-icon {
          width: 58px; height: 58px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto 1.1rem;
        }
        .as-sc-num {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(2.2rem, 3.5vw, 3.2rem);
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .as-sc-label {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.5px;
        }
      `}</style>
    </div>
  );
}
