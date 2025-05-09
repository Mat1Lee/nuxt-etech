// nuxt.config.ts
export default defineNuxtConfig({

  css: ['~/assets/scss/main.scss'],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.FRONTEND_URL,
      API_URL: process.env.FRONTEND_API_URL,
    },
  },
 modules: ['@nuxtjs/i18n'],
i18n: {
  locales: [
    {
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.json'
    },
    {
      code: 'vi',
      iso: 'vi',
      name: 'Tiếng Việt',
      file: 'vi.json'
    }
  ],
  defaultLocale: 'en',
  lazy: true,
  langDir: 'locales/',
  strategy: 'no_prefix',
},
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-68931WDT9F",
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-68931WDT9F');
          `
        }
      ]
    },
  },
    ssr: false,
  nitro: {
    preset: 'static'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
});
