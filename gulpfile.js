const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('server', function() {
  browserSync.init({
    server: {
      port: 9000,
      baseDir: "build"
    }
  });

  gulp.watch('build/**/*').on('change', browserSync.reload);
});
/* ------------ Pug compile ------------- */
gulp.task('templates:compile', function buildHTML() {
  return gulp.src('source/**.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
});

/* ------------ Styles compile ------------- */
gulp.task('styles:compile', function () {
  return gulp.src('source/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('source/*.pug', gulp.series('templates:compile'));
  gulp.watch('source/*.scss', gulp.series('styles:compile'));
  gulp.watch('source/**/*.pug', gulp.series('templates:compile'));
  gulp.watch('source/**/*.scss', gulp.series('styles:compile'));
});