

"use client";

import { motion } from "framer-motion";
import { FaCamera, FaFirstAid, FaMicrophone, FaPhone, FaClipboardList, FaBookMedical } from "react-icons/fa";

const features = [
  {
    icon: FaCamera,
    title: "Smart Injury Detection",
    description: "Instantly identify injuries with cutting-edge image recognition.",
  },
  {
    icon: FaBookMedical,  // New icon for First Aid Guidance
    title: "First Aid Guidance",
    description: "Get real-time first aid guidance based on the injury detected.",
  },
  {
    icon: FaFirstAid,
    title: "Visual Aid Instructions",
    description: "Master first aid with interactive 3D models and animations.",
  },
  { icon: FaMicrophone, title: "Voice-Guided Assistance", description: "Get clear, step-by-step audio instructions." },
  {
    icon: FaPhone,
    title: "One-Tap EMS Contact",
    description: "Connect to emergency services instantly when it matters.",
  },
  {
    icon: FaClipboardList,
    title: "Aid Logging",
    description: "Track and log all aid provided for a seamless EMS handover.",
  },

];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-12 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-gray-600 shadow-lg rounded-2xl"
            >
              <feature.icon className="text-4xl text-green-500 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
