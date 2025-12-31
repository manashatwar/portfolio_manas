'use client'

import { wagmiAdapter, projectId } from '@/config/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

const queryClient = new QueryClient()

if (!projectId) {
    throw new Error('Project ID is not defined')
}

const metadata = {
    name: 'Manas Portfolio',
    description: 'Blockchain Developer Portfolio',
    url: 'https://actualmanasportfolio.vercel.app',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create the modal
createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, arbitrum],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
        analytics: true
    }
})

export default function Web3ModalProvider({
    children,
    cookies
}: {
    children: ReactNode
    cookies: string | null
}) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}
