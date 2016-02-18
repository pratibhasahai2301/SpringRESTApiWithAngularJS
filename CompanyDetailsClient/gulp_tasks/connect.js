/**
 * This task is used to connect to server
 */

var connect = require('gulp-connect');

module.exports = function (gulp, plugins,serverPort,ur,config) {
    return function () {
		console.log("connecting server");
    	 return connect.server({
    	        port: serverPort,
    	        root: config.buildBasePath,
			 	fallback: config.buildBasePath+'/index.html',
    	        livereload: true
    	    });

    };
};