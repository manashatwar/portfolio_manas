"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Code, Heart, MapPin, Calendar, Building2, Star, Users } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"

export default function LaptopVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const laptopOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const laptopY = useTransform(scrollYProgress, [0.1, 0.3], [80, 0])
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const contentX = useTransform(scrollYProgress, [0.15, 0.35], [30, 0])

  return (
    <section id="about" ref={containerRef} className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate blockchain developer crafting the future of decentralized technology
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12 sm:space-y-16">
          {/* Top Section - Laptop and Journey */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Laptop Visual */}
            <motion.div
              className="w-full flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Laptop Container */}
                <div className="relative">
                  {/* Screen Outer Frame */}
                  <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-2xl sm:rounded-t-3xl p-2 sm:p-4 shadow-2xl">
                    {/* Screen Inner Frame */}
                    <div className="bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700">
                      {/* Menu Bar */}
                      <div className="bg-slate-800 px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-slate-700">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="flex space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-xs text-slate-400 font-mono hidden sm:block">portfolio.js</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-3 h-1 sm:w-4 sm:h-1 bg-slate-600 rounded"></div>
                          <div className="w-3 h-1 sm:w-4 sm:h-1 bg-slate-600 rounded"></div>
                          <div className="w-3 h-1 sm:w-4 sm:h-1 bg-slate-600 rounded"></div>
                        </div>
                      </div>

                      {/* Code Editor */}
                      <div className="p-3 sm:p-6 h-64 sm:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
                        <div className="font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">1</div>
                            <div className="text-purple-400">
                              <span className="text-blue-400">const</span>{" "}
                              <span className="text-yellow-300">developer</span> = {"{"}
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">2</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">name:</span>{" "}
                              <span className="text-orange-300">"{personalInfo.name}"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">3</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">role:</span>{" "}
                              <span className="text-orange-300">"Blockchain Developer"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">4</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">university:</span>{" "}
                              <span className="text-orange-300">"LNMIIT Jaipur"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">5</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">degree:</span>{" "}
                              <span className="text-orange-300">"B.Tech CCE"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">6</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">year:</span>{" "}
                              <span className="text-orange-300">"2024-Present"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">7</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">skills:</span> [
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">8</div>
                            <div className="ml-4 sm:ml-8 text-orange-300">"Solidity", "React", "Web3",</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">9</div>
                            <div className="ml-4 sm:ml-8 text-orange-300">"DeFi", "Smart Contracts"</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">10</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">],</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">11</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">clubs:</span> [
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">12</div>
                            <div className="ml-4 sm:ml-8 text-orange-300">"Cipher", "Sankalp"</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">13</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">],</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">14</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">passion:</span>{" "}
                              <span className="text-orange-300">"Web3 Innovation"</span>,
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">15</div>
                            <div className="ml-2 sm:ml-4 text-slate-300">
                              <span className="text-green-400">status:</span>{" "}
                              <span className="text-green-300">"Available"</span>
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">16</div>
                            <div className="text-purple-400">{"}"}</div>
                          </div>
                          <div className="flex">
                            <div className="text-slate-600 w-6 sm:w-8 text-right mr-2 sm:mr-4">17</div>
                            <div className="text-slate-500">
                              <span className="text-slate-600">//</span> Ready to innovate 🚀
                            </div>
                          </div>
                        </div>

                        {/* Cursor */}
                        <motion.div
                          className="w-1 h-3 sm:w-2 sm:h-5 bg-orange-400 inline-block ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Laptop Base */}
                  <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-2xl sm:rounded-b-3xl h-6 sm:h-8 shadow-2xl relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 sm:h-2 bg-slate-600 rounded opacity-60"></div>
                    <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 sm:h-2 bg-slate-600 rounded opacity-40"></div>
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"></div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl"></div>
              </div>
            </motion.div>

            {/* My Journey */}
            <motion.div
              className="w-full order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="professional-card h-full">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">My Journey</h3>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"></div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-slate-300 leading-relaxed">
                  {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Journey Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700/50">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">10+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Articles Written</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">3+</div>
                    <div className="text-xs sm:text-sm text-slate-400">Projects Built</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div
            className="w-full relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Education Section Background */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2940&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/85 to-slate-900/80"></div>
            </div>

            <div className="professional-card relative">
              {/* Education Header */}
              <div className="mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2940&auto=format&fit=crop')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/95 to-slate-900/90"></div>
                </div>

                <div className="relative z-10 p-4 sm:p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg sm:rounded-xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Education & Activities</h3>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"></div>
                  <p className="text-slate-300 mt-3 sm:mt-4 text-base sm:text-lg">
                    Academic excellence combined with practical blockchain development experience
                  </p>
                </div>
              </div>

              {/* Education Grid */}
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* University Info */}
                <div className="lg:col-span-2">
                  <motion.div
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full group hover:scale-105 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* University Logo */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg border border-slate-700 mx-auto sm:mx-0">
                        <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
                      </div>

                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-slate-200 transition-colors">
                          The LNM Institute of Information Technology
                        </h4>
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center justify-center sm:justify-start space-x-2">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                            <span className="text-slate-400 text-sm sm:text-base">Jaipur, Rajasthan</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-2">
                            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                            <span className="text-base sm:text-lg text-slate-300 font-semibold">
                              B.Tech in Computer and Communication Engineering
                            </span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start space-x-2">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                            <span className="text-slate-400 font-semibold text-sm sm:text-base">2024 – Present</span>
                          </div>
                        </div>

                        {/* Academic Highlights */}
                        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-700/50">
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            <span className="bg-slate-800 text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-slate-700">
                              Computer Engineering
                            </span>
                            <span className="bg-slate-800 text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-slate-700">
                              Communication Systems
                            </span>
                            <span className="bg-slate-800 text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-slate-700">
                              Network Protocols
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Clubs Section */}
                <div className="lg:col-span-1">
                  <div className="space-y-3 sm:space-y-4 h-full">
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center justify-center lg:justify-start space-x-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                      <span>Active Clubs</span>
                    </h4>

                    {/* Cipher Club */}
                    <motion.div
                      className="bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 group hover:scale-105 transition-all duration-300"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg border border-slate-700">
                          <Code className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
                            Cipher Club
                          </h5>
                          <p className="text-slate-400 text-xs sm:text-sm">Blockchain & Web3</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-2 h-2 sm:w-3 sm:h-3 text-slate-500" />
                            <span className="text-slate-500 text-xs">Active Member</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Sankalp Club */}
                    <motion.div
                      className="bg-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 group hover:scale-105 transition-all duration-300"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center shadow-lg border border-slate-700">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-base sm:text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
                            Sankalp Club
                          </h5>
                          <p className="text-slate-400 text-xs sm:text-sm">Social Service</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-2 h-2 sm:w-3 sm:h-3 text-slate-500" />
                            <span className="text-slate-500 text-xs">Active Member</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                      className="bg-slate-800/30 border border-slate-700/50 rounded-lg sm:rounded-xl p-3 sm:p-4 mt-3 sm:mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-white mb-1">Current Focus</div>
                        <div className="text-xs sm:text-sm text-slate-400">Blockchain Development</div>
                        <div className="text-xs sm:text-sm text-slate-400">Community Building</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300 text-center shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-slate-800 border border-slate-700 text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}