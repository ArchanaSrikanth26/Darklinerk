import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Contact Info */}
      <div className="bg-white h-24 text-gray-800 text-[18px] flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm font-medium">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-500" />
          <span>+91 9003186637 |+91 8122431703 </span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-500" />
          <a href="mailto:info@umaexports.net.in" className="hover:underline text-gray-800">
            jaihanumanenterprises24@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-500" />
          <span>Kolkata – 700 017, India</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-black text-white">
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <span className="text-lg font-bold text-yellow-500">UMA EXPORTS</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FaBars />
          </button>
        </div>

        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center md:justify-center px-4 md:px-6 py-3 text-sm font-semibold uppercase bg-black md:bg-transparent`}
        >
          <a href="#home" className="block px-3 py-2 hover:text-yellow-500 text-yellow-500">Home</a>
          <a href="#about" className="block px-3 py-2 hover:text-yellow-500">About Us</a>
          <a href="#products" className="block px-3 py-2 hover:text-yellow-500">Our Products</a>
          {/* <a href="#policy" className="block px-3 py-2 hover:text-yellow-500">Policy</a>
          <a href="#investors" className="block px-3 py-2 hover:text-yellow-500">Investors</a>
          <a href="#publicissue" className="block px-3 py-2 hover:text-yellow-500">Public Issue</a>
          <a href="#careers" className="block px-3 py-2 hover:text-yellow-500">Careers</a> */}
          <a href="#exports" className="block px-3 py-2 hover:text-yellow-500">Exports</a>
          <a href="#contact" className="block px-3 py-2 hover:text-yellow-500">Contact Us</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
