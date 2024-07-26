// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">
          © 2024 Bar & Grill. JISHNU TP.
        </p>
        <div className="flex items-center space-x-4">
          <a href="/terms" className="text-blue-400 hover:underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
