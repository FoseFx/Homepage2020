export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Max Baumann',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "I am Max Baumann and Software and Web Developer for many years now. " +
          "If you are interested in some of the projects I have worked on scroll down or visit my Github. " + 
          "Obviously you will not find everything I'm working on there because I like to tinker around with all kinds of technology. " +
          "Currently I study computer science in Aachen, Germany. I love Open Source and have contributed to numerous projects." },
      { 'http-equiv': 'Permissions-Policy', content: 'interest-cohort=()' }, // https://github.com/WICG/floc#opting-out-of-computation
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
