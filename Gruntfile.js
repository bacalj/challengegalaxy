module.exports = function(grunt) {
    grunt.initConfig({
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
