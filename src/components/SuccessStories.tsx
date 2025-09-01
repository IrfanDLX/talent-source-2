import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { successStories } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Success <span className="italic font-normal">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Transformative career journeys made possible through excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 group"
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
                    <div className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 tracking-wide">
                      <TrendingUp className="h-4 w-4" />
                      Career Advancement
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center mb-6 text-sm">
                    <span className="text-slate-600 font-light">{story.beforeRole}</span>
                    <ArrowRight className="h-4 w-4 mx-3 text-slate-400" />
                    <span className="text-slate-900 font-medium">{story.afterRole}</span>
                  </div>
                  
                  <div className="text-lg font-medium text-slate-800 mb-4 tracking-wide">
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

        <div className="text-center mt-16">
          <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
            Explore More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;