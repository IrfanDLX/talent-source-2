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
    question: 'How do I create an account?',
    answer: 'Creating an account is simple and free. Click "Sign Up" in the navigation, fill in your professional details, and verify your email address. You can then complete your profile and start exploring opportunities.',
    category: 'jobseeker'
  },
  {
    id: '2',
    question: 'Is TalentSource free for job seekers?',
    answer: 'Yes, TalentSource is completely free for job seekers. You can browse jobs, apply to positions, access career resources, and use all our tools without any cost.',
    category: 'jobseeker'
  },
  {
    id: '3',
    question: 'How do I apply for jobs?',
    answer: 'Once you find a job you\'re interested in, click "Apply" on the job listing. You can apply with your TalentSource profile or upload a custom resume and cover letter for specific positions.',
    category: 'jobseeker'
  },
  {
    id: '4',
    question: 'Can I save jobs for later?',
    answer: 'Yes, you can save jobs to your favorites by clicking the heart icon on any job listing. Access your saved jobs anytime from your dashboard.',
    category: 'jobseeker'
  },
  {
    id: '5',
    question: 'What does it cost to post a job?',
    answer: 'We offer flexible pricing plans starting from $99 for a single job posting. We also have monthly and annual plans for companies with ongoing hiring needs. Contact our team for enterprise pricing.',
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
    answer: 'Yes, we provide full recruitment services including candidate sourcing, screening, and interview coordination. Contact our recruitment team to learn more about our managed services.',
    category: 'employer'
  },
  {
    id: '9',
    question: 'How do you verify job postings?',
    answer: 'We thoroughly vet all companies and job postings to ensure legitimacy. Our verification process includes company registration checks, contact verification, and ongoing quality monitoring.',
    category: 'general'
  },
  {
    id: '10',
    question: 'What makes TalentSource different?',
    answer: 'TalentSource aggregates opportunities from multiple sources, offers personalized career guidance, provides advanced matching algorithms, and maintains a focus on quality with verified employers.',
    category: 'general'
  },
  {
    id: '11',
    question: 'How can I contact support?',
    answer: 'You can reach our support team via email at support@talentsource.com, phone at +1 (555) 123-4567, or through our contact form. We typically respond within 24 hours.',
    category: 'general'
  },
  {
    id: '12',
    question: 'Do you have mobile apps?',
    answer: 'Yes, we have mobile apps for both iOS and Android. You can browse jobs, apply, and manage your profile on the go. Download from the App Store or Google Play.',
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
    { key: 'all', label: 'All', count: faqData.length },
    { key: 'jobseeker', label: 'Job Seekers', count: faqData.filter(item => item.category === 'jobseeker').length },
    { key: 'employer', label: 'Employers', count: faqData.filter(item => item.category === 'employer').length },
    { key: 'general', label: 'General', count: faqData.filter(item => item.category === 'general').length }
  ];

  return (
    <section className="py-32 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-gray-700" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Find answers to common questions about our platform
          </p>
        </div>

        {/* Clean Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`px-6 py-3 rounded-lg font-light transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-gray-900 text-white refined-shadow'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Clean FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 refined-shadow hover:refined-shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-serif text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Clean Contact Support */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Our support team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-light transition-colors refined-shadow">
                Contact support
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-8 py-3 rounded-lg font-light transition-all duration-300">
                Live chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;