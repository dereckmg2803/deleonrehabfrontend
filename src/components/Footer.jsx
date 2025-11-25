import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1d23] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-auto max-h-16 w-auto max-w-[180px] object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Licensed healthcare provider specializing in home-based physical therapy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-teal-400 transition-colors duration-200">About</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors duration-200">Services</a></li>
              <li><a href="#blog" className="hover:text-teal-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Orthopedic Rehabilitation</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Neurological Therapy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Post-Surgical Care</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Pain Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>South Florida</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@deleonrehab.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} De Leon Rehab Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;