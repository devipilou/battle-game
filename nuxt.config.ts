// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      'nuxt-primevue'
  ],
  primevue: {
  },
  css: [
    'primevue/resources/themes/lara-light-green/theme.css',
    'primeicons/primeicons.css',
    '/node_modules/primeflex/primeflex.css'
  ]
})
