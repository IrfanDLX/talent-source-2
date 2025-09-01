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
      "Explore curated opportunities from distinguished organizations that align with your professional aspirations.",
    icon: Search,
  },
  {
    id: 2,
    title: "Apply",
    description:
      "Submit your credentials through our refined application process designed for professional excellence.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Connect",
    description:
      "Engage with industry leaders and showcase your expertise through meaningful professional interactions.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Succeed",
    description:
      "Embark on your next career chapter with the confidence of our comprehensive support system.",
    icon: Trophy,
  },
];

const stepsForEmployers = [
  {
    id: 1,
    title: "Publish",
    description:
      "Present your opportunities through our sophisticated platform designed to attract exceptional talent.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Review",
    description:
      "Evaluate candidates through our streamlined assessment tools and intelligent filtering system.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: "Engage",
    description:
      "Connect with qualified professionals through our comprehensive communication and interview platform.",
    icon: Users,
  },
  {
    id: 4,
    title: "Hire",
    description:
      "Make confident decisions and seamlessly onboard exceptional talent to drive your organization forward.",
    icon: Sparkles,
  },
];

interface HowItWorksProps {
  audience?: "jobseeker" | "employer";
}

const HowItWorks: React.FC<HowItWorksProps> = ({ audience = "employer" }) => {
  const steps = audience === "employer" ? stepsForEmployers : stepsForJobSeekers;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            How It <span className="italic font-normal">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            {audience === "employer"
              ? "A refined approach to talent acquisition"
              : "Your pathway to professional excellence"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-slate-200 to-transparent z-0"></div>
                )}
                <div className="relative bg-white rounded-2xl p-8 text-center border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 z-10">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="bg-slate-100 text-slate-600 text-sm font-medium px-4 py-2 rounded-full tracking-wide">
                      {String(step.id).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-slate-900 mb-4 group-hover:text-slate-700 transition-colors tracking-wide">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-slate-900 hover:bg-black text-white px-12 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-xl">
            {audience === "employer" ? "Begin Hiring" : "Start Your Journey"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;