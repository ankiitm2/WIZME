import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Branding", "Web Design", "Development"].map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                We provide top-notch {service.toLowerCase()} solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
