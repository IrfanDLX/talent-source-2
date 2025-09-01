import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Elegant Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white font-medium text-lg">T</span>
              </div>
              <span className="text-2xl font-serif text-slate-800">
                Talent<span className="text-slate-500 font-light">Source</span>
              </span>
            </div>
          </div>

          {/* Refined Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#jobs" className="text-slate-600 hover:text-slate-800 font-light transition-all duration-300 relative group py-2">
              Opportunities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#categories" className="text-slate-600 hover:text-slate-800 font-light transition-all duration-300 relative group py-2">
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#faq" className="text-slate-600 hover:text-slate-800 font-light transition-all duration-300 relative group py-2">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#about" className="text-slate-600 hover:text-slate-800 font-light transition-all duration-300 relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-800 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          </nav>

          {/* Sophisticated CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-800 font-light transition-all duration-300 px-4 py-2">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-3 rounded-full font-light transition-all duration-300 elegant-shadow hover:elegant-shadow-lg">
              Post Position
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-800 p-2 transition-colors rounded-full"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/30 glass-effect">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <a href="#jobs" className="block py-3 text-slate-600 hover:text-slate-800 font-light transition-colors rounded-lg hover:bg-white/50">
                Opportunities
              </a>
              <a href="#categories" className="block py-3 text-slate-600 hover:text-slate-800 font-light transition-colors rounded-lg hover:bg-white/50">
                Industries
              </a>
              <a href="#faq" className="block py-3 text-slate-600 hover:text-slate-800 font-light transition-colors rounded-lg hover:bg-white/50">
                Support
              </a>
              <a href="#about" className="block py-3 text-slate-600 hover:text-slate-800 font-light transition-colors rounded-lg hover:bg-white/50">
                About
              </a>
              <div className="border-t border-white/30 pt-4 mt-4 space-y-3">
                <button className="block w-full text-left py-3 text-slate-600 hover:text-slate-800 font-light transition-colors rounded-lg hover:bg-white/50">
                  Sign In
                </button>
                <button className="block w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-3 rounded-full font-light hover:from-slate-800 hover:to-slate-900 transition-all duration-300">
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