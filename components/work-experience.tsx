"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "Citi Bank",
    role: "Senior Backend Developer",
    period: "2022 - Present",
    achievements: [
      "Reduced API payload by 60% using Avro & Protobuf",
      "Improved MongoDB & Oracle performance by 50%",
      "Built event-driven microservices with Kafka",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Backend Developer",
    period: "2019 - 2022",
    achievements: [
      "Developed RESTful APIs for financial services",
      "Implemented CI/CD pipelines for faster deployments",
      "Optimized database queries for improved performance",
    ],
  },
]

export function WorkExperience() {
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
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-white/5 rounded-lg p-8 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-netflix-red/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-2 text-netflix-black dark:text-white">{exp.company}</h3>
              <div className="text-netflix-red mb-4">
                {exp.role} | {exp.period}
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-netflix-black dark:text-netflix-gray flex items-start">
                    <span className="text-netflix-red mr-2">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

