import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">
          Our Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="p-6 bg-white shadow rounded-lg"
            >
              <img
                src={`/assets/project${i}.jpg`}
                alt={`Project ${i}`}
                className="rounded mb-4"
              />
              <h3 className="text-xl font-semibold">Project {i}</h3>
              <p className="text-gray-600">Description of project {i}.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
