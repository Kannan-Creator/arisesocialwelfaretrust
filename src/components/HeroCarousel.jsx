import React from "react";

export default function HeroCarousel() {
  const slides = [
    {
      id: 0,
      imgSrc: "/storage/files/root143/whatsapp-image-2026-01-14-at-30011-pm-1.jpeg",
      title: "Empowering Lives",
      desc: "Creating sustainable change through education and social responsibility."
    },
    {
      id: 1,
      imgSrc: "/storage/files/root143/picsart-26-01-20-12-01-22-210.jpg",
      title: "Building Communities",
      desc: "Together we can achieve a brighter future for everyone."
    },
    {
      id: 2,
      imgSrc: "/storage/files/root143/picsart-26-01-20-11-56-23-554.jpg",
      title: "Educational Initiatives",
      desc: "Providing resources and knowledge to the next generation."
    },
    {
      id: 3,
      imgSrc: "/storage/files/root143/picsart-26-01-20-12-01-22-210.jpg",
      title: "Environmental Care",
      desc: "Protecting our planet through sustainable actions."
    },
    {
      id: 4,
      imgSrc: "/storage/files/root143/whatsapp-image-2026-01-14-at-30011-pm-2.jpeg",
      title: "Join the Cause",
      desc: "Your support makes a profound difference."
    }
  ];

  return (
    <div className="hero-carousel-modern">
      <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="heroCarouselId">
        
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className={index === 0 ? "active" : ""}
              data-bs-slide-to={index}
              data-bs-target="#heroCarouselId"
            ></li>
          ))}
        </ol>
        
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="5000">
              <div className="imgblock">
                <img
                  className="d-block w-100"
                  src={slide.imgSrc}
                  alt={slide.title}
                />
              </div>
              <div className="hero-caption-modern">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <div className="mt-4 animate-fade-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
                  <a href="/donate" className="btn-modern">Support Us</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#heroCarouselId"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#heroCarouselId"
          type="button"
        >
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
