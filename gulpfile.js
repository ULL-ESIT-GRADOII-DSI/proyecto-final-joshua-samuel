//Dependencias

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');


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

//Tarea Browser-sync
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
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

