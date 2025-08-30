import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-3 h-3 rounded-full border-2 bg-gray-50 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-gray-50 animate-pulse"></div>
        </div>
      </div>

      {/* Smoke effect elements */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        <div
          className="absolute rounded-full bg-purple-900/10 blur-3xl"
          style={{
            left: `${position.x - 100}px`,
            top: `${position.y - 100}px`,
            width: "200px",
            height: "200px",
          }}
        ></div>
        <div
          className="absolute rounded-full bg-blue-900/10 blur-3xl"
          style={{
            left: `${position.x - 150}px`,
            top: `${position.y - 150}px`,
            width: "300px",
            height: "300px",
          }}
        ></div>
      </div>
    </>
  );
};

export default CursorFollower;
