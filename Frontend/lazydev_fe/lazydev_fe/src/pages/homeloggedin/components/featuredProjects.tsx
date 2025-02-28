const featuredProjects = [
  {
    id: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "stabe0",
    repo: "pychrome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stars: 672,
    language: "Python",
  },
  {
    id: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "stabe0",
    repo: "pychrome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stars: 672,
    language: "Python",
  },
  {
    id: 3,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "stabe0",
    repo: "pychrome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stars: 672,
    language: "Python",
  },
  {
    id: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "stabe0",
    repo: "pychrome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stars: 672,
    language: "Python",
  },
  {
    id: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    name: "stabe0",
    repo: "pychrome",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stars: 672,
    language: "Python",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="w-80 bg-[#0D1117] border-r border-[#30363D]  p-6 space-y-6">
      <h2 className="text-base font-semibold text-white">Featured Project</h2>
      <div className="space-y-6">
        {featuredProjects.map((project, index) => (
          <div key={project.id}>
            <div className="group rounded-lg hover:bg-[#161B22] p-4 -mx-4 cursor-pointer transition-colors">
              <div className="flex items-start gap-3">
                <img
                  src={project.avatar || "/placeholder.svg"}
                  alt=""
                  className="w-10 h-10 rounded-full bg-[#161B22] border border-[#30363D]"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-sm">
                    <span className="text-gray-300 font-medium">
                      {project.name}
                    </span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500 truncate">
                      {project.repo}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      <span className="text-xs">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-3 w-3 rounded-full bg-[#3572A5]"></span>
                      <span className="text-xs text-gray-400">
                        {project.language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index !== featuredProjects.length - 1 && (
              <hr className="border-[#30363D]  border-t-2 my-2" />
            )}
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center text-[#58A6FF] text-sm hover:underline gap-1"
      >
        Explore more
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
