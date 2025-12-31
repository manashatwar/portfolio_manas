"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/blockchain" },
    { name: "Contact", href: "/contact" },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tighter uppercase relative z-50">
                    MANAS
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-50 flex items-center gap-2 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                    {isOpen ? "Close" : "Menu"}
                </button>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Bezier for premium feel
                        className="fixed inset-0 z-40 bg-[#1A1A1A] text-[#F5F2EB] flex flex-col justify-center px-6 md:px-24"
                    >
                        <nav className="flex flex-col gap-6 md:gap-10">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-baseline gap-4 text-4xl md:text-7xl font-serif font-medium hover:text-[#C4A484] transition-colors"
                                    >
                                        <span className="text-xs md:text-sm font-sans opacity-50 font-normal">0{index + 1}</span>
                                        <span className="relative">
                                            {item.name}
                                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute bottom-12 left-6 md:left-24 flex gap-8 text-sm opacity-50 font-sans"
                        >
                            <div>
                                <p className="uppercase tracking-wider mb-2">Socials</p>
                                <div className="flex gap-4">
                                    <a href="https://x.com/manas_hatwar" target="_blank" className="hover:text-white transition-colors">Twitter</a>
                                    <a href="https://www.linkedin.com/in/manas-hatwar-5bb10925a/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                                    <a href="https://github.com/manashatwar" target="_blank" className="hover:text-white transition-colors">Github</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Grid overlay for texture - optional visual flair */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </>
    )
}
