
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'purecss/build/pure-min.css',
    'purecss/build/grids-responsive-min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/fontawesome'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** PWA module configuration
  ** See https://pwa.nuxtjs.org
  */
  pwa: {
    meta: {
      ogHost: 'https://beta.aicevote.com',
      ogImage: '/ogp.png',
      twitterCard: 'summary_large_image',
      twitterSite: 'https://beta.aicevote.com',
      twitterCreator: process.env.npm_package_author_name || ''
    }
  },
  /*
  ** Sitemap module configuration
  ** See https://github.com/nuxt-community/sitemap-module#sitemap-options
  */
  sitemap: {
    hostname: 'https://beta.aicevote.com'
  },
  /*
  ** Fontawesome module configuration
  ** See https://github.com/nuxt-community/fontawesome-module#module-options
  */
  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: [
        'faChartArea', 'faCheck', 'faComment',
        'faHome', 'faPalette', 'faPaperPlane',
        'faServer', 'faSignInAlt',
        'faSignOutAlt', 'faVoteYea'
      ],
      brands: ['faGithub', 'faHtml5', 'faTwitter']
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    fallback: true
  }
}
