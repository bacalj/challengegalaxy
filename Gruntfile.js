var path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
    // Move CSS and JS to _nuxt folder
    // This enables the publicPath option to work
    // so the Chrome Extension can load the app from website.
    move: {
        move_css: {
            src: 'dist/*.css',
            dest: 'dist/_nuxt/'
        },
        move_js: {
            src: 'dist/*.js',
            dest: 'dist/_nuxt/'
        }
    },
    // Remove JS from chrome extension popup
    dom_munger: {
        remove_scripts: {
          options: {
            remove: 'script, link[rel="preload"]',
            append: {selector:'body',html:'<script src="../popup.js"></script>'}
          },
          src: 'dist/chrome-extension/popup/index.html',
          dest: 'dist/chrome-extension/popup/index.html'
        },
      },
    // Zip the Chrome Extension for upload to the store.
    zip: {
        'using-cwd': {
            cwd: 'dist/chrome-extension/',
            src: ['dist/chrome-extension/*'],
            dest: 'dist/chrome_extension.zip'
        }
      }
    });
    grunt.loadNpmTasks('grunt-move');
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-dom-munger');
};
