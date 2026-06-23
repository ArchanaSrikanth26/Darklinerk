import React from 'react';
import aboutImage from '../assets/images/logo.png';
import maniImg from '../assets/images/mani.jpg';
import { FaCheck, FaGlobe, FaShoppingCart, FaPhone, FaArrowRight, FaUserTie } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">

      {/* Meet Our Director */}
      <section className="py-8 sm:py-14 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
              <FaUserTie className="text-yellow-500" />
              Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">Meet Our Director</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:border-yellow-400 transition-all duration-300 p-5 sm:p-8 flex flex-col sm:flex-row items-center gap-8 sm:gap-10 max-w-2xl w-full">
              <div className="relative shrink-0 pb-4">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                  <img src={maniImg} alt="Manikandan Raj" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow">Director</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-3xl font-extrabold text-gray-800">Manikandan Raj</h3>
                <p className="text-yellow-600 font-semibold text-sm mt-1 mb-3">Founder & Director, Dark Lines RK Pvt. Ltd.</p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  With over two decades of experience in bitumen supply, agricultural commodities, and civil infrastructure, Manikandan Raj has led Dark Lines RK Pvt. Ltd. to become a trusted name across India and global markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2 items-center">
            {/* Image Section */}
            <div className="relative order-2 md:order-1 opacity-0 translate-y-4 animate-fade-in">
              <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 border-t-4 sm:border-t-8 border-l-4 sm:border-l-8 border-yellow-400 z-0 rounded-tl-lg"></div>
              <div className="relative z-10 group">
                <img 
                  src={aboutImage} 
                  alt="About Dark Lines RK" 
                  className="w-full h-auto object-cover rounded-xl border-4 border-yellow-400 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 md:order-2 opacity-0 translate-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 uppercase tracking-wider">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                About Us
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800 mb-6">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  DARK LINES RK
                </span>
                <br />
                <span className="text-yellow-500 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  PVT. LTD.
                </span>
              </h2>
              
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6 rounded-full"></div>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p className="mb-4">
                  Our Company is engaged in <strong className="text-gray-800">trading and marketing</strong> of agricultural produce and commodities such as sugar, spices like dry red chillies, turmeric, coriander, cumin seeds, food grains like rice, wheat, corn, sorghum and tea, pulses and agricultural feed.
                </p>
                <p className="mb-6">
                  We import lentils, faba beans, black Matpe, and toor (Pigeon Peas) in India in <strong className="text-yellow-600">bulk quantities</strong>. Our major imports are from <strong className="text-gray-800">Canada, Australia, and Myanmar</strong>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button onClick={() => navigate('/about')} className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 group">
                  <span>Read More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => navigate('/products/bitumen')} className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-sm sm:text-base rounded-lg shadow-sm hover:shadow-md hover:border-yellow-400 hover:text-yellow-600 transform hover:scale-105 active:scale-95 transition-all duration-300 ease-out">
                  View Products
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <div className="flex items-center gap-3 mb-2">
                  <FaPhone className="text-yellow-500 text-lg" />
                  <p className="text-gray-600 text-xs sm:text-sm">Call to ask any question</p>
                </div>
                <a 
                  href="tel:+918148913511" 
                  className="text-xl sm:text-2xl font-bold text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  +91 8148913511
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="text-center mb-12 lg:mb-16 opacity-0 translate-y-4 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-black mb-4">
              WHY CHOOSE US?
            </h2>
            <div className="w-24 h-1 bg-black mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto">
              Our global network and expertise make us your trusted partner in international trade
            </p>
          </div>
          
          <div className="grid gap-6 lg:gap-10 grid-cols-1 md:grid-cols-2">
            {/* Exports Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 lg:p-8 cursor-pointer bg-white/95 backdrop-blur-sm border-0 shadow-2xl opacity-0 translate-y-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <FaGlobe className="text-white text-xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Exports</h3>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                Our network spans across the globe, connecting markets and delivering quality products to international destinations.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaCheck className="text-yellow-500 text-sm" />
                  Export Destinations:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Sri Lanka','Malaysia','Bangladesh','UAE','Singapore','Russia','Djibouti','Benin','Afghanistan'].map(country => (
                    <div key={country} className="flex items-center gap-2 text-sm text-gray-700 hover:text-yellow-600 transition-colors">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Imports Card */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 lg:p-8 cursor-pointer bg-white/95 backdrop-blur-sm border-0 shadow-2xl opacity-0 translate-y-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaShoppingCart className="text-white text-xl" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Imports</h3>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                We source premium quality products from trusted international suppliers to meet domestic market demands.
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaCheck className="text-blue-500 text-sm" />
                  Import Sources:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Canada','Australia','Myanmar','Tanzania'].map(country => (
                    <div key={country} className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700 font-medium">
                  <FaCheck className="inline mr-2 text-blue-500" />
                  Bulk quantity imports for competitive pricing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-12 lg:mb-16 opacity-0 translate-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Our Products
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800 mb-6">
              PREMIUM QUALITY
              <span className="block text-yellow-500">PRODUCTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-quality bitumen products designed for various construction and industrial applications
            </p>
          </div>
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Liquid Cold Mix Bitumen Emulsion', desc: 'Used for road construction, available in drum packaging.', category: 'Road Construction', featured: true },
              { name: 'Bitumen Tar Cake', desc: 'Packaged in polythin with standard grade.', category: 'Standard Grade' },
              { name: 'Natural Liquid Hincol Bitumen Emulsion RS1', desc: 'Designed for road construction applications.', category: 'Road Construction' },
              { name: 'Stp CPRX Compound', desc: 'Special compound for bitumen-related applications.', category: 'Specialty' },
              { name: 'Bitumen VG-10', desc: 'Suitable for floors, roads, buildings, roofing, and hydro projects.', category: 'Multi-Purpose', featured: true },
              { name: 'Premium Petro VG-10 Bitumen', desc: 'High-quality bitumen in drum packaging.', category: 'Premium Grade' },
              { name: 'Asphalt Tarco Bitumen Primer', desc: 'Primer for asphalt and bitumen surfaces.', category: 'Primer' },
              { name: '85 25 Grade Bitumen', desc: 'Standard grade bitumen for various uses.', category: 'Standard Grade' },
              { name: 'Non Emboss Bitumen', desc: 'VG30 grade non-embossed bitumen.', category: 'VG30 Grade', featured: true },
              { name: 'Bitumen Cake', desc: 'Available in 25 kg packaging.', category: 'Standard' },
              { name: 'Bitumen 85 25', desc: 'Blown bitumen grade for specialized applications.', category: 'Specialty' },
              { name: 'Hp Pasargard Bitumen', desc: 'VG30 grade in drum packaging.', category: 'VG30 Grade' },
            ].map((product, index) => (
              <div 
                key={index} 
                className={`
                  ${product.featured ? 'bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 lg:p-8 ring-2 ring-yellow-400 ring-opacity-50 bg-gradient-to-br from-white to-yellow-50' : 'bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300 ease-out p-4 sm:p-6 lg:p-8 cursor-pointer hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'}
                  group relative overflow-hidden
                  opacity-0 translate-y-4 animate-fade-in
                `}
                style={{animationDelay: `${Math.floor(index / 3) * 0.1 + 0.1}s`}}
              >
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-3 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors">
                    {product.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300 mb-3 leading-snug">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {product.desc}
                </p>
                
                <div className="flex items-center justify-end pt-4 border-t border-gray-100 group-hover:border-yellow-200 transition-colors">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
