import React, { useState, useEffect } from 'react';

export default function Index() {
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonials1.png',
      text:
        'We have been using the medical claims review services of MCPR for several years now, and we couldn\'t be happier with the results. Their team of medical claims reviewers is highly knowledgeable and always provides us with accurate and timely reviews. They have helped us reduce our claims processing time and improve our accuracy, which has saved us money and improved our bottom line. We highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing.',
      author: 'John Doe, CEO of ABC Healthcare',
    },
    {
      id: 2,
      image: '/images/testimonials2.png',
      text:
        'I have been working with MCPR for over a year now, and I am extremely impressed with their medical claims review services. Their team is highly professional, responsive, and knowledgeable, and they always provide us with accurate and detailed reviews. Their services have helped us reduce our claims denials and appeals, which has saved us time and money. I highly recommend their services to any healthcare provider or payer looking to improve their claims processing.',
      author: 'Jane Smith, Director of Claims Management at XYZ Insurance',
    },
    {
      id: 3,
      image: '/images/testimonials3.png',
      text:
        'I am a physician who has worked with MCPR on several occasions, and I have been extremely impressed with their medical claims review services. Their team is highly knowledgeable and always provides me with accurate and detailed reviews of my claims. Their services have helped me improve my documentation and coding practices, which has reduced my risk of audits and penalties. I highly recommend their services to any physician or healthcare provider looking to improve their claims processing.',
      author: 'Dr. John Smith, MD',
    },
    {
      id: 4,
      image: '/images/testimonials4.png',
      text:
        'As a healthcare consultant, I have worked with many medical claims review companies over the years, and I can say without hesitation that MCPR is one of the best. Their team is highly experienced and knowledgeable, and they always provide us with accurate and timely reviews. Their services have helped us improve our claims processing and reduce our costs, which has been a huge benefit to our clients. I highly recommend their services to any healthcare organization or insurance company looking to improve their claims processing.',
      author: 'Sarah Johnson, Healthcare Consultant',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section id="testimonials">
      <div className="container" style={{ marginTop: '150px' }}>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <h2 className="text-center mb-4">Testimonials</h2>
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`mb-4 testimonial-card ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                  <div className="border p-3 bg-primary text-white rounded-custom">
                    <div className="row">
                      <div className="col-md-6 order-md-2 mb-3">
                        <img
                          src={testimonial.image}
                          alt="Placeholder"
                          className="testimonial-image"
                        />
                      </div>
                      <div className="col-md-6 order-md-1">
                        <p className="testimonial-text">{testimonial.text}</p>
                        <h4 className="testimonial-author">
                          - {testimonial.author}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
