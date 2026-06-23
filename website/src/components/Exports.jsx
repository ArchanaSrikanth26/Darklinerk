import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaGlobeAsia, FaIndustry, FaTruck, FaCheckCircle, FaPhoneAlt,
  FaArrowRight, FaShip, FaBoxOpen, FaFileAlt, FaStar, FaHandshake,
  FaRoad, FaFlask, FaWater, FaChartBar, FaCut ,FaMicroscope 
} from 'react-icons/fa';
import heroImg from '../assets/images/road2.jpg';
import img1 from '../assets/images/tar.jpg';
import img2 from '../assets/images/road3.jpg';
import img3 from '../assets/images/road4.jpeg';
import img4 from '../assets/images/abt2.jpg';

const exportProducts = [
  {
    title: 'Road Grade Bitumen',
    grade: 'VG-10, VG-30, VG-40',
    icon: <FaRoad className="text-yellow-500 text-2xl" />,
    desc: 'Premium viscosity grade bitumen for highway and urban road construction. Consistent quality backed by BIS certification and tested to IS 73 standards.',
    markets: ['UAE', 'Sri Lanka', 'Bangladesh'],
  },
  {
    title: 'Polymer Modified Bitumen',
    grade: 'SBS / APP Modified',
    icon: <FaFlask className="text-yellow-500 text-2xl" />,
    desc: 'High-performance bitumen enhanced with SBS or APP polymers for superior elasticity, rutting resistance, and extended pavement life in extreme conditions.',
    markets: ['Malaysia', 'Singapore', 'Russia'],
  },
  {
    title: 'Bitumen Emulsions',
    grade: 'CSS / CRS / CQS',
    icon: <FaWater className="text-yellow-500 text-2xl" />,
    desc: 'Cationic and anionic emulsions for eco-friendly road maintenance, surface dressing, tack coats, and cold mix asphalt — no heating required.',
    markets: ['Afghanistan', 'Djibouti', 'Benin'],
  },
  {
    title: 'Industrial Mastic Bitumen',
    grade: 'IS 702 Grade',
    icon: <FaIndustry className="text-yellow-500 text-2xl" />,
    desc: 'Heavy-duty semi-solid bitumen for waterproofing, roofing, tank linings, and industrial sealing. Resistant to chemicals, moisture, and temperature extremes.',
    markets: ['UAE', 'Singapore', 'Malaysia'],
  },
  {
    title: 'Penetration Grade Bitumen',
    grade: '60/70 · 80/100',
    icon: <FaChartBar className="text-yellow-500 text-2xl" />,
    desc: 'Globally traded bitumen grade classified by hardness. Used in asphalt paving, road base construction, and general-purpose civil infrastructure worldwide.',
    markets: ['Russia', 'Sri Lanka', 'Bangladesh'],
  },
  {
    title: 'Cut Back Bitumen',
    grade: 'RC / MC / SC',
    icon: <FaMicroscope  className="text-yellow-500 text-2xl" />,
    desc: 'Solvent-blended bitumen for low-temperature application. Ideal for prime coats, tack coats, and surface dressing in cold or remote regions.',
    markets: ['Afghanistan', 'Djibouti', 'Benin'],
  },
];

const exportDestinations = [
  { country: 'Sri Lanka', flag: '🇱🇰', products: 'Bitumen, Agricultural Products' },
  { country: 'Malaysia', flag: '🇲🇾', products: 'PMB, Emulsions, Spices' },
  { country: 'Bangladesh', flag: '🇧🇩', products: 'Bitumen, Food Grains' },
  { country: 'UAE', flag: '🇦🇪', products: 'Bitumen, Sugar, Spices' },
  { country: 'Singapore', flag: '🇸🇬', products: 'Industrial Bitumen, Pulses' },
  { country: 'Russia', flag: '🇷🇺', products: 'PMB, Penetration Grade' },
  { country: 'Djibouti', flag: '🇩🇯', products: 'Bitumen, Food Grains' },
  { country: 'Benin', flag: '🇧🇯', products: 'Bitumen, Agricultural Products' },
  { country: 'Afghanistan', flag: '🇦🇫', products: 'Road Bitumen, Cut Back' },
];

const process = [
  { icon: <FaHandshake />, step: '01', title: 'Enquiry & Quote', desc: 'Share your requirements and receive a detailed quotation within 24 hours.' },
  { icon: <FaFileAlt />, step: '02', title: 'Contract & Documentation', desc: 'We prepare export contracts, LC terms, and all trade documentation.' },
  { icon: <FaBoxOpen />, step: '03', title: 'Quality Testing', desc: 'Each batch is tested and certified before packaging and dispatch.' },
  { icon: <FaShip />, step: '04', title: 'Shipping & Logistics', desc: 'Coordinated freight forwarding via sea, air, or road to your destination.' },
  { icon: <FaTruck />, step: '05', title: 'Customs Clearance', desc: 'Full support with phytosanitary, COO, and customs documentation.' },
  { icon: <FaCheckCircle />, step: '06', title: 'Delivery & Support', desc: 'On-time delivery with post-shipment tracking and client support.' },
];



const certifications = ['APEDA Registered', 'FSSAI Certified', 'Phytosanitary Compliant', 'ISO Quality Assured', 'BIS IS 73 Certified', 'ASTM Tested'];

const Exports = () => {
  const navigate = useNavigate();
  const [activeCountry, setActiveCountry] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[62vh] min-h-[380px] w-full overflow-hidden">
        <img src={heroImg} alt="Bitumen Exports" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
            Global Trade
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Exports & <span className="text-yellow-400">Trade</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Delivering premium bitumen and agricultural commodities to 9+ countries — with certified quality, reliable logistics, and end-to-end trade support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Our Export Range <FaArrowRight />
            </button>
            <a href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
              Get Export Quote
            </a>
          </div>
        </div>
      </section>

      

      {/* About Exports */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Why Export With Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-5">
              A Trusted <span className="text-yellow-500">Export Partner</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dark Lines RK Pvt. Ltd. has built a strong reputation in international trade through consistent quality, transparent pricing, and a commitment to on-time delivery. Our export operations cover bitumen products and agricultural commodities shipped to 9+ countries across Asia, Africa, and the Middle East.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We handle the full trade cycle — from sourcing and quality testing to freight, customs, and documentation — making us a single-window partner for your import needs.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Direct sourcing from certified Indian refineries & farms',
                'Full export documentation — LC, BL, COO, phytosanitary',
                'Flexible Incoterms: FOB, CIF, CFR, EXW',
                'Sea freight via major Indian ports — Chennai, JNPT, Mundra',
                'Dedicated export manager for each client account',
                'Competitive pricing with volume-based discounts',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-yellow-500 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((c, i) => (
                <span key={i} className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={img1} alt="Bitumen" className="w-full h-48 object-cover rounded-2xl shadow-md col-span-2" />
            <img src={img2} alt="Road" className="w-full h-40 object-cover rounded-2xl shadow-md" />
            <img src={img3} alt="Export" className="w-full h-40 object-cover rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Export Products */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Export Range</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Products We Export</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Certified bitumen grades and agri-commodities ready for international shipment with full quality documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportProducts.map((p, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group">
                <div className="text-3xl mb-4">{p.icon}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition">{p.title}</h3>
                </div>
                <span className="inline-block bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">{p.grade}</span>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Markets</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.markets.map((m, mi) => (
                      <span key={mi} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>{m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Global Reach</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Export Destinations</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Trusted by clients across Asia, Africa, and the Middle East.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exportDestinations.map((d, i) => (
              <div
                key={i}
                className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 ${activeCountry === i ? 'border-yellow-400 bg-yellow-50 shadow-md' : 'border-gray-200 bg-white hover:border-yellow-400 hover:shadow-md'}`}
                onClick={() => setActiveCountry(activeCountry === i ? null : i)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{d.flag}</span>
                  <h4 className="text-lg font-bold text-gray-800">{d.country}</h4>
                </div>
                <p className="text-sm text-gray-500">{d.products}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Our Export Process</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              A seamless, transparent export journey from your first enquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-extrabold text-yellow-400/40 group-hover:text-yellow-400/70 transition">{p.step}</span>
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition">
                    {p.icon}
                  </div>
                </div>
                <h4 className="text-white font-bold text-base mb-2">{p.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">What Our Export Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ravi Perera', role: 'Civil Contractor, Sri Lanka', text: 'We have been importing VG-30 bitumen from Dark Lines RK for 3 years. Quality is consistent, documentation is always on time, and pricing is very competitive.' },
              { name: 'Khalid Al Mansouri', role: 'Infrastructure Developer, UAE', text: 'Their export process is extremely professional. Certificate of origin, test reports, and shipping documents are always error-free. Highly recommend.' },
              { name: 'Bakary Diallo', role: 'Road Contractor, Benin', text: 'Reliable partner for road grade bitumen. Deliveries to Cotonou port are always on schedule. We have renewed our annual contract for the third consecutive year.' },
            ].map((t, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-400 transition">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-gray-800 font-semibold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <FaGlobeAsia className="text-black/30 text-5xl mx-auto mb-4" />
        <h3 className="text-3xl font-extrabold text-black mb-3">Ready to Start Your Export Order?</h3>
        <p className="text-black/70 text-sm mb-7 max-w-lg mx-auto">
          Contact our export team for pricing, specifications, Incoterms, and delivery timelines tailored to your country and requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition">
            <FaPhoneAlt className="text-sm" /> Contact Export Team
          </a>
          <a href="tel:+918148913511" className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            +91 8148913511
          </a>
        </div>
      </section>

    </div>
  );
};

export default Exports;
