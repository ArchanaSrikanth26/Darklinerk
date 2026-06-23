import React, { useState, useEffect, useRef } from 'react';
import AboutImage from '../assets/images/abtimg.jpg';
import missionImg from '../assets/images/abt2.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBullseye, FaGlobeAsia, FaUsers, FaTrophy, FaTruck, FaLeaf } from 'react-icons/fa';

const statsData = [
  { label: 'MT/Year Material Exported', endValue: 500000, suffix: '+', duration: 2000 },
  { label: 'Years of Experience', endValue: 20, suffix: '+', duration: 1500 },
  { label: 'Global Clients', endValue: 100, suffix: '+', duration: 1500 },
  { label: 'Supply Locations PAN India', endValue: 50, suffix: '+', duration: 1500 },
];

const useCountUp = (endValue, duration, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = endValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) { start = endValue; clearInterval(timer); }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, endValue, duration]);
  return count;
};

const StatCard = ({ label, endValue, suffix, duration, trigger }) => {
  const count = useCountUp(endValue, duration, trigger);
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-md transition-all duration-300">
      <span className="text-4xl font-extrabold text-yellow-500">{count.toLocaleString()}{suffix}</span>
      <p className="mt-3 text-sm text-gray-500 text-center font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
};

const tabs = [
  { key: 'mission', title: 'Our Mission', icon: <FaBullseye className="text-base" />, content: 'At Dark Lines RK Pvt. Ltd., our mission is to be the leading provider of premium-grade bitumen and construction materials, offering efficient solutions tailored to meet the infrastructure needs of growing economies. We ensure timely deliveries, unmatched quality, and sustainable practices that empower progress across India and beyond.' },
  { key: 'vision', title: 'Our Vision', icon: <FaGlobeAsia className="text-base" />, content: 'Our vision is to build a future where reliable supply chains support the growth of modern infrastructure. We aim to be recognized across India and globally for our integrity, innovation, and lasting impact on roads, buildings, and civil infrastructure.' },
  { key: 'team', title: 'Our Team', icon: <FaUsers className="text-base" />, content: 'Led by Director Manikandan Raj, our team of civil engineers, logistics experts, and trade specialists bring deep expertise across bitumen supply, agricultural commodities, interior works, and civil construction. We are committed to delivering quality and building long-term partnerships.' },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const activeData = tabs.find(t => t.key === activeTab);

  return (
    <div className="bg-white font-sans text-gray-800">

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[65vh] min-h-[320px] w-full overflow-hidden">
        <img src={AboutImage} alt="About UMA Exports" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-black/40 hover:bg-yellow-400 text-white hover:text-black text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300"
          >
            <FaArrowLeft /> Back
          </button>
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-yellow-400 border border-yellow-400/50 px-4 py-1 rounded-full">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            About <span className="text-yellow-400">Dark Lines RK</span>
          </h1>
          <p className="mt-4 max-w-xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-4">
            More than a supplier — your dedicated partner in building infrastructure that lasts.
          </p>
        </div>
      </section>

      {/* Intro Strip */}
      <section className="bg-yellow-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-black">Empowering Roads, Empowering Progress</h2>
            <p className="text-black/70 mt-1 text-sm max-w-lg">Over two decades of trusted bitumen supply across India and global markets.</p>
          </div>
          <a href="/contact" className="shrink-0 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-900 transition">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab.key
                    ? 'bg-yellow-400 text-black border-yellow-400'
                    : 'bg-white text-gray-500 border-gray-300 hover:border-yellow-400 hover:text-yellow-500'
                }`}
              >
                <span>{tab.icon}</span> {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[280px] sm:min-h-[320px] shadow-md">
            <div className="md:w-5/12 w-full">
              <img src={missionImg} alt={activeData.title} loading="lazy" className="w-full h-52 md:h-full object-cover" />
            </div>
            <div className="md:w-7/12 w-full p-6 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-4">
                <span className="w-8 h-0.5 bg-yellow-400 inline-block" />
                {activeData.title}
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-5">{activeData.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{activeData.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-black/60">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">Dark Lines RK in Numbers</h2>
            <p className="text-black/60 mt-3 max-w-md mx-auto text-sm">Two decades of operational excellence reflected in real results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((stat, idx) => (
              <StatCard key={idx} {...stat} trigger={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Why Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mt-2">Why Choose Dark Lines RK Pvt. Ltd.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <FaTrophy className="text-yellow-500 text-3xl" />, title: 'Premium Quality', desc: 'All materials meet strict international standards with certified quality checks at every stage.' },
              { icon: <FaTruck className="text-yellow-500 text-3xl" />, title: 'Reliable Delivery', desc: 'On-time logistics across India and international markets, backed by a proven supply chain.' },
              { icon: <FaLeaf className="text-yellow-500 text-3xl" />, title: 'Sustainable Practices', desc: 'We are committed to eco-friendly operations and responsible sourcing across our supply chain.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300">
                <div className="mb-5">{item.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
