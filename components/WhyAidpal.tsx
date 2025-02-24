"use client"

import { motion } from "framer-motion"

export default function WhyAidpal() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Aidpal?</h2>
        <p className="text-xl text-white-600 max-w-3xl mx-auto">
          Emergencies strike anywhere, anytime. Many feel helpless without first aid skills. Aidpal empowers you with
          expert guidance at your fingertips, helping you act confidently and save lives.
        </p>
      </div>
    </motion.section>
  )
}

