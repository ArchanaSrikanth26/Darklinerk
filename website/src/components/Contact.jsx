import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
                    <div className="bg-white p-6 text-center border border-gray-200 shadow-md rounded-lg transition-transform hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/FFA500/phone.png" alt="Phone Icon" className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+91-33-22811396/97</p>
                    </div>
                    <div className="bg-white p-6 text-center border border-gray-200 shadow-md rounded-lg transition-transform hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/FFA500/email.png" alt="Email Icon" className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-semibold text-gray-800">Email Us</p>
                        <p className="text-gray-600">info@umaexports.net.in</p>
                    </div>
                    <div className="bg-white p-6 text-center border border-gray-200 shadow-md rounded-lg transition-transform hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/FFA500/marker.png" alt="Primary Address Icon" className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-semibold text-gray-800">Primary Address</p>
                        <p className="text-gray-600">1/185, Phase-2, Sadayankuppam Village, Manali New Town, Chennai, 600103</p>
                    </div>
                    <div className="bg-white p-6 text-center border border-gray-200 shadow-md rounded-lg transition-transform hover:scale-105">
                        <img src="https://img.icons8.com/ios-filled/50/FFA500/marker.png" alt="Secondary Address Icon" className="w-10 h-10 mx-auto mb-2" />
                        <p className="font-semibold text-gray-800">Secondary Address</p>
                        <p className="text-gray-600">81/C Srinivasan St, Manali, Chennai, 600068</p>
                    </div>
                </div>

                {/* Map & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Google Map */}
                    <div className="w-full h-[400px] animate-slideUp">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.841297112162!2d80.2565122!3d13.1665717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52654eb6be20c5%3A0xe1b342575e92e372!2s81%2C+Srinivasan+St%2C+Vimlapuram%2C+Chinnasekkadu%2C+Manali%2C+Chennai%2C+Tamil+Nadu+600068!5e0!3m2!1sen!2sin!4v1722807925000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg animate-slideInRight">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                        <form>
                            {/* Full Name & Phone */}
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Full Name*"
                                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number*"
                                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            {/* Email & Subject */}
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Write A Message..."
                                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                rows="4"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-300"
                            >
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
