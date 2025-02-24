





"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import emailjs from "emailjs-com" // Import EmailJS

export default function CallToAction() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Send email using EmailJS with environment variables
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,  // Your Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // Your Template ID
      { name, email }, // Data to send
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!  // Your User ID
    )
      .then((response) => {
        alert("Thanks for joining the waitlist!")
        // Clear the form after successful submission
        setName("")
        setEmail("")
      })
      .catch((err) => {
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <section id="waitlist" className="py-16 bg-blue-600 text-white dark:bg-gray-800 dark:text-white rounded-lg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Be the first to experience Aidpal</h2>
          <p className="text-xl mb-8">Sign up now and join our waitlist!</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white text-gray-800 rounded-lg"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-800 rounded-lg"
            />
            <Button 
              type="submit" 
              className="bg-green-400 hover:bg-green-500 text-white rounded-full py-3 px-8 transition duration-300 ease-in-out transform hover:scale-105"
            >
            Join
            </Button>

          </form>
        </motion.div>
      </div>
    </section>
  )
}
