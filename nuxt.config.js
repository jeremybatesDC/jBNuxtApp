module.exports = {
  /*
  ** Build configuration
  */
  mode: 'spa',
  build: {
    //vendor: ['JBStats']
    extend(config) {
          config.resolve.alias['vue'] = 'vue/dist/vue.common'
      }
  },

  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  css: [
    '~/assets/core.scss'
    //,'~/css/core.css'
  ],
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  //mode: 'spa'

}
