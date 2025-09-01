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
    <section className="py-32 bg-gray-50/30" id="jobs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            Featured opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Handpicked positions from leading organizations
          </p>
        </div>

        <div
          className="overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-6 pb-6" style={{ width: "max-content" }}>
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl refined-shadow hover:refined-shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 group"
                style={{ minWidth: "360px", maxWidth: "360px" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700 font-medium text-lg">
                    {job.company.charAt(0)}
                  </div>
                  <span className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full font-light uppercase tracking-wide">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-gray-900 mb-2 leading-tight group-hover:text-gray-700 transition-colors">
                  {job.title}
                </h3>

                <div className="text-gray-700 mb-6 font-light">
                  {job.company}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-sm font-light">{job.location}</span>
                  </div>

                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span className="text-sm font-light">{job.postedDate}</span>
                  </div>
                </div>

                {job.salary && (
                  <div className="text-lg font-serif text-gray-900 mb-6">
                    {job.salary}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-light uppercase tracking-wide">
                    via {job.source}
                  </span>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-light transition-colors flex items-center gap-2 refined-shadow">
                    Apply
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-8 py-3 rounded-lg font-light transition-all duration-300">
            View all positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;