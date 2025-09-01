import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import SequentialRunningBorder from "./RotatingBorderButton";

const Hero = ({ isVisible }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const preContentRef = useRef(null);
  const borderRef = useRef(null);

  // useEffect(() => {
  //   // Create the rotating border animation
  //   if (borderRef.current) {
  //     const borderElement = borderRef.current;

  //     // Clear any existing spans
  //     borderElement.innerHTML = "";

  //     // Create the border spans
  //     for (let i = 0; i < 4; i++) {
  //       const span = document.createElement("span");
  //       borderElement.appendChild(span);
  //     }

  //     // Animate the border with GSAP
  //     gsap.to(borderElement.children, {
  //       rotation: 360,
  //       duration: 8,
  //       repeat: -1,
  //       ease: "linear",
  //       stagger: {
  //         each: 2,
  //         from: "start",
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create smoke particles
    const particles = [];
    const particleCount = 40;

    // Gray color palette for smoke
    const grayColors = [
      "rgba(180, 180, 180, 0.15)",
      "rgba(160, 160, 160, 0.12)",
      "rgba(140, 140, 140, 0.10)",
      "rgba(120, 120, 120, 0.08)",
      "rgba(100, 100, 100, 0.06)",
    ];

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 60 + 40;
        this.speed = Math.random() * 0.5 + 0.3;
        this.horizontalSpeed = (Math.random() - 0.5) * 0.6;
        this.color = grayColors[Math.floor(Math.random() * grayColors.length)];
        this.life = 0;
        this.targetLife = Math.random() * 0.8 + 0.2;
        this.oscillation = Math.random() * 3;
        this.oscillationSpeed = Math.random() * 0.02 + 0.01;
        this.oscillationPos = Math.random() * Math.PI * 2;
        this.path = [];
        this.maxPathLength = 15;
      }

      update() {
        // Animate life with GSAP for smooth fade in/out
        if (this.life < this.targetLife) {
          this.life += 0.01;
        }

        // Move particle
        this.y -= this.speed;
        this.x +=
          this.horizontalSpeed +
          Math.sin(this.oscillationPos) * this.oscillation;
        this.oscillationPos += this.oscillationSpeed;

        // Record path
        this.path.push({ x: this.x, y: this.y });
        if (this.path.length > this.maxPathLength) {
          this.path.shift();
        }

        // Check if particle should reset
        if (this.y < -this.size || this.life >= this.targetLife) {
          this.life -= 0.02;
          if (this.life <= 0) {
            this.reset();
          }
        }
      }

      draw() {
        if (this.path.length < 3) return;

        ctx.globalAlpha = this.life;

        // Draw smooth smoke trail
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y);

        for (let i = 1; i < this.path.length - 2; i++) {
          const xc = (this.path[i].x + this.path[i + 1].x) / 2;
          const yc = (this.path[i].y + this.path[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.path[i].x, this.path[i].y, xc, yc);
        }

        // Curve through the last two points
        ctx.quadraticCurveTo(
          this.path[this.path.length - 2].x,
          this.path[this.path.length - 2].y,
          this.path[this.path.length - 1].x,
          this.path[this.path.length - 1].y
        );

        // Create gradient for the smoke trail
        const gradient = ctx.createLinearGradient(
          this.path[0].x,
          this.path[0].y,
          this.path[this.path.length - 1].x,
          this.path[this.path.length - 1].y
        );

        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size * 0.6;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        ctx.globalAlpha = 1;
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
      // Stagger initial positions
      particles[i].y = Math.random() * canvas.height;
      particles[i].life = Math.random() * 0.5;
    }

    // Animation function
    const animate = () => {
      // Clear with subtle fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Use lighter blend mode for smoke
      ctx.globalCompositeOperation = "lighten";

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Animate text elements with GSAP
  useEffect(() => {
    if (isVisible.hero && containerRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        containerRef.current.querySelector("h1"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          containerRef.current.querySelector("p:nth-of-type(1)"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          containerRef.current.querySelector("p:nth-of-type(2)"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          containerRef.current.querySelector(".flex.gap-6"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          containerRef.current.querySelector(".flex.flex-col.items-center"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
    }
  }, [isVisible.hero]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-800 z-0" />

      {/* Canvas with smoke */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-1 opacity-80"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-2" />

      {/* Hero content */}
      <div
        id="hero"
        ref={containerRef}
        className={`relative z-10 max-w-4xl transition-all duration-1000 mt-40 ${
          isVisible.hero
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rotating-border-wrapper inline-block mb-6 mx-auto relative">
          {/* Rotating border element */}
          <div ref={borderRef} className="rotating-border"></div>

          <SequentialRunningBorder borderColor="#3b82f6">
            <div className="flex items-center px-6 py-2">
              <span className="w-2 h-2 rounded-full bg-gray-50 mr-2 blink-dot"></span>
              <span className="text-gray-200 text-lg">
                Crafting Unique Brand Identities
              </span>
            </div>
          </SequentialRunningBorder>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
          Crafting Unique Brand Identities
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4 text-gray-200">
          Branding that you need Indeed
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Elevate your brand with custom identity and package design. Showcase
          your story through bold visuals and strategic design solutions.
        </p>

        <div className="flex gap-6 justify-center mb-16 flex-wrap">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
            Get Started Now
          </button>
          <button className="border border-purple-400 text-purple-200 hover:bg-purple-500/20 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/10">
            See Projects
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-300">Scroll down</p>
          <p className="text-sm text-gray-300">to see projects</p>
          <ChevronDown className="w-6 h-6 text-purple-300 animate-bounce" />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="w-px h-12 bg-gradient-to-b from-purple-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
