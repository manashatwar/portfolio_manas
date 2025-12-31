"use client"

import React, { useState } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { QrCode } from "lucide-react"
import Image from "next/image"

export default function HangingIdBadge() {
    const [isHovered, setIsHovered] = useState(false)
    const x = useMotionValue(0)

    // Physics-based rotation
    const rotate = useTransform(x, [-100, 100], [15, -15])
    const rotateSpring = useSpring(rotate, {
        damping: 15,
        stiffness: 85,
        mass: 2.0 // Even heavier for luxury feel
    })

    // Dynamic reflection position
    const reflectionX = useTransform(rotateSpring, [-15, 15], ["110%", "-10%"])

    // Subtle 3D tilt
    const hoverRotate = useSpring(isHovered ? 4 : 0, { damping: 10, stiffness: 50 })

    return (
        <div
            className="relative flex flex-col items-center group/badge"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Bronze Pivot Point */}
            <div className="relative z-30 mb-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E6D5B8] via-[#C4A484] to-[#8C6A4C] shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#8C6A4C] to-[#4A3520] shadow-inner" />
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-white/40 top-1 left-1" />
                </div>
            </div>

            {/* Drag Proxy */}
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDrag={(e, info) => x.set(info.offset.x)}
                className="absolute top-0 w-64 h-96 cursor-grab active:cursor-grabbing z-40"
                style={{ touchAction: "none" }}
            />

            {/* Rotating Container */}
            <motion.div
                style={{
                    rotate: rotateSpring,
                    rotateY: hoverRotate,
                    transformStyle: "preserve-3d"
                }}
                className="relative origin-top"
            >
                {/* Black Silk/Leather Strap */}
                <div className="w-12 h-36 mx-auto mb-0 relative overflow-hidden shadow-[4px_0_20px_rgba(0,0,0,0.4)]">
                    {/* Main Material */}
                    <div className="absolute inset-0 bg-[#0D0D0D]" />

                    {/* Subtle Leather/Silk Texture */}
                    <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] mix-blend-overlay" />

                    {/* Bronze Edge Stitching */}
                    <div className="absolute inset-y-0 left-0 w-[2px] bg-[#C4A484]/10 border-r border-[#C4A484]/5" />
                    <div className="absolute inset-y-0 right-0 w-[2px] bg-[#C4A484]/10 border-l border-[#C4A484]/5" />

                    {/* Elegant Folds */}
                    <div className="absolute inset-0 flex flex-col">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex-1 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent" />
                        ))}
                    </div>
                </div>

                {/* Bronze Hardware Connector */}
                <div className="w-16 h-10 mx-auto -mt-2 mb-1 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#E6D5B8] via-[#C4A484] to-[#8C6A4C] rounded-[2px] shadow-2xl border border-white/10" />
                    <div className="absolute inset-x-3 inset-y-2 bg-[#0D0D0D]/20 rounded-sm shadow-inner" />
                    {/* Engagement hole */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-1.5 bg-[#0D0D0D] rounded-full opacity-60" />
                </div>

                {/* ID Card Wrapper */}
                <div className="relative group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-[#C4A484]/5 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* ID Card - PORTRAIT */}
                    <div className="w-[260px] h-[400px] bg-[#0D0D0D] rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden border border-[#C4A484]/20 relative preserve-3d">

                        {/* Metallic Edge Bevel */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-[#C4A484]/30 rounded-xl z-30 pointer-events-none" />
                        <div className="absolute inset-[1px] ring-1 ring-inset ring-white/5 rounded-[11px] z-30 pointer-events-none" />

                        {/* Top Accent: Bronze Linear */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[#C4A484] to-transparent opacity-60" />

                        {/* Branding Header */}
                        <div className="pt-7 px-6 text-center">
                            <h3 className="text-[#C4A484] font-sans text-[8px] font-black tracking-[0.4em] uppercase opacity-70 mb-0.5">Portfolio Pass</h3>
                            <div className="h-[0.5px] w-12 bg-[#C4A484]/30 mx-auto" />
                        </div>

                        {/* Photo Section: Central & Elegant */}
                        <div className="mt-7 flex justify-center">
                            <div className="relative group/photo">
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#C4A484] to-[#8C6A4C] rounded-full blur-md opacity-20 group-hover/photo:opacity-40 transition-opacity" />
                                <div className="w-28 h-28 rounded-full border-[2px] border-[#C4A484]/40 p-1 relative z-10">
                                    <div className="w-full h-full rounded-full overflow-hidden border border-white/5 shadow-inner relative">
                                        <Image
                                            src="/images/manas-photo.png"
                                            alt="Manas Hatwar"
                                            fill
                                            priority
                                            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                                            sizes="112px"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Identity: UNIFIED BODOINI SERIF */}
                        <div className="mt-7 px-8 text-center">
                            <p className="text-[#C4A484] font-sans text-[7px] font-bold uppercase tracking-[0.4em] opacity-40 mb-3">Identity</p>
                            <h2 className="text-[#F5F2EB] font-serif text-[26px] font-normal tracking-tight mb-2 leading-[1.1]">
                                Manas <span className="text-[#C4A484]">Hatwar</span>
                            </h2>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <span className="h-px w-3 bg-[#C4A484]/20" />
                                <p className="text-[#C4A484] font-sans text-[9px] font-black uppercase tracking-[0.2em] leading-none opacity-80">Developer</p>
                                <span className="h-px w-3 bg-[#C4A484]/20" />
                            </div>
                        </div>

                        {/* Bottom Info & QR */}
                        <div className="absolute bottom-0 inset-x-0 p-7 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between">
                            <div className="text-left">
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-[6px] text-[#C4A484] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">Access Level</p>
                                        <p className="text-[#F5F2EB] font-mono text-[9px] font-bold tracking-widest uppercase">Admin / Web3</p>
                                    </div>
                                    <div>
                                        <p className="text-[6px] text-[#C4A484] font-bold uppercase tracking-[0.2em] opacity-30 mb-1">Issue Date</p>
                                        <p className="text-[#F5F2EB] font-mono text-[9px] uppercase">Est 2025</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group/qr">
                                <div className="absolute -inset-1.5 bg-[#C4A484]/10 blur-sm rounded-lg opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                                <div className="w-14 h-14 bg-[#F5F2EB] rounded-lg p-2.5 shadow-2xl transition-transform duration-300 group-hover/qr:scale-105 relative z-10">
                                    <QrCode className="w-full h-full text-[#0D0D0D]" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* Saisei Frosted Overlays */}
                        <motion.div
                            className="absolute inset-0 pointer-events-none z-20"
                            style={{
                                background: `linear-gradient(105deg, transparent 40%, rgba(196,164,132,0.05) 45%, rgba(196,164,132,0.1) 50%, rgba(196,164,132,0.05) 55%, transparent 60%)`,
                                backgroundSize: '250% 100%',
                                left: reflectionX
                            }}
                        />

                        {/* Material Grain */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] mix-blend-screen will-change-transform" />
                    </div>
                </div>

                {/* Ground Shadow */}
                <motion.div
                    style={{
                        scale: useTransform(rotateSpring, [-15, 15], [0.8, 0.8]),
                        opacity: useTransform(rotateSpring, [-15, 15], [0.4, 0.4]),
                        x: useTransform(rotateSpring, [-15, 15], [8, -8])
                    }}
                    className="w-40 h-8 bg-black/60 blur-2xl rounded-[100%] mt-8 mx-auto"
                />
            </motion.div>
        </div>
    )
}
