import Testimonial from 'react-testimonial';
import React from 'react';

export default function index() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: '200px' }}>
      <div className="mb-4" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>
          Testimonials
        </h2>
        <Testimonial>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid black',
                padding: '10px',
                textAlign: 'center',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
              }}
            >
              <img src="/images/services1.png" alt="Placeholder" style={{ width: '80%', height: 'auto', objectFit: 'cover', marginRight: '0', marginBottom: '40px' }} />
              <p style={{ color: 'white', textAlign: 'center' }}>"We have been using the medical claims review services of MCPR for several years now, and we couldn't be happier with the results. Their team of medical claims reviewers is highly knowledgeable and always provides us with accurate and timely reviews. They have helped us reduce our claims processing time and improve our accuracy, which has saved us money and improved our bottom line. We highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing."</p>
              <h4 style={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}>- John Doe, CEO of ABC Healthcare</h4>

            </div>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid black',
                padding: '10px',
                textAlign: 'center',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
              }}
            >
              <img src="/images/services2.png" alt="Placeholder" style={{ width: '80%', height: 'auto', objectFit: 'cover', marginRight: '0', marginBottom: '40px'}} />
              <p style={{ color: 'white', textAlign: 'center' }}>"I have been working with MCPR for over a year now, and I am extremely impressed with their medical claims review services. Their team is highly professional, responsive, and knowledgeable, and they always provide us with accurate and detailed reviews. Their services have helped us reduce our claims denials and appeals, which has saved us time and money. I highly recommend their services to any healthcare provider or payer looking to improve their claims processing." </p>
              <h4 style={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}>- Jane Smith, Director of Claims Management at XYZ Insurance</h4>
            </div>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid black',
                padding: '10px',
                textAlign: 'center',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
              }}
            >
              <img src="/images/services3.png" alt="Placeholder" style={{ width: '80%', height: 'auto', objectFit: 'cover', marginRight: '0', marginBottom: '40px' }} />
              <p style={{ color: 'white', textAlign: 'center' }}>"I am a physician who has worked with MCPR on several occasions, and I have been extremely impressed with their medical claims review services. Their team is highly knowledgeable and always provides me with accurate and detailed reviews of my claims. Their services have helped me improve my documentation and coding practices, which has reduced my risk of audits and penalties. I highly recommend their services to any physician or healthcare provider looking to improve their claims processing."</p>
              <h4 style={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}>- Dr. John Smith, MD</h4>
            </div>
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-block',
                border: '2px solid black',
                padding: '10px',
                textAlign: 'center',
                width: '100%',
                backgroundColor: '#011343',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
              }}
            >
              <img src="/images/services4.png" alt="Placeholder" style={{ width: '80%', height: 'auto', objectFit: 'cover', marginRight: '0', marginBottom: '40px' }} />
              <p style={{ color: 'white', textAlign: 'center' }}>"As a healthcare consultant, I have worked with many medical claims review companies over the years, and I can say without hesitation that MCPR is one of the best. Their team is highly experienced and knowledgeable, and they always provide us with accurate and timely reviews. Their services have helped us improve our claims processing and reduce our costs, which has been a huge benefit to our clients. I highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing." </p>
              <h4 style={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}>- Sarah Johnson, Healthcare Consultant</h4>
            </div>
          </div>
        </Testimonial>
      </div>
    </div>
  );
}
