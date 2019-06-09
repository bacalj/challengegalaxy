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
    }
    });
    grunt.loadNpmTasks('grunt-move');
};
