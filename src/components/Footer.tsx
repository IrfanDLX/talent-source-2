import React from 'react';
import { Mail, Phone, MapPin, Diamond, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-slate-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Luxury Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-200 rounded-xl mr-4 flex items-center justify-center diamond-shadow-lg sparkle-animation">
                  <Diamond className="h-6 w-6 text-slate-900" />
                </div>
                <span className="text-2xl font-serif text-white font-bold">
                  TalentSource
                </span>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed font-light text-lg">
              Connecting exceptional talent with extraordinary opportunities through refined professional excellence and unmatched luxury service.
            </p>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-white flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-white/60" />
              Job Seekers
            </h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Browse Elite Jobs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Executive Career Advice</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Premium Resume Builder</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Interview Mastery</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Success Stories</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-white flex items-center gap-3">
              <Diamond className="h-5 w-5 text-white/60" />
              Employers
            </h3>
            <ul className="space-y-5">
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Post Premium Jobs</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Find Elite Talent</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Executive Recruitment</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Luxury Pricing Plans</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-all font-light text-lg hover:translate-x-2">Employer Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-white">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-4 text-slate-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-slate-400 font-light text-lg group-hover:text-white transition-colors">support@talentsource.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 mr-4 text-slate-400 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-slate-400 font-light text-lg group-hover:text-white transition-colors">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-4 text-slate-400 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                <div className="text-slate-400 font-light text-lg group-hover:text-white transition-colors">
                  <div>123 Executive Plaza</div>
                  <div>San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-light text-lg">
              © 2025 TalentSource. All rights reserved.
            </p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white font-light text-lg transition-all hover:scale-105">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white font-light text-lg transition-all hover:scale-105">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white font-light text-lg transition-all hover:scale-105">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;