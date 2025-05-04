import React from 'react';
import './Testimonials.css';

function TestimonialList() {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'StayFinder made booking our vacation so easy and stress-free!'
    },
    {
      name: 'John Smith',
      feedback: 'Great options and super helpful customer support. Loved the experience!'
    },
    {
      name: 'Emily Nguyen',
      feedback: 'Clean interface and fast search. I found the perfect place in minutes.'
    }
  ];

  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-items">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{t.feedback}"</p>
            <p className="testimonial-name">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialList;
