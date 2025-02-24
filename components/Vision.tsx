// components/Vision.tsx
"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-blue-600 dark:bg-gray-800 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Our Vision
        </motion.h2>
        <p className="text-xl max-w-3xl mx-auto">
          To be the leading platform for accessible, interactive, and efficient first aid training and support,
          revolutionizing emergency care by ensuring that everyone, everywhere, has the knowledge and tools to act
          confidently in critical moments.
        </p>
      </div>
    </motion.section>
  );
}
