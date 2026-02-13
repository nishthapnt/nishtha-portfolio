import { useState } from "react";
import CodeCard from "./CodeCard";

function Code() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern React-based e-commerce solution with real-time inventory management and payment integration.",
      image: "/images/ecommerce.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://dev-creatives.vercel.app/",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Interactive data visualization dashboard with real-time updates, charts, and detailed analytics reporting.",
      image: "/modern-data-dashboard.png",
      tags: ["React", "D3.js", "REST API"],
    },
    {
      title: "Task Management App",
      description:
        "Responsive task management application with drag-and-drop functionality and team collaboration features.",
      image: "/mobile-app-showcase.png",
      tags: ["React Native", "Firebase", "Redux"],
    },
    // Add more projects here 👇
    {
      title: "Portfolio Website",
      description:
        "Personal branding portfolio showcasing projects and interactive UI design.",
      image: "/web-project.jpg",
      tags: ["React", "Tailwind"],
    },
    {
      title: "Blog Platform",
      description:
        "Content management blog system with authentication and markdown support.",
      image: "/modern-data-dashboard.png",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Weather App",
      description:
        "Real-time weather forecasting application with API integration.",
      image: "/mobile-app-showcase.png",
      tags: ["React", "API"],
    },
    {
      title: "Chat Application",
      description:
        "Realtime chat system with WebSocket integration.",
      image: "/web-project.jpg",
      tags: ["Socket.io", "Node.js"],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="code"
      className="relative py-20 px-6 md:px-10"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,45,92,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,45,92,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-[42px] font-bold text-[#0f2d5c] text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {visibleProjects.map((project, index) => (
            <CodeCard key={index} {...project} />
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#0f2d5c] text-white rounded-full hover:opacity-90 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Code;
