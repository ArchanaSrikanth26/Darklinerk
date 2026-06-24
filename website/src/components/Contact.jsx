import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">

        {/* Page Title */}
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-yellow-500">Reach Us</span>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-2">Contact Us</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { Icon: FaPhoneAlt, label: 'Phone', value: '+91 8148913511\n+91 90435 22639' },
            { Icon: FaEnvelope, label: 'Email Us', value: 'darklinesrkpvtltd2026@gmail.com' },
            { Icon: FaMapMarkerAlt, label: 'Address', value: 'No.1/182, Phase-2, Sadayankuppam Village, Manali New Town, Chennai – 600 103' },
            { Icon: FaUserTie, label: 'Director', value: 'Manikandan Raj' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 text-center border border-gray-200 shadow-sm rounded-lg hover:border-yellow-400 hover:shadow-md transition">
              <item.Icon className="text-yellow-500 text-3xl mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{item.label}</p>
              <p className="text-gray-500 text-sm whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2565!3d13.1665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA5JzU5LjciTiA4MMKwMTUnMjMuNCJF!5e0!3m2!1sen!2sin!4v1722807925000"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input type="text" placeholder="Full Name*" className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-yellow-400 placeholder-gray-400" />
                <input type="text" placeholder="Phone Number*" className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-yellow-400 placeholder-gray-400" />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input type="email" placeholder="Email Address*" className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-yellow-400 placeholder-gray-400" />
                <input type="text" placeholder="Subject" className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-yellow-400 placeholder-gray-400" />
              </div>
              <textarea placeholder="Write A Message..." className="w-full p-3 bg-white border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:border-yellow-400 placeholder-gray-400" rows="4" />
              <button type="submit" className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-300 transition duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
