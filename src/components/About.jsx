import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("About Me");
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const containerRef = useRef(null);

  const services = [
    "Product Design",
    "Brand Identity Design",
    "UX Design",
    "Branding",
    "Packaging Design",
    "Figma",
    "Photoshop",
  ];

  const experience = [
    { role: "Freelance", company: "GreenLeaf Co", period: "Currently" },
    { role: "Brand Designer", company: "UrbanFit Studio", period: "2023-24" },
    { role: "Package Designer", company: "GreenK Studio", period: "2020-22" },
  ];

  const projects = [
    {
      name: "Asterisk",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "https://www.behance.net/gallery/asterisk",
    },
    {
      name: "Eooks",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "https://www.behance.net/gallery/eooks",
    },
    {
      name: "Opal",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "https://www.behance.net/gallery/opal",
    },
    {
      name: "Dune",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "https://www.behance.net/gallery/dune",
    },
    {
      name: "Oas",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "https://www.behance.net/gallery/oas",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleProjectHover = (index) => {
    setHoveredIndex(index);
    setShowCustomCursor(true);
    setCursorText("View Project");
  };

  const handleProjectLeave = () => {
    setHoveredIndex(null);
    setShowCustomCursor(false);
  };

  const handleProfileHover = () => {
    setShowCustomCursor(true);
    setCursorText("About Me");
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Custom Cursor */}
      {showCustomCursor && (
        <div
          className="fixed w-20 h-20 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-medium text-center pointer-events-none z-50 transition-opacity duration-300 border border-white/10"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {cursorText}
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Project grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-300 mb-8 text-center">
            Recent Projects
          </h3>
          <div className="parent">
            <div class="div4">
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div5">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div6">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div10">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div11">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div12">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div13">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div14">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="div15">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop"
                alt=""
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-none"
                onMouseEnter={() => handleProjectHover(index)}
                onMouseLeave={handleProjectLeave}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="text-white font-semibold text-center transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
                    {project.name}
                  </div>
                </div>


                <div className="absolute top-3 right-3 bg-blue-600/90 text-white px-2 py-1 rounded text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Behance
                </div>
              </a>
            ))}
          </div> */}
        </div>
      </div>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <style jsx>
        {`
          .parent {
            display: grid;
            grid-template-columns: repeat(3, 2fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 8px;
          }

          .div4 {
            grid-row: span 2 / span 2;
            grid-column-start: 3;
          }

          .div5 {
            grid-row: span 2 / span 2;
            grid-column-start: 3;
            grid-row-start: 3;
          }

          .div6 {
            grid-row: span 2 / span 2;
            grid-column-start: 3;
            grid-row-start: 5;
          }

          .div10 {
            grid-column: span 2 / span 2;
            grid-column-start: 4;
            grid-row-start: 2;
          }

          .div11 {
            grid-column: span 2 / span 2;
            grid-column-start: 4;
            grid-row-start: 3;
          }

          .div12 {
            grid-column: span 2 / span 2;
            grid-column-start: 4;
            grid-row-start: 4;
          }

          .div13 {
            grid-column: span 2 / span 2;
            grid-column-start: 1;
            grid-row-start: 2;
          }

          .div14 {
            grid-column: span 2 / span 2;
            grid-column-start: 1;
            grid-row-start: 3;
          }

          .div15 {
            grid-column: span 2 / span 2;
            grid-column-start: 1;
            grid-row-start: 4;
          }
        `}
      </style>
    </section>
  );
};

export default About;
