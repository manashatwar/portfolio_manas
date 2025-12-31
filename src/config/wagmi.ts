import { cookieStorage, createStorage, http } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'


export const projectId = '071f459ee2f50a19605ae1428355d378'

export const networks = [mainnet, arbitrum]

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage
    }),
    ssr: true,
    projectId,
    networks
})

export const config = wagmiAdapter.wagmiConfig
