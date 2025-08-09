import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import AboutImage from '../assets/images/abtimg.jpg';
import missionImg from '../assets/images/abt2.jpg';
import statsImage from '../assets/images/abt2.jpg';

const statsData = [
  { label: 'MT/Year Material Exported', endValue: 500000, suffix: '+', duration: 2000 },
  { label: 'Years of Experience', endValue: 20, suffix: '+', duration: 1500 },
  { label: 'Global Clients', endValue: 100, suffix: '+', duration: 1500 },
  { label: 'Supply Locations PAN India', endValue: 50, suffix: '+', duration: 1500 },
];

const Counter = ({ endValue, duration, suffix, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = endValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, endValue, duration]);

  return (
    <span className="text-5xl font-extrabold text-yellow-500 drop-shadow-sm">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-yellow-50 to-white py-20 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <img
          src={statsImage}
          alt="Company Stats"
          className="md:w-1/2 w-full rounded-2xl shadow-2xl object-cover"
        />

        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            UMA Exports in Numbers
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
              >
                <Counter
                  endValue={stat.endValue}
                  duration={stat.duration}
                  suffix={stat.suffix}
                  trigger={inView}
                />
                <p className="mt-3 text-sm text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = {
    mission: {
      title: 'Our Mission',
      content:
        'At Hitmix, our mission is to be the leading provider of premium-grade bitumen, offering efficient import-export solutions tailored to meet the infrastructure needs of growing economies. We strive to ensure timely deliveries, unmatched quality, and sustainable practices that empower progress around the globe.',
      src: missionImg,
    },
    vision: {
      title: 'Our Vision',
      content:
        'Our vision is to build a future where reliable bitumen supply chains support the growth of modern infrastructure worldwide. We aim to be recognized globally for our integrity, innovation, and impact.',
      src: missionImg,
    },
    team: {
      title: 'Our Team',
      content:
        'Our dedicated team of logistics experts, traders, and engineers bring decades of experience in global trade and road construction materials. With deep industry knowledge and a customer-first mindset, they drive Hitmix toward success and long-term partnerships.',
      src: missionImg,
    },
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] w-full">
        <img
          src={AboutImage}
          alt="Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">About Us</h1>
          <p className="text-xl mt-4">Empowering Roads, Empowering Progress</p>
          <p className="max-w-2xl mt-4 text-sm text-gray-200">
            At Hitmix, we are more than just a supplier of bitumen; we are your dedicated partner
            in building infrastructure that lasts.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-yellow-300 px-6">
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeTab === key
                  ? 'bg-white text-yellow-600 shadow-md'
                  : 'bg-yellow-200 text-gray-600 hover:bg-white'
              }`}
            >
              {tabs[key].title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex gap-6 p-8"
          >
            <img
              src={tabs[activeTab].src}
              alt={tabs[activeTab].title}
              className="md:w-1/2 w-full h-64 md:h-auto object-cover rounded-xl"
            />
            <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-yellow-600 mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{tabs[activeTab].content}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default About;