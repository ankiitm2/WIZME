import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">
          What Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {["John Doe", "Jane Smith"].map((name, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-6 border rounded-lg shadow bg-gray-50"
            >
              <p className="italic mb-4">
                “Amazing work, delivered beyond expectations!”
              </p>
              <h4 className="font-semibold">{name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
