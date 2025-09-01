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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 text-balance">
            Browse by source
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Find opportunities from your preferred platforms
          </p>
        </div>

        {/* Clean Source Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {jobSources.map((source) => (
            <button
              key={source}
              onClick={() => {
                setSelectedSource(source);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-lg font-light transition-all duration-200 ${
                selectedSource === source
                  ? "bg-gray-900 text-white refined-shadow"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {source}{" "}
              {source !== "All Sources" &&
                `(${recentJobs.filter((job) => job.source === source).length})`}
            </button>
          ))}
        </div>

        {/* Clean Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsToShow.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl refined-shadow hover:refined-shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 group"
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
                  {job.source}
                </span>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg text-sm font-light transition-colors flex items-center gap-2 refined-shadow">
                  Apply
                  <ExternalLink className="h-4 w-4" />
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
              className="border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-8 py-3 rounded-lg font-light transition-all duration-300"
            >
              View all positions
            </button>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg font-light">
              No positions available for the selected source
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsBySource;