//Dependencias
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var jsmin = require('gulp-jsmin');
var minifyejs = require('gulp-minify-ejs');
var clean = require('gulp-clean');

//Tarea default
gulp.task('default', ['nodemon']);


//Tarea jshintjs
gulp.task('lint:jshint', function() {
  return gulp.src('./public/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//Tarea lintcss
gulp.task('lint:jscs', function() {
    return gulp.src('./public/js/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});

//Tarea Browser-sync
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    files: ['views/*.ejs','public/js/*.js','public/css/*.css'],
    port: 8080
  });
});

//Tarea nodemon
gulp.task('nodemon',function(cb) {
  var started = false;
  return nodemon({
    script: './app.js'
  }).on('start', function() {
    if (!started) {
      cb();
      started = true;
    }
  });
});

//Tarea SASS
gulp.task('sass', function () {
  return gulp.src('./public/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

//Tarea JS min
gulp.task('min', function () {
  gulp.src('./public/js/*.js')
	.pipe(jsmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./public/minified'));
	gulp.src('./public/css/*.css')
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./public/minified'));
});

//Tarea EJS min
gulp.task('min:ejs', function() {
  return gulp.src('./views/*.ejs')
  .pipe(minifyejs())
  .pipe(rename({suffix:".min"}))
	.pipe(gulp.dest('./public/minified'));
})

//Tarea clean
gulp.task('clean', function () {
	return gulp.src('./public/minified/*.*', {read: false})
		.pipe(clean());
});