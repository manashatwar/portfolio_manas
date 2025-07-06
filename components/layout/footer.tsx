"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">
              <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-slate-400">.dev</span>
            </h2>
            <p className="text-slate-400 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Building the decentralized future through innovative blockchain solutions and research.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-slate-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Projects
                </a>
              </li>
              <li>
                <a href="#articles" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm sm:text-base">{personalInfo.email}</li>
              <li className="text-slate-400 text-sm sm:text-base">Based in {personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors text-sm"
            whileHover={{ y: -3 }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="sm:w-4 sm:h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
