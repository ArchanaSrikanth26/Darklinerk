import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-around items-start">
        {/* Useful Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-orange-500 text-lg mb-4">| Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">+ About Us</a></li>
            <li><a href="/products" className="hover:text-orange-500">+ Our Products</a></li>
            <li><a href="#" className="hover:text-orange-500">+ Exports</a></li>
            <li><a href="#" className="hover:text-orange-500">+ Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-orange-500 text-lg mb-4">| Our Products</h3>
          <ul className="space-y-2">
            <li><span className="hover:text-orange-500">+ Modified Bitumen</span></li>
            <li><span className="hover:text-orange-500">+ Bitumen Emulsions</span></li>
            <li><span className="hover:text-orange-500">+ Micro Surfacing Emulsions (CQS)</span></li>
            <li><span className="hover:text-orange-500">+ Viscosity Grade Bitumen</span></li>
            <li><span className="hover:text-orange-500">+ Penetration Grade Bitumen</span></li>
            <li><span className="hover:text-orange-500">+ Industrial Grade Mastic Bitumen</span></li>
            <li><span className="hover:text-orange-500">+ Performance Grade Bitumen</span></li>
            <li><span className="hover:text-orange-500">+ Cut Back</span></li>
            <li><span className="hover:text-orange-500">+ Other Products</span></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-orange-500 text-lg mb-4">| Get In Touch</h3>
          <ul className="space-y-2">
            <li><span className="hover:text-orange-500">📍 Jai Hanuman Enterprices</span></li>
            <li><span className="hover:text-orange-500">Suite No.-16</span></li>
            <li><span className="hover:text-orange-500">1st Floor</span></li>
            <li><span className="hover:text-orange-500">Ganga Jamuna Building,</span></li>
            <li><span className="hover:text-orange-500">28/1 Shakespeare Sarani,</span></li>
            <li><span className="hover:text-orange-500">Kolkata - 700 017</span></li>
            <li><a href="tel:+91-33-22811396/97" className="hover:text-orange-500">📞 +91-33-22811396/97</a></li>
            <li><a href="mailto:info@umaexports.net.in" className="hover:text-orange-500">📧 info@umaexports.net.in</a></li>
            <li><a href="#" className="hover:text-orange-500">📘</a></li>
            <li><a href="#" className="hover:text-orange-500">🐦</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        Copyright © 2025 Uma Exports Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;