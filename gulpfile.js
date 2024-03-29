const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const img = require('gulp-imagemin');

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

exports.default = gulp.parallel(styles, compressImg);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInitial:false}, gulp.parallel(styles))
}