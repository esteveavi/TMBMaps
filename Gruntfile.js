// Generated on 2014-11-25 using generator-angular 0.10.0
'use strict';
/* jshint camelcase: false */

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
    
    //Enable html5 mode in angular
    //var modRewrite = require('connect-modrewrite');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.loadNpmTasks('grunt-docular');

  // Define the configuration for all the tasks
  grunt.initConfig({

      
    // Automatically update version
    bump: {
      // grunt bump:patch
      // grunt bump:minor
      // grunt bump:major
      options: {
        files: [
          'package.json',
          'bower.json'
        ],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: [
          'package.json',
          'bower.json'
        ],
        createTag: true,
        // tagName: 'v%VERSION%',
        // tagMessage: 'Version %VERSION%',
        push: false,
        // pushTo: 'upstream',
        // gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/modules/{,*/}{,*/}{,*/}{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/modules/{,*/}{,*/}{,*/}{,*/}*.html',
          '<%= yeoman.app %>/{,*/}{,*/}{,*/}{,*/}*.json',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function(connect) {
            return [
             // modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']),
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/modules/{,*/}{,*/}{,*/}{,*/}*.js',
          '!<%= yeoman.app %>/modules/__core/lib/ext/*.js',
          '!<%= yeoman.app %>/modules/*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath: /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        // Specify the location of the Compass configuration file explicitly.
        // config
        // String form of the Compass configuration file.
        raw: 'Sass::Script::Number.precision = 10\n',
        // The path Compass will run from. Defaults to the same path as your Gruntfile.
        // basePath
        // Prepend the specified string to the output file. Useful for licensing information. Note: This only works in combination with the specify option and can conflict with sourcemap generation.
        // banner
        // Tell compass what kind of application it is integrating with. Can be stand_alone or rails.
        // app
        // The source directory where you keep your Sass stylesheets.
        sassDir: '<%= yeoman.app %>/styles',
        // The target directory where you keep your CSS stylesheets.
        cssDir: '.tmp/styles',
        // Lets you specify which files you want to compile. Useful if you don't want to compile the whole folder. Globbing supported. Ignores filenames starting with underscore.
        // specify
        // The directory where you keep your images.
        imagesDir: '<%= yeoman.app %>/images',
        // The directory where you keep your JavaScript files.
        // javascriptsDir: '<%= yeoman.app %>/scripts',
        // The directory where you keep your fonts.
        fontsDir: '<%= yeoman.app %>/fonts',
        // Use sensible defaults for your current environment. Can be: development or production
        // environment
        // CSS output mode. Can be: nested, expanded, compact, compressed.
        // outputStyle: 'compressed',
        // Make Compass asset helpers generate relative urls to assets.
        relativeAssets: true,
        // Disable line comments.
        // noLineComments
        // The path to the project when running within the web server.
        // httpPath: '',
        // The directory where the css stylesheets are kept. It is relative to the projectPath. Defaults to "stylesheets".
        // cssPath
        // The full http path to stylesheets on the web server.
        // httpStylesheetsPath
        // The directory where the sass stylesheets are kept. It is relative to the projectPath.
        // sassPath
        // The directory where the images are kept. It is relative to the projectPath.
        // imagesPath
        // The full http path to images on the web server.
        httpImagesPath: '/images',
        // The directory where generated images are kept. It is relative to the projectPath.
        generatedImagesDir: '.tmp/images/generated',
        // The full path to where generated images are kept.
        // generatedImagesPath
        // The full http path to generated images on the web server.
        httpGeneratedImagesPath: '/images/generated',
        // Add additional locations to look for sprites. The imagesPath is always the last entry in this list.
        // spriteLoadPath
        // The full path to where javascripts are kept.
        // javascriptsPath
        // The full http path to javascripts on the web server.
        // httpJavascriptsPath
        // The full path to where font files are kept.
        // fontsPath
        // The full http path to font files on the web server.
        httpFontsPath: '../fonts',
        // The relative http path to font files on the web server.
        // httpFontsDir
        // The full http path to the ad-hoc extensions folder on the web server. This is used to access compass plugins that have been installed directly to the project (e.g. through Bower) instead of globally as gems. Only Compass >=0.12.2
        // extensionsPath
        // The relative http path to the ad-hoc extensions folder on the web server. Only Compass >=0.12.2
        // extensionsDir
        // If set to false, this disables the default asset cache buster.
        assetCacheBuster: false,
        // The relative path to the folder where the sass cache files are generated.
        // cacheDir
        // Require the given Ruby library before running commands. This is used to access Compass plugins without having a project configuration file.
        // require
        // Load the framework or extensions found in the specified directory.
        // load
        // Load all the frameworks or extensions found in the specified directory.
        // loadAll
        // Makes files under the specified folder findable by Sass's @import directive.
        importPath: 'bower_components',
        // Causes the line number and file where a selector is defined to be emitted into the compiled CSS in a format that can be understood by the browser. Automatically disabled when using outputStyle: 'compressed'.
        // debugInfo
        // Quiet mode.
        // quiet
        // Show a full stacktrace on error.
        // trace
        // Allows Compass to overwrite existing files.
        // force
        // Dry Run. Tells you what it plans to do.
        // dryRun
        // Turn off colorized output.
        // boring
        // Run compass compile with bundle exec: bundle exec compass compile.
        // bundleExec
        // Remove generated files and the sass cache. Runs compass clean instead of compass compile.
        // clean
        // Runs compass watch instead of compass compile. This will use Compass' native watch command to listen for changes to Sass files and recompile your CSS on changes. While much faster than running compass compile each time you want to compile your Sass, Compass becomes a blocking task. This means that if you would like to use it in conjunction with another blocking task, such as watch, you will need to use it in conjunction with a paralleling task such as grunt-concurrent.
        // watch
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated',
          httpImagesPath: '../images',
          httpGeneratedImagesPath: '../images/generated',
          httpFontsPath: '../fonts',
          relativeAssets: false,
        }
      },
      server: {
        options: {
          relativeAssets: false,
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}{,*/}{,*/}{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}{,*/}{,*/}{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // NOT WORKING
    // TODO: concat intro and outro
    // concat: {
    //   dist: {
    //     src: [
    //       '<%= yeoman.app %>/modules/intro.js',
    //       '.tmp/concat/scripts/scripts.js',
    //       '<%= yeoman.app %>/modules/outro.js'
    //     ],
    //     dest: '.tmp/concat/scripts/scripts.js',
    //   },
    // },

    // TODO: when using API rollback to /images folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images/teleferic',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images/teleferic'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'modules/{,*/}{,*/}{,*/}{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'modules/{,*/}{,*/}{,*/}{,*/}*.html',
            'images/{,*/}{,*/}{,*/}{,*/}*.{webp}',
            'fonts/{,*/}{,*/}{,*/}{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          // TODO: when using API rollback to /images folder
          // TODO: usemin in script files for ticket logos
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: 'images/no-random/{,*/}*'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: 'json/{,*/}*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/font-awesome/',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap',
          src: '*',
          dest: '<%= yeoman.dist %>/fonts'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap',
          src: '*',
          dest: '<%= yeoman.app %>/fonts'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Unit test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    // e2e test settings
    protractor: {
      options: {
        keepAlive: true,
        configFile: 'protractor-e2e.js'
      },
      run: {}
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function(target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('docs', [
    'docular',
    'docularserver'
    // 'docular-server'
  ]);
};
