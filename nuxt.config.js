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
            '/challenges/arrow-move',
            '/challenges/walk',
            '/challenges/learn-name',
            '/challenges/jump-how-high',
            '/challenges/explore-the-atmosphere',
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
            '/extension/arrow-move',
            '/extension/walk',
            '/extension/learn-name',
            '/extension/jump-how-high',
            '/extension/explore-the-atmosphere',
            '/chrome-extension/popup',
            '/how-it-works',
            '/contact',
            '/about'
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
            { hid: 'description', name: 'description', content: pkg.description },
            { property: 'og:image', content: '/pngs/cgfb.png'}      
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
        '~/assets/globalitems.scss'
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
        '@nuxtjs/bulma',
        'vue-scrollto/nuxt',
        ['@nuxtjs/google-analytics', { id: 'UA-39984374-3' }]
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
