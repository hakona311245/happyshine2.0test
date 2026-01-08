
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-red-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-red-600 font-heading">Happy Shine</span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Empowering the next generation with confidence, one smile and one word at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading underline decoration-red-600 decoration-2 underline-offset-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-500 hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-red-600 transition-colors">Our Story</Link></li>
              <li><Link to="/courses" className="text-slate-500 hover:text-red-600 transition-colors">Learning Path</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-red-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading underline decoration-red-600 decoration-2 underline-offset-4">Contact Details</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500">District 1 & District 7, Ho Chi Minh City</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500">+84 901 234 567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <span className="text-slate-500">hello@happyshine.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading underline decoration-red-600 decoration-2 underline-offset-4">Newsletter</h4>
            <p className="text-slate-500 mb-4">Get the latest tips for learning English at home!</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white border border-red-100 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Happy Shine English Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
