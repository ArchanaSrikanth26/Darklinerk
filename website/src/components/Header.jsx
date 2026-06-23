import { useState, useEffect, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleCategoryClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className={`
      w-full sticky top-0 z-50 shadow-lg transition-all duration-300 
      ${visible ? 'translate-y-0' : '-translate-y-full'}
      bg-white/95 backdrop-blur-md supports-backdrop-blur:bg-white/80
    `}>

      {/* ── Top contact bar ── */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 py-2 sm:py-3">
            {/* Logo - Responsive sizing */}
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Dark Lines RK Pvt Ltd" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-300" 
              />
            </div>

            {/* Contact info — Progressive disclosure based on screen size */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 font-medium">
              {/* Phone - Always visible on sm+ */}
              <a 
                href="tel:+918148913511" 
                className="hidden sm:flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-300 group"
              >
                <FaPhoneAlt className="text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">+91 8148913511</span>
                <span className="md:hidden">Call Us</span>
              </a>
              
              {/* Email - Hidden on mobile, short on tablet, full on desktop */}
              <a 
                href="mailto:darklinesrkpvtltd2026@gmail.com" 
                className="hidden md:flex items-center gap-1.5 hover:text-yellow-600 transition-colors duration-300 group"
              >
                <FaEnvelope className="text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hidden lg:inline">darklinesrkpvtltd2026@gmail.com</span>
                <span className="lg:hidden">Email</span>
              </a>
              
              {/* Location - Only on large screens */}
              <span className="hidden lg:flex items-center gap-1.5 text-gray-500">
                <FaMapMarkerAlt className="text-yellow-500 shrink-0" />
                <span className="hidden xl:inline">Manali New Town, Chennai – 600 103</span>
                <span className="xl:hidden">Chennai</span>
              </span>
            </div>

            {/* Mobile contact button */}
            <div className="flex sm:hidden items-center gap-2">
              <a 
                href="tel:+918148913511"
                className="flex items-center gap-1 text-xs text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                <FaPhoneAlt className="text-yellow-500" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation bar ── */}
      <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">

          {/* Mobile: brand + hamburger */}
          <div className="flex items-center justify-between py-3 md:hidden">
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold text-yellow-400 tracking-wider">DARK LINES RK</span>
              <span className="text-xs text-gray-400 font-medium">PVT. LTD.</span>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`
                relative w-8 h-8 flex items-center justify-center rounded-lg
                transition-all duration-300 transform hover:scale-110
                ${menuOpen ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'}
              `}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <div className="relative">
                {menuOpen ? (
                  <FaTimes className="text-lg transition-all duration-300 rotate-180" />
                ) : (
                  <FaBars className="text-lg transition-all duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Desktop nav links */}
          <div className={`
            ${menuOpen ? 'flex' : 'hidden'} md:flex
            flex-col md:flex-row md:items-center md:justify-center
            gap-0 md:gap-1 lg:gap-2 xl:gap-3
            pb-4 md:pb-0
            text-xs sm:text-sm font-semibold uppercase tracking-wider
            ${menuOpen ? 'animate-slideDown' : ''}
          `}>
            <NavBtn label="Home" onClick={() => navigate('/')} active={isActive('/')} isMobile={isMobile} />
            <NavBtn label="About Us" onClick={() => navigate('/about')} active={isActive('/about')} isMobile={isMobile} />

            {/* Products dropdown */}
            <div ref={dropdownRef} className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                className={`
                  flex items-center justify-between md:justify-center gap-2
                  w-full md:w-auto px-3 sm:px-4 py-3 md:py-4 lg:py-5
                  transition-all duration-300 relative
                  ${isProductsActive 
                    ? 'text-yellow-400 bg-yellow-400/10 md:bg-transparent' 
                    : 'hover:text-yellow-400 hover:bg-yellow-400/5 md:hover:bg-transparent'
                  }
                  ${menuOpen ? 'border-l-2 border-yellow-400/30 ml-2 md:ml-0 md:border-0' : ''}
                `}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Our Products</span>
                <FaChevronDown className={`
                  text-xs transition-all duration-300 
                  ${dropdownOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}
                `} />
              </button>

              {/* Desktop dropdown */}
              <div 
                className={`
                  hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full
                  w-64 lg:w-72 bg-white text-gray-800 
                  shadow-2xl rounded-xl overflow-hidden z-50 
                  border border-gray-200 transition-all duration-300
                  ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                `}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setTimeout(() => setDropdownOpen(false), 150)}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-3">
                  <h3 className="text-sm font-bold text-black">Our Products</h3>
                </div>
                {productCategories.map((cat, index) => (
                  <button
                    key={cat.path}
                    onClick={() => handleCategoryClick(cat.path)}
                    className={`
                      w-full text-left px-4 py-3 text-sm font-medium 
                      border-b border-gray-100 last:border-0 
                      transition-all duration-300 flex items-center gap-3
                      hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 
                      hover:text-yellow-700 hover:translate-x-1
                      ${location.pathname === cat.path 
                        ? 'bg-yellow-50 text-yellow-700 border-l-4 border-l-yellow-500' 
                        : ''
                      }
                    `}
                  >
                    <span className="text-yellow-500 font-bold">{String(index + 1).padStart(2, '0')}</span>
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Mobile: sub-items */}
              <div className={`
                md:hidden pl-4 border-l-2 border-yellow-400/30 ml-4 space-y-1
                ${menuOpen ? 'animate-slideDown' : ''}
              `}>
                {productCategories.map((cat, index) => (
                  <button
                    key={cat.path}
                    onClick={() => handleCategoryClick(cat.path)}
                    className={`
                      block w-full text-left px-3 py-2 text-xs tracking-wide 
                      transition-all duration-300 rounded-md
                      ${location.pathname === cat.path 
                        ? 'text-yellow-400 bg-yellow-400/10 font-semibold' 
                        : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/5'
                      }
                    `}
                  >
                    <span className="text-yellow-500 mr-2">→</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <NavBtn label="Exports" onClick={() => navigate('/exports')} active={isActive('/exports')} isMobile={isMobile} />
            <NavBtn label="Contact Us" onClick={() => navigate('/contact')} active={isActive('/contact')} isMobile={isMobile} />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavBtn = ({ label, onClick, active, isMobile }) => (
  <button
    onClick={onClick}
    className={`
      relative group w-full md:w-auto text-left md:text-center 
      px-3 sm:px-4 py-3 md:py-4 lg:py-5 
      transition-all duration-300 font-semibold
      ${active 
        ? 'text-yellow-400 bg-yellow-400/10 md:bg-transparent' 
        : 'hover:text-yellow-400 hover:bg-yellow-400/5 md:hover:bg-transparent'
      }
      ${isMobile && !active ? 'border-l-2 border-transparent hover:border-yellow-400/50 ml-2 md:ml-0 md:border-0' : ''}
      ${active && isMobile ? 'border-l-2 border-yellow-400 ml-2 md:ml-0 md:border-0' : ''}
    `}
  >
    <span className="relative z-10">{label}</span>
    
    {/* Desktop underline effect */}
    <span className={`
      hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2
      h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500
      transition-all duration-300 ease-out
      ${active ? 'w-full' : 'w-0 group-hover:w-full'}
    `} />
    
    {/* Mobile active indicator */}
    {active && isMobile && (
      <span className="md:hidden absolute right-2 top-1/2 transform -translate-y-1/2">
        <span className="text-yellow-400 text-xs">●</span>
      </span>
    )}
  </button>
);

export default Header;
