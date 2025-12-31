import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Bodoni_Moda, Manrope } from "next/font/google"
import Navigation from "@/components/layout/Navigation"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Loader from "@/components/shared/Loader"
import Footer from "@/components/layout/Footer"
import "./globals.css"
import { headers } from "next/headers"
import Web3ModalProvider from "@/context/web3modal"

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni"
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
})

export const metadata = {
  title: "Blockchain Portfolio | Web3 Developer & Researcher",
  description: "Professional portfolio showcasing blockchain development, smart contracts, and Web3 research",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookies = (await headers()).get('cookie')

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodoni.variable} ${manrope.variable} font-sans antialiased bg-[#F5F2EB] text-[#1A1A1A] overflow-x-hidden selection:bg-[#C4A484] selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Web3ModalProvider cookies={cookies}>
            <Loader />
            <SmoothScroll>
              <Navigation />
              <main className="relative min-h-screen">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
