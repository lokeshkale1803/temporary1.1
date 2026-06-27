"use client";

import React, { useState } from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus('Thanks for subscribing!');
        setEmail('');
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Unique Minds</h3>
          <p className="footer-text">
            Dedicated to providing exceptional developmental services for children,
            helping them reach their full potential in a nurturing environment.
          </p>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-subtitle">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </li>
            <li>
              <Mail size={18} />
              <span>hello@uniqueminds.com</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>123 Care Lane, Wellness City, ST 12345</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h4 className="footer-subtitle">Newsletter</h4>
          <p className="footer-text">Subscribe for resources and updates.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          {status && <p className="newsletter-status">{status}</p>}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Unique Minds Child Development Services. All rights reserved.</p>
      </div>
    </footer>
  );
}
