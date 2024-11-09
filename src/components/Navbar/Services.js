import React from 'react';
// import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-item">
          <img src="https://via.placeholder.com/400x200" alt="Service 1" />
          <h2>Marketing Strategy</h2>
          <p>
            Comprehensive marketing strategies tailored to your business needs,
            including market research, branding, and digital marketing campaigns.
          </p>
        </div>
        <div className="service-item">
          <img src="https://via.placeholder.com/400x200" alt="Service 2" />
          <h2>Project Management</h2>
          <p>
            Professional project management services to ensure the successful
            completion of your initiatives on time and within budget.
          </p>
        </div>
        <div className="service-item">
          <img src="https://via.placeholder.com/400x200" alt="Service 3" />
          <h2>Consulting Services</h2>
          <p>
            Expert consulting for business growth, helping you identify new
            opportunities and optimize your operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
