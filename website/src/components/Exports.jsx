import React from "react";
import exportImage from "../assets/images/tar.jpg";
import bitumenIcon from "../assets/images/abt2.jpg";
import { FaGlobeAsia, FaIndustry, FaTruck, FaFileDownload } from "react-icons/fa";

const exportItems = [
  { title: "Road Grade Bitumen", description: "Ideal for highway and infrastructure construction." },
  { title: "Industrial Bitumen", description: "Used in waterproofing, roofing, and adhesive products." },
  { title: "Polymer Modified Bitumen (PMB)", description: "Enhanced performance for demanding road conditions." },
  { title: "Emulsified Bitumen", description: "Environment-friendly bitumen for surface treatments." },
];

const features = [
  { icon: <FaGlobeAsia className="text-yellow-500 text-3xl mb-3" />, title: "Global Distribution", desc: "Supplying to over 15 countries and counting." },
  { icon: <FaIndustry className="text-yellow-500 text-3xl mb-3" />, title: "Refinery Partnerships", desc: "Direct links with major refineries for quality assurance." },
  { icon: <FaTruck className="text-yellow-500 text-3xl mb-3" />, title: "Efficient Logistics", desc: "Timely delivery backed by robust supply chain." },
];

const Exports = () => {
  return (
    <div className="bg-white text-gray-700">

      {/* Hero */}
      <section className="relative">
        <img src={exportImage} alt="Bitumen Export" className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover brightness-50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
              Global Trade
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4">Bitumen <span className="text-yellow-400">Exports</span></h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto text-gray-200 px-4">
              Delivering Premium Bitumen Solutions to Global Markets
            </p>
          </div>
        </div>
      </section>

      {/* Types of Bitumen */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">What We Export</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">Types of Bitumen We Export</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exportItems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-yellow-400 hover:shadow-md transition-all duration-300">
              <img src={bitumenIcon} alt="Bitumen icon" className="w-12 h-12 mx-auto mb-4 rounded-full object-cover border-2 border-yellow-400" />
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-400 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Why Choose Dark Lines RK Pvt. Ltd.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((f, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
                {f.icon}
                <h4 className="font-bold text-gray-800 text-lg mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 border border-gray-200 p-10 rounded-xl shadow-sm">
          <FaFileDownload className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Download Our Bitumen Exports Brochure</h3>
          <p className="text-gray-500 mb-6">Explore specifications, logistics, and compliance details in our detailed PDF brochure.</p>
          <a href="/brochure.pdf" download className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-md transition">
            Download Brochure
          </a>
        </div>
      </section>

    </div>
  );
};

export default Exports;
