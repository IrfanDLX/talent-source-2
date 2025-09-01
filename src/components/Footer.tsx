import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Refined Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-3xl font-light text-white tracking-tight">
                Talent<span className="font-normal text-slate-400">Source</span>
              </span>
            </div>
            <p className="text-slate-300 mb-8 leading-relaxed font-light">
              Connecting exceptional talent with extraordinary opportunities through refined professional excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Professionals */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">Professionals</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Explore Opportunities</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Career Guidance</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Interview Excellence</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Professional Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Success Stories</a></li>
            </ul>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">Organizations</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Post Positions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Find Talent</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Recruitment Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Partnership Plans</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors font-light">Employer Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 font-light">support@talentsource.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-slate-400 flex-shrink-0" />
                <span className="text-slate-300 font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-slate-400 flex-shrink-0 mt-1" />
                <div className="text-slate-300 font-light">
                  <div>123 Business Avenue</div>
                  <div>San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm font-light">
              © 2024 Talent Source. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm font-light transition-colors">
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