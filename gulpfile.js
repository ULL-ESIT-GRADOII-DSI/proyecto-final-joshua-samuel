//Dependencias

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');



//Tarea jshintjs
gulp.task('lintjs', function() {
  return gulp.src('./public/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//Tarea lintcss
gulp.task('lintjscs', function() {
    return gulp.src('./public/js/*.js')
        .pipe(jscs())
        .pipe(jscs.reporter());
});