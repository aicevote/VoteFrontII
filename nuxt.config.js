const title = 'AICEVOTE'
const description = 'A whole new form of voting'
const uri = 'https://beta.aicevote.com'
const ogImage = `${uri}/images/ogp.png`

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogType', property: 'og:type', content: 'website' },
      { hid: 'ogUrl', property: 'og:url', content: uri },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: ogImage
      },
      { property: 'og:site_name', content: title },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: description
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterSite', name: 'twitter:site', content: title },
      { hid: 'twitterUrl', name: 'twitter:url', content: uri },
      { hid: 'twitterTitle', name: 'twitter:title', content: title },
      {
        hid: 'twitterDescription',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitterImage',
        name: 'twitter:image:src',
        content: ogImage
      }
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
  ** Sitemap module configuration
  ** See https://github.com/nuxt-community/sitemap-module#sitemap-options
  */
  sitemap: {
    hostname: uri
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
