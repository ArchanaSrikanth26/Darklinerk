import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const productCategories = [
  { label: 'Bitumen Products', path: '/products/bitumen' },
  { label: 'Agricultural Products', path: '/products/agricultural' },
  { label: 'Interior Works', path: '/products/interior' },
  { label: 'Civil Constructions', path: '/products/civil' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith('/products');

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`w-full sticky top-0 z-50 shadow-md transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Bar */}
      <div className="bg-white h-20 text-gray-800 flex flex-col md:flex-row justify-between items-center px-4 py-2 text-sm font-medium">
        <img src={logo} alt="Dark Lines RK Pvt Ltd" className="h-16 w-auto object-contain" />
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-500" />
          <span>+91 8148913511 | +91 6369656854</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-500" />
          <a href="mailto:darklinesrkpvtltd2026@gmail.com" className="hover:underline text-gray-800">
            darklinesrkpvtltd2026@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-500" />
          <span>Manali New Town, Chennai – 600 103</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-black text-white relative">
        {/* Mobile top row */}
        <div className="md:hidden flex justify-between items-center px-4 py-3">
          <span className="text-lg font-bold text-yellow-500">DARK LINES RK PVT. LTD.</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-center px-4 md:px-6 py-3 text-sm font-semibold uppercase bg-black`}>
          <button onClick={() => { navigate('/'); setMenuOpen(false); }}
            className={`block px-3 py-2 ${isActive('/') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>
            Home
          </button>
          <button onClick={() => { navigate('/about'); setMenuOpen(false); }}
            className={`block px-3 py-2 ${isActive('/about') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>
            About Us
          </button>

          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 px-3 py-2 ${isProductsActive ? 'text-yellow-500' : 'hover:text-yellow-500'}`}
            >
              Our Products <FaChevronDown className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-1 w-52 bg-white text-gray-800 shadow-xl rounded-lg overflow-hidden z-50">
                {productCategories.map((cat) => (
                  <button
                    key={cat.path}
                    onClick={() => handleCategoryClick(cat.path)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-yellow-400 hover:text-black border-b border-gray-100 last:border-0 transition-colors ${
                      location.pathname === cat.path ? 'bg-yellow-400 text-black' : ''
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {/* Mobile: show inline */}
            <div className="md:hidden">
              {productCategories.map((cat) => (
                <button
                  key={cat.path}
                  onClick={() => handleCategoryClick(cat.path)}
                  className="block w-full text-left px-8 py-2 text-xs text-gray-300 hover:text-yellow-400 uppercase"
                >
                  — {cat.label}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => { navigate('/exports'); setMenuOpen(false); }}
            className={`block px-3 py-2 ${isActive('/exports') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>
            Exports
          </button>
          <button onClick={() => { navigate('/contact'); setMenuOpen(false); }}
            className={`block px-3 py-2 ${isActive('/contact') ? 'text-yellow-500' : 'hover:text-yellow-500'}`}>
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
