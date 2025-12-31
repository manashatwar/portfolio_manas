"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"

export default function Story() {
    const container = useRef(null)
    const phrases = [
        "Every",
        "Line",
        "Tells A",
        "Story"
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                    end: "bottom bottom",
                    scrub: 1,
                }
            })

            // Each phrase line reveal
            gsap.utils.toArray(".story-line").forEach((line: any, i) => {
                gsap.fromTo(line,
                    { y: 100, rotate: 5, opacity: 0 },
                    {
                        y: 0,
                        rotate: 0,
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: line,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: 1
                        }
                    }
                )
            })

        }, container)
        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} className="min-h-screen py-24 flex flex-col justify-center items-center bg-saisei-light text-saisei-dark px-4 overflow-hidden">
            <div className="flex flex-col items-center">
                <div className="mb-12" /> {/* Spacer where text was */}

                {phrases.map((phrase, i) => (
                    <div key={i} className="overflow-hidden">
                        <h2 className="story-line text-[12vw] leading-[0.85] font-serif uppercase tracking-tight text-center origin-left">
                            {phrase}
                        </h2>
                    </div>
                ))}

                <div className="mt-24 max-w-xl text-center text-lg md:text-xl font-sans leading-relaxed opacity-80">
                    <p className="story-desc">
                        Passionate blockchain developer with expertise in <span className="text-saisei-accent">smart contract development</span>, DeFi protocols, and Web3 technologies.
                        Specialized in Ethereum ecosystem with hands-on experience in Solidity and decentralized application architecture.
                    </p>
                </div>

                <div className="mt-12">
                    <Link href="/about">
                        <button className="px-8 py-3 bg-saisei-accent text-white rounded-full uppercase tracking-widest text-xs hover:bg-saisei-bronze transition-colors duration-300">
                            About Us
                        </button>
                    </Link>
                </div>

            </div>

            <div className="hidden lg:block absolute right-[10%] top-[30%] w-[300px] h-[400px] z-[-1]">
                <Image
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop"
                    alt="Interior"
                    fill
                    className="object-cover opacity-80"
                    sizes="300px"
                />
            </div>

        </section>
    )
}
