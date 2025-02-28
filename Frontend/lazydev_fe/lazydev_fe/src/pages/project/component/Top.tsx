import { Bell } from "lucide-react";

export default function Top() {
  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6">
      <div className="flex-1 max-w-xl"></div>

      <div className="flex items-center gap-6 ml-auto">
        <div className="flex -space-x-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-[#1C1C1C] bg-gray-300"
            />
          ))}
        </div>

        <button className="relative p-2 hover:bg-white/5 rounded-lg">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3">
          <div>
            <div className="font-medium border border-amber-500 h-12 w-16 flex items-center justify-center text-center rounded-2xl">
              Join
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
