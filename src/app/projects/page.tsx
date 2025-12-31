"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
    {
        id: "tangiblefi",
        name: "TangibleFi",
        desc: "Real-World Asset aggregation and tokenization platform. Enabling an infinitely scalable ecosystem of real-world assets.",
        tech: ["RWA", "Next.js", "Solidity"],
        img: "/images/project-tangible.png",
        link: "https://tangible-fi.vercel.app/"
    },
    {
        id: "lendflow",
        name: "LendFlow",
        desc: "Next-generation decentralized lending with gamified orderbook matching and military-grade security.",
        tech: ["DeFi", "Smart Contracts", "React"],
        img: "/images/project-lendflow.png",
        link: "https://github.com/manashatwar"
    },
    {
        id: "interdrive",
        name: "InterDrive",
        desc: "Decentralized File Sharing platform leveraging IPFS and blockchain access control for secure storage.",
        tech: ["IPFS", "React", "Web3.js"],
        img: "/images/project-interdrive.png",
        link: "https://github.com/manashatwar/ciphet_file_sharing"
    },
    {
        id: "offline-attendance",
        name: "Offline Attendance DApp",
        desc: "Blockchain-powered event check-in system with decentralized attendance tracking and verification.",
        tech: ["Solidity", "React", "Ethers.js"],
        img: "/images/project-attendance.png",
        link: "https://github.com/kpj2006/tempattendance"
    }
]

export default function Projects() {
    return (
        <div className="min-h-screen pt-32 px-6 bg-saisei-dark text-saisei-light">
            <div className="max-w-6xl mx-auto mb-20">
                <h1 className="text-[10vw] font-serif leading-none mb-6">WORK</h1>
                <p className="font-sans text-xl opacity-60 ml-2">Selected projects</p>
            </div>

            <div className="grid gap-32 max-w-6xl mx-auto pb-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Image Side - Alternating Order could be cool but keeping consistent for now */}
                        <Link href={project.link} target="_blank" className={`aspect-video bg-white/5 overflow-hidden rounded-sm relative block ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </Link>

                        {/* Content Side */}
                        <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                            <div className={`flex items-baseline gap-4 mb-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                <span className="text-xs font-sans opacity-50">0{index + 1}</span>
                                <h3 className="text-4xl font-serif">{project.name}</h3>
                            </div>

                            <p className="opacity-70 mb-8 font-sans leading-relaxed text-lg">
                                {project.desc}
                            </p>

                            <div className={`flex gap-3 mb-10 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider">{t}</span>
                                ))}
                            </div>

                            <Link href={project.link} target="_blank" className="inline-block border-b border-saisei-accent pb-1 text-saisei-accent uppercase tracking-widest text-xs hover:text-white hover:border-white transition-colors">
                                View Project
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
