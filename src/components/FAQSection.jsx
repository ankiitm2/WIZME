import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/moving-border";

const FAQSection = ({
  title = "Answers",
  subtitle = "Find answers to common questions about my design process, services etc...",
  image,
  categories = [],
  faqs = [],
  ctaText = "Book a Free Call",
  onCtaClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-black text-white px-6 py-16 md:px-12 lg:px-20 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <Button borderRadius="1.75rem" className="bg-black text-sm">
            {" "}
            <span className="w-2 h-2 rounded-full text-sm bg-gray-50 uppercase mr-2 blink-dot"></span>
            FAQ’s
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">{title}</h2>
          <p className="mt-4 text-gray-400">{subtitle}</p>

          {/* Image */}
          {image && (
            <motion.img
              src={image}
              alt="FAQ illustration"
              className="rounded-2xl mt-8 w-full object-cover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-md bg-zinc-900 text-sm border border-zinc-800"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* CTA */}
          {ctaText && (
            // <button
            //   onClick={onCtaClick}
            //   className="mt-6 px-6 py-3 rounded-xl bg-black border border-zinc-700 hover:border-orange-400 hover:text-orange-400 transition"
            // >
            //   {ctaText}
            // </button>
            <button
              onClick={onCtaClick}
              className="RotateBtn RotateBtn-gray text-sm px-6 py-2"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {ctaText}
            </button>
          )}
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-orange-400">
                  {activeIndex === idx ? "×" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-4 pb-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
