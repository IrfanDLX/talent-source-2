import React from "react";
import {
  Search,
  FileText,
  MessageCircle,
  Trophy,
  Users,
  Briefcase,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const stepsForJobSeekers = [
  {
    id: 1,
    title: "Discover",
    description:
      "Browse curated opportunities from leading companies that match your career goals.",
    icon: Search,
  },
  {
    id: 2,
    title: "Apply",
    description:
      "Submit applications seamlessly with our streamlined process and smart profile matching.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Connect",
    description:
      "Engage directly with hiring managers and showcase your expertise through meaningful conversations.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Succeed",
    description:
      "Land your ideal role with ongoing support throughout your career journey.",
    icon: Trophy,
  },
];

const stepsForEmployers = [
  {
    id: 1,
    title: "Post",
    description:
      "Create compelling job listings that attract top-tier talent to your organization.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Review",
    description:
      "Evaluate qualified candidates through our intelligent filtering and assessment tools.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: "Interview",
    description:
      "Connect with pre-screened professionals through our comprehensive interview platform.",
    icon: Users,
  },
  {
    id: 4,
    title: "Hire",
    description:
      "Make confident hiring decisions and onboard exceptional talent seamlessly.",
    icon: Sparkles,
  },
];

interface HowItWorksProps {
  audience?: "jobseeker" | "employer";
}

const HowItWorks: React.FC<HowItWorksProps> = ({ audience = "employer" }) => {
  const steps = audience === "employer" ? stepsForEmployers : stepsForJobSeekers;

  return (
    <section className="py-32 bg-gray-50/30" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            {audience === "employer"
              ? "A streamlined approach to finding exceptional talent"
              : "Your path to career success in four simple steps"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gray-200 z-0"></div>
                )}
                <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-100 refined-shadow hover:refined-shadow-xl transition-all duration-300 z-10">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-gray-50 text-gray-600 text-sm font-light px-3 py-1.5 rounded-full">
                      {step.id}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-light transition-colors refined-shadow">
            {audience === "employer" ? "Start hiring" : "Get started"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;