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
    <section className="py-20 bg-white" id="jobs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Featured <span className="italic font-normal">Opportunities</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Curated positions from distinguished organizations
          </p>
        </div>

        <div
          className="overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-8 pb-4" style={{ width: "max-content" }}>
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2 group"
                style={{ minWidth: "360px", maxWidth: "360px" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white font-light text-xl tracking-wide">
                    {job.company.charAt(0)}
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-700 px-3 py-2 rounded-full font-medium tracking-wide uppercase">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-slate-900 mb-3 leading-tight group-hover:text-slate-700 transition-colors">
                  {job.title}
                </h3>

                <div className="text-lg font-medium text-slate-800 mb-4 tracking-wide">
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
                  <div className="text-xl font-light text-slate-900 mb-6 tracking-wide">
                    {job.salary}
                  </div>
                )}

                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-light line-clamp-3">
                  {job.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-light tracking-wide uppercase">
                    via {job.source}
                  </span>
                  <button className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 group hover:shadow-lg">
                    Apply
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg">
            View All Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;