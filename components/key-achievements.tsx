"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const achievements = [
  "Designed and implemented a hybrid API model combining REST and gRPC, resulting in a 40% reduction in response times",
  "Optimized the user onboarding system to handle 10,000+ concurrent users with 99.9% uptime",
  "Developed a secure AI-based image processing backend that processes 1M+ images monthly",
  "Reduced API payload size by 60% using Avro & Protobuf serialization",
  "Improved MongoDB & Oracle query performance by 50% through optimization",
]

export function KeyAchievements() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-4 bg-gray-50 dark:bg-netflix-black/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-netflix-red"
        >
          Key Achievements
        </motion.h2>
        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-white/5 rounded-lg backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-netflix-red/50 transition-all duration-300 group"
            >
              <CheckCircle className="w-6 h-6 text-netflix-red mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-netflix-black dark:text-netflix-gray text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

