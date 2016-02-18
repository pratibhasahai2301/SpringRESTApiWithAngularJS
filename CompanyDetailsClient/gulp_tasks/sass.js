/**
* This task is used to convert .scss file to .css files
*/
'use strict';
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
module.exports = function (gulp, plugins,config,path) {
	return function () {
		console.log("compiling sass files for main.css");
		return gulp.src(path.join(config.devBasePath ,"assets/styles/main.scss"))
			.pipe(sass())
			.pipe(gulp.dest(path.join(path.join(config.devBasePath,'assets/styles/debug/')))
			.pipe(cssnano())
			.pipe(plugins.rename("main.min.css"))
			.pipe(gulp.dest(path.join(config.buildBasePath ,"assets/styles"))));
	};
};