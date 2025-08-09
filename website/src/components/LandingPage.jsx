import React from 'react';
import Carousel from './Carousel';
import aboutImage from '../assets/images/tar.jpg'; // Replace with your actual image path

const LandingPage = () => {
  return (
    <div>
      
      {/* About Us Section */}
      <section className="bg-gray-100 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-8 border-l-8 border-yellow-400 z-0"></div>
            <img
              src={aboutImage}
              alt="About Uma Exports"
              className="relative z-10 border-4 border-white shadow-md"
            />
          </div>

          {/* Text Content */}
          <div>
            <h4 className="text-yellow-400 text-sm font-semibold mb-2 uppercase">About</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UMA EXPORTS</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Company is engaged in trading and marketing of agricultural produce and commodities such as sugar, spices like dry red chillies, turmeric, coriander, cumin seeds, food grains like rice, wheat, corn, sorghum and tea, pulses and agricultural feed like soyabean meal and rice bran de-oiled cake.
              <br /><br />
              We import lentils, faba beans, black Matpe, and toor (Pigeon Peas) in India in bulk quantities. Our major imports are from Canada, Australia, and Burma. We are B2B traders, highly specialized in sugar, corn, and dal. We maintain stocks and distribute them to different institutional parties like manufacturers, exporters, etc. We follow standard packing processes to ensure that quality and authentic taste of commodities remain intact.
            </p>

            <a
              href="#"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Read More
            </a>

            <div className="mt-6">
              <p className="text-gray-600">Call to ask any question</p>
              <p className="text-lg font-semibold text-black">+91-33-22811396/97</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-black py-16 px-4 md:px-16 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 text-center animate-fadeIn">
            WHY CHOOSE US?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 bg-gray-900 rounded-lg animate-slideUp">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Exports / Imports</h3>
              <p className="text-gray-300 mb-4">
                Our network is spread all over the world including India. The countries in which we deal are inclusive of...
              </p>
              <ul className="list-disc list-inside text-gray-200">
                <li>Sri Lanka</li>
                <li>Malaysia</li>
                <li>Bangladesh</li>
                <li>UAE</li>
                <li>Singapore</li>
                <li>Russia</li>
                <li>Djibouti</li>
                <li>Benin</li>
                <li>Afghanistan</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg animate-slideUp delay-200">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Imports</h3>
              <ul className="list-disc list-inside text-gray-200">
                <li>Canada</li>
                <li>Australia</li>
                <li>Myanmar</li>
                <li>Tanzania</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center animate-fadeInDown">
            OUR PRODUCTS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Liquid Cold Mix Bitumen Emulsion</h3>
              <p className="text-gray-600 text-sm">Used for road construction, available in drum packaging.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-100 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Bitumen Tar Cake</h3>
              <p className="text-gray-600 text-sm">Packaged in polythin with standard grade.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-200 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Natural Liquid Hincol Bitumen Emulsion RS1</h3>
              <p className="text-gray-600 text-sm">Designed for road construction applications.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-300 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Stp CPRX Compound</h3>
              <p className="text-gray-600 text-sm">Special compound for bitumen-related applications.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-400 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Bitumen VG-10</h3>
              <p className="text-gray-600 text-sm">Suitable for floors, roads, buildings, roofing, and hydro projects.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-500 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Premium Petro VG-10 Bitumen</h3>
              <p className="text-gray-600 text-sm">High-quality bitumen in drum packaging.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-600 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Asphalt Tarco Bitumen Primer</h3>
              <p className="text-gray-600 text-sm">Primer for asphalt and bitumen surfaces.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-700 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">85 25 Grade Bitumen</h3>
              <p className="text-gray-600 text-sm">Standard grade bitumen for various uses.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-800 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Non Emboss Bitumen</h3>
              <p className="text-gray-600 text-sm">VG30 grade non-embossed bitumen.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-900 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Bitumen Cake</h3>
              <p className="text-gray-600 text-sm">Available in 25 kg packaging.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1000 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Bitumen 85 25</h3>
              <p className="text-gray-600 text-sm">Blown bitumen grade for specialized applications.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1100 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Hp Pasargard Bitumen</h3>
              <p className="text-gray-600 text-sm">VG30 grade in drum packaging.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1200 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Black Japan Bitumen Paint</h3>
              <p className="text-gray-600 text-sm">Paint for road applications.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1300 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Penetration Grade 80 100 Bitumen</h3>
              <p className="text-gray-600 text-sm">200kg penetration grade bitumen.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1400 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Industrial Grade Hot Mix Bitumen</h3>
              <p className="text-gray-600 text-sm">Penetration grade 60/70 for industrial use.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1500 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Penetration Grade 60 70 Bitumen</h3>
              <p className="text-gray-600 text-sm">200kg penetration grade bitumen.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1600 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Penetration Value of Bitumen</h3>
              <p className="text-gray-600 text-sm">Standard for measuring bitumen penetration.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1700 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Types of Bitumen</h3>
              <p className="text-gray-600 text-sm">Overview of various bitumen types.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1800 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Blown Bitumen 85/25 Grade</h3>
              <p className="text-gray-600 text-sm">Specialized blown bitumen grade.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border-4 border-yellow-400 hover:shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300 animate-zoomIn delay-1900 group">
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600">Non Embossed VG-40 Bitumen</h3>
              <p className="text-gray-600 text-sm">VG-40 grade non-embossed bitumen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-12 px-4 md:px-16 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 animate-fadeInUp">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">Get In Touch</h3>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="text-gray-300">
                Uma Exports Limited<br />
                Suite No.-16, 1st Floor, Ganga Jamuna Building,<br />
                28/1 Shakespeare Sarani, Kolkata - 700 017
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <p className="text-gray-300">+91-33-22811396/97</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zm-10-7h3v3h-3v-3zm-4 0h3v3H6v-3zm0-4h3v3H6V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7zm4 0h3v3h-3V7z"/>
              </svg>
              <p className="text-gray-300">info@umaexports.net.in</p>
            </div>
          </div>
          <div className="flex justify-end space-x-6 items-center animate-slideInRight">
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.411 4.919 4.917.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.88 8.14 6.84 9.44v-6.62H7.2v-2.68h2.68V9.88c0-2.66 1.58-4.12 4-4.12 1.16 0 2.38.2 2.38.2v2.62h-1.34c-1.32 0-1.72.82-1.72 1.66v1.98h2.94l-.46 2.68h-2.48v6.62c3.96-1.3 6.84-5.04 6.84-9.44 0-5.5-4.46-9.96-9.96-9.96z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
 