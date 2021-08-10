'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const sassImportOnce = require('gulp-sass-import-once')
const sassPath = './assets/styles/sass/**/*.scss'

function buildStyles() {
  return gulp
    .src(sassPath)
    .pipe(sassImportOnce())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/css'))
}

gulp.task('default', () => {
  buildStyles()
  gulp.watch(sassPath, buildStyles)
})

gulp.task('build', buildStyles)
