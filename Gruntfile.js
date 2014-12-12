module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        watch: {
            css : {
                files: '**/*.css',
                options: {
                    livereload: true
                }
            },
            less : {
                files: 'styles/*.less',
                tasks : ['less:kalei'],
                options: {
                    livereload: true
                }
            }
        },
        connect : {
            kalei: {
                options: {
                    hostname: 'localhost',
                    livereload: true,
                    open: true,
                    useAvailablePort: true
                }
            }
        },
        less : {
            kalei : {
                files : {
                    "css/styles.css" : "styles/styles.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task
    grunt.registerTask('default', ['less', 'connect:kalei', 'watch:less']);
};

