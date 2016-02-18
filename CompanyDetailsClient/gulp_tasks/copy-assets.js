/**
 * This task is used to copy asset folder to dist folder
 */

module.exports = function (gulp, plugins,config,path) {
    return function () {
    	console.log("Copying assets");
    	return gulp.src([path.join(config.devBasePath, 'assets/**/*'),'!app/assets/**/*.scss'])
        .pipe(gulp.dest(path.join(config.buildBasePath,'assets')))
    };
};