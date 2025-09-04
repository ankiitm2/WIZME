import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Link2, Globe } from "lucide-react";
import dayjs from "dayjs";
import FAQSection from "../components/FAQSection";

const Contact = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [timeFormat, setTimeFormat] = useState("12h");
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate days for current month
  const startOfMonth = currentMonth.startOf("month").day(); // weekday of first day
  const daysInMonth = currentMonth.daysInMonth();
  const daysArray = Array.from({ length: startOfMonth + daysInMonth }, (_, i) =>
    i < startOfMonth ? null : i - startOfMonth + 1
  );

  // Example time slots
  const baseSlots = [
    "09:40",
    "09:50",
    "10:00",
    "10:20",
    "10:30",
    "10:40",
    "10:50",
    "11:00",
    "11:10",
    "11:20",
  ];

  // Convert time format
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    let h = parseInt(hour, 10);

    if (timeFormat === "24h") {
      return `${h.toString().padStart(2, "0")}:${minute}`;
    } else {
      const suffix = h >= 12 ? "pm" : "am";
      h = h % 12 || 12;
      return `${h}:${minute}${suffix}`;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col p-6 mt-20">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Card - Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
        >
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
            <h3 className="font-semibold">
              {currentMonth.format("MMMM YYYY")}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setCurrentMonth(currentMonth.subtract(1, "month"))
                }
                className="px-2 py-1 bg-zinc-800 rounded"
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
                className="px-2 py-1 bg-zinc-800 rounded"
              >
                ›
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-xs text-gray-400">
                {d}
              </div>
            ))}
            {daysArray.map((day, i) =>
              day ? (
                <div
                  key={i}
                  onClick={() => setSelectedDate(currentMonth.date(day))}
                  className={`p-3 rounded-lg cursor-pointer ${
                    selectedDate.date() === day &&
                    selectedDate.month() === currentMonth.month()
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
                >
                  {day}
                </div>
              ) : (
                <div key={i}></div>
              )
            )}
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
            <h3 className="font-semibold">{selectedDate.format("ddd DD")}</h3>
            <div className="flex bg-zinc-800 rounded-lg">
              <button
                className={`px-3 py-1 text-sm rounded-lg ${
                  timeFormat === "12h" ? "bg-white text-black" : "text-gray-400"
                }`}
                onClick={() => setTimeFormat("12h")}
              >
                12h
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-lg ${
                  timeFormat === "24h" ? "bg-white text-black" : "text-gray-400"
                }`}
                onClick={() => setTimeFormat("24h")}
              >
                24h
              </button>
            </div>
          </div>

          <div className="space-y-2 overflow-y-auto h-[400px] pr-2">
            {baseSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`w-full py-3 rounded-lg ${
                  selectedTime === time
                    ? "bg-purple-600 text-white"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                {formatTime(time)}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <FAQSection />
    </div>
  );
};

export default Contact;
