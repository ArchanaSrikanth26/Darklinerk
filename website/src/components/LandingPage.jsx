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
    </div>
  );
};

export default LandingPage;
