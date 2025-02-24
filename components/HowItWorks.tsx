"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const steps = [
  { title: "Snap a photo of the injury", image: "/Mock 3.png?height=200&width=200" },
  { title: "Follow tailored first aid guidance", image: "/Mock 2.png?height=200&width=200" },
  { title: "Contact EMS with one tap if needed", image: "/Mock 1.png?height=200&width=200" },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-12 text-center">How It Works</h2>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center max-w-xs"
            >
              <div className="mb-4 relative">
                <Image
                  src={step.image || "\Mock 3.png"}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <p className="text-center text-lg font-semibold">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

