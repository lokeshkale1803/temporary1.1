import React from 'react';
import * as Icons from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ service, index }) {
  const IconComponent = Icons[service.iconName] || Icons.Activity;

  return (
    <div className="service-card">
      <div className="service-card-icon-container" style={{ backgroundColor: service.iconBgColor }}>
        <IconComponent size={24} color="white" strokeWidth={1.5} />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-description">{service.description}</p>
      
      <a href="#" className="service-card-link">
        Learn more <span className="arrow">→</span>
      </a>
    </div>
  );
}
