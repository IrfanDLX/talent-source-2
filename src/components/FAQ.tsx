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
    answer: 'Creating an account is simple and free. Click the "Sign Up" button in the top right corner, fill in your basic information, and verify your email address. You can then complete your profile and start applying to jobs immediately.',
    category: 'jobseeker'
  },
  {
    id: '2',
    question: 'Is Talent Source free to use for job seekers?',
    answer: 'Yes, Talent Source is completely free for job seekers. You can search jobs, apply to positions, access career resources, and use all our tools without any cost.',
    category: 'jobseeker'
  },
  {
    id: '3',
    question: 'How do I apply for jobs on the platform?',
    answer: 'Once you find a job you\'re interested in, click "Apply Now" on the job listing. You can apply with your Talent Source profile or upload a custom resume and cover letter for specific positions.',
    category: 'jobseeker'
  },
  {
    id: '4',
    question: 'Can I save jobs to apply later?',
    answer: 'Yes, you can save jobs to your favorites list by clicking the heart icon on any job listing. Access your saved jobs anytime from your dashboard.',
    category: 'jobseeker'
  },
  {
    id: '5',
    question: 'How much does it cost to post a job?',
    answer: 'We offer flexible pricing plans starting from $99 for a single job post. We also have monthly and annual plans for companies with regular hiring needs. Contact our sales team for custom enterprise solutions.',
    category: 'employer'
  },
  {
    id: '6',
    question: 'How long do job postings stay active?',
    answer: 'Standard job postings remain active for 30 days. You can renew, edit, or remove your posting at any time through your employer dashboard.',
    category: 'employer'
  },
  {
    id: '7',
    question: 'Can I screen candidates before they apply?',
    answer: 'Yes, you can add screening questions to your job postings to filter candidates based on specific requirements, experience levels, or qualifications.',
    category: 'employer'
  },
  {
    id: '8',
    question: 'Do you offer recruitment services?',
    answer: 'Yes, we provide full-service recruitment solutions including candidate sourcing, screening, and interview coordination. Contact our recruitment team to learn more about our managed services.',
    category: 'employer'
  },
  {
    id: '9',
    question: 'How do you verify job postings and companies?',
    answer: 'We thoroughly vet all companies and job postings to ensure legitimacy. Our verification process includes company registration checks, contact verification, and ongoing monitoring for quality assurance.',
    category: 'general'
  },
  {
    id: '10',
    question: 'What makes Talent Source different from other job boards?',
    answer: 'Talent Source combines multiple job sources in one platform, offers personalized career guidance, provides advanced matching algorithms, and maintains a focus on quality over quantity with verified employers.',
    category: 'general'
  },
  {
    id: '11',
    question: 'How can I contact customer support?',
    answer: 'You can reach our support team via email at support@talentsource.com, phone at +1 (555) 123-4567, or through the contact form on our website. We typically respond within 24 hours.',
    category: 'general'
  },
  {
    id: '12',
    question: 'Do you offer mobile apps?',
    answer: 'Yes, we have mobile apps available for both iOS and Android. You can search jobs, apply, and manage your profile on the go. Download from the App Store or Google Play.',
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
    { key: 'jobseeker', label: 'Job Seekers', count: faqData.filter(item => item.category === 'jobseeker').length },
    { key: 'employer', label: 'Employers', count: faqData.filter(item => item.category === 'employer').length },
    { key: 'general', label: 'General', count: faqData.filter(item => item.category === 'general').length }
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about using Talent Source
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeCategory === category.key
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
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
                <div className="px-6 pb-4">
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our support team is here to help you succeed. Get in touch for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
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