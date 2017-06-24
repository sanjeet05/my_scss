var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

// variables
var input = 'sass/**/*.scss';
var output = './css/';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// sass task for development
gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

// sass task for production
gulp.task('prod', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(minifyCSS()) 
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(output));
});

// Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

/*
* to run gulp for dev: gulp sass
* to run gulp for dev: gulp prod
*/
