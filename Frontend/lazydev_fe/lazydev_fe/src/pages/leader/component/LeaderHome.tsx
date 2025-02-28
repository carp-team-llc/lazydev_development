"use client";

import { useState } from "react";
import { ChevronDown, BarChart2, Users } from "lucide-react";

const timeFrames = ["1h", "24h", "7d", "30d", "1y"];

const pullRequestUsers = [
  {
    rank: 1,
    name: "Singer...",
    tag: "Yes!",
    score: 1956,
    requests: 73,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 2,
    name: "Goku99",
    tag: "",
    score: 195,

    requests: 195,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 3,
    name: "MrBlack2",
    tag: "",
    score: 2020,

    requests: 197,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 4,
    name: "Sigshana",
    tag: "",
    score: 433,

    requests: 35,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 5,
    name: "LionMaky16",
    tag: "",
    score: 289,

    requests: 124,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
];

const mergeRequestUsers = [
  {
    rank: 1,
    name: "blueberrykid",
    tag: "",
    score: 184,

    requests: 94,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 2,
    name: "good_alien",
    tag: "",
    score: 185,

    requests: 68,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 3,
    name: "pink_hatter",
    tag: "",
    score: 169,

    requests: 51,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 4,
    name: "twochains_guy",
    tag: "",
    score: 102,

    requests: 17,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
  {
    rank: 5,
    name: "Alice_rose",
    tag: "",
    score: 223,

    requests: 75,
    avatar:
      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
  },
];

export default function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState("1h");
  const [activeTab, setActiveTab] = useState<"pull" | "merge">("pull");

  return (
    <div className="p-2 bg-[#0a061f]">
      {/* Tabs */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={() => setActiveTab("pull")}
          className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
            activeTab === "pull"
              ? "bg-[#151725] text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Pull Request Leaderboard
        </button>
        <button
          onClick={() => setActiveTab("merge")}
          className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
            activeTab === "merge"
              ? "bg-[#151725] text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Merge Request Leaderboard
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2 text-gray-400 mr-226">
            <span>Tên</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center space-x-2 text-gray-400 ">
            <span>Point</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Pull Request</span>
          </div>
          <div className="relative">
            <select
              value={timeFrame}
              onChange={(e) => setTimeFrame(e.target.value)}
              className="bg-[#151725] text-gray-400 px-3 py-1 rounded appearance-none pr-8 outline-none"
            >
              {timeFrames.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-2">
        {(activeTab === "pull" ? pullRequestUsers : mergeRequestUsers).map(
          (user) => (
            <div
              key={user.rank}
              className="flex items-center bg-[#151725] rounded-lg p-4 hover:bg-[#1a1d2d] transition-colors"
            >
              <div className="w-8 text-gray-400">{user.rank}</div>
              <div className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      user.avatar ||
                      "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg"
                    }
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="text-white font-medium">{user.name}</div>
                    {user.tag && (
                      <div className="text-xs text-gray-400">{user.tag}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-24 text-right text-gray-200 ">{user.score}</div>
              <div className="w-24 text-right text-gray-400 mr-8">
                {user.requests}
              </div>
              <div className="w-24 flex justify-end space-x-2">
                <button className="p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <BarChart2 className="w-4 h-4 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700/30 rounded-lg transition-colors">
                  <Users className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
