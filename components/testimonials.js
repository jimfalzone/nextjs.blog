import Testimonial from 'react-testimonial';
import React from 'react';

export default function index() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '50px' }}>
      <div className="mb-4" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>
          Testimonials
        </h2>
        <Testimonial>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                border: '10px solid #011343',
                padding: '10px',
                textAlign: 'left',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
              }}
            >
              <img src="/images/testimonials1.png" alt="Placeholder" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <p style={{ color: 'white', marginBottom: '10px' }}>"We have been using the medical claims review services of MCPR for several years now, and we couldn't be happier with the results. Their team of medical claims reviewers is highly knowledgeable and always provides us with accurate and timely reviews. They have helped us reduce our claims processing time and improve our accuracy, which has saved us money and improved our bottom line. We highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing."</p>
                <h4 style={{ color: 'white', fontStyle: 'italic', marginTop: '20px' }}>- John Doe, CEO of ABC Healthcare</h4>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                border: '10px solid #011343',
                padding: '10px',
                textAlign: 'left',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
              }}
            >
              <img src="/images/testimonials2.png" alt="Placeholder" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <p style={{ color: 'white', marginBottom: '10px' }}>"I have been working with MCPR for over a year now, and I am extremely impressed with their medical claims review services. Their team is highly professional, responsive, and knowledgeable, and they always provide us with accurate and detailed reviews. Their services have helped us reduce our claims denials and appeals, which has saved us time and money. I highly recommend their services to any healthcare provider or payer looking to improve their claims processing."</p>
                <h4 style={{ color: 'white', fontStyle: 'italic', marginTop: '20px' }}>- Jane Smith, Director of Claims Management at XYZ Insurance</h4>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                border: '10px solid #011343',
                padding: '10px',
                textAlign: 'left',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
              }}
            >
              <img src="/images/testimonials3.png" alt="Placeholder" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <p style={{ color: 'white', marginBottom: '10px' }}>"I am a physician who has worked with MCPR on several occasions, and I have been extremely impressed with their medical claims review services. Their team is highly knowledgeable and always provides me with accurate and detailed reviews of my claims. Their services have helped me improve my documentation and coding practices, which has reduced my risk of audits and penalties. I highly recommend their services to any physician or healthcare provider looking to improve their claims processing."</p>
                <h4 style={{ color: 'white', fontStyle: 'italic', marginTop: '20px' }}>- Dr. John Smith, MD</h4>
              </div>
            </div>
          </div>
          {/* Testimonial 4 */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                border: '10px solid #011343',
                padding: '10px',
                textAlign: 'left',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '8px',
              }}
            >
              <img src="/images/testimonials4.png" alt="Placeholder" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <p style={{ color: 'white', marginBottom: '10px' }}>"As a healthcare consultant, I have worked with many medical claims review companies over the years, and I can say without hesitation that MCPR is one of the best. Their team is highly experienced and knowledgeable, and they always provide us with accurate and timely reviews. Their services have helped us improve our claims processing and reduce our costs, which has been a huge benefit to our clients. I highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing."</p>
                <h4 style={{ color: 'white', fontStyle: 'italic', marginTop: '20px' }}>- Sarah Johnson, Healthcare Consultant</h4>
              </div>
            </div>
          </div>
        </Testimonial>
      </div>
    </div>
  );
}
