import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar Mockup to match your screenshot */}
      <div className="navbar bg-white border-b border-slate-200 px-8">
        <div className="flex-1">
          <span className="text-xl font-bold text-[#1e3a31]">
            Keen<span className="text-[#2d5a4c]">Keeper</span>
          </span>
        </div>
        <div className="flex-none gap-4">
          <ul className="menu menu-horizontal px-1 text-slate-500 font-medium text-sm">
            <li><Link href={"/"}>Home</Link></li>
            <li><a>Timeline</a></li>
            <li><a>Stats</a></li>
          </ul>
        </div>
      </div>

      {/* Main Error Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="card w-full max-w-md bg-white shadow-sm border border-slate-100">
          <div className="card-body items-center text-center p-10">
            
            {/* Status Badge - matches your "Overdue" tag style */}
            <div className="badge badge-error badge-outline gap-2 py-3 px-4 mb-4 text-xs font-bold tracking-widest">
              ERROR 404
            </div>

            <h1 className="text-4xl font-extrabold text-slate-800 mb-2">Lost Connection</h1>
            <p className="text-slate-500 mb-8">
              We couldn't find the page you're looking for. It might have been moved or archived.
            </p>

            <div className="card-actions w-full flex flex-col gap-3">
              {/* Primary Action - using your theme green */}
              <Link 
                href={"/" }
                className="btn w-full bg-[#1e3a31] hover:bg-[#2d5a4c] text-white border-none normal-case"
              >
                Back to Dashboard
              </Link>
              
              <button className="btn btn-ghost btn-sm text-slate-400 normal-case">
                Report a Technical Issue
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Mockup */}
      <footer className="footer footer-center p-10 bg-[#1e3a31] text-white">
        <div>
          <h2 className="text-3xl font-bold">KeenKeeper</h2>
          <p className="opacity-70">Your personal shelf of meaningful connections.</p>
        </div> 
        <div>
          <div className="grid grid-flow-col gap-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1e3a31]">
              <span className="font-bold">O</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1e3a31]">
              <span className="font-bold">f</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1e3a31]">
              <span className="font-bold text-xs">𝕏</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] opacity-50 flex gap-4 mt-4">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default ErrorPage;