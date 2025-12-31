"use client"

import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { personalInfo } from "@/lib/data/personal-info"
import HangingIdBadge from "@/components/about/HangingIdBadge"
import { useAccount } from "wagmi"
import { useAppKit } from "@reown/appkit/react"

export default function About() {
    const containerRef = useRef(null)
    const { isConnected } = useAccount()
    const { open } = useAppKit()

    return (
        <div ref={containerRef} className="bg-saisei-dark text-saisei-light min-h-screen pt-32 pb-20 px-6">

            {/* Header */}
            <div className="max-w-6xl mx-auto mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[12vw] font-serif leading-none"
                >
                    ABOUT
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex justify-between items-start mt-8 border-t border-white/20 pt-8"
                >
                    <span className="opacity-60 font-sans uppercase tracking-[0.2em] text-sm hidden md:block">{personalInfo.location}</span>
                    <span className="opacity-60 font-sans uppercase tracking-[0.2em] text-sm text-right">{personalInfo.title}</span>
                </motion.div>
            </div>

            {/* Main Bio Content */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 mb-32">
                <div className="md:sticky md:top-32 h-fit">
                    <div className="mb-0 -mt-24 md:-mt-32 relative z-20">
                        <HangingIdBadge />
                    </div>

                    {/* Wallet Connect & CV Section */}
                    <div className="mt-8">
                        {!isConnected ? (
                            <button
                                onClick={() => open()}
                                className="group flex items-center justify-between w-full p-4 border border-saisei-accent bg-saisei-accent/10 hover:bg-saisei-accent hover:text-white transition-colors"
                            >
                                <div className="flex flex-col text-left">
                                    <span className="font-sans text-sm uppercase tracking-widest">Download CV</span>
                                    <span className="text-[10px] font-mono opacity-60 italic">Connect Wallet First</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-saisei-accent group-hover:bg-white animate-pulse" />
                            </button>
                        ) : (
                            <a
                                href="https://drive.google.com/file/d/12WTU21iAw-zn8D4_1Qhn9a3OdVWJQfnN/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between w-full p-4 border border-saisei-accent bg-saisei-accent/10 hover:bg-saisei-accent hover:text-white transition-colors"
                            >
                                <div className="flex flex-col text-left">
                                    <span className="font-sans text-sm uppercase tracking-widest">Download CV</span>
                                    <span className="text-[10px] font-mono opacity-60">PDF • 2.4 MB</span>
                                </div>
                                <Download size={16} />
                            </a>
                        )}
                    </div>
                </div>

                <div className="font-serif text-2xl md:text-4xl leading-relaxed space-y-12">
                    <p>{personalInfo.bio.split('\n\n')[0]}</p>
                    <p className="opacity-80">{personalInfo.bio.split('\n\n')[1]}</p>
                    <p className="opacity-60 text-xl md:text-2xl font-sans">{personalInfo.bio.split('\n\n')[2]}</p>
                </div>
            </div>

            {/* Stats / Info Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-24 mb-32">
                <div>
                    <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-4">Experience</h3>
                    <p className="text-6xl font-serif">{personalInfo.stats.yearsExperience}+ <span className="text-lg">Years</span></p>
                </div>
                <div>
                    <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-4">Projects</h3>
                    <p className="text-6xl font-serif">10+</p>
                </div>
                <div>
                    <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-4">Focus</h3>
                    <div className="flex flex-col gap-2">
                        {personalInfo.currentFocus.slice(0, 3).map((item, i) => (
                            <span key={i} className="text-lg opacity-80 border-b border-white/10 pb-1 w-fit">{item}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Marquee (New "Interesting" Section) */}
            <div className="full-width overflow-hidden py-12 border-y border-white/5 bg-white/5">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex whitespace-nowrap gap-12 text-6xl md:text-8xl font-serif opacity-30"
                >
                    <span>REACT.JS</span>
                    <span>•</span>
                    <span>TYPESCRIPT</span>
                    <span>•</span>
                    <span>JAVASCRIPT</span>
                    <span>•</span>
                    <span>SOLIDITY</span>
                    <span>•</span>
                    <span>ETHERS.JS</span>
                    <span>•</span>
                    <span>WEB3.JS</span>
                    <span>•</span>
                    <span>NODE.JS</span>
                    <span>•</span>
                    <span>TAILWIND</span>
                    <span>•</span>
                    <span>HARDHAT</span>
                    <span>•</span>
                    <span>FOUNDRY</span>
                    <span>•</span>
                    <span>IPFS</span>
                    <span>•</span>
                    <span>GIT</span>
                    <span>•</span>
                    <span>C++</span>
                    <span>•</span>
                    {/* Duplicate for loop */}
                    <span>REACT.JS</span>
                    <span>•</span>
                    <span>TYPESCRIPT</span>
                    <span>•</span>
                    <span>JAVASCRIPT</span>
                    <span>•</span>
                    <span>SOLIDITY</span>
                    <span>•</span>
                    <span>ETHERS.JS</span>
                    <span>•</span>
                    <span>WEB3.JS</span>
                    <span>•</span>
                    <span>NODE.JS</span>
                    <span>•</span>
                    <span>TAILWIND</span>
                    <span>•</span>
                    <span>HARDHAT</span>
                    <span>•</span>
                    <span>FOUNDRY</span>
                    <span>•</span>
                    <span>IPFS</span>
                    <span>•</span>
                    <span>GIT</span>
                    <span>•</span>
                    <span>C++</span>
                    <span>•</span>
                </motion.div>
            </div>

        </div>
    )
}
