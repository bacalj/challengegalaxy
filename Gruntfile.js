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
};
