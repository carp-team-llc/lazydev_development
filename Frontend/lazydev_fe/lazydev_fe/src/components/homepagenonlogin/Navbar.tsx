"use client"
import { Search, Settings } from "lucide-react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left section */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big-white.png"
                alt="Logo"
                className="w-8 h-8"
              />
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink to="/login" className="flex items-center gap-1 text-gray-300 hover:text-white">
                Explore 
              </NavLink>
              <NavLink to="/login" className="flex items-center gap-1 text-gray-300 hover:text-white">
                Leader board 
              </NavLink>
              <NavLink to="/login" className="flex items-center gap-1 text-gray-300 hover:text-white">
                Help & Support 
              </NavLink>
              <NavLink to="/pricing" className="text-gray-300 hover:text-white">
                Pricing
              </NavLink>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Search */}
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

            {/* Settings & Auth */}
            <button className="p-1 rounded-lg text-gray-400 hover:text-white">
              <Settings className="h-5 w-5" />
            </button>
            <a href="#" className="text-gray-300 hover:text-white text-sm">
              Sign in
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-xl text-sm font-medium hover:bg-yellow-500"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
