// Footer.js - Footer section for the homepage
// -------------------------------------------
// Displays a row of links (About, Privacy, Terms, Contact, Help) and a copyright line.
// Uses modern, elevated, glassy styles for a clean look.

import React from 'react';
import './Footer.css';

// List of footer links
const links = [
  { label: 'About', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Help', href: '#' },
];

const Footer = () => {
  return (
    // Main container for the footer
    <footer className="footer">
      {/* Row of footer links */}
      <div className="footer__links">
        {links.map(link => (
          <a key={link.label} href={link.href} className="footer__link">
            {link.label}
          </a>
        ))}
      </div>
      {/* Copyright/info line */}
      <div className="footer__copyright">
        © 2024 MSN Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 