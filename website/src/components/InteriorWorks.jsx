import React from 'react';
import { FaPaintRoller, FaBolt, FaShower, FaDoorOpen, FaLayerGroup, FaPhoneAlt, FaThLarge } from 'react-icons/fa';
import interior1 from '../assets/images/interior1.jpg';
import interior2 from '../assets/images/interior2.jpg';

const services = [
  { icon: <FaPaintRoller className="text-yellow-500 text-3xl" />, title: 'Wall Finishes & Painting', desc: 'Premium interior and exterior painting services using high-quality paints and textures. We offer smooth finish, textured, and designer wall coatings for residential and commercial spaces.' },
  { icon: <FaLayerGroup className="text-yellow-500 text-3xl" />, title: 'False Ceiling', desc: 'Gypsum board, POP, and grid ceiling installations for modern interiors. Enhance aesthetics and improve acoustics with our professional ceiling solutions.' },
  { icon: <FaThLarge className="text-yellow-500 text-3xl" />, title: 'Flooring', desc: 'Supply and installation of vitrified tiles, marble, granite, laminate, and wooden flooring. We source premium materials directly for cost-effective project delivery.' },
  { icon: <FaDoorOpen className="text-yellow-500 text-3xl" />, title: 'Doors & Partitions', desc: 'Wooden, aluminium, and UPVC door frames and partitions for offices and homes. Custom-fit solutions with quality hardware and finishing.' },
  { icon: <FaBolt className="text-yellow-500 text-3xl" />, title: 'Electrical & Lighting', desc: 'Complete interior electrical works including concealed wiring, modular switches, LED lighting design, and panel installation by certified electricians.' },
  { icon: <FaShower className="text-yellow-500 text-3xl" />, title: 'Plumbing & Sanitary', desc: 'End-to-end plumbing works including pipe laying, bathroom fixtures, sanitary ware installation, and waterproofing for kitchens and bathrooms.' },
];

const InteriorWorks = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-yellow-400 py-16 px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Interior Works</h1>
        <p className="mt-4 text-black/70 max-w-xl mx-auto text-sm">
          Complete interior solutions for residential and commercial projects — from concept to completion.
        </p>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img src={interior1} alt="Interior Work 1" loading="eager" className="w-full h-72 object-cover rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition" />
            <img src={interior2} alt="Interior Work 2" loading="eager" className="w-full h-72 object-cover rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition" />
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
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Your Interior Project</h3>
        <p className="text-gray-500 text-sm mb-6">Get a free consultation and quote for your space.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          <FaPhoneAlt className="text-sm" /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default InteriorWorks;
