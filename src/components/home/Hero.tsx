"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)

    // Placeholder images - using one of the user uploaded ones or a darker architectural one if available
    // Assuming generic placeholder for now
    const heroImage = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop"

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Reveal Animation
            const chars = textRef.current?.querySelectorAll(".char")
            if (chars) {
                gsap.fromTo(chars,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out", delay: 0.5 }
                )
            }

            // Parallax Effect
            gsap.to(".hero-img", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    const title = "BLOCKCHAIN"

    return (
        <div ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-saisei-dark text-saisei-light pt-20">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src={heroImage}
                    alt="Blockchain Architecture"
                    fill
                    priority
                    className="hero-img object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center mix-blend-difference">
                <p className="text-saisei-accent uppercase tracking-[0.5em] text-xs md:text-sm mb-4 md:mb-8 font-medium">
                    (Web3 • Smart Contracts • DeFi)
                </p>

                <h1 ref={textRef} className="font-serif text-[15vw] leading-[0.8] tracking-tight overflow-hidden">
                    {title.split("").map((char, i) => (
                        <span key={i} className="char inline-block">{char}</span>
                    ))}
                </h1>

                <div className="mt-8 md:mt-16 max-w-md px-6 text-sm md:text-base opacity-80 font-sans leading-relaxed">
                    <p>
                        Architecting decentralized future through secure protocols and mathematical precision.
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-10 md:left-20 flex items-center gap-4 text-xs tracking-widest uppercase opacity-60">
                <span>Scroll</span>
                <div className="w-12 h-[1px] bg-current" />
            </div>

        </div>
    )
}
