import { ArrowRight } from "lucide-react";

export default function PlatForm() {
  return (
    <div className="bg-gradient-to-r from-[#1F283B] via-[#5A4F2C] to-[#FCC728] pt-16">
    <div className="container mx-auto w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Join our platform
          </h2>
          <p className="text-gray-400">Collaborate. Build. Get Rewarded.</p>
        </div>

        {/* Right Section */}
        <div className="space-y-4 -translate-y-4">
          <button className="w-full flex items-center justify-between px-6 py-4 bg-[#ffc400] rounded-xl hover:bg-[#e6b000] transition-colors group">
            <div>
              <div className="text-black font-medium text-left">
                Start contributing now
              </div>
              <div className="text-black/70 text-sm">
                Start contributing to open source projects now!
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full flex items-center justify-between px-6 py-4 bg-[#ffc400] rounded-xl hover:bg-[#e6b000] transition-colors group">
            <div>
              <div className="text-black font-medium text-left">
                Link your project now
              </div>
              <div className="text-black/70 text-sm">
                Find contributors to your project!
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="bg-[#ffc400] rounded-xl hover:bg-[#e6b000] rounded-lg p-4">
            <div className="text-black mb-1 ">Subscribe to our newsletter</div>
            <div className="text-black text-sm mb-3">
              We send updates 2 weeks 3 times.
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 bg-[#151725] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc400] focus:border-transparent"
              />
              <button className="px-4 py-2 bg-[#221947] text-white rounded-xl font-medium hover:bg-[#544925] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
