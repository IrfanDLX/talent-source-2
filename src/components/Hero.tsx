import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-slate-100/40 to-gray-100/40 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-800 mb-6 leading-tight">
            Where Talent
            <br />
            <span className="text-slate-600 italic">Meets Destiny</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover extraordinary opportunities crafted for exceptional professionals
          </p>
        </div>

        {/* Elegant Search Interface */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-effect rounded-3xl p-8 elegant-shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Position, company, or keywords"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 border-0 bg-white/70 rounded-2xl text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all text-lg font-light elegant-shadow"
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
                  className="w-full pl-14 pr-6 py-5 border-0 bg-white/70 rounded-2xl text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-slate-400 focus:bg-white transition-all text-lg font-light elegant-shadow"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-light transition-all duration-300 flex items-center justify-center gap-3 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105"
              >
                <Search className="h-5 w-5" />
                Discover
              </button>
            </div>
          </div>
        </div>

        {/* Refined Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-serif text-slate-700 mb-2 group-hover:text-slate-800 transition-colors">10,000+</div>
            <div className="text-slate-500 font-light">Premium Positions</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-serif text-slate-700 mb-2 group-hover:text-slate-800 transition-colors">500+</div>
            <div className="text-slate-500 font-light">Elite Companies</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-serif text-slate-700 mb-2 group-hover:text-slate-800 transition-colors">95%</div>
            <div className="text-slate-500 font-light">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;