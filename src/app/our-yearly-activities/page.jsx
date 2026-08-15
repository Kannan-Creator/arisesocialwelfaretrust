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
                <div className="wow fadeInUp">
                  <h5 className="text-uppercase text-primary"></h5>
                  <h1 className="mb-4"></h1>
                  <p className="fs-5 mb-4"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
