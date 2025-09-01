import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Refined Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-3xl font-light text-slate-900 tracking-tight">
                Talent<span className="font-normal text-slate-600">Source</span>
              </span>
            </div>
          </div>

          {/* Elegant Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#jobs" className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
              Opportunities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#categories" className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Sophisticated CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-300">
              Sign In
            </button>
            <button className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
              Post Position
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Refined Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#jobs" className="block py-3 text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors">
                Opportunities
              </a>
              <a href="#categories" className="block py-3 text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors">
                Industries
              </a>
              <a href="#faq" className="block py-3 text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors">
                Support
              </a>
              <a href="#about" className="block py-3 text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors">
                About
              </a>
              <div className="border-t border-slate-100 pt-4 mt-4">
                <button className="block w-full text-left py-3 text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors">
                  Sign In
                </button>
                <button className="block w-full mt-3 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-black transition-colors">
                  Post Position
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;