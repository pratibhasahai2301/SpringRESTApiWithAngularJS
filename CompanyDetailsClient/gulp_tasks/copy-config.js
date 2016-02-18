/**
 * This task is used to copy config folder to dist folder
 */

module.exports = function (gulp, plugins,config,path) {
    return function () {
    	console.log("Copying config");
    	return gulp.src([path.join(config.devBasePath, 'config/**/*')])
        .pipe(gulp.dest(path.join(config.buildBasePath,'config')))

    };
};