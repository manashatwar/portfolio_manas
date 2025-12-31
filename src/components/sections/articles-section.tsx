"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Clock, Calendar, BookOpen, TrendingUp, FileText, Users } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"

export default function ArticlesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
    <section id="articles" ref={ref} className="py-16 sm:py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-slate-900 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white">
              Research & Insights
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
              Deep analysis of blockchain security, DeFi protocols, and Web3 ecosystem developments
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div variants={itemVariants} className="mb-16 sm:mb-20 lg:mb-24">
            <div className="professional-card relative overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />

              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-slate-800/20 rounded-full blur-2xl sm:blur-3xl"></div>

              <div className="relative z-10 p-6 sm:p-8">
                <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
                  {/* Article Content */}
                  <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                      <span className="bg-slate-100 text-slate-900 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold">
                        FEATURED
                      </span>
                      <span className="text-slate-300 font-medium text-sm sm:text-base">
                        {personalInfo.mediumArticles[0].publication}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                      {personalInfo.mediumArticles[0].title}
                    </h3>

                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                      {personalInfo.mediumArticles[0].excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-4">
                      {personalInfo.mediumArticles[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/70 backdrop-blur-sm text-slate-200 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 sm:pt-8 space-y-4 sm:space-y-0">
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-slate-300">
                        <div className="flex items-center space-x-3">
                          <Calendar size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">
                            {new Date(personalInfo.mediumArticles[0].publishedDate).toISOString().slice(0, 10)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">{personalInfo.mediumArticles[0].readTime}</span>
                        </div>
                      </div>

                      <div className="flex justify-center lg:hidden">
                        <motion.a
                          href={personalInfo.mediumArticles[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Read Article</span>
                          <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Visual Stats */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-slate-700/50">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2 sm:mb-3">$1.4B</div>
                      <div className="text-slate-300 text-sm mb-4 sm:mb-6">Impact Scale</div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div className="bg-slate-300 h-2 rounded-full w-3/4"></div>
                      </div>
                      <div className="text-slate-400 text-xs mt-3">Security Analysis</div>
                    </div>
                  </div>
                </div>

                {/* Centered Read Article Button */}
                <div className="hidden lg:flex justify-center mt-6 sm:mt-8">
                  <motion.a
                    href={personalInfo.mediumArticles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Read Article</span>
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Articles Grid */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-12 text-center sm:text-left">
              More Research
            </h3>

            <div className="grid gap-6 sm:gap-8">
              {personalInfo.mediumArticles.slice(1).map((article, index) => (
                <motion.div
                  key={index}
                  className="professional-card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center p-4 sm:p-6 lg:p-8">
                    {/* Article Number */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                        {String(index + 2).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="lg:col-span-8 text-center lg:text-left">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                          <span className="text-slate-400 font-medium text-xs sm:text-sm">{article.publication}</span>
                          <span className="text-slate-600 hidden sm:inline">•</span>
                          <span className="text-slate-500 text-xs sm:text-sm">
                            {new Date(article.publishedDate).toISOString().slice(0, 10)}
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                          {article.title}
                        </h4>

                        <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{article.excerpt}</p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                          {article.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-slate-800 text-slate-400 px-2 sm:px-3 py-1 rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="lg:col-span-2 text-center lg:text-right">
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-center lg:justify-end space-x-3 text-slate-500">
                          <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
                          <span className="text-xs sm:text-sm">{article.readTime}</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end space-x-3 text-slate-500">
                          <BookOpen size={12} className="sm:w-3.5 sm:h-3.5" />
                          <span className="text-xs sm:text-sm">Research</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <motion.a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16 sm:mt-20 lg:mt-24">
            <div className="professional-card max-w-lg mx-auto text-center p-6 sm:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Follow My Research</h3>
              <p className="text-slate-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Stay updated with the latest insights on blockchain security, DeFi protocols, and Web3 innovations.
              </p>
              <motion.a
                href={personalInfo.social.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp size={16} className="sm:w-5 sm:h-5" />
                <span>Follow on Medium</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
