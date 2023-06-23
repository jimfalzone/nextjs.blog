import React, { useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import CalendlyComponent from './CalendlyComponent';

const Hero = () => {
  const calendlyRef = useRef(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const onButtonClicked = () => {
    setShowCalendly(!showCalendly);
    if (calendlyRef.current) {
      scroll.scrollTo(calendlyRef.current.offsetTop, {
        duration: 500,
        smooth: true
      });
    }
  };

  return (
    <div className="hero bg-white text-black" style={{ marginTop: '' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5">
            <h1 className="display-6">Medical Claims Physician Reviewers</h1>
            <p className="lead">Expert Medical Claims Review: Protecting Patients, Providers, and Payers.</p>
            <button className="btn btn-custom btn-lg" onClick={onButtonClicked}>
              Get Started With A Free Consultation
            </button>
          </div>
          <div className="col-lg-7 d-flex justify-content-end mt-3">
            <img src="/images/medical-legal-whitebg.png" alt="Hero Image" className="img-fluid" />
          </div>
        </div>
        {showCalendly && (
          <div ref={calendlyRef}>
            <CalendlyComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
