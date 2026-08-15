import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for Contact Page */
        .contact-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .contact-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .contact-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .contact-desc {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        /* Info Card Items */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-info-item {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.75rem 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }

        .contact-info-item:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .contact-info-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          min-width: 50px;
        }

        .contact-info-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 0.35rem;
          color: var(--foreground);
        }

        .contact-info-text {
          color: var(--foreground-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .contact-info-link {
          color: var(--foreground);
          transition: color var(--transition-fast);
          font-weight: 600;
          text-decoration: none;
        }

        .contact-info-link:hover {
          color: var(--primary);
        }

        /* Form Card Outer Container */
        .contact-form-container {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 575px) {
          .contact-form-container {
            padding: 2rem 1.5rem;
          }
        }
      ` }} />

      <HeroCarousel />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Details */}
            <div className="wow fadeInLeft">
              <span className="contact-tag">Get In Touch</span>
              <h1 className="contact-title">We’d Love to Hear From You</h1>
              <p className="contact-desc">
                Have questions about our initiatives, want to volunteer, or discuss
                CSR opportunities? Contact us directly or fill out the form.
                Our team will get back to you as soon as possible.
              </p>

              <div className="contact-info-list">
                {/* Phone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Phone Number</h3>
                    <p className="contact-info-text">
                      <a className="contact-info-link" href="tel:+919840498166">
                        +91 98404 98166
                      </a>
                    </p>
                    <p className="contact-info-text" style={{ fontSize: "0.85rem" }}>
                      Mon - Sat, 9:00 AM to 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Email Address</h3>
                    <p className="contact-info-text">
                      <a
                        className="contact-info-link"
                        href="mailto:arisesocialwelfaretrust@gmail.com"
                      >
                        arisesocialwelfaretrust@gmail.com
                      </a>
                    </p>
                    <p className="contact-info-text" style={{ fontSize: "0.85rem" }}>
                      Write to us anytime!
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Office Location</h3>
                    <p className="contact-info-text" style={{ fontWeight: "600" }}>
                      Mangadu, Chennai, Tamil Nadu, India
                    </p>
                    <p className="contact-info-text" style={{ fontSize: "0.85rem" }}>
                      Registered Trust Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Wrapper */}
            <div className="contact-form-container wow fadeInRight" data-wow-delay="0.1s">
              <span className="contact-tag" style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
                Send a Message
              </span>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
