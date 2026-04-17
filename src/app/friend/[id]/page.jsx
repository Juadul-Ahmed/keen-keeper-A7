"use client";
import { useParams } from "next/navigation";
import React, { useContext } from "react";
import friendsData from "@/json/friends.json";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";;
import { CiClock2 } from "react-icons/ci";
import { FaArchive } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CallContext } from "@/context/TimelineContext";

const FriendDetailPage = () => {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === Number(id));
  
  // const [call,setCall] = useState([]);
  const {call,setCall} = useContext(CallContext);
  // const handleCall = (type,icon)=>{
  //   setCall([...call,friend])
  // }
  const handleCall = (type, icon) => {
    const newEntry = {
      name: friend.name,
      type: type, 
      icon: icon.src,
      timestamp: new Date().toLocaleString('en-US', { 
        month: 'long', day: 'numeric', year: 'numeric' 
      }),
      id: Date.now()
    };
    setCall([newEntry, ...call]);
  }
  console.log(call,'call')
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center flex flex-col items-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full border-4 border-slate-50 shadow-sm">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-slate-800">{friend.name}</h1>

            <div className="mt-3 flex flex-col items-center gap-2">
              <span className="badge badge-error border-none font-bold text-white px-4 py-3 rounded-md text-[10px] uppercase">
                {friend.status}
              </span>
              <span className="badge bg-[#e8f5e9] text-[#2e7d32] border-none font-bold uppercase text-[10px] px-4 py-3 rounded-md">
                {friend.tags?.[0] || "FAMILY"}
              </span>
            </div>

            <p className="mt-6 italic text-slate-500 text-sm px-4 leading-relaxed">
              {friend.bio}
            </p>
            <p className="text-[10px] text-slate-300 mt-4 font-bold uppercase tracking-wider">
              Preferred: email
            </p>
          </div>


          <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-50 overflow-hidden">
            <button  className="w-full p-4 flex items-center justify-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors text-sm font-semibold">
              <CiClock2 className="text-lg"/>
              Snooze 2 Weeks
            </button>
            <button className="w-full p-4 flex items-center justify-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors text-sm font-semibold">
              <FaArchive className="text-lg"/>
              Archive
            </button>
            <button  className="w-full p-4 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 transition-colors text-sm font-bold">
              <MdOutlineDelete className="text-lg"/>
              Delete
            </button>
          </div>
        </div>


        <div className="md:col-span-2 space-y-6">

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <p className="text-4xl font-bold text-slate-800">
                {friend.days_since_contact}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <p className="text-4xl font-bold text-slate-800">{friend.goal}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">
                Goal (Days)
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col justify-center">
              <p className="text-xl font-bold text-[#1e3a31]">
                {friend.next_due_date}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-2 tracking-widest">
                Next Due
              </p>
            </div>
          </div>


          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-[#1e3a31] text-lg">
                Relationship Goal
              </h3>
              <button className="btn btn-xs btn-outline border-slate-200 text-slate-400 uppercase font-bold text-[9px] px-3">
                Edit
              </button>
            </div>
            <p className="text-slate-600 text-base">
              Connect every{" "}
              <span className="font-bold text-slate-900">
                {friend.goal} days
              </span>
            </p>
          </div>


          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-[#1e3a31] mb-6 text-lg">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleCall('Call', callIcon)} className="btn btn-ghost border border-slate-100 h-36 flex flex-col items-center justify-center hover:bg-slate-50 transition-all group">
                <div className="bg-slate-50 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={callIcon.src}
                    className="w-8 h-8 opacity-70"
                    alt="Call"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Call
                </span>
              </button>

              <button onClick={()=>handleCall('Text', textIcon)} className="btn btn-ghost border border-slate-100 h-36 flex flex-col items-center justify-center hover:bg-slate-50 transition-all group">
                <div className="bg-slate-50 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={textIcon.src}
                    className="w-8 h-8 opacity-70"
                    alt="Text"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Text
                </span>
              </button>

              <button onClick={()=>handleCall('Video', videoIcon)} className="btn btn-ghost border border-slate-100 h-36 flex flex-col items-center justify-center hover:bg-slate-50 transition-all group">
                <div className="bg-slate-50 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <img
                    src={videoIcon.src}
                    className="w-8 h-8 opacity-70"
                    alt="Video"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;
