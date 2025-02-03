"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-netflix-red"
        >
          Featured Projects
        </motion.h2>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          {/* Project Card with Video */}
          <div className="relative group">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/iOQiUZvIZTw"
                title="AI Portrait Generation Demo"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-netflix-black dark:text-white">
                AI Portrait Generation System
              </h3>
              <p className="text-netflix-gray mb-6 max-w-2xl">
                A cutting-edge AI system for generating unique portrait images based on user input. Features include
                style selection, background customization, lighting control, and pose adjustment.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://ai-portrait-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-netflix-red hover:bg-red-700 text-white px-6 py-2 rounded transition-colors"
                >
                  View Project
                </Link>
                <Link
                  href="https://github.com/adarshp14/ai-portrait-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-netflix-black dark:text-white px-6 py-2 rounded transition-colors"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

