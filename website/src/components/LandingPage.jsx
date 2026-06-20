import React from 'react';
import Carousel from './Carousel';
import aboutImage from '../assets/images/tar.jpg';

const LandingPage = () => {
  return (
    <div className="bg-white">

      {/* About Us Section */}
      <section className="bg-white py-16 px-4 md:px-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-8 border-l-8 border-yellow-400 z-0"></div>
            <img src={aboutImage} alt="About Dark Lines RK" className="relative z-10 border-4 border-yellow-400 shadow-md w-full" />
          </div>
          <div>
            <h4 className="text-yellow-500 text-sm font-semibold mb-2 uppercase tracking-widest">About</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">DARK LINES RK PVT. LTD.</h2>
            <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our Company is engaged in trading and marketing of agricultural produce and commodities such as sugar, spices like dry red chillies, turmeric, coriander, cumin seeds, food grains like rice, wheat, corn, sorghum and tea, pulses and agricultural feed like soyabean meal and rice bran de-oiled cake.
              <br /><br />
              We import lentils, faba beans, black Matpe, and toor (Pigeon Peas) in India in bulk quantities. Our major imports are from Canada, Australia, and Burma.
            </p>
            <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition">
              Read More
            </a>
            <div className="mt-6">
              <p className="text-gray-500">Call to ask any question</p>
              <p className="text-lg font-semibold text-yellow-500">+91 8148913511</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-400 py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">WHY CHOOSE US?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Exports / Imports</h3>
              <p className="text-gray-600 mb-4">Our network is spread all over the world including India. The countries in which we deal are inclusive of...</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {['Sri Lanka','Malaysia','Bangladesh','UAE','Singapore','Russia','Djibouti','Benin','Afghanistan'].map(c => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Imports</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {['Canada','Australia','Myanmar','Tanzania'].map(c => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="bg-white py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">OUR PRODUCTS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Liquid Cold Mix Bitumen Emulsion', desc: 'Used for road construction, available in drum packaging.' },
              { name: 'Bitumen Tar Cake', desc: 'Packaged in polythin with standard grade.' },
              { name: 'Natural Liquid Hincol Bitumen Emulsion RS1', desc: 'Designed for road construction applications.' },
              { name: 'Stp CPRX Compound', desc: 'Special compound for bitumen-related applications.' },
              { name: 'Bitumen VG-10', desc: 'Suitable for floors, roads, buildings, roofing, and hydro projects.' },
              { name: 'Premium Petro VG-10 Bitumen', desc: 'High-quality bitumen in drum packaging.' },
              { name: 'Asphalt Tarco Bitumen Primer', desc: 'Primer for asphalt and bitumen surfaces.' },
              { name: '85 25 Grade Bitumen', desc: 'Standard grade bitumen for various uses.' },
              { name: 'Non Emboss Bitumen', desc: 'VG30 grade non-embossed bitumen.' },
              { name: 'Bitumen Cake', desc: 'Available in 25 kg packaging.' },
              { name: 'Bitumen 85 25', desc: 'Blown bitumen grade for specialized applications.' },
              { name: 'Hp Pasargard Bitumen', desc: 'VG30 grade in drum packaging.' },
            ].map((p, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded-lg border-l-4 border-l-yellow-400 hover:shadow-md hover:bg-yellow-50 group transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
