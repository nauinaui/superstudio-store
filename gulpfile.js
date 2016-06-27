/* global require */

var gulp    = require('gulp'),
		rename  = require('gulp-rename'),
		less    = require('gulp-less'),
		minCSS  = require('gulp-minify-css'),
		combiner= require('stream-combiner2'),
		concat  = require('gulp-concat'),
		uglify  = require('gulp-uglify'),
		webserver = require('gulp-webserver');

gulp.task('default', function(){
	"use strict";
	gulp.watch('includes/css/less/*.less', ['CSS']);
	gulp.watch('includes/css/less/mixins/*.less', ['CSS']);
	gulp.watch('includes/scripts/modules/*.js', ['Javascript']);
});

gulp.task('webserver', function() {
	"use strict";
	gulp.src('')
		.pipe(webserver({
			host: '0.0.0.0',
			livereload: true,
			directoryListing: false,
			open: false,
			fallback: 'index.html'
		}));
});


gulp.task('Javascript', function() {
	"use strict";
	var combined = combiner.obj([
		gulp.src([
			'includes/scripts/modules/Plugins.js',
			'includes/scripts/modules/Portada.js',
			'includes/scripts/modules/Superestudio.js'
		]),
		concat('scripts.js'),
		uglify(),
		gulp.dest('includes/scripts')
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});



gulp.task('CSS', function() {
	"use strict";
	var combined = combiner.obj([
		gulp.src('includes/css/less/superestudio.less'),
		less(),
		minCSS(),
		rename('superestudio.css'),
		gulp.dest('includes/css')
	]);
	combined.on('error', console.error.bind(console));
	return combined;
});
