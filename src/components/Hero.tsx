import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            Exceptional <span className="font-normal italic">Talent</span>
            <br />
            <span className="text-4xl md:text-6xl text-slate-300">Meets Opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Where distinguished professionals discover extraordinary career opportunities
          </p>

          {/* Elegant Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Position, company, or keywords"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 border-0 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-lg font-light"
                  />
                </div>
                
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Location or remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-14 pr-6 py-4 border-0 bg-slate-50 rounded-xl text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-lg font-light"
                  />
                </div>
                
                <button
                  onClick={handleSearch}
                  className="bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-xl text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-xl"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Refined Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-3">10,000+</div>
              <div className="text-slate-300 text-lg font-light tracking-wide">Premium Positions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-3">500+</div>
              <div className="text-slate-300 text-lg font-light tracking-wide">Elite Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-3">95%</div>
              <div className="text-slate-300 text-lg font-light tracking-wide">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;