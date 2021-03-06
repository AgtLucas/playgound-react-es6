var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var minifyify = require('minifyify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: './src/jsx/index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  // .pipe(minifyify())
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
