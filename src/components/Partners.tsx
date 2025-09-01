import React from 'react';
import { partnerCompanies } from '../data/mockData';
import { Building, Handshake } from 'lucide-react';

const Partners: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <Building className="h-8 w-8 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
          </h2>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-balance">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Join the world's most prestigious companies in their pursuit of exceptional talent
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center mb-24">
          {partnerCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-8 luxury-card rounded-2xl hover:scale-105 transition-all duration-500 group border border-white/10 hover:border-white/20 diamond-shadow-lg"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-500 filter brightness-0 invert"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-diamond-strong rounded-3xl p-16 text-white diamond-shadow-xl border border-white/20">
            <div className="flex justify-center mb-8">
              <Handshake className="h-12 w-12 text-white/80" />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 text-balance">
            </h3>
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 text-balance">
              Partner with excellence
            </h3>
            <p className="text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Access the world's most exceptional talent and build extraordinary teams through our exclusive platform
            </p>
            <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-12 py-4 rounded-xl font-medium transition-all diamond-shadow-xl hover:scale-105 sparkle-animation">
              Become an elite partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;