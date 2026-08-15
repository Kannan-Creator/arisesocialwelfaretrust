"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`modern-header ${scrolled ? "scrolled glass" : ""}`}>
      {/* Topbar - Sleek and Minimal */}
      <div className={`topbar-modern ${scrolled ? "d-none" : "d-flex"}`}>
        <div className="container-modern d-flex justify-content-between align-items-center py-2">
          <div className="contact-info d-flex gap-4">
            <Link href="tel:+919840498166" className="text-sm d-flex align-items-center gap-2">
              <i className="fa fa-phone text-primary-modern"></i>
              <span>+91 98404 98166</span>
            </Link>
            <Link href="mailto:arisesocialwelfaretrust@gmail.com" className="text-sm d-flex align-items-center gap-2 d-none d-md-flex">
              <i className="fa fa-envelope text-primary-modern"></i>
              <span>arisesocialwelfaretrust@gmail.com</span>
            </Link>
          </div>
          <div className="social-links d-flex gap-3">
            <Link href="https://www.instagram.com/arise.trust" target="_blank"><i className="fa fa-instagram"></i></Link>
            <Link href="https://youtube.com/@ariseswt" target="_blank"><i className="fa fa-youtube"></i></Link>
            <Link href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></Link>
          </div>
        </div>
      </div>

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
          <i className="fa fa-bars text-primary-modern"></i>
        </button>

        {/* Desktop Menu */}
        <ul className="nav-menu d-none d-xl-flex">
          <li className="nav-item-modern">
            <Link href="/" className="nav-link-modern">Home</Link>
          </li>
          
          <li className="nav-item-modern has-dropdown">
            <Link href="#" className="nav-link-modern">About Us <i className="fa fa-chevron-down ms-1 text-xs"></i></Link>
            <ul className="dropdown-modern glass-card">
              <li><Link href="/about" className="dropdown-item-modern">Who We Are</Link></li>
              <li><Link href="/donate" className="dropdown-item-modern">Support Us</Link></li>
            </ul>
          </li>

          <li className="nav-item-modern has-dropdown">
            <Link href="#" className="nav-link-modern">Activities <i className="fa fa-chevron-down ms-1 text-xs"></i></Link>
            <ul className="dropdown-modern glass-card">
              <li><Link href="/our-daily-activities" className="dropdown-item-modern">Educational</Link></li>
              <li><Link href="/our-monthly-activities" className="dropdown-item-modern">Environment</Link></li>
              <li><Link href="/our-yearly-activities" className="dropdown-item-modern">Old Age Home</Link></li>
            </ul>
          </li>

          <li className="nav-item-modern has-dropdown">
            <Link href="#" className="nav-link-modern">Projects <i className="fa fa-chevron-down ms-1 text-xs"></i></Link>
            <ul className="dropdown-modern glass-card">
              <li><Link href="/completed-projects" className="dropdown-item-modern">Completed</Link></li>
              <li><Link href="/under-process-projects" className="dropdown-item-modern">Under Progress</Link></li>
              <li><Link href="/upcoming-projects" className="dropdown-item-modern">Future</Link></li>
            </ul>
          </li>

          <li className="nav-item-modern has-dropdown">
            <Link href="#" className="nav-link-modern">Reports <i className="fa fa-chevron-down ms-1 text-xs"></i></Link>
            <ul className="dropdown-modern glass-card">
              <li><Link href="/audited-financials" className="dropdown-item-modern">Assessment</Link></li>
              <li><Link href="/monthly-reports" className="dropdown-item-modern">Impact</Link></li>
            </ul>
          </li>

          <li className="nav-item-modern has-dropdown">
            <Link href="#" className="nav-link-modern">Gallery <i className="fa fa-chevron-down ms-1 text-xs"></i></Link>
            <ul className="dropdown-modern glass-card">
              <li><Link href="/gallery" className="dropdown-item-modern">Photos</Link></li>
              <li><Link href="/videos" className="dropdown-item-modern">Videos</Link></li>
            </ul>
          </li>

          <li className="nav-item-modern">
            <Link href="/executive-members" className="nav-link-modern">Board Members</Link>
          </li>
        </ul>

        {/* Action Button */}
        <div className="nav-action d-none d-xl-flex">
          <Link href="/contact" className="btn-modern">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
