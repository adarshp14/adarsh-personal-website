"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4 bg-gray-50 dark:bg-netflix-black/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-8 text-netflix-red"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-6"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/adarshp14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-netflix-black dark:text-netflix-gray hover:text-netflix-red dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/adarsh-pandey-2017/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-netflix-black dark:text-netflix-gray hover:text-netflix-red dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:adarshpofficial@gmail.com"
            className="flex items-center space-x-2 text-netflix-black dark:text-netflix-gray hover:text-netflix-red dark:hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>adarshpofficial@gmail.com</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

