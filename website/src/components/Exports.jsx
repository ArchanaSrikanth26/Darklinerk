import React from "react";
import exportImage from "../assets/images/tar.jpg"; // Hero banner
import bitumenIcon from "../assets/images/abt2.jpg"; // Replace with a relevant icon
import { FaGlobeAsia, FaIndustry, FaTruck, FaFileDownload } from "react-icons/fa";

const exportItems = [
  {
    title: "Road Grade Bitumen",
    description: "Ideal for highway and infrastructure construction.",
  },
  {
    title: "Industrial Bitumen",
    description: "Used in waterproofing, roofing, and adhesive products.",
  },
  {
    title: "Polymer Modified Bitumen (PMB)",
    description: "Enhanced performance for demanding road conditions.",
  },
  {
    title: "Emulsified Bitumen",
    description: "Environment-friendly bitumen for surface treatments.",
  },
];

const features = [
  {
    icon: <FaGlobeAsia className="text-yellow-500 text-3xl mb-2" />,
    title: "Global Distribution",
    desc: "Supplying to over 15 countries and counting.",
  },
  {
    icon: <FaIndustry className="text-yellow-500 text-3xl mb-2" />,
    title: "Refinery Partnerships",
    desc: "Direct links with major refineries for quality assurance.",
  },
  {
    icon: <FaTruck className="text-yellow-500 text-3xl mb-2" />,
    title: "Efficient Logistics",
    desc: "Timely delivery backed by robust supply chain.",
  },
];

const Exports = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={exportImage}
          alt="Bitumen Export"
          className="w-full h-[60vh] object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold text-yellow-400">Bitumen Exports</h1>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              Delivering Premium Bitumen Solutions to Global Markets
            </p>
          </div>
        </div>
      </section>

      {/* Bitumen Types */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Types of Bitumen We Export</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exportItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 text-center"
            >
              <img
                src={bitumenIcon}
                alt="Bitumen icon"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose UMA Exports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                {f.icon}
                <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center bg-gray-100 p-10 rounded-xl shadow-xl">
          <FaFileDownload className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Download Our Bitumen Exports Brochure</h3>
          <p className="text-gray-600 mb-6">
            Explore specifications, logistics, and compliance details in our detailed PDF brochure.
          </p>
          <a
            href="/brochure.pdf"
            download
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Download Brochure
          </a>
        </div>
      </section>
    </div>
  );
};

export default Exports;