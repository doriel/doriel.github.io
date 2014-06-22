module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {
			options:{
				removeComments: true,
				collapseWhitespace: true
			},
			dist: {
				files:{
					'index.html':'src/index.html',
					'en/index.html':'src/en/index.html'
				}

			}
		},
		cssmin: {
			combine: {
				files:{
					'css/main.css': ['src/css/main.css', 'src/css/animate.css'],
					'css/font-awesome.css':'src/css/font-awesome.css'
				}

			}
		},
		uglify: {
    		options: {
      			mangle: false
    		},
    		my_target: {
      			files: {
        			'js/script.js': ['src/js/script.js']
      			}
    		}
  		},
  			

	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}