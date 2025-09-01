import React from 'react';
import { partnerCompanies } from '../data/mockData';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 mb-6">
            Trusted by <span className="text-slate-600 italic">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Distinguished organizations that choose excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-8 bg-white/60 backdrop-blur-sm rounded-3xl hover:bg-white/80 elegant-shadow hover:elegant-shadow-lg transition-all duration-300 group border border-white/50 transform hover:-translate-y-2"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-12 text-white elegant-shadow-lg">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Join Our <span className="italic font-normal">Network</span>
            </h3>
            <p className="text-slate-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Partner with us to access exceptional talent and build extraordinary teams
            </p>
            <button className="bg-white text-slate-800 hover:bg-slate-100 px-12 py-4 rounded-full font-light transition-all duration-300 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;