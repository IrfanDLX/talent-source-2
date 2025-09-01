import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-subtle border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Refined Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-900 rounded-lg mr-3 flex items-center justify-center">
                <span className="text-white font-medium text-sm">T</span>
              </div>
              <span className="text-xl font-serif text-gray-900">
                TalentSource
              </span>
            </div>
          </div>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#jobs" className="text-gray-600 hover:text-gray-900 font-light transition-colors relative group py-2">
              Opportunities
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-light transition-colors relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 font-light transition-colors relative group py-2">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Minimal CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900 font-light transition-colors">
              Sign In
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-light transition-colors refined-shadow">
              Post Job
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100/50 glass-subtle">
            <div className="px-4 pt-4 pb-6 space-y-1">
              <a href="#jobs" className="block py-3 text-gray-600 hover:text-gray-900 font-light transition-colors">
                Opportunities
              </a>
              <a href="#about" className="block py-3 text-gray-600 hover:text-gray-900 font-light transition-colors">
                About
              </a>
              <a href="#faq" className="block py-3 text-gray-600 hover:text-gray-900 font-light transition-colors">
                Support
              </a>
              <div className="border-t border-gray-100/50 pt-4 mt-4 space-y-3">
                <button className="block w-full text-left py-3 text-gray-600 hover:text-gray-900 font-light transition-colors">
                  Sign In
                </button>
                <button className="block w-full bg-gray-900 text-white px-6 py-2.5 rounded-lg font-light hover:bg-gray-800 transition-colors">
                  Post Job
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