"use client";

import React, { useState, useEffect, useRef } from "react";
import HeroCarousel from "@/components/HeroCarousel";

const MEMBERS = [
  {
    id: 1,
    name: "Pitchamani.R",
    role: "Founder & CEO",
    years: "Since Inception",
    image: "/storage/files/root143/pichai-murthi.jpeg",
    category: "leadership",
    quote: "Arise is built on the belief that simple acts of care can ignite sustainable change in society.",
    bio: "I started Arise Social Welfare Trust with a clear vision: to empower the underprivileged and build a community where everyone has access to basic rights, education, and healthcare. Every member of our team brings a heartbeat of compassion.",
    qa: [
      {
        question: "What inspired you to start Arise Social Welfare Trust?",
        answer: "Seeing the daily challenges of families in underserved communities. I felt a deep responsibility to bridge the gap and create a structured platform where we can channel resources and direct effort transparently."
      },
      {
        question: "What is the most rewarding part of this journey?",
        answer: "Watching a child receive quality education or a family gain access to clean water and healthcare. Those smiles make every challenge we face completely worth it."
      }
    ],
    socials: {
      email: "pitchamani.r@ariseswt.org"
    }
  },
  {
    id: 2,
    name: "Nivas.G",
    role: "Executive Secretary",
    years: "5+ Years",
    image: "/storage/files/root143/whatsapp-image-2026-01-14-at-54834-pm.jpeg",
    category: "leadership",
    quote: "Operations are the backbone of trust; our mission is to ensure help reaches the right hands at the right time.",
    bio: "As the Executive Secretary, I coordinate our daily activities and bridge the gap between volunteers, trust board members, and the communities we serve. Transparency and prompt response are what we strive for.",
    qa: [
      {
        question: "How do you keep the operations smooth?",
        answer: "We have a dedicated group of volunteers and a transparent communication channel. We review project updates daily and plan logistics carefully."
      },
      {
        question: "What drives you to continue this work?",
        answer: "The absolute dedication of our volunteers and the trust placed in us by our donors. It keeps us accountable and motivated."
      }
    ],
    socials: {
      email: "nivas.g@ariseswt.org"
    }
  },
  {
    id: 3,
    name: "Manivannan.P",
    role: "Executive Treasurer",
    years: "5+ Years",
    image: "/storage/files/root143/whatsapp-image-2026-01-14-at-54815-pm.jpeg",
    category: "leadership",
    quote: "Financial integrity is the foundation of public trust. We make sure every single rupee is accounted for.",
    bio: "Managing the finances of a non-profit trust requires diligence and accuracy. I ensure all donations are utilized directly for our core projects, including educational sponsorships and health camps.",
    qa: [
      {
        question: "How do you ensure financial transparency?",
        answer: "We publish our audited financials regularly and maintain digital records for all incoming donations and outgoing project expenses. Every donor knows exactly where their contribution went."
      },
      {
        question: "What is your long-term vision?",
        answer: "To build a highly sustainable fund that guarantees continuous support for children's education and elder care homes."
      }
    ],
    socials: {
      email: "manivannan.p@ariseswt.org"
    }
  },
  {
    id: 4,
    name: "Illenchezhian.B",
    role: "Executive Committee",
    years: "4+ Years",
    image: "/storage/files/root143/whatsapp-image-2026-01-14-at-81309-pm_1.jpeg",
    category: "committee",
    quote: "Community engagement is not just a project; it's a commitment to listen, learn, and grow together.",
    bio: "I focus on community outreach, organizing local awareness camps and identifying regions that require urgent intervention. Engaging directly with people helps us tailor our programs effectively.",
    qa: [
      {
        question: "What is your approach to community building?",
        answer: "We build trust by listening to local community leaders first. We don't just supply aid; we work with them to implement lasting solutions."
      },
      {
        question: "What projects are closest to your heart?",
        answer: "Our education outreach programs. Empowering youth with skills and opportunities changes the trajectory of entire families."
      }
    ],
    socials: {
      email: "illenchezhian.b@ariseswt.org"
    }
  },
  {
    id: 5,
    name: "Nagarajan.P",
    role: "Executive Committee",
    years: "4+ Years",
    image: "/storage/files/root143/whatsapp-image-2026-01-14-at-54845-pm_1.jpeg",
    category: "committee",
    quote: "Collaborations multiply our impact. When we join hands, we can solve problems that seem impossible alone.",
    bio: "As a committee member, I work closely with external partners, corporate sponsors, and other NGOs to expand Arise's reach and scale our daily welfare programs.",
    qa: [
      {
        question: "How do external partnerships benefit Arise?",
        answer: "They provide us with scale. Whether it's medical equipment for our health drives or digital learning tools for schools, partners bring expertise and resources."
      },
      {
        question: "What is the secret to a successful NGO partnership?",
        answer: "Shared values and complete transparency in operations and reporting."
      }
    ],
    socials: {
      email: "nagarajan.p@ariseswt.org"
    }
  },
  {
    id: 6,
    name: "Karanrajan SV",
    role: "Executive Member",
    years: "3+ Years",
    image: "/storage/files/root143/karanrajan.jpeg",
    category: "member",
    quote: "Service is showing up every single day with energy, empathy, and a willingness to help.",
    bio: "I am actively involved in organizing grassroot welfare drives, distributing food kits, and coordinating our monthly medical checkups in local neighborhoods.",
    qa: [
      {
        question: "What does a typical day look like during welfare drives?",
        answer: "Early mornings packing kits, coordinating with transport, setting up distribution booths, and ensuring safety and comfort for the elders and families visiting us."
      },
      {
        question: "Why did you join Arise?",
        answer: "I was inspired by the direct and transparent impact Pitchamani and the team were making. I wanted to be on the ground, actively making a difference."
      }
    ],
    socials: {
      email: "karanrajan.sv@ariseswt.org"
    }
  },
  {
    id: 7,
    name: "Kannan N",
    role: "Executive Member",
    years: "3+ Years",
    image: "/storage/files/root143/img-20260120-141357.png",
    category: "member",
    quote: "Empowering the youth today creates the leaders who will rebuild our society tomorrow.",
    bio: "My work centers around our youth development programs and volunteer coordination. I help recruit and guide the young energy that fuels our weekly drives.",
    qa: [
      {
        question: "How do you keep volunteers motivated?",
        answer: "By ensuring they see the direct impact of their work. When they see a child smile after receiving textbooks, they don't need any other motivation."
      },
      {
        question: "What is your advice to young citizens?",
        answer: "Start small. Even spending two hours a week volunteering can significantly uplift someone's life."
      }
    ],
    socials: {
      email: "kannan.n@ariseswt.org"
    }
  },
  {
    id: 8,
    name: "Vigneshwaran S",
    role: "Executive Member",
    years: "3+ Years",
    image: "/storage/files/root143/img-20260126-wa0006.jpg",
    category: "member",
    quote: "Telling our stories brings the world closer to our cause and sparks hope.",
    bio: "I handle Arise's digital communications, photography, and project updates. Bringing visibility to our stories helps us connect with global supporters and donors.",
    qa: [
      {
        question: "Why is storytelling important for Arise?",
        answer: "It connects human hearts. Behind every donation or volunteer is a story of trust, and behind every recipient is a story of hope. Sharing these builds a stronger community."
      },
      {
        question: "What is your favorite memory?",
        answer: "Capturing the expression of children during our annual day celebration when they received special awards and recognition."
      }
    ],
    socials: {
      email: "vigneshwaran.s@ariseswt.org"
    }
  }
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [layoutView, setLayoutView] = useState("grid"); // "grid" or "list"
  const [activeMemberId, setActiveMemberId] = useState(null);

  const activeMember = MEMBERS.find((m) => m.id === activeMemberId);

  // Close modal with Escape key, navigate with Left/Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeMemberId === null) return;
      if (e.key === "Escape") {
        setActiveMemberId(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMemberId]);

  // Handle locking scroll when modal is open
  useEffect(() => {
    if (activeMemberId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMemberId]);

  // Find active member list index based on CURRENT filtered array
  const getFilteredMembers = () => {
    return MEMBERS.filter((m) => {
      const matchesCategory =
        selectedCategory === "all" || m.category === selectedCategory;
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filteredMembers = getFilteredMembers();

  const handlePrev = () => {
    if (filteredMembers.length <= 1) return;
    const currentIndex = filteredMembers.findIndex((m) => m.id === activeMemberId);
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) nextIndex = filteredMembers.length - 1;
    setActiveMemberId(filteredMembers[nextIndex].id);
  };

  const handleNext = () => {
    if (filteredMembers.length <= 1) return;
    const currentIndex = filteredMembers.findIndex((m) => m.id === activeMemberId);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= filteredMembers.length) nextIndex = 0;
    setActiveMemberId(filteredMembers[nextIndex].id);
  };

  return (
    <>
      <style jsx global>{`
        /* Scoped Premium Styling for Humans of Arise Page */
        .hoz-section {
          background-color: var(--background);
          color: var(--foreground);
          padding: 4.5rem 0;
          font-family: var(--font-sans);
        }

        .hoz-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .hoz-header-area {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .hoz-pre-title {
          font-family: var(--font-heading);
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          display: inline-block;
        }

        .hoz-main-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 1.2rem;
          letter-spacing: -0.5px;
        }

        .hoz-subtitle {
          color: var(--foreground-muted);
          font-size: clamp(1rem, 1.2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filter Toolbar Styles */
        .hoz-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          padding: 1rem 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          margin-bottom: 3rem;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hoz-search-wrapper {
          position: relative;
          flex: 1;
          min-width: 250px;
          max-width: 400px;
        }

        .hoz-search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.75rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border);
          background: var(--background);
          color: var(--foreground);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          outline: none;
        }

        .hoz-search-input:focus {
          border-color: var(--primary);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(255, 144, 0, 0.12);
        }

        .hoz-search-icon {
          position: absolute;
          left: 1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--foreground-muted);
          font-size: 1rem;
          pointer-events: none;
        }

        .hoz-filter-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .hoz-pill-btn {
          border: none;
          background: transparent;
          color: var(--foreground-muted);
          padding: 0.6rem 1.2rem;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .hoz-pill-btn:hover {
          color: var(--primary);
          background: rgba(255, 144, 0, 0.05);
        }

        .hoz-pill-btn.active {
          background: var(--primary);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(255, 144, 0, 0.25);
        }

        .hoz-view-toggle {
          display: flex;
          background: var(--background);
          padding: 0.25rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--border);
        }

        .hoz-toggle-btn {
          border: none;
          background: transparent;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--foreground-muted);
          transition: all var(--transition-fast);
          font-size: 1.05rem;
        }

        .hoz-toggle-btn:hover {
          color: var(--primary);
        }

        .hoz-toggle-btn.active {
          background: #ffffff;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        /* Grid View Layout */
        .hoz-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .hoz-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .hoz-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform var(--transition-normal);
        }

        .hoz-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }

        .hoz-card:hover::after {
          transform: scaleX(1);
        }

        .hoz-card-img-wrapper {
          position: relative;
          width: 100%;
          padding-top: 110%; /* 4:5 Portrait Aspect Ratio */
          overflow: hidden;
          background-color: #f0f0f0;
        }

        .hoz-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hoz-card:hover .hoz-card-img {
          transform: scale(1.06);
        }

        .hoz-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .hoz-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .hoz-badge {
          background: rgba(255, 144, 0, 0.08);
          color: var(--primary);
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-pill);
          letter-spacing: 0.5px;
        }

        .hoz-card-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.35rem;
          transition: color var(--transition-fast);
        }

        .hoz-card:hover .hoz-card-name {
          color: var(--primary);
        }

        .hoz-card-role {
          color: var(--foreground-muted);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .hoz-card-quote {
          font-size: 0.9rem;
          color: var(--foreground-muted);
          font-style: italic;
          line-height: 1.5;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px dashed var(--border);
        }

        /* List View Layout */
        .hoz-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .hoz-list-card {
          display: flex;
          background: #ffffff;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
          cursor: pointer;
        }

        .hoz-list-card:hover {
          transform: translateX(6px);
          box-shadow: var(--shadow-md);
        }

        .hoz-list-img-wrapper {
          width: 250px;
          min-width: 250px;
          position: relative;
          overflow: hidden;
          background-color: #f0f0f0;
        }

        @media (max-width: 650px) {
          .hoz-list-card {
            flex-direction: column;
          }
          .hoz-list-img-wrapper {
            width: 100%;
            height: 280px;
          }
        }

        .hoz-list-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 1;
        }

        .hoz-list-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        /* Empty State */
        .hoz-empty {
          text-align: center;
          padding: 5rem 0;
          background: #ffffff;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }

        .hoz-empty-icon {
          font-size: 3rem;
          color: var(--foreground-muted);
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .hoz-empty h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        /* Detail Modal Styles */
        .hoz-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: hozFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hoz-modal-window {
          background: #ffffff;
          width: 100%;
          max-width: 950px;
          height: 90vh;
          max-height: 720px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          position: relative;
          animation: hozSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hoz-modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--foreground);
          z-index: 100;
          font-size: 1.2rem;
          transition: all var(--transition-fast);
          box-shadow: var(--shadow-sm);
        }

        .hoz-modal-close-btn:hover {
          color: #ffffff;
          background: var(--primary);
          border-color: var(--primary);
          transform: rotate(90deg);
        }

        .hoz-modal-body {
          display: flex;
          height: calc(100% - 70px);
          overflow: hidden;
        }

        .hoz-modal-img-col {
          width: 38%;
          min-width: 38%;
          position: relative;
          background-color: #0f172a;
        }

        .hoz-modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hoz-modal-info-col {
          width: 62%;
          padding: 3rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }

        .hoz-modal-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 1.5rem;
        }

        .hoz-modal-role {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hoz-modal-name {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .hoz-modal-years {
          color: var(--foreground-muted);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .hoz-modal-quote-box {
          position: relative;
          padding: 1.5rem 1.5rem 1.5rem 2.5rem;
          border-left: 4px solid var(--primary);
          background: rgba(255, 144, 0, 0.03);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 0.5rem;
        }

        .hoz-modal-quote-box::before {
          content: "“";
          position: absolute;
          left: 0.8rem;
          top: 0.5rem;
          font-size: 4rem;
          color: rgba(255, 144, 0, 0.15);
          font-family: serif;
          line-height: 1;
        }

        .hoz-modal-quote-text {
          font-size: 1.15rem;
          font-style: italic;
          line-height: 1.6;
          color: var(--foreground);
        }

        .hoz-modal-bio-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hoz-modal-bio-title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .hoz-modal-bio-text {
          color: var(--foreground-muted);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .hoz-modal-qa-item {
          border-bottom: 1px dashed var(--border);
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .hoz-modal-qa-item:last-child {
          border: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .hoz-modal-question {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .hoz-modal-answer {
          color: var(--foreground-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Modal bottom control bar (Navigation Slider) */
        .hoz-modal-footer-nav {
          height: 70px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          background: #ffffff;
          z-index: 10;
        }

        .hoz-nav-arrow-btn {
          border: none;
          background: transparent;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--foreground);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-pill);
        }

        .hoz-nav-arrow-btn:hover {
          color: var(--primary);
          background: rgba(255, 144, 0, 0.05);
        }

        .hoz-nav-indicator {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--foreground-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 850px) {
          .hoz-modal-window {
            height: 95vh;
            max-height: none;
          }
          .hoz-modal-body {
            flex-direction: column;
            overflow-y: auto;
          }
          .hoz-modal-img-col {
            width: 100%;
            height: 300px;
            min-height: 300px;
          }
          .hoz-modal-info-col {
            width: 100%;
            padding: 2rem;
            overflow-y: visible;
          }
        }

        /* Keyframes */
        @keyframes hozFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes hozSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <HeroCarousel />

      <section className="hoz-section">
        <div className="hoz-container">
          {/* Header */}
          <div className="hoz-header-area wow fadeInUp" data-wow-delay="0.1s">
            <span className="hoz-pre-title">Meet the Team</span>
            <h1 className="hoz-main-title">Executive Members</h1>
            <p className="hoz-subtitle">
              An insider’s perspective into the lives of the people who built the
              very foundation of our trust and coordinate our daily welfare drives.
            </p>
          </div>

          {/* Search, filters and views toolbar */}
          <div className="hoz-toolbar wow fadeInUp" data-wow-delay="0.2s">
            {/* Search Input */}
            <div className="hoz-search-wrapper">
              <i className="fa fa-search hoz-search-icon"></i>
              <input
                className="hoz-search-input"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or role..."
                type="text"
                value={searchQuery}
              />
            </div>

            {/* Category pills */}
            <div className="hoz-filter-pills">
              <button
                className={`hoz-pill-btn ${
                  selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                All Stories
              </button>
              <button
                className={`hoz-pill-btn ${
                  selectedCategory === "leadership" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("leadership")}
              >
                Leadership
              </button>
              <button
                className={`hoz-pill-btn ${
                  selectedCategory === "committee" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("committee")}
              >
                Committee
              </button>
              <button
                className={`hoz-pill-btn ${
                  selectedCategory === "member" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("member")}
              >
                Members
              </button>
            </div>

            {/* Grid/List layout toggle */}
            <div className="hoz-view-toggle">
              <button
                className={`hoz-toggle-btn ${
                  layoutView === "grid" ? "active" : ""
                }`}
                onClick={() => setLayoutView("grid")}
                title="Grid View"
              >
                <i className="fa fa-th-large"></i>
              </button>
              <button
                className={`hoz-toggle-btn ${
                  layoutView === "list" ? "active" : ""
                }`}
                onClick={() => setLayoutView("list")}
                title="List View"
              >
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Members List/Grid container */}
          {filteredMembers.length > 0 ? (
            <div
              className={layoutView === "grid" ? "hoz-grid" : "hoz-list"}
            >
              {filteredMembers.map((member, idx) => {
                const delay = `${(idx % 3) * 0.1}s`;
                return layoutView === "grid" ? (
                  // Grid Card Render
                  <div
                    className="hoz-card wow fadeInUp"
                    data-wow-delay={delay}
                    key={member.id}
                    onClick={() => setActiveMemberId(member.id)}
                  >
                    <div className="hoz-card-img-wrapper">
                      <img
                        alt={member.name}
                        className="hoz-card-img"
                        loading="lazy"
                        src={member.image}
                      />
                    </div>
                    <div className="hoz-card-content">
                      <div className="hoz-card-meta">
                        <span className="hoz-badge">{member.years}</span>
                      </div>
                      <h3 className="hoz-card-name">{member.name}</h3>
                      <p className="hoz-card-role">{member.role}</p>
                      <p className="hoz-card-quote">"{member.quote}"</p>
                    </div>
                  </div>
                ) : (
                  // List Card Render
                  <div
                    className="hoz-list-card wow fadeInUp"
                    data-wow-delay={delay}
                    key={member.id}
                    onClick={() => setActiveMemberId(member.id)}
                  >
                    <div className="hoz-list-img-wrapper">
                      <img
                        alt={member.name}
                        className="hoz-card-img"
                        loading="lazy"
                        src={member.image}
                      />
                    </div>
                    <div className="hoz-list-content">
                      <div className="hoz-list-meta">
                        <span className="hoz-badge">{member.years}</span>
                      </div>
                      <h3 className="hoz-card-name" style={{ fontSize: "1.45rem" }}>
                        {member.name}
                      </h3>
                      <p className="hoz-card-role" style={{ marginBottom: "1rem" }}>
                        {member.role}
                      </p>
                      <p
                        className="hoz-modal-quote-text"
                        style={{
                          fontSize: "1rem",
                          borderLeft: "3px solid var(--primary)",
                          paddingLeft: "1rem",
                          color: "var(--foreground-muted)",
                          marginBottom: "0",
                        }}
                      >
                        "{member.quote}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="hoz-empty wow fadeInUp" data-wow-delay="0.1s">
              <i className="fa fa-search hoz-empty-icon"></i>
              <h3>No Members Found</h3>
              <p className="text-muted">
                Try refining your search or changing the filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Detail Modal Slider */}
      {activeMemberId !== null && activeMember && (
        <div className="hoz-modal-overlay" onClick={() => setActiveMemberId(null)}>
          <div className="hoz-modal-window" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="hoz-modal-close-btn"
              onClick={() => setActiveMemberId(null)}
              title="Close (Esc)"
            >
              <i className="fa fa-times"></i>
            </button>

            {/* Modal Body */}
            <div className="hoz-modal-body">
              {/* Image Col */}
              <div className="hoz-modal-img-col">
                <img
                  alt={activeMember.name}
                  className="hoz-modal-img"
                  src={activeMember.image}
                />
              </div>

              {/* Info Col */}
              <div className="hoz-modal-info-col">
                <div className="hoz-modal-header">
                  <div className="hoz-modal-role">{activeMember.role}</div>
                  <h2 className="hoz-modal-name">{activeMember.name}</h2>
                  <div className="hoz-modal-years">
                    <i className="fa fa-clock-o me-2"></i>
                    Dedicated {activeMember.years}
                  </div>
                </div>

                {/* Quote block */}
                <div className="hoz-modal-quote-box">
                  <p className="hoz-modal-quote-text">{activeMember.quote}</p>
                </div>

                {/* Bio & Story Q&A */}
                <div className="hoz-modal-bio-section">
                  <h3 className="hoz-modal-bio-title">Their Story</h3>
                  <p className="hoz-modal-bio-text">{activeMember.bio}</p>

                  <div style={{ marginTop: "1rem" }}>
                    {activeMember.qa.map((qa, index) => (
                      <div className="hoz-modal-qa-item" key={index}>
                        <h4 className="hoz-modal-question">{qa.question}</h4>
                        <p className="hoz-modal-answer">{qa.answer}</p>
                      </div>
                    ))}
                  </div>

                  {activeMember.socials && activeMember.socials.email && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.5rem",
                        borderTop: "1px solid var(--border)",
                      }}
                    >
                      <span className="text-muted me-3">Get in touch:</span>
                      <a
                        className="text-primary-modern"
                        href={`mailto:${activeMember.socials.email}`}
                        style={{ fontWeight: "600", fontSize: "0.95rem" }}
                      >
                        <i className="fa fa-envelope me-2"></i>
                        {activeMember.socials.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Bottom Navigation */}
            {filteredMembers.length > 1 && (
              <div className="hoz-modal-footer-nav">
                <button className="hoz-nav-arrow-btn" onClick={handlePrev}>
                  <i className="fa fa-chevron-left"></i>
                  <span>Previous Story</span>
                </button>

                <div className="hoz-nav-indicator">
                  {filteredMembers.findIndex((m) => m.id === activeMemberId) + 1} of{" "}
                  {filteredMembers.length}
                </div>

                <button className="hoz-nav-arrow-btn" onClick={handleNext}>
                  <span>Next Story</span>
                  <i className="fa fa-chevron-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
