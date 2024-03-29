const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const img = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function script() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/styles'))
}

function compressImg(){
    return gulp.src('./src/img/**/*.*')
    .pipe(img())
    .pipe(gulp.dest('./dist/img'))
}

exports.default = gulp.parallel(styles, compressImg, script);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial:false}, gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', {ignoreInitial:false}, gulp.parallel(script))
}