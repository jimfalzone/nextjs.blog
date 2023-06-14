import React from 'react';



const Hero = () => {
  return (
    <div className="hero bg-white text-black" style={({ marginTop: '50px' })}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4">Medical Claims Physician Reviewers</h1>
            <p className="lead">Expert Medical Claims Review: Protecting Patients, Providers, and Payers.</p>
            <button className="btn btn-custom btn-lg">Get Started</button>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <img src="/images/medical-legal-whitebg.png" alt="Hero Image" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;