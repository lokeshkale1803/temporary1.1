import React from 'react';
import { CheckCircle } from 'lucide-react';
import './WhyChooseUsSection.css';

export default function WhyChooseUsSection() {
  const features = [
    {
      title: 'Multidisciplinary by design',
      desc: 'Speech, OT, ABA, Special Education and Psychology — under one roof, on one shared care plan.'
    },
    {
      title: 'Family is the co-therapist',
      desc: "Weekly parent training so therapy doesn't stop when the session ends."
    },
    {
      title: 'Data-driven progress',
      desc: 'Quarterly re-assessments + visual growth tracker. We graduate children, not retain them.'
    },
    {
      title: 'Calm, sensory-friendly centres',
      desc: 'Every space designed with input from autistic adults and OT specialists.'
    }
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        
        <div className="why-image-area">
          <div className="why-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop" 
              alt="Therapy center" 
              className="why-img"
            />
            <div className="quote-card">
              <span className="quote-icon">❞</span>
              <p className="quote-text">"They treat my son like family, not a file number."</p>
              <p className="quote-author">— Parent, Lucknow</p>
            </div>
          </div>
        </div>

        <div className="why-content-area">
          <h4 className="why-label">WHY UNIQUE MINDS</h4>
          <h2 className="why-title">
            Premium care. Personal pace. Proven outcomes.
          </h2>
          
          <div className="why-features-list">
            {features.map((f, i) => (
              <div key={i} className="why-feature-item">
                <div className="why-feature-icon">
                  <CheckCircle size={24} color="#DE6A4D" strokeWidth={2} />
                </div>
                <div className="why-feature-text">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
