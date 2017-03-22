var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

gulp.task('css', function() {
    return gulp.src('dev/allStyle.css')
        .pipe(autoprefixer({browsers: ['last 5 versions']}))
        .pipe(cleanCSS())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('style/'))
        .pipe(notify('Success!'));
});

gulp.task('watch', function() {
   gulp.watch('dev/allStyle.css', ['default']);
});


gulp.task('default', ['css', 'watch']);