import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-yellow-400/20 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">

        {/* Useful Links */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4 border-l-4 border-yellow-400 pl-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[['About Us', '/about'], ['Our Products', '/products/bitumen'], ['Exports', '/exports'], ['Contact Us', '/contact']].map(([label, href]) => (
              <li key={label}><a href={href} className="hover:text-yellow-400 transition">+ {label}</a></li>
            ))}
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4 border-l-4 border-yellow-400 pl-3">Our Products</h3>
          <ul className="space-y-2 text-sm">
            {['Bitumen Products', 'Agricultural Products', 'Interior Works', 'Civil Constructions'].map(p => (
              <li key={p} className="hover:text-yellow-400 cursor-pointer transition">+ {p}</li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-yellow-400 text-lg font-bold mb-4 border-l-4 border-yellow-400 pl-3">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaUserTie className="text-yellow-400 mt-0.5 shrink-0" />
              <span>Manikandanraj — Director</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-yellow-400 mt-0.5 shrink-0" />
              <span>No.1/182, Phase-2, Sadayankuppam Village,<br />Manali New Town, Chennai – 600 103</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <a href="tel:+918148913511" className="hover:text-yellow-400 transition">+91 8148913511 | +91 6369656854</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <a href="mailto:darklinesrkpvtltd2026@gmail.com" className="hover:text-yellow-400 transition">darklinesrkpvtltd2026@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500 border-t border-yellow-400/20 pt-6">
        Copyright © 2025 Dark Lines RK Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
