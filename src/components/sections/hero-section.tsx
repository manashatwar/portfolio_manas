"use client"

import { useState } from "react"
import HeroIntroOverlay from "../HeroIntroOverlay"
import { motion } from "framer-motion"
import { ChevronDown, Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react"

import Image from "next/image"

import NeonName from "./NeonName"
import "./neon-name.css"
import { personalInfo } from "@/lib/data/personal-info"

export default function HeroSection() {
  const [showOverlay, setShowOverlay] = useState(true)




  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="home" className="relative min-h-screen bg-slate-950 pt-16">
      {/* Overlay intro effect */}
      {showOverlay && (
        <HeroIntroOverlay onFinish={() => setShowOverlay(false)} />
      )}

      {/* Main content, hidden from pointer events while overlay is active */}
      <div style={showOverlay ? { pointerEvents: "none", userSelect: "none", filter: "blur(2px)", opacity: 0.7 } : {}}>
        {/* ...existing code... */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.corporatefinanceinstitute.com/assets/AdobeStock_280230556-scaled.jpeg"
            alt="Blockchain Architecture"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-950/80" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-slate-950/90" />
        </div>

        <div className="relative z-10 min-h-screen">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto px-8 min-h-screen">
              <div className="flex min-h-screen items-center justify-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Neon Manas Hatwar effect (replaces plain text) */}
                  <div className="py-2 flex justify-start lg:pl+12 xl:pl+20 2xl:pl+36">
                    <span className="text-gradient" style={{ display: 'inline-block' }}>
                      <NeonName />
                    </span>
                  </div>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-3xl text-slate-200 font-light drop-shadow-md"
                  >
                    {personalInfo.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg text-slate-300 leading-relaxed max-w-lg drop-shadow-md"
                  >
                    {personalInfo.tagline}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex gap-4"
                  >
                    <a
                      href="#projects"
                      className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors inline-flex items-center space-x-2 shadow-lg"
                    >
                      <span>View Projects</span>
                      <ArrowRight size={18} />
                    </a>

                    <a
                      href="#contact"
                      className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700/80 border border-slate-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
                    >
                      <Mail size={18} />
                      <span>Get In Touch</span>
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex items-center space-x-6 pt-4"
                  >
                    <span className="text-slate-400 text-sm font-medium">Connect:</span>
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personalInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  </motion.div>
                </motion.div>


              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <div className="max-w-lg mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center space-y-6 sm:space-y-8">
              {/* Neon Manas Hatwar effect for mobile (replaces plain text) */}
              <div className="py-2">
                <NeonName />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-200 font-light px-4 drop-shadow-md"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed px-4 drop-shadow-md"
              >
                {personalInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4"
              >
                <a
                  href="#projects"
                  className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg"
                >
                  <span>View Projects</span>
                  <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                </a>

                <a
                  href="#contact"
                  className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700/80 border border-slate-700 transition-colors inline-flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg"
                >
                  <Mail size={16} className="sm:w-5 sm:h-5" />
                  <span>Get In Touch</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex items-center justify-center space-x-6 pt-4"
              >
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Twitter size={20} className="sm:w-6 sm:h-6" />
                </a>
              </motion.div>
            </div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-slate-300 hover:text-white transition-colors"
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <ChevronDown size={24} className="sm:w-7 sm:h-7 animate-bounce drop-shadow-md" />
        </motion.button>
        {/* ...existing code... */}
      </div>
    </section>
  )
}
