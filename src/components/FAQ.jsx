"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "What is ARISE Social Welfare Trust?",
    a: "ARISE Social Welfare Trust is a registered non-profit organization founded in Chennai, Tamil Nadu. We focus on community development through education, environmental care, and elder welfare — guided by our core mantra: Learn | Earn | Return.",
    icon: "fa-info-circle",
  },
  {
    q: "How can I get involved?",
    a: "You can volunteer, donate directly via NEFT/UPI, or partner with us for CSR initiatives. Simply reach out via our Contact page or email us at arisesocialwelfaretrust@gmail.com — our team will connect with you.",
    icon: "fa-users",
  },
  {
    q: "What types of programmes do you run?",
    a: "We run daily educational programmes (Vivek Vihar Tuition Centre), monthly environmental campaigns (tree planting, clean-up drives), and yearly elder care activities (health camps, festival distributions, meal programmes).",
    icon: "fa-list-ul",
  },
  {
    q: "Are you a certified and registered trust?",
    a: "Yes. ARISE Social Welfare Trust is registered and holds 80G and 12A tax certification, making all donations eligible for income tax exemption under applicable Indian tax laws. Our financials are audited annually by certified chartered accountants.",
    icon: "fa-shield",
  },
  {
    q: "How do you ensure financial transparency?",
    a: "We maintain absolute financial discipline. All income, expenses, project deployments and administrative costs are published in audited annual financial statements which are publicly available on our website.",
    icon: "fa-file-text",
  },
  {
    q: "Can my donation save tax?",
    a: "Yes! All donations to ARISE Social Welfare Trust qualify for tax deduction under Section 80G of the Income Tax Act. We are also registered under Section 12A. You will receive an official donation receipt for your records.",
    icon: "fa-certificate",
  },
  {
    q: "Who can benefit from your programmes?",
    a: "Our programmes serve underprivileged children (through education), senior citizens (through elder care), and the local community at large (through environmental campaigns) — primarily in and around Mangadu, Chennai.",
    icon: "fa-heart",
  },
  {
    q: "Can corporations partner with us for CSR?",
    a: "Absolutely! We actively welcome CSR partnerships with corporations. We can structure partnerships for educational drives, green campaigns, elder home support and more. Reach out via contact@arisesocialwelfaretrust.org for a CSR proposal.",
    icon: "fa-briefcase",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  function toggle(i) {
    setOpen(prev => (prev === i ? null : i));
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="faq-tag">Got Questions?</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-desc">
            Everything you need to know about ARISE Social Welfare Trust — our
            mission, programmes, certifications, and how you can contribute.
          </p>
        </div>

        <div className="faq-layout">
          {/* Left — accordion */}
          <div className="faq-accordion">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} open={open === i} onToggle={() => toggle(i)} />
            ))}
          </div>

          {/* Right — contact nudge card */}
          <aside className="faq-sidebar">
            <div className="faq-sidebar-card">
              <div className="faq-sb-icon">
                <i className="fa fa-comments" />
              </div>
              <h3 className="faq-sb-title">Still have questions?</h3>
              <p className="faq-sb-text">
                Can't find what you're looking for? Our team is just a message away.
              </p>
              <a href="/contact" className="faq-sb-btn">Contact Us</a>
            </div>

            <div className="faq-sidebar-card faq-sidebar-donate">
              <div className="faq-sb-icon faq-sb-icon-orange">
                <i className="fa fa-heart" />
              </div>
              <h3 className="faq-sb-title">Want to help?</h3>
              <p className="faq-sb-text">
                Your donation — big or small — directly transforms lives in Chennai.
              </p>
              <a href="/donate" className="faq-sb-btn faq-sb-btn-orange">Donate Now</a>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 6rem 0;
          background: var(--background);
        }
        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .faq-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 0.85rem;
        }
        .faq-title {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          color: var(--foreground);
          letter-spacing: -0.5px;
          margin-bottom: 0.9rem;
        }
        .faq-desc {
          color: var(--foreground-muted);
          font-size: 1.05rem;
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Layout */
        .faq-layout {
          display: grid;
          grid-template-columns: 1.5fr 0.5fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .faq-layout { grid-template-columns: 1fr; }
          .faq-sidebar { display: flex; gap: 1.5rem; }
        }
        @media (max-width: 580px) {
          .faq-sidebar { flex-direction: column; }
        }

        /* Accordion */
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        /* Sidebar */
        .faq-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 100px;
        }
        .faq-sidebar-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          box-shadow: var(--shadow-sm);
          text-align: center;
        }
        .faq-sb-icon {
          width: 54px; height: 54px;
          border-radius: 14px;
          background: rgba(99,102,241,0.1);
          color: #6366f1;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.35rem;
          margin: 0 auto 1rem;
        }
        .faq-sb-icon-orange {
          background: rgba(255,144,0,0.1);
          color: var(--primary);
        }
        .faq-sb-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }
        .faq-sb-text {
          font-size: 0.88rem;
          color: var(--foreground-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .faq-sb-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 100%;
          padding: 0.7rem 1.2rem;
          background: #6366f1;
          color: #fff;
          font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem;
          border-radius: 99px;
          text-decoration: none;
          transition: all 0.25s ease;
        }
        .faq-sb-btn:hover { background: #4f46e5; transform: translateY(-2px); color: #fff; }
        .faq-sb-btn-orange {
          background: linear-gradient(135deg, var(--primary), #e07800);
          box-shadow: 0 6px 20px rgba(255,120,0,0.3);
        }
        .faq-sb-btn-orange:hover { background: linear-gradient(135deg, #e07800, var(--primary)); transform: translateY(-2px); color: #fff; }
      `}</style>
    </section>
  );
}

function FAQItem({ faq, index, open, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(open ? bodyRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div className={`faq-item ${open ? "faq-item-open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span className="faq-q-icon">
          <i className={`fa ${faq.icon}`} />
        </span>
        <span className="faq-q-text">{faq.q}</span>
        <span className={`faq-chevron ${open ? "faq-chevron-open" : ""}`}>
          <i className="fa fa-chevron-down" />
        </span>
      </button>
      <div
        className="faq-answer-wrap"
        style={{ height: `${height}px` }}
        aria-hidden={!open}
      >
        <div ref={bodyRef} className="faq-answer">
          {faq.a}
        </div>
      </div>

      <style>{`
        .faq-item {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .faq-item-open {
          border-color: var(--primary);
          box-shadow: 0 8px 28px rgba(255,144,0,0.12);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }
        .faq-item-open .faq-question {
          background: rgba(255,144,0,0.04);
        }

        .faq-q-icon {
          width: 36px; height: 36px; min-width: 36px;
          border-radius: 10px;
          background: rgba(255,144,0,0.08);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem;
          transition: background 0.25s ease;
        }
        .faq-item-open .faq-q-icon {
          background: var(--primary);
          color: #fff;
        }

        .faq-q-text {
          flex: 1;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1rem;
          color: var(--foreground);
          line-height: 1.4;
        }

        .faq-chevron {
          color: var(--foreground-muted);
          font-size: 0.8rem;
          transition: transform 0.35s cubic-bezier(.16,1,.3,1);
          min-width: 20px;
          display: flex; align-items: center; justify-content: center;
        }
        .faq-chevron-open {
          transform: rotate(180deg);
          color: var(--primary);
        }

        .faq-answer-wrap {
          overflow: hidden;
          transition: height 0.38s cubic-bezier(.16,1,.3,1);
        }
        .faq-answer {
          padding: 0 1.5rem 1.4rem 4.1rem;
          font-size: 0.97rem;
          color: var(--foreground-muted);
          line-height: 1.72;
        }
      `}</style>
    </div>
  );
}
