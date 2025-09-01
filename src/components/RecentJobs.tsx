import React, { useEffect, useRef } from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { recentJobs } from "../data/mockData";

const RecentJobs: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;
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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/50" id="jobs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 mb-6">
            Featured <span className="text-slate-600 italic">Opportunities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Handpicked positions from distinguished organizations
          </p>
        </div>

        <div
          className="overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-8 pb-6" style={{ width: "max-content" }}>
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl elegant-shadow hover:elegant-shadow-lg transition-all duration-500 p-8 border border-white/50 transform hover:-translate-y-3 group"
                style={{ minWidth: "380px", maxWidth: "380px" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center text-white font-serif text-xl">
                    {job.company.charAt(0)}
                  </div>
                  <span className="text-xs bg-slate-100/80 text-slate-600 px-4 py-2 rounded-full font-light uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-slate-800 mb-3 leading-tight group-hover:text-slate-700 transition-colors">
                  {job.title}
                </h3>

                <div className="text-lg text-slate-700 mb-4 font-light">
                  {job.company}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-500">
                    <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-sm font-light">{job.location}</span>
                  </div>

                  <div className="flex items-center text-slate-500">
                    <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-sm font-light">{job.postedDate}</span>
                  </div>
                </div>

                {job.salary && (
                  <div className="text-xl font-serif text-slate-800 mb-6">
                    {job.salary}
                  </div>
                )}

                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-light line-clamp-3">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-light uppercase tracking-wider">
                    via {job.source}
                  </span>
                  <button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-3 rounded-full text-sm font-light transition-all duration-300 flex items-center gap-2 group elegant-shadow hover:elegant-shadow-lg transform hover:scale-105">
                    Apply
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 px-12 py-4 rounded-full font-light transition-all duration-300 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105">
            View All Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;