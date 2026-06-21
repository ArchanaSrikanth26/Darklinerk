import React from 'react';
import { FaDesktop, FaTabletAlt, FaMobileAlt, FaCheck } from 'react-icons/fa';

const ResponsiveDemo = () => {
  return (
    <div className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="responsive-container">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="hero-title text-gray-800 mb-4">
            Responsive Design
            <span className="block text-blue-600">Excellence</span>
          </h2>
          <p className="text-fluid-lg text-gray-600 max-w-3xl mx-auto">
            Our website is designed to provide an optimal viewing experience across all devices
          </p>
        </div>

        {/* Device Showcase */}
        <div className="responsive-grid-3 gap-8 mb-16">
          
          {/* Desktop */}
          <div className="card-interactive text-center fade-in stagger-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDesktop className="text-white text-2xl" />
            </div>
            <h3 className="card-title text-gray-800 mb-3">Desktop Experience</h3>
            <p className="text-gray-600 responsive-text-sm mb-4">
              Full-featured layout with advanced interactions and detailed content presentation
            </p>
            <div className="text-left space-y-2">
              {['Multi-column layouts', 'Hover interactions', 'Advanced navigation', 'Rich animations'].map(feature => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheck className="text-green-500 text-xs" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet */}
          <div className="card-interactive text-center fade-in stagger-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaTabletAlt className="text-white text-2xl" />
            </div>
            <h3 className="card-title text-gray-800 mb-3">Tablet Optimized</h3>
            <p className="text-gray-600 responsive-text-sm mb-4">
              Balanced layout optimized for touch interaction and medium screens
            </p>
            <div className="text-left space-y-2">
              {['Touch-friendly buttons', 'Optimized typography', 'Flexible grids', 'Gesture support'].map(feature => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheck className="text-green-500 text-xs" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="card-interactive text-center fade-in stagger-3">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMobileAlt className="text-white text-2xl" />
            </div>
            <h3 className="card-title text-gray-800 mb-3">Mobile First</h3>
            <p className="text-gray-600 responsive-text-sm mb-4">
              Streamlined interface designed for on-the-go users and small screens
            </p>
            <div className="text-left space-y-2">
              {['Single column layout', 'Large touch targets', 'Fast loading', 'Offline capability'].map(feature => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheck className="text-green-500 text-xs" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Features Grid */}
        <div className="grid-auto-fit-md gap-6 mb-12">
          {[
            {
              title: 'Fluid Typography',
              desc: 'Text that scales smoothly across all screen sizes using CSS clamp()',
              example: 'clamp(1rem, 4vw, 2.5rem)'
            },
            {
              title: 'Flexible Grids',
              desc: 'Auto-responsive grids that adapt to available space',
              example: 'auto-fit, minmax(280px, 1fr)'
            },
            {
              title: 'Smart Spacing',
              desc: 'Consistent spacing that adjusts based on viewport size',
              example: 'clamp(1rem, 5vw, 4rem)'
            },
            {
              title: 'Adaptive Images',
              desc: 'Images that maintain aspect ratios and load efficiently',
              example: 'aspect-ratio: 16/9'
            },
            {
              title: 'Container Queries',
              desc: 'Components that respond to their container, not just viewport',
              example: '@container (min-width: 400px)'
            },
            {
              title: 'Accessibility First',
              desc: 'Responsive design that works for all users and assistive technologies',
              example: 'prefers-reduced-motion'
            }
          ].map((feature, index) => (
            <div key={index} className="card group hover:border-blue-300 fade-in">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {feature.desc}
                </p>
                <code className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono block group-hover:bg-blue-50 transition-colors">
                  {feature.example}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Breakpoint Visualization */}
        <div className="card bg-gradient-to-r from-gray-50 to-blue-50 border-blue-200 fade-in">
          <h3 className="section-title text-gray-800 mb-6 text-center">Responsive Breakpoints</h3>
          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-4 pb-4">
              {[
                { name: 'XS', size: '< 475px', color: 'bg-red-100 text-red-700', desc: 'Extra Small Phones' },
                { name: 'SM', size: '475px+', color: 'bg-orange-100 text-orange-700', desc: 'Small Phones' },
                { name: 'MD', size: '768px+', color: 'bg-yellow-100 text-yellow-700', desc: 'Tablets' },
                { name: 'LG', size: '1024px+', color: 'bg-green-100 text-green-700', desc: 'Small Laptops' },
                { name: 'XL', size: '1280px+', color: 'bg-blue-100 text-blue-700', desc: 'Desktops' },
                { name: '2XL', size: '1536px+', color: 'bg-purple-100 text-purple-700', desc: 'Large Screens' }
              ].map(bp => (
                <div key={bp.name} className={`${bp.color} px-4 py-3 rounded-lg text-center min-w-max`}>
                  <div className="font-bold text-lg">{bp.name}</div>
                  <div className="text-sm font-medium">{bp.size}</div>
                  <div className="text-xs opacity-80">{bp.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDemo;