import React from 'react';
import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge">Premium Care</div>
          <h1>Nurturing Potential, Building Futures</h1>
          <p>
            Unique Minds provides compassionate, evidence-based pediatric therapy services. 
            From occupational to speech therapy, we are dedicated to helping your child thrive 
            in a supportive environment.
          </p>
          <div className="hero-actions">
            <Link href="/services" className="btn btn-primary">Explore Services</Link>
            <Link href="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-blob"></div>
          {/* We'll use a placeholder styled blob instead of a real image to match the modern aesthetic without needing assets */}
        </div>
      </div>
    </section>
  );
}
