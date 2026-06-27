"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo-area">
          <img src="https://theuniqueminds.com/wp-content/uploads/2025/04/unique-minds-g-logo.png" alt="Unique Minds" className="navbar-logo-img" />
        </Link>
        
        <div className="navbar-links">
          <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link href="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link href="/conditions" className={`nav-link ${isActive('/conditions') ? 'active' : ''}`}>Conditions</Link>
          <Link href="/assessments" className={`nav-link ${isActive('/assessments') ? 'active' : ''}`}>Assessments</Link>
          <Link href="/programs" className={`nav-link ${isActive('/programs') ? 'active' : ''}`}>Programs</Link>
          <Link href="/centres" className={`nav-link ${isActive('/centres') ? 'active' : ''}`}>Centres</Link>
          
          <div className="nav-dropdown">
            <span className="nav-link">More <ChevronDown size={14} /></span>
          </div>
          
          <a href="tel:+919891456861" className="nav-phone">
            <Phone size={16} />
            <span>+919891456861</span>
          </a>
          
          <Link href="#contact" className="btn btn-primary nav-cta">Book Assessment</Link>
        </div>
      </div>
    </nav>
  );
}
