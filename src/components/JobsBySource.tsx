import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Filter, Diamond } from "lucide-react";
import { recentJobs, jobSources } from "../data/mockData";

const JobsBySource: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState("All Sources");
  const [showAll, setShowAll] = useState(false);

  const filteredJobs =
    selectedSource === "All Sources"
      ? recentJobs
      : recentJobs.filter((job) => job.source === selectedSource);

  const jobsToShow = showAll ? filteredJobs : filteredJobs.slice(0, 6);

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <Filter className="h-8 w-8 text-white/60" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 text-balance">
            Browse by source
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover opportunities from the world's most exclusive platforms
          </p>
        </div>

        {/* Luxury Source Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {jobSources.map((source) => (
            <button
              key={source}
              onClick={() => {
                setSelectedSource(source);
                setShowAll(false);
              }}
              className={`px-8 py-4 rounded-xl font-light transition-all duration-300 ${
                selectedSource === source
                  ? "bg-gradient-to-r from-white to-slate-100 text-slate-900 diamond-shadow-xl scale-105 sparkle-animation"
                  : "glass-diamond text-slate-300 hover:text-white border border-white/10 hover:border-white/20 hover:scale-105"
              }`}
            >
              {source}{" "}
              {source !== "All Sources" &&
                `(${recentJobs.filter((job) => job.source === source).length})`}
            </button>
          ))}
        </div>

        {/* Luxury Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsToShow.map((job, index) => (
            <div
              key={job.id}
              className="luxury-card rounded-3xl p-8 border border-white/10 hover:border-white/20 group diamond-shadow-xl transition-all duration-500"
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
                <div className="text-xl font-serif mb-8 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  {job.salary}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 font-light uppercase tracking-wider">
                  {job.source}
                </span>
                <button className="bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-3 diamond-shadow-lg hover:scale-105 sparkle-animation">
                  Apply
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredJobs.length > 6 && !showAll && (
          <div className="text-center mt-20">
            <button
              onClick={() => setShowAll(true)}
              className="border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:border-white px-10 py-4 rounded-xl font-light transition-all duration-500 hover:scale-105 diamond-shadow-lg"
            >
              View all positions
            </button>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-400 text-xl font-light">
              No positions available for the selected source
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsBySource;