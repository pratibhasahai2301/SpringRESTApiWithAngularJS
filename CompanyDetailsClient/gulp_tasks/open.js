/**
 * This task is used to connect to server
 */

var connect = require('gulp-connect');
var open = require('gulp-open');
module.exports = function (gulp, plugins,serverPort,url,config,path) {
    return function () {
    	return gulp.src(path.join(config.buildBasePath ,'index.html'))
        .pipe(open({uri: 'http://localhost:'+ serverPort +'/'}));
    };
};