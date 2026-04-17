import React from "react";

const FriendList = ({ friends }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="card bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <div className="card-body items-center text-center p-6">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full border-2 border-slate-50">
                  <img src={friend.picture} alt={friend.name} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                {friend.name}
              </h3>
              <p className="text-xs text-slate-400 mb-2">
                {friend.days_since_contact}d ago
              </p>

              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {friend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-sm bg-[#e8f5e9] text-[#2e7d32] border-none font-bold uppercase text-[10px] px-2 py-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className={`badge badge-md border-none font-bold text-white px-4 py-3 rounded-md text-xs uppercase
                ${
                  friend.status === "overdue"
                    ? "bg-[#ff5252]"
                    : friend.status === "on track"
                      ? "bg-[#1e3a31]"
                      : "bg-[#fbbf24]"
                }`}
              >
                {friend.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
