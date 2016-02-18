'use strict';

/**
 * Required plugins
 */
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    fs = require('fs'),
    path = require('path'),
    argv = require('yargs').argv,
    runSequence = require("run-sequence"),
    cleaning = require('gulp-initial-cleaning');


/**
 * Config for gulp tasks
 */
var config = {
    serverPort: 9090,
    assetsPath: 'app/assets',
    taskFolder: './gulp_tasks/',
    devBasePath: 'app/',
    buildBasePath: './dist',
    defaultBuildVersion: '1.0.0',
    buildVersion: ''
};

/**
 * Clean task
 * remove dist folder before running build task
 */
cleaning({tasks: ['run'], folders: [config.buildBasePath]});

/**
 * Gulp tasks for Sass
 */
gulp.task('sass', getSassTask('sass'));

/**
 *    Gulp task for Bower & Minification
 */
gulp.task('minify-js', getMinificationTask('minify-js'));
gulp.task('minify-css', getMinificationTask('minify-css'));
gulp.task('minify-html', ['inject-resources'], getMinificationTask('minify-html'));

/**
 * task to copy assets from app to dist
 */
gulp.task('copy-assets', getCopyTask('copy-assets'));
gulp.task('copy-config', getCopyTask('copy-config'));
gulp.task('inject-resources', getCopyTask('inject-resources'));

/**
 *    Gulp tasks to run application
 */
gulp.task('connect', getRunTask('connect'));
gulp.task('open', ['connect'], getRunTask('open'));

/***
 * Will watch for changes and update dist
 */
gulp.task('watch', function () {
    console.log("inside watch");
    gulp.watch(config.devBasePath + 'assets/**/*', ['copy-assets']);//watch assets
    gulp.watch(config.devBasePath + 'config/**/*', ['copy-config']);//watch config
    gulp.watch([config.devBasePath + 'app.js', config.devBasePath + 'components/**/*.js', config.devBasePath + 'js/*.js'], ['minify-js']);//watch js
    gulp.watch([config.devBasePath + '/assets/styles/**/*.scss'], ['sass']);//watch css
    gulp.watch([config.devBasePath + 'index.html', config.devBasePath + 'components/**/templates/*.html'], ['minify-html']);//watch html
});

/***
 * Tasks to build app to dist
 */
gulp.task('build', function (callback) {
    runSequence('copy-assets',
        'copy-config',
        'sass',
        ['minify-js', 'minify-css'],
        'minify-html',
        callback);
});

//main task to trigger build process
gulp.task('run', function (callback) {
    runSequence('build',
        'watch',
        'open',
        callback);
});

/***
 * Helper functions to load tasks async
 ***/
function getRunTask(task) {
    var url = "http://localhost:";
    return require(config.taskFolder + task)(gulp, plugins, config.serverPort, url, config, path);
}
function getSassTask(task) {
    return require(config.taskFolder + task)(gulp, plugins, config, path);
}

function getCopyTask(task) {
    return require(config.taskFolder + task)(gulp, plugins, config, path);
}
function getMinificationTask(task) {
    return require(config.taskFolder + task)(gulp, plugins, config, path);
}