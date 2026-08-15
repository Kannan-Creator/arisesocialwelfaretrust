import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Styles for Donate/Support Us Page */
        .donate-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 5rem 0;
          font-family: var(--font-sans);
        }

        .donate-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .donate-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 991px) {
          .donate-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .donate-tag {
          display: inline-block;
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }

        .donate-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .donate-desc {
          font-size: 1.05rem;
          color: var(--foreground-muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* Certificate / Tax Exemption Card */
        .donate-cert-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          margin-bottom: 2.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .donate-cert-icon {
          font-size: 2.5rem;
          color: var(--primary);
          margin-top: 0.25rem;
        }

        .donate-cert-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .donate-cert-text {
          font-size: 0.95rem;
          color: var(--foreground-muted);
          line-height: 1.6;
        }

        /* Monospace Copy Box for Bank Info */
        .bank-info-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 2.5rem 2rem;
          box-shadow: var(--shadow-sm);
        }

        .bank-info-header {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .bank-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bank-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background: var(--background);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          font-size: 0.95rem;
        }

        .bank-label {
          font-weight: 600;
          color: var(--foreground-muted);
        }

        .bank-value {
          font-family: monospace;
          font-weight: 700;
          color: var(--foreground);
          font-size: 1.05rem;
        }

        /* Smartphone QR Code Mockup */
        .phone-mockup-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 3rem 2rem;
          box-shadow: var(--shadow-md);
          text-align: center;
          position: sticky;
          top: 100px;
        }

        .phone-frame {
          border: 12px solid #0f172a;
          border-radius: 36px;
          display: inline-block;
          background: #ffffff;
          box-shadow: var(--shadow-lg);
          padding: 1.5rem;
          max-width: 290px;
          width: 100%;
          margin: 0 auto 2rem;
        }

        .phone-qr-img {
          width: 100%;
          border-radius: var(--radius-md);
          display: block;
        }

        .phone-instructions {
          text-align: left;
          padding: 0 1rem;
        }

        .phone-instructions-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .phone-step {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          font-size: 0.95rem;
          color: var(--foreground-muted);
          margin-bottom: 0.75rem;
        }

        .phone-step-num {
          background: var(--primary);
          color: #ffffff;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          min-width: 22px;
          margin-top: 0.15rem;
        }
      ` }} />

      <HeroCarousel />

      <section className="donate-section">
        <div className="donate-container">
          <div className="donate-grid">
            {/* Info & Bank Details */}
            <div className="wow fadeInLeft">
              <span className="donate-tag">Support Our Cause</span>
              <h1 className="donate-title">Make a Difference Today</h1>
              <p className="donate-desc">
                Donations play a vital role in supporting the daily, monthly, and
                yearly activities of our trust. Your generous contribution helps us
                continue our work in social welfare, education, environmental care,
                and elderly support. Every contribution directly creates hope.
              </p>

              {/* Exemption Credentials */}
              <div className="donate-cert-card">
                <div className="donate-cert-icon">
                  <i className="fa fa-certificate"></i>
                </div>
                <div>
                  <h3 className="donate-cert-title">Tax Exemption Qualified</h3>
                  <p className="donate-cert-text">
                    All donations made to Arise Social Welfare Trust qualify for tax
                    exemption under applicable laws. The Arise Social Welfare Trust (R)
                    is <strong>80G &amp; 12A Certified</strong>, guaranteeing
                    legitimate operations and transparent funds channeling.
                  </p>
                </div>
              </div>

              {/* Bank Details copy box */}
              <div className="bank-info-card">
                <h3 className="bank-info-header">Direct Bank Transfer (NEFT/IMPS)</h3>
                <div className="bank-details-list">
                  <div className="bank-row">
                    <span className="bank-label">Account Name</span>
                    <span className="bank-value">ARISE SOCIAL WELFARE TRUST</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">Account Number</span>
                    <span className="bank-value">05760100039853</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">Account Type</span>
                    <span className="bank-value">Current Account (CA)</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">IFSC Code</span>
                    <span className="bank-value">BARB0MANGAD</span>
                  </div>
                  <div className="bank-row">
                    <span className="bank-label">Bank Branch</span>
                    <span className="bank-value">Mangadu (Bank of Baroda)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan and Donate Phone Mockup */}
            <div className="phone-mockup-card wow fadeInRight" data-wow-delay="0.1s">
              <span className="donate-tag" style={{ fontSize: "0.8rem" }}>Instant UPI Transfer</span>
              <h2 className="phone-instructions-title" style={{ fontSize: "1.4rem", marginTop: "0.5rem" }}>
                Scan to Donate
              </h2>
              <div className="phone-frame">
                <img
                  alt="UPI QR Code - Scan to Donate"
                  className="phone-qr-img"
                  src="/storage/files/root143/img-20260120-wa0010.jpg"
                />
              </div>
              <div className="phone-instructions">
                <div className="phone-step">
                  <span className="phone-step-num">1</span>
                  <span>Open your preferred UPI payment app (GPay, PhonePe, Paytm, BHIM).</span>
                </div>
                <div className="phone-step">
                  <span className="phone-step-num">2</span>
                  <span>Select the "Scan QR" option and point your camera to this QR code.</span>
                </div>
                <div className="phone-step">
                  <span className="phone-step-num">3</span>
                  <span>Enter the donation amount and approve the transfer securely.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
