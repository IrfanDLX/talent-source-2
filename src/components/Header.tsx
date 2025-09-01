import React from 'react';
import { Menu, X, Diamond } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-diamond border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Luxury Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-slate-200 rounded-xl mr-4 flex items-center justify-center diamond-shadow-lg sparkle-animation">
                <Diamond className="h-5 w-5 text-slate-900" />
              </div>
              <span className="text-2xl font-serif text-white font-bold tracking-tight">
                TalentSource
              </span>
            </div>
          </div>

          {/* Premium Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#jobs" className="text-slate-300 hover:text-white font-light transition-all relative group py-2">
              Opportunities
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-slate-300 hover:text-white font-light transition-all relative group py-2">
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white font-light transition-all relative group py-2">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-slate-300 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Luxury CTA Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-slate-300 hover:text-white font-light transition-all hover:scale-105">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-8 py-3 rounded-xl font-medium transition-all diamond-shadow-lg hover:diamond-shadow-xl hover:scale-105 sparkle-animation">
              Post Job
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2 transition-all hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 glass-diamond-strong">
            <div className="px-4 pt-6 pb-8 space-y-2">
              <a href="#jobs" className="block py-4 text-slate-300 hover:text-white font-light transition-all">
                Opportunities
              </a>
              <a href="#about" className="block py-4 text-slate-300 hover:text-white font-light transition-all">
                About
              </a>
              <a href="#faq" className="block py-4 text-slate-300 hover:text-white font-light transition-all">
                Support
              </a>
              <div className="border-t border-white/10 pt-6 mt-6 space-y-4">
                <button className="block w-full text-left py-4 text-slate-300 hover:text-white font-light transition-all">
                  Sign In
                </button>
                <button className="block w-full bg-gradient-to-r from-white to-slate-100 text-slate-900 px-6 py-3 rounded-xl font-medium hover:from-slate-100 hover:to-white transition-all diamond-shadow-lg">
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