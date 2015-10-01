module.exports = function(grunt){

	grunt.initConfig({
		// Metadata
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author_name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

		// Task configuration
		concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: ['js/**/*.js', '!js/scripts.js'],
        dest: 'js/scripts.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.js.dest %>',
        dest: 'dist/js/scripts.min.js'
      }
    },
    jshint: {
      gruntfile: {
        src: 'Gruntfile.js'
      },
      source: {
        src: ['js/**/*.js']
      },
    },
    sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.scss'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}
		},
		htmlmin: {
	    dist: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {
	        'dist/index.html': 'index.html',	// dest : src
					'dist/auth.html': 'auth.html',
	      }
	    }
	  },
	  copy: {
		  assets: {
		    src: 'assets/**/*',
		    dest: 'dist/',
		  },
			gruntdeploy: {
				src: 'dist_Gruntfile.js',
				dest: 'dist/Gruntfile.js',
			},
			packagedeploy: {
				src: 'dist_package.json',
				dest: 'dist/package.json',
			}
		},
		clean: {
		  dist: {
		    src: ["dist/"]
		  }
		},
		watch: {
	    js: {
	      files: ['js/**/*.js', '!js/scripts.js'],
	      tasks: ['jshint:source', 'concat', 'uglify'],
	    },
	    style: {
	      files: ['css/**/*.scss'],
	      tasks: ['sass'],
	    },
	    html: {
	      files: '*.html',
	      tasks: ['htmlmin'],
	    },
			dist_files: {
				files: ['dist_Gruntfile.js', 'dist_package.json'],
				taks: ['copy:gruntdeploy', 'copy:packagedeploy']
			}
	  } // end of task config

	}); // end of grunt.initConfig

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Tasks
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'htmlmin', 'copy']);
	grunt.registerTask('deploy', ['concat', 'uglify', 'sass', 'htmlmin', 'copy']);

};
