import React, { useState } from 'react';
import { FaPepperHot, FaCandyCane, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaGlobe, FaLeaf, FaStar } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import spices1 from '../assets/images/spices1.jpg';
import spices2 from '../assets/images/spices2.jpg';
import spices4 from '../assets/images/spices4.png';
import spices5 from '../assets/images/spices5.png';

const categories = [
  {
    key: 'spices',
    label: 'Spices',
    icon: <FaPepperHot className="text-yellow-500 text-xl" />,
    image: spices1,
    tagline: 'Premium Indian spices sourced from the finest growing regions.',
    items: [
      { name: 'Dry Red Chillies', origin: 'Andhra Pradesh, Telangana', desc: 'Sun-dried red chillies with vibrant colour, rich heat, and intense flavour. Available in whole, crushed, and powder forms.', grades: ['S4', 'Teja', 'Byadgi'] },
      { name: 'Turmeric', origin: 'Erode, Nizamabad', desc: 'High-curcumin turmeric with deep golden colour and earthy aroma. Exported as whole fingers, sliced, and fine powder.', grades: ['Alleppey Finger', 'Erode Bulb', 'Salem Finger'] },
      { name: 'Coriander', origin: 'Rajasthan, Madhya Pradesh', desc: 'Aromatic coriander seeds prized for their citrusy fragrance and mild taste. Used in curries, marinades, and pickles globally.', grades: ['Eagle Grade', 'Scooter Grade'] },
      { name: 'Cumin Seeds', origin: 'Gujarat, Rajasthan', desc: 'Premium cumin seeds with high oil content and bold aroma. Essential in Indian, Middle Eastern, and Latin American cuisines.', grades: ['Singapore Quality', 'European Quality'] },
      { name: 'Black Pepper', origin: 'Kerala, Karnataka', desc: "Kerala's finest black pepper — the King of Spices — with rich pungency and bold flavour. Available whole and as ground powder.", grades: ['Garbled', 'Ungarbled', 'FAQ'] },
    ],
  },
  {
    key: 'sugar',
    label: 'Sugar',
    icon: <FaCandyCane className="text-yellow-500 text-xl" />,
    image: spices2,
    tagline: 'ICUMSA-certified sugar grades for global food & beverage industries.',
    items: [
      { name: 'Raw Sugar', origin: 'Maharashtra, Uttar Pradesh', desc: 'Unrefined raw cane sugar with natural molasses coating. Ideal for further refining or direct industrial use. Exported in bulk quantities.', grades: ['ICUMSA 600–1200', 'VHP Grade'] },
      { name: 'Refined White Sugar', origin: 'Pan India Mills', desc: 'ICUMSA 45 grade refined white sugar — the global gold standard for purity. Suitable for direct consumption, food processing, and beverages.', grades: ['ICUMSA 45', 'S-30'] },
      { name: 'Brown Sugar', origin: 'Kolhapur, Belgaum', desc: 'Soft, moist brown sugar with rich molasses flavour. Used in bakeries, confectioneries, and specialty foods. Food-grade packaging.', grades: ['Light Brown', 'Dark Brown'] },
    ],
  },
  {
    key: 'grains',
    label: 'Food Grains',
    icon: <GiWheat className="text-yellow-500 text-xl" />,
    image: spices4,
    tagline: 'Farm-to-ship food grains with guaranteed purity and traceability.',
    items: [
      { name: 'Rice', origin: 'Punjab, Haryana, West Bengal', desc: 'Premium Basmati and non-Basmati rice varieties. Long grain, aromatic, perfectly milled. Available in 1–25 kg and bulk packaging.', grades: ['1121 Basmati', 'PR-11', 'Sona Masoori'] },
      { name: 'Wheat', origin: 'Punjab, Madhya Pradesh', desc: 'High-protein Indian wheat for flour milling, bread making, and industrial food processing. Available as whole grain and cleaned lots.', grades: ['Sharbati', 'HI-8498', 'Lok-1'] },
      { name: 'Corn / Maize', origin: 'Karnataka, Andhra Pradesh', desc: 'Yellow and white maize of food and feed grade. Used in starch manufacturing, animal feed, ethanol production, and direct consumption.', grades: ['Yellow Maize', 'White Maize'] },
      { name: 'Sorghum (Jowar)', origin: 'Maharashtra, Karnataka', desc: 'Drought-resistant grain with high nutritional value. Used as food grain, animal feed, and biofuel feedstock. Available in bulk.', grades: ['Food Grade', 'Feed Grade'] },
    ],
  },
  {
    key: 'pulses',
    label: 'Pulses & Legumes',
    icon: <FaLeaf className="text-yellow-500 text-xl" />,
    image: spices5,
    tagline: 'Bulk-imported and locally sourced pulses for domestic and export markets.',
    items: [
      { name: 'Lentils (Masoor Dal)', origin: 'Canada, Australia', desc: 'Red and green lentils imported in bulk from Canada and Australia. High protein content, consistent sizing, and low moisture. Key staple for Indian and international markets.', grades: ['Red Split', 'Green Whole'] },
      { name: 'Faba Beans', origin: 'Australia, Ethiopia', desc: 'Large-seeded faba beans with excellent protein profile. Imported in bulk quantities and distributed to food processors and FMCG companies across India.', grades: ['Food Grade', 'Feed Grade'] },
      { name: 'Black Matpe (Urad)', origin: 'Myanmar, India', desc: 'Premium black matpe imported from Myanmar and sourced domestically. Widely used in South Indian cuisine — essential for idli, dosa, and papad manufacture.', grades: ['Myanmar Origin', 'Indian Urad'] },
      { name: 'Toor Dal (Pigeon Peas)', origin: 'Tanzania, Myanmar', desc: 'Yellow split pigeon peas imported in bulk from Tanzania and Myanmar. A staple protein source in Indian households. Exported with full phytosanitary certification.', grades: ['FAQ Grade', 'Bold Grade'] },
    ],
  },
];



const exportMarkets = ['Sri Lanka', 'Malaysia', 'Bangladesh', 'UAE', 'Singapore', 'Russia', 'Djibouti', 'Benin', 'Afghanistan'];
const importSources = ['Canada', 'Australia', 'Myanmar', 'Tanzania', 'Ethiopia'];

const AgriculturalProducts = () => {
  const [activeCategory, setActiveCategory] = useState('spices');
  const [activeImg, setActiveImg] = useState(null);
  const navigate = useNavigate();
  const active = categories.find(c => c.key === activeCategory);

  const galleryImages = [
    { src: spices1, label: 'Premium Spices' },
    { src: spices2, label: 'Sugar & Sweeteners' },
    { src: spices4, label: 'Food Grains' },
    { src: spices5, label: 'Pulses & Legumes' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[360px] w-full overflow-hidden">
        <img src={spices1} alt="Agricultural Products" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Agricultural <span className="text-yellow-400">Products</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            Premium quality spices, sugar, food grains, and pulses — sourced from India's finest growing regions and exported to global markets.
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

     

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Our Agri Division</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-5">
              From Farm to <span className="text-yellow-500">Global Markets</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dark Lines RK Pvt. Ltd. is a trusted trader and exporter of agricultural commodities with a robust network of verified farmers, processors, and logistics partners across India. We ensure traceability, consistent quality, and competitive pricing on every shipment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commodity portfolio spans spices, sugar, food grains, and pulses — catering to food processors, FMCG companies, wholesalers, and government procurement agencies across 15+ countries.
            </p>
            <ul className="space-y-3">
              {[
                'Direct farm sourcing with full traceability',
                'FSSAI, APEDA, and phytosanitary certified',
                'Export documentation & customs clearance support',
                'Flexible packaging — retail, bulk, and custom',
                'Competitive pricing with volume discounts',
                'Cold chain and ambient storage facilities',
              ].map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="text-yellow-500 mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={spices2} alt="Spices" className="w-full h-48 object-cover rounded-2xl shadow-md col-span-2" />
            <img src={spices4} alt="Grains" className="w-full h-40 object-cover rounded-2xl shadow-md" />
            <img src={spices5} alt="Pulses" className="w-full h-40 object-cover rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Product Range</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Commodity Portfolio</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">Select a category to explore our product offerings, origins, and available grades.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-yellow-400 text-black border-yellow-400 shadow-md'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-400 hover:text-yellow-600'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category Panel */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
            {/* Category Hero Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img src={active.image} alt={active.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-3xl font-extrabold text-white mb-2">{active.label}</h3>
                <p className="text-yellow-300 text-sm font-medium max-w-md">{active.tagline}</p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {active.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-yellow-400 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-base font-bold text-gray-800 flex items-center gap-2">
                      <FaCheckCircle className="text-yellow-400 shrink-0" />
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-yellow-600 font-semibold mb-2 flex items-center gap-1">
                    <FaGlobe className="text-xs" /> Origin: {item.origin}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.grades.map((g, gi) => (
                      <span key={gi} className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full">{g}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Global Reach</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Trade Network</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-yellow-400 transition">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <FaGlobe className="text-yellow-500 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Export Markets</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {exportMarkets.map((m, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:border-yellow-400 transition">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>{m}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-yellow-400 transition">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaLeaf className="text-green-500 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Import Sources</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {importSources.map((s, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full hover:border-green-400 transition">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>{s}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500">We import lentils, faba beans, black matpe, and toor dal in bulk for domestic distribution and re-export.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Gallery</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Our Product Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} onClick={() => setActiveImg(img)}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300">
                <img src={img.src} alt={img.label} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-semibold">{img.label}</span>
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
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ahmed Al Farsi', role: 'Food Importer, UAE', text: 'Consistent quality of dry red chillies and turmeric across 3 years of orders. Their documentation and phytosanitary compliance is impeccable.' },
              { name: 'Tan Wei Ming', role: 'Trader, Malaysia', text: 'Best-priced Basmati rice with excellent milling quality. Delivery schedules are always honoured and their team is very responsive.' },
              { name: 'Samuel Okafor', role: 'Distributor, Benin', text: 'We import sugar and pulses regularly. The ICUMSA grades are spot-on and the export documentation process is seamless.' },
            ].map((t, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <FaStar key={j} className="text-yellow-400 text-xs" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-14 px-6 text-center">
        <h3 className="text-3xl font-extrabold text-black mb-3">Looking for Bulk Orders or Export Partnerships?</h3>
        <p className="text-black/70 text-sm mb-7 max-w-lg mx-auto">
          Contact us for pricing, specifications, phytosanitary certification, and export documentation support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition">
            <FaPhoneAlt className="text-sm" /> Get in Touch
          </a>
          <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            ← Go Back
          </button>
        </div>
      </section>

    </div>
  );
};

export default AgriculturalProducts;
