'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ArrowUpIcon } from "@heroicons/react/24/outline"; // Import the ArrowUpIcon

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [isScrolled, setIsScrolled] = useState(false); // Track if user has scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to check and set theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
    }

    // Track the scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Show button after 100px of scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isDarkMode === null) return null; // Prevent rendering before determining the theme

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-20 mb-0" // Adjusted z-index and mb-0
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Aidpal Logo.png" // Updated to use the local Aidpal Logo.png
            alt="Aidpal Logo - A blue arch with a protective figure and green leaf symbol"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full bg-gray-300 dark:bg-gray-600"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-yellow-500" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-500" />
          )}
        </button>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </motion.header>
  );
}
