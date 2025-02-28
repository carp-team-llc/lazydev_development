import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import WarningNotification from "../WarningNotification/WarningNotification";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
  <div className="mt-10 "> <WarningNotification />
    <nav className="bg-[#161B22] border-b border-[#30363D] px-4 py-3 flex items-center justify-between">
     
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big-white.png"
            alt="Logo"
            className="w-8 h-8"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Main Menu */}
        <div className={`md:flex hidden items-center space-x-2`}>
          <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
            Explore 
          </button>
          <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
            Leader board 
          </button>
          <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center">
            Help & Support 
          </button>
          <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
            Pricing
          </button>
        </div>
      </div>
      

      <div className="flex items-center space-x-4">
      <div className="flex items-center gap-2 border border-[#ffc400]/40 rounded-xl px-3 py-2 bg-[#1F2937]">
            
            <span className="text-sm  text-white font-medium"> + New</span>
          </div>
        {/* Search trên màn hình lớn */}
        <div className="hidden md:flex items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-1.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent sm:text-sm"
            />
          </div>
        </div>


        {/* Search Icon trên mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
        </button>

        {/* Search Box trên mobile */}
        {searchOpen && (
          <div className="absolute top-14 left-0 w-full px-4 md:hidden">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-1.5 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent sm:text-sm"
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          {/* Coin Display */}
          <div className="flex items-center gap-2 border border-[#ffc400]/40 rounded-xl px-3 py-2 bg-[#1F2937]">
            <span className="text-yellow-500">🪙</span>
            <span className="text-sm  text-white font-medium">12,324</span>
          </div>

          <div className="flex items-center gap-2 border border-[#ffc400]/40 rounded-xl px-3 py-2 bg-[#1F2937]">
            <span className="text-yellow-500">🪙</span>
            <span className="text-sm text-white  font-medium">3,145</span>
          </div>

          {/* Icons */}
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </button>
          
          <button className="text-gray-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>

          {/* Profile Avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#161B22] border-t border-[#30363D] flex flex-col items-start p-4 md:hidden">
          <button className="text-gray-300 hover:text-white py-2 w-full text-left">
            Explore
          </button>
          <button className="text-gray-300 hover:text-white py-2 w-full text-left">
            Leader board
          </button>
          <button className="text-gray-300 hover:text-white py-2 w-full text-left">
            Help & Support
          </button>
          <button className="text-gray-300 hover:text-white py-2 w-full text-left">
            Pricing
          </button>
        </div>
      )}
    </nav>
    </div>
  );
}
