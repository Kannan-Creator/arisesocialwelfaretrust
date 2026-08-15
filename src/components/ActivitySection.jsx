import React from "react";

export default function ActivitySection({ title, activities }) {
  return (
    <div className="container-modern section-padding">
      <div className="text-center mx-auto mb-5 animate-fade-up" style={{ maxWidth: "800px" }}>
        <h5 className="text-uppercase text-primary-modern fw-bold tracking-wide">Activities</h5>
        <h1 className="display-5 fw-bold text-gradient mb-0">{title}</h1>
      </div>
      <div className="row g-4">
        {activities && activities.map((activity, index) => (
          <div key={index} className="col-lg-4 col-md-6 wow animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="glass-card p-4 h-100 d-flex flex-column position-relative overflow-hidden group">
              {/* Decorative top border line */}
              <div className="position-absolute top-0 start-0 w-100" style={{ height: '4px', background: 'var(--primary)' }}></div>
              
              <div className="d-flex align-items-center mb-4 mt-2">
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0" 
                  style={{ width: '60px', height: '60px', background: 'var(--primary-light)' }}
                >
                  <i className="fa fa-tasks text-white fs-4"></i>
                </div>
                <h4 className="mb-0 ms-3 fw-bold">{activity.title}</h4>
              </div>
              <p className="text-muted mb-0 flex-grow-1" style={{ lineHeight: '1.7' }}>
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
