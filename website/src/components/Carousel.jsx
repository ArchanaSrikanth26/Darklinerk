import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image2 from '../assets/images/road2.jpg';
import image3 from '../assets/images/road3.jpg';
import image5 from '../assets/images/road5.jpeg';
import image1 from '../assets/images/img1.jpg';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: image2,
      title: 'The Best',
      subtitle: 'Agriculture Products',
      description: 'Spices, Sugar, Food Grains, Tea, Pulses, Agro Feeds.',
    },
    {
      id: 2,
      image: image3,
      title: 'Fresh & Organic',
      subtitle: 'From Farm to Table',
      description: 'Natural & Healthy Food Grains and Spices.',
    },
    {
      id: 3,
      image: image5,
      title: 'Premium Quality',
      subtitle: 'Exports Across The Globe',
      description: 'Delivering trust with quality products.',
    },
    {
      id: 4,
      image: image1,
      title: 'Premium Quality',
      subtitle: 'Exports Across The Globe',
      description: 'Delivering trust with quality products.',
    },
    {
      id: 5,
      image: image5,
      title: 'Premium Quality',
      subtitle: 'Exports Across The Globe',
      description: 'Delivering trust with quality products.',
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 7 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-xl md:text-2xl text-yellow-500 mb-2">{slide.title}</h3>
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
              {slide.subtitle}
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">{slide.description}</p>
            <a
              href="#products"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Our Products
            </a>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-yellow-500 transition duration-300"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-yellow-500 transition duration-300"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
