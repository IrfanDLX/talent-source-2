import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'jobseeker' | 'employer' | 'general';
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I create an account on Talent Source?',
    answer: 'Creating an account is simple and complimentary. Select "Sign Up" in the navigation, complete your professional information, and verify your email address. You can then enhance your profile and begin exploring opportunities immediately.',
    category: 'jobseeker'
  },
  {
    id: '2',
    question: 'Is Talent Source complimentary for job seekers?',
    answer: 'Yes, Talent Source is completely complimentary for job seekers. You can explore opportunities, submit applications, access career resources, and utilize all our professional tools without any cost.',
    category: 'jobseeker'
  },
  {
    id: '3',
    question: 'How do I apply for positions on the platform?',
    answer: 'Once you discover a position of interest, select "Apply" on the listing. You can apply using your Talent Source profile or submit a customized resume and cover letter for specific opportunities.',
    category: 'jobseeker'
  },
  {
    id: '4',
    question: 'Can I save positions to review later?',
    answer: 'Certainly. You can save positions to your favorites collection by selecting the heart icon on any listing. Access your saved opportunities anytime from your professional dashboard.',
    category: 'jobseeker'
  },
  {
    id: '5',
    question: 'What are the costs for posting positions?',
    answer: 'We offer flexible investment plans starting from $99 for a single position posting. We also provide monthly and annual plans for organizations with ongoing talent needs. Contact our partnership team for custom enterprise solutions.',
    category: 'employer'
  },
  {
    id: '6',
    question: 'How long do position postings remain active?',
    answer: 'Standard position postings remain active for 30 days. You can renew, modify, or remove your posting at any time through your employer dashboard.',
    category: 'employer'
  },
  {
    id: '7',
    question: 'Can I screen candidates before they apply?',
    answer: 'Yes, you can add qualifying questions to your position postings to filter candidates based on specific requirements, experience levels, or professional qualifications.',
    category: 'employer'
  },
  {
    id: '8',
    question: 'Do you offer recruitment services?',
    answer: 'Yes, we provide comprehensive recruitment solutions including candidate sourcing, professional screening, and interview coordination. Contact our recruitment specialists to learn more about our managed services.',
    category: 'employer'
  },
  {
    id: '9',
    question: 'How do you verify position postings and companies?',
    answer: 'We thoroughly vet all organizations and position postings to ensure authenticity. Our verification process includes company registration validation, contact verification, and ongoing quality monitoring.',
    category: 'general'
  },
  {
    id: '10',
    question: 'What distinguishes Talent Source from other platforms?',
    answer: 'Talent Source combines multiple opportunity sources in one sophisticated platform, offers personalized career guidance, provides advanced matching algorithms, and maintains a focus on quality with verified employers.',
    category: 'general'
  },
  {
    id: '11',
    question: 'How can I contact customer support?',
    answer: 'You can reach our support specialists via email at support@talentsource.com, phone at +1 (555) 123-4567, or through the contact form on our website. We typically respond within 24 hours.',
    category: 'general'
  },
  {
    id: '12',
    question: 'Do you offer mobile applications?',
    answer: 'Yes, we have mobile applications available for both iOS and Android. You can explore opportunities, apply, and manage your profile on the go. Download from the App Store or Google Play.',
    category: 'general'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<'all' | 'jobseeker' | 'employer' | 'general'>('all');

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const categories = [
    { key: 'all', label: 'All Questions', count: faqData.length },
    { key: 'jobseeker', label: 'Professionals', count: faqData.filter(item => item.category === 'jobseeker').length },
    { key: 'employer', label: 'Organizations', count: faqData.filter(item => item.category === 'employer').length },
    { key: 'general', label: 'General', count: faqData.filter(item => item.category === 'general').length }
  ];

  return (
    <section className="py-20 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="italic font-normal">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Find answers to common inquiries about our platform
          </p>
        </div>

        {/* Elegant Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 text-sm tracking-wide ${
                activeCategory === category.key
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Refined FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 rounded-2xl transition-colors"
              >
                <h3 className="text-lg font-light text-slate-900 pr-4 tracking-wide">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600" />
                  )}
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-slate-100 pt-6">
                    <p className="text-slate-600 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Elegant Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
              Need Additional <span className="italic font-normal">Assistance?</span>
            </h3>
            <p className="text-slate-300 mb-8 font-light leading-relaxed">
              Our dedicated support team is here to ensure your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
                Contact Support
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;