module.exports = function(grunt){
    grunt.initConfig({
        // Configurations
        concat: {
            js: {
                src: ['js/main.js', 'js/plugins.js'],
                dest: 'js/Result.js'
            },
            css: {
                src: ['css/component.css', 'css/demo.css'],
                dest: 'css/Result.css'
            }
        },
        uglify: {
            mainjs: {
                src: 'js/main.js',
                dest: 'js/main-min.js'
            },
            pluginsjs: {
                src: 'js/plugins.js',
                dest: 'js/plugins-min.js'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    grunt.registerTask('concatenateJS', ['concat:js']);
    grunt.registerTask('concatenateCSS', ['concat:css']);
    grunt.registerTask('minify-mainjs', ['uglify:mainjs']);
    grunt.registerTask('minify-pluginsjs', ['uglify:pluginsjs']);



    grunt.registerTask('AllTasks', ['concat', 'uglify']);
};