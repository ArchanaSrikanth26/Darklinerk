import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRoad, FaWater, FaLayerGroup, FaTachometerAlt,
  FaChartLine, FaIndustry, FaStar, FaCut, FaBoxOpen, FaArrowRight
} from 'react-icons/fa';
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
    { id: 1, name: "Modified Bitumen", icon: <FaRoad className="text-yellow-500 text-2xl" />, image: img1, description: "Modified Bitumen is an advanced road construction material enhanced with polymers such as SBS or APP. Improves elasticity, durability, and resistance to extreme temperatures and heavy traffic. Ideal for highways, airport runways, and bridge decks." },
    { id: 2, name: "Bitumen Emulsions", icon: <FaWater className="text-yellow-500 text-2xl" />, image: img2, description: "Versatile, eco-friendly emulsion composed of bitumen, water, and an emulsifying agent. Applied at ambient temperatures. Used in road maintenance, surface dressing, tack coats, and cold mix asphalt applications." },
    { id: 3, name: "Micro Surfacing Emulsions (CQS)", icon: <FaLayerGroup className="text-yellow-500 text-2xl" />, image: img3, description: "Specialized cationic quick-set emulsions for rapid-setting micro surfacing. Provides superior skid resistance, seals pavement surfaces, and protects against water infiltration and oxidation." },
    { id: 4, name: "Viscosity Grade Bitumen", icon: <FaTachometerAlt className="text-yellow-500 text-2xl" />, image: img4, description: "Classified by viscosity at specific temperatures. Used in hot mix asphalt for paving roads. VG grades (VG-10, VG-30, VG-40) are tailored for different climates and traffic loads." },
    { id: 5, name: "Penetration Grade Bitumen", icon: <FaChartLine className="text-yellow-500 text-2xl" />, image: img5, description: "Categorized by penetration value measuring bitumen hardness. Common grades (60/70, 80/100) used in road construction and asphalt paving worldwide for optimal flexibility and durability." },
    { id: 6, name: "Industrial Grade Mastic Bitumen", icon: <FaIndustry className="text-yellow-500 text-2xl" />, image: img6, description: "Robust semi-solid material for waterproofing, sealing, and joint filling. Highly resistant to chemicals, moisture, and temperature fluctuations. Used in roofing, tank linings, and bridge deck waterproofing." },
    { id: 7, name: "Performance Grade Bitumen", icon: <FaStar className="text-yellow-500 text-2xl" />, image: img7, description: "Engineered under the Superpave system for specific climatic and traffic performance. Grades like PG 64-22 resist rutting, fatigue, and thermal cracking on heavy-duty pavements and airports." },
    { id: 8, name: "Cut Back Bitumen", icon: <FaCut className="text-yellow-500 text-2xl" />, image: img8, description: "Bitumen blended with volatile solvent to reduce viscosity for easy low-temperature application. Used in surface dressing, prime coats, and tack coats. Available in RC, MC, and SC grades." },
    { id: 9, name: "Other Products", icon: <FaBoxOpen className="text-yellow-500 text-2xl" />, image: img9, description: "Specialized bitumen-based solutions including paints, sealants, and membranes for waterproofing, corrosion protection, and pavement preservation." },
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
    <div className="min-h-screen bg-white">
      <Carousel />
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
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md hover:border-yellow-400 transition-all duration-300"
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
                  <div className="flex items-center gap-3 mb-3">
                    {product.icon}
                    <motion.h3
                      className="text-lg font-semibold text-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {product.name}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-gray-500 text-sm leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {product.description}
                  </motion.p>
                  <motion.button
                    className="flex items-center gap-2 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 focus:outline-none"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Read More <FaArrowRight className="text-xs" />
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