// components/Mission.tsx
"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6"
        >
          Our Mission
        </motion.h2>
        <p className="text-xl max-w-3xl mx-auto">
          To empower individuals with accessible, real-time AI-driven first aid assistance through a user-friendly
          web application, enabling anyone, regardless of experience, to provide effective emergency care and save
          lives.
        </p>
      </div>
    </motion.section>
  );
}
