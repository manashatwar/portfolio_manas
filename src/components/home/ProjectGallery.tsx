"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "TangibleFi",
        category: "RWA / DeFi",
        desc: "Real-World Asset aggregation and tokenization platform. Enabling an infinitely scalable ecosystem.",
        image: "/images/project-tangible.png",
        link: "https://tangible-fi.vercel.app/", // Prioritizing live link
        github: "https://github.com/kpj2006/TangibleFi",
        year: "2024"
    },
    {
        title: "LendFlow",
        category: "DeFi Protocol",
        desc: "Next-generation decentralized lending with gamified orderbook matching and military-grade security.",
        image: "/images/project-lendflow.png",
        link: "#", // Placeholder until provided
        github: "https://github.com/manashatwar", // Generic fallback
        year: "2024"
    },
    {
        title: "InterDrive",
        category: "IPFS / Storage",
        desc: "Decentralized file sharing platform leveraging IPFS and blockchain access control.",
        image: "/images/project-interdrive.png",
        link: "https://github.com/manashatwar/ciphet_file_sharing",
        github: "https://github.com/manashatwar/ciphet_file_sharing",
        year: "2024"
    },
    {
        title: "Offline Attendance",
        category: "Blockchain / Solidity",
        desc: "Event check-in system with decentralized tracking and smart contract verification.",
        image: "/images/project-attendance.png",
        link: "https://github.com/kpj2006/tempattendance",
        github: "https://github.com/kpj2006/tempattendance",
        year: "2024"
    }
]

export default function ProjectGallery() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-saisei-dark text-saisei-light">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-12 left-6 md:left-12 z-10 mix-blend-difference">
                    <h2 className="text-4xl md:text-6xl font-serif">
                        Featured <br /> <span className="text-saisei-bronze">Works</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-16 pl-[20vw]">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative h-[60vh] w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-end">
                            {/* Image Container */}
                            <Link href={project.link} target="_blank" className="relative w-full h-full overflow-hidden block border border-white/5 bg-white/5 rounded-sm">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={i === 0}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 80vw, 60vw"
                                />

                                {/* Overlay Content */}
                                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-16 h-16 rounded-full bg-saisei-bronze text-white flex items-center justify-center">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </Link>

                            {/* Text Info */}
                            <div className="mt-8 flex justify-between items-end border-b border-white/20 pb-4">
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <span className="text-xs font-sans uppercase tracking-widest opacity-60">0{i + 1}</span>
                                        <span className="text-xs font-sans uppercase tracking-widest text-saisei-bronze">{project.category}</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif mb-2 group-hover:text-saisei-bronze transition-colors">{project.title}</h3>
                                    <p className="font-sans opacity-70 max-w-md text-sm md:text-base">{project.desc}</p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-sm font-sans opacity-40">{project.year}</span>
                                    {project.github && (
                                        <Link href={project.github} target="_blank" className="text-xs font-sans uppercase tracking-widest border-b border-transparent hover:border-saisei-bronze hover:text-saisei-bronze transition-colors">
                                            GitHub
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <div className="absolute bottom-12 left-12 opacity-30 text-xs font-sans uppercase tracking-widest hidden md:block">
                    Scroll to Explore
                </div>
            </div>
        </section>
    )
}
