import React, { useEffect, useRef } from "react";
import { MapPin, Clock, ExternalLink, Star } from "lucide-react";
import { recentJobs } from "../data/mockData";

const RecentJobs: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.3;
    const autoScroll = () => {
      if (!scrollContainer) return;

      if (!isHovered.current) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => {
      isHovered.current = true;
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-black to-slate-900" id="jobs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <Star className="h-8 w-8 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 text-balance">
            Featured opportunities
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Handpicked positions from the world's most prestigious organizations
          </p>
        </div>

        <div
          className="overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-8 pb-6" style={{ width: "max-content" }}>
            {recentJobs.map((job, index) => (
              <div
                key={job.id}
                className="luxury-card rounded-3xl p-8 text-left border border-white/10 hover:border-white/20 group diamond-shadow-xl transition-all duration-500"
                style={{ minWidth: "380px", maxWidth: "380px" }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-slate-200 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-xl diamond-shadow-lg">
                    {job.company.charAt(0)}
                  </div>
                  <span className="text-xs bg-white/10 text-slate-300 px-4 py-2 rounded-full font-light uppercase tracking-wider border border-white/20">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white mb-3 leading-tight group-hover:text-slate-200 transition-colors">
                  {job.title}
                </h3>

                <div className="text-slate-300 mb-8 font-light text-lg">
                  {job.company}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-slate-400">
                    <MapPin className="h-5 w-5 mr-4 flex-shrink-0" />
                    <span className="font-light">{job.location}</span>
                  </div>

                  <div className="flex items-center text-slate-400">
                    <Clock className="h-5 w-5 mr-4 flex-shrink-0" />
                    <span className="font-light">{job.postedDate}</span>
                  </div>
                </div>

                {job.salary && (
                  <div className="text-xl font-serif text-white mb-8 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    {job.salary}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-light uppercase tracking-wider">
                    via {job.source}
                  </span>
                  <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-3 diamond-shadow-lg hover:scale-105 sparkle-animation">
                    Apply
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white px-10 py-4 rounded-xl font-light transition-all duration-500 hover:scale-105 diamond-shadow-lg">
            View all positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;