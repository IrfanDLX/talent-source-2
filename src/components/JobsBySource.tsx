import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Filter } from "lucide-react";
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
    <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-slate-800 mb-6">
            Opportunities by <span className="text-slate-600 italic">Source</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover positions from your preferred platforms
          </p>
        </div>

        {/* Elegant Source Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {jobSources.map((source) => (
            <button
              key={source}
              onClick={() => {
                setSelectedSource(source);
                setShowAll(false);
              }}
              className={`px-8 py-4 rounded-full font-light transition-all duration-300 flex items-center gap-2 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105 ${
                selectedSource === source
                  ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white"
                  : "bg-white/80 text-slate-700 hover:bg-white border border-slate-200/50"
              }`}
            >
              <Filter className="h-4 w-4" />
              {source}{" "}
              {source !== "All Sources" &&
                `(${recentJobs.filter((job) => job.source === source).length})`}
            </button>
          ))}
        </div>

        {/* Refined Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsToShow.map((job) => (
            <div
              key={job.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl elegant-shadow hover:elegant-shadow-lg transition-all duration-500 p-8 border border-white/50 transform hover:-translate-y-3 group"
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

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-light uppercase tracking-wider">
                  {job.source}
                </span>
                <button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-6 py-3 rounded-full text-sm font-light transition-all duration-300 flex items-center gap-2 group elegant-shadow hover:elegant-shadow-lg transform hover:scale-105">
                  Apply
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredJobs.length > 6 && !showAll && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-700 hover:text-white hover:border-slate-700 px-12 py-4 rounded-full font-light transition-all duration-300 elegant-shadow hover:elegant-shadow-lg transform hover:scale-105"
            >
              View All Positions
            </button>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-400 text-lg font-light">
              No positions available for the selected source
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsBySource;