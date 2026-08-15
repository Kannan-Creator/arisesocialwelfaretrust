import React from "react";

export default function ContactForm() {
  return (
    <div className="container-modern section-padding" id="contacts">
      <div className="text-center mx-auto mb-5 animate-fade-up" style={{ maxWidth: "800px" }}>
        <h5 className="text-uppercase text-primary-modern fw-bold tracking-wide">Contact Us</h5>
        <h1 className="display-5 fw-bold text-gradient mb-0">Get In Touch</h1>
      </div>

      <div className="row g-5">
        <div className="col-lg-6 wow animate-fade-up">
          <div className="glass-card p-5 h-100">
            <h3 className="mb-4 fw-bold">Send us a message</h3>
            <form
              action="https://api.web3forms.com/submit"
              className="needs-validation"
              id="form"
              method="POST"
            >
              <input
                name="access_key"
                type="hidden"
                value="bdadecf4-b859-478a-b333-e062e88c090d"
              />
              <input
                name="subject"
                type="hidden"
                value="New Submission from arisesocialwelfaretrust.org"
              />
              <input
                id=""
                name="botcheck"
                style={{ display: "none" }}
                type="checkbox"
              />
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control border-0 bg-light"
                      id="first_name"
                      name="name"
                      placeholder="First Name"
                      required
                      type="text"
                      style={{ borderRadius: 'var(--radius-sm)' }}
                    />
                    <label htmlFor="first_name" className="text-muted">First Name *</label>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control border-0 bg-light"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                      style={{ borderRadius: 'var(--radius-sm)' }}
                    />
                    <label htmlFor="last_name" className="text-muted">Last Name</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control border-0 bg-light"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      type="email"
                      style={{ borderRadius: 'var(--radius-sm)' }}
                    />
                    <label htmlFor="email" className="text-muted">E-mail Address *</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating mb-3">
                    <input
                      className="form-control border-0 bg-light"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      type="text"
                      style={{ borderRadius: 'var(--radius-sm)' }}
                    />
                    <label htmlFor="phone" className="text-muted">Your Phone</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control border-0 bg-light"
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                      style={{ height: "150px", borderRadius: 'var(--radius-sm)' }}
                    ></textarea>
                    <label htmlFor="message" className="text-muted">Your Message *</label>
                  </div>
                </div>
                
                <div className="col-12">
                  <button className="btn-modern w-100 py-3 rounded-3" type="submit">
                    Send Message <i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6 wow animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="d-flex flex-column gap-4 h-100">
            {/* Contact Info Cards */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="glass-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="bg-primary-light text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', background: 'var(--primary)' }}>
                    <i className="fa fa-phone fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Call Us</h5>
                  <p className="text-muted mb-0">+91 98404 98166<br/>+91 73959 36354</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="glass-card p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="bg-primary-light text-white rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', background: 'var(--primary)' }}>
                    <i className="fa fa-envelope-open fs-4"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Email Us</h5>
                  <p className="text-muted mb-0 text-break" style={{ fontSize: '0.9rem' }}>arisesocialwelfaretrust@gmail.com</p>
                </div>
              </div>
              <div className="col-12">
                <div className="glass-card p-4 d-flex align-items-center gap-4">
                  <div className="bg-primary-light text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px', background: 'var(--primary)' }}>
                    <i className="fa fa-map-marker fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Location</h5>
                    <p className="text-muted mb-0">27BF Rasinagar 3rdStreet, Kathirvedu, Tiruvallur district - 600066</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden flex-grow-1" style={{ minHeight: '300px' }}>
              <iframe
                className="w-100 h-100 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1971793036655!2d80.20438700000001!3d13.149958999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264be7f3e8571%3A0x3203fff314c2c834!2sKathirvedu!5e0!3m2!1sen!2sin!4v1768885059865!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
