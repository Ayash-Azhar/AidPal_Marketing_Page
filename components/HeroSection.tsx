
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    // Scroll smoothly to the "waitlist" section
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 min-h-screen pt-24 pb-16 rounded-lg -mt-16 flex items-center justify-center" // Added flex and centered the content
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
        >
          Be Resourceful in Emergencies with Aidpal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-white-600 mb-8 max-w-2xl mx-auto"
        >
          Using image recognition, 3D visualizations, and voice guidance, Aidpal makes first aid simple and accessible for everyone.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            onClick={scrollToWaitlist}
          >
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
