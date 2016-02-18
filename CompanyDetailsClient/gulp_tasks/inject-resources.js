/**
 * Inject links to minified js and css files
 * from dist js/css file to index.html in dist folder
 * read false helps uglify newly added links ?
 * no compress happens if relative true is omitted and leading / also appears?
 */
var inject = require('gulp-inject');

module.exports = function (gulp, plugins,config,path) {
    return function () {
        console.log('inject started');

    	 return gulp.src(path.join(config.devBasePath ,'index.html'))
          .pipe(inject(gulp.src(['./dist/scripts/vendor.js',
                  './dist/scripts/main.js',
                  './dist/assets/styles/vendor.css',
                 './dist/assets/styles/main.css'
              ], {read: false}), {relative: true,ignorePath: '../dist/'}))
          .pipe(gulp.dest(config.buildBasePath));

    };
};