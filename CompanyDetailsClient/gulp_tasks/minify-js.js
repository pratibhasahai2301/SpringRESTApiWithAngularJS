/**
 * This task minifies all the JS 
 */

var mainBowerFiles = require('main-bower-files');
var merge = require('merge-stream');
var gulpFilter = require('gulp-filter');


module.exports = function (gulp, plugins,config,path) {
    return function () {
        console.log('minifying js');
      var jsFilter = gulpFilter('**/*.js','!**/*.min.js');
      var main = gulp.src(['app/config/config.js','app/app.js','app/components/**/*.js'])
          .pipe(plugins.concat('main.js'))
          .pipe(gulp.dest(path.join(config.buildBasePath ,'scripts/debug/')))
         /* .pipe(plugins.rename('main.min.js'))
          .pipe(plugins.uglify())*/
          .pipe(gulp.dest('./dist/scripts'));

      //console.log("Main files::"+mainBowerFiles());
      var vendor =  gulp.src(mainBowerFiles())
      	  .pipe(jsFilter)
          .pipe(plugins.concat('vendor.js'))
          .pipe(gulp.dest(path.join(config.buildBasePath ,'scripts/debug/')))
         /* .pipe(plugins.rename('vendor.min.js'))
          .pipe(plugins.uglify())*/
          .pipe(gulp.dest(path.join(config.buildBasePath ,'scripts')));

      return merge(main,vendor);
    };
};