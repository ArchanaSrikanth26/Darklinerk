import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../assets/images/img4.jpeg";
import img2 from "../assets/images/img5.jpeg";
import img3 from "../assets/images/img6.jpeg";
import img4 from "../assets/images/img5.jpeg";
import img5 from "../assets/images/img4.jpeg";
import img6 from "../assets/images/img6.jpeg";
import img7 from "../assets/images/img6.jpeg";
import img8 from "../assets/images/img5.jpeg";
import img9 from "../assets/images/img4.jpeg";
import Carousel from './Carousel';

const Product = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Modified Bitumen",
      image: img1,
      description: "Modified Bitumen is an advanced road construction material enhanced with polymers such as Styrene-Butadiene-Styrene (SBS) or Atactic Polypropylene (APP). These additives significantly improve the material's elasticity, durability, and resistance to extreme temperatures and heavy traffic loads. It is ideal for high-performance applications like highways, airport runways, and bridge decks, offering enhanced fatigue resistance, reduced rutting, and extended pavement life. Modified Bitumen is also highly adaptable to various climates, making it a preferred choice for both hot and cold regions."
    },
    {
      id: 2,
      name: "Bitumen Emulsions",
      image: img2,
      description: "Bitumen Emulsions are a versatile, eco-friendly solution composed of bitumen, water, and an emulsifying agent, enabling application at ambient temperatures. This eliminates the need for heating, reducing energy consumption and emissions. They are widely used in road maintenance, surface dressing, tack coats, and cold mix asphalt applications. Their excellent adhesion properties ensure strong bonding between pavement layers, while their ease of use makes them suitable for small-scale repairs and large-scale projects alike. Available in various grades, they cater to specific project requirements."
    },
    {
      id: 3,
      name: "Micro Surfacing Emulsions (CQS)",
      image: img3,
      description: "Micro Surfacing Emulsions (Cationic Quick Set, CQS) are specialized emulsions designed for rapid-setting micro surfacing applications. These emulsions are formulated to provide superior skid resistance, seal existing pavement surfaces, and protect against water infiltration and oxidation. Ideal for high-traffic roads and preventive maintenance, CQS emulsions extend pavement life by filling cracks and improving surface texture. Their quick-setting nature allows for faster traffic reopening, minimizing disruptions, and their durability ensures long-lasting performance in demanding conditions."
    },
    {
      id: 4,
      name: "Viscosity Grade Bitumen",
      image: img4,
      description: "Viscosity Grade Bitumen is classified based on its viscosity at specific temperatures, ensuring consistent performance in road construction. It is primarily used in hot mix asphalt for paving roads, offering excellent workability and compaction properties. VG Bitumen grades (e.g., VG-10, VG-30, VG-40) are tailored for different climatic conditions and traffic loads, providing optimal flexibility, stability, and resistance to deformation. This makes it a reliable choice for constructing durable pavements in diverse environments, from urban roads to rural highways."
    },
    {
      id: 5,
      name: "Penetration Grade Bitumen",
      image: img5,
      description: "Penetration Grade Bitumen is categorized by its penetration value, which measures the hardness of the bitumen. It is widely used in road construction and asphalt paving due to its excellent binding properties and ability to withstand varying traffic and weather conditions. Common grades (e.g., 60/70, 80/100) are selected based on project requirements, ensuring optimal performance in terms of flexibility, durability, and resistance to cracking. This type of bitumen is a staple in infrastructure projects worldwide."
    },
    {
      id: 6,
      name: "Industrial Grade Mastic Bitumen",
      image: img6,
      description: "Industrial Grade Mastic Bitumen is a robust, semi-solid material used in industrial applications such as waterproofing, sealing, and joint filling. It is highly resistant to chemical exposure, moisture, and temperature fluctuations, making it ideal for roofing, tank linings, and bridge deck waterproofing. Its thick, viscous consistency allows it to fill gaps and create a durable, protective layer, ensuring long-term performance in harsh industrial environments. Mastic Bitumen is also used in pavement crack sealing for enhanced durability."
    },
    {
      id: 7,
      name: "Performance Grade Bitumen",
      image: img7,
      description: "Performance Grade (PG) Bitumen is engineered to meet specific performance criteria under varying climatic and traffic conditions. Developed under the Superpave system, PG Bitumen is tested for high- and low-temperature performance, ensuring resistance to rutting, fatigue, and thermal cracking. Grades like PG 64-22 or PG 76-10 are tailored for extreme conditions, making them suitable for heavy-duty pavements, airports, and high-traffic highways. Its advanced properties ensure superior durability and reduced maintenance costs."
    },
    {
      id: 8,
      name: "Cut Back Bitumen",
      image: img8,
      description: "Cut Back Bitumen is produced by blending bitumen with a volatile solvent to reduce viscosity, allowing for easier application at lower temperatures. It is commonly used in surface dressing, prime coats, and tack coats, providing excellent adhesion and penetration into pavement surfaces. Available in rapid, medium, and slow-curing grades (RC, MC, SC), it is versatile for various construction needs. Once the solvent evaporates, the bitumen hardens, forming a strong, durable layer for road surfaces."
    },
    {
      id: 9,
      name: "Other Products",
      image: img9,
      description: "Our range of other products includes specialized bitumen-based solutions such as bitumen paints, sealants, and membranes designed for niche applications. These products are used in waterproofing, corrosion protection, and pavement preservation, offering tailored solutions for unique project requirements. Formulated with high-quality materials, they provide excellent durability, flexibility, and resistance to environmental factors, ensuring reliable performance in construction, industrial, and maintenance applications."
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.4 }
    }
  };

  // Animation for button
  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#111827",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      < Carousel />
      {/* Hero Section */}
     

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Product Range
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {product.name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {product.description}
                  </motion.p>
                  <motion.button
                    className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 focus:outline-none"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Read More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Product;