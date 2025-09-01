import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', { jobTitle, location });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center z-10">
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-white to-slate-200 rounded-2xl flex items-center justify-center diamond-shadow-xl sparkle-animation">
              <Sparkles className="h-10 w-10 text-slate-900" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight tracking-tight">
            Elite talent meets
            <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent italic font-normal">
              extraordinary
            </span>
            <br />
            opportunity
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover exclusive career opportunities with the world's most prestigious organizations
          </p>
        </div>

        {/* Luxury Search Interface */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="glass-diamond-strong rounded-3xl p-10 diamond-shadow-xl border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Briefcase className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or company"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all font-light backdrop-blur-sm"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <MapPin className="h-6 w-6 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Location or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all font-light backdrop-blur-sm"
                />
              </div>
              
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-10 py-5 rounded-2xl font-medium transition-all flex items-center justify-center gap-3 diamond-shadow-xl hover:scale-105 sparkle-animation"
              >
                <Search className="h-6 w-6" />
                Search Elite Roles
              </button>
            </div>
          </div>
        </div>

        {/* Luxury Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
            <div className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
              10,000+
            </div>
            <div className="text-slate-400 font-light text-lg">Exclusive positions</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-slate-400 font-light text-lg">Elite companies</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
              98%
            </div>
            <div className="text-slate-400 font-light text-lg">Success rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;