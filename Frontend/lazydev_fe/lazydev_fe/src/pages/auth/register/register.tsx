"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function CreateAccount() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative p-6">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/lazydev-big.png"
            alt="Logo"
            className="w-12 h-12 bg-gray-200 rounded-full"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-1">Create an account</h2>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Social Logins */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
            <img
              src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/github.png"
              alt="Github"
              className=" ml-2 w-5 h-5 flex-shrink-0"
            />
            <span>Continue with Github</span>
          </button>

          <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
            <img
              src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/gitlab.png"
              alt="Gitlab"
              className="w-5 h-5 flex-shrink-0"
            />
            <span>Continue with Gitlab</span>
          </button>

          <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
            <img
              src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/Brand%3DGoogle%2C%20Color%3DON.png"
              alt="Google"
              className=" ml-3 w-5 h-5 flex-shrink-0"
            />
            <span>Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-black rounded-xl hover:bg-gray-50 transition-colors">
            <img
              src="https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/mail.png"
              alt="Google"
              className=" w-5 h-5 flex-shrink-0 "
            />
            <NavLink to="/register2">Continue with Email</NavLink>
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Email Form */}
        <div className="space-y-4">
          <button className="w-full bg-yellow-400 text-white py-2 px-4 rounded-xl hover:bg-yellow-500 transition-colors font-medium">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
