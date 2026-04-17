import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'; 
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4 mt-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
       
        <div className="mb-4">
          <Image 
            src={logo} 
            alt="KeenKeeper Logo" 
            width={300} 
            priority
            className="brightness-0 invert" 
          />
        </div>

       
        <p className="text-slate-300 max-w-md mb-8 text-sm leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-medium tracking-wider uppercase text-slate-400">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-sm bg-white hover:bg-slate-200 border-none text-[#244D3F]">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="btn btn-circle btn-sm bg-white hover:bg-slate-200 border-none text-[#244D3F]">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="btn btn-circle btn-sm bg-white hover:bg-slate-200 border-none text-[#244D3F]">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

       
        <div className="w-full border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;