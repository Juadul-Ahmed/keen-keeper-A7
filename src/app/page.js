"use client";

import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import FriendList from "@/Components/FriendList";
import Banner from "@/Components/Banner";
import friendsData from "../json/friends.json";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <HashLoader color="#244D3F" size={70} />
          <p className="mt-8 text-slate-500 font-semibold animate-pulse">
            Loading your connections...
          </p>
        </div>
      ) : (
        <>
          <Banner />
          <FriendList friends={friendsData} />
        </>
      )}
    </main>
  );
}
