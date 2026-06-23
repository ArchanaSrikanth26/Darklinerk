import React, { useState } from 'react';
import { FaRoad, FaBuilding, FaHome, FaIndustry, FaPhoneAlt, FaArrowRight, FaCheckCircle, FaStar, FaHardHat, FaTools } from 'react-icons/fa';
import { GiBridge, GiWaterDrop } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import civil1 from '../assets/images/civil1.jpg';
import civil2 from '../assets/images/civil2.jpg';
import civil3 from '../assets/images/civil3.png';
import civil4 from '../assets/images/civil4.png';
import civil5 from '../assets/images/civil5.png';
import civil6 from '../assets/images/civil6.png';

const services = [
  {
    icon: <FaRoad className="text-yellow-500 text-3xl" />,
    title: 'Road Construction',
    desc: 'Supply of bitumen, aggregates, and construction materials for national and state highway projects. We support contractors with timely material delivery and technical guidance.',
    features: ['Bitumen & aggregate supply', 'Highway & urban roads', 'Technical on-site support'],
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    title: 'Commercial Buildings',
    desc: 'End-to-end civil construction for office complexes, warehouses, and commercial establishments. Structural design, execution, and project management under one roof.',
    features: ['Office & warehouse construction', 'Structural design & execution', 'Full project management'],
  },
  {
    icon: <FaHome className="text-yellow-500 text-3xl" />,
    title: 'Residential Construction',
    desc: 'Custom home construction and villa projects with quality materials and skilled labour. From foundation to finishing, we ensure on-time and on-budget delivery.',
    features: ['Custom homes & villas', 'Foundation to finishing', 'On-time, on-budget delivery'],
  },
  {
    icon: <GiBridge className="text-yellow-500 text-3xl" />,
    title: 'Bridges & Infrastructure',
    desc: 'Supply of construction-grade bitumen, TMT steel, cement, and aggregate for bridge and infrastructure projects. Partnered with major contractors across India.',
    features: ['TMT steel & cement supply', 'Bridge & flyover support', 'Pan-India contractor network'],
  },
  {
    icon: <FaIndustry className="text-yellow-500 text-3xl" />,
    title: 'Industrial Structures',
    desc: 'Prefabricated and RCC industrial structures including factories, sheds, and storage facilities. Durable construction with compliance to industrial safety norms.',
    features: ['Factories & industrial sheds', 'RCC & prefab structures', 'Safety-compliant builds'],
  },
  {
    icon: <GiWaterDrop className="text-yellow-500 text-3xl" />,
    title: 'Waterproofing & Sealing',
    desc: 'Industrial-grade waterproofing using bitumen membranes, coatings, and sealants for roofs, basements, tunnels, and foundations.',
    features: ['Bitumen membrane waterproofing', 'Roof, basement & tunnel sealing', 'Long-term protection guarantee'],
  },
];

const galleryImages = [
  { src: civil1, label: 'Road Construction' },
  { src: civil2, label: 'Civil Infrastructure' },
  { src: civil3, label: 'Commercial Building' },
  { src: civil4, label: 'Industrial Structure' },
  { src: civil5, label: 'Bridge & Flyover' },
  { src: civil6, label: 'Foundation Work' },
];



const whyUs = [
  'Turnkey project execution from design to handover',
  'ISO-compliant materials with certified quality checks',
  'Direct sourcing of bitumen, steel, cement & aggregates',
  'Experienced civil engineers and site supervisors',
  'On-schedule delivery backed by strong logistics',
  'Serving government, private, and industrial clients',
];

const process = [
  { step: '01', title: 'Consultation & Survey', desc: 'Site visit, soil testing, and project feasibility assessment.' },
  { step: '02', title: 'Design & Estimation', desc: 'Detailed architectural drawings and transparent cost estimation.' },
  { step: '03', title: 'Material Procurement', desc: 'Direct sourcing of certified construction materials at competitive pricing.' },
  { step: '04', title: 'Construction & Execution', desc: 'Skilled workforce executing with precision, safety, and speed.' },
  { step: '05', title: 'Quality Inspection', desc: 'Multi-stage quality checks ensuring compliance with standards.' },
  { step: '06', title: 'Handover & Support', desc: 'Final handover with documentation and post-completion support.' },
];

const CivilConstructions = () => {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[360px] w-full overflow-hidden">
        <img src={civil1} alt="Civil Constructions" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
            Infrastructure Experts
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Civil <span className="text-yellow-400">Constructions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Building the infrastructure of tomorrow — roads, bridges, commercial complexes, and industrial structures delivered with precision and durability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
              Get Free Quote <FaArrowRight />
            </a>
            <button
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
              View Our Projects
            </button>
          </div>
        </div>
      </section>

     

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-5">
              Building <span className="text-yellow-500">Stronger</span> Foundations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dark Lines RK Pvt. Ltd. brings over 15 years of civil construction expertise to every project. From laying the first brick to final handover, our team of certified engineers, project managers, and skilled workers delivers structures built to last.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We operate across residential, commercial, industrial, and government infrastructure segments — combining direct material supply with in-house construction capability for maximum efficiency and quality control.
            </p>
            <ul className="space-y-3">
              {whyUs.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-yellow-500 mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={civil2} alt="Civil 2" className="w-full h-48 object-cover rounded-2xl shadow-md hover:shadow-xl transition col-span-2" />
            <img src={civil3} alt="Civil 3" className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-xl transition" />
            <img src={civil4} alt="Civil 4" className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-xl transition" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Core Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Comprehensive civil construction and material supply services — executed with precision and delivered on time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group">
                <div className="mb-4 w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">How We Work</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">A structured, transparent process that ensures every project is delivered on time and to the highest standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 group">
                <div className="text-4xl font-extrabold text-yellow-400/30 group-hover:text-yellow-400/60 transition mb-3">{p.step}</div>
                <h4 className="text-white font-bold text-base mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Project Gallery</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Real projects. Real results. A snapshot of our work across India.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} onClick={() => setActiveImg(img)}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                <img src={img.src} alt={img.label} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImg && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActiveImg(null)}>
          <div className="relative max-w-3xl w-full">
            <img src={activeImg.src} alt={activeImg.label} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <p className="text-white text-center mt-3 font-semibold">{activeImg.label}</p>
            <button className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full w-9 h-9 flex items-center justify-center font-bold text-lg hover:bg-yellow-300 transition">✕</button>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Arumugam S.', role: 'Government Contractor, Chennai', text: 'Reliable material supply with zero delays. Their bitumen and aggregate quality is consistently excellent across all our highway projects.' },
              { name: 'Vijayalakshmi R.', role: 'Real Estate Developer, Coimbatore', text: 'We have completed 4 residential projects with Dark Lines RK. Professional team, transparent pricing, and outstanding finish quality.' },
              { name: 'Karthikeyan M.', role: 'Industrial Project Head, Pune', text: 'Their industrial shed construction was delivered 2 weeks ahead of schedule. Structural quality passed all inspection checks on first review.' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-400 transition">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <div className="flex justify-center gap-4 mb-4 text-4xl">
          <FaHardHat className="text-black/40" />
          <FaTools className="text-black/40" />
        </div>
        <h3 className="text-3xl font-extrabold text-black mb-3">Have a Project in Mind?</h3>
        <p className="text-black/70 text-sm mb-7 max-w-lg mx-auto">
          Reach out for material supply quotes, construction partnerships, or full project execution. Our team is ready to support your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition">
            <FaPhoneAlt className="text-sm" /> Contact Us Now
          </a>
          <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            ← Go Back
          </button>
        </div>
      </section>

    </div>
  );
};

export default CivilConstructions;
