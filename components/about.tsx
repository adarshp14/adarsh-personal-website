"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function About() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript/TypeScript", "SQL"],
    "Frameworks & Libraries": ["Spring Boot", "Node.js", "React.js", "Express.js"],
    "Cloud & DevOps": ["OpenShift", "Docker", "Kubernetes", "Jenkins"],
    Databases: ["MongoDB", "Oracle", "PostgreSQL", "Redis"],
    "Tools & Technologies": ["Kafka", "gRPC", "GraphQL", "REST APIs"],
  }

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
          className="text-4xl font-bold mb-8 text-netflix-red"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 dark:bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-gray-200 dark:border-white/10"
        >
          <p className="text-lg mb-8 text-netflix-black dark:text-netflix-gray">
            I'm a highly skilled backend developer with over 5 years of experience in building scalable APIs,
            microservices, and AI integrations. My passion lies in creating robust and efficient backend systems that
            power modern applications.
          </p>
          <h3 className="text-2xl font-semibold mb-6 text-netflix-black dark:text-white">Technical Expertise</h3>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              >
                <button
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className="w-full text-left p-4 bg-netflix-red/10 hover:bg-netflix-red/20 rounded-lg transition-colors flex justify-between items-center"
                >
                  <span className="text-lg font-semibold text-netflix-red">{category}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeCategory === category ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 p-4">
                        {skillList.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-netflix-red/10 border border-netflix-red/20 rounded-lg p-2 text-center hover:bg-netflix-red/20 transition-colors"
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

