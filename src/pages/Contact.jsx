import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Link2, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 mt-20">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Card - Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
        >
          {/* Profile Header */}
          <div className="flex items-center mb-6">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <p className="text-sm text-gray-400">Founder</p>
              <h2 className="text-lg font-bold">Himanshu Deshwal</h2>
            </div>
          </div>

          <p className="text-gray-300 text-sm mb-6">
            Whizzme, founded by{" "}
            <span className="font-semibold">Himanshu Deshwal</span>, is a
            creative design studio helping brands grow through SEO, Graphics,
            and UI/UX design. Book your free call today and start your success
            journey!
          </p>

          {/* Meeting Details */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-purple-400" />
              Saturday, August 30, 2025 &nbsp; 5:20 – 5:30 pm
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-purple-400" />
              10m
            </div>
            <div className="flex items-center">
              <Link2 size={16} className="mr-2 text-purple-400" />
              Link meeting
            </div>
            <div className="flex items-center">
              <Globe size={16} className="mr-2 text-purple-400" />
              UTC
            </div>
          </div>
        </motion.div>

        {/* Middle - Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">September 2025</h3>
            <div className="flex space-x-2">
              <button className="px-2 py-1 bg-zinc-800 rounded">‹</button>
              <button className="px-2 py-1 bg-zinc-800 rounded">›</button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-xs text-gray-400">
                {d}
              </div>
            ))}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg ${
                  i === 0
                    ? "bg-gray-500"
                    : "bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Time Slots */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Mon 01</h3>
            <div className="flex bg-zinc-800 rounded-lg">
              <button className="px-3 py-1 text-sm bg-white text-black rounded-lg">
                12h
              </button>
              <button className="px-3 py-1 text-sm text-gray-400">24h</button>
            </div>
          </div>

          <div className="space-y-2 overflow-y-auto h-[400px] pr-2">
            {[
              "9:40am",
              "9:50am",
              "10:00am",
              "10:20am",
              "10:30am",
              "10:40am",
              "10:50am",
              "11:00am",
              "11:10am",
              "11:20am",
            ].map((time) => (
              <button
                key={time}
                className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700"
              >
                {time}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
