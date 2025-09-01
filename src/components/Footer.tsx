import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-lg mr-3 flex items-center justify-center">
                  <span className="text-gray-900 font-medium text-sm">T</span>
                </div>
                <span className="text-xl font-serif text-white">
                  TalentSource
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Connecting exceptional talent with extraordinary opportunities through refined professional excellence.
            </p>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-white">Job Seekers</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Resume Builder</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Interview Prep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Success Stories</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-white">Employers</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Post Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Find Talent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Recruitment Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-light">Employer Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 font-light">support@talentsource.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400 font-light">
                  <div>123 Business Avenue</div>
                  <div>San Francisco, CA 94105</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-light">
              © 2025 TalentSource. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
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