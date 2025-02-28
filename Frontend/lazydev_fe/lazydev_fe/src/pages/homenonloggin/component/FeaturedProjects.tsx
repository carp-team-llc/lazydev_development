"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "An innovative solution using Next.js and Tailwind.",
      image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
      tags: ["NEXTJS", "REACT", "TAILWIND"],
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Revolutionizing UI/UX with modern web technologies.",
      image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
      tags: ["DESIGN", "UI/UX", "FIGMA"],
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A fast and scalable backend with Node.js.",
      image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
      tags: ["NODEJS", "EXPRESS", "MONGODB"],
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Automating workflows with AI and machine learning.",
      image: "https://raw.githubusercontent.com/svg-image-stograge/lazy-dev-stograge/refs/heads/main/anime-girl-with-tattoo-4k-wallpaper-uhdpaper.com-682%402%40b.jpg",
      tags: ["AI", "ML", "PYTHON"],
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  // Xử lý nút điều hướng
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 overflow-hidden relative">
      <h2 className="flex text-xl font-bold text-white mb-8 justify-center">
        FEATURED PROJECTS
      </h2>

      <div className="relative w-full overflow-hidden">
        {/* Nút điều hướng trái */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:scale-110 transition z-10"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Carousel giữ nguyên bố cục */}
        <div ref={carouselRef} className="carousel flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-10">
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="carousel-item min-w-[300px]">
              <div className="relative group">
                {/* Ảnh với hiệu ứng hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Nội dung chuyển xuống dưới ảnh */}
              <div className=" text-white p-4 rounded-b-xl mt-2">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="flex gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-yellow-500 px-2 py-1 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút điều hướng phải */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:scale-110 transition z-10"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
