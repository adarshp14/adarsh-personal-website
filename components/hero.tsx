"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-netflix-black via-white/60 dark:via-netflix-black/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-netflix-black dark:from-white to-netflix-black/60 dark:to-white/60">
            Adarsh Pandey
          </motion.h1>
          <motion.h2 className="text-2xl sm:text-3xl mb-8 text-netflix-gray">
            Backend Developer & AI Enthusiast
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="https://drive.google.com/file/d/1aqA4nV9QecyklJR3-DWyJ4LFUc0AmE-f/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-netflix-red hover:bg-red-700 text-white px-8 py-3 rounded font-medium transition-colors"
          >
            View Resume
          </Link>
          <Link
            href="https://github.com/adarshp14"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-netflix-black dark:text-white px-8 py-3 rounded font-medium transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/adarsh-pandey-2017/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linkedin-500 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors"
          >
            LinkedIn
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

