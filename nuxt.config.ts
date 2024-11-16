// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt3-lenis',
    '@vueuse/sound/nuxt',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  googleFonts: {
    families: {
      Karla: [400, 700],
      Inter: [400, 700]
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light'
  },
  sound: {
    sounds: {
      scan: true
    }
  }
})