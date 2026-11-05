"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`modern-header ${scrolled ? "header-scrolled" : "header-top"}`}>
        {/* Main Navbar */}
        <nav className="navbar-modern container-modern">
          <Link href="/" className="logo-brand d-flex align-items-center">
            <img
              alt="Arise SWT Logo"
              src="/storage/files/root143/site_logo14354008.png"
              className="logo-img"
            />
          </Link>

          {/* Mobile Toggle */}
          <button className="mobile-toggle d-xl-none">
            <i className={`fa fa-bars ${scrolled ? "" : "text-white"}`}></i>
          </button>

          {/* Desktop Menu */}
          <ul className="nav-menu d-none d-xl-flex">
            {[
              { label: "Home", href: "/" },
            ].map((item) => (
              <li key={item.href} className="nav-item-modern">
                <Link href={item.href} className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* About Us Dropdown */}
            <li className="nav-item-modern has-dropdown">
              <Link href="#" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                About Us <i className="fa fa-chevron-down ms-1 text-xs"></i>
              </Link>
              <ul className="dropdown-modern glass-card">
                <li><Link href="/about" className="dropdown-item-modern">Who We Are</Link></li>
                <li><Link href="/donate" className="dropdown-item-modern">Support Us</Link></li>
              </ul>
            </li>

            {/* Activities Dropdown */}
            <li className="nav-item-modern has-dropdown">
              <Link href="#" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                Activities <i className="fa fa-chevron-down ms-1 text-xs"></i>
              </Link>
              <ul className="dropdown-modern glass-card">
                <li><Link href="/our-daily-activities" className="dropdown-item-modern">Educational</Link></li>
                <li><Link href="/our-monthly-activities" className="dropdown-item-modern">Environment</Link></li>
                <li><Link href="/our-yearly-activities" className="dropdown-item-modern">Old Age Home</Link></li>
              </ul>
            </li>

            {/* Projects Dropdown */}
            <li className="nav-item-modern has-dropdown">
              <Link href="#" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                Projects <i className="fa fa-chevron-down ms-1 text-xs"></i>
              </Link>
              <ul className="dropdown-modern glass-card">
                <li><Link href="/completed-projects" className="dropdown-item-modern">Completed</Link></li>
                <li><Link href="/under-process-projects" className="dropdown-item-modern">Under Progress</Link></li>
                <li><Link href="/upcoming-projects" className="dropdown-item-modern">Future</Link></li>
              </ul>
            </li>

            {/* Reports Dropdown */}
            <li className="nav-item-modern has-dropdown">
              <Link href="#" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                Reports <i className="fa fa-chevron-down ms-1 text-xs"></i>
              </Link>
              <ul className="dropdown-modern glass-card">
                <li><Link href="/audited-financials" className="dropdown-item-modern">Assessment</Link></li>
                <li><Link href="/monthly-reports" className="dropdown-item-modern">Impact</Link></li>
              </ul>
            </li>

            {/* Gallery Dropdown */}
            <li className="nav-item-modern has-dropdown">
              <Link href="#" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                Gallery <i className="fa fa-chevron-down ms-1 text-xs"></i>
              </Link>
              <ul className="dropdown-modern glass-card">
                <li><Link href="/gallery" className="dropdown-item-modern">Photos</Link></li>
                <li><Link href="/videos" className="dropdown-item-modern">Videos</Link></li>
              </ul>
            </li>

            {/* Board Members */}
            <li className="nav-item-modern">
              <Link href="/executive-members" className={`nav-link-modern ${scrolled ? "nav-link-dark" : "nav-link-white"}`}>
                Board Members
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="nav-action d-none d-xl-flex">
            <Link href="/contact" className={`btn-modern ${scrolled ? "" : "btn-modern-outline-white"}`}>
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      <style>{`
        /* ── Header base ── */
        .modern-header {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 1000;
          transition: all 0.35s cubic-bezier(.16,1,.3,1);
        }

        /* ── Transparent state (over hero) ── */
        .header-top {
          background: linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 65%, transparent 100%);
        }

        /* ── Scrolled glass state ── */
        .header-scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        /* ── Navbar layout ── */
        .navbar-modern {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.1rem 0;
          transition: padding 0.3s ease;
        }
        .header-scrolled .navbar-modern {
          padding: 0.65rem 0;
        }

        /* ── Logo ── */
        .logo-brand { text-decoration: none; }
        .logo-img {
          height: 60px;
          object-fit: contain;
          transition: height 0.3s ease;
        }
        .header-scrolled .logo-img { height: 48px; }

        /* ── Nav menu ── */
        .nav-menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 1.8rem;
          margin: 0; padding: 0;
        }
        .nav-item-modern { position: relative; }

        /* ── Nav links — WHITE (transparent header over hero) ── */
        .nav-link-white {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.97rem;
          color: rgba(255,255,255,0.92) !important;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          letter-spacing: 0.2px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.4);
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link-white:hover {
          color: var(--primary) !important;
          text-shadow: none;
        }

        /* ── Nav links — DARK (scrolled glass header) ── */
        .nav-link-dark {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.97rem;
          color: var(--foreground) !important;
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .nav-link-dark:hover {
          color: var(--primary) !important;
        }

        /* ── Underline indicator ── */
        .nav-link-modern {
          position: relative;
        }
        .nav-link-modern::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--primary);
          transition: width 0.25s ease;
          border-radius: 99px;
        }
        .nav-link-modern:hover::after { width: 100%; }

        /* ── Dropdown ── */
        .dropdown-modern {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 200px;
          list-style: none;
          padding: 0.6rem;
          margin: 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.22s ease;
          pointer-events: none;
          background: rgba(255,255,255,0.97) !important;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        .has-dropdown:hover .dropdown-modern {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .dropdown-item-modern {
          display: block;
          padding: 0.65rem 1rem;
          color: var(--foreground) !important;
          border-radius: 8px;
          font-size: 0.93rem;
          font-weight: 600;
          font-family: var(--font-heading);
          transition: all 0.18s ease;
          text-decoration: none;
        }
        .dropdown-item-modern:hover {
          background: rgba(255,144,0,0.08);
          color: var(--primary) !important;
          padding-left: 1.3rem;
        }

        /* ── Mobile toggle ── */
        .mobile-toggle {
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* ── CTA button outline white variant ── */
        .btn-modern-outline-white {
          background: rgba(255,255,255,0.12) !important;
          border: 1.5px solid rgba(255,255,255,0.7) !important;
          color: #fff !important;
          backdrop-filter: blur(10px);
          box-shadow: none !important;
        }
        .btn-modern-outline-white:hover {
          background: rgba(255,255,255,0.22) !important;
          border-color: #fff !important;
          color: #fff !important;
          transform: translateY(-2px);
        }

        .text-xs { font-size: 0.72rem; }
      `}</style>
    </>
  );
}
