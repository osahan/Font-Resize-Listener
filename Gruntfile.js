module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n\n',

    jshint: {

      ignore_warning:{
        options: {
        '-W099': true,
        },
        src: ['jQuery.fontResizeListner.js']
      },

      options: {

          globals: {
              "curly": true,
              "eqnull": true,
              "eqeqeq": true,
              "undef": true,
              "globals": {
                    "jQuery": true
                }
          }
        }
    },


    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: true
      },
      dist: {
        files: {
          'jQuery.fontResizeListner.min.js': ['jQuery.fontResizeListner.js']
        }
      }
    }


  });

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['jshint', 'uglify']);

};