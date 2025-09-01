import React from 'react';
import { partnerCompanies } from '../data/mockData';

const Partners: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Join companies that choose excellence in talent acquisition
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:bg-gray-50 refined-shadow hover:refined-shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gray-900 rounded-2xl p-12 text-white refined-shadow-xl">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 text-balance">
              Partner with us
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Access exceptional talent and build extraordinary teams through our platform
            </p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-light transition-colors refined-shadow">
              Become a partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;