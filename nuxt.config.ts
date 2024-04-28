// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      walletConnectProjectId: '',
    },
  },
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
})
