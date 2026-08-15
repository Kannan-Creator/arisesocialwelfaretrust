import React from "react";
import HeroCarousel from "@/components/HeroCarousel";

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <div className="pt-1">
        {" "}
        <div className="container-fluid about py-5" id="about" style={{}}>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-12">
                {" "}
                <img
                  className="float-start pe-lg-5 wow fadeInUp img-fluid mb-4 col-md-6"
                  src="/storage/files/root143/whatsapp-image-2026-01-14-at-120506-pm.jpeg"
                />
                <div className="wow fadeInUp">
                  <h5 className="text-uppercase text-primary">Who We Are</h5>
                  <h1 className="mb-4"></h1>
                  <div className="fs-5 mb-4">
                    <h2>About ARISE Social Welfare Trust</h2>
                    <p>
                      ARISE Social Welfare Trust is a purpose-driven,
                      system-oriented social service organisation founded by
                      Pitchaimani Ramasamy along with a close group of 35 years
                      of bonded friends from the Ramakrishna Mission school
                      background. ARISE was not created as a charity platform.
                      It was created as a responsibility platform to give back
                      to society with structure, discipline, and long-term
                      commitment.
                    </p>
                    <ul>
                      <li>Our journey is deeply rooted in gratitude.</li>
                      <li>Gratitude to our school.</li>
                      <li>Gratitude to our teachers.</li>
                      <li>
                        Gratitude to society And a strong belief that what we
                        have received must be returned with purpose.
                      </li>
                    </ul>
                    <p>
                      <strong>Our Philosophy:</strong> 
                    </p>
                    <p>At ARISE, we believe that:</p>
                    <ul>
                      <li>
                        Service should not be emotional. It should be
                        intentional.
                      </li>
                      <li>
                        Support should not be random. It should be systematic.
                      </li>
                      <li>
                        Impact should not be temporary. It should be
                        sustainable.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        This belief is captured in our core mantra:
                        <br />
                        <em>Learn | Earn | Return</em>
                      </strong>
                    </p>
                    <ul>
                      <li>We learn from society.</li>
                      <li>We earn through responsibility.</li>
                      <li>We return through service.</li>
                      <li>What Makes ARISE Different</li>
                      <li>
                        ARISE stands apart because of our system-driven
                        approach.
                      </li>
                    </ul>
                    <p>
                      <strong>We focus on:</strong>
                    </p>
                    <ul>
                      <li>Planning before action</li>
                      <li>Documentation before display</li>
                      <li>Discipline before expansion</li>
                      <li>Sustainability before scale</li>
                    </ul>
                    <p>
                      <strong>Every initiative is:</strong>
                    </p>
                    <ul>
                      <li>Need-based</li>
                      <li>Reviewed</li>
                      <li>Recorded</li>
                      <li>Monitored</li>
                      <li>Improved</li>
                      <li>We do not believe in one-day activities.</li>
                      <li>
                        We believe in long-term presence and continuous support.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid about py-5 secondary"
          id="pg_more"
          style={{}}
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-12">
                <div className="wow fadeInUp">
                  <h5 className="text-uppercase text-primary"></h5>
                  <h1 className="mb-4">Our Mission</h1>
                  <div className="fs-5 mb-4">
                    <p>
                      Our mission is to create consistent, measurable, and
                      dignified social impact through a system-driven approach,
                      guided by the values nurtured by the Ramakrishna Mission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid about py-5 primary"
          id="pg_more"
          style={{}}
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-12">
                <div className="wow fadeInUp">
                  <h5 className="text-uppercase text-primary"></h5>
                  <h1 className="mb-4">Our Vision</h1>
                  <div className="fs-5 mb-4">
                    <p>
                      To provide meaningful, value-based education to rural
                      communities, nurturing young minds to grow with
                      confidence, discover their true potential, build strong
                      self-belief, and create hopeful smiles for a brighter
                      future.
                    </p>
                    <p>In the long term, our vision is to:</p>
                    <ul>
                      <li>Build dignified old age homes</li>
                      <li>Create sustainable community institutions</li>
                      <li>Enable self-reliant families</li>
                      <li>
                        Establish ARISE as a trusted CSR-ready organisation
                      </li>
                      <li>Replicate proven service models across</li>
                      <li>regions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
