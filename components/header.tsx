"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Code, Briefcase, Trophy, User, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const navItems = [
    { name: "About", icon: User, href: "#about" },
    { name: "Experience", icon: Briefcase, href: "#experience" },
    { name: "Projects", icon: Code, href: "#projects" },
    { name: "Achievements", icon: Trophy, href: "#achievements" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-netflix-black/80 to-black/80" />

      <div className="container mx-auto px-4 py-4">
        <div className="relative flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-netflix-red via-purple-500 to-netflix-red rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <Link
              href="/"
              className="relative block px-4 py-1 bg-black ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-netflix-red via-purple-500 to-netflix-red">
                AP
              </span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors group"
                  >
                    <Icon className="w-4 h-4 group-hover:text-netflix-red transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.nav>

          {/* Theme Toggle */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-netflix-red to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative p-2 rounded-full bg-black/50 text-white hover:text-netflix-red transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
                )}
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}

