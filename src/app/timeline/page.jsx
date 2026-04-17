"use client";
import React, { useContext, useState } from "react";
import { CallContext } from "@/context/TimelineContext";
import Image from "next/image";

const TimelinePage = () => {
  const { call } = useContext(CallContext);
 
  const [filter, setFilter] = useState("All");

 
  const filteredCalls = call.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="w-11/12 mx-auto mt-10 pb-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#1e3a31]">Timeline</h2>

       
        <select 
          className="select select-bordered w-full max-w-xs text-slate-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline (All)</option>
          <option value="Call">Calls Only</option>
          <option value="Text">Texts Only</option>
          <option value="Video">Videos Only</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredCalls.length > 0 ? (
          filteredCalls.map((item) => (
            <div 
              key={item.id} 
              className="  shadow-sm rounded-lg p-5 flex items-center gap-5 bg-white"
            >
              <div className="relative w-12 h-12">
                <Image src={item.icon} alt={item.type} fill className="object-contain" />
              </div>
              <div>
                <p className="text-xl">
                  <span className="font-bold text-[#1e3a31]">{item.type}</span>
                  <span className="text-slate-400 ml-2">with {item.name}</span>
                </p>
                <p className="text-slate-500 text-sm mt-1">{item.timestamp}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400">No {filter !== 'All' ? filter.toLowerCase() : ''} interactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;