import React from 'react';
import { FaRoad, FaBuilding, FaHome, FaIndustry, FaPhoneAlt } from 'react-icons/fa';
import { GiBridge, GiWaterDrop } from 'react-icons/gi';
import civil1 from '../assets/images/civil1.jpg';
import civil2 from '../assets/images/civil2.jpg';

const services = [
  { icon: <FaRoad className="text-yellow-500 text-3xl" />, title: 'Road Construction', desc: 'Supply of bitumen, aggregates, and construction materials for national and state highway projects. We support contractors with timely material delivery and technical guidance.' },
  { icon: <FaBuilding className="text-yellow-500 text-3xl" />, title: 'Commercial Buildings', desc: 'End-to-end civil construction for office complexes, warehouses, and commercial establishments. Structural design, execution, and project management under one roof.' },
  { icon: <FaHome className="text-yellow-500 text-3xl" />, title: 'Residential Construction', desc: 'Custom home construction and villa projects with quality materials and skilled labour. From foundation to finishing, we ensure on-time and on-budget delivery.' },
  { icon: <GiBridge className="text-yellow-500 text-3xl" />, title: 'Bridges & Infrastructure', desc: 'Supply of construction-grade bitumen, TMT steel, cement, and aggregate for bridge and infrastructure projects. Partnered with major contractors across India.' },
  { icon: <FaIndustry className="text-yellow-500 text-3xl" />, title: 'Industrial Structures', desc: 'Prefabricated and RCC industrial structures including factories, sheds, and storage facilities. Durable construction with compliance to industrial safety norms.' },
  { icon: <GiWaterDrop className="text-yellow-500 text-3xl" />, title: 'Waterproofing & Sealing', desc: 'Industrial-grade waterproofing solutions using bitumen membranes, coatings, and sealants for roofs, basements, tunnels, and foundations.' },
];

const CivilConstructions = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-yellow-400 py-16 px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Civil Constructions</h1>
        <p className="mt-4 text-black/70 max-w-xl mx-auto text-sm">
          Quality civil construction services and material supply for infrastructure, commercial, and residential projects.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img src={civil1} alt="Civil Construction 1" loading="eager" className="w-full h-72 object-cover rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition" />
            <img src={civil2} alt="Civil Construction 2" loading="eager" className="w-full h-72 object-cover rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300">
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 text-center border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Have a Project in Mind?</h3>
        <p className="text-gray-500 text-sm mb-6">Reach out for material supply quotes or construction partnerships.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          <FaPhoneAlt className="text-sm" /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default CivilConstructions;
