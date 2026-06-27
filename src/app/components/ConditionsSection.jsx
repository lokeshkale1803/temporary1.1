import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ConditionsSection.css';

export default function ConditionsSection() {
  const conditions = [
    {
      title: 'Autism Spectrum Disorder',
      desc: 'Multidisciplinary ASD pathways — assessment to long-term independence.'
    },
    {
      title: 'ADHD',
      desc: 'Attention, focus and impulse-control programs that respect every learner.'
    },
    {
      title: 'Speech Delay',
      desc: 'Targeted speech therapy with measurable weekly milestones.'
    },
    {
      title: 'Developmental Delay',
      desc: 'Holistic catch-up plans across motor, speech, social and cognitive domains.'
    },
    {
      title: 'Learning Disabilities',
      desc: 'Dyslexia, dysgraphia, dyscalculia — academic success without stigma.'
    },
    {
      title: 'Cerebral Palsy',
      desc: 'Specialised PT/OT with adaptive technology and family coaching.'
    },
    {
      title: 'Down Syndrome',
      desc: 'Lifelong skill-building with a strengths-based approach.'
    },
    {
      title: 'Sensory Processing Disorder',
      desc: 'Sensory integration therapy in custom-built calming environments.'
    },
    {
      title: 'Intellectual Disability',
      desc: 'Functional academics, life skills, and vocational readiness.'
    }
  ];

  return (
    <section className="conditions-section">
      <div className="conditions-container">
        
        <div className="conditions-sidebar">
          <h4 className="conditions-label">CONDITIONS WE SUPPORT</h4>
          <h2 className="conditions-title">
            A diagnosis is the beginning of a plan — not a verdict.
          </h2>
          <p className="conditions-desc">
            From first signs to lifelong independence, our clinical pathways are built around your child's strengths.
          </p>
          <a href="#all" className="conditions-link">
            All conditions <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="conditions-grid">
          {conditions.map((c, i) => (
            <div key={i} className="condition-card">
              <div className="condition-card-header">
                <h3>{c.title}</h3>
                <ArrowRight size={14} color="#DE6A4D" />
              </div>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
