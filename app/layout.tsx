import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adarsh Pandey - Backend Developer",
  description:
    "Personal portfolio of Adarsh Pandey, a highly skilled backend developer with 5+ years of experience in scalable APIs, microservices, and AI integrations.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased transition-colors duration-300 ease-in-out`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen bg-white dark:bg-netflix-black text-netflix-black dark:text-netflix-white">
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
              aria-hidden="true"
            />
            <div className="relative">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

