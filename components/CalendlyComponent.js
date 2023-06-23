import React, { useEffect } from 'react';

const CalendlyComponent = () => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget mt-3"
      data-url="https://calendly.com/jimfalzone/15-minute-consultation"
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
};

export default CalendlyComponent;
