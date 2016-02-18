/**
 * This task minifies all the HTML
 */

var minifyHtml = require ('gulp-minify-html');
var merge = require('merge-stream');

module.exports = function (gulp, plugins,config,path) {
    return function () {
        console.log('minifying html');

        var index = gulp.src(path.join(config.buildBasePath ,'index.html'))
            .pipe(minifyHtml())
            .pipe(gulp.dest(config.buildBasePath));

        var views =  gulp.src('app/components/**/*.html')
            .pipe(minifyHtml())
            .pipe(gulp.dest(path.join(config.buildBasePath ,'components')));

        return merge(index,views);

    };
};