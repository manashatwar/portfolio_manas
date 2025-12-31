import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Import your image (place it in public/images/hero-intro.jpg or use the provided path)
// Use your actual image (update the path if needed)
const HERO_IMAGE = "/images/hero-intro.jpg.png"

export default function HeroIntroOverlay({ onFinish }: { onFinish: () => void }) {
  const [zoom, setZoom] = useState(1)
  const [zoomed, setZoomed] = useState(false)
  const [hidden, setHidden] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Prevent scrolling while overlay is visible
    const preventScroll = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("scroll", preventScroll, { passive: false })

    // Zoom controlled by scroll wheel
    let currentZoom = 1
    const maxZoom = 3.5
    const zoomStep = 0.08 // Slightly faster zoom

    const handleWheel = (e: WheelEvent) => {
      if (zoomed) return
      if (e.deltaY > 0) {
        currentZoom = Math.min(maxZoom, currentZoom + zoomStep)
      } else if (e.deltaY < 0) {
        currentZoom = Math.max(1, currentZoom - zoomStep)
      }
      setZoom(currentZoom)
      if (currentZoom >= maxZoom) {
        setZoomed(true)
      }
    }
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("scroll", preventScroll)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [zoomed])

  // When zoomed, fade out after animation
  useEffect(() => {
    if (zoomed) {
      // Instantly hide overlay and re-enable scroll for smooth transition
      setHidden(true)
      document.body.style.overflow = ""
      onFinish()
    }
  }, [zoomed, onFinish])

  return (
    <AnimatePresence>
      {!hidden && (
        // Fullscreen image overlay, zooms from center on scroll
        <motion.img
          src={HERO_IMAGE}
          alt="Let's Explore My Portfolio"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: zoom, opacity: zoomed ? 0 : 1 }}
          transition={{ duration: 0.09, ease: "easeInOut" }}
          style={{
            position: "fixed" as const,
            inset: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover" as const,
            objectPosition: "center",
            zIndex: 9999,
            display: "block",
            background: "#111"
          }}
          draggable={false}
        />
      )}
    </AnimatePresence>
  )
}
