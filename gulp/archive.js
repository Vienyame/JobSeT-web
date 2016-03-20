'use strict';

var gulp = require('gulp');
var p = require('../package.json');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {


	gulp.task('archive', function () {
  	gulp.src([
  		options.dist + '/**/*'
		])
    .pipe($.zip(p.name + '-' + p.version+ '.zip'))
    .pipe(gulp.dest(options.deploy));
	 
	});


};