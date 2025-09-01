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
  Diamond,
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
    <section className="py-32 bg-gradient-to-b from-black to-slate-800" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <Diamond className="h-8 w-8 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
            How it works
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {audience === "employer"
              ? "A refined approach to discovering exceptional talent"
              : "Your path to career excellence in four elegant steps"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0"></div>
                )}
                <div className="relative luxury-card rounded-3xl p-10 text-center border border-white/10 hover:border-white/20 z-10 diamond-shadow-xl transition-all duration-500">
                  <div className="w-18 h-18 bg-gradient-to-br from-white to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 diamond-shadow-lg sparkle-animation">
                    <IconComponent className="h-8 w-8 text-slate-900" />
                  </div>
                  
                  <div className="mb-6">
                    <span className="bg-white/10 text-slate-300 text-sm font-light px-4 py-2 rounded-full border border-white/20">
                      {step.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-white mb-6">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-24">
          <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-10 py-4 rounded-xl font-medium transition-all diamond-shadow-xl hover:scale-105 sparkle-animation">
            {audience === "employer" ? "Start hiring elite talent" : "Begin your journey"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;