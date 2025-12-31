"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, BookOpen, Github, Users } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const stats = [
    {
      icon: Code,
      value: personalInfo.stats.projectsCompleted,
      label: "Projects Completed",
      color: "text-blue-400",
    },
    {
      icon: BookOpen,
      value: personalInfo.stats.totalTVL,
      label: "Total TVL Managed",
      color: "text-green-400",
    },
    {
      icon: Github,
      value: personalInfo.stats.smartContractsDeployed,
      label: "Smart Contracts",
      color: "text-purple-400",
    },
    {
      icon: Users,
      value: personalInfo.stats.securityAudits,
      label: "Security Audits",
      color: "text-orange-400",
    },
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-slate-900/50">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about building the decentralized future through innovative blockchain solutions and sharing
              knowledge through research.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <div className="professional-card">
                <h3 className="text-2xl font-bold mb-6 text-slate-100">My Journey</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="professional-card text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
