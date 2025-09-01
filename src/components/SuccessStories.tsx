import React from 'react';
import { ArrowRight, Clock, TrendingUp, Crown } from 'lucide-react';
import { successStories } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <Crown className="h-8 w-8 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-balance">
            Success stories
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Extraordinary career transformations achieved through our exclusive platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="luxury-card rounded-3xl diamond-shadow-xl transition-all duration-500 overflow-hidden border border-white/10 hover:border-white/20 group"
            >
              <div className="md:flex h-full">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="md:w-3/5 p-10">
                  <div className="flex items-center mb-8">
                    <div className="bg-white/10 text-slate-300 px-4 py-2 rounded-full text-sm font-light flex items-center gap-3 border border-white/20">
                      <TrendingUp className="h-4 w-4" />
                      Elite transformation
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white mb-6">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center mb-8 text-lg">
                    <span className="text-slate-400 font-light">{story.beforeRole}</span>
                    <ArrowRight className="h-5 w-5 mx-4 text-white/60" />
                    <span className="text-white font-medium">{story.afterRole}</span>
                  </div>
                  
                  <div className="text-slate-300 mb-6 text-lg font-light">
                    {story.company}
                  </div>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed font-light">
                    {story.story}
                  </p>
                  
                  <div className="flex items-center text-slate-400">
                    <Clock className="h-5 w-5 mr-3" />
                    <span className="font-light">Achieved in {story.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button className="border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white px-10 py-4 rounded-xl font-light transition-all duration-500 hover:scale-105 diamond-shadow-lg">
            More success stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;