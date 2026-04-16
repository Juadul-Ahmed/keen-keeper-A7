import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="hero bg-slate-50 py-16">
        <div className="hero-content text-center">
          <div className="max-w-none">
            <h1 className="text-5xl font-extrabold text-[#1F2937] leading-tight mb-6">
              Friends to keep close in your life
            </h1>

            <p className="text-lg font-medium text-[#64748B] max-w-2xl mx-auto mb-10">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>

            <button className="btn bg-[#244D3F] hover:bg-[#1a3a2f] text-white rounded-md border-none px-8">
              <FaPlus className="text-xs" />
              Add Friend
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card bg-white shadow-sm border border-slate-100 py-8">
            <div className="card-body items-center text-center p-0">
              <h2 className="text-4xl font-bold text-[#1e3a31]">10</h2>
              <p className="text-[#64748B] font-medium mt-2">Total Friends</p>
            </div>
          </div>

          <div className="card bg-white shadow-sm border border-slate-100 py-8">
            <div className="card-body items-center text-center p-0">
              <h2 className="text-4xl font-bold text-[#1e3a31]">3</h2>
              <p className="text-[#64748B] font-medium mt-2">On Track</p>
            </div>
          </div>

          <div className="card bg-white shadow-sm border border-slate-100 py-8">
            <div className="card-body items-center text-center p-0">
              <h2 className="text-4xl font-bold text-[#1e3a31]">6</h2>
              <p className="text-[#64748B] font-medium mt-2">Need Attention</p>
            </div>
          </div>

          <div className="card bg-white shadow-sm border border-slate-100 py-8">
            <div className="card-body items-center text-center p-0">
              <h2 className="text-4xl font-bold text-[#1e3a31]">12</h2>
              <p className="text-[#64748B] font-medium mt-2">
                Interactions This Month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
