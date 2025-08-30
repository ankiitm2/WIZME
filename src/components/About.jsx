import React, { useState, useEffect } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("View Project");
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const projects = [
    {
      name: "Asterisk",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Eooks",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Opal",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Dune",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Oas",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Nova",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Luna",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Sol",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
    },
    {
      name: "Orbit",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=400&fit=crop",
      behanceUrl: "#",
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

  return (
    <section
      id="about"
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

          {/* Hive Grid Container */}
          <div className="hive-grid-container">
            <div className="hive-grid">
              {/* Row 1 */}
              <div className="hive-cell hive-cell-1">
                <a
                  href={projects[0]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(0)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[0]?.image}
                    alt={projects[0]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[0]?.name}</div>
                  </div>
                </a>
              </div>

              {/* <div className="hive-cell hive-cell-2">
                <a
                  href={projects[1]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(1)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[1]?.image}
                    alt={projects[1]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[1]?.name}</div>
                  </div>
                </a>
              </div> */}

              <div className="hive-cell hive-cell-3">
                <a
                  href={projects[2]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(2)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[2]?.image}
                    alt={projects[2]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[2]?.name}</div>
                  </div>
                </a>
              </div>

              {/* Row 2 */}
              <div className="hive-cell hive-cell-4">
                <a
                  href={projects[3]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(3)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[3]?.image}
                    alt={projects[3]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[3]?.name}</div>
                  </div>
                </a>
              </div>

              <div className="hive-cell hive-cell-5">
                <a
                  href={projects[4]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(4)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[4]?.image}
                    alt={projects[4]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[4]?.name}</div>
                  </div>
                </a>
              </div>

              {/* <div className="hive-cell hive-cell-6">
                <a
                  href={projects[5]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(5)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[5]?.image}
                    alt={projects[5]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[5]?.name}</div>
                  </div>
                </a>
              </div> */}

              {/* Row 3 */}
              <div className="hive-cell hive-cell-7">
                <a
                  href={projects[6]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(6)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[6]?.image}
                    alt={projects[6]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[6]?.name}</div>
                  </div>
                </a>
              </div>

              <div className="hive-cell hive-cell-8">
                <a
                  href={projects[7]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(7)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[7]?.image}
                    alt={projects[7]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[7]?.name}</div>
                  </div>
                </a>
              </div>

              <div className="hive-cell hive-cell-9">
                <a
                  href={projects[8]?.behanceUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hive-item group"
                  onMouseEnter={() => handleProjectHover(8)}
                  onMouseLeave={handleProjectLeave}
                >
                  <img
                    src={projects[8]?.image}
                    alt={projects[8]?.name}
                    className="hive-image"
                  />
                  <div className="hive-overlay">
                    <div className="hive-title">{projects[8]?.name}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hive-grid-container {
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: 100%;
        }

        .hive-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 4px;
          width: 100%;
        }

        .hive-cell {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .hive-item {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          cursor: none;
        }

        .hive-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(110%);
          transition: all 0.5s ease;
        }

        .hive-item:hover .hive-image {
          filter: grayscale(0%) contrast(100%);
          transform: scale(1.1);
        }

        .hive-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 16px;
        }

        .hive-item:hover .hive-overlay {
          opacity: 1;
        }

        .hive-title {
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
          transform: translateY(10px);
          transition: transform 0.3s ease;
        }

        .hive-item:hover .hive-title {
          transform: translateY(0);
        }

        /* Position each cell in the hive pattern */
        .hive-cell-1 {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
        }

        .hive-cell-2 {
          grid-column: 3 / 4;
          grid-row: 1 / 3;
        }

        .hive-cell-3 {
          grid-column: 4 / 5;
          grid-row: 2 / 4;
        }

        .hive-cell-4 {
          grid-column: 1 / 2;
          grid-row: 2 / 4;
        }

        .hive-cell-5 {
          grid-column: 2 / 3;
          grid-row: 3 / 5;
        }

        .hive-cell-7 {
          grid-column: 4 / 5;
          grid-row: 4 / 6;
        }

        .hive-cell-8 {
          grid-column: 1 / 2;
          grid-row: 4 / 6;
        }

        .hive-cell-9 {
          grid-column: 2 / 3;
          grid-row: 5 / 7;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hive-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, 1fr);
            gap: 8px;
          }

          .hive-cell-1 {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
          }

          .hive-cell-3 {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
          }

          .hive-cell-4 {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
          }

          .hive-cell-5 {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
          }

          .hive-cell-6 {
            grid-column: 2 / 3;
            grid-row: 3 / 4;
          }

          .hive-cell-7 {
            grid-column: 1 / 2;
            grid-row: 4 / 5;
          }

          .hive-cell-8 {
            grid-column: 2 / 3;
            grid-row: 4 / 5;
          }

          .hive-cell-9 {
            grid-column: 1 / 2;
            grid-row: 5 / 6;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
