"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="container-fluid footer bg-dark text-body py-5">
      {" "}
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <img
              alt="Arise SWT"
              className="img-fluid me-3 my-3"
              src="/storage/files/root143/site_logo14354008.png"
            />
            <h3 className="text-white mb-4">Arise SWT</h3>
            <p></p>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Quick Links</h4>
              <ul className="row row-cols-1 row-cols-md-2 list-unstyled">
                <li className="col">
                  <Link className="btn-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="col">
                  <Link className="btn-link" href="/">
                    About Us
                  </Link>
                </li>
                <li className="col">
                  <Link className="btn-link" href="/">
                    Activities
                  </Link>
                </li>
                <li className="col">
                  <Link className="btn-link" href="/completed-projects">
                    Projects
                  </Link>
                </li>
                <li className="col">
                  <Link className="btn-link" href="/">
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
                </li>{" "}
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="mb-4 text-white">Social Links</h4>
            <div className="d-flex pt-2">
              <Link
                className="btn-hover-color btn-square text-white me-2 mb-2"
                href="https://www.instagram.com/arise.trust?igsh=NHpzMHY1bnJ0YnV2"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                className="btn-hover-color btn-square text-white me-2 mb-2"
                href="https://youtube.com/@ariseswt?si=iP5jdedEA1Wc5Gse"
              >
                <i className="fa fa-youtube"></i>
              </Link>
              <Link
                className="btn-hover-color btn-square text-white me-2 mb-2"
                href="https://www.linkedin.com/in/arise-swt-262284389?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                className="btn-hover-color btn-square text-white me-2 mb-2"
                href="https://www.facebook.com/share/1DZaVrbywR/"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                className="btn-hover-color btn-square text-white me-2 mb-2"
                href="https://whatsapp.com/channel/0029VbAY01k002TI4CCwhf2D"
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
              <span>+919840498166/+917395936354</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="btn-square bg-dark flex-shrink-0 me-3">
                <span className="fa fa-envelope-open text-white"></span>
              </div>
              <span>
                <Link
                  className="__cf_email__"
                  data-cfemail="c5a4b7acb6a0b1b7b0b6b1f7f1fcfc85a2a8a4aca9eba6aaa8"
                  href="cdn-cgi/l/email-protection.html"
                >
                  [email protected]
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-md-6 text-md-start">
              © <Link href="/">arisesocialwelfaretrust.org</Link>, All Right
              Reserved.
            </div>
            <div className="col-md-6 text-md-end">
              Powered by{" "}
              <Link href="https://publease.com/" target="_blank">
                Publease.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
