import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaRoad, FaWater, FaLayerGroup, FaTachometerAlt,
  FaChartLine, FaIndustry, FaStar, FaCut, FaBoxOpen,
  FaArrowRight, FaCheckCircle, FaPhoneAlt, FaFlask
} from 'react-icons/fa';
import img1 from '../assets/images/img4.jpeg';
import img2 from '../assets/images/img5.jpeg';
import img3 from '../assets/images/img6.jpeg';
import roadHero from '../assets/images/road.jpg';
import road3 from '../assets/images/road3.jpg';
import road4 from '../assets/images/road4.jpeg';
import tar from '../assets/images/tar.jpg';

const products = [
  {
    id: 1,
    name: 'Modified Bitumen',
    grade: 'SBS / APP Modified',
    icon: <FaRoad className="text-yellow-500 text-2xl" />,
    image: img1,
    tag: 'Premium',
    description: 'Enhanced with SBS or APP polymers for superior elasticity, durability, and resistance to extreme temperatures and heavy traffic. Ideal for highways, airport runways, and bridge decks.',
    applications: ['Highways & expressways', 'Airport runways', 'Bridge deck waterproofing'],
  },
  {
    id: 2,
    name: 'Bitumen Emulsions',
    grade: 'Cationic / Anionic',
    icon: <FaWater className="text-yellow-500 text-2xl" />,
    image: img2,
    tag: 'Eco-Friendly',
    description: 'Eco-friendly solution composed of bitumen, water, and emulsifying agent. Applied at ambient temperatures — no heating required. Used in road maintenance, surface dressing, and cold mix asphalt.',
    applications: ['Surface dressing', 'Tack coat & prime coat', 'Cold mix asphalt'],
  },
  {
    id: 3,
    name: 'Micro Surfacing Emulsions',
    grade: 'CQS Grade',
    icon: <FaLayerGroup className="text-yellow-500 text-2xl" />,
    image: img3,
    tag: 'Rapid Set',
    description: 'Cationic quick-set emulsions for rapid-setting micro surfacing. Provides superior skid resistance, seals pavement surfaces, and protects against water infiltration and oxidation.',
    applications: ['High-traffic road preservation', 'Preventive maintenance', 'Crack sealing'],
  },
  {
    id: 4,
    name: 'Viscosity Grade Bitumen',
    grade: 'VG-10 / VG-30 / VG-40',
    icon: <FaTachometerAlt className="text-yellow-500 text-2xl" />,
    image: img1,
    tag: 'Most Popular',
    description: 'Classified by viscosity at specific temperatures. Used in hot mix asphalt for paving roads. VG grades are tailored for different climates and traffic loads for optimal performance.',
    applications: ['Hot mix asphalt paving', 'Urban & rural roads', 'Heavy traffic corridors'],
  },
  {
    id: 5,
    name: 'Penetration Grade Bitumen',
    grade: '60/70 · 80/100',
    icon: <FaChartLine className="text-yellow-500 text-2xl" />,
    image: img2,
    tag: 'Standard',
    description: 'Categorized by penetration value measuring bitumen hardness. Common grades (60/70, 80/100) used globally in road construction and asphalt paving for optimal flexibility and durability.',
    applications: ['Road construction', 'Asphalt paving', 'Pavement rehabilitation'],
  },
  {
    id: 6,
    name: 'Industrial Mastic Bitumen',
    grade: 'Industrial Grade',
    icon: <FaIndustry className="text-yellow-500 text-2xl" />,
    image: img3,
    tag: 'Industrial',
    description: 'Robust semi-solid material for waterproofing, sealing, and joint filling. Highly resistant to chemicals, moisture, and temperature fluctuations. Used in roofing, tank linings, and bridge decks.',
    applications: ['Roofing & waterproofing', 'Tank & pipeline lining', 'Bridge deck protection'],
  },
  {
    id: 7,
    name: 'Performance Grade Bitumen',
    grade: 'PG 64-22 / PG 76-10',
    icon: <FaStar className="text-yellow-500 text-2xl" />,
    image: img1,
    tag: 'High Performance',
    description: 'Engineered under the Superpave system for specific climatic and traffic performance. Resists rutting, fatigue, and thermal cracking on heavy-duty pavements and airports.',
    applications: ['Heavy-duty highways', 'Airport pavements', 'Extreme climate roads'],
  },
  {
    id: 8,
    name: 'Cut Back Bitumen',
    grade: 'RC / MC / SC',
    icon: <FaCut className="text-yellow-500 text-2xl" />,
    image: img2,
    tag: 'Specialty',
    description: 'Blended with volatile solvent to reduce viscosity for easy low-temperature application. Used in surface dressing, prime coats, and tack coats. Available in RC, MC, and SC grades.',
    applications: ['Prime coat & tack coat', 'Surface dressing', 'Cold-weather paving'],
  },
  {
    id: 9,
    name: 'Bitumen Specialty Products',
    grade: 'Custom Grades',
    icon: <FaBoxOpen className="text-yellow-500 text-2xl" />,
    image: img3,
    tag: 'Custom',
    description: 'Specialized bitumen-based solutions including paints, sealants, and membranes for waterproofing, corrosion protection, and pavement preservation with tailored formulations.',
    applications: ['Waterproofing membranes', 'Corrosion protection', 'Pavement preservation'],
  },
];



const tagColors = {
  'Premium': 'bg-purple-100 text-purple-700',
  'Eco-Friendly': 'bg-green-100 text-green-700',
  'Rapid Set': 'bg-blue-100 text-blue-700',
  'Most Popular': 'bg-yellow-100 text-yellow-700',
  'Standard': 'bg-gray-100 text-gray-600',
  'Industrial': 'bg-orange-100 text-orange-700',
  'High Performance': 'bg-red-100 text-red-700',
  'Specialty': 'bg-indigo-100 text-indigo-700',
  'Custom': 'bg-teal-100 text-teal-700',
};

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[360px] w-full overflow-hidden">
        <img src={roadHero} alt="Bitumen Products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
            Product Catalogue
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Bitumen <span className="text-yellow-400">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Industry-grade bitumen solutions engineered for performance — from standard road paving to high-performance specialty applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Explore Products <FaArrowRight />
            </button>
            <a href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Our Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-5">
              Why Source Bitumen <span className="text-yellow-500">From Us?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              As a dedicated bitumen supplier with over two decades of experience, Dark Lines RK Pvt. Ltd. ensures consistent quality, competitive pricing, and reliable delivery across India and international markets. Every grade is tested to meet BIS, IS, and international standards.
            </p>
            <ul className="space-y-3">
              {[
                'Direct sourcing from certified refineries',
                'All grades available — VG, PG, Penetration, Emulsions',
                'Bulk supply in drums, tankers, and bulk carriers',
                'Timely delivery across PAN India',
                'Technical support for grade selection',
                'Export-ready packaging for international orders',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-yellow-500 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={road3} alt="Road" className="w-full h-48 object-cover rounded-2xl shadow-md col-span-2" />
            <img src={road4} alt="Road 4" className="w-full h-40 object-cover rounded-2xl shadow-md" />
            <img src={tar} alt="Tar" className="w-full h-40 object-cover rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Product Range</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Bitumen Product Range</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
              Nine proven grades — each engineered for specific performance requirements across road, industrial, and waterproofing applications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${tagColors[product.tag]}`}>
                    {product.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                    {product.grade}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition">
                      {product.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition">{product.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{product.description}</p>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Key Applications</p>
                    <ul className="space-y-1">
                      {product.applications.map((app, ai) => (
                        <li key={ai} className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition text-sm"
                  >
                    View Details <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <FaFlask className="text-yellow-400 text-4xl mx-auto mb-4" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">Quality Assurance</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6">Every Batch. Tested. Certified.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-10">
            All our bitumen products undergo rigorous quality testing at every stage — from procurement to dispatch. We follow BIS standards (IS 73, IS 8887) and international ASTM/EN specifications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['IS 73 Compliant', 'ASTM Tested', 'BIS Certified', 'Export Approved'].map((badge, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl py-4 px-3 hover:border-yellow-400 transition">
                <FaCheckCircle className="text-yellow-400 mx-auto mb-2 text-xl" />
                <p className="text-white text-xs font-semibold text-center">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <h3 className="text-3xl font-extrabold text-black mb-3">Need a Specific Grade or Bulk Supply?</h3>
        <p className="text-black/70 text-sm mb-7 max-w-lg mx-auto">
          Talk to our team for grade recommendations, pricing, and delivery timelines tailored to your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition">
            <FaPhoneAlt className="text-sm" /> Contact Our Team
          </a>
          <a href="tel:+918148913511" className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            +91 8148913511
          </a>
        </div>
      </section>

    </div>
  );
};

export default Product;
