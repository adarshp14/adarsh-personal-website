"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  { name: "Spring Boot", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "gRPC", category: "API" },
  { name: "Kafka", category: "Messaging" },
  { name: "MongoDB", category: "Database" },
  { name: "AI Inference Models", category: "AI" },
  { name: "GraphQL", category: "API" },
  { name: "OpenShift", category: "Cloud" },
  { name: "Oracle", category: "Database" },
]

export function TechnicalSkills() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...new Set(skills.map((skill) => skill.category))]

  const filteredSkills = filter === "All" ? skills : skills.filter((skill) => skill.category === filter)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary-500 dark:text-primary-400">Technical Skills</h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full ${
              filter === category
                ? "bg-secondary-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 p-4 rounded-lg shadow-md"
          >
            <p className="text-center text-gray-800 dark:text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

