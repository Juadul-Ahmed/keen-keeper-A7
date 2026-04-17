"use client";
import React, { useContext } from 'react';
import { CallContext } from '@/context/TimelineContext'; 

const TimelinePage = () => {
  const { call } = useContext(CallContext);

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-5xl font-bold text-[#1e3a31] mb-8">Timeline</h1>
      
      <div className="space-y-4">
        {call.map((item) => (
          <div key={item.id} className="border-2 border-dashed border-sky-400 rounded-lg p-5 flex items-center gap-5 bg-white">
            <img src={item.icon} alt={item.type} className="w-12 h-12 object-contain" />
            <div>
              <p className="text-xl">
                <span className="font-bold text-[#1e3a31]">{item.type}</span>
                <span className="text-slate-400 ml-2">with {item.name}</span>
              </p>
              <p className="text-slate-500 text-sm mt-1">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;