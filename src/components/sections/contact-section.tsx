"use client"

import type React from "react"


import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MessageSquare, Calendar, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })


  // Formspree integration
  const [state, handleSubmit] = useForm("xzzvwdao")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              Interested in collaborating on blockchain projects or discussing the latest developments in Web3? I'd love
              to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6 sm:space-y-8">
              <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-100">Get In Touch</h3>

                <div className="space-y-4 sm:space-y-6">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-3 sm:space-x-4 text-slate-300 hover:text-white transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Email</div>
                      <div className="text-xs sm:text-sm text-slate-400">{personalInfo.email}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://calendly.com/manashatwar1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 text-slate-300 hover:text-white transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Schedule a Call</div>
                      <div className="text-xs sm:text-sm text-slate-400">Book a consultation</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`https://telegram.me/${personalInfo.social.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 text-slate-300 hover:text-white transition-colors group"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Telegram</div>
                      <div className="text-xs sm:text-sm text-slate-400">{personalInfo.social.telegram}</div>
                    </div>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-800">
                  <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-100">Follow Me</h4>
                  <div className="flex space-x-3 sm:space-x-4">
                    <motion.a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                    <motion.a
                      href={personalInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter size={16} className="sm:w-5 sm:h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-100">Send a Message</h3>

                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 sm:py-8"
                  >
                    <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-400 mx-auto mb-3 sm:mb-4" />
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-400 text-sm sm:text-base">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-sm sm:text-base"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-sm sm:text-base"
                          placeholder="your@email.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors text-sm sm:text-base"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project or question..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                      whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                    >
                      {state.submitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} className="sm:w-5 sm:h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
