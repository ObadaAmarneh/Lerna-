import colors from "vuetify/es5/util/colors";
module.exports = {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "I Wish",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "I wish system \n" +
          "  Designed and developed by Agent on Cloud Team =) .",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "./static/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css",
      },

      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js",
      },
    ],
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308

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
    "/notification-management/": {
      target: "https://api.notifications.agentsoncloud.com/",
      pathRewrite: { "^/notification-management/": "" },
    },
    "/consumer-management/": {
      target: "https://api.consumers.agentsoncloud.com/",
      pathRewrite: { "^/consumer-management/": "" },
    },
    '/appointment-management/': {
      target: 'https://api.clinic.management.agentsoncloud.com/',
      pathRewrite: { '^/appointment-management/': ""},
    },
    // '/inventory-management/': {
    //   target: 'http://localhost:30182/',
    //   pathRewrite: { '^/inventory-management/': '' },
    // },




    "/marketing/": {
      target: "https://api.marketing.agentsoncloud.com/",
      pathRewrite: { "^/marketing/": "" },
    },
    // marketing mock api's proxies 
    
    '/service-management/': {
      // https://odd-goat-41.app.smartmock.io
      // http://localhost:3500
      target: "https://odd-goat-41.app.smartmock.io/servicesData",
      pathRewrite: { "^/service-management/": "" },
    },

    '/consumer-management/': {
      target: "https://odd-goat-41.app.smartmock.io/consumerData",
      pathRewrite: { "^/consumer-management/": "" },
    },

    '/provider-management/': {
      target: "https://odd-goat-41.app.smartmock.io/providerData",
      pathRewrite: { "^/provider-management/": "" },
    },

    '/facilities-management/': {
      target: "https://odd-goat-41.app.smartmock.io/facilitiesData",
      pathRewrite: { "^/facilities-management/": "" },
    },

    '/items-management/': {
      target: "https://odd-goat-41.app.smartmock.io/itemsData",
      pathRewrite: { "^/items-management/": "" },
    },

    '/gallery-management/': {
      target: "https://6224b0846c0e396620444aef.mockapi.io/marketing/GalleryImages",
      pathRewrite: { "^/gallery-management/": "" },
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3adced" },

  /*
   ** Global CSS
   */
  css: ['vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css' ,   "vue2-timepicker/dist/VueTimepicker.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/vee-validate",
    "@/plugins/vue-sc", 
    { src: "~/plugins/VueDateTime.js", ssr: false },
    { src: "./plugins/VueExpandPanel.js", ssr: false },
],
  vuetify: {
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
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "../../notifications.agentsoncloud.com/module", "@nuxtjs/axios",
    '../../consumers.agentsoncloud.com/module',
    '../../facilities.agentsoncloud.com/module',
    '../../clinic.management.agentsoncloud.com/module',
  '../../inventory.agentsoncloud.com/module',
  '../../marketing.agentsoncloud.com/module',
],
  components: true,
  /*
   ** Build configuration
   */
  server: {
    port: 4500,
  },
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {treeShake: false}]
  ],
  build: {
    /*
     ** You can extend webpack config here
     */
  },
};
