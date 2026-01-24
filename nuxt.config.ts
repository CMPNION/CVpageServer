// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~~/assets/css/variables.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favico.ico' }]
    }
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    langDir: './i18n/locales',
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  }
})
