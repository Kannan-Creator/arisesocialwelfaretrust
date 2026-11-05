"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .modern-footer {
          background: #0f172a;
          color: #94a3b8;
          font-family: var(--font-sans, "Inter", sans-serif);
        }

        .footer-copyright-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.25);
          padding: 1.6rem 1rem;
          text-align: center;
        }

        .copyright-text {
          font-size: 0.95rem;
          color: #94a3b8;
          margin: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          flex-wrap: wrap;
        }

        .copyright-link {
          color: #f1f5f9;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .copyright-link:hover {
          color: var(--primary, #ff9000);
          text-decoration: underline;
        }

        .copyright-tagline {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.4rem;
          letter-spacing: 0.5px;
        }
      ` }}
      />

      <div className="container-fluid footer bg-dark text-body py-5 modern-footer">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <img
                alt="Arise SWT"
                className="img-fluid me-3 my-3"
                src="/storage/files/root143/site_logo14354008.png"
              />
              <h3 className="text-white mb-4">Arise SWT</h3>
              <p className="text-secondary small">
                Empowering communities through education, environment care, and elder support. Learn · Earn · Return.
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Quick Links</h4>
                <ul className="row row-cols-1 row-cols-md-2 list-unstyled g-2">
                  <li className="col">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/our-daily-activities">
                      Activities
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/completed-projects">
                      Projects
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/monthly-reports">
                      Reports
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/executive-members">
                      Board Members
                    </Link>
                  </li>
                  <li className="col">
                    <Link className="btn-link" href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="mb-4 text-white">Social Links</h4>
              <div className="d-flex pt-2 flex-wrap">
                <Link
                  className="btn-hover-color btn-square text-white me-2 mb-2"
                  href="https://www.instagram.com/arise.trust?igsh=NHpzMHY1bnJ0YnV2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link
                  className="btn-hover-color btn-square text-white me-2 mb-2"
                  href="https://youtube.com/@ariseswt?si=iP5jdedEA1Wc5Gse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa fa-youtube"></i>
                </Link>
                <Link
                  className="btn-hover-color btn-square text-white me-2 mb-2"
                  href="https://www.linkedin.com/in/arise-swt-262284389?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa fa-linkedin"></i>
                </Link>
                <Link
                  className="btn-hover-color btn-square text-white me-2 mb-2"
                  href="https://www.facebook.com/share/1DZaVrbywR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link
                  className="btn-hover-color btn-square text-white me-2 mb-2"
                  href="https://whatsapp.com/channel/0029VbAY01k002TI4CCwhf2D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="fa fa-whatsapp"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="mb-4 text-white">Get In Touch</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-map-marker text-white"></span>
                </div>
                <span>
                  27BF Rasinagar 3rdStreet, Kathirvedu, Tiruvallur district -
                  600066
                </span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-phone text-white"></span>
                </div>
                <span>+919840498166 / +917395936354</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-envelope-open text-white"></span>
                </div>
                <span>
                  <a
                    href="mailto:arisesocialwelfaretrust@gmail.com"
                    className="text-body text-decoration-none"
                    style={{ color: "inherit" }}
                  >
                    arisesocialwelfaretrust@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Modern Centered Copyright Bar ── */}
        <div className="container-fluid footer-copyright-bar">
          <div className="container">
            <p className="copyright-text">
              <span>©</span>
              <Link href="/" className="copyright-link">
                arisesocialwelfaretrust.org
              </Link>
              <span>, All Right Reserved.</span>
            </p>
            <span className="copyright-tagline">
              Registered 80G & 12A Certified Public Charitable Trust • Chennai, Tamil Nadu
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
