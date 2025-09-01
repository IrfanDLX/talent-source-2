import React from 'react';
import { partnerCompanies } from '../data/mockData';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Trusted by <span className="italic font-normal">Industry Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Distinguished organizations that choose excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
          {partnerCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 group border border-slate-100"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-slate-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-light text-white mb-6 tracking-tight">
              Join Our <span className="italic font-normal">Network</span>
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Partner with us to access exceptional talent and build extraordinary teams
            </p>
            <button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;