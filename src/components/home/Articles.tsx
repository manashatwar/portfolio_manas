"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const articles = [
    {
        title: "The Dark Side of Liquidity: A Deep Dive into AMM-based DEX Risks",
        url: "https://medium.com/thecapital/the-dark-side-of-liquidity-a-deep-dive-into-amm-based-dex-risks-and-security-based-on-the-sok-a35a550f1bb6",
        date: "2024-02-15",
        tags: ["DeFi", "Security"]
    },
    {
        title: "Web3 Has a Metadata Problem and It Needs to Be Fixed",
        url: "https://medium.com/@manashatwar1/web3-has-a-metadata-problem-and-it-needs-to-be-fixed-7772653cb1cf",
        date: "2024-03-10",
        tags: ["Web3", "Privacy"]
    },
    {
        title: "The $1.4B Bybit Hack: Inside the Largest Crypto Heist in History",
        url: "https://medium.com/thecapital/the-1-4b-bybit-hack-inside-the-largest-crypto-heist-in-history-6aead666b4d5",
        date: "2024-04-20",
        tags: ["Analysis", "Security"]
    },
]

export default function Articles() {
    const containerRef = useRef(null)

    return (
        <section ref={containerRef} className="py-32 px-6 bg-saisei-light text-saisei-dark min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-saisei-dark/10 pb-8">
                    <h2 className="text-[10vw] md:text-8xl font-serif leading-none">
                        JOURNAL
                    </h2>
                </div>

                <div className="flex flex-col">
                    {articles.map((article, index) => (
                        <Link
                            key={index}
                            href={article.url}
                            target="_blank"
                            className="group border-b border-saisei-dark/10 py-12 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-white/40 px-4 -mx-4"
                        >
                            <div className="flex flex-col gap-2 md:w-2/3">
                                <div className="flex gap-4 text-xs font-sans uppercase tracking-widest opacity-50 mb-2">
                                    <span>0{index + 1}</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-serif group-hover:text-saisei-accent transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="text-xs border border-saisei-dark/20 px-2 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 transform translate-x-0 md:-translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full border border-saisei-dark/20 flex items-center justify-center group-hover:bg-saisei-accent group-hover:text-white group-hover:border-transparent">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="https://medium.com/@manashatwar1" target="_blank" className="inline-block border text-sm font-sans uppercase tracking-widest px-8 py-3 rounded-full hover:bg-saisei-dark hover:text-white transition-all">
                        Read All Articles
                    </Link>
                </div>
            </div>
        </section>
    )
}
