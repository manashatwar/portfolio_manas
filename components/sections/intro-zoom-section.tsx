"use client"

import HeroSection from "@/components/sections/hero-section"
import LaptopVisual from "@/components/ui/laptop-visual"
import ProjectsSection from "@/components/sections/projects-section"
import ArticlesSection from "@/components/sections/articles-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/layout/footer"

export default function IntroZoomSection() {
  return (
    <>
      <HeroSection />
      <LaptopVisual />
      <ProjectsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </>
  )
}