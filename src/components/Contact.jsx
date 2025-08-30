import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Contact Us
      </motion.h2>

      <motion.form
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 border rounded h-32"
        />
        <button className="px-6 py-3 bg-black text-white rounded-lg">
          Send
        </button>
      </motion.form>
    </section>
  );
}
