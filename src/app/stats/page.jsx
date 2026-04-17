"use client";
import React, { useContext } from "react";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

import { CallContext } from "@/context/TimelineContext";

const StatsPage = () => {

  const { call } = useContext(CallContext);

 
  const videoCount = call.filter((item) => item.type === "Video").length;
  const callCount = call.filter((item) => item.type === "Call").length;
  const textCount = call.filter((item) => item.type === "Text").length;

 
  const data = [
    { name: "Video", value: videoCount, fill: "#37A163" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Text", value: textCount, fill: "#7E35E1" },
  ];

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-[#244D3F] mb-6 text-center">
          Interaction Breakdown
        </h2>

      
        {call.length > 0 ? (
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius="70%"
                  outerRadius="100%"
                  paddingAngle={5}
                  cornerRadius={10}
                >
                 
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-center py-20 text-slate-400">No data to show yet!</p>
        )}
      </div>
    </div>
  );
};

export default StatsPage;