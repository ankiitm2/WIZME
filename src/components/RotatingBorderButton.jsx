import React from "react";

const SequentialRunningBorder = ({
  children,
  borderColor = "#3b82f6",
  backgroundColor = "transparent",
  borderWidth = 3,
  animationSpeed = "12s",
  borderRadius = "12px",
  className = "",
  borderLength = "30%", // New prop to control the length of the running border
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius,
        padding: `${borderWidth}px`,
        backgroundColor,
      }}
    >
      {/* Runner - Increased width version */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          borderRadius,
          pointerEvents: "none",
        }}
      >
        <div
          className="absolute"
          style={{
            width: borderLength, // Use the borderLength prop
            height: `${borderWidth}px`,
            background: borderColor,
            animation: `moveBorder ${animationSpeed} linear infinite`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10" style={{ borderRadius }}>
        {children}
      </div>

      <style jsx>{`
        @keyframes moveBorder {
          0% {
            top: -${borderWidth}px;
            left: -${borderLength};
            transform: rotate(0deg);
          }
          14% {
            top: -${borderWidth}px;
            left: 100%;
            transform: rotate(0deg);
          }
          15% {
            top: -${borderWidth}px;
            left: calc(100% - ${borderWidth}px);
            transform: rotate(90deg);
          }
          29% {
            top: 100%;
            left: calc(100% - ${borderWidth}px);
            transform: rotate(90deg);
          }
          30% {
            top: calc(100% - ${borderWidth}px);
            left: 100%;
            transform: rotate(180deg);
          }
          44% {
            top: calc(100% - ${borderWidth}px);
            left: -${borderLength};
            transform: rotate(180deg);
          }
          45% {
            top: 100%;
            left: -${borderWidth}px;
            transform: rotate(270deg);
          }
          59% {
            top: -${borderLength};
            left: -${borderWidth}px;
            transform: rotate(270deg);
          }
          60% {
            top: -${borderWidth}px;
            left: -${borderWidth}px;
            transform: rotate(360deg);
          }
          74% {
            top: -${borderWidth}px;
            left: 100%;
            transform: rotate(360deg);
          }
          75% {
            top: -${borderWidth}px;
            left: calc(100% - ${borderWidth}px);
            transform: rotate(450deg);
          }
          89% {
            top: 100%;
            left: calc(100% - ${borderWidth}px);
            transform: rotate(450deg);
          }
          90% {
            top: calc(100% - ${borderWidth}px);
            left: 100%;
            transform: rotate(540deg);
          }
          100% {
            top: calc(100% - ${borderWidth}px);
            left: 100%;
            transform: rotate(540deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SequentialRunningBorder;
