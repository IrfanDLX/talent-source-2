import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { successStories } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 mb-6">
            Success <span className="text-slate-600 italic">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Transformative career journeys made possible through excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white/70 backdrop-blur-sm rounded-3xl elegant-shadow hover:elegant-shadow-lg transition-all duration-500 overflow-hidden border border-white/50 group transform hover:-translate-y-2"
            >
              <div className="md:flex h-full">
                <div className="md:w-2/5">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full text-sm font-light flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Career Advancement
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-slate-800 mb-4">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center mb-6 text-sm">
                    <span className="text-slate-600 font-light">{story.beforeRole}</span>
                    <ArrowRight className="h-4 w-4 mx-3 text-slate-400" />
                    <span className="text-slate-800 font-medium">{story.afterRole}</span>
                  </div>
                  
                  <div className="text-lg text-slate-700 mb-4 font-light">
                    {story.company}
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed font-light">
                    {story.story}
                  </p>
                  
                  <div className="flex items-center text-slate-500 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-light">Achieved in {story.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 px-12 py-4 rounded-full font-light transition-all duration-300 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105">
            Explore More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;