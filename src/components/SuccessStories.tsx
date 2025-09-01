import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { successStories } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            Success stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Real career transformations made possible through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl refined-shadow hover:refined-shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 group"
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
                    <div className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full text-sm font-light flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Career growth
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center mb-6 text-sm">
                    <span className="text-gray-600 font-light">{story.beforeRole}</span>
                    <ArrowRight className="h-4 w-4 mx-3 text-gray-400" />
                    <span className="text-gray-900 font-medium">{story.afterRole}</span>
                  </div>
                  
                  <div className="text-gray-700 mb-4 font-light">
                    {story.company}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                    {story.story}
                  </p>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="font-light">Achieved in {story.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-8 py-3 rounded-lg font-light transition-all duration-300">
            More stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;