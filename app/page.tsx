import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WorkExperience } from "@/components/work-experience"
import { Projects } from "@/components/projects"
import { KeyAchievements } from "@/components/key-achievements"
import { Contact } from "@/components/contact"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Cool tech background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <main className="relative z-10">
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <WorkExperience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="achievements">
            <KeyAchievements />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    </>
  )
}

