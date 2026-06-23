import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaPhoneAlt, FaArrowRight, FaFlask, FaIndustry } from 'react-icons/fa';
import img1 from '../assets/images/img4.jpeg';
import img2 from '../assets/images/img5.jpeg';
import img3 from '../assets/images/img6.jpeg';
import road3 from '../assets/images/road3.jpg';
import road4 from '../assets/images/road4.jpeg';

const products = [
  {
    id: 1,
    name: 'Modified Bitumen',
    grade: 'SBS / APP Modified',
    image: img1,
    tag: 'Premium',
    description: 'Modified Bitumen is an advanced road construction material enhanced with polymers such as Styrene-Butadiene-Styrene (SBS) or Atactic Polypropylene (APP). These additives significantly improve the material\'s elasticity, durability, and resistance to extreme temperatures and heavy traffic loads.',
    longDesc: 'It is ideal for high-performance applications like highways, airport runways, and bridge decks, offering enhanced fatigue resistance, reduced rutting, and extended pavement life. Modified Bitumen is also highly adaptable to various climates, making it a preferred choice for both hot and cold regions worldwide.',
    applications: ['National & state highways', 'Airport runways & taxiways', 'Bridge deck waterproofing', 'High-traffic urban roads', 'Cold & hot climate regions'],
    specs: [
      { label: 'Penetration at 25°C', value: '40–60 dmm' },
      { label: 'Softening Point', value: '≥ 60°C' },
      { label: 'Elastic Recovery', value: '≥ 75%' },
      { label: 'Flash Point', value: '≥ 220°C' },
      { label: 'Ductility at 25°C', value: '≥ 40 cm' },
    ],
    packaging: ['Bulk tanker', '200L steel drums', 'Customized packaging'],
    standards: ['IS 15462', 'ASTM D5976', 'EN 14023'],
  },
  {
    id: 2,
    name: 'Bitumen Emulsions',
    grade: 'Cationic / Anionic',
    image: img2,
    tag: 'Eco-Friendly',
    description: 'Bitumen Emulsions are a versatile, eco-friendly solution composed of bitumen, water, and an emulsifying agent, enabling application at ambient temperatures. This eliminates the need for heating, reducing energy consumption and emissions.',
    longDesc: 'They are widely used in road maintenance, surface dressing, tack coats, and cold mix asphalt applications. Their excellent adhesion properties ensure strong bonding between pavement layers, while their ease of use makes them suitable for both small-scale repairs and large-scale infrastructure projects.',
    applications: ['Surface dressing & chip seal', 'Tack coat & prime coat', 'Cold mix asphalt production', 'Slurry seal applications', 'Fog seal & rejuvenation'],
    specs: [
      { label: 'Bitumen Content', value: '60–69%' },
      { label: 'Viscosity (SFS)', value: '20–100 sec' },
      { label: 'Particle Charge', value: 'Positive (Cationic)' },
      { label: 'Storage Stability', value: '≤ 1% (7 days)' },
      { label: 'Residue by Evaporation', value: '≥ 60%' },
    ],
    packaging: ['Bulk tanker', '200L drums', 'IBC containers'],
    standards: ['IS 8887', 'ASTM D977', 'EN 13808'],
  },
  {
    id: 3,
    name: 'Micro Surfacing Emulsions',
    grade: 'CQS Grade',
    image: img3,
    tag: 'Rapid Set',
    description: 'Micro Surfacing Emulsions (Cationic Quick Set, CQS) are specialized emulsions designed for rapid-setting micro surfacing applications. These emulsions provide superior skid resistance and seal existing pavement surfaces.',
    longDesc: 'Ideal for high-traffic roads and preventive maintenance, CQS emulsions extend pavement life by filling cracks and improving surface texture. Their quick-setting nature allows for faster traffic reopening, minimizing disruptions, and their durability ensures long-lasting performance in demanding conditions.',
    applications: ['Preventive pavement maintenance', 'Rutting correction on highways', 'High-traffic road preservation', 'Urban road resurfacing', 'Crack and defect sealing'],
    specs: [
      { label: 'Bitumen Content', value: '62–67%' },
      { label: 'Mix Time', value: '120–180 sec' },
      { label: 'Traffic Opening Time', value: '≤ 60 min' },
      { label: 'Wet Track Abrasion', value: '≤ 538 g/m²' },
      { label: 'Setting Rate', value: 'Quick Set (QS)' },
    ],
    packaging: ['Bulk tanker', '200L drums'],
    standards: ['ISSA TB-114', 'ASTM D6372', 'IRC SP-81'],
  },
  {
    id: 4,
    name: 'Viscosity Grade Bitumen',
    grade: 'VG-10 / VG-30 / VG-40',
    image: img1,
    tag: 'Most Popular',
    description: 'Viscosity Grade Bitumen is classified based on its viscosity at specific temperatures, ensuring consistent performance in road construction. It is primarily used in hot mix asphalt for paving roads across India.',
    longDesc: 'VG Bitumen grades (VG-10, VG-30, VG-40) are tailored for different climatic conditions and traffic loads, providing optimal flexibility, stability, and resistance to deformation. This makes it a reliable choice for constructing durable pavements in diverse environments, from urban roads to high-volume highways.',
    applications: ['Hot mix asphalt paving', 'National & state highways', 'Urban road networks', 'Industrial road construction', 'Airport aprons & taxiways'],
    specs: [
      { label: 'Absolute Viscosity at 60°C', value: 'VG-30: 2400–3600 Poise' },
      { label: 'Kinematic Viscosity at 135°C', value: '≥ 350 cSt' },
      { label: 'Penetration at 25°C', value: '45–80 dmm (VG-30)' },
      { label: 'Softening Point', value: '≥ 47°C' },
      { label: 'Flash Point', value: '≥ 220°C' },
    ],
    packaging: ['Bulk tanker', '200L drums', 'Poly-lined bags (solid)'],
    standards: ['IS 73:2013', 'ASTM D3381', 'BIS Certified'],
  },
  {
    id: 5,
    name: 'Penetration Grade Bitumen',
    grade: '60/70 · 80/100',
    image: img2,
    tag: 'Standard',
    description: 'Penetration Grade Bitumen is categorized by its penetration value, which measures the hardness of the bitumen. It is widely used in road construction and asphalt paving globally.',
    longDesc: 'Common grades (60/70, 80/100) are selected based on project requirements, ensuring optimal performance in terms of flexibility, durability, and resistance to cracking. This type of bitumen is a staple in infrastructure projects worldwide and is widely available with consistent quality.',
    applications: ['Road base & surface courses', 'Asphalt concrete paving', 'Pavement rehabilitation', 'Waterproofing applications', 'General construction use'],
    specs: [
      { label: 'Penetration at 25°C', value: '60–70 dmm (60/70 grade)' },
      { label: 'Softening Point', value: '49–56°C' },
      { label: 'Ductility at 27°C', value: '≥ 75 cm' },
      { label: 'Flash Point', value: '≥ 220°C' },
      { label: 'Specific Gravity at 27°C', value: '1.01–1.06' },
    ],
    packaging: ['Bulk tanker', '200L drums', 'Customized'],
    standards: ['IS 73', 'ASTM D946', 'BS EN 12591'],
  },
  {
    id: 6,
    name: 'Industrial Mastic Bitumen',
    grade: 'Industrial Grade',
    image: img3,
    tag: 'Industrial',
    description: 'Industrial Grade Mastic Bitumen is a robust, semi-solid material used in industrial applications such as waterproofing, sealing, and joint filling. Highly resistant to chemical exposure and moisture.',
    longDesc: 'Its thick, viscous consistency allows it to fill gaps and create a durable protective layer, ensuring long-term performance in harsh industrial environments. Mastic Bitumen is also used in pavement crack sealing, providing excellent adhesion and durability against temperature extremes.',
    applications: ['Industrial roofing & waterproofing', 'Underground pipeline coating', 'Tank & reservoir lining', 'Bridge deck protection', 'Expansion joint filling'],
    specs: [
      { label: 'Softening Point', value: '≥ 55°C' },
      { label: 'Penetration at 25°C', value: '10–40 dmm' },
      { label: 'Viscosity at 180°C', value: '1–3 Pa·s' },
      { label: 'Chemical Resistance', value: 'High (pH 2–12)' },
      { label: 'Temperature Range', value: '-10°C to +90°C' },
    ],
    packaging: ['25 kg blocks', '50 kg drums', 'Bulk supply'],
    standards: ['IS 702', 'ASTM D312', 'EN 13970'],
  },
  {
    id: 7,
    name: 'Performance Grade Bitumen',
    grade: 'PG 64-22 / PG 76-10',
    image: img1,
    tag: 'High Performance',
    description: 'Performance Grade (PG) Bitumen is engineered to meet specific performance criteria under varying climatic and traffic conditions. Developed under the Superpave system for precision paving.',
    longDesc: 'Grades like PG 64-22 or PG 76-10 are tailored for extreme conditions, making them suitable for heavy-duty pavements, airports, and high-traffic highways. Its advanced properties ensure superior durability and significantly reduced maintenance costs over the pavement lifecycle.',
    applications: ['Heavy-duty national highways', 'Airport runways & aprons', 'Extreme temperature climates', 'High-volume traffic roads', 'Long-life pavement design'],
    specs: [
      { label: 'High Temp Grade', value: 'PG 64 / PG 76' },
      { label: 'Low Temp Grade', value: '-10 / -22' },
      { label: 'G*/sin δ (RTFO)', value: '≥ 2.20 kPa' },
      { label: 'Phase Angle δ', value: '< 75°' },
      { label: 'Creep Stiffness', value: '≤ 300 MPa' },
    ],
    packaging: ['Bulk tanker', '200L drums'],
    standards: ['AASHTO M320', 'ASTM D6373', 'Superpave Spec'],
  },
  {
    id: 8,
    name: 'Cut Back Bitumen',
    grade: 'RC / MC / SC',
    image: img2,
    tag: 'Specialty',
    description: 'Cut Back Bitumen is produced by blending bitumen with a volatile solvent to reduce viscosity, allowing for easier application at lower temperatures without heating equipment.',
    longDesc: 'Available in rapid, medium, and slow-curing grades (RC, MC, SC), it is versatile for various construction needs. Once the solvent evaporates, the bitumen hardens to form a strong, durable layer. Widely used in regions with cold climates or where heating equipment is unavailable.',
    applications: ['Prime coat for base courses', 'Tack coat between layers', 'Surface dressing operations', 'Cold-weather road construction', 'Rural road maintenance'],
    specs: [
      { label: 'Kinematic Viscosity', value: 'Grade dependent (RC/MC/SC)' },
      { label: 'Flash Point', value: 'RC: 27°C / MC: 38°C / SC: 66°C' },
      { label: 'Distillation Residue', value: '≥ 65–80%' },
      { label: 'Penetration of Residue', value: '80–120 dmm' },
      { label: 'Solvent Type', value: 'Naphtha / Kerosene / Diesel' },
    ],
    packaging: ['200L drums', 'Bulk tanker', 'IBC containers'],
    standards: ['IS 217', 'ASTM D2028', 'BS 3690'],
  },
  {
    id: 9,
    name: 'Bitumen Specialty Products',
    grade: 'Custom Grades',
    image: img3,
    tag: 'Custom',
    description: 'Our specialty range includes bitumen-based paints, sealants, waterproofing membranes, and corrosion protection coatings designed for unique and demanding application scenarios.',
    longDesc: 'Formulated with high-quality materials, they provide excellent durability, flexibility, and resistance to environmental factors, ensuring reliable performance in construction, industrial, and maintenance applications. Custom grades are available on request for specific project requirements.',
    applications: ['Bitumen-based waterproofing paint', 'Anti-corrosion pipe coatings', 'Roofing felt & membrane', 'Foundation damp-proofing', 'Structural crack sealants'],
    specs: [
      { label: 'Solid Content', value: '≥ 60%' },
      { label: 'Drying Time', value: '2–4 hours (surface dry)' },
      { label: 'Water Resistance', value: 'Excellent' },
      { label: 'Temperature Resistance', value: '-5°C to +80°C' },
      { label: 'Coverage', value: '1–1.5 L/m² per coat' },
    ],
    packaging: ['5L / 20L / 200L containers', 'Custom packaging'],
    standards: ['IS 9918', 'ASTM D41', 'Custom specs available'],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const related = products.filter(p => p.id !== parseInt(id)).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Product not found.</p>
          <button onClick={() => navigate('/products/bitumen')} className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:bg-yellow-300 transition">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigate('/')} className="hover:text-yellow-600 transition">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/products/bitumen')} className="hover:text-yellow-600 transition">Bitumen Products</button>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Hero Detail */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-96 object-cover rounded-2xl border-2 border-yellow-400 shadow-lg"
              />
              <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {product.tag}
              </span>
              <span className="absolute bottom-4 right-4 bg-black/70 text-yellow-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                {product.grade}
              </span>
            </div>

            {/* Info */}
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Bitumen Product</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2 mb-2">{product.name}</h1>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mb-5"></div>
              <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">{product.longDesc}</p>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Key Applications</h3>
                <ul className="space-y-2">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <FaCheckCircle className="text-yellow-500 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Available Packaging</h3>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg, i) => (
                    <span key={i} className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition">
                  <FaPhoneAlt className="text-sm" /> Request Quote
                </a>
                <button
                  onClick={() => navigate('/products/bitumen')}
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-yellow-400 hover:text-yellow-600 transition"
                >
                  <FaArrowLeft className="text-sm" /> All Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FaFlask className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-extrabold text-gray-800">Technical Specifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-yellow-400 transition">
                <span className="text-sm font-medium text-gray-600">{spec.label}</span>
                <span className="text-sm font-bold text-gray-800 bg-yellow-50 px-3 py-1 rounded-full">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <FaIndustry className="text-yellow-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-gray-700 mb-1">Applicable Standards</p>
              <div className="flex flex-wrap gap-2">
                {product.standards.map((std, i) => (
                  <span key={i} className="text-xs bg-white border border-yellow-300 text-yellow-700 font-semibold px-3 py-1 rounded-full">{std}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4">
                  <span className="text-xs text-yellow-600 font-semibold">{p.grade}</span>
                  <h4 className="text-sm font-bold text-gray-800 mt-1 mb-2 group-hover:text-yellow-600 transition">{p.name}</h4>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-semibold group-hover:gap-2 transition-all">
                    View Details <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 py-12 px-6 text-center">
        <h3 className="text-2xl font-extrabold text-black mb-2">Interested in {product.name}?</h3>
        <p className="text-black/70 text-sm mb-6 max-w-md mx-auto">Get a detailed quote, technical datasheet, or schedule a consultation with our product team.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-gray-900 transition">
            <FaPhoneAlt className="text-sm" /> Get a Quote
          </a>
          <a href="tel:+918148913511" className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition">
            +91 8148913511
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;
