import React from 'react';
import { ArrowRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="sparkle">✧</span> EVIDENCE-BASED THERAPY - SINCE 2014
          </div>
          
          <h1 className="hero-title">
            India's trusted home for <span>every kind</span> of mind.
          </h1>
          
          <p className="hero-description">
            From Assessment to Independence — multidisciplinary intervention and family-centered care for children with Autism, ADHD, Speech Delays, Learning Disabilities and other special needs.
          </p>
          
          <div className="hero-actions">
            <a href="#book" className="btn-primary hero-btn">
              Book Assessment <ArrowRight size={18} />
            </a>
            <a href="#talk" className="btn-outline hero-btn">
              <Phone size={18} /> Talk to an Expert
            </a>
            <a href="#centre" className="btn-secondary hero-btn">
              <MapPin size={18} /> Find a Centre
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>12+</h3>
              <p>YEARS OF CARE</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>8,000+</h3>
              <p>CHILDREN HELPED</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>EXPERT THERAPISTS</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>14</h3>
              <p>CENTRES & GROWING</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="image-container">
            {/* Using a placeholder image since we don't have the original asset */}
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Therapist with child" 
              className="hero-img"
            />
            <div className="floating-card">
              <div className="floating-card-header">
                <CheckCircle2 size={20} color="#104037" />
                <h4>RCI Certified</h4>
              </div>
              <p>Every therapist is registered with the Rehabilitation Council of India.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="trusted-logos">
        <span className="trusted-label">TRUSTED BY LEADING HOSPITALS & SCHOOLS</span>
        <div className="logos-scroll">
          <span>MAX HEALTHCARE</span>
          <span>MANIPAL</span>
          <span>MEDANTA</span>
          <span>DPS</span>
          <span>HERITAGE</span>
          <span>AMITY</span>
          <span>PATHWAYS</span>
        </div>
      </div>
    </section>
  );
}
