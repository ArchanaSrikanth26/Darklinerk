import React, { useState } from 'react';
import {
  FaPepperHot, FaCandyCane, FaCheckCircle, FaPhoneAlt
} from 'react-icons/fa';
import { GiCoconuts, GiWheat } from 'react-icons/gi';
import spices1 from '../assets/images/spices1.jpg';
import spices2 from '../assets/images/spices2.jpg';

const categoryIcons = {
  spices: <FaPepperHot className="text-yellow-500 text-xl" />,
  sugar: <FaCandyCane className="text-yellow-500 text-xl" />,
  grains: <GiWheat className="text-yellow-500 text-xl" />,
  coconut: <GiCoconuts className="text-yellow-500 text-xl" />,
};

// Images shown per category (spices uses real photos, others use spices as placeholder until replaced)
const categoryImages = {
  spices: [spices1, spices2],
  sugar: [spices1, spices2],
  grains: [spices1, spices2],
  coconut: [spices1, spices2],
};

const categories = [
  {
    key: 'spices',
    label: 'Spices',
    items: [
      { name: 'Dry Red Chillies', desc: 'Premium quality sun-dried red chillies sourced from top-growing regions in India. Known for their vibrant colour, rich heat, and intense flavour. Available in whole, crushed, and powder forms. Widely used in cuisines across Asia, the Middle East, and beyond.' },
      { name: 'Turmeric', desc: 'High-curcumin turmeric cultivated in fertile Indian soils. Offers deep golden colour and earthy aroma. Extensively used in culinary, pharmaceutical, and cosmetic industries. Exported as whole fingers, sliced, and fine powder.' },
      { name: 'Coriander', desc: 'Aromatic coriander seeds and powder sourced from Rajasthan and Madhya Pradesh. Prized for their citrusy fragrance and mild taste. Used as a key spice in curries, marinades, and pickles globally.' },
      { name: 'Cumin Seeds', desc: 'Premium cumin seeds with high oil content and bold aroma. Sourced from Gujarat and Rajasthan. Essential in Indian, Middle Eastern, and Latin American cuisines. Exported whole and as ground powder.' },
      { name: 'Pepper', desc: "Black, white, and green pepper sourced from Kerala's spice plantations. Known as the \"King of Spices,\" our pepper offers rich pungency and bold flavour. Available in whole berries and ground form for global culinary use." },
    ],
  },
  {
    key: 'sugar',
    label: 'Sugar',
    items: [
      { name: 'Raw Sugar', desc: 'Unrefined raw cane sugar with natural molasses coating. Sourced from leading sugar mills in Maharashtra and Uttar Pradesh. Ideal for further refining or direct industrial use. Exported in bulk quantities.' },
      { name: 'Refined White Sugar', desc: 'ICUMSA 45 grade refined white sugar — the global gold standard for purity and whiteness. Suitable for direct consumption, food processing, and beverage industries. Available in 50 kg bags and bulk containers.' },
      { name: 'Brown Sugar', desc: 'Soft, moist brown sugar with rich molasses flavour. Used in bakeries, confectioneries, and specialty foods. Exported in food-grade packaging to markets across Asia, Africa, and the Middle East.' },
    ],
  },
  {
    key: 'grains',
    label: 'Food Grains',
    items: [
      { name: 'Rice', desc: 'Premium Basmati and non-Basmati rice varieties sourced directly from farms in Punjab, Haryana, and West Bengal. Long grain, aromatic, and perfectly milled. Exported in 1 kg, 5 kg, 25 kg, and bulk packaging.' },
      { name: 'Wheat', desc: 'High-protein Indian wheat sourced from Punjab and Madhya Pradesh. Suitable for flour milling, bread making, and industrial food processing. Available as whole grain and cleaned lots.' },
      { name: 'Corn / Maize', desc: 'Yellow and white maize of food and feed grade. Sourced from Karnataka and Andhra Pradesh. Used in starch manufacturing, animal feed, ethanol production, and direct consumption.' },
      { name: 'Sorghum', desc: 'Drought-resistant grain with high nutritional value. Sourced from Maharashtra and Karnataka. Used as food grain, animal feed, and biofuel feedstock. Available in bulk export quantities.' },
    ],
  },
  {
    key: 'coconut',
    label: 'Coconut',
    items: [
      { name: 'Fresh Coconut', desc: 'Freshly harvested whole coconuts from Kerala and Tamil Nadu. Rich in natural water and white flesh. Exported to Middle East, Southeast Asia, and European markets in graded sizes.' },
      { name: 'Desiccated Coconut', desc: 'Finely shredded and dried coconut flesh with low moisture content. Widely used in bakery, confectionery, and chocolate industries. Available in fine, medium, and coarse grades.' },
      { name: 'Coconut Oil', desc: 'Cold-pressed and refined coconut oil with high lauric acid content. Used for cooking, cosmetics, and pharmaceuticals. Available as virgin coconut oil and RBD grades.' },
      { name: 'Coconut Shell Products', desc: 'Activated carbon, shell charcoal, and coir products derived from coconut shells. Eco-friendly industrial inputs used in water purification, air filtration, and horticulture.' },
    ],
  },
];

const AgriculturalProducts = () => {
  const [activeCategory, setActiveCategory] = useState('spices');
  const active = categories.find(c => c.key === activeCategory);
  const images = categoryImages[activeCategory];

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-yellow-400 py-16 px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Our Range</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mt-2">Agricultural Products</h1>
        <p className="mt-4 text-black/70 max-w-xl mx-auto text-sm">
          Premium quality agri-commodities sourced directly from India's finest growing regions, exported to global markets.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                {categoryIcons[cat.key]} {cat.label}
              </button>
            ))}
          </div>

          {/* Images — shown above content, no blur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${active.label} ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-72 object-cover rounded-2xl shadow-sm border border-gray-100"
              />
            ))}
          </div>

          {/* Category Title */}
          <div className="mb-8 flex items-center gap-3">
            {categoryIcons[active.key]}
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{active.label}</h2>
              <div className="w-12 h-1 bg-yellow-400 mt-2"></div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {active.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-400 text-base shrink-0" />
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-6 text-center border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Looking for Bulk Orders?</h3>
        <p className="text-gray-500 text-sm mb-6">Contact us for pricing, specifications, and export documentation.</p>
        <a href="/contact" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          <FaPhoneAlt className="text-sm" /> Get in Touch
        </a>
      </section>

    </div>
  );
};

export default AgriculturalProducts;
