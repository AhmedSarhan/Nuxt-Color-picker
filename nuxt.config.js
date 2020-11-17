export default {
  target: 'server',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ColorsUi Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A great color tool with a wide variation of colors and shades',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#fa923f',
    height: '4px',
    duration: 5000,
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-ui-colors.firebaseio.com/',
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/core-components.js', { src: '~plugins/draggable/' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // With options
    ['@nuxtjs/vuetify'],
  ],
  vuetify: {
    /* module options */
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#5E35B1',
          secondary: '#f4f4f4',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
    defaultAssets: {
      font: true,
      icons: 'md',
    },
    icons: {
      iconfont: 'md',
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-clipboard2'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
