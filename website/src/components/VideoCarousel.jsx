import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import video1 from '../assets/images/video1.mp4';


const VideoCarousel = () => {
  const videos = [
    {
      id: 1,
      src: video1,
      title: 'Agriculture in Action',
      subtitle: 'Nurturing Nature',
      description: 'Experience how our products are grown and harvested.',
    },
    {
      id: 2,
      src: video1,
      title: 'Farm Fresh',
      subtitle: 'Straight from the Source',
      description: 'From the soil to your plate, naturally.',
    },
    {
      id: 3,
      src: video1,
      title: 'Export Quality',
      subtitle: 'Global Standards',
      description: 'Supplying the best across the world.',
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = videos.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Auto-slide every 10 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <video
            className="w-full h-full object-cover"
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-base sm:text-xl md:text-2xl text-yellow-500 mb-2">{video.title}</h3>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 px-2">
              {video.subtitle}
            </h1>
            <p className="text-white text-sm sm:text-base md:text-xl mb-6 px-4">{video.description}</p>
            <a
              href="#products"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Explore More
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

export default VideoCarousel;
