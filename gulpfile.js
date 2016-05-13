//Dependencias

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');



//Tarea jshint
gulp.task('lint', function() {
  return gulp.src('./public/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});