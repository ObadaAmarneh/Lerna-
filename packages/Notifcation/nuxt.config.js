import colors from 'vuetify/es5/util/colors'



export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: true,
  head: {
    titleTemplate: '%s - notification',
    title: 'notification',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: 30191, // default: 3000
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    `vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css`,
    'vue2-timepicker/dist/VueTimepicker.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/VueDateTime.js',
    {src: '~/plugins/VueDateTime.js', ssr: false},
    {src: '~/plugins/scrollBar.js'},
    {src: '~/plugins/VueTimepicker',ssr: false},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '../layout/template/module',
    '../Feature3/module'

  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:30192',
    proxy: true,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  proxy: {
    '/notification-management/': {
      target: 'https://api.notifications.agentsoncloud.com/',
      pathRewrite: { '^/notification-management/': '' },
    },

  },
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'https://api.notifications.agentsoncloud.com/'
    }]
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vue-datetime',
      'weekstart',
      'luxon',
      'vue2-perfect-scrollbar',
      'vue2-timepicker'
    ],
    vendor: ['vue-session'],
    cssSourceMap: true,
    
  }
}
