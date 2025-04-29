// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // static site (github pages)
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/theme.css'
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
  ],
  fonts: {
    families: [
      {
        name: 'Anek Gujarati',
        provider: 'bunny',
      },
      {
        name: 'Noto Sans',
        provider: 'google',
      },
      {
        name: 'Oleo Script',
        provider: 'google',
      },
    ],
  },
  nitro: {
    preset: 'github-pages'
  },
})