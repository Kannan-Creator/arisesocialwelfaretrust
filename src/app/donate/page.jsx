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
                  src="/storage/files/root143/img-20260120-wa0010.jpg"
                />
                <div className="wow fadeInUp">
                  <h5 className="text-uppercase text-primary">
                    Scan &amp; Donate
                  </h5>
                  <h1 className="mb-4">
                    All donations made to Arise Social Welfare Trust qualify for
                    tax exemption under applicable laws. The Arise Social
                    Welfare Trust (R) is 80G AND 12A Certified
                  </h1>
                  <div className="fs-5 mb-4">
                    <p>
                      Donations play a vital role in supporting the activities
                      of our trust. Your generous contribution helps us continue
                      our work in social welfare, education, and community
                      development. Every donation, big or small, creates a
                      positive impact and brings hope to those in need.
                    </p>
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
                  <h5 className="text-uppercase text-primary">
                    Account Details
                  </h5>
                  <h1 className="mb-4"></h1>
                  <div className="fs-5 mb-4">
                    <p>Account Name: ARISE SOCIAL WELFARE TRUST</p>
                    <p>Account Number: 05760100039853</p>
                    <p>Account Type: Current Account (CA)</p>
                    <p>IFSC Code: BARB0MANGAD</p>
                    <p>Branch: Mangadu</p>
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
