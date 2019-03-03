const pkg = require('./package')


module.exports = {
    mode: 'universal',

    generate: {
        routes: [
            '/challenges/hat-landing'
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
