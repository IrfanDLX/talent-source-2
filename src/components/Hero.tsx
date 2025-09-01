import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 mb-8 leading-[0.9] text-balance">
            Where talent meets
            <br />
            <span className="text-gray-500 italic font-normal">opportunity</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover exceptional career opportunities with the world's most innovative companies
          </p>
        </div>

        {/* Refined Search Interface */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 refined-shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or company"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Location or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all font-light"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-light transition-colors flex items-center justify-center gap-2 refined-shadow"
              >
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-500 font-light">Active positions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">500+</div>
            <div className="text-gray-500 font-light">Partner companies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">95%</div>
            <div className="text-gray-500 font-light">Success rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;