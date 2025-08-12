"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Filter,
  Github,
  ExternalLink,
  Globe,
  Link,
  Smartphone,
  TrendingUp,
  FileText,
  ImageIcon,
  BookOpen,
} from "lucide-react"
import { projects, projectCategories } from "@/lib/data/projects"

const iconMap = {
  Globe,
  Link,
  Smartphone,
  TrendingUp,
  FileText,
  ImageIcon,
  BookOpen,
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [featuredOnly, setFeaturedOnly] = useState(false)

  const filterOptions = [
    { key: "all", label: "All Projects", count: projects.length },
    ...Object.entries(projectCategories).map(([key, category]) => ({
      key,
      label: category.name,
      count: category.count,
    })),
  ]

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = activeFilter === "all" || project.category === activeFilter
    const featuredMatch = !featuredOnly || project.featured
    return categoryMatch && featuredMatch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/20"
      case "Completed":
        return "text-blue-400 bg-blue-400/20"
      case "Development":
        return "text-yellow-400 bg-yellow-400/20"
      default:
        return "text-slate-400 bg-slate-400/20"
    }
  }

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient">Featured Projects</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              A showcase of innovative blockchain solutions, from decentralized applications to smart contract systems,
              each pushing the boundaries of Web3 technology.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {filterOptions.map((option) => (
                  <motion.button
                    key={option.key}
                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeFilter === option.key
                        ? "bg-white text-slate-900 shadow-lg"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                    }`}
                    onClick={() => setActiveFilter(option.key)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="hidden sm:inline">{option.label}</span>
                    <span className="sm:hidden">{option.label.split(" ")[0]}</span> ({option.count})
                  </motion.button>
                ))}
              </div>

              {/* Featured Toggle */}
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featuredOnly}
                    onChange={(e) => setFeaturedOnly(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors duration-300 ${
                      featuredOnly ? "bg-white" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-transform duration-300 transform ${
                        featuredOnly ? "translate-x-5 sm:translate-x-6 bg-slate-900" : "translate-x-0.5 bg-white"
                      } translate-y-0.5`}
                    />
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm">Featured Only</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants}>
            {filteredProjects.map((project, index) => {
              const categoryInfo = projectCategories[project.category]
              const IconComponent = iconMap[categoryInfo.icon as keyof typeof iconMap] || Globe

              return (
                <motion.div
                  key={project.id}
                  className="professional-card h-full flex flex-col group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-slate-700/20 to-slate-600/20 h-40 sm:h-48">
                    <img
                      src={project.images[0] || "/placeholder.svg?height=300&width=400"}
                      alt={project.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                      <div
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${categoryInfo.color}20` }}
                      >
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: categoryInfo.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col px-2 sm:px-0">
                    {/* Title and Description */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-2 sm:mb-3">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-400 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-800 text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="bg-slate-700 text-slate-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="bg-slate-700/50 text-slate-400 px-2 py-1 rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          {project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-slate-100 transition-colors"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Github size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>
                          )}
                          {project.links.live && (
                            <motion.a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-slate-100 transition-colors"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                            </motion.a>
                          )}
                        </div>

                        <div className="text-xs text-slate-500">
                          {new Date(project.dateCompleted).toISOString().slice(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12 sm:py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="professional-card p-6 sm:p-8 max-w-md mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-300 mb-2">No projects found</h3>
                <p className="text-slate-400 text-sm sm:text-base">Try adjusting your filters to see more projects.</p>
              </div>
            </motion.div>
          )}

          {/* View All Projects CTA */}
          {filteredProjects.length > 0 && activeFilter === "all" && !featuredOnly && (
            <motion.div
              className="text-center mt-12 sm:mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Interested in collaborating on a project?
              </p>
              <motion.a
                href="#contact"
                className="bg-white hover:bg-slate-200 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2 shadow-lg text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
