import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { mockData } from '../mock/data';

const Navigation = () => {
  const { logo, ctaButton, logButton } = mockData.navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToPage = (path) => {
    setIsMenuOpen(false);

    if (location.pathname === path) {
      // Ya estás en esa página ― solo scrollTop
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navega y luego hace scrollTop
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };


  const menuItems = [
    { label: 'Home', path: '/', scrollToTop: true },
    { label: 'About', path: '/about', scrollToTop: true },
    { label: 'Blog', path: '/blog', scrollToTop: true },
    { label: 'Contact', path: '/contact', scrollToTop: true }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  const handleBookingClick = () => {
    navigate('/booking');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={(e) => { e.preventDefault(); goToPage('/'); }} className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="h-auto max-h-16 w-auto max-w-[180px] object-contain"
            />
          </Link>




          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToPage(item.path)}
                className={`font-medium transition-colors duration-200 ${isActive(item.path) ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                  }`}
              >
                {item.label}
              </button>

            ))}

          </div>
          <div className="hidden md:flex items-center space-x-2">
            {/* Desktop CTA Button */}
            <Button
              onClick={handleBookingClick}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200"
            >
              {ctaButton}
            </Button>

            {/* Desktop Login Button */}
            <Button
              onClick={() => goToPage('/login')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2.5 rounded-md font-medium transition-colors duration-200"
            >
              {logButton}
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToPage(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-md font-medium transition-colors duration-200 ${isActive(item.path)
                  ? 'bg-teal-50 text-teal-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600'
                  }`}
              >
                {item.label}
              </button>

            ))}
            <div className="pt-2">
              <Button
                onClick={handleBookingClick}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                {ctaButton}
              </Button>
            </div>
            <div className="pt-2">
              <Button
                onClick={() => goToPage('/login')}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                {logButton}
              </Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;