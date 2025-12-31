"use client"

import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#F5F2EB] pt-32 pb-8 px-6 overflow-hidden relative">
      {/* Large Background Typography - Simplified SVG or Text representation */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-10 select-none">
        <span className="text-[40vw] font-serif leading-none text-[#F5F2EB]">
          M
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between gap-20">

        {/* Navigation / Links Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-4">Menu</h3>
          {['Home', 'About', 'Projects', 'Education', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'Education' ? '/blockchain' : `/${item.toLowerCase()}`}
              className="text-2xl font-serif hover:text-[#B08D74] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Contact / Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-6">Socials</h3>
            <div className="flex flex-col gap-4">
              <Link href="https://x.com/manas_hatwar" target="_blank" className="hover:text-[#B08D74] transition-colors">Twitter (X)</Link>
              <Link href="https://www.linkedin.com/in/manas-hatwar-5bb10925a/" target="_blank" className="hover:text-[#B08D74] transition-colors">LinkedIn</Link>
              <Link href="https://github.com/manashatwar" target="_blank" className="hover:text-[#B08D74] transition-colors">GitHub</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-sans uppercase tracking-widest opacity-50 mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:manashatwar1@gmail.com" className="hover:text-[#B08D74] transition-colors">manashatwar1@gmail.com</a>
              <p className="opacity-60">Open for collaborations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-sans uppercase tracking-widest opacity-40">
        <p>&copy; 2025 Manas Hatwar. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
