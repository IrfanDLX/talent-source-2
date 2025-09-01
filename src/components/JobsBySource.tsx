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
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Opportunities by <span className="italic font-normal">Source</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover positions from your preferred platforms
          </p>
        </div>

        {/* Elegant Source Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {jobSources.map((source) => (
            <button
              key={source}
              onClick={() => {
                setSelectedSource(source);
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 tracking-wide ${
                selectedSource === source
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
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
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 border border-slate-100 hover:border-slate-200 transform hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white font-light text-xl tracking-wide">
                  {job.company.charAt(0)}
                </div>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-2 rounded-full font-medium tracking-wide uppercase">
                  {job.type}
                </span>
              </div>

              <h3 className="text-xl font-light text-slate-900 mb-3 leading-tight group-hover:text-slate-700 transition-colors">
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
                <div className="text-lg font-light text-slate-900 mb-6 tracking-wide">
                  {job.salary}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-light tracking-wide uppercase">
                  {job.source}
                </span>
                <button className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 group hover:shadow-lg">
                  Apply
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredJobs.length > 6 && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-10 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 hover:shadow-lg"
            >
              View All Positions
            </button>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
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