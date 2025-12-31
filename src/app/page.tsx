import Hero from "@/components/home/Hero"
import Story from "@/components/home/Story"
import ProjectGallery from "@/components/home/ProjectGallery"
import Articles from "@/components/home/Articles"

export default function Home() {
  return (
    <main className="relative bg-saisei-dark">
      <Hero />
      <Story />
      <ProjectGallery />
      <Articles />
    </main>
  )
}