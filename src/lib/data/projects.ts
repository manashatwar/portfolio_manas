export interface Project {
  id: string
  name: string
  category: "defi" | "smart-contracts" | "dapps" | "nft" | "research"
  description: string
  longDescription: string
  techStack: string[]
  metrics: {
    gasOptimization?: string
    tvlManaged?: string
    transactions?: string
    users?: string
    security?: string
    [key: string]: string | undefined
  }
  links: {
    github?: string
    live?: string
    demo?: string
    article?: string
    documentation?: string
  }
  images: string[]
  status: "Live" | "Audited" | "Development" | "Beta" | "Deprecated"
  featured: boolean
  tags: string[]
  dateCompleted: string
}

export const projects: Project[] = [
  {
    id: "offline-attendance-dapp",
    name: "Offline Attendance DApp",
    category: "dapps",
    description: "Blockchain-powered event check-in system with decentralized attendance tracking",
    longDescription:
      "A decentralized attendance system built on Ethereum that allows event organizers to manage attendance in a transparent and tamper-proof manner. Users can connect their wallets to check in to events, and all attendance records are stored on the blockchain for verification and transparency.",
    techStack: ["Solidity", "React", "Ethers.js", "MetaMask", "Ethereum", "Web3"],
    metrics: {
      users: "100+",
      transactions: "500+",
      gasOptimization: "20%",
      security: "Audited",
    },
    links: {
      github: "https://github.com/kpj2006/tempattendance",
    },
    images: ["/images/Screenshot 2025-04-17 230935.png"],
    status: "Live",
    featured: true,
    tags: ["Blockchain", "Attendance", "DApp", "Ethereum", "Smart Contracts"],
    dateCompleted: "2024-01-15",
  },
  {
    id: "interdrive-file-sharing",
    name: "InterDrive - Decentralized File Sharing",
    category: "dapps",
    description: "IPFS-based decentralized file sharing platform with blockchain integration",
    longDescription:
      "InterDrive is a decentralized file sharing platform that leverages IPFS for distributed storage and blockchain technology for access control. Users can upload files, share them securely using wallet addresses, and maintain complete control over their data without relying on centralized servers.",
    techStack: ["React", "IPFS", "Ethereum", "Solidity", "Web3.js", "Node.js"],
    metrics: {
      users: "200+",
      files: "1K+",
      storage: "10GB+",
      security: "Decentralized",
    },
    links: {
      github: "https://github.com/manashatwar/ciphet_file_sharing",
    },
    images: ["/images/Screenshot 2025-03-28 144817.png"],
    status: "Live",
    featured: true,
    tags: ["IPFS", "File Sharing", "Decentralized Storage", "Web3", "Blockchain"],
    dateCompleted: "2024-02-20",
  },
  {
    id: "dappcord-discord-dapp",
    name: "Dappcord - Web3 Discord Clone",
    category: "dapps",
    description: "Decentralized Discord-like chat application with wallet-based authentication",
    longDescription:
      "Dappcord is a Web3 version of Discord that uses blockchain technology for user authentication and channel access control. Users connect their wallets to join channels, ensuring a decentralized and secure communication platform where access is controlled by smart contracts rather than centralized servers.",
    techStack: ["React", "Solidity", "Ethers.js", "Socket.io", "Node.js", "MetaMask"],
    metrics: {
      users: "150+",
      channels: "25+",
      messages: "5K+",
      security: "Wallet-based Auth",
    },
    links: {
      github: "https://github.com/manashatwar/discord-dapp",
    },
    images: ["/images/Screenshot 2025-06-09 230737.png"],
    status: "Live",
    featured: true,
    tags: ["Discord Clone", "Web3", "Chat DApp", "Smart Contracts", "Communication"],
    dateCompleted: "2024-03-10",
  },
]

export const projectCategories = {
  defi: {
    name: "DeFi Projects",
    icon: "TrendingUp",
    color: "#00FFFF",
    count: projects.filter((p) => p.category === "defi").length,
  },
  "smart-contracts": {
    name: "Smart Contracts",
    icon: "FileText",
    color: "#007FFF",
    count: projects.filter((p) => p.category === "smart-contracts").length,
  },
  dapps: {
    name: "dApps & Frontend",
    icon: "Globe",
    color: "#4F46E5",
    count: projects.filter((p) => p.category === "dapps").length,
  },
  nft: {
    name: "NFT & Gaming",
    icon: "Gamepad2",
    color: "#7C3AED",
    count: projects.filter((p) => p.category === "nft").length,
  },
  research: {
    name: "Research",
    icon: "BookOpen",
    color: "#059669",
    count: projects.filter((p) => p.category === "research").length,
  },
}