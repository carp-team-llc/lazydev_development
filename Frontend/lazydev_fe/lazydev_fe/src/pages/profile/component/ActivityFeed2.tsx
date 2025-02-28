"use client"

import { MoreHorizontal } from "lucide-react"
import { Button } from "../../homeloggedin/ui/buttons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../homeloggedin/ui/dropdownmenu"

export default function ActivityFeed() {
  return (
    <div className="bg-[#0d1117] text-gray-300 p-4 space-y-4">
      {/* Date Header */}
      <div className="inline-flex items-center px-2 py-0.5 text-xs bg-[#161b22] text-[#7d8590] rounded-full border border-[#30363d]">
        December 2024
      </div>

      {/* Commit Activity 1 */}
      <div className="group relative">
        <div className="flex gap-2">
          <div className="mt-1">
            <div className="w-7 h-7 rounded-full bg-[#238636] bg-opacity-10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#238636]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.225.31A3.971 3.971 0 0113 11.25a3.97 3.97 0 01-1.275 3.19.75.75 0 01-1.025-1.086A2.47 2.47 0 0011.5 11.25a2.47 2.47 0 00-.8-2.104.75.75 0 011.025-1.086zM4.375 8.06a.75.75 0 011.025 1.086A2.47 2.47 0 004.5 11.25a2.47 2.47 0 00.8 2.104.75.75 0 01-1.025 1.086A3.97 3.97 0 013 11.25a3.97 3.97 0 011.375-3.19z" />
                <path d="M8 13.25A3.75 3.75 0 114.25 9.5 3.75 3.75 0 018 13.25zm0-1.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between group">
              <h3 className="text-sm text-gray-200">Created 9 commits in 2 repositories</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Subscribe</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-1 space-y-1">
              <div>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-sm text-[#58a6ff] hover:underline font-mono">
                    carp-team-llc/lazydev-users-server
                  </a>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#30363d] text-gray-300">7 commits</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-[#30363d] overflow-hidden">
                  <div className="h-full bg-[#2da44e] rounded-full" style={{ width: "80%" }} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-sm text-[#58a6ff] hover:underline font-mono">
                    svg-image-stograge/lazy-dev-stograge
                  </a>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-[#30363d] text-gray-300">2 commits</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-[#30363d] overflow-hidden">
                  <div className="h-full bg-[#2da44e] rounded-full" style={{ width: "20%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commit Activity 2 */}
      <div className="group relative">
        <div className="flex gap-2">
          <div className="mt-1">
            <div className="w-7 h-7 rounded-full bg-[#238636] bg-opacity-10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#238636]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.225.31A3.971 3.971 0 0113 11.25a3.97 3.97 0 01-1.275 3.19.75.75 0 01-1.025-1.086A2.47 2.47 0 0011.5 11.25a2.47 2.47 0 00-.8-2.104.75.75 0 011.025-1.086zM4.375 8.06a.75.75 0 011.025 1.086A2.47 2.47 0 004.5 11.25a2.47 2.47 0 00.8 2.104.75.75 0 01-1.025 1.086A3.97 3.97 0 013 11.25a3.97 3.97 0 011.375-3.19z" />
                <path d="M8 13.25A3.75 3.75 0 114.25 9.5 3.75 3.75 0 018 13.25zm0-1.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between group">
              <h3 className="text-sm text-gray-200">Created 46 commits in 8 repositories</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Subscribe</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Repository Activity */}
      <div className="group relative">
        <div className="flex gap-2">
          <div className="mt-1">
            <div className="w-7 h-7 rounded-full bg-[#238636] bg-opacity-10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#238636]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between group">
              <h3 className="text-sm text-gray-200">Created 1 repository</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Subscribe</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-1">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#7d8590]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                </svg>
                <a href="#" className="text-sm text-[#58a6ff] hover:underline font-mono">
                  ceb-the-calangthang/work_together_server
                </a>
                <span className="text-xs text-[#7d8590]">Dec 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pull Request Activity */}
      <div className="group relative">
        <div className="flex gap-2">
          <div className="mt-1">
            <div className="w-7 h-7 rounded-full bg-[#238636] bg-opacity-10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-[#238636]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M1.5 3.25a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zm5.677-.177L9.573.677A.25.25 0 0110 .854V2.5h1A2.5 2.5 0 0113.5 5v5.628a2.251 2.251 0 11-1.5 0V5a1 1 0 00-1-1h-1v1.646a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm0 9.5a.75.75 0 100 1.5.75.75 0 000-1.5zm8.25.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between group">
              <h3 className="text-sm text-gray-200">Opened 11 pull requests in 4 repositories</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                  <DropdownMenuItem>Subscribe</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-1">
              <div className="flex items-center gap-2">
                <a href="#" className="text-sm text-[#58a6ff] hover:underline font-mono">
                  carp-team-llc/izy-tasks-server
                </a>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-[#3c1e4d] text-[#a371f7] rounded-full">
                  merged
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

