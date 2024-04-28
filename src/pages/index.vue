<script setup lang="ts">
import { createAppKit } from '@reown/appkit/vue'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { arbitrum, mainnet, hardhat } from '@reown/appkit/networks'

const runtimeConfig = useRuntimeConfig()
const networks = [mainnet, arbitrum, hardhat]

const projectId = runtimeConfig.public.walletConnectProjectId as string

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
})

createAppKit({
  projectId,
  adapters: [wagmiAdapter],
  networks,
  features: {
    swaps: false, // default to true
    onramp: false, // default to true
    analytics: true,
    email: false, // default to true
    socials: false,
    emailShowWallets: false, // default to true
    allWallets: false, // default to true
  },
  chainImages: {
    "31337": "/img/chainIcons/hardhat.svg",
    "42161": "/img/chainIcons/arbitrum.svg",
  },
})
</script>

<template>
  <w3m-button />
</template>
