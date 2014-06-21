var mozjpeg = require('imagemin-mozjpeg');

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
					'css/main.css': ['src/css/main.css', 'src/css/animate.css','src/css/font-awesome.css']
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
  		imagemin: {                          
    		static: {                          
      			options: {                       
        			optimizationLevel: 3,
        			use: [mozjpeg()]
      			},
      			files: {                         
        			'img/skater.jpg': 'src/img/skater.jpg',
        			'img/doriel_drake.gif': 'src/img/doriel_drake.gif'
      			}
    		}
    	}	

	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
}