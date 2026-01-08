
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Courses', to: '/courses' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-red-600 p-2 rounded-xl">
              <Sun className="h-8 w-8 text-white animate-pulse" />
            </div>
            <span className="text-2xl font-bold text-red-600 font-heading tracking-tight">
              Happy Shine
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-slate-600 hover:text-red-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/enroll" 
              className="bg-red-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-red-50 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block text-slate-600 hover:text-red-600 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/enroll"
            className="block text-center w-full bg-red-600 text-white py-3 rounded-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
