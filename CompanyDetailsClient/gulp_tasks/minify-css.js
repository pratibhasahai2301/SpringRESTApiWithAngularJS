/**
 * This gulp task minifies the css and stores it in dist/styles folder
 */


var mainBowerFiles = require('main-bower-files');
var merge = require('merge-stream');
var cssnano = require('gulp-cssnano');
module.exports = function (gulp, plugins,config,path) {
    return function () {
        console.log('minifying vendor css');
      return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.css'
        ])
        .pipe(plugins.concat('vendor.css'))
      	.pipe(gulp.dest(path.join(config.buildBasePath ,'assets/styles/debug/')))//will be created by Customer Build gulp task
       /* .pipe(plugins.rename('vendor.min.css'))
        .pipe(cssnano())*/
        .pipe(gulp.dest(path.join(config.buildBasePath , '/assets/styles')))

    };
};