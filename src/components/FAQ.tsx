import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Gem } from 'lucide-react';

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
    answer: 'Creating an account is simple and exclusive. Click "Sign Up" in the navigation, fill in your professional details, and verify your email address. You can then complete your profile and start exploring elite opportunities.',
    category: 'jobseeker'
  },
  {
    id: '2',
    question: 'Is TalentSource free for job seekers?',
    answer: 'Yes, TalentSource is completely free for job seekers. You can browse jobs, apply to positions, access career resources, and use all our premium tools without any cost.',
    category: 'jobseeker'
  },
  {
    id: '3',
    question: 'How do I apply for jobs?',
    answer: 'Once you find a position you\'re interested in, click "Apply" on the job listing. You can apply with your TalentSource profile or upload a custom resume and cover letter for specific positions.',
    category: 'jobseeker'
  },
  {
    id: '4',
    question: 'Can I save jobs for later?',
    answer: 'Yes, you can save jobs to your favorites by clicking the heart icon on any job listing. Access your saved jobs anytime from your premium dashboard.',
    category: 'jobseeker'
  },
  {
    id: '5',
    question: 'What does it cost to post a job?',
    answer: 'We offer exclusive pricing plans starting from $199 for a single premium job posting. We also have monthly and annual plans for companies with ongoing hiring needs. Contact our team for enterprise pricing.',
    category: 'employer'
  },
  {
    id: '6',
    question: 'How long do job postings stay active?',
    answer: 'Premium job postings remain active for 30 days with enhanced visibility. You can renew, edit, or remove your posting at any time through your executive dashboard.',
    category: 'employer'
  },
  {
    id: '7',
    question: 'Can I screen candidates before they apply?',
    answer: 'Yes, you can add advanced screening questions to your job postings to filter candidates based on specific requirements, experience levels, or qualifications.',
    category: 'employer'
  },
  {
    id: '8',
    question: 'Do you offer recruitment services?',
    answer: 'Yes, we provide full white-glove recruitment services including candidate sourcing, screening, and interview coordination. Contact our executive recruitment team to learn more.',
    category: 'employer'
  },
  {
    id: '9',
    question: 'How do you verify job postings?',
    answer: 'We thoroughly vet all companies and job postings to ensure legitimacy and quality. Our verification process includes company registration checks, contact verification, and ongoing quality monitoring.',
    category: 'general'
  },
  {
    id: '10',
    question: 'What makes TalentSource different?',
    answer: 'TalentSource aggregates opportunities from multiple premium sources, offers personalized career guidance, provides advanced matching algorithms, and maintains an exclusive focus on quality with verified elite employers.',
    category: 'general'
  },
  {
    id: '11',
    question: 'How can I contact support?',
    answer: 'You can reach our premium support team via email at support@talentsource.com, phone at +1 (555) 123-4567, or through our contact form. We typically respond within 2 hours.',
    category: 'general'
  },
  {
    id: '12',
    question: 'Do you have mobile apps?',
    answer: 'Yes, we have premium mobile apps for both iOS and Android. You can browse jobs, apply, and manage your profile on the go. Download from the App Store or Google Play.',
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
    <section className="py-32 bg-gradient-to-b from-black to-slate-900" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-white to-slate-200 rounded-2xl flex items-center justify-center diamond-shadow-xl sparkle-animation">
              <HelpCircle className="h-8 w-8 text-slate-900" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Find answers to common questions about our exclusive platform
          </p>
        </div>

        {/* Luxury Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as any)}
              className={`px-8 py-4 rounded-xl font-light transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-white to-slate-100 text-slate-900 diamond-shadow-xl scale-105 sparkle-animation'
                  : 'glass-diamond text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:scale-105'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Luxury FAQ Items */}
        <div className="space-y-6">
          {filteredFAQs.map((item) => (
            <div
              key={item.id}
              className="luxury-card rounded-2xl border border-white/10 hover:border-white/20 diamond-shadow-xl transition-all duration-500"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-10 py-8 text-left flex items-center justify-between hover:bg-white/5 rounded-2xl transition-all"
              >
                <h3 className="text-lg font-serif text-white pr-6">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(item.id) ? (
                    <ChevronUp className="h-6 w-6 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-slate-400" />
                  )}
                </div>
              </button>
              
              {openItems.has(item.id) && (
                <div className="px-10 pb-8">
                  <div className="border-t border-white/10 pt-8">
                    <p className="text-slate-300 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Luxury Contact Support */}
        <div className="mt-24 text-center">
          <div className="glass-diamond-strong rounded-3xl p-16 border border-white/20 diamond-shadow-xl">
            <div className="flex justify-center mb-8">
              <Gem className="h-12 w-12 text-white/80" />
            </div>
            <h3 className="text-2xl font-serif text-white mb-6">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-10 font-light leading-relaxed">
              Our premium support team is here to ensure your success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-10 py-4 rounded-xl font-medium transition-all diamond-shadow-xl hover:scale-105 sparkle-animation">
                Contact premium support
              </button>
              <button className="border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white px-10 py-4 rounded-xl font-light transition-all duration-500 hover:scale-105 diamond-shadow-lg">
                Live concierge chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;