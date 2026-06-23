import React, { useState } from 'react';
import { FaPaintRoller, FaBolt, FaShower, FaDoorOpen, FaLayerGroup, FaPhoneAlt, FaThLarge, FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import interior1 from '../assets/images/interior1.jpg';
import interior2 from '../assets/images/interior2.jpg';
import interior3 from '../assets/images/interior3.png';
import interior4 from '../assets/images/interior4.png';
import interior5 from '../assets/images/interior5.png';
import interior6 from '../assets/images/interior6.png';

const services = [
  {
    icon: <FaPaintRoller className="text-yellow-500 text-3xl" />,
    title: 'Wall Finishes & Painting',
    desc: 'Premium interior and exterior painting using high-grade paints, textures, and designer coatings. Smooth finish, textured, and mural-ready surfaces for residential and commercial spaces.',
    features: ['Smooth & textured finishes', 'Waterproof coatings', 'Designer wall art'],
  },
  {
    icon: <FaLayerGroup className="text-yellow-500 text-3xl" />,
    title: 'False Ceiling',
    desc: 'Gypsum board, POP, and modular grid ceiling systems for modern interiors. Enhance acoustics, aesthetics, and thermal comfort with precision-installed ceiling solutions.',
    features: ['Gypsum & POP ceilings', 'Acoustic panels', 'LED cove lighting integration'],
  },
  {
    icon: <FaThLarge className="text-yellow-500 text-3xl" />,
    title: 'Flooring',
    desc: 'Supply and installation of vitrified tiles, marble, granite, laminate, and engineered wood. We source premium materials directly, ensuring cost-effective and durable project delivery.',
    features: ['Vitrified & ceramic tiles', 'Marble & granite', 'Wooden & laminate flooring'],
  },
  {
    icon: <FaDoorOpen className="text-yellow-500 text-3xl" />,
    title: 'Doors & Partitions',
    desc: 'Wooden, aluminium, and UPVC door frames, glass partitions, and office cubicle systems. Custom-fit solutions with premium hardware and precise finishing.',
    features: ['Wooden & UPVC doors', 'Glass partitions', 'Office cubicle systems'],
  },
  {
    icon: <FaBolt className="text-yellow-500 text-3xl" />,
    title: 'Electrical & Lighting',
    desc: 'Complete interior electrical works — concealed wiring, modular switches, LED lighting design, and panel installation by certified and experienced electricians.',
    features: ['Concealed wiring', 'LED & cove lighting', 'Modular switches & panels'],
  },
  {
    icon: <FaShower className="text-yellow-500 text-3xl" />,
    title: 'Plumbing & Sanitary',
    desc: 'End-to-end plumbing including pipe laying, premium bathroom fixtures, sanitary ware installation, and waterproofing for kitchens, bathrooms, and utility areas.',
    features: ['Concealed plumbing', 'Sanitary ware fitting', 'Waterproofing solutions'],
  },
];

const galleryImages = [
  { src: interior1, label: 'Living Room Design' },
  { src: interior2, label: 'Bedroom Interiors' },
  { src: interior3, label: 'Modern Kitchen' },
  { src: interior4, label: 'Office Space' },
  { src: interior5, label: 'False Ceiling Work' },
  { src: interior6, label: 'Luxury Bathroom' },
];



const whyUs = [
  'End-to-end project management from design to handover',
  'Certified professionals with proven on-site expertise',
  'Premium materials sourced directly — no middlemen',
  'On-time delivery with transparent pricing',
  'Post-completion support and warranty on workmanship',
  'Tailored solutions for residential, commercial & industrial spaces',
];

const InteriorWorks = () => {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[360px] w-full overflow-hidden">
        <img src={interior1} alt="Interior Works" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
            Premium Services
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Interior <span className="text-yellow-400">Works</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Transforming spaces into exceptional environments — residential, commercial, and industrial interiors crafted with precision and purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
              Get Free Quote <FaArrowRight />
            </a>
            <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
              View Our Work
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
              Crafting Spaces That <span className="text-yellow-500">Inspire</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Dark Lines RK Pvt. Ltd., our interior division delivers full-spectrum fit-out solutions — from raw structure to refined finish. We combine skilled craftsmanship with premium materials to create interiors that are both functional and visually compelling.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Whether it's a luxury home, a corporate office, or a large commercial complex, our team of designers, engineers, and craftsmen work in sync to deliver on time, within budget, and beyond expectations.
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
            <img src={interior2} alt="Interior 2" className="w-full h-48 object-cover rounded-2xl shadow-md hover:shadow-xl transition col-span-2" />
            <img src={interior3} alt="Interior 3" className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-xl transition" />
            <img src={interior4} alt="Interior 4" className="w-full h-40 object-cover rounded-2xl shadow-md hover:shadow-xl transition" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Core Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Comprehensive interior solutions under one roof — designed, executed, and delivered with excellence.</p>
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

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Work Gallery</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">A glimpse into the quality and craftsmanship we bring to every project.</p>
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
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh Kumar', role: 'Home Owner, Chennai', text: 'Exceptional quality of work. Our home looks completely transformed. The team was professional, clean, and delivered on time.' },
              { name: 'Priya Nair', role: 'Office Manager, Bangalore', text: 'Our office interiors were redone in just 3 weeks. Zero compromise on quality. Highly recommend Dark Lines RK.' },
              { name: 'Suresh Babu', role: 'Builder, Coimbatore', text: 'We partner with them for all our project fit-outs. Consistent quality, fair pricing, and always on schedule.' },
            ].map((t, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <h3 className="text-3xl font-extrabold text-black mb-3">Ready to Transform Your Space?</h3>
        <p className="text-black/70 text-sm mb-7 max-w-lg mx-auto">Get a free consultation and detailed quote tailored to your project requirements.</p>
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

export default InteriorWorks;
