"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoTimeOutline, IoStatsChartOutline } from "react-icons/io5";
import Image from "next/image";
import logo from "../assets/logo.png"
const NavBar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <IoHomeOutline /> },
    { name: "Timeline", href: "/timeline", icon: <IoTimeOutline /> },
    { name: "Stats", href: "/stats", icon: <IoStatsChartOutline /> },
  ];

  return (
    <nav className="navbar bg-white border-b border-slate-100 px-6 lg:px-10 py-2">
      <div className="navbar-start">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={pathname === link.href ? "bg-[#244D3F] text-white" : "text-slate-500"}
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        
        <Link href="/" className="flex items-center no-underline">
          <Image 
            src={logo}             
            alt="KeenKeeper Logo" 
            width={160}           
            height={45} 
            className="object-contain"
            priority 
          />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="flex items-center gap-1 list-none">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isActive 
                      ? "bg-[#244D3F] text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;