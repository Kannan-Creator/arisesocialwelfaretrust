import React from "react";

export default function FAQ() {
  const faqs = [
    { q: "What is ARISE Social Welfare Trust?", a: "ARISE Social Welfare Trust is a non-profit organization focused on community development through education and empowerment." },
    { q: "How can I get involved?", a: "You can volunteer, donate, or partner with us to support our initiatives." },
    { q: "What types of programs do you offer?", a: "We offer educational programs, vocational training, community outreach, and mentorship opportunities." },
    { q: "Where is your organization located?", a: "Our headquarters is located in Kathirvedu, Chennai, India." },
    { q: "How do you ensure transparency?", a: "We maintain transparent operations and regularly share updates on our initiatives and finances." },
    { q: "Who can benefit from your programs?", a: "Our programs are designed for underprivileged individuals and communities in need of support." },
    { q: "Do you accept donations?", a: "Yes, we welcome donations to help fund our programs and initiatives." },
    { q: "Are your programs free?", a: "Most of our programs are offered free of charge to ensure accessibility for all." },
    { q: "Can corporations partner with you?", a: "Absolutely! We encourage partnerships with corporations for corporate social responsibility initiatives." },
    { q: "How can I contact you?", a: "You can reach us via our website or contact us directly through our provided email." },
  ];

  return (
    <div className="container-modern section-padding" id="faq">
      <div className="text-center mx-auto mb-5 animate-fade-up" style={{ maxWidth: "800px" }}>
        <h5 className="text-uppercase text-primary-modern fw-bold tracking-wide">FAQ</h5>
        <h1 className="display-5 fw-bold text-gradient mb-0">Frequently Asked Questions</h1>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="accordion accordion-flush" id="accordionfaq">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item glass-card mb-3 border-0 overflow-hidden wow animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button collapsed bg-transparent text-dark fw-bold py-4 px-4 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                    style={{ fontSize: '1.1rem' }}
                  >
                    {faq.q}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body px-4 pb-4 pt-0 text-muted fs-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
