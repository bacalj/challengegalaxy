const pkg = require('./package')

module.exports = {
    mode: 'universal',

    router: {
       scrollBehavior: function (to, from, savedPosition) {
            let position = false
          
            // savedPosition is only available for popstate navigations (back button)
            if (savedPosition) {
              position = savedPosition
            } else {
                position = { x: 0, y: 0 }
            }
          
            return new Promise(resolve => {
              // wait for the out transition to complete (if necessary)
              window.$nuxt.$once('triggerScroll', () => {
                // coords will be used if no selector is provided,
                // or if the selector didn't match any element.
                if (to.hash && document.querySelector(to.hash)) {
                  // scroll to anchor by returning the selector
                  position = { selector: to.hash }
                }
                resolve(position)
              })
            })
        }
      },

    generate: {
        routes: [
            '/challenges/maze',
            '/challenges/video-sensing',
            '/challenges/catch-the-egg',
            '/challenges/hat-landing',
            '/challenges/pet',
            '/challenges/platformer',
            '/challenges/label-it',
            '/challenges/reaction-time',
            '/collections/',
            '/collections/scratch-basics',
            '/collections/first-games',
            '/collections/science',
            '/extension/maze',
            '/extension/video-sensing',
            '/extension/catch-the-egg',
            '/extension/hat-landing',
            '/extension/pet',
            '/extension/platformer',
            '/extension/label-it',
            '/extension/reaction-time',
            '/chrome-extension/popup'
        ]
    },
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        link: [
            { 
                rel: 'stylesheet', 
                href:'https://use.fontawesome.com/releases/v5.7.2/css/all.css',  
                integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', 
                crossorigin:'anonymous' 
            }
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
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [,
        // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/style-resources',
        '@nuxtjs/bulma'
    ],

    styleResources:{
        scss: [
            './assets/vars/*.scss',
            './assets/abstracts/_mixins.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        publicPath: 'https://www.challengegalaxy.com/_nuxt',
        extractCSS: {
            allChunks: true
        },
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
