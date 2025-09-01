import React from "react";

const SequentialRunningBorder = ({
  children,
  borderColor = "#3b82f6",
  backgroundColor = "transparent",
  borderWidth = 3,
  animationSpeed = "4s",
  borderRadius = "12px",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius }}
    >
      {/* Top border runner */}
      <div
        className="absolute top-0 left-0 h-0.5 w-20 opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderColor}, transparent)`,
          animation: `runTop ${animationSpeed} linear infinite`,
          height: `${borderWidth}px`,
        }}
      />

      {/* Right border runner */}
      <div
        className="absolute top-0 right-0 w-0.5 h-20 opacity-80"
        style={{
          background: `linear-gradient(180deg, transparent, ${borderColor}, transparent)`,
          animation: `runRight ${animationSpeed} linear infinite ${
            parseFloat(animationSpeed) * 0.25
          }s`,
          width: `${borderWidth}px`,
        }}
      />

      {/* Bottom border runner */}
      <div
        className="absolute bottom-0 right-0 h-0.5 w-20 opacity-80"
        style={{
          background: `linear-gradient(270deg, transparent, ${borderColor}, transparent)`,
          animation: `runBottom ${animationSpeed} linear infinite ${
            parseFloat(animationSpeed) * 0.5
          }s`,
          height: `${borderWidth}px`,
        }}
      />

      {/* Left border runner */}
      <div
        className="absolute bottom-0 left-0 w-0.5 h-20 opacity-80"
        style={{
          background: `linear-gradient(0deg, transparent, ${borderColor}, transparent)`,
          animation: `runLeft ${animationSpeed} linear infinite ${
            parseFloat(animationSpeed) * 0.75
          }s`,
          width: `${borderWidth}px`,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10"
        style={{
          backgroundColor,
          margin: `${borderWidth}px`,
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
          minHeight: "60px",
        }}
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes runTop {
          0% {
            left: -80px;
          }
          25% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes runRight {
          0%,
          25% {
            top: -80px;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes runBottom {
          0%,
          50% {
            right: -80px;
          }
          75% {
            right: 100%;
          }
          100% {
            right: 100%;
          }
        }
        @keyframes runLeft {
          0%,
          75% {
            bottom: -80px;
          }
          100% {
            bottom: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SequentialRunningBorder;
