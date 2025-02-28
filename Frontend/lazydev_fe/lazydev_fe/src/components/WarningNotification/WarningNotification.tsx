"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide banner after 24 hours
    const timer = setTimeout(() => setIsVisible(false), 24 * 60 * 60 * 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="relative flex h-12 items-center justify-center px-4 text-white animate-rainbow">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <span className="text-sm font-bold tracking-wider ">
          Please link your GitHub to implement function  
          </span>

          <div className="duck-run text-2xl animate-duck-run ml-10">ㄟ( ▔, ▔ )ㄏ</div>

          <button className="rounded bg-white px-4 py-1 text-xs font-bold text-black transition-colors hover:bg-gray-200 ml-7">
            Right Now!  
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 transition-colors hover:text-white"
          aria-label="Close banner"
        ></button>
      </div>
    </div>
  );
}
